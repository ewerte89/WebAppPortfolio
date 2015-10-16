using System.Configuration;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using WebAppPortfolio.Models;

namespace WebAppPortfolio.Controllers
{
    [RequireHttps]
    public class ContactController : Controller
    {
        // GET: ContactViewModel
        public ActionResult Contact()
        {
            ViewBag.MessageSent = TempData["MessageSent"];
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Contact(Contact contactForm)
        {
            if (!ModelState.IsValid) return View(contactForm);
            var emailer = new EmailService();

            var mail = new IdentityMessage
            {
                Subject = contactForm.Subject,
                Destination = ConfigurationManager.AppSettings["ContactEmail"],
                Body = "You have received a message from " + contactForm.Name + "at email: " + contactForm.Email + ". The Message is as follows:" + contactForm.Message
            };
            emailer.SendAsync(mail);

            TempData["MessageSent"] = "Your messages was sent successfully!";

            return RedirectToAction("Contact");
        }
    }
}