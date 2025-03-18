using Microsoft.EntityFrameworkCore;
using PixelPort.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PixelPort
{
    public class AppDbContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlite("Data Source=C:\\Users\\acer\\Downloads\\DB\\database.db");
        }
    }
}

