const InitiativeBodyRow = ({children}) => {

    const { id, initiative, name, armor_class, hit_points } = children;
    
    return ( 
        <div className="initiative-body-row grid grid-cols-6">
            <i className="material-symbols-outlined">drag_indicator</i>
            <div>
                <input className="initiative" type="number" value={initiative}/>
                <div className="modifier"></div>
                <div className="dice-roll"></div>
            </div>
            <input type="text" className="character-name" value={name}/>
            <input type="number" className="armor_class" value={armor_class}/>
            <input type="number" className="hit_points" value={hit_points}/>
            <button className="material-symbols-outlined">delete</button>
        </div>
     );
}
 
export default InitiativeBodyRow;