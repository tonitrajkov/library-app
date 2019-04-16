using Microsoft.AspNetCore.Http;
using System;
using System.Net;
using System.Threading.Tasks;

using LibraryApp.Common.Exceptions;

namespace LibraryApp.Api.Helpers
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var msg = exception.Message;
            var code = (int)HttpStatusCode.InternalServerError;

            if (exception is InvalidModelStateException)
            {
                code = 409;
                msg = exception.Message.Replace("model.", "");
            }

            if (exception is UnauthorizedAccessException)
            {
                code = 500;
                msg = "UNAUTHORIZED";
            }

            if (exception is LibraryGeneralException)
            {
                code = 409;
                msg = (exception as LibraryGeneralException).Message;
            }

            if (exception is LibraryObjectNotFoundException)
            {
                code = 411;
                msg = (exception as LibraryObjectNotFoundException).Message;
            }

            if (exception is LibraryObjectNullException)
            {
                code = 409;
                msg = (exception as LibraryObjectNullException).Message;
            }

            if (exception is LibraryOutOfRangeException)
            {
                code = 409;
                msg = (exception as LibraryOutOfRangeException).Message;
            }

            if (exception is ApplicationException)
            {
                code = 409;
                msg = (exception as ApplicationException).Message;
            }

            if (exception is NotImplementedException)
            {
                code = 410;
                msg = (exception as NotImplementedException).Message;
            }

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = code;

            return context.Response.WriteAsync(new ErrorDetails
            {
                StatusCode = code,
                Message = msg
            }.ToString());
        }
    }
}
