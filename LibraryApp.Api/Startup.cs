using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using FluentValidation.AspNetCore;

using LibraryApp.Data;
using LibraryApp.Data.Implementations;
using LibraryApp.Data.Interfaces;
using LibraryApp.Services;
using LibraryApp.Services.Interfaces;
using LibraryApp.Models.Validators;
using LibraryApp.Api.Helpers;

namespace LibraryApp.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddMvc().AddFluentValidation();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });

            // Register Fluent Validators
            services.RegisterFluentValidators();

            // Setup Entity Framework 
            services.AddDbContext<LibraryAppContext>(
               options =>
               options
               .UseLazyLoadingProxies()
               .UseSqlServer(Configuration.GetConnectionString("LibraryAppConnection")));

            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IBookService, BookService>();
            services.AddTransient<IAuthorService, AuthorSevice>();
            services.AddTransient<IRoleService, RoleService>();
            services.AddTransient<IGenreService, GenreService>();
            services.AddTransient<IUserService, UserService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            //if (env.IsDevelopment())
            //{
                app.UseDeveloperExceptionPage();
            //}

            app.ConfigureCustomExceptionMiddleware();
            app.UseCors("AllowAllOrigins");
            app.UseMvc();
        }
    }
}
