import React from 'react';
import { ReactKeycloakProvider } from "@react-keycloak/web";

import keycloak from "../Keycloak";
import LeftNavigation from '../components/leftNavigation/leftNavigation';
import Header from '../components/header/header';

const Loading = () => <div>Loading...</div>

const Secured = () => {

    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}
                initOptions={{
                    onLoad: "login-required",
                }}
                LoadingComponent={<Loading />} >
                <LeftNavigation />
                <div className='right-container'>
                    <Header title="Dashboard" />
                </div>
            </ReactKeycloakProvider>
        </div>
    );
};

export default Secured;