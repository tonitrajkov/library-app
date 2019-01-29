using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryApp.Domain
{
    public class Author
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Firstname { get; set; }

        [Required]
        [MaxLength(250)]
        public string Lastname { get; set; }
        
        public string Bio { get; set; }
        
        public string Avatar { get; set; }
    }
}
