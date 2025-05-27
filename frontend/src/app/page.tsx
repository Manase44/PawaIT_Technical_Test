import ForecastCard from "@/components/ForcastCard";
import Header from "@/components/Header";
import MoreInfo from "@/components/MoreInfo";
import WeatherSideBar from "@/components/SideBar";

export default function Home() {
  const forecast = [
    { date: "21 May", temperature: "11-45°C", condition: "sunny", icon: "sun" },
    {
      date: "22 May",
      temperature: "20-36°C",
      condition: "cloudy",
      icon: "cloud-sun",
    },
    { date: "23 May", temperature: "16-30°C", condition: "sunny", icon: "sun" },
  ];
  const metrics = {
    windSpeed: "3 km/h",
    humidity: "80%"
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 flex gap-4">
      <WeatherSideBar />
      <div className="flex-1">
        <Header />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {forecast.map((day, index) => (
            <ForecastCard key={index} forecast={day} />
          ))}
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MoreInfo 
                title="Wind Speed" 
                value={metrics.windSpeed}
                subtitle="NNW"
              />
              <MoreInfo 
                title="Humidity" 
                value={metrics.humidity}
                showProgress={true}
                progressValue={80}
              />
            </div>
      </div>
    </div>
  );
}
