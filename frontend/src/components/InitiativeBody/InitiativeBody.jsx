import { useState, useEffect } from "react";

import InitiativeBodyRow from "../InitiativeBodyRow/InitiativeBodyRow";
import "./InitiativeBody.scss";

const InitiativeBody = () => {
  const [turns, setTurns] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/turns')
      .then(res => res.json())
      .then(data => setTurns(data));
  }, []);

  return ( 
    <div className="initiative-table p-0.5 text-2xl">
      <div className="initiative-header m-0.5 px-11 flex relative">
        <h3 className="m-0.5 w-1/6 text-center relative">Initiative</h3>
        <h3 className="w-1/2 m-0.5 text-center relative">Name</h3>
        <h3 className="w-1/6 m-0.5 text-center relative">AC</h3>
        <h3 className="w-1/6 m-0.5 text-center relative">HP</h3>
      </div>
      <div className="initiative-body flex flex-col">
          {turns && turns.map(creature => <InitiativeBodyRow key={creature.id}>{creature}</InitiativeBodyRow>)}
      </div>
    </div>
   );
};

export default InitiativeBody;
