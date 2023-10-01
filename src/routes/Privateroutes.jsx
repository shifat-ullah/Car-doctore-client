/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Authcontext } from "../providers/Authproviders";
import { Navigate } from "react-router-dom";

const Privateroutes = ({children}) => {
    const {user, loader}=useContext(Authcontext);

    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if(user.email){
        return children
    }
    return <Navigate to="/login" replace>

        

    </Navigate>
};

export default Privateroutes;