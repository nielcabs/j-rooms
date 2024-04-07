"use client";

import React, { useState, useEffect } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [date, setDate] = useState(
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(new Date())
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setDate(
        new Intl.DateTimeFormat("en-US", {
          dateStyle: "full",
        }).format(now)
      );
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-auto md:h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-fit lg:h-full flex-col justify-between px-5 py-8 lg:p-11">
          {/* <p className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </p> */}
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-extrabold lg:text-7xl">{time}</p>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
