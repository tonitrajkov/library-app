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

        public void AddAuthor(AuthorModel model)
        {
            var author = model.ToDomain();
            _authorRepository.Create(author);
        }

        public void UpdateAuthor(AuthorModel model)
        {
            var author = _authorRepository.GetById(model.Id);
            if (author == null)
                throw new LibraryObjectNullException("AUTHOR_DOESNT_EXIST");

            author.Firstname = model.FirstName;
            author.Lastname = model.LastName;
            author.Bio = model.Biography;
            author.Avatar = model.ImageUrl;

            _authorRepository.Update(author);
        }

        public void DeleteAuthorById(int authorId)
        {
            var author = _authorRepository.GetById(authorId);
            if (author == null)
                throw new LibraryObjectNullException("AUTHOR_DOESNT_EXIST");

            _authorRepository.Delete(author);
        }

        public AuthorModel GetAuthorById(int authorId)
        {
            var author = _authorRepository.GetById(authorId);
            if (author == null)
                throw new LibraryObjectNullException("AUTHOR_DOESNT_EXIST");

            return author.ToModel();
        }

        public List<AuthorModel> LoadAuthors()
        {
            return _authorRepository.GetAll()
                    .Select(a => a.ToModel()).ToList();
        }
    }
}
