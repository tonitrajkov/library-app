using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using LibraryApp.Models;
using LibraryApp.Services.Interfaces;
using LibraryApp.Common.Exceptions;
using LibraryApp.Api.Helpers;
using Newtonsoft.Json;
using System.IO;

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
        public IActionResult AddAuthor([FromForm] IFormFile file, [FromForm] string model)
        {
            var author = JsonConvert.DeserializeObject<AuthorModel>(model);
            if (author == null)
                return BadRequest();

            //if (!ModelState.IsValid)
            //    throw new InvalidModelStateException(ModelState);

            if (file != null)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    author.ImageUrl = Convert.ToBase64String(fileBytes);
                }
            }

            _authorService.AddAuthor(author);
            return Ok(true);
        }

        [Route("author")]
        [HttpPut]
        public IActionResult UpdateAuthor([FromForm] IFormFile file, [FromForm] string model)
        {
            var author = JsonConvert.DeserializeObject<AuthorModel>(model);
            if (author == null)
                return BadRequest();

            //if (!ModelState.IsValid)
            //    throw new InvalidModelStateException(ModelState);

            if (file != null)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    author.ImageUrl = Convert.ToBase64String(fileBytes);
                }
            }

            _authorService.UpdateAuthor(author);
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

            if (!ModelState.IsValid)
                throw new InvalidModelStateException(ModelState);

            _genreService.AddGenre(model);
            return Ok(true);
        }

        [Route("genre")]
        [HttpPut]
        public IActionResult UpdateGenre([FromBody] GenreModel model)
        {
            if (model == null)
                return BadRequest();

            if (!ModelState.IsValid)
                throw new InvalidModelStateException(ModelState);

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

            if (!ModelState.IsValid)
                throw new InvalidModelStateException(ModelState);

            _roleService.AddRole(model);
            return Ok(true);
        }

        [Route("role")]
        [HttpPut]
        public IActionResult UpdateRole([FromBody] RoleModel model)
        {
            if (model == null)
                return BadRequest();

            if (!ModelState.IsValid)
                throw new InvalidModelStateException(ModelState);

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
        public IActionResult AddUser([FromForm] IFormFile file, [FromForm] string model)
        {
            var user = JsonConvert.DeserializeObject<UserModel>(model);
            if (user == null)
                return BadRequest();

            //if (!ModelState.IsValid)
            //    throw new InvalidModelStateException(ModelState);

            if(file != null)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    user.ImageUrl = Convert.ToBase64String(fileBytes);
                }
            }

            _userService.AddUser(user);
            return Ok(true);
        }

        [Route("user")]
        [HttpPut]
        public IActionResult UpdateUser([FromForm] IFormFile file, [FromForm] string model)
        {
            var user = JsonConvert.DeserializeObject<UserModel>(model);
            if (user == null)
                return BadRequest();

            //if (!ModelState.IsValid)
            //    throw new InvalidModelStateException(ModelState);

            if (file != null)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    user.ImageUrl = Convert.ToBase64String(fileBytes);
                }
            }

            _userService.UpdateUser(user);
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
        public IActionResult AddBook([FromForm] IFormFile file, [FromForm] string model)
        {
            var book = JsonConvert.DeserializeObject<BookModel>(model);
            if (book == null)
                return BadRequest();

            //if (!ModelState.IsValid)
            //    throw new InvalidModelStateException(ModelState);

            if (file != null)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    book.ImageUrl = Convert.ToBase64String(fileBytes);
                }
            }

            _bookService.AddBook(book);
            return Ok(true);
        }

        [Route("book")]
        [HttpPut]
        public IActionResult UpdateBook([FromForm] IFormFile file, [FromForm] string model)
        {
            var book = JsonConvert.DeserializeObject<BookModel>(model);
            if (book == null)
                return BadRequest();

            //if (!ModelState.IsValid)
            //    throw new InvalidModelStateException(ModelState);

            if (file != null)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    book.ImageUrl = Convert.ToBase64String(fileBytes);
                }
            }

            _bookService.UpdateBook(book);
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