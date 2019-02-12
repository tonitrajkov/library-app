using LibraryApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryApp.Services.Interfaces
{
    public interface IRoleService
    {
        Task AddRole(RoleModel model);
        Task UpdateRole(RoleModel model);
        Task DeleteRoleById(int roleId);
        Task<RoleModel> GetRoleById(int roleId);
        Task<IEnumerable<RoleModel>> LoadRoles();
    }
}
