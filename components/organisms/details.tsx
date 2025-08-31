import React from "react";
import CardsSection from "../molecules/cards";
import { DoughnutChart } from "../molecules/radialchart";
import { IncomeCharts } from "../molecules/IncomeradialChart";
import { MultipleSaleChart } from "../molecules/multiplebarchartsale";
import { IncomeStacked } from "../molecules/stackedbarchart";
import { BarChartQuery } from "../molecules/barchartofsearches";
import { ChartBarActive } from "../molecules/activebarChart";

const DetailsSection = () => {
  return (
    <>
      <div className="flex flex-col">
        <CardsSection />
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col gap-5 py-10">
            <DoughnutChart />
            <IncomeCharts />
          </div>
          <div className="col-span-3 w-full grid grid-cols-2 pl-10 py-10 gap-5">
            <MultipleSaleChart />
            <ChartBarActive />

            <IncomeStacked />
            <BarChartQuery />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
