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
    public class AuthorSevice : IAuthorService
    {
        #region Declaration & Ctor

        private readonly IRepository<Author> _authorRepository;

        public AuthorSevice(
            IRepository<Author> authorRepository
            )
        {
            _authorRepository = authorRepository;
        }

        #endregion

        public async Task AddAuthor(AuthorModel model)
        {
            var author = model.ToDomain();
            await _authorRepository.CreateAsync(author);
        }

        public async Task UpdateAuthor(AuthorModel model)
        {
            var author = await _authorRepository.GetByIdAsync(model.Id);
            if (author == null)
                throw new Exception("AUTHOR_DOESNT_EXIST");

            author.Firstname = model.Firstname;
            author.Lastname = model.Lastname;
            author.Bio = model.Bio;
            author.Avatar = model.Avatar;

            await _authorRepository.UpdateAsync(author);
        }

        public async Task DeleteAuthorById(int authorId)
        {
            var author = await _authorRepository.GetByIdAsync(authorId);
            if (author == null)
                throw new Exception("AUTHOR_DOESNT_EXIST");

            await _authorRepository.DeleteAsync(author);
        }

        public async Task<AuthorModel> GetAuthorById(int authorId)
        {
            var author = await _authorRepository.GetByIdAsync(authorId);
            if (author == null)
                throw new Exception("AUTHOR_DOESNT_EXIST");

            return author.ToModel();
        }

        public async Task<IEnumerable<AuthorModel>> LoadAuthors()
        {
            return (await _authorRepository.GetAllAsync())
                    .Select(a => a.ToModel()).ToList();
        }
    }
}
