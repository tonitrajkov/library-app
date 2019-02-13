using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using LibraryApp.Data.Interfaces;
using LibraryApp.Domain;
using LibraryApp.Models;
using LibraryApp.Models.Mapper;
using LibraryApp.Services.Interfaces;

namespace LibraryApp.Services
{
    public class GenreService: IGenreService
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

        public async Task AddGenre(GenreModel model)
        {
            var genre = model.ToDomain();
            await _genreRepository.CreateAsync(genre);
        }

        public async Task UpdateGenre(GenreModel model)
        {
            var genre = await _genreRepository.GetByIdAsync(model.Id);
            if (genre == null)
                throw new Exception("GENRE_DOESNT_EXIST");

            genre.Title = model.Title;
            await _genreRepository.UpdateAsync(genre);
        }

        public async Task DeleteGenreById(int genreId)
        {
            var genre = await _genreRepository.GetByIdAsync(genreId);
            if (genre == null)
                throw new Exception("GENRE_DOESNT_EXIST");

            await _genreRepository.DeleteAsync(genre);
        }

        public async Task<GenreModel> GetGenreById(int genreId)
        {
            var genre = await _genreRepository.GetByIdAsync(genreId);
            if (genre == null)
                throw new Exception("GENRE_DOESNT_EXIST");

            return genre.ToModel();
        }

        public async Task<IEnumerable<GenreModel>> LoadGenres()
        {
            return (await _genreRepository.GetAllAsync())
                     .Select(g => g.ToModel()).ToList();
        }
    }
}
