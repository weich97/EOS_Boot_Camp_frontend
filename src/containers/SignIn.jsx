import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Log from '../app/routes/Log';
import {connect, useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ApiService} from '../services';
import {UserAction} from '../actions';
import { withRouter } from "react-router-dom";
import {
  hideMessage,
  showAuthLoader,
  userSignIn,
} from 'actions/Auth';
import { store } from 'MainApp';

class SignIn extends React.Component {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  // const {loader, alertMessage, showMessage, authUser} = useSelector(({auth}) => auth);

  // useEffect(() => {
  //   if (showMessage) {
  //     setTimeout(() => {
  //       dispatch(hideMessage());
  //     }, 100);
  //   }
  //   if (authUser !== null) {
  //     props.history.push('/');
  //   }
  // }, [showMessage, authUser, props.history, dispatch]);

  constructor(props){
    super(props);

    this.state = {
      form: {
        username: '',
        key: '',
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
    .then(() => {
      setUser({ name: form.username, auth: 1, authUser: 1 });
      //store.set("authUser", true);
      this.props.history.push('/app/dashboard');
    })
    .catch(err => {
      this.setState({ error: err.toString() });
    });
}

render(){
  const {form, error} = this.state;
  return (
    <div
      className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">

        <div className="app-logo-content d-flex align-items-center justify-content-center">
          <Link className="logo-lg" to="/" title="Jambo">
            <img src={require("assets/images/logo.png")} alt="jambo" title="jambo"/>
          </Link>
        </div>
        <div className="app-login-content">
          <div className="app-login-header mb-4">
            <h1>Login Page</h1>
          </div>
          
          
          <div className="app-login-form">
            <form name="form" onSubmit = {this.handleSubmit}>
              <fieldset>
                <TextField
                  label={<IntlMessages id="Username"/>}
                  required
                  margin="normal"
                  name="username"
                  type ="search"
                  onChange = {this.handleChange}
                  className="mt-1 my-sm-3"
                />
                <TextField
                  type="password"
                  label={<IntlMessages id="Private Key"/>}
                  required
                  name="key"
                  onChange = {this.handleChange}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <Button type="submit" variant="contained" color="primary">
                    <IntlMessages id="appModule.signIn"/>
                  </Button>

                  <Link to="/signup">
                    <IntlMessages id="signIn.signUp"/>
                  </Link>
                </div>

                <div className="app-social-block my-1 my-sm-3">
                  {error}
                  {console.log(form)}
                </div>

              </fieldset>
            </form>
          </div>
        </div>

      </div>
      {/* {
        loader &&
        <div className="loader-view">
          <CircularProgress/>
        </div>
      }
      {showMessage && NotificationManager.error(alertMessage)} */}
      <NotificationContainer/>
    </div>
  );
    }
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser: UserAction.setUser,
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn);
