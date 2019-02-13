using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryApp.Models;
using LibraryApp.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Api.Controllers
{
    [Route("api/configuration")]
    public class ConfigurationController : Controller
    {
        #region Declaration & Ctor

        private readonly IAuthorService _authorService;
        private readonly IGenreService _genreService;
        private readonly IRoleService _roleService;

        public ConfigurationController(
            IAuthorService authorService,
            IGenreService genreService,
            IRoleService roleService
            )
        {
            _authorService = authorService;
            _genreService = genreService;
            _roleService = roleService;
        }

        #endregion

        #region Authors

        [Route("author")]
        [HttpPost]
        public async Task<IActionResult> AddAuthor([FromBody] AuthorModel model)
        {
            if (model == null)
                return BadRequest();

            await _authorService.AddAuthor(model);
            return Ok(true);
        }

        [Route("author")]
        [HttpPut]
        public async Task<IActionResult> UpdateAuthor([FromBody] AuthorModel model)
        {
            if (model == null)
                return BadRequest();
            
            await _authorService.UpdateAuthor(model);
            return Ok(true);
        }

        [Route("author/{authorId}")]
        [HttpGet]
        public async Task<IActionResult> GetAuthorById(int authorId)
        {
            var author = await _authorService.GetAuthorById(authorId);
            return Ok(author);
        }

        [Route("author/{authorId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAuthorById(int authorId)
        {
            await _authorService.DeleteAuthorById(authorId);
            return Ok(true);
        }

        [Route("author")]
        [HttpGet]
        public async Task<IActionResult> LoadAuthors()
        {
            var authors = await _authorService.LoadAuthors();
            return Ok(authors);
        }

        #endregion

        #region Genres

        [Route("genre")]
        [HttpPost]
        public async Task<IActionResult> AddGenre([FromBody] GenreModel model)
        {
            if (model == null)
                return BadRequest();

            await _genreService.AddGenre(model);
            return Ok(true);
        }

        [Route("genre")]
        [HttpPut]
        public async Task<IActionResult> UpdateGenre([FromBody] GenreModel model)
        {
            if (model == null)
                return BadRequest();

            await _genreService.UpdateGenre(model);
            return Ok(true);
        }

        [Route("genre/{genreId}")]
        [HttpGet]
        public async Task<IActionResult> GetGenreById(int genreId)
        {
            var genre = await _genreService.GetGenreById(genreId);
            return Ok(genre);
        }

        [Route("genre/{genreId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteGenreById(int genreId)
        {
            await _genreService.DeleteGenreById(genreId);
            return Ok(true);
        }

        [Route("genre")]
        [HttpGet]
        public async Task<IActionResult> LoadGenres()
        {
            var genres = await _genreService.LoadGenres();
            return Ok(genres);
        }

        #endregion

        #region Roles

        [Route("role")]
        [HttpPost]
        public async Task<IActionResult> AddRole([FromBody] RoleModel model)
        {
            if (model == null)
                return BadRequest();

            await _roleService.AddRole(model);
            return Ok(true);
        }

        [Route("role")]
        [HttpPut]
        public async Task<IActionResult> UpdateRole([FromBody] RoleModel model)
        {
            if (model == null)
                return BadRequest();

            await _roleService.UpdateRole(model);
            return Ok(true);
        }

        [Route("role/{roleId}")]
        [HttpGet]
        public async Task<IActionResult> GetRoleById(int roleId)
        {
            var role = await _roleService.GetRoleById(roleId);
            return Ok(role);
        }

        [Route("role/{roleId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteRoleById(int roleId)
        {
            await _roleService.DeleteRoleById(roleId);
            return Ok(true);
        }

        [Route("role")]
        [HttpGet]
        public async Task<IActionResult> LoadRoles()
        {
            var roles = await _roleService.LoadRoles();
            return Ok(roles);
        }

        #endregion
    }
}