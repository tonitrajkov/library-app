using System;
using System.Collections.Generic;
using System.Linq;

using LibraryApp.Domain;
using LibraryApp.Models;
using LibraryApp.Models.Mapper;
using LibraryApp.Services.Interfaces;
using LibraryApp.Common.Exceptions;

namespace LibraryApp.Services
{

    public class BookService : IBookService
    {
        #region Declaration & Ctor

        private static List<Book> _books;

        public BookService()
        {
            _books = new List<Book>
            {
                   new Book {
                    Id = 1,
                   OriginalTitle = "The Nightingale",
                   Author = "Kristin Hannah",
                   Genre = "drama",
                   PublishingHouse = "Sakam Knigi",
                   PagesNum = 415,
                   Rating = 4.56,
                   ImageUrl =  "http://sakamknigi.mk/wp-content/uploads/2015/09/11.jpg",
                   Title = "Славејот",
                   Description = "Test description for Slavejot"
                },
                 new Book {
                    Id = 2,
                   OriginalTitle = "Never Knowing",
                   Author = "Chevy Stevens",
                   Genre = "mistery",
                   PublishingHouse = "Sakam Knigi",
                   PagesNum = 367,
                   Rating = 3.86,
                   ImageUrl = "http://www.kniga.mk/media/catalog/product/cache/3/image/265x265/17f82f742ffe127f42dca9de82fb58b1/n/i/nikogas_ne_se_znae.jpg",
                   Title = "Никогаш не се знае"
                },
                new Book {
                    Id = 3,
                   OriginalTitle = "And The Mountains Echoed",
                   Author = "Khaled Hosseini",
                   Genre = "fiction",
                   PublishingHouse = "Matica",
                   PagesNum = 393,
                   Rating = 4.04,
                   ImageUrl = "http://sakamknigi.mk/portal/media/k2/items/cache/a4e782ff58c2efaa0c9218e717493fa6_S.jpg?t=-62169984000",
                   Title = "И планините одекнаа"
                }
            };
        }

        #endregion

        public void AddBook(BookModel model)
        {
            var book = model.ToDomain();
            book.Id = GetNextId();

            _books.Add(book);
        }

        public void UpdateBook(BookModel model)
        {
            var book = _books.FirstOrDefault(b => b.Id == model.Id);
            if (book != null)
            {
                book.Title = model.Title;
                book.OriginalTitle = model.Title;
                book.PagesNum = model.PagesNum;
                book.PublishingHouse = model.PublishingHouse;
                book.Rating = model.Rating;
                book.ImageUrl = model.ImageUrl;
            }
        }

        public void DeleteBookById(int bookId)
        {
            var book = _books.FirstOrDefault(b => b.Id == bookId);
            if (book != null)
            {
                _books.Remove(book);
            }
        }

        public BookModel GetBookById(int bookId)
        {
            var book = _books.FirstOrDefault(b => b.Id == bookId);
            if (book == null)
                throw new ApplicationException("Book does not exist");

            return book.ToModel();
        }

        public List<BookModel> LoadBooks()
        {
            return _books.Select(b => b.ToModel()).ToList();
        }

        private int GetNextId()
        {
            var maxId = _books.OrderByDescending(b => b.Id)
                    .Select(b => b.Id).FirstOrDefault();

            return maxId + 1;
        }
    }
}
