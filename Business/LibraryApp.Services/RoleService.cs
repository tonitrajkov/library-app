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
    public class RoleService : IRoleService
    {
        #region Declaration & Ctor

        private readonly IRepository<Role> _roleRepository;

        public RoleService(
            IRepository<Role> roleRepository
            )
        {
            _roleRepository = roleRepository;
        }

        #endregion

        public async Task AddRole(RoleModel model)
        {
            var role = model.ToDomain();
            await _roleRepository.CreateAsync(role);
        }

        public async Task UpdateRole(RoleModel model)
        {
            var role = await _roleRepository.GetByIdAsync(model.Id);
            if (role == null)
                throw new Exception("ROLE_DOESNT_EXIST");

            role.Title = model.Title;
            await _roleRepository.UpdateAsync(role);
        }

        public async Task DeleteRoleById(int RoleId)
        {
            var role = await _roleRepository.GetByIdAsync(RoleId);
            if (role == null)
                throw new Exception("ROLE_DOESNT_EXIST");

            await _roleRepository.DeleteAsync(role);
        }

        public async Task<RoleModel> GetRoleById(int roleId)
        {
            var role = await _roleRepository.GetByIdAsync(roleId);
            if (role == null)
                throw new Exception("Role_DOESNT_EXIST");

            return role.ToModel();
        }

        public async Task<IEnumerable<RoleModel>> LoadRoles()
        {
            return (await _roleRepository.GetAllAsync())
                     .Select(r => r.ToModel()).ToList();
        }
    }
}
