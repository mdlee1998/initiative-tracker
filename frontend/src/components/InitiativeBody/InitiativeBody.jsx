import InitiativeBodyRow from "../InitiativeBodyRow/InitiativeBodyRow";

import "./InitiativeBody.scss";

const InitiativeBody = () => {
  const encounterData = [
    { id: 1, initiative: 15, name: 'Ailane', armor_class: 28, hit_points: 6 },
    {
      id: 2,
      initiative: 4,
      name: 'Realcube',
      armor_class: 14,
      hit_points: 489
    },
    {
      id: 3,
      initiative: 8,
      name: 'Jetpulse',
      armor_class: 24,
      hit_points: 105
    },
    {
      id: 4,
      initiative: 14,
      name: 'Wordware',
      armor_class: 20,
      hit_points: 252
    },
    { id: 5, initiative: 15, name: 'Quaxo', armor_class: 29, hit_points: 48 }
  ];

  return ( 
    <div className="initiative-body flex flex-col p-0.5 text-2xl">
        {encounterData.map(creature => <InitiativeBodyRow key={creature.id}>{creature}</InitiativeBodyRow>)}
    </div>
   );
};

export default InitiativeBody;