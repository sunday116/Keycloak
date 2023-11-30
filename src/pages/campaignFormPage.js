import React from 'react'
import CampaignForm from '../components/campaign/campaign-form'
import LeftNavigation from '../components/leftNavigation/leftNavigation'
import '../assets/css/style.css'
import Header from '../components/header/header'

export default function CampaignFormPage() {
    return (
        <div>
            <LeftNavigation />
            <div className='right-container'>
                <Header title="New Campaign" />
                <CampaignForm />
            </div>
        </div>
    )
}
