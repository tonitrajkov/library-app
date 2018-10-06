using System;

namespace LibraryApp.Models
{
    public class BookModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string OriginalTitle { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }
        public string PublishingHouse { get; set; }
        public int PagesNum { get; set; }
        public int Rating { get; set; }
        public string ImageUrl { get; set; }
    }
}
