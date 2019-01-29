using LibraryApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryApp.Services.Interfaces
{
    public interface IAuthorService
    {
        Task AddAuthor(AuthorModel model);
        Task UpdateAuthor(AuthorModel model);
        Task DeleteAuthorById(int authorId);
        Task<AuthorModel> GetAuthorById(int authorId);
        Task<IEnumerable<AuthorModel>> LoadAuthors();
    }
}
