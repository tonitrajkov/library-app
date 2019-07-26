using LibraryApp.Models;
using System.Collections.Generic;

namespace LibraryApp.Services.Interfaces
{
    public interface IAuthorService
    {
        void AddAuthor(AuthorModel model);
        void UpdateAuthor(AuthorModel model);
        void DeleteAuthorById(int authorId);
        AuthorModel GetAuthorById(int authorId);
        List<AuthorModel> LoadAuthors();
    }
}
