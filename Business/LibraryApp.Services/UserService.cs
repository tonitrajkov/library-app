﻿using System;
using System.Collections.Generic;
using System.Linq;

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

        public UserService(
            IRepository<User> userRepository
            )
        {
            _userRepository = userRepository;
        }

        #endregion

        public void AddUser(UserModel model)
        {
            var user = model.ToDomain();
            _userRepository.Create(user);
        }

        public void UpdateUser(UserModel model)
        {
            var user = _userRepository.GetById(model.Id);
            if (user == null)
                throw new Exception("USER_DOESNT_EXIST");

            _userRepository.Update(user);
        }

        public void DeleteUserById(int userId)
        {
            var user = _userRepository.GetById(userId);
            if (user == null)
                throw new Exception("USER_DOESNT_EXIST");

            _userRepository.Delete(user);
        }

        public UserModel GetUserById(int userId)
        {
            var user = _userRepository.GetById(userId);
            if (user == null)
                throw new Exception("USER_DOESNT_EXIST");

            return user.ToModel();
        }

        public List<UserModel> LoadUsers()
        {
            return _userRepository.GetAll()
                    .Select(u => u.ToModel()).ToList();
        } 
    }
}
