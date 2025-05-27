import React from "react";
import { Clock } from "lucide-react";

interface MetricsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  showProgress?: boolean;
  progressValue?: number;
}

const MoreInfo: React.FC<MetricsCardProps> = ({
  title,
  value,
  subtitle,
  showProgress = false,
  progressValue = 0,
}) => {
  return (
    <div className="p-6 bg-white mt-8 border rounded-xl border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-4 w-full flex flex-col items-center">
        <div className="text-sm font-medium text-gray-600">{title}</div>

        <div className="text-2xl font-light text-gray-800">{value}</div>

        {subtitle && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{subtitle}</span>
          </div>
        )}
        {showProgress && (
          <div className="space-y-2 w-full">
            <progress
              className="progress h-4 w-full"
              value="80"
              max="100"
            ></progress>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreInfo;
