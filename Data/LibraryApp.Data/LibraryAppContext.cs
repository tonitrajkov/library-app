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
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRole>()
            .HasKey(ur => new { ur.UserId, ur.RoleId });

            modelBuilder.Entity<UserRole>()
                .HasOne(ur => ur.User)
                .WithMany(u => u.UserRoles)
                .HasForeignKey(ur => ur.UserId);

            modelBuilder.Entity<UserRole>()
                .HasOne(ur => ur.Role)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.RoleId);

            modelBuilder.Entity<BookAuthor>()
            .HasKey(ba => new { ba.BookId, ba.AuthorId });

            modelBuilder.Entity<BookAuthor>()
                 .HasOne(a => a.Author)
                 .WithMany(ba => ba.BookAuthors)
                 .HasForeignKey(a => a.AuthorId);

            modelBuilder.Entity<BookAuthor>()
                .HasOne(b => b.Book)
                .WithMany(ba => ba.BookAuthors)
                .HasForeignKey(b => b.BookId);

            modelBuilder.Entity<BookGenre>()
                .HasKey(bg => new { bg.BookId, bg.GenreId });

            modelBuilder.Entity<BookGenre>()
                .HasOne(b => b.Book)
                .WithMany(bg => bg.BookGenres)
                .HasForeignKey(b => b.BookId);

            modelBuilder.Entity<BookGenre>()
                 .HasOne(g => g.Genre)
                .WithMany(bg => bg.BookGenres)
                .HasForeignKey(g => g.GenreId);
        }
    }
}
