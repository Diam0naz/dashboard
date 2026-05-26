import React from "react";
import { WalletMinimalIcon } from "../ui/WalletMinimalIcon";
import { ChartColumnIcon } from "../ui/ChartColumnIcon";
import { UsersRoundIcon } from "../ui/UsersRoundIcon";
import { CheckCheckIcon } from "../ui/CheckCheckIcon";

const CardsSection = () => {
  const data = [
    { title: "Total Income", value: 250000.0 },
    { title: "Inquiry Success Rate", value: 36.2 },
    { title: "Number of New Clients", value: 36 },
  ];

  return (
    <>
      <section>
        <div className="flex justify-evenly items-center gap-5 pt-16">
          <div className="flex flex-col items-start w-96 border rounded-2xl p-5 space-y-3 transition-shadow hover:shadow-md">
            <WalletMinimalIcon className="text-zinc-400" />
            <h4 className="text-base font-semibold text-zinc-600 dark:text-zinc-400">
              Total Income
            </h4>
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-50">$250,000.00</h2>
          </div>
          <div className="flex flex-col items-start w-96 border rounded-2xl p-5 space-y-3 transition-shadow hover:shadow-md">
            <ChartColumnIcon className="text-zinc-400" />
            <h4 className="text-base font-semibold text-zinc-600 dark:text-zinc-400">
              Inquiry Success Rate
            </h4>
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-50">36.2%</h2>
          </div>
          <div className="flex flex-col items-start w-96 border rounded-2xl p-5 space-y-3 transition-shadow hover:shadow-md">
            <UsersRoundIcon className="text-zinc-400" />
            <h4 className="text-base font-semibold text-zinc-600 dark:text-zinc-400">
              Number of New Clients
            </h4>
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-50">36</h2>
          </div>
          <div className="flex flex-col items-start w-96 border rounded-2xl p-5 space-y-3 transition-shadow hover:shadow-md">
            <CheckCheckIcon className="text-zinc-400" />
            <h4 className="text-base font-semibold text-zinc-600 dark:text-zinc-400">
              Number of New Completed Projects
            </h4>
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-50">29</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsSection;
