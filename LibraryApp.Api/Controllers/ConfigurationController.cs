using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using LibraryApp.Models;
using LibraryApp.Services.Interfaces;

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
        public IActionResult AddAuthor([FromBody] AuthorModel model)
        {
            if (model == null)
                return BadRequest();

            _authorService.AddAuthor(model);
            return Ok(true);
        }

        [Route("author")]
        [HttpPut]
        public IActionResult UpdateAuthor([FromBody] AuthorModel model)
        {
            if (model == null)
                return BadRequest();

            _authorService.UpdateAuthor(model);
            return Ok(true);
        }

        [Route("author/{authorId}")]
        [HttpGet]
        public IActionResult GetAuthorById(int authorId)
        {
            var author = _authorService.GetAuthorById(authorId);
            return Ok(author);
        }

        [Route("author/{authorId}")]
        [HttpDelete]
        public IActionResult DeleteAuthorById(int authorId)
        {
            _authorService.DeleteAuthorById(authorId);
            return Ok(true);
        }

        [Route("author")]
        [HttpGet]
        public IActionResult LoadAuthors()
        {
            var authors = _authorService.LoadAuthors();
            return Ok(authors);
        }

        #endregion

        #region Genres

        [Route("genre")]
        [HttpPost]
        public IActionResult AddGenre([FromBody] GenreModel model)
        {
            if (model == null)
                return BadRequest();

            _genreService.AddGenre(model);
            return Ok(true);
        }

        [Route("genre")]
        [HttpPut]
        public IActionResult UpdateGenre([FromBody] GenreModel model)
        {
            if (model == null)
                return BadRequest();

            _genreService.UpdateGenre(model);
            return Ok(true);
        }

        [Route("genre/{genreId}")]
        [HttpGet]
        public IActionResult GetGenreById(int genreId)
        {
            var genre = _genreService.GetGenreById(genreId);
            return Ok(genre);
        }

        [Route("genre/{genreId}")]
        [HttpDelete]
        public IActionResult DeleteGenreById(int genreId)
        {
            _genreService.DeleteGenreById(genreId);
            return Ok(true);
        }

        [Route("genre")]
        [HttpGet]
        public IActionResult LoadGenres()
        {
            var genres = _genreService.LoadGenres();
            return Ok(genres);
        }

        #endregion

        #region Roles

        [Route("role")]
        [HttpPost]
        public IActionResult AddRole([FromBody] RoleModel model)
        {
            if (model == null)
                return BadRequest();

            _roleService.AddRole(model);
            return Ok(true);
        }

        [Route("role")]
        [HttpPut]
        public IActionResult UpdateRole([FromBody] RoleModel model)
        {
            if (model == null)
                return BadRequest();

            _roleService.UpdateRole(model);
            return Ok(true);
        }

        [Route("role/{roleId}")]
        [HttpGet]
        public IActionResult GetRoleById(int roleId)
        {
            var role = _roleService.GetRoleById(roleId);
            return Ok(role);
        }

        [Route("role/{roleId}")]
        [HttpDelete]
        public IActionResult DeleteRoleById(int roleId)
        {
            _roleService.DeleteRoleById(roleId);
            return Ok(true);
        }

        [Route("role")]
        [HttpGet]
        public IActionResult LoadRoles()
        {
            var roles = _roleService.LoadRoles();
            return Ok(roles);
        }

        #endregion
    }
}