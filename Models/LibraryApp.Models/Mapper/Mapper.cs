using LibraryApp.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace LibraryApp.Models.Mapper
{
    public static class Mapper
    {
        #region ToModel

        public static BookModel ToModel(this Book book)
        {
            return new BookModel
            {
                Id = book.Id,
                Author = book.Author,
                Genre = book.Genre,
                ImageUrl = book.ImageUrl,
                OriginalTitle = book.OriginalTitle,
                PagesNum = book.PagesNum,
                PublishingHouse = book.PublishingHouse,
                Rating = book.Rating,
                Title = book.Title,
                Description = book.Description
            };
        }

        public static AuthorModel ToModel(this Author author)
        {
            return new AuthorModel
            {
                Id = author.Id,
                ImageUrl = author.Avatar,
                Biography = author.Bio,
                FirstName = author.Firstname,
                LastName = author.Lastname
            };
        }

        public static RoleModel ToModel(this Role role)
        {
            return new RoleModel
            {
                Id = role.Id,
                Title = role.Title
            };
        }

        public static GenreModel ToModel(this Genre genre)
        {
            return new GenreModel
            {
                Id = genre.Id,
                Title = genre.Title
            };
        }

        public static UserModel ToModel(this User user)
        {
            return new UserModel
            {
                Id = user.Id,
                ImageUrl = user.ImageUrl,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName,
                IsActive = user.IsActive
            };
        }

        #endregion


        #region ToDomain

        public static Book ToDomain(this BookModel model)
        {
            return new Book
            {
                Id = model.Id,
                Author = model.Author,
                Genre = model.Genre,
                ImageUrl = model.ImageUrl,
                OriginalTitle = model.OriginalTitle,
                PagesNum = model.PagesNum,
                PublishingHouse = model.PublishingHouse,
                Rating = model.Rating,
                Title = model.Title,
                Description = model.Description
            };
        }

        public static Author ToDomain(this AuthorModel model)
        {
            return new Author
            {
                Id = model.Id,
                Avatar = model.ImageUrl,
                Bio = model.Biography,
                Firstname = model.FirstName,
                Lastname = model.LastName
            };
        }

        public static Role ToDomain(this RoleModel model)
        {
            return new Role
            {
                Id = model.Id,
                Title = model.Title
            };
        }

        public static Genre ToDomain(this GenreModel model)
        {
            return new Genre
            {
                Id = model.Id,
                Title = model.Title
            };
        }

        public static User ToDomain(this UserModel model)
        {
            return new User
            {
                Id = model.Id,
                FirstName = model.FirstName,
                UserName = model.UserName,
                LastName = model.LastName,
                ImageUrl = model.ImageUrl,
                IsActive = model.IsActive,
                Email = model.Email
            };
        }

        #endregion
    }
}
