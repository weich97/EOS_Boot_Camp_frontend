import React, { Component,useState } from 'react';
import {connect} from 'react-redux';
import Widget from "components/Widget/index";
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import ApiServiceW from '../../../../../services/ApiServiceW';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class ShowTickets extends Component{
    _isMounted = false;
    intervalID;

    constructor(props){
        super(props);
        console.log(props)
        this.state ={
            datafeed: [],
            form: {
                bid_price: '',
                highest_bid: '',
              },
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchdata = this.fetchdata.bind(this);
    }

    fetchdata(){
        return ApiServiceW.getTicketRecord().then(data =>{
            this.setState({ datafeed: data}); 
            //this.intervalID = setTimeout(this.fetchdata(this), 5000);     
        })
    }

    componentDidMount(){
        this._isMounted = true;

        if(this._isMounted){
            this.fetchdata();
            setInterval(this.fetchdata, 5000);
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
        //clearTimeout(this.intervalID);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { form } = this.state;
        this.setState({
        form: {
            ...form,
            [name]: value,
            error: '',
        },
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const { form } = this.state;
        if((10000 - form.bid_price) > form.highest_bid){
            alert("Bid Price is lower than highest Bid. Please Stake at least 2 TNT more than the highest");
        }
        else{
            return ApiServiceW.placebid(form)
            .then(() => {

                alert("You Bid Successfully");
            //setUser({ name: form.username });
            //this.props.history.push('/');
            })
            .catch(err => {
            //this.setState({ error: err.toString() });
            });
        }

        
    }

    render(){
        const datafeed = this.state;
        return (
        <>
        <div>
            <div className = "row mb-md-6">
                <div className = "col-lg-6 col-md-6 col-12 mb-md-6">
                <div className = "jr-card">
                    <div className="jr-card-header">
                        <h3 className = "jr-card-heading">Existing Bids</h3>
                    </div>
                    <div className ="jr-card-body ">
                        <List>
                            {datafeed.datafeed.map((data, index) =>
                                <ListItem button key = {index}>
                                <Avatar>
                                    <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"/>
                                </Avatar>
                                <ListItemText primary={" Bid Price:"+data.bid_price} secondary={" Username: "+data.user_name} />
                            </ListItem>
                            )}
                        </List>
                    </div>
                </div>
                </div>
                <div className = "col-lg-6 col-md-6 col-12 mb-md-6">
                    <div className = "jr-card">
                        <div className="jr-card-header">
                            <h3 className = "jr-card-heading">Bid for Ticket</h3>
                        </div>
                        <div className="jr-card-body">
                            <form name = "form" onSubmit = {this.handleSubmit}>
                                <TextField
                                label="Bid Price"
                                required
                                margin="normal"
                                name="bid_price"
                                onChange = {this.handleChange}
                                multiline
                                fullWidth
                                type ="input"
                                className="mt-1 my-sm-3"
                                />

                                <TextField
                                label="Bid Price"
                                hidden
                                margin="normal"
                                name="bid_price"
                                onChange = {this.handleChange}
                                multiline
                                fullWidth
                                type ="input"
                                className="mt-1 my-sm-3"
                                />

                                <div className="mb-3 d-flex align-items-center justify-content-between">
                                <Button type="submit" variant="contained" color="primary">
                                    Place Bid
                                </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </>
        )
    }
}
const mapStateToProps = state => state;

export default (mapStateToProps)(ShowTickets);