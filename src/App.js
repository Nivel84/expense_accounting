import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2024, 9, 25),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2024, 10, 15),
    description: "Посудомоечная машина",
    amount: 499.99,
  },
  {
    id: "c3",
    date: new Date(2025, 11, 4),
    description: "Стиральная машина",
    amount: 699.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
