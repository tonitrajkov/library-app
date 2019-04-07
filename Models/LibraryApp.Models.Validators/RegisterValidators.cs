using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace LibraryApp.Models.Validators
{
    public static class RegisterValidators
    {
        public static void RegisterFluentValidators(this IServiceCollection services)
        {
            services.AddSingleton<IValidator<AuthorModel>, AuthorModelValidator>();
            services.AddSingleton<IValidator<BookModel>, BookModelValidator>();
            services.AddSingleton<IValidator<GenreModel>, GenreModelValidator>();
            services.AddSingleton<IValidator<RoleModel>, RoleModelValidator>();
            services.AddSingleton<IValidator<UserModel>, UserModelValidator>();
        }
    }
}
