import React, { useState, Component } from "react";
import ContainerHeader from "components/ContainerHeader";
import InitMessages from "util/IntlMessages";
import classNames from 'classnames';
import Widget from "components/Widget/index";
import {allNews, bitCoinNews, lightCoinNews, rippleNews} from './data';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import TabListDetails from "./TabListDetails";
import {connect} from 'react-redux';
import {ApiService} from '../../../../../services';

const TrySearch = (props) =>{

    const [tabIndex,setTabIndex] = useState(1);
    const onNavHome = () => {
        //alert("clicked");
    }
    return (
        <div className = "dashboard animated slideInUpTiny animation-duration-3">
            

            <div className = "row">
            <div className= "col-xl-2 col-lg-2 col-md-2 col-2"></div>
            <div className= "col-xl-8 col-lg-8 col-md-12 col-12">

            <Widget>
                <div className = "d-flex flex-row justify-content-between mb-2">
                    <h4 className = "mr-2">Recent Posting {props.kkk}</h4>

                    <span className = "ml-2 pointer"><i className ="zmdi zmdi-search text-primary jr-fs-xl" /></span>
                </div>

                <div className = "jr-news-action jr-tabs-classic jr-tabs-classic-no-border">
                    <div className ="jr-tabs-up jr-tabs-up-no-border">
                        <Nav className = "jr-tabs-pills-ctr" pills>
                            <NavItem>
                                <NavLink className = {classNames({active: tabIndex === 1})}
                                onClick={() => {
                                    setTabIndex(1);
                                }}>All</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = {classNames({active: tabIndex === 2})}
                                onClick={() => {
                                    setTabIndex(2);
                                }}>Option 1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = {classNames({active: tabIndex === 3})}
                                onClick={() => {
                                    setTabIndex(3);
                                }}>Option 2</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    {console.log(props.data)}
                    <TabContent className = "jr-tabs-content" activeTab = {tabIndex}>
                        <TabPane tabId = {1}>
                            {props.data.map((data, index) =>
                            
                            <TabListDetails key={index} data = {data} onClick = {onNavHome()} />

                            )}
                        </TabPane>
                    </TabContent>
                </div>
                </Widget>

            </div>
            </div>
            
        </div>
    );
}

class SearchTrip extends Component{
    _isMounted = false;


    constructor(props) {
        //Inherit constructor
        super(props);
        this.state = {
            hits:[]
        }
        //Bind functions
        //Call 'loadUser' befor mounting the app

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
        const {user: name } = this.props;
        const hits = this.state;
        return (
            
            <TrySearch kkk = {this.props.user.name} data = {hits.hits} />
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps) (SearchTrip);