"use client";

import { Calendar } from "@/components/ui/calendar";
import React, { useMemo } from "react";

const deadline: Date = new Date(2024, 6, 10);

const calculateDaysRemaining = (date: Date | undefined) => {
  if (typeof date === undefined) return "";
  const untilDeadlineInMilliseconds: number =
    deadline.getTime() - date!.getTime();
  const untilDeadlineInDays: number =
    untilDeadlineInMilliseconds / (24 * 60 * 60 * 1000);
  const daysRemaining = Math.floor(untilDeadlineInDays);
  return daysRemaining;
};

const CanCanNotPutPage: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const daysRemaining = useMemo(() => calculateDaysRemaining(date), [date]);

  return (
    <main className="flex min-h-screen flex-col justify-start space-y-5">
      <h2 className="flex justify-center text-2xl py-3">
        絶対に捨てられない缶
      </h2>
      <div className="text-xl mb-3">~ 商品について ~</div>
      <div>ただ今クラウドファウンディングを実施中です</div>
      <div className="text-lg space-x-3">
        <span>締日 :</span>
        <span>
          {deadline.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-xl mb-3">
          あと <span>{daysRemaining} 日</span>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border bg-white shadow"
        />
      </div>
    </main>
  );
};

export default CanCanNotPutPage;
