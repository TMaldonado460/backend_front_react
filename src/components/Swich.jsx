import {Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


import Odontologos from '../pages/Odontologos';

import Login from '../pages/Login';
import Index from '../pages/Index';




const Switch = () => {
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if (!localStorage.getItem("jwt")) { 
            navigate("/login")
        };
    }, [navigate])

    return (
            <Routes location={location}>
                <Route exact path="/">
                    <Route index element={<Index />} />
                    <Route path="login" element={<Login />} />
                    <Route path="odontologos" element={<Odontologos />} />
                </Route>
            </Routes>
        )
}

export default Switch;