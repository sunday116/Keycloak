import React from 'react';
import Header from '../components/header/header';
import LeftNavigation from '../components/leftNavigation/leftNavigation';

import '../assets/css/style.css'
import Campaign from '../components/campaign/campaign';

const AccountPage = () => {
    return (
        <div>
            <LeftNavigation />
            <div className='right-container'>
                <Header title="Campaigns"/>
                <Campaign />
            </div>
        </div>
    );
};

export default AccountPage;