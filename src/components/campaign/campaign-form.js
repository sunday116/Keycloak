import React from 'react'
import $ from 'jquery'
import { TextField } from '@mui/material';
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './campaign-form.css'

import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        value: 'Monetary',
        label: 'Monetary',
    },
    {
        value: 'Monetary',
        label: 'Monetary',
    },
    {
        value: 'Monetary',
        label: 'Monetary',
    },
    {
        value: 'Monetary',
        label: 'Monetary',
    },
];


export default function CampaignForm() {

    function NextOrBeforeBtnClk(page, param) {

        $('.cForm' + page).addClass('display-none');

        $('.cForm' + (page + param)).removeClass('display-none');
    }
    return (
        <div className='campaignForm-container'>
            <div className='cForm1'>
                <h4 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Campaign type</h4>
                <h6 style={{ marginBottom: '3rem' }}>Select campaign type that suits your need</h6>
                <div className='row'>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <div className='d-flex justify-content-between'>
                            <h5>Refer a friend</h5>
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" style={{ cursor: 'pointer' }} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae eleifend tincidunt lectus turpis lacus eleifend lectus proin ut. Ullamcorper ac urna euismod risus fancibus eget velit eu. Est sit pellentesque lectus etiam crus et. Adipiscing cursus a purus arcu senectus metus tincidunt. Ac risus vulputate erat falls argue. Ut vel ullamcorper lectus viverra eu mi amet denec.</p>
                    </div>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <div className='d-flex justify-content-between'>
                            <h5>Milestone</h5>
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" style={{ cursor: 'pointer' }} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae eleifend tincidunt lectus turpis lacus eleifend lectus proin ut. Ullamcorper ac urna euismod risus fancibus eget velit eu. Est sit pellentesque lectus etiam crus et. Adipiscing cursus a purus arcu senectus metus tincidunt. Ac risus vulputate erat falls argue. Ut vel ullamcorper lectus viverra eu mi amet denec.</p>
                    </div>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <div className='d-flex justify-content-between'>
                            <h5>Leadership board</h5>
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" style={{ cursor: 'pointer' }} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae eleifend tincidunt lectus turpis lacus eleifend lectus proin ut. Ullamcorper ac urna euismod risus fancibus eget velit eu. Est sit pellentesque lectus etiam crus et. Adipiscing cursus a purus arcu senectus metus tincidunt. Ac risus vulputate erat falls argue. Ut vel ullamcorper lectus viverra eu mi amet denec.</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{ marginTop: '3rem' }}>
                    <div></div>
                    <button className='btn btn-success' style={{ marginRight: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(1, 1)}>Next</button>
                </div>
            </div>
            <div className='cForm2 display-none'>
                <h4 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Campaign sub-type</h4>
                <h6 style={{ marginBottom: '3rem' }}>Select campaign type that suits your need</h6>
                <div className='row'>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <div className='d-flex justify-content-between'>
                            <h5>Single side</h5>
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" style={{ cursor: 'pointer' }} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae eleifend tincidunt lectus turpis lacus eleifend lectus proin ut. Ullamcorper ac urna euismod risus fancibus eget velit eu. Est sit pellentesque lectus etiam crus et. Adipiscing cursus a purus arcu senectus metus tincidunt. Ac risus vulputate erat falls argue. Ut vel ullamcorper lectus viverra eu mi amet denec.</p>
                    </div>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <div className='d-flex justify-content-between'>
                            <h5>Double side</h5>
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" style={{ cursor: 'pointer' }} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae eleifend tincidunt lectus turpis lacus eleifend lectus proin ut. Ullamcorper ac urna euismod risus fancibus eget velit eu. Est sit pellentesque lectus etiam crus et. Adipiscing cursus a purus arcu senectus metus tincidunt. Ac risus vulputate erat falls argue. Ut vel ullamcorper lectus viverra eu mi amet denec.</p>
                    </div>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col d-flex justify-content-between'>
                        <div></div>
                        <div>
                            <button className='btn btn-success' style={{ marginRight: '1rem', marginTop: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(2, -1)}>Previous</button>
                            <button className='btn btn-success' style={{ marginRight: '3rem', marginTop: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(2, 1)}>Next</button>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
            <div className='cForm3 display-none'>
                <h4 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Campaign details</h4>
                <h6 style={{ marginBottom: '3rem' }}>Fill in information about your campaign</h6>
                <div className='row'>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <h5>Campaign name</h5>
                        <p>Campaign name</p>
                        <input type="text" className="form-control" placeholder="First Name" />
                        <h6 className='mt-3'>End?</h6>
                        <div>
                            <input type="radio" className="form-check-input" id="radio1" name="optradio1" value="option1" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="radio2" name="optradio1" value="option2" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;No
                        </div>
                        <div className='mt-3'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker label="Start date" defaultValue={dayjs('2022-04-17')} />
                            </DemoContainer>
                        </LocalizationProvider>
                        </div>
                        <div className='mt-3'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker label="End date" defaultValue={dayjs('2022-04-17')} />
                            </DemoContainer>
                        </LocalizationProvider>
                        </div>
                        <h6 className='mt-3'>Hosting URL</h6>
                        <div>
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;Self_hosted&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;Referral_rocket_hosted
                        </div>
                    </div>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                    </div>
                    <div className='col' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                    </div>
                </div>
                <div className='row'>
                    <div className='col d-flex justify-content-between'>
                        <div></div>
                        <div>
                            <button className='btn btn-success' style={{ marginRight: '1rem', marginTop: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(3, -1)}>Previous</button>
                            <button className='btn btn-success' style={{ marginRight: '3rem', marginTop: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(3, 1)}>Next</button>
                        </div>
                    </div>
                    <div className='col'></div>
                    <div className='col'></div>
                </div>
            </div>
            <div className='cForm4 display-none'>
                <h4 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Rewards details</h4>
                <h6 style={{ marginBottom: '3rem' }}>Fill in information about your campaign</h6>
                <div className='row'>
                    <div className='col-4' style={{ paddingLeft: '2rem', paddingRight: '2rem', overflow: 'auto', height: 'calc(100vh - 160px - 6rem)' }}>
                        <h5>Referral program header</h5>
                        <input type="text" className="form-control mt-3 mb-3" placeholder="Enter referral program header name" />
                        <h5>Referral program description</h5>
                        <input type="text" className="form-control mt-3 mb-3" placeholder="Enter referral program description name" />
                        <h5>End?</h5>
                        <div className='mb-3 mt-3'>
                            <input type="radio" className="form-check-input" id="radio1" name="optradio1" value="option1" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" className="form-check-input" id="radio2" name="optradio1" value="option2" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;No
                        </div>
                        <h6 className='mb-3 mt-3'>Referral reward value</h6>
                        <TextField
                            id="outlined-number"
                            label=""
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                        <h6 className='mb-3 mt-3'>Reward type</h6>
                        <TextField id="filled-select-currency" select label="" defaultValue="EUR" variant="filled" >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <h6 className='mb-3 mt-3'>Reward currency</h6>
                        <TextField id="filled-select-currency" select label="" defaultValue="EUR" variant="filled" >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <div className='mt-3'>
                            <input type="radio" className="form-check-input" id="radio1" name="optradioLimit" value="option1" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;Limit on referrer reward
                        </div>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <p style={{ color: 'red' }}>Test mode</p>
                        <h4>Refer a friend and win</h4>
                        <h6>For every friend you refer, we will give you $10</h6>
                        <div className='mt-3 mb-3'>
                            <TextField
                                id="filled-multiline-flexible"
                                label="First Name"
                                multiline
                                maxRows={4}
                                variant="filled"
                            />
                        </div>
                        <div className='mt-3 mb-3'>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Last Name"
                                multiline
                                maxRows={4}
                                variant="filled"
                            />
                        </div>
                        <div className='mt-3 mb-3'>
                            <TextField
                                id="filled-multiline-flexible"
                                label="example@gmail.com"
                                multiline
                                maxRows={4}
                                variant="filled"
                            />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-success' style={{ width: '100%', backgroundColor: '#6466f1', border: '#6466f1' }}>Submit</button>
                            <div></div>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <p>Powered by&nbsp;&nbsp;</p>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', backgroundColor: '#6466f1', marginTop: '5px' }}></div>
                            <p>&nbsp;&nbsp;Company name</p>
                        </div>
                        <div className='col d-flex justify-content-between'>
                            <div></div>
                            <div>
                                <button className='btn btn-success' style={{ marginRight: '1rem', marginTop: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(4, -1)}>Previous</button>
                                <button className='btn btn-success' style={{ marginRight: '3rem', marginTop: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(4, 1)}>Next</button>
                            </div>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </div>
            <div className='cForm5 display-none'>
                <h4 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Share details</h4>
                <h6 style={{ marginBottom: '3rem' }}>Fill in information about your campaign</h6>
                <div className='row'>
                    <div className='col-4' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <h6>Share program header</h6>
                        <input type="text" className="form-control mt-3 mb-3" placeholder="Enter referral program header name" />
                        <h6>Share program description</h6>
                        <input type="text" className="form-control mt-3 mb-3" placeholder="Enter referral program description name" />
                    </div>
                    <div className='col-6' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <h6 style={{ color: 'red' }}>Test mode</h6>
                        <h4>Win $10 for every referral</h4>
                        <h5>Use your unique link to earn reward</h5>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Your Email" defaultValue={'https://www.figmafakeurl.com/dja2k19f8sdfj2'} />
                            <span className="input-group-text" style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={faCopy} />
                            </span>
                        </div>
                        <div className='d-fiex mt-3'>
                            <img src='/assets/img/social-1.png' style={{ width: '30px', marginRight: '15px' }} />
                            <img src='/assets/img/social-2.png' style={{ width: '30px', marginRight: '15px' }} />
                            <img src='/assets/img/social-3.png' style={{ width: '30px', marginRight: '15px' }} />
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <div className="card" style={{ width: '50%' }}>
                                <div className="card-header" style={{ border: 'none', background: 'transparent', fontSize: '70px' }}>#1</div>
                                <div className="card-body">Your current position</div>
                            </div>
                            <div className="card" style={{ width: '50%' }}>
                                <div className="card-header" style={{ border: 'none', background: 'transparent', fontSize: '70px' }}>0</div>
                                <div className="card-body">Referrals</div>
                            </div>
                        </div>
                        <h4 className="mt-3 mb-3">Liderboard</h4>
                        <h5>1.Karan S.</h5>
                        <h6>Come back to out page to check your place in the leaderboard</h6>
                        <div className='d-flex justify-content-center'>
                            <p>Powered by&nbsp;&nbsp;</p>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', backgroundColor: '#6466f1', marginTop: '5px' }}></div>
                            <p>&nbsp;&nbsp;Company name</p>
                        </div>
                        <div className='col d-flex justify-content-between'>
                            <div></div>
                            <div>
                                <button className='btn btn-success' style={{ marginRight: '1rem', marginTop: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(5, -1)}>Previous</button>
                                <button className='btn btn-success' style={{ marginRight: '3rem', marginTop: '3rem', backgroundColor: '#6466f1', border: '#6466f1' }} onClick={() => NextOrBeforeBtnClk(4, 1)}>Next</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        </div>
    )
}
