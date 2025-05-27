import React from "react";
import { CloudSun } from "lucide-react";

const WeatherSideBar: React.FC = () => {
  const weather = {
    temperature: 32,
    condition: "Sunny",
    date: Date.now(),
    city: "Nairobi",
  };

  console.log(weather)
  return (
    <div className="p-8 bg-white border rounded-xl border-gray-200 shadow-sm hover:shadow-md transition-shadow w-96 flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="p-4">
            <CloudSun className="w-28 h-28 text-gray-600" />
          </div>

          <div className="space-y-2">
            <div className="text-4xl font-light text-gray-800">
              {weather.temperature}°C
            </div>
            <div className="text-xl font-medium text-gray-700">
              {weather.condition}
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 space-y-1 pr-4">
          <div className="text-sm font-medium">{weather.date}</div>
          <div className="text-sm">{weather.city}</div>
        </div>
    </div>
  );
};

export default WeatherSideBar;
