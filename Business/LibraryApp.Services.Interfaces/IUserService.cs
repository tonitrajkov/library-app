using LibraryApp.Models;
using System.Collections.Generic;

namespace LibraryApp.Services.Interfaces
{
    public interface IUserService
    {
        void AddUser(UserModel model);
        void UpdateUser(UserModel model);
        void DeleteUserById(int userId);
        UserModel GetUserById(int userId);
        List<UserModel> LoadUsers();
    }
}
