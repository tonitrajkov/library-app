using System;
using System.Collections.Generic;
using System.Linq;

using LibraryApp.Domain;
using LibraryApp.Models;
using LibraryApp.Models.Mapper;
using LibraryApp.Services.Interfaces;
using LibraryApp.Common.Exceptions;
using LibraryApp.Data.Interfaces;

namespace LibraryApp.Services
{

    public class BookService : IBookService
    {
        #region Declaration & Ctor

        private static List<Book> _books;
        private readonly IRepository<Book> _bookRepository;
        private readonly IRepository<Author> _authorRepository;
        private readonly IRepository<Genre> _genreRepository;

        public BookService(
            IRepository<Book> bookRepository,
            IRepository<Author> authorRepository,
            IRepository<Genre> genreRepository
            )
        {
            _bookRepository = bookRepository;
            _authorRepository = authorRepository;
            _genreRepository = genreRepository;

            _books = new List<Book>
            {
                   new Book {
                    Id = 1,
                   OriginalTitle = "The Nightingale",
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
                   PublishingHouse = "Sakam Knigi",
                   PagesNum = 367,
                   Rating = 3.86,
                   ImageUrl = "http://www.kniga.mk/media/catalog/product/cache/3/image/265x265/17f82f742ffe127f42dca9de82fb58b1/n/i/nikogas_ne_se_znae.jpg",
                   Title = "Никогаш не се знае"
                },
                new Book {
                    Id = 3,
                   OriginalTitle = "And The Mountains Echoed",
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
            book.CreatedOn = DateTime.Now;

            if (model.Authors.Any())
            {
                book.BookAuthors = new List<BookAuthor>();
                foreach (var authorItem in model.Authors)
                {
                    var author = _authorRepository.GetById(authorItem.Id);
                    var bookAuthor = new BookAuthor
                    {
                        Book = book,
                        Author = author
                    };
                    book.BookAuthors.Add(bookAuthor);
                }
            }

            if (model.Genres.Any())
            {
                book.BookGenres = new List<BookGenre>();
                foreach (var genreItem in model.Genres)
                {
                    var genre = _genreRepository.GetById(genreItem.Id);
                    var bookGenre = new BookGenre
                    {
                        Book = book,
                        Genre = genre
                    };
                    book.BookGenres.Add(bookGenre);
                }
            }

            _bookRepository.Create(book);
        }

        public void UpdateBook(BookModel model)
        {
            var book = _bookRepository.GetById(model.Id);
            if (book == null)
                throw new LibraryObjectNullException("Книгата не постои");

            book.Title = model.Title;
            book.OriginalTitle = model.OriginalTitle;
            book.PagesNum = model.PagesNum;
            book.PublishingHouse = model.PublishingHouse;
            book.Rating = model.Rating;
            book.ImageUrl = model.ImageUrl;
            book.Language = model.Language;
            book.ISBN = model.Isbn;

            if (model.Authors.Any())
            {
                book.BookAuthors.Clear();
                foreach (var authorItem in model.Authors)
                {
                    var author = _authorRepository.GetById(authorItem.Id);
                    var bookAuthor = new BookAuthor
                    {
                        Book = book,
                        Author = author
                    };
                    book.BookAuthors.Add(bookAuthor);
                }
            }

            if (model.Genres.Any())
            {
                book.BookGenres.Clear();
                foreach (var genreItem in model.Genres)
                {
                    var genre = _genreRepository.GetById(genreItem.Id);
                    var bookGenre = new BookGenre
                    {
                        Book = book,
                        Genre = genre
                    };
                    book.BookGenres.Add(bookGenre);
                }
            }

            _bookRepository.Update(book);
        }

        public void DeleteBookById(int bookId)
        {
            var book = _bookRepository.GetById(bookId);
            if (book == null)
                throw new LibraryObjectNullException("Книгата не постои");

            _bookRepository.Delete(book);
        }

        public BookModel GetBookById(int bookId)
        {
            var book = _bookRepository.GetById(bookId);
            if (book == null)
                throw new LibraryObjectNullException("Книгата не постои");

            return book.ToModel();
        }

        public List<BookModel> LoadBooks()
        {
            return _bookRepository.GetAll()
                    .Select(b => b.ToModel()).ToList();
        }
    }
}
