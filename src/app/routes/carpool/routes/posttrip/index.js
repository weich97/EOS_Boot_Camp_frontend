import React, { Component } from "react";
import {connect} from 'react-redux';
import ContainerHeader from "components/ContainerHeader";
import InitMessages from "util/IntlMessages";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';
import ApiService from '../../../../../services/ApiService';
import TabListDetails from './TabListDetails';
import Card, {CardActions} from '@material-ui/core/Card';
import {TabContent, TabPane} from 'reactstrap';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class postTrip extends Component{

  onNavigateHome(data){
    //alert("ok ok")
    // <Redirect to={"/app/carpool/trip-details/"+data} />
    this.props.history.push(`/app/carpool/edit-trip/${data}`);
  }
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
            },
            datafeed: [],
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchdata = this.fetchdata.bind(this);
    }

    fetchdata(){
      return ApiService.getUserPostTrips().then(data =>{
          console.log(data)
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
        return ApiService.posttrip(form)
          .then((err) => {
            alert("Trip Posted Successfully");
            //setUser({ name: form.username });
            this.setState({ error: err.toString() });
            //this.props.history.push('/app/carpool');
          })
          .catch(err => {
            this.setState({ error: err.toString() });
          });
      }

    render(){
        const datafeed = this.state;
        console.log(datafeed)
        return(
          <>
            <div>
              <div className ="row mb-md-6">
                <div className ="col-lg-6 col-md-6 col-12 mb-md-6">
                  <div className ="jr-card">
                    <div className = "jr-card-header">
                      <h3 className = "jr-card-heading">Post a Trip</h3>
                    </div>
                    <div className = "jr-card-body">
                      <form name="form" onSubmit = {this.handleSubmit}>
                        <TextField
                        label="Post Title"
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
                        multiline
                        fullWidth
                        name="car_space"
                        onChange = {this.handleChange}
                        margin="normal"
                        className="mt-1 my-sm-3"
                        />

                        <div className="mb-3 d-flex align-items-center justify-content-between">
                            <Button type="submit" variant="contained" color="primary">
                                Post Trip
                            </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className ="col-lg-6 col-md-6 col-12 mb-md-6">
                  <div className ="jr-card">
                      <div className = "jr-card-header">
                        <h3 className = "jr-card-heading">Your Posted Trips</h3>
                      </div>
                      <div className = "jr-card-body">
                      <div>
                        {datafeed.datafeed.map((data, index) =>
                        <div>
                        <Card className="shadow border-1" key = {index}>
                        
                        <CardMedia top width="100%" image={"https://picsum.photos/100"} alt="Card image cap" title="Contemplative Reptile" className ="height-200" />
                          <CardContent>
                              <h3 className="card-title">{data.post_title}</h3>
                              
                              <Typography>{data.loc_desc}</Typography>
                              <Typography>{data.cost_jorn}</Typography>
                              <Typography>{data.car_space} Spaces Available</Typography>
                              <Button variant="raised" className="bg-primary text-white" onClick = {() => this.onNavigateHome(data.log_id)}>Edit Trip</Button>
                          </CardContent>
                          
                          </Card>
                          <br />
                          </div>
                        )}
                        </div>
                        
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

export default (mapStateToProps) (postTrip);