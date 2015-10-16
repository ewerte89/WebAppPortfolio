using System.ComponentModel.DataAnnotations;

namespace WebAppPortfolio.Models
{
    public class Contact
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Message { get; set; }
    }
}