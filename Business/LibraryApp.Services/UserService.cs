using System;
using System.Collections.Generic;
using System.Linq;

using LibraryApp.Common;
using LibraryApp.Common.Exceptions;
using LibraryApp.Data.Interfaces;
using LibraryApp.Domain;
using LibraryApp.Models;
using LibraryApp.Models.Mapper;
using LibraryApp.Services.Interfaces;

namespace LibraryApp.Services
{
    public class UserService : IUserService
    {
        #region Declaration & Ctor

        private readonly IRepository<User> _userRepository;
        private readonly IRepository<Role> _roleRepository;

        public UserService(
            IRepository<User> userRepository,
            IRepository<Role> roleRepository
            )
        {
            _userRepository = userRepository;
            _roleRepository = roleRepository;
        }

        #endregion

        public void AddUser(UserModel model)
        {
            // check unique username
            if (_userRepository.GetAll().Any(u =>
                u.UserName.ToLower() == model.UserName.ToLower()))
            {
                throw new LibraryGeneralException("Корисничкото име веќе постои");
            }

            // check for unique email
            if (_userRepository.GetAll().Any(u =>
                u.Email.ToLower() == model.Email.ToLower()))
            {
                throw new LibraryGeneralException("Емаилот име веќе постои");
            }

            var user = model.ToDomain();
            user.CreatedOn = DateTime.Now;
            user.Password = PasswordHash.CreateHash("123");

            if (model.Roles.Any())
            {
                user.UserRoles = new List<UserRole>();
                foreach (var roleItem in model.Roles)
                {
                    var role = _roleRepository.GetById(roleItem.Id);
                    var userRole = new UserRole
                    {
                        User = user,
                        Role = role
                    };
                    user.UserRoles.Add(userRole);
                }
            }

            _userRepository.Create(user);
        }

        public void UpdateUser(UserModel model)
        {
            var user = _userRepository.GetById(model.Id);
            if (user == null)
                throw new LibraryObjectNullException("Корисникот не постои");

            // check unique username
            if (_userRepository.GetAll().Any(u => u.Id != model.Id &&
                u.UserName.ToLower() == model.UserName.ToLower()))
            {
                throw new LibraryGeneralException("Корисничкото име веќе постои");
            }

            // check for unique email
            if (_userRepository.GetAll().Any(u => u.Id != model.Id &&
                u.Email.ToLower() == model.Email.ToLower()))
            {
                throw new LibraryGeneralException("Емаилот име веќе постои");
            }

            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.UserName = model.UserName;
            user.ImageUrl = model.ImageUrl;
            user.Email = model.Email;

            if (model.Roles.Any())
            {
                user.UserRoles.Clear();
                foreach (var roleItem in model.Roles)
                {
                    var role = _roleRepository.GetById(roleItem.Id);
                    var userRole = new UserRole
                    {
                        User = user,
                        Role = role
                    };
                    user.UserRoles.Add(userRole);
                }
            }

            _userRepository.Update(user);
        }

        public void DeleteUserById(int userId)
        {
            var user = _userRepository.GetById(userId);
            if (user == null)
                throw new LibraryObjectNullException("Корисникот не постои");

            _userRepository.Delete(user);
        }

        public UserModel GetUserById(int userId)
        {
            var user = _userRepository.GetById(userId);
            if (user == null)
                throw new LibraryObjectNullException("Корисникот не постои");

            return user.ToModel();
        }

        public List<UserModel> LoadUsers()
        {
            return _userRepository.GetAll()
                    .Select(u => u.ToModel()).ToList();
        }
    }
}
