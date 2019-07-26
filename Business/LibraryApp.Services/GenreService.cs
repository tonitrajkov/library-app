using System.Collections.Generic;
using System.Linq;

using LibraryApp.Data.Interfaces;
using LibraryApp.Domain;
using LibraryApp.Models;
using LibraryApp.Models.Mapper;
using LibraryApp.Services.Interfaces;
using LibraryApp.Common.Exceptions;

namespace LibraryApp.Services
{
    public class GenreService : IGenreService
    {
        #region Declaration & Ctor

        private readonly IRepository<Genre> _genreRepository;

        public GenreService(
            IRepository<Genre> genreRepository
            )
        {
            _genreRepository = genreRepository;
        }

        #endregion

        public void AddGenre(GenreModel model)
        {
            var genre = model.ToDomain();
            _genreRepository.Create(genre);
        }

        public void UpdateGenre(GenreModel model)
        {
            var genre = _genreRepository.GetById(model.Id);
            if (genre == null)
                throw new LibraryObjectNullException("GENRE_DOESNT_EXIST");

            genre.Title = model.Title;
            _genreRepository.Update(genre);
        }

        public void DeleteGenreById(int genreId)
        {
            var genre = _genreRepository.GetById(genreId);
            if (genre == null)
                throw new LibraryObjectNullException("GENRE_DOESNT_EXIST");

            _genreRepository.Delete(genre);
        }

        public GenreModel GetGenreById(int genreId)
        {
            var genre = _genreRepository.GetById(genreId);
            if (genre == null)
                throw new LibraryObjectNullException("GENRE_DOESNT_EXIST");

            return genre.ToModel();
        }

        public List<GenreModel> LoadGenres()
        {
            return _genreRepository.GetAll()
                     .Select(g => g.ToModel()).ToList();
        }
    }
}
