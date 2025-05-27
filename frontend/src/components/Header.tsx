"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onCitySelect: (city: string) => void;
}

const Header: React.FC<SearchBarProps> = ({ onCitySelect }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim()) {
      onCitySelect(searchValue.trim());
      setSearchValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="w-2/5">
        <input
          type="text"
          placeholder="Search city..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          //   onClick={handleKeyPress}
          className="input input-block bg-white border-gray-200 focus:border-blue-400 focus:ring-blue-400"
        />
      </div>
      <button className="btn bg-white border-2 border-gray-200 hover:bg-gray-50 text-black">Go</button>
      <button className="btn bg-white border-2 border-gray-200 hover:bg-gray-50 text-black">°C</button>
    </div>
  );
};

export default Header;
