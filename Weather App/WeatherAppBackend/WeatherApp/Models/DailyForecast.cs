public class DailyForecast
{
    public DateTime Date { get; set; }
    public double TempCelsiusHigh { get; set; }
    public double TempCelsiusLow { get; set; }
    public double TempFahrenheitHigh => TempCelsiusHigh * 9 / 5 + 32;
    public double TempFahrenheitLow => TempCelsiusLow * 9 / 5 + 32;
}