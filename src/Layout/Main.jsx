import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";


const Main = () => {
    return (
        <div className="max-w-5xl">
            <Header/>
            <Outlet/>            
        </div>
    );
};

export default Main;