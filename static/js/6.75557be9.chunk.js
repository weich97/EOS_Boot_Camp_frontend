(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[6],{519:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(1),s=a(21),l=a(2),o=a.n(l),i=a(43),u=a.n(i),m=a(14),d={tag:m.d,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var t=e.className,a=e.cssModule,r=e.color,l=e.body,o=e.inverse,i=e.outline,d=e.tag,p=e.innerRef,h=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(m.b)(u()(t,"card",!!o&&"text-white",!!l&&"card-body",!!r&&(i?"border":"bg")+"-"+r),a);return n.a.createElement(d,Object(c.a)({},h,{className:f,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"};var h=p,f={tag:m.d,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(m.b)(u()(t,"card-title"),a);return n.a.createElement(r,Object(c.a)({},l,{className:o}))};b.propTypes=f,b.defaultProps={tag:"div"};var g=b,y=function(e){var t=e.children,a=e.styleName,r=e.title;return n.a.createElement(h,{className:"jr-card jr-card-widget ".concat(a)},r?n.a.createElement(g,null,r):null,t)};t.a=y;y.defaultProps={styleName:""}},854:function(e,t,a){"use strict";var r=a(1),n=a(7),c=a(0),s=(a(2),a(6)),l=a(9),o=a(486),i=a(102),u=c.forwardRef((function(e,t){var a=e.children,l=e.classes,u=e.className,m=e.disableTypography,d=void 0!==m&&m,p=e.inset,h=void 0!==p&&p,f=e.primary,b=e.primaryTypographyProps,g=e.secondary,y=e.secondaryTypographyProps,v=Object(n.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),j=c.useContext(i.a).dense,w=null!=f?f:a;null==w||w.type===o.a||d||(w=c.createElement(o.a,Object(r.a)({variant:j?"body2":"body1",className:l.primary,component:"span",display:"block"},b),w));var k=g;return null==k||k.type===o.a||d||(k=c.createElement(o.a,Object(r.a)({variant:"body2",className:l.secondary,color:"textSecondary",display:"block"},y),k)),c.createElement("div",Object(r.a)({className:Object(s.a)(l.root,u,j&&l.dense,h&&l.inset,w&&k&&l.multiline),ref:t},v),w,k)}));t.a=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(u)},866:function(e,t,a){"use strict";a.r(t);var r=a(88),n=a(20),c=a(28),s=a(29),l=a(66),o=a(34),i=a(33),u=a(0),m=a.n(u),d=(a(18),a(519),a(10)),p=a.n(d),h=a(35),f=a(75),b=a(183);function g(){return(g=Object(h.a)(p.a.mark((function e(t,a){var r,n,c,s,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("cardgame_key"),n=new f.JsonRpc("http://127.0.0.1:8888"),c=new b.JsSignatureProvider([r]),s=new f.Api({rpc:n,signatureProvider:c,textDecoder:new TextDecoder,textEncoder:new TextEncoder}),e.prev=4,e.next=7,s.transact({actions:[{account:"hwglwfwkjlyw",name:t,authorization:[{actor:localStorage.getItem("cardgame_account"),permission:"active"}],data:a}]},{blocksBehind:3,expireSeconds:30});case 7:l=e.sent,console.dir(l),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(4),e.t0;case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}var y=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,null,[{key:"createsellorder",value:function(e){var t=e.ticket_for_sale,a=e.price_ask,r=e.seasonStage;return new Promise((function(e,n){(function(e,t){return g.apply(this,arguments)})("sellticket",{seller:localStorage.getItem("cardgame_account"),ticket_for_sale:t,price_ask:a,stage:r}).then((function(){e(),console.log("hurray")})).catch((function(e){n(e),console.log(e)}))}))}},{key:"getAllRecord",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new f.JsonRpc("http://127.0.0.1:8888"),e.next=4,t.get_table_rows({json:!0,code:"test1",scope:"test1",table:"users"});case 4:return a=e.sent,e.abrupt("return",a.rows);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getUserPostTrips",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new f.JsonRpc("http://127.0.0.1:8888"),e.next=4,t.get_table_rows({json:!0,code:"test1",scope:"test1",table:"users",lower_bound:localStorage.getItem("cardgame_account")});case 4:return a=e.sent,e.abrupt("return",a.rows);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTicketRecord",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new f.JsonRpc("http://127.0.0.1:8888"),e.next=4,t.get_table_rows({json:!0,code:"test1",scope:"test1",table:"people"});case 4:return a=e.sent,e.abrupt("return",a.rows.sort((function(e,t){return e.auxi_price-t.auxi_price})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getsellingaccount",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new f.JsonRpc("http://127.0.0.1:8888"),e.next=4,t.get_table_rows({json:!0,code:"hwglwfwkjlyw",scope:"hwglwfwkjlyw",table:"sellorders"});case 4:return a=e.sent,e.abrupt("return",a.rows.sort());case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),v=a(447),j=a(493),w=a(854),k=a(488),E=a(475),N=a(476),_=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e))._isMounted=!1,console.log(e),r.state={datafeed:[],form:{price_ask:"",ticket_for_sale:"",seasonStage:""}},r.handleChange=r.handleChange.bind(Object(l.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(s.a)(a,[{key:"fetchdata",value:function(){var e=this;return y.getsellingaccount().then((function(t){console.log(t),e.setState({datafeed:t})}))}},{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.fetchdata()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"handleChange",value:function(e){var t,a=e.target,c=a.name,s=a.value,l=this.state.form;this.setState({form:Object(n.a)({},l,(t={},Object(r.a)(t,c,s),Object(r.a)(t,"error",""),t))})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.form;if(!(1e4-a.bid_price>a.highest_bid))return y.createsellorder(a).then((function(e){alert("Bid Placed Successfully"),t.setState({datafeed:e})})).catch((function(e){}));alert("Bid Price is lower than highest Bid. Please Stake at least 2 TNT more than the highest")}},{key:"render",value:function(){var e=this.state;return console.log(e),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement("div",{className:"row mb-md-6"},m.a.createElement("div",{className:"col-lg-6 col-md-6 col-12 mb-md-6"},m.a.createElement("div",{className:"jr-card"},m.a.createElement("div",{className:"jr-card-header"},m.a.createElement("h3",{className:"jr-card-heading"},"Ticket For Sale")),m.a.createElement("div",{className:"jr-card-body "},m.a.createElement(E.a,null,e.datafeed.map((function(e,t){return m.a.createElement(v.a,{button:!0,key:t},m.a.createElement(j.a,null,m.a.createElement("i",{className:"zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"})),m.a.createElement(w.a,{primary:" Bid Price:"+e.price_ask,secondary:" Username: "+e.seller}),m.a.createElement(N.a,{variant:"contained",color:"primary"},"Buy Ticket"))})))))),m.a.createElement("div",{className:"col-lg-6 col-md-6 col-12 mb-md-6"},m.a.createElement("div",{className:"jr-card"},m.a.createElement("div",{className:"jr-card-header"},m.a.createElement("h3",{className:"jr-card-heading"},"Sell Ticket")),m.a.createElement("div",{className:"jr-card-body"},m.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},m.a.createElement(k.a,{label:"Ticket Name",required:!0,margin:"normal",name:"ticket_for_sale",onChange:this.handleChange,multiline:!0,fullWidth:!0,type:"input",className:"mt-1 my-sm-3"}),m.a.createElement(k.a,{label:"Ticket Price",margin:"normal",name:"price_ask",onChange:this.handleChange,multiline:!0,fullWidth:!0,type:"input",className:"mt-1 my-sm-3"}),m.a.createElement(k.a,{label:"Season Stage",margin:"normal",name:"seasonStage",onChange:this.handleChange,multiline:!0,fullWidth:!0,type:"input",className:"mt-1 my-sm-3"}),m.a.createElement("div",{className:"mb-3 d-flex align-items-center justify-content-between"},m.a.createElement(N.a,{type:"submit",variant:"contained",color:"primary"},"Sell Ticket"))))),m.a.createElement("div",{className:"jr-card"},m.a.createElement("div",{className:"jr-card-header"},m.a.createElement("h3",{className:"jr-card-heading"},"List of Your Tickets")),m.a.createElement("div",{className:"jr-card-body"},m.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},m.a.createElement(k.a,{label:"Bid Price",required:!0,margin:"normal",name:"bid_price",onChange:this.handleChange,multiline:!0,fullWidth:!0,type:"input",className:"mt-1 my-sm-3"}),m.a.createElement(k.a,{label:"Bid Price",hidden:!0,margin:"normal",name:"bid_price",onChange:this.handleChange,multiline:!0,fullWidth:!0,type:"input",className:"mt-1 my-sm-3"}),m.a.createElement("div",{className:"mb-3 d-flex align-items-center justify-content-between"},m.a.createElement(N.a,{type:"submit",variant:"contained",color:"primary"},"Sell Ticket")))))))))}}]),a}(u.Component);t.default=_}}]);
//# sourceMappingURL=6.75557be9.chunk.js.map