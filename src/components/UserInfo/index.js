import React, {useState, Component,useRef} from 'react';
import Avatar from '@material-ui/core/Avatar'
import {useDispatch, connect} from 'react-redux'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';
import {UserAction} from 'actions';
import {ApiService} from '../../services';

const Tryme = (props) => {

  const dispatch = useDispatch();
  const [anchorE1, setAnchorE1] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = event => {
    setOpen(true);
    setAnchorE1(event.currentTarget);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };
  const [name, winCount] = useState(0);

  return (
    <div className="user-profile d-flex flex-row align-items-center">
      <Avatar
        alt='...'
        src={"https://picsum.photos/200"}
        className="user-avatar "
      />
      <div className="user-detail">
        <h4 className="user-name" onClick={handleClick}>{ localStorage.getItem("cardgame_account") }<i
          className="zmdi zmdi-caret-down zmdi-hc-fw align-middle"/>
        </h4>
      </div>
      <Menu className="user-info"
            id="simple-menu"
            anchorEl={anchorE1}
            open={open}
            onClose={handleRequestClose}
            PaperProps={{
              style: {
                minWidth: 120,
                paddingTop: 0,
                paddingBottom: 0
              }
            }}
      >
        <MenuItem onClick={handleRequestClose}>
          <i className="zmdi zmdi-account zmdi-hc-fw mr-2"/>
          <IntlMessages id="popup.profile"/>
        </MenuItem>
        <MenuItem onClick={handleRequestClose}>
          <i className="zmdi zmdi-settings zmdi-hc-fw mr-2"/>
          <IntlMessages id="popup.setting"/>
        </MenuItem>
        <MenuItem onClick={() => {
          handleRequestClose();
          logoutnow();
          dispatch(userSignOut());
        }}>
          <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2"/>

          <IntlMessages id="popup.logout"/>
        </MenuItem>
      </Menu>
    </div>
  );
};

class UserInfo extends Component{

  constructor(props) {
    //Inherit constructor
    super(props);
    //Bind functions
    //Call 'loadUser' befor mounting the app
  }

  render(){
    const {user: {name, win_count,lost_count}} = this.props;
    return (
      <Tryme kkk = {this.props.user.name} />
    )
  }
}

const mapStateToProps = state => state;

const logoutnow = (props) => {
  localStorage.clear();
  props.history.push('/signin');
}

export default connect(mapStateToProps) (UserInfo);



