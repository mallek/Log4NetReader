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

        // GET api/values
        [HttpGet]
        public IEnumerable<LogRecord> Get(string tableName, string level = "ALL", string environment = "ALL", string sort = "DESC", int skip = 0, int take = 100)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append($"SELECT TOP {take} * FROM {tableName} WHERE ID not in (SELECT TOP({take * skip}) ID From {tableName} ORDER BY ID {sort})");
            // WHERE Id not in (SELECT TOP(100 * 100) Id FROM DealertrackSync_Log ORDER BY ID DESC)

            if (level.ToUpperInvariant() != "ALL")
                sb.Append($"AND Level = '{level}' ");

            if (environment.ToUpperInvariant() != "ALL")
                sb.Append($"AND Environment = '{environment}' ");

            sb.Append($"ORDER BY ID {sort}");

            var result = _context.LogRecords.FromSql<LogRecord>(sb.ToString());

            return result.ToArray();

        }
    }
}
