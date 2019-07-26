using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;

namespace LibraryApp.Common.Exceptions
{
    public class InvalidModelStateException : Exception
    {
        public InvalidModelStateException(ModelStateDictionary modelState)
          : base(ModelStateExtensions.ToJson((object)new
          {
              Errors = ModelStateExtensions.Errors(modelState)
          }))
        {
        } 
    }
}
