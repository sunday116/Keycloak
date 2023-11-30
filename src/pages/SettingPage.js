import React from 'react';
import LeftNavigation from '../components/leftNavigation/leftNavigation';
import Header from '../components/header/header';
import Setting from '../components/setting/setting';

const SettingPage = () => {

    return (
        <div>
            <LeftNavigation />
            <div className='right-container'>
                <Header title="Settings" />
                <Setting />
            </div>
        </div>
    );
};

export default SettingPage;