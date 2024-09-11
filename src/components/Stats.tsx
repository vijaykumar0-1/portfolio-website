"use client";
import CountUp from "react-countup";

const stats = [
  {
    plusApplicable: true,
    num: 2,
    text: "Years of experience",
  },
  {
    plusApplicable: false,
    num: 5,
    text: "Projects completed",
  },
  {
    plusApplicable: true,
    num: 12,
    text: "Technologies mastered",
  },
  {
    plusApplicable: true,
    num: 1100,
    text: "Code commites",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 md:pt-0 md:pb-0">
      <div className="container max-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] max-auto md:max-w-none">
          {stats.map((item, index) => {
            return (
              <div className="flex flex-1 gap-4 items-center  md:justify-start" key={index}>
                <span className="text-4xl md:text-6xl font-extrabold">
                  <CountUp end={item.num} duration={4} delay={2} />
                  <span className={`${item.plusApplicable ? "ml-2": ""}`}>{`${item.plusApplicable ? "+" : ""}`}</span>
                </span>
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                    {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
