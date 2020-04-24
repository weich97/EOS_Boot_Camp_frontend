import React from "react";

function TabListDetails ({data}){
    const {image, username, win_count, desc} = data;
    console.log(data)
    return (
        <div className="jr-news-item">
        <div className="jr-news-thumb"><img className="rounded-xl" src="https://via.placeholder.com/575x480" alt="..."/></div>
        <div className="jr-news-content">
          <h4 className="mt-0">{username}</h4>
          <p>{win_count}</p>
          <div className="jr-news-tags-row">
            <div className="jr-news-tags-left">
              <p className="text-grey text-truncate"><i
                className={`zmdi zmdi-label-alt jr-fs-lg mr-2 d-inline-block align-middle`}/>{desc}
              </p>
            </div>
            <div className="jr-news-tags-right">
              <p className="text-primary ml-auto pointer text-truncate">Check Posting <i
                className={`zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-block align-middle`}/></p>
            </div>
          </div>
        </div>
      </div>
    );

}

export default TabListDetails;