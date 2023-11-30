import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import SecuredPage from "./pages/Securedpage";
import Dashboard from "./pages/Dashboardpage";
import AccountPage from "./pages/AccountPage";
import PricingPage from "./pages/PricingPage";
import CampaignFormPage from "./pages/campaignFormPage";
import SettingPage from "./pages/SettingPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="about" element={ <AboutPage />}  />
                    <Route path="pricing" element={ <PricingPage />}  />
                    {/* <Route path="app" element={ <SecuredPage />}  >
                        <Route index element={ <Dashboard />}  />
                        <Route path="dashboard" element={ <Dashboard />}  />
                        <Route path="account" element={ <Account />}  />
                    </Route> */}
                    <Route path="app" element={<SecuredPage/>}/>
                    <Route path="app/dashboard" element={<Dashboard />} />
                    <Route path='app/campaign' element={<AccountPage />}/>
                    <Route path="app/campaign-form" element={<CampaignFormPage />}/>
                    <Route path="app/settings" element={<SettingPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
