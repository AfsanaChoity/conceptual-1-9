import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Hoom = () => {
    const user = useContext(AuthContext);
    console.log(user);
    
    return (
        <div>
            <h2>this is home</h2>
            
        </div>
    );
};

export default Hoom;