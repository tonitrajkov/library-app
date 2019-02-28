using LibraryApp.Models;
using System.Collections.Generic;

namespace LibraryApp.Services.Interfaces
{
    public interface IGenreService
    {
        void AddGenre(GenreModel model);
        void UpdateGenre(GenreModel model);
        void DeleteGenreById(int genreId);
        GenreModel GetGenreById(int genreId);
        List<GenreModel> LoadGenres();
    }
}
