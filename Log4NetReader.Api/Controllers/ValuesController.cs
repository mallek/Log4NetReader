using Log4NetReader.Api.Data;
using Log4NetReader.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Log4NetReader.Api.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly Log4NetReaderContext _context;
        public ValuesController(Log4NetReaderContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var count = 0;

            foreach (string tableName in new[] { "CompensationModule_Log", "DataFeeds_Log" })
            {
                var result = _context.LogRecords.FromSql<LogRecord>($"Select top 10 * from {tableName}");
                count += result.Count();
            }


            var record = _context.LogRecords.First();
            return new string[] { record.Message, record.Environment, count.ToString() };

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
