import React, { Component } from "react";
import ContainerHeader from "components/ContainerHeader";
import InitMessages from "util/IntlMessages";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';
import {ApiService} from '../../../../../services';

class postTrip extends Component{

    constructor(props){
        super(props);
        this.state = {
            form: {
              post_title: '',
              loc_desc: '',
              loc_param:'',
              cost_jorn: '',
              car_space:'',
              error:'',
            },
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        // Stop the default form submit browser behaviour
        event.preventDefault();
        // Extract `form` state
        const { form } = this.state;
        // Extract `setUser` of `UserAction` and `user.name` of UserReducer from redux
        const { setUser } = this.props;
        // Send a login transaction to the blockchain by calling the ApiService,
        // If it successes, save the username to redux store
        // Otherwise, save the error state for displaying the message
        {console.log(form)}
        return ApiService.login(form)
          .then((err) => {
            //setUser({ name: form.username });
            this.setState({ error: err.toString() });
            //this.props.history.push('/app/carpool');
          })
          .catch(err => {
            this.setState({ error: err.toString() });
          });
      }

    render(){
        const {form, error} = this.state;
        return(
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <div className = "app-login-form">
                    <form name="form" onSubmit = {this.handleSubmit}>
                        <fieldset>
                            <TextField
                            label="Post Title"
                            required
                            margin="normal"
                            name="post_title"
                            type ="title"
                            onChange = {this.handleChange}
                            className="mt-1 my-sm-3"
                            />
                            <TextField
                            type="text"
                            label="Post Description"
                            required
                            name="loc_desc"
                            onChange = {this.handleChange}
                            margin="normal"
                            className="mt-1 my-sm-3"
                            />
                            <TextField
                            type="text"
                            label="Location Coordinates"
                            required
                            name="loc_param"
                            onChange = {this.handleChange}
                            margin="normal"
                            className="mt-1 my-sm-3"
                            />
                            <TextField
                            type="text"
                            label="Cost of Trip (EONS)"
                            required
                            name="cost_jorn"
                            onChange = {this.handleChange}
                            margin="normal"
                            className="mt-1 my-sm-3"
                            />
                            <TextField
                            type="text"
                            label="Carspace Available"
                            required
                            name="car_space"
                            onChange = {this.handleChange}
                            margin="normal"
                            className="mt-1 my-sm-3"
                            />

                        <div className="mb-3 d-flex align-items-center justify-content-between">
                            <Button type="submit" variant="contained" color="primary">
                                <IntlMessages id="appModule.signIn"/>
                            </Button>
                        </div>
                        <div className="app-social-block my-1 my-sm-3">
                            {error}
                            {console.log(form)}
                        </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default postTrip;