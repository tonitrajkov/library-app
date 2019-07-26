using System.Collections.Generic;

namespace LibraryApp.Models
{
    public class BookModel
    {
        public int Id { get; set; }

        public string Isbn { get; set; }

        public string Title { get; set; }

        public string OriginalTitle { get; set; }

        public string Description { get; set; }

        public List<AuthorModel> Authors { get; set; }

        public List<GenreModel> Genres { get; set; }

        public string PublishingHouse { get; set; }

        public int PagesNum { get; set; }

        public double Rating { get; set; }

        public string ImageUrl { get; set; }

        public string Language { get; set; }
    }
}
