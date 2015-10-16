
var comment = function (id, message, username, date) {
    this.id = id;
    this.message = message;
    this.username = username;
    this.date = date;
    this.comments = ko.observableArray([]);

    this.addComment = function (context) {
        var comment = $('input[name="comment"]', context).val();
        if (comment.length > 0) {
            $.connection.boardHub.server.addComment(this.id, comment, vm.username())
            .done(function () {
                $('input[name="comment"]', context).val('');
            });
        }
    };
}

//var comment = function (id, message, username, date) {
//    this.id = id;
//    this.message = message;
//    this.username = username;
//    this.date = date;
//}

var vm = {
    comments: ko.observableArray([]),
    notifications: ko.observableArray([]),
    username: ko.observable(),
    signedIn: ko.observable(false),
    signIn: function () {
        vm.username($('#username').val());
        vm.signedIn(true);
    },
    writeComment: function () {
        $.connection.boardHub.server.writeComment(vm.username(), $('#message').val()).done(function () {
            $('#message').val('');
        });
    },
}

ko.applyBindings(vm);

function loadComments() {
    $.get('/api/comments', function (data) {
        var commentsArray = [];
        $.each(data, function (i, c) {
            var newComment = new comment(c.Id, c.Message, c.Username, c.DatePosted);
            $.each(p.Comments, function (j, c) {
                var newComment = new comment(c.Id, c.Message, c.Username, c.DatePosted);
                newComment.comments.push(newComment);
            });

            vm.comments.push(newComment);
        });
    });
}

$(function () {
    var hub = $.connection.boardHub;
    $.connection.hub.start().done(function () {
        loadComments(); // Load comments when connected to hub
    });

    // Hub calls this after a new comment has been added
    hub.client.receivedNewComment = function (id, username, message, date) {
        var newComment = new comment(id, message, username, date);
        vm.comments.unshift(newComment);

        // If another user added a new comment, add it to the activity summary
        if (username !== vm.username()) {
            vm.notifications.unshift(username + ' has added a new comment.');
        }
    };

    // Hub calls this after a new comment has been added
    hub.client.receivedNewComment = function (parentCommentId, commentId, message, username, date) {
        // Find the comment object in the observable array of comments
        var commentFilter = $.grep(vm.comments(), function (p) {
            return c.id === parentCommentId;
        });
        var thisComment = commentFilter[0]; //$.grep returns an array, we just want the first object

        var thisComment = new comment(commentId, message, username, date);
        thisComment.comments.push(thisComment);

        if (thisComment.username === vm.username() && thisComment.username !== vm.username()) {
            vm.notifications.unshift(username + ' has commented on your comment.');
        }
    };
});