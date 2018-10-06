using LibraryApp.Domain;
using LibraryApp.Models;
using LibraryApp.Models.Mapper;
using LibraryApp.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LibraryApp.Services
{

    public class BookService : IBookService
    {
        private static List<Book> _books;

        public BookService()
        {
            _books = new List<Book>
            {
                new Book {
                }
            };
        }

        public void AddBook(BookModel model)
        {
            var book = model.ToDomain();
            _books.Add(book);
        }

        public void UpdateBook(BookModel model)
        {
            var book = _books.FirstOrDefault(b => b.Id == model.Id);
            if (book != null)
            {
                
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

        public IEnumerable<BookModel> LoadBooks()
        {
            return _books.Select(b => b.ToModel());
        }
    }
}
