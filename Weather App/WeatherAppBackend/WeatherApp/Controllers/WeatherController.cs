[ApiController]
[Route("api/[contoller]")]
public class WeatherController : ControllerBase
{
    private readonly IWeatherService _weatherService;
    public WeatherController(IWeatherService weatherService)
    {
        _weatherService = weatherService;
    
    }
    [HttpGet]
    public async Task<IActionResult> GetWeather([FromQuery] string[] locations)
    {
        if (locations.Length < 2)
            return BadRequest("Please provide at least two locations");
        var weatherData = await _weatherService.GetWeatherDataAsync(locations);
        var delta = DeltaCalculator.Calculate(weatherData[0], weatherData[1]);
        return Ok(new { weatherData, delta });
    }
}