import { Outlet } from "react-router-dom";

const Main = () => {

    return ( 
        <div className="layout">
            <h1>Main</h1>
            <main>
                <Outlet/>
            </main>
            <img src="" alt="" />
        </div>
     );
}
 
export default Main;