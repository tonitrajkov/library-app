using LibraryApp.Models;
using System.Collections.Generic;

namespace LibraryApp.Services.Interfaces
{
    public interface IBookService
    {
        void AddBook(BookModel model);
        void UpdateBook(BookModel model);
        void DeleteBookById(int bookId);
        BookModel GetBookById(int bookId);
        IEnumerable<BookModel> LoadBooks();
    }
}
