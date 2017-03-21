using System;

namespace Log4NetReader.Api.Models
{
    public class LogRecord
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public string Thread { get; set; }

        public string Level { get; set; }

        public string Logger { get; set; }

        public string Message { get; set; }

        public string Exception { get; set; }

        public string Environment { get; set; }
    }
}

