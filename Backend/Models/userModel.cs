using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OhioHealthAssessment.Models
{
    public class UserModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        [Range(2019, 2024, ErrorMessage = "Year of Joining must be within the last 5 years.")]
        public int YearOfJoining { get; set; }
    }
}

