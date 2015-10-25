using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web.Mvc;

namespace WebAppPortfolio.Models
{
    public class BlogPosts
    {
        public BlogPosts()
        {
            this.Comments = new HashSet<Comment>();
        }

        public int Id { get; set; }
        public DateTimeOffset Created { get; set; }
        public DateTimeOffset? Updated { get; set; }
        [AllowHtml]
        [Required]
        public string Title { get; set; }
        public string Slug { get; set; }
        [Required]
        public string Category { get; set; }
        [AllowHtml]
        [Required]
        public string Body { get; set; }
        public string MediaURL { get; set; }
        public bool Published { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }

    public class Comment
    {
        public int Id { get; set; }
        [AllowHtml]
        [Required]
        public int PostId { get; set; }
        public string Message { get; set; }
        public string Username { get; set; }
        public DateTimeOffset DatePosted { get; set; }
        public DateTimeOffset? Edited { get; set; }
        public virtual BlogPosts BlogPosts { get; set; }
        public virtual ApplicationUser Author { get; set; }
        //public int? ParentId { get; set; }
        //[ForeignKey("ParentId")]
        //public virtual ICollection<Comment> Children { get; set; }
        //public string ParentComment { get; internal set; }
    }
}
