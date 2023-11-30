import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import $ from 'jquery';

import './setting.css'

export default function Setting() {

    const countryCodes = [
        { value: 'US', label: 'United States', code: '+1' },
        { value: 'CA', label: 'Canada', code: '+1' },
        { value: 'MX', label: 'Mexico', code: '+52' },
    ];

    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

    const handleCountryChange = (country) => {
        $('#phoneNumberSetting').val(country.code)
        setSelectedCountry(country);

    };

    return (
        <div className='main-container'>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#account">Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#apikeys">API keys</a>
                </li>
            </ul>

            <div className="tab-content">
                <div id="account" className="container tab-pane active"><br />
                    <div>
                        <h4>Profile</h4>
                        <p>This information can be edited.</p>
                    </div>
                    <div>
                        <h6>Email</h6>
                        <input type="text" className="form-control w-25" placeholder="Superscale" />
                    </div>
                    <div className='d-flex' style={{ marginTop: '1rem' }}>
                        <div>
                            <h6>First Name</h6>
                            <input type="text" className="form-control w-100" placeholder="Sanfrancisco" />
                        </div>
                        <div style={{ marginLeft: '2rem' }}>
                            <h6>Last Name</h6>
                            <input type="text" className="form-control w-100" placeholder="United States" />
                        </div>
                    </div>
                    <div className='d-flex' style={{ marginTop: '1rem' }}>
                        <div style={{ width: '13rem' }}>
                            <h6>Country</h6>
                            <select className='form-select' value={selectedCountry.value} onChange={(e) => handleCountryChange(countryCodes.find(country => country.value === e.target.value))}>
                                {
                                    countryCodes.map((country) => (
                                        <option key={country.value} value={country.value}>
                                            {country.label}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div style={{ marginLeft: '2rem' }}>
                            <h6>Phone Number</h6>
                            <input type='tel' autoComplete='tel' id='phoneNumberSetting' className='form-control w-100 PhoneInputInput' placeholder='input phone number' />
                        </div>
                    </div><br />
                    <div>
                        <h4>Company Details</h4>
                        <p>I have information can be edited.</p>
                    </div>
                    <div className='d-flex' style={{ marginTop: '1rem' }}>
                        <div>
                            <h6>Company Name</h6>
                            <input type="text" className="form-control w-100" placeholder="Tom" />
                        </div>
                        <div style={{ marginLeft: '2rem' }}>
                            <h6>Company Website</h6>
                            <input type="text" className="form-control w-100" placeholder="United States" />
                        </div>
                    </div>
                    <div className='d-flex' style={{ marginTop: '1rem' }}>
                        <div style={{ width: '13rem' }}>
                            <h6>Country</h6>
                            <select className="form-select">
                                <option>Calitonia</option>
                                <option>United State</option>
                                <option>United Kingdom</option>
                                <option>Ukraine</option>
                            </select>
                        </div>
                        <div style={{ marginLeft: '2rem' }}>
                            <h6>Role</h6>
                            <input type="text" className="form-control w-100" placeholder="94105" />
                        </div>
                    </div>
                </div>
                <div id="apikeys" className="container tab-pane fade"><br />
                    <div>
                        <h4>API keys</h4>
                        <p>API keys are used to authenticate requests against the Orb API. These keys should be treated like passwords.</p>
                    </div>
                    <div className='apikeys-display d-flex flex-wrap align-content-center justify-content-between'>
                        <p id='apikey' className='d-flex flex-wrap align-content-center'>Key:&nbsp;XXXXXXXX</p>
                        <button className='btn btn-success'>show</button>
                    </div>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#apikeysModal"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>&nbsp;&nbsp;Create new API key</button>
                </div>
            </div>
        </div>
    )
}
