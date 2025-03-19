using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OhioHealthAssessment.Data;
using OhioHealthAssessment.Models;

namespace OhioHealthAssessment.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public UserController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        // Middleware to validate API key
        private bool IsValidApiKey(string key)
        {
            Console.WriteLine($"Received API Key: {key}");
            Console.WriteLine($"Expected API Key: {_configuration["ApiKey"]}");
            return key == _configuration["ApiKey"];
        }

        //POST: api/users/save (Save User)
        [HttpPost("save")]
        public async Task<IActionResult> SaveUser([FromBody] UserModel user, [FromHeader(Name = "x-api-key")] string apiKey)
        {
            if (!IsValidApiKey(apiKey))
                return Unauthorized("Invalid API Key");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(new { Message = "User saved successfully" });
        }

        //GET: api/users/retrieve (Retrieve Users)
        [HttpGet("retrieve")]
        public async Task<IActionResult> GetUsers([FromHeader(Name = "x-api-key")] string apiKey)
        {
            if (!IsValidApiKey(apiKey))
                return Unauthorized("Invalid API Key");

            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }
    }
    
}
