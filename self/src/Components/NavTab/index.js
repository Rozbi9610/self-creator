import React from 'react';
import './index.scss'

import { Link } from 'react-router-dom';

export const NavTab = () => {
    return (
        <div className='head-nav'>
            <div className='nav-tabs'>
                <Link class="head-link" >
                    <h5>SCO S</h5>
                </Link>
                <Link class="head-link" >
                    <h5>SCO X</h5>
                </Link>
                <Link class="head-link" >
                    <h5>SCO Waga kontrolna</h5>
                </Link>
                <Link class="head-link" >
                    <h5>SCO S Sygnalizator</h5>
                </Link>
            </div>
        </div>

    )
}
