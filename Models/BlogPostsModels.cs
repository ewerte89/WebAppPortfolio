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
            Comments = new HashSet<Comment>();
            Tags = new HashSet<Tag>();
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
        public virtual ICollection<Tag> Tags { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }

    public class Comment
    {
        public int Id { get; set; }
        [AllowHtml]
        [Required]
        public string Message { get; set; }
        public string Username { get; set; }
        public DateTimeOffset DatePosted { get; set; }
        public DateTimeOffset? Edited { get; set; }
        public virtual BlogPosts BlogPosts { get; set; }
        public int? ParentId { get; set; }

        [ForeignKey("ParentId")]
        public virtual ICollection<Comment> Children { get; set; }
        public string ParentComment { get; internal set; }
    }

    public class Tag
    {
        [Key]
        [Required]
        public string Name { get; set; }
        public string Slug { get; set; }
        public List<Tag> Tags { get; set; }
        public string TagsString
        {
            get
            {
                var tags = Tags.Select(tg => tg.Name).ToArray();
                var res = string.Join(",", tags);
                return res;
            }
            set
            {
                var tags = value.Split(',');
                Tags = new List<Tag>();
                foreach (var tag in tags)
                    Tags.Add(new Tag { Name = tag });
            }
        }
        public virtual BlogPosts BlogPosts { get; set; }
    }
}
