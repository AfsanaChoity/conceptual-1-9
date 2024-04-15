import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    console.log(children);
    const location = useLocation()

    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;