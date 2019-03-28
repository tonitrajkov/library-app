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
        private readonly IUserService _userService;
        private readonly IBookService _bookService;

        public ConfigurationController(
            IAuthorService authorService,
            IGenreService genreService,
            IRoleService roleService,
            IUserService userService,
            IBookService bookService
            )
        {
            _authorService = authorService;
            _genreService = genreService;
            _roleService = roleService;
            _userService = userService;
            _bookService = bookService;
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

        #region Users

        [Route("user")]
        [HttpPost]
        public IActionResult AddUser([FromBody] UserModel model)
        {
            if (model == null)
                return BadRequest();

            _userService.AddUser(model);
            return Ok(true);
        }

        [Route("user")]
        [HttpPut]
        public IActionResult UpdateUser([FromBody] UserModel model)
        {
            if (model == null)
                return BadRequest();

            _userService.UpdateUser(model);
            return Ok(true);
        }

        [Route("user/{userId}")]
        [HttpGet]
        public IActionResult GetUserById(int userId)
        {
            var user = _userService.GetUserById(userId);
            return Ok(user);
        }

        [Route("user/{userId}")]
        [HttpDelete]
        public IActionResult DeleteUserById(int userId)
        {
            _userService.DeleteUserById(userId);
            return Ok(true);
        }

        [Route("user")]
        [HttpGet]
        public IActionResult LoadUsers()
        {
            var users = _userService.LoadUsers();
            return Ok(users);
        }

        #endregion
        
        #region Books

        [Route("book")]
        [HttpPost]
        public IActionResult AddBook([FromBody] BookModel model)
        {
            if (model == null)
                return BadRequest();

            _bookService.AddBook(model);
            return Ok(true);
        }

        [Route("book")]
        [HttpPut]
        public IActionResult UpdateBook([FromBody] BookModel model)
        {
            if (model == null)
                return BadRequest();

            _bookService.UpdateBook(model);
            return Ok(true);
        }

        [Route("book/{bookId}")]
        [HttpGet]
        public IActionResult GetBookById(int bookId)
        {
            var book = _bookService.GetBookById(bookId);
            return Ok(book);
        }

        [Route("book/{bookId}")]
        [HttpDelete]
        public IActionResult DeleteBookById(int bookId)
        {
            _bookService.DeleteBookById(bookId);
            return Ok(true);
        }

        [Route("book")]
        [HttpGet]
        public IActionResult LoadBooks()
        {
            var books = _bookService.LoadBooks();
            return Ok(books);
        }

        #endregion
    }
}