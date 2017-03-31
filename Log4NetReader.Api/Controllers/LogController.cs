using Log4NetReader.Api.Data;
using Log4NetReader.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
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
        public IEnumerable<LogRecord> Get(string tableName, string level = "ALL", string environment = "ALL", string sort = "DESC", int skip = 0, int take = 100, DateTime? startDate = null, DateTime? endDate = null)
        {
            
            var queryString = QueryStringFactory(tableName, level, environment,  startDate, endDate);

            var result = _context.LogRecords.FromSql<LogRecord>(queryString).OrderByDescending(x => x.Id).Skip(skip*take).Take(take);

            return result.ToArray();

        }

        // GET api/log/count
        [HttpGet("Count")]
        public int Count(string tableName, string level = "ALL", string environment = "ALL",  DateTime? startDate = null, DateTime? endDate = null)
        {
            
            var queryString = QueryStringFactory(tableName, level, environment,  startDate, endDate);

            return _context.LogRecords.FromSql<LogRecord>(queryString).Count();            

        }


        private string QueryStringFactory(string tableName, string level = "ALL", string environment = "ALL",  DateTime? startDate = null, DateTime? endDate = null)
        {
            DateTime logStartDate;
            DateTime logEndDate;

            StringBuilder sb = new StringBuilder();
            sb.Append($"SELECT * from {tableName} ");


            if (!DateTime.TryParse(startDate.ToString(), out logStartDate))
            {
                 logStartDate = DateTime.Now.AddMonths(-1);
            }

            if (!DateTime.TryParse(endDate.ToString(), out logEndDate))
            {
                logEndDate = DateTime.Now.AddDays(1);
            }

            sb.Append($"WHERE [Date] BETWEEN '{logStartDate.ToString("yyyy-MM-dd")}' AND '{logEndDate.ToString("yyyy-MM-dd")}'");

            if (level.ToUpperInvariant() != "ALL")
            {
                sb.Append(LevelFactory(level));
            }

            if (environment.ToUpperInvariant() != "ALL")
            {
                sb.Append($"AND Environment = '{environment}' ");
            }

            

            return sb.ToString();
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
