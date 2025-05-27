import React from "react";
import { Sun, CloudSun, Cloudy } from "lucide-react";

interface ForecastCardProps {
  forecast: {
    date: string;
    temperature: string;
    condition: string;
    icon: string;
  };
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "sun":
        return <Sun className="w-12 h-12 text-yellow-500" />;
      case "cloud-sun":
        return <CloudSun className="w-12 h-12 text-gray-600" />;
      default:
        return <Sun className="w-12 h-12 text-yellow-500" />;
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-sm font-medium text-gray-600">{forecast.date}</div>
        <div className="py-2">{getIcon(forecast.icon)}</div>
        <div className="text-sm font-medium text-gray-700">
          {forecast.temperature}
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
