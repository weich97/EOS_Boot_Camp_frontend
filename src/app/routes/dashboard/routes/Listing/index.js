import React from 'react';
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from 'util/IntlMessages';
import ChartCard from './ChartCard';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import {increamentData} from "./mdata";


const Listing = ({match}) =>{

    return (
        <div className = "dashboard animated slideInUpTiny animation-duration-3">
            <ContainerHeader match={match} title={<IntlMessages id="sidebar.dashboard.listing" />}/>
            <div className = "row">
                <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <ChartCard chartProperties = {{
                        title: 'PROPERTIES',
                        prize: '26, 873',
                        icon: 'stats',
                        bgColor: 'indigo',
                        styleName: 'up',
                        desc: 'This week',
                        percent: '03%',
                    }} 
                    
                    children = {<ResponsiveContainer width = "100%" height = {75}>
                        <AreaChart data = {increamentData} margin = {{top:0, right: 0, left: 0, bottom: 0}}>
                        <Area datakey = 'pv' strokeWidth = {0} stackId = "2" stroke = "#273894" fill = "#273894" fillOpacity = {1} />
                        </AreaChart>
                    </ResponsiveContainer>
                    }
                    />
                </div>

                <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <ChartCard chartProperties = {{
                        title: 'CITIES',
                        prize: '26, 873',
                        icon: 'stats',
                        bgColor: 'pink accent-2',
                        styleName: 'up',
                        desc: 'This week',
                        percent: '03%',
                    }} 
                    
                    children = {<ResponsiveContainer width = "100%" height = {75}>
                        <AreaChart data = {increamentData} margin = {{top:0, right: 0, left: 0, bottom: 0}}>
                        <Area datakey = 'pv' type="monotone" strokeWidth = {0} stackId = "2" stroke = "#273894" fill = "#da2361" fillOpacity = {1} />
                        </AreaChart>
                    </ResponsiveContainer>
                    }
                    />
                </div>

                <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <ChartCard chartProperties = {{
                        title: 'CITIES',
                        prize: '26, 873',
                        icon: 'stats',
                        bgColor: 'info',
                        styleName: 'up',
                        desc: 'This week',
                        percent: '03%',
                    }} 
                    
                    children = {<ResponsiveContainer width = "100%" height = {75}>
                        <AreaChart data = {increamentData} margin = {{top:0, right: 0, left: 0, bottom: 0}}>
                        <Area datakey = 'pv' type="monotone" strokeWidth = {0} stackId = "2" stroke = "#273894" fill = "#da2361" fillOpacity = {1} />
                        </AreaChart>
                    </ResponsiveContainer>
                    }
                    />
                </div>

                <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <ChartCard chartProperties = {{
                        title: 'CITIES',
                        prize: '26, 873',
                        icon: 'stats',
                        bgColor: 'success',
                        styleName: 'up',
                        desc: 'This week',
                        percent: '03%',
                    }} 
                    
                    children = {<ResponsiveContainer width = "100%" height = {75}>
                        <AreaChart data = {increamentData} margin = {{top:0, right: 0, left: 0, bottom: 0}}>
                        <Area datakey = 'pv' type="monotone" strokeWidth = {0} stackId = "2" stroke = "#273894" fill = "#da2361" fillOpacity = {1} />
                        </AreaChart>
                    </ResponsiveContainer>
                    }
                    />
                </div>

            </div>
        </div>
    );
};

export default Listing;