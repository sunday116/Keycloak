import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLemon, faCog, faColumns, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { selHeaderTitle } from './leftNavigationSlice';
import './leftNavigation.css';
import $ from 'jquery'
import { Link } from 'react-router-dom';

export default function LeftNavigation() {

    const dispatch = useDispatch();

    useEffect(() => {
        switch (window.location.pathname) {
            case '/app/settings':
                $('#settingTab').addClass('active');
                break;
            case '/app/dashboard':
                $('#dashboardTab').addClass('active');
                break;
            case '/app/campaign':
                $('#campaignTab').addClass('active');
                break;
            case '/app/campaign-form':
                $('#campaignTab').addClass('active');
                break;
            default:
                break;
        }
    }, [])
    

    function selSettingTab() {
        dispatch(selHeaderTitle('Settings'))
    }

    function test() {
        window.location = '/app/dashboard'
    }

    return (
        <nav className="navbar navbar-expand-lg pb-4">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-column w-100 nav-pills nav">
                        <li className="nav-item w-100">
                            <Link to='app/dashboard' className="nav-link" id='dashboardTab' data-bs-toggle="pill" onClick={() => {window.location = '/app/dashboard'}}>
                                <FontAwesomeIcon icon={faHome} />&nbsp;Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='campaignTab' data-bs-toggle="pill" href="#" onClick={() => {window.location = '/app/campaign'}}>
                                <FontAwesomeIcon icon={faLemon} />&nbsp;Campaigns
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container-fluid navbar-bottom'>
            <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-column w-100 nav">
                        <li className="nav-item w-100">
                            <a className="nav-link" id='settingTab' href="#" onClick={() => {window.location = '/app/settings'}}>
                                <FontAwesomeIcon icon={faCog} />&nbsp;&nbsp;&nbsp;Settings
                            </a>
                        </li>
                        <li className="nav-item w-100">
                            <a className="nav-link" id='docTab' href="#">
                                <FontAwesomeIcon icon={faColumns} />&nbsp;&nbsp;&nbsp;Docs
                            </a>
                        </li>
                        <li className="nav-item dropup">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                                <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;Elaine<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize: '11px'}}>ADMIN</span>
                                <span style={{position: 'absolute', right: '1rem', bottom: '20px'}}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            </a>
                            <ul className="dropdown-menu" style={{left: '10rem', bottom: '3rem', padding: '0px'}}>
                                <li style={{padding: '0px'}}><a className="dropdown-item" href="#">Log out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
