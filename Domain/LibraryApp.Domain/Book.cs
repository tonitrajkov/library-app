using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryApp.Domain
{
    public class Book
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
   
        public string ISBN { get; set; }

        [Required]
        [MaxLength(500)]
        public string Title { get; set; }

        public string OriginalTitle { get; set; }

        public string Description { get; set; }

        public string PublishingHouse { get; set; }

        public int PagesNum { get; set; }

        public double Rating { get; set; }

        public string ImageUrl { get; set; }

        public string Language { get; set; }

        public DateTime CreatedOn { get; set; }

        public virtual ICollection<BookAuthor> BookAuthors { get; set; }

        public virtual ICollection<BookGenre> BookGenres { get; set; }
    }
}
