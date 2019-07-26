using System.Collections.Generic;
using System.Linq;

using LibraryApp.Common.Exceptions;
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

        public void AddRole(RoleModel model)
        {
            var role = model.ToDomain();
            _roleRepository.Create(role);
        }

        public void UpdateRole(RoleModel model)
        {
            var role = _roleRepository.GetById(model.Id);
            if (role == null)
                throw new LibraryObjectNullException("ROLE_DOESNT_EXIST");

            role.Title = model.Title;
            _roleRepository.Update(role);
        }

        public void DeleteRoleById(int RoleId)
        {
            var role = _roleRepository.GetById(RoleId);
            if (role == null)
                throw new LibraryObjectNullException("ROLE_DOESNT_EXIST");

            _roleRepository.Delete(role);
        }

        public RoleModel GetRoleById(int roleId)
        {
            var role = _roleRepository.GetById(roleId);
            if (role == null)
                throw new LibraryObjectNullException("Role_DOESNT_EXIST");

            return role.ToModel();
        }

        public List<RoleModel> LoadRoles()
        {
            return _roleRepository.GetAll()
                     .Select(r => r.ToModel()).ToList();
        }
    }
}
