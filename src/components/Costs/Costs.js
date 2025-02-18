import React, { useState } from "react";
import CostsList from "./CostsList";
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";
import "./Costs.css";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
        <CostsDiagram costs={filteredCosts} />
        <CostsList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
