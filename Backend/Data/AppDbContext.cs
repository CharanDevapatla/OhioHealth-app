using Microsoft.EntityFrameworkCore;
using OhioHealthAssessment.Models;

namespace OhioHealthAssessment.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(){

        }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }
    }
}
