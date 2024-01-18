using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TodoAPI.Modals;

namespace TodoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DBConnection _db;
        public WeatherForecastController(ILogger<WeatherForecastController> logger, DBConnection db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
        [HttpPatch("Todos")]
        public IActionResult UpdateTodos(Todo todo)
        {
           var myTodo = _db.TblTodo.Where(p => p.Id == todo.Id).FirstOrDefault();
           if (myTodo != null)
            {
                myTodo.Title = todo.Title;
                myTodo.Status = todo.Status;
                _db.Update(myTodo);
            }
            return Ok(myTodo);
        }
        [HttpPost("Todos")]
        public IActionResult CreateTodos(IEnumerable<Todo> todos)
        {
            _db.TblTodo.AddRange(todos);
            _db.SaveChanges();
            return Ok($"Added {todos.Count()} todos successfully");
        }
        [HttpPost("Todo")]
        [EnableCors("_origins")]
        public IActionResult CreateTodo(Todo todo)
        {
            _db.TblTodo.Add(todo);
            _db.SaveChanges();
            return Ok("Todo created successfully");
        }
        [HttpGet("Todos")]
        public IEnumerable<Todo> GetTodos(int? id)
        {
            return id.HasValue ? _db.TblTodo.Where(p=>p.Id == id.Value) : _db.TblTodo.Select(p => new Todo { Title = p.Title, Id = p.Id, Status = p.Status });
        }
    }
}
