using Microsoft.EntityFrameworkCore;
using LibraryApp.Domain;


namespace LibraryApp.Data
{
    public class LibraryAppContext : DbContext
    {
        public LibraryAppContext(DbContextOptions<LibraryAppContext> options)
         : base(options)
        { }

        public DbSet<Author> Authors { get; set; }
    }
}
