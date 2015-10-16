using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WebAppPortfolio
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
               name: "Slug",
               url: "BlogPosts/{slug}",
               defaults: new { controller = "BlogPosts", action = "BlogPostDetails", slug = UrlParameter.Optional }
         );

            routes.MapRoute(
               name: "userlogout",
               url: "Account/Logout",
               defaults: new { controller = "Account", action = "LogOff" }
       );
        }
    }
}
