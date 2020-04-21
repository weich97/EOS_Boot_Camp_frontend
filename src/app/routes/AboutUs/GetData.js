import { Component } from "react";
import {ApiService} from '../../../services/';

class GetData extends Component{
    constructor(props) {
        //Inherit constructor
        super(props);
        //Bind functions
        this.loadUser = this.loadUser.bind(this);
        //Call 'loadUser' befor mounting the app
        this.loadUser();
    }

    loadUser(){
        
        const { setUser, user:{ name }} = this.props;
        return ApiService.getUserByName(name).then(user => {
            setUser({
                name: user.username,
                win_count: user.win_count,
                lost_count: user.lost_count,
            });
        });
    }
}

export default GetData;