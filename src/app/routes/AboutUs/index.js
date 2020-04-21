import React, { Component } from 'react';
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from 'util/IntlMessages';
import {connect} from 'react-redux';
import {ApiService} from '../../../services/';
import {UserAction} from 'actions';
import {PlayerProfile} from './PlayerProfile';


class AboutUs extends Component{
    _isMounted = false;
    constructor(props) {
        //Inherit constructor
        super(props);
        //Bind functions
        this.loadUser = this.loadUser.bind(this);
        //Call 'loadUser' befor mounting the app
        this.loadUser();
        this.state = {
            hits: []
        }

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

    fetchData(){
        const { setUser, user:{ name }} = this.props;
        return ApiService.getAllRecord().then(data => this.setState({
           hits: data
        }))
    }

    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted){
            this.fetchData();
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }


    
    render(){
        const {user: {name, win_count,lost_count}} = this.props;
        const hits = this.state;
        console.log(hits)
        return(
            <div className = "app-wrapper">
            {/* <ContainerHeader title = {< IntlMessages id="about Us" />} /> */}
            <div className = "row">
                {this.props.user.name}
                {hits.hits.map((hit, key) => 
                    <li key = {hit.username}>{hit.username}</li>    
                )}
                <h2></h2>

            </div>
           
        </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setUser: UserAction.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps) (AboutUs);