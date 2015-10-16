using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebAppPortfolio.Startup))]
namespace WebAppPortfolio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
