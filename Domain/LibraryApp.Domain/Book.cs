using System;

namespace LibraryApp.Domain
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string OriginalTitle { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }
        public string PublishingHouse { get; set; }
        public int PagesNum { get; set; }
        public double Rating { get; set; }
        public string ImageUrl { get; set; }
    }
}
