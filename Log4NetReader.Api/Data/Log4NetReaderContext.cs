using Log4NetReader.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Log4NetReader.Api.Data
{
    public class Log4NetReaderContext : DbContext
    {
        public Log4NetReaderContext(DbContextOptions<Log4NetReaderContext> options) : base(options)
        {

        }

        public DbSet<LogRecord> LogRecords { get; set; }
        public DbSet<LogTable> LogTables { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LogRecord>().ToTable("SeedTable_do_not_delete_Log");
            modelBuilder.Entity<LogTable>().HasKey("Name");
        }
    }
}
