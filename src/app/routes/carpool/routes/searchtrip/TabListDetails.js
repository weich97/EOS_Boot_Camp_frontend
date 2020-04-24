import React from "react";
import { withRouter, Redirect, useHistory } from "react-router-dom";

  function TabListDetails ({data}){
    const {image, username, loc_desc, cost_jorn,car_space, log_id} = data;
    const history = useHistory();
    //const onNavigateHome = ();
    function onNavigateHome(data){
      //alert("ok ok")
      // <Redirect to={"/app/carpool/trip-details/"+data} />
      history.push(`/app/carpool/trip-details/${data}`);
  }

    return (
        <div className="jr-news-item">
        <div className="jr-news-thumb"><img className="rounded-xl" src="https://picsum.photos/100" alt="..."/></div>
        <div className="jr-news-content">
          <h4 className="mt-0">{username}</h4>
          <p>{loc_desc}</p>
          <div className="jr-news-tags-row">
            <div className="jr-news-tags-left">
              <p className="text-grey text-truncate"><i
                className={`zmdi zmdi-label-alt jr-fs-lg mr-2 d-inline-block align-middle`}/>{cost_jorn} | {car_space} Space Available
              </p>
            </div>
            <div className="jr-news-tags-right">
              <p className="text-primary ml-auto pointer text-truncate" onClick={() => onNavigateHome(log_id)} >Check Posting <i
                className={`zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-block align-middle`}/></p>
            </div>
          </div>
        </div>
      </div>
    );

}

export default withRouter(TabListDetails);