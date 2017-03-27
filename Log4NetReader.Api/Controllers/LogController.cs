using Log4NetReader.Api.Data;
using Log4NetReader.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Log4NetReader.Api.Controllers
{
    [Route("api/[controller]")]
    public class LogController : Controller
    {
        private readonly Log4NetReaderContext _context;
        public LogController(Log4NetReaderContext context)
        {
            _context = context;
        }

        // GET api/Log
        [HttpGet]
        public IEnumerable<LogRecord> Get(string tableName, string level = "ALL", string environment = "ALL", string sort = "DESC", int skip = 0, int take = 100)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append($"SELECT TOP {take} * ");

            sb.Append($"FROM {tableName} WHERE ID not in (SELECT TOP({take * skip}) ID From {tableName} WHERE (1=1) {LevelFactory(level)} {EnvironmentFactory(environment)} ORDER BY ID {sort})");


            if (level.ToUpperInvariant() != "ALL")
            {
                sb.Append(LevelFactory(level));
            }

            if (environment.ToUpperInvariant() != "ALL")
            {
                sb.Append($"AND Environment = '{environment}' ");
            }

            sb.Append($"ORDER BY ID {sort}");

            var result = _context.LogRecords.FromSql<LogRecord>(sb.ToString());

            return result.ToArray();

        }

        // GET api/log/count
        [HttpGet("Count")]
        public int Count(string tableName, string level = "ALL", string environment = "ALL", string sort = "DESC", int skip = 0, int take = 100)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("SELECT Count(1) AS Total ");

            sb.Append($"FROM {tableName} WHERE (1=1)");

            if (level.ToUpperInvariant() != "ALL")
            {
                sb.Append(LevelFactory(level));
            }

            if (environment.ToUpperInvariant() != "ALL")
            {
                sb.Append($"AND Environment = '{environment}' ");
            }

            LogCount result = _context.LogCount.FromSql<LogCount>(sb.ToString()).FirstOrDefault();

            return result.Total;

        }

        private string EnvironmentFactory(string environment)
        {
            if(environment.ToUpperInvariant() == "ALL")
            {
                return "";
            }
            else
            {
                return $"AND Environment = '{environment}'";
            }
        }

        private string LevelFactory(string level)
        {
            switch (level.ToLowerInvariant())
            {
                case "all":
                    return "";
                case "debug":
                    return "AND (LEVEL = 'Debug' OR LEVEL = 'Info' OR LEVEL = 'Warn' OR  LEVEL= 'Error' OR LEVEL = 'Fatal')";
                case "info":
                    return "AND (LEVEL = 'Info' OR LEVEL = 'Warn' OR  LEVEL= 'Error' OR LEVEL = 'Fatal')";
                case "warn":
                    return "AND (LEVEL = 'Warn' OR  LEVEL= 'Error' OR LEVEL = 'Fatal')";
                case "error":
                    return "AND (LEVEL= 'Error' OR LEVEL = 'Fatal')";
                case "fatal":
                    return "AND (LEVEL = 'Fatal')";
                default:
                    return "AND (Level = 'Seed')";

            }
        }


    }
}
