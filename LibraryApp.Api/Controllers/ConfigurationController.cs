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

        public ConfigurationController(
            IAuthorService authorService)
        {
            _authorService = authorService;
        }

        #endregion

        #region Authors

        [HttpPost]
        public async Task<IActionResult> AddAuthor([FromBody] AuthorModel model)
        {
            if (model == null)
                return BadRequest();

            await _authorService.AddAuthor(model);
            return Ok(true);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAuthor([FromBody] AuthorModel model)
        {
            if (model == null)
                return BadRequest();
            
            await _authorService.UpdateAuthor(model);
            return Ok(true);
        }

        [Route("{authorId}")]
        [HttpGet]
        public async Task<IActionResult> GetAuthorById(int authorId)
        {
            var author = await _authorService.GetAuthorById(authorId);
            return Ok(author);
        }

        [Route("{authorId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAuthorById(int authorId)
        {
            await _authorService.DeleteAuthorById(authorId);
            return Ok(true);
        }

        [HttpGet]
        public async Task<IActionResult> LoadAuthors()
        {
            var authors = await _authorService.LoadAuthors();
            return Ok(authors);
        }

        #endregion
    }
}