import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ApiService} from '../../../services';
import {UserAction} from '../../../actions';


const AboutTest = (props) =>{
    const dispatch = useDispatch();
    
    function loadUser() {
        return ApiService.getUserByName("cardgame").then(user =>{
            console.log(user);
            dispatch(UserAction.setUser({username: user.username}));
        });
    }

    loadUser();

        return (
            <h2>Test page</h2>
        )

}

export default AboutTest;