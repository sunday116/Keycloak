import React from "react";

import Header from "./header/header";
import LeftNavigation from "./leftNavigation/leftNavigation";


const CustomNavbar = () => {
    // const { keycloak, initialized } = useKeycloak();


    // function loginHelper(){
    //   console.log("login clicked");
    //   console.log(keycloak);
    //   console.log(JSON.stringify(keycloak));
    //   keycloak.login();
    // };
    
    // function logoutHelper(){
    //   console.log("login clicked");
    //   keycloak.logout();
    // };


    return (
        <div>
            <LeftNavigation />
            <div className="right-containter">
                <Header  title="Account"/>
            </div>
        </div>
    );
};

export default CustomNavbar;
