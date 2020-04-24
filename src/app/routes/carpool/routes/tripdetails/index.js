import React, { Component } from 'react';
import ApiService from 'services/ApiService';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card, {CardActions} from '@material-ui/core/Card';

class tripDetails extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            form: {
              error:'',
              space_req: '',
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
        return ApiService.hopride(form)
          .then((err) => {
            alert("You have Successfully Signup for this Trip");
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
                    <div className ="col-md-3"></div>
                    <div className ="col-lg-6 col-md-6 col-12 mb-md-6 col-md-offset-6">
                        <div className ="jr-card">
                            <div className = "jr-card-header">
                                <h3 className = "jr-card-heading">{data.post_title} Details</h3>
                            </div>
                            <div className ="jr-card-body">
                            <div>
                        
                        <div>
                        <Card className="shadow border-1" key = {index}>
                        
                        <CardMedia top width="100%" image={"https://picsum.photos/100"} alt="Card image cap" title="Contemplative Reptile" className ="height-200" />
                          <CardContent>
                              <h3 className="card-title">{data.post_title}</h3>
                              
                              <Typography>{data.loc_desc}</Typography>
                              <Typography>{data.cost_jorn}</Typography>
                              <Typography>{data.car_space} Spaces Available</Typography>
                              
                          </CardContent>
                          
                          </Card>
                          <br />
                          </div>
                        </div>
                        <hr />
                        <form name="form" onSubmit = {this.handleSubmit}>
                            <TextField
                            label="How many Space do you need"
                            required
                            fullWidth
                            multiline
                            margin="normal"
                            name="space_req"
                            type ="title"
                            onChange = {this.handleChange}
                            className="mt-1 my-sm-3"
                            />
                            {console.log(this.props.match.params.handle)}
                            <div className="mb-3 d-flex align-items-center justify-content-between">
                            <Button type="submit" variant="contained" color="primary">
                                Signup For Trip
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
export default (mapStateToProps) (tripDetails);