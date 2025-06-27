import { useEffect, useState } from "react";

export default function Time() {
  const defaultTimezones = [
    "Asia/Kathmandu",
    "Asia/Tokyo",
    "Asia/Dubai",
    "Europe/London",
    "Europe/Paris",
    "America/New_York",
    "America/Los_Angeles",
    "Africa/Cairo",
    "Australia/Sydney",
  ];

  const [time, setTime] = useState("");
  const [zone, setZone] = useState("Asia/Kathmandu");
  const [customZone, setCustomZone] = useState("");

  const searchedTimezone = () => {
    return defaultTimezones.find((timeZone) => timeZone === customZone);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const nowTime = new Date().toLocaleTimeString("en-US", {
          timeZone: zone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setTime(nowTime);
      } catch (error) {
        setTime("Invalid Time Zone");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [zone]);

  const handleCustomZone = () => {
    if (customZone.trim() !== "") {
      const found = searchedTimezone();
      if (found) {
        setZone(found);
      } else {
        setZone(customZone.trim());
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col">
      <main className="flex-grow flex justify-center items-center px-4">
        <div className="flex flex-col gap-4 p-6 bg-white border border-amber-200 rounded-3xl shadow-xl w-full max-w-md">
          <h2 className="text-center text-4xl font-extrabold text-gray-800">World Clock</h2>

          <select
            className="text-lg font-medium text-gray-800 px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          >
            {defaultTimezones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter custom time zone (e.g., America/New_York)"
              value={customZone}
              onChange={(e) => setCustomZone(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm"
            />
            <button
              onClick={handleCustomZone}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600"
            >
              Show
            </button>
          </div>

          <p className="text-center text-5xl font-semibold text-blue-600 tracking-wide">
            {time}
          </p>
          <p className="text-center text-base text-gray-600">
            Your Zone:{" "}
            <span className="font-medium text-gray-800">{zone}</span>
          </p>
        </div>
      </main>
    </div>
  );
}
