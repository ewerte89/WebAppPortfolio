using System.Web.Mvc;

namespace WebAppPortfolio.Controllers
{
    [RequireHttps]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Portfolio()
        {
            ViewBag.Message = "Your portfolio page.";

            return View();
        }

        public ActionResult Résumé()
        {
            ViewBag.Message = "Your résumé page.";

            return View();
        }
    }
}