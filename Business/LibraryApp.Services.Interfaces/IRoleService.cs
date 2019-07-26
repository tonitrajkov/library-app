using LibraryApp.Models;
using System.Collections.Generic;

namespace LibraryApp.Services.Interfaces
{
    public interface IRoleService
    {
        void AddRole(RoleModel model);
        void UpdateRole(RoleModel model);
        void DeleteRoleById(int roleId);
        RoleModel GetRoleById(int roleId);
        List<RoleModel> LoadRoles();
    }
}
