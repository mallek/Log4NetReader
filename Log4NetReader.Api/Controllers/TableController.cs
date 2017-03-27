using Log4NetReader.Api.Data;
using Log4NetReader.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Log4NetReader.Api.Controllers
{
    [Route("api/[controller]")]
    public class TableController : Controller
    {
        private readonly Log4NetReaderContext _context;
        public TableController(Log4NetReaderContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<LogTable> Get()
        {

            var result = _context.LogTables.FromSql<LogTable>($"SELECT TABLE_NAME as Name FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'");

            return result.ToArray();

        }

        // GET api/values
        [HttpGet("GetEnvironments/{tableName}")]
        public IEnumerable<LogTable> GetEnvironments(string tableName)
        {

            var result = _context.LogTables.FromSql<LogTable>($"SELECT DISTINCT [Environment] AS Name FROM {tableName}");

            return result.ToArray();

        }

        // GET api/values
        [HttpGet("GetLevels/{tableName}")]
        public IEnumerable<LogTable> GetLevels(string tableName)
        {
            var result = _context.LogTables.FromSql<LogTable>($"SELECT DISTINCT [Level] AS Name FROM {tableName}");
            return result.ToArray();
        }
    }
}
