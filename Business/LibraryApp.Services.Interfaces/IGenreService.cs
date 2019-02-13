using LibraryApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryApp.Services.Interfaces
{
    public interface IGenreService
    {
        Task AddGenre(GenreModel model);
        Task UpdateGenre(GenreModel model);
        Task DeleteGenreById(int genreId);
        Task<GenreModel> GetGenreById(int genreId);
        Task<IEnumerable<GenreModel>> LoadGenres();
    }
}
