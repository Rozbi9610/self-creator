import React from 'react';
import './index.scss'

import { Link } from 'react-router-dom';

export const NavTabSelf = () => {
    return (
        <div className='head-nav'>
            <div className='head-nav-tab'>
                <Link to='/self/s' class="head-link" >
                    <h4>SCO S</h4>
                </Link>
                <Link to="/self/x" class="head-link" >
                    <h4>SCO X</h4>
                </Link>
                <Link to="/self/ch" class="head-link" >
                    <h4>SCO Waga kontrolna</h4>
                </Link>
                <Link class="head-link" >
                    <h4>SCO S Sygnalizator</h4>
                </Link>
            </div>
        </div>

    )
}
