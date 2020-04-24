import React, { Component } from 'react';
import {connect} from 'react-redux';
import ApiService from 'services/ApiService';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class editTrip extends Component{
    _isMounted = false;
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
              carpoolid: this.props.match.params.handle
            },
            tripdata: [],
          }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted){
            this.fetchData();
        }
        else{
            this._isMounted = false;
        }

    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    fetchData(){
        return ApiService.getTripDetails(this.props.match.params).then(data => this.setState({
            tripdata: data
         }))
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
        event.preventDefault();
        const { form } = this.state;
        {console.log(form)}
        return ApiService.edittrip(form)
          .then((err) => {
            alert("Trip Edited Successfully");
            //setUser({ name: form.username });
            this.setState({ error: err.toString() });
            //this.props.history.push('/app/carpool');
          })
          .catch(err => {
            this.setState({ error: err.toString() });
          });
      }

    render (){
        const tripdata = this.state;
        //console.log(tripdata[0].post_title)
        return(
            <>
                {tripdata.tripdata.map((data, index) =>
                <div className="row mb-md-6" key = {index}>
                    <div className ="col-lg-12 col-md-12 col-12 mb-md-6">
                        <div className ="jr-card">
                            <div className = "jr-card-header">
                                <h3 className = "jr-card-heading">Edit your {data.post_title} Trip</h3>
                            </div>
                            <div className ="jr-card-body">
                                <form name="form" onSubmit = {this.handleSubmit}>
                                    <TextField
                                    label="Post Title"
                                    defaultValue = {data.post_title}
                                    required
                                    fullWidth
                                    multiline
                                    margin="normal"
                                    name="post_title"
                                    type ="title"
                                    onChange = {this.handleChange}
                                    className="mt-1 my-sm-3"
                                    />
                                    <TextField
                                    type="text"
                                    defaultValue = {data.loc_desc}
                                    label="Post Description"
                                    required
                                    fullWidth
                                    multiline
                                    name="loc_desc"
                                    onChange = {this.handleChange}
                                    margin="normal"
                                    className="mt-1 my-sm-3"
                                    />
                                    <TextField
                                    type="text"
                                    defaultValue = {data.loc_param}
                                    label="Location Coordinates"
                                    required
                                    multiline
                                    fullWidth
                                    name="loc_param"
                                    onChange = {this.handleChange}
                                    margin="normal"
                                    className="mt-1 my-sm-3"
                                    />
                                    <TextField
                                    type="text"
                                    label="Cost of Trip (VToken)"
                                    required
                                    defaultValue = {data.cost_jorn}
                                    multiline
                                    fullWidth
                                    name="cost_jorn"
                                    onChange = {this.handleChange}
                                    margin="normal"
                                    className="mt-1 my-sm-3"
                                    />
                                    <TextField
                                    type="text"
                                    label="Carspace Available"
                                    required
                                    defaultValue = {data.car_space}
                                    multiline
                                    fullWidth
                                    name="car_space"
                                    onChange = {this.handleChange}
                                    margin="normal"
                                    className="mt-1 my-sm-3"
                                    />
                                    {console.log(this.props.match.params.handle)}
                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                    <Button type="submit" variant="contained" color="primary">
                                        Post Trip
                                    </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </>
        )
    }
}
const mapStateToProps = state => state;
export default (mapStateToProps) (editTrip);