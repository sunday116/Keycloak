import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoutes = () => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;
 console.log("checking auth access " + isLoggedIn);
 console.log(keycloak);
 return isLoggedIn ? <Outlet/> : null;
};

export default PrivateRoutes;
