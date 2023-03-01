import { Outlet } from "react-router-dom";

import "./Main.scss";

const Main = () => {

    return ( 
        <div className="layout h-screen w-screen">
            <h1>Main</h1>
            <main>
                <Outlet/>
            </main>
            <img src="" alt="" />
        </div>
     );
}
 
export default Main;