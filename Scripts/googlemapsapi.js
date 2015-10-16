function initialize() {
    var mapCanvas = document.getElementById('map');
    var myLatLng = { lat: 36.0956, lng: -80.0826 };
    var mapOptions = {
        center: myLatLng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '/"Ah... Life in the Piedmont is grand."/'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);