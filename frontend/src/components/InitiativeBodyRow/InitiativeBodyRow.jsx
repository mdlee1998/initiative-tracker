import "./InitiativeBodyRow.scss";

const InitiativeBodyRow = ({children}) => {

    const { id, initiative, name, armorClass, hitPoints } = children;
    
    return ( 
        <div className="initiative-body-row flex content-center justify-between h-12">
            <i className="material-symbols-outlined m-0.5 w-10 align-middle text-3xl text-center row-element">drag_indicator</i>
            <div className="m-0.5 relative w-1/6 row-element">
                <input className="initiative h-full w-full px-2" type="number" value={initiative}/>
                <div className="modifier" />
                <div className="dice-roll" />
            </div>
            <div className="m-0.5 relative w-1/2 row-element">
                <input type="text" className="character-name h-full w-full px-2" value={name}/>
            </div>
            <div className="m-0.5 relative w-1/6 row-element">
                <input type="number" className="armor_class h-full w-full px-2" value={armorClass}/>
            </div>
            <div className="m-0.5 relative w-1/6 row-element">
                <input type="number" className="hit_points h-full w-full px-2" value={hitPoints}/>
            </div>
            <div className="m-0.5 w-10 row-element">
                <button type="button" className="material-symbols-outlined h-full w-full">delete</button>
            </div>
        </div>
     );
};
 
export default InitiativeBodyRow;