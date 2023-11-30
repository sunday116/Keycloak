import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useKeycloak } from '@react-keycloak/web';
import LeftNavigation from '../components/leftNavigation/leftNavigation';
import Header from '../components/header/header';
import Main from '../components/setting/setting';

import '../assets/css/style.css'



const Dashboard = () => {
//     const { keycloak } = useKeycloak();
//     const [result, setResult] = useState("");
//     const [test, setTest] = useState("");
//     const client = axios.create({
//         baseURL: "http://localhost:7171/api/"
//     });

//     client.interceptors.request.use(
//     (config) => {
//         console.log("keycloak");
//         console.log(keycloak);
//         config.headers.Authorization = ` Bearer ${keycloak.token}`;
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

    // useEffect(() => {
    //     client.get('private/test').then((response) => {
    //         setResult(response.data);
    //     });
    //     client.get('public/test').then((response) => {
    //         setTest(response.data);
    //     });
    // }, []);

    return (
        <div>
            <LeftNavigation />
            <div className='right-container'>
                <Header title="Dashboard"/>
            </div>
        </div>
    );
};

export default Dashboard;
