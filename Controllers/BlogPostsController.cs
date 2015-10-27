using System;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using PagedList;
using WebAppPortfolio.Models;

namespace WebAppPortfolio.Controllers  
{
    [RequireHttps]
    public class BlogPostsController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // ==============================================
        //  BLOG INDEX VIEW W/ SEARCH & PAGING
        // ============================================== 

        // GET: BlogPosts with Paging
        public ActionResult BlogIndex(int? page, string searchTerm)
        {

            var blogList = from str in db.BlogPosts
                           select str;

            if (searchTerm != null)
            {
                if (!String.IsNullOrWhiteSpace(searchTerm))
                {
                    blogList = blogList.Where(s => s.Title.Contains(searchTerm) ||
                        s.Body.Contains(searchTerm) ||
                        s.Comments.Any(c => c.Message.Contains(searchTerm)) ||
                        s.Category.Contains(searchTerm));
                }
            }

            int pageSize = 3;

            int pageNumber = (page ?? 1);

            return View(model: blogList.OrderByDescending(p => p.Created).ToPagedList(pageNumber, pageSize));
        }

        // ==============================================
        //  BLOG SIDEBAR WIDGET VIEW
        // ============================================== 

        //GET: SidebarWidget
        public ActionResult BlogSidebarWidget()
        {
            var recent = db.BlogPosts.OrderBy(p => p.Created);
            return PartialView("~/Views/BlogPosts/BlogWidgets/_BlogSidebar.cshtml", recent);
        }

        // ==============================================
        //  BLOG FOOTER FEED VIEW
        // ============================================== 

        //GET: FooterFeed
        public ActionResult BlogFooterFeed()
        {
            var recent = db.BlogPosts.OrderBy(p => p.Created);
            return PartialView("~/Views/BlogPosts/BlogWidgets/_BlogFooterFeed.cshtml", recent);
        }

        // ==============================================
        //  PHOTO FOOTER FEED VIEW
        // ============================================== 

        //GET: FooterFeed
        public ActionResult PhotoFooterFeed()
        {
            return PartialView("~/Views/Shared/_PhotoFooterFeed.cshtml");
        }


        // ==============================================
        //  BLOG POST DETAILS VIEW
        // ============================================== 

        // GET: BlogPosts/Details/{slug}
        public ActionResult BlogPostDetails(string slug)
        {
            if (String.IsNullOrWhiteSpace(slug))
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var blogPost = db.BlogPosts.Include(model => model.Comments).FirstOrDefault(model => model.Slug == slug);
            if (slug == null)
            {
                return HttpNotFound("Error");
            }
            return View(blogPost);
        }

        // ==============================================
        //  BLOG ADMIN VIEW
        // ============================================== 

        // GET: BlogPosts/Admin
        [Authorize(Roles = "Admin")]
        public ActionResult BlogAdmin()
        {
            return View(db.BlogPosts.ToList());
        }

        // ==============================================
        //  BLOG POST CREATE VIEW
        // ============================================== 

        // GET: BlogPosts/Create
        public ActionResult BlogPostCreate()
        {
            return View();
        }

        // POST: BlogPosts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult BlogPostCreate([Bind(Include = "Id,Created,Updated,Title,Slug,Body,Category,MediaURL,Published")] BlogPosts blogPost, HttpPostedFileBase imageFile)
        {
            if (imageFile != null && imageFile.ContentLength > 0)
            {
                //check the file name to make sure it's an image
                var extension = Path.GetExtension(imageFile.FileName);
                if (extension != null)
                {
                    var ext = extension.ToLower();

                    if (ext != ".png" && ext != ".jpg" && ext != ".jpeg" && ext != ".gif" && ext != ".bmp")
                        ModelState.AddModelError("image", "Invalid file format extension detected. The following formats are valid: .png .jpg .jpeg .gif .bmp");
                }
            }

            if (ModelState.IsValid)
            {
                if (imageFile != null)
                {
                    //relative server path
                    var filePath = "/Uploads/";
                    //path on physical drive on server
                    var absPath = Server.MapPath("~" + filePath);
                    //media URL for relative path
                    blogPost.MediaURL = filePath + imageFile.FileName;
                    //save image
                    imageFile.SaveAs(Path.Combine(absPath, imageFile.FileName));
                }

                var slug = StringUtilities.UrlFriendly(blogPost.Title);

                if (String.IsNullOrWhiteSpace(slug))
                {
                    ModelState.AddModelError("Title", "Invalid title.");
                    return View(blogPost);
                }
                if (db.BlogPosts.Any(p => p.Slug == slug))
                {
                    ModelState.AddModelError("Title", "The title must be unique.");
                    return View(blogPost);
                }
                else
                {
                    blogPost.Created = DateTimeOffset.Now;
                    blogPost.Slug = slug;

                    db.BlogPosts.Add(blogPost);
                    db.SaveChanges();
                    return RedirectToAction("BlogIndex");
                }
            }
            return View(blogPost);
        }


        // ==============================================
        //  BLOG POST EDIT VIEW
        // ============================================== 

        // GET: BlogPosts/Edit/5
        public ActionResult BlogPostEdit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BlogPosts blogPost = db.BlogPosts.Find(id);
            if (blogPost == null)
            {
                return HttpNotFound();
            }
            return View(blogPost);
        }

        // POST: BlogPosts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult BlogPostEdit([Bind(Include = "Id,Created,Updated,Title,Slug,Category,Body,MediaURL,Published")] BlogPosts blogPost)
        {
            if (ModelState.IsValid)
            {
                db.Entry(blogPost).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("BlogIndex");
            }
            return View(blogPost);
        }

        // ==============================================
        //  BLOG POST DELETE VIEW
        // ============================================== 

        // GET: BlogPosts/Delete/5
        public ActionResult BlogPostDelete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BlogPosts blogPost = db.BlogPosts.Find(id);
            if (blogPost == null)
            {
                return HttpNotFound();
            }
            return View(blogPost);
        }

        // POST: BlogPosts/Delete/5
        [HttpPost, ActionName("BlogPostDelete")]
        [ValidateAntiForgeryToken]
        public ActionResult BlogPostDeleteConfirmed(int id)
        {
            BlogPosts blogPost = db.BlogPosts.Find(id);
            db.BlogPosts.Remove(blogPost);
            db.SaveChanges();
            return RedirectToAction("BlogAdmin");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        // ==============================================
        //  COMMENT CREATE VIEW
        // ============================================== 

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CreateComment([Bind(Include = "PostId,Message,Username,DatePosted")]Comment comment, string Slug)
        {
            var post = db.BlogPosts.Find(comment.PostId);
            if (post == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            if (ModelState.IsValid)
            {
                comment.Username = User.Identity.GetUserName();
                comment.DatePosted = DateTimeOffset.Now;
                db.Comments.Add(comment);
                db.SaveChanges();
            }

            return RedirectToAction("BlogPostDetails", new { slug = post.Slug });
        }

        // ==============================================
        //  COMMENT EDIT VIEW
        // ============================================== 

        //GET Comments/Edit
        public ActionResult _EditComment(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        // POST: Blogs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult _EditComment([Bind(Include = "Id,PostId,Message,Username,DatePosted")] Comment comment, string Slug)
        {
            if (ModelState.IsValid)
            {
                var post = db.BlogPosts.Find(comment.PostId);
                comment.Edited = DateTimeOffset.Now;

                db.Entry(comment).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("BlogPostDetails", new { slug = post.Slug });
            }
            return View(comment);
        }

        // ==============================================
        //  COMMENT DELETE VIEW
        // ============================================== 

        public ActionResult _DeleteComment(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        [HttpPost, ActionName("_DeleteComment")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteCommentConfirmed(int id, string Slug)
        {
            Comment comment = db.Comments.Find(id);
            var post = db.BlogPosts.Find(comment.PostId);
            db.Comments.Remove(comment);
            db.SaveChanges();

            return RedirectToAction("BlogPostDetails", new { slug = post.Slug });
        }
    }
}
 