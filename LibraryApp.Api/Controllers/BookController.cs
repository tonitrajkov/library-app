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
    [Route("api/book")]
    public class BookController : Controller
    {
        #region Declaration & Ctor

        private readonly IBookService _bookService;

        public BookController(
            IBookService bookService)
        {
            _bookService = bookService;
        }

        #endregion

        [HttpPost]
        public IActionResult AddBook([FromBody] BookModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            _bookService.AddBook(model);
            return Ok(true);
        }

        [HttpGet]
        public IActionResult GetBooks()
        {
            var books = _bookService.LoadBooks();
            return Ok(books);
        }

        [Route("{bookId}")]
        [HttpGet]
        public IActionResult GetBook(int bookId)
        {
            var book = _bookService.GetBookById(bookId);
            return Ok(book);
        }

        [HttpPut]
        public IActionResult PutBook([FromBody] BookModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            _bookService.UpdateBook(model);
            return Ok(true);
        }

    }
}