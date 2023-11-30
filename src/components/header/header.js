import React from 'react'
import { useSelector } from 'react-redux'
import { headerTitle } from '../leftNavigation/leftNavigationSlice'
import './header.css'

export default function Header(props) {

    const _headerTitle = useSelector(headerTitle);
    console.log(props)

    return (
        <div className='header-container'>
            {
                props.title == 'New Campaign'?
                <button className='btn-close' onClick={() => {window.location = '/app/campaign'}}></button>: null
            }
            {props.title}
        </div>
    )
}
