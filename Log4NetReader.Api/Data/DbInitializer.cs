using Log4NetReader.Api.Models;
using System;
using System.Linq;

namespace Log4NetReader.Api.Data
{
    public static class DbInitializer
    {
        public static void Initialize(Log4NetReaderContext context)
        {
            context.Database.EnsureCreated();



            if (context.LogRecords.Any())
                return; //DB Has been created

            var logRecords = new LogRecord[]
            {
                new LogRecord{
                    Date = DateTime.Now,
                    Environment = "Seed",
                    Exception = null,
                    Level = "Info",
                    Logger = "Seed Logger",
                    Message = "DO NOT DELETE - This is a seeded logging message that is generated from the dbInitializer.cs file",
                    Thread = "1"
                }

            };

            foreach (var log in logRecords)
                context.LogRecords.Add(log);

            context.SaveChanges();
        }
    }
}
