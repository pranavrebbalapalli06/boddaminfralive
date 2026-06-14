"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

export function BookingCalendar({ onConfirm }: { onConfirm?: (d: Date, t: string) => void }) {
  const [date, setDate] = React.useState<Date | undefined>(() => {
    const t = new Date();
    t.setDate(t.getDate() + 2);
    return t;
  });
  const [selectedTime, setSelectedTime] = React.useState<string | null>("10:30");
  const [confirmed, setConfirmed] = React.useState(false);

  const timeSlots = React.useMemo(
    () =>
      Array.from({ length: 17 }, (_, i) => {
        const totalMinutes = i * 30;
        const hour = Math.floor(totalMinutes / 60) + 9;
        const minute = totalMinutes % 60;
        return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      }),
    [],
  );

  const bookedTimes = new Set(["11:00", "13:00", "15:30"]);

  return (
    <Card className="rounded-none border-border bg-card shadow-none p-0 overflow-hidden">
      <CardContent className="grid grid-cols-1 md:grid-cols-[auto_220px] p-0">
        <div className="border-r border-border p-6 md:p-8">
          <p className="font-tag text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-4">
            Pick a date
          </p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => { setDate(d); setConfirmed(false); }}
            disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0)) || d.getDay() === 0}
            className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(11)]"
          />
        </div>

        <div className="p-6 md:p-8 max-h-[420px] overflow-y-auto">
          <p className="font-tag text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-4">
            Slot (IST)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {timeSlots.map((time) => {
              const booked = bookedTimes.has(time);
              const active = selectedTime === time;
              return (
                <button
                  key={time}
                  disabled={booked}
                  onClick={() => { setSelectedTime(time); setConfirmed(false); }}
                  className={[
                    "w-full text-left px-3 py-2.5 text-sm border transition-all tabular-nums",
                    booked
                      ? "border-border/50 text-muted-foreground/40 line-through cursor-not-allowed"
                      : active
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border hover:border-foreground hover:bg-secondary",
                  ].join(" ")}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border bg-secondary/50 p-6 md:p-8">
        <div className="text-sm text-foreground">
          {date && selectedTime ? (
            confirmed ? (
              <span className="inline-flex items-center gap-2 text-accent font-tag">
                <Check size={16} /> Confirmed — we&apos;ll email a calendar invite.
              </span>
            ) : (
              <>
                <span className="font-tag text-[11px] tracking-[0.22em] uppercase text-muted-foreground block mb-1">
                  Your slot
                </span>
                <span className="font-display text-lg">
                  {date.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" })}
                  {" · "}{selectedTime}
                </span>
              </>
            )
          ) : (
            <span className="text-muted-foreground">Select a date and time.</span>
          )}
        </div>
        <Button
          disabled={!date || !selectedTime || confirmed}
          onClick={() => {
            if (date && selectedTime) {
              setConfirmed(true);
              onConfirm?.(date, selectedTime);
            }
          }}
          className="rounded-none bg-foreground text-background hover:bg-accent hover:text-accent-foreground px-7 h-12 text-[12px] tracking-[0.22em] uppercase"
        >
          {confirmed ? "Booked" : "Confirm booking"}
        </Button>
      </CardFooter>
    </Card>
  );
}
