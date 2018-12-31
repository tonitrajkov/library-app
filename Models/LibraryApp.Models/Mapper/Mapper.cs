using LibraryApp.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryApp.Models.Mapper
{
    public static class Mapper
    {
        #region ToModel

        public static BookModel ToModel(this Book book)
        {
            return new BookModel
            {
                Id = book.Id,
                Author = book.Author,
                Genre = book.Genre,
                ImageUrl = book.ImageUrl,
                OriginalTitle = book.OriginalTitle,
                PagesNum = book.PagesNum,
                PublishingHouse = book.PublishingHouse,
                Rating = book.Rating,
                Title = book.Title,
                Description = book.Description
            };
        }

        #endregion


        #region ToDomain

        public static Book ToDomain(this BookModel model)
        {
            return new Book
            {
                Id = model.Id,
                Author = model.Author,
                Genre = model.Genre,
                ImageUrl = model.ImageUrl,
                OriginalTitle = model.OriginalTitle,
                PagesNum = model.PagesNum,
                PublishingHouse = model.PublishingHouse,
                Rating = model.Rating,
                Title = model.Title,
                Description = model.Description
            };
        }

        #endregion
    }
}
