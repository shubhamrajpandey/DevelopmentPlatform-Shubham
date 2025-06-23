import { useEffect, useState } from "react";

export default function Time() {
    const timezones = [
        "Asia/Kathmandu",
        "Asia/Tokyo",
        "Europe/London",
        "America/New_York",
        "Australia/Sydney"
    ];

    const [time, setTime] = useState("");
    const [zone, setZone] = useState("Asia/Kathmandu");

    //useEffect is the hook which is use to perform the sideeffect in the functional Componenet
    //sideEffect is the operation that affect something outside the scope
    //like: API Fetch, DOM update
    useEffect(() => {
        const interval = setInterval(() => {
            const nowTime = new Date().toLocaleTimeString("en-US", {
                timeZone: zone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
            setTime(nowTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [zone]);

    return (
        <div className="flex flex-col gap-2.5 ml-[80vh] mt-[30vh] border-2 border-amber-50 rounded-2xl shadow-2xl w-[50vh]">
            <h1 className="text-center text-4xl font-bold text-black-600">World Clock</h1>
            <select
                className="text-center text-xl font-bold-[16px] "
                value={zone}
                onChange={(e) => setZone(e.target.value)}
            >
                {timezones.map((tz) => (
                    <option key={tz} value={tz}>
                        {tz}
                    </option>
                ))}
            </select>
            <p className="text-center text-3xl font-bold">{time}</p>
            <p className="text-center text-[16px] font-bold-[16px] ">Your Zone: {zone}</p>
        </div>
    )
}
