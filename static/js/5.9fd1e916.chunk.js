(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[5],{851:function(e,a,t){"use strict";var n=t(1),r=t(7),c=t(0),i=(t(2),t(6)),s=t(446),l=t(9),o=c.forwardRef((function(e,a){var t=e.classes,l=e.className,o=e.raised,m=void 0!==o&&o,d=Object(r.a)(e,["classes","className","raised"]);return c.createElement(s.a,Object(n.a)({className:Object(i.a)(t.root,l),elevation:m?8:1,ref:a},d))}));a.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(o)},852:function(e,a,t){"use strict";var n=t(1),r=t(7),c=t(0),i=(t(2),t(6)),s=t(9),l=["video","audio","picture","iframe","img"],o=c.forwardRef((function(e,a){var t=e.children,s=e.classes,o=e.className,m=e.component,d=void 0===m?"div":m,u=e.image,h=e.src,p=e.style,b=Object(r.a)(e,["children","classes","className","component","image","src","style"]),f=-1!==l.indexOf(d),v=!f&&u?Object(n.a)({backgroundImage:'url("'.concat(u,'")')},p):p;return c.createElement(d,Object(n.a)({className:Object(i.a)(s.root,o,f&&s.media,-1!=="picture img".indexOf(d)&&s.img),ref:a,style:v,src:f?u||h:void 0},b),t)}));a.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(o)},853:function(e,a,t){"use strict";var n=t(1),r=t(7),c=t(0),i=(t(2),t(6)),s=t(9),l=c.forwardRef((function(e,a){var t=e.classes,s=e.className,l=e.component,o=void 0===l?"div":l,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(o,Object(n.a)({className:Object(i.a)(t.root,s),ref:a},m))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},860:function(e,a,t){"use strict";t.r(a);var n=t(88),r=t(20),c=t(28),i=t(29),s=t(66),l=t(34),o=t(33),m=t(0),d=t.n(m),u=t(180),h=t(488),p=t(476),b=t(853),f=t(852),v=t(486),g=t(851),j=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e))._isMounted=!1,n.state={form:{error:"",space_req:"",carpoolid:n.props.match.params.handle},tripdata:[]},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n.fetchData=n.fetchData.bind(Object(s.a)(n)),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted?this.fetchData():this._isMounted=!1}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"fetchData",value:function(){var e=this;return u.a.getTripDetails(this.props.match.params).then((function(a){return e.setState({tripdata:a})}))}},{key:"handleChange",value:function(e){var a,t=e.target,c=t.name,i=t.value,s=this.state.form;this.setState({form:Object(r.a)({},s,(a={},Object(n.a)(a,c,i),Object(n.a)(a,"error",""),a))})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state.form;return console.log(t),u.a.hopride(t).then((function(e){alert("You have Successfully Signup for this Trip"),a.setState({error:e.toString()})})).catch((function(e){a.setState({error:e.toString()})}))}},{key:"render",value:function(){var e=this,a=this.state;return d.a.createElement(d.a.Fragment,null,a.tripdata.map((function(a,t){return d.a.createElement("div",{className:"row mb-md-6",key:t},d.a.createElement("div",{className:"col-md-3"}),d.a.createElement("div",{className:"col-lg-6 col-md-6 col-12 mb-md-6 col-md-offset-6"},d.a.createElement("div",{className:"jr-card"},d.a.createElement("div",{className:"jr-card-header"},d.a.createElement("h3",{className:"jr-card-heading"},a.post_title," Details")),d.a.createElement("div",{className:"jr-card-body"},d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement(g.a,{className:"shadow border-1",key:t},d.a.createElement(f.a,{top:!0,width:"100%",image:"https://picsum.photos/100",alt:"Card image cap",title:"Contemplative Reptile",className:"height-200"}),d.a.createElement(b.a,null,d.a.createElement("h3",{className:"card-title"},a.post_title),d.a.createElement(v.a,null,a.loc_desc),d.a.createElement(v.a,null,a.cost_jorn),d.a.createElement(v.a,null,a.car_space," Spaces Available"))),d.a.createElement("br",null))),d.a.createElement("hr",null),d.a.createElement("form",{name:"form",onSubmit:e.handleSubmit},d.a.createElement(h.a,{label:"How many Space do you need",required:!0,fullWidth:!0,multiline:!0,margin:"normal",name:"space_req",type:"title",onChange:e.handleChange,className:"mt-1 my-sm-3"}),console.log(e.props.match.params.handle),d.a.createElement("div",{className:"mb-3 d-flex align-items-center justify-content-between"},d.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"Signup For Trip")))))))})))}}]),t}(m.Component);a.default=j}}]);
//# sourceMappingURL=5.9fd1e916.chunk.js.map