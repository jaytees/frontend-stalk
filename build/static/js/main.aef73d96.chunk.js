(this.webpackJsonpstalk=this.webpackJsonpstalk||[]).push([[0],{115:function(e,t,a){},121:function(e,t,a){e.exports=a(276)},126:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},150:function(e,t,a){},274:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(11),c=a.n(o),r=(a(126),a(13));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(17),i=a(3),u=a.n(i),m=a(28),p=(a(54),a(143),a(6)),d=a(4),h=a(8),g=a(7),f=a(9);a(84),a(144);var E=function(e){var t=function(e){var t=Math.floor((new Date-e)/1e3),a=Math.floor(t/31536e3);return a>1?a+" years":(a=Math.floor(t/2592e3))>1?a+" months":(a=Math.floor(t/86400))>1?a+" days":(a=Math.floor(t/3600))>1?a+" hours":(a=Math.floor(t/60))>1?a+" minutes":Math.floor(t)+" seconds"};return l.a.createElement("div",{className:"waterPlant"},"0 seconds"===t(new Date(1e3*e.plant.last_watered))?"watered!":l.a.createElement("div",null,l.a.createElement("div",{className:"waterPlant-droplet"},l.a.createElement("div",{className:"droplet",onClick:function(){return function(e){var t=Math.floor(Date.now()/1e3),a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.put("".concat(a,"/plants/").concat(e,".json"),{plant:{last_watered:t},headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log("res:",e),e.status})).catch((function(e){console.warn("err:",e)}))}(e.plant.id)}})),l.a.createElement("div",{className:"waterPlant-text"},l.a.createElement("p",{id:e.plant.id},"Last Watered ",t(new Date(1e3*e.plant.last_watered))," Ago "))))};a(145);var v=function(e){var t=Object(m.f)();return l.a.createElement("div",null,l.a.createElement("div",{id:"menuToggle"},l.a.createElement("input",{type:"checkbox"}),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("ul",{id:"menu"},l.a.createElement("li",{key:"edit",onClick:function(){return function(e){var a="/editplant/".concat(e);console.log("route:",a),t.push(a)}(e.plantId)}},"Edit"),l.a.createElement("li",{key:"delete",onClick:function(){return function(e){var t="";t="https://backend-stalk.herokuapp.com",console.log("url",t),u.a.delete("".concat(t,"/plants/").concat(e,".json")).then((function(e){})).catch(console.warn)}(e.plantId)}},"Delete"),l.a.createElement("li",{key:"add",onClick:function(){return function(e){var a="/addphoto/".concat(e);console.log("route:",a),t.push(a)}(e.plantId)}},"Add Photo"))))},b=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={users:[]},a.handleClick=function(e){console.log(e);var t="/mygarden/".concat(e);console.log("route:",t),a.props.history.push(t)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted");var t="";t="https://backend-stalk.herokuapp.com",console.log("url",t),u.a.get("".concat(t,"/users.json")).then((function(t){e.setState({users:t.data.users}),console.log("this.state.users",e.state.users),console.log("this.state.res.data.users.length",e.state.users.length)})).catch(console.warn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Stalkers"),0===this.state.users.length?l.a.createElement("p",null,"no users"):l.a.createElement("div",null,this.state.users.map((function(t){return l.a.createElement("div",{key:t.id,className:"gardenItem",onClick:function(){return e.handleClick(t.id)}},l.a.createElement("div",{className:"gardenItem-header"},"/home"!==e.props.history.location?l.a.createElement("div",null,l.a.createElement("div",{className:"water-gardenItem"},l.a.createElement("p",null,"Click to View Full Garden!")),l.a.createElement("div",{className:"water-gardenItem"})):l.a.createElement("div",null,l.a.createElement("div",{className:"water-gardenItem"},l.a.createElement(E,{plant:t})),l.a.createElement("div",{className:"burger-menu-gardenItem"},l.a.createElement(v,{plantId:t.id}))),l.a.createElement("div",{className:"plant-name-gardenItem"},l.a.createElement("p",null,t.username,"s garden"))),l.a.createElement("div",{className:"gardenItem-images"},t.plants.map((function(a){return l.a.createElement("img",{src:a.photos[0].image,key:a.id,className:"myGardenPlantPhoto",onClick:function(){return e.handleClick(t.id)}})}))),l.a.createElement("div",{className:"gardenItem-shelf"},l.a.createElement("div",{className:"skew-left"}),l.a.createElement("div",{className:"skew-right"})))}))))}}]),t}(l.a.Component),y=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,{history:this.props.history}))}}]),t}(l.a.Component),k=a(16),j=a(118);a(150);var w=function(e){var t=Object(n.useReducer)((function(e,t){return Object(j.a)({},e,{},t)}),{name:"",username:"",location:"",email:"",password:"",password_confirmation:""}),a=Object(s.a)(t,2),o=a[0],c=a[1],r=Object(m.f)(),i=Object(n.useState)([]),p=Object(s.a)(i,2),d=p[0],h=p[1],g=function(e){var t=e.target.name,a=e.target.value;c(Object(k.a)({},t,a))};return l.a.createElement("div",{className:"formContainer"},l.a.createElement("h2",{class:"formTitle"},"Sign up"),d&&l.a.createElement("div",{id:"signup-errors"},l.a.createElement("ul",null,d.map((function(e){return l.a.createElement("li",null,e)})))),l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.post("".concat(a,"/users"),{user:o,headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){t.data.jwt?(localStorage.setItem("token",t.data.jwt),localStorage.setItem("userId",t.data.user.id),u.a.defaults.headers.common.Authorization="Bearer ".concat(t.data.jwt),e.messageCreator(!0,t.data.user.name),r.push("/profile"),c(function(e){Object.keys(e).map((function(t){return e[t]=""}))}(o))):h(t.data.errors)})).catch((function(e){h(e.response.data.errors)}))}},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Name:"),l.a.createElement("br",null),l.a.createElement("input",{value:o.name,onChange:g,type:"text",name:"name",placeholder:"name"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Username:"),l.a.createElement("br",null),l.a.createElement("input",{value:o.username,onChange:g,type:"text",name:"username",placeholder:"username"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Location:"),l.a.createElement("br",null),l.a.createElement("input",{value:o.location,onChange:g,type:"text",name:"location",placeholder:"location"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Email:"),l.a.createElement("br",null),l.a.createElement("input",{value:o.email,onChange:g,type:"text",name:"email",placeholder:"email"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Password:"),l.a.createElement("br",null),l.a.createElement("input",{value:o.password,onChange:g,type:"password",name:"password",placeholder:"password"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Password Confirmation:"),l.a.createElement("br",null),l.a.createElement("input",{value:o.password_confirmation,onChange:g,type:"password",name:"password_confirmation",placeholder:"password confirmation"})),l.a.createElement("br",null),l.a.createElement("button",{className:"formButton",type:"submit"},"Submit")))},O=a(25),C=a.n(O),N=a(34),I=a.n(N),S=(a(86),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={id:localStorage.getItem("userId"),user:[],notificationId:"",notifications:[]},a.handleClick=function(e){console.log(e);var t="/mygarden/".concat(e);console.log("route",t),a.props.history.push(t)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";t="https://backend-stalk.herokuapp.com",console.log("url",t),u.a.get("".concat(t,"/users/").concat(this.state.id,".json")).then((function(t){console.log("res",t),e.setState({user:t.data}),console.log("plants",e.state.user.plants);var a=C()().hours(0).minutes(0).seconds(0);e.state.user.plants.forEach((function(t){var n=C()(t.date_acquired);a.diff(n,"days")%t.water_days===0&&(e.setState({notificationId:N.store.addNotification({title:"Water me!",message:"I am ".concat(t.name),type:"success",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:1e4,onScreen:!0,pauseOnHover:!0}})}),e.state.notifications.push(e.state.notificationId))}))}))}},{key:"componentWillUnmount",value:function(){this.state.notifications.forEach((function(e){N.store.removeNotification(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"centered"},"Profile Page for ",this.state.user.name),l.a.createElement("div",{className:"profileButtons"},l.a.createElement(r.b,{to:"/users"},l.a.createElement("div",{className:"profileButton slide-top"},"STALKERS")),l.a.createElement(r.b,{to:"/addplant"},l.a.createElement("div",{className:"profileButton slide-top"},"+PLANT")),l.a.createElement(r.b,{to:"/mygarden/".concat(this.state.user.id)},l.a.createElement("div",{className:"profileButton slide-top"},"MY GARDEN")),l.a.createElement(r.b,{to:"/plantcalendar/".concat(this.state.user.id)},l.a.createElement("div",{className:"profileButton slide-top"},"CALENDAR"))))}}]),t}(l.a.Component)),D="",A=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={user:[]},a.handleClick=function(e){console.log(e);var t="/photo/".concat(e);console.log("route:",t),a.props.history.push(t)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");t&&(u.a.defaults.headers.common.Authorization="Bearer ".concat(t)),D=this.props.match.params.user_id,console.log("userIDQuery",D);var a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.get("".concat(a,"/users/").concat(D,".json")).then((function(t){e.setState({user:t.data})})).catch(console.warn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,this.state.user.name,"s Garden"),0===this.state.user.length?l.a.createElement("p",null,"loading"):l.a.createElement("div",null,this.state.user.plants.map((function(t){return l.a.createElement("div",{key:t.id,className:"gardenItem"},l.a.createElement("div",{className:"gardenItem-header"},e.props.tokenHeaderValue&&l.a.createElement("div",null,l.a.createElement("div",{className:"water-gardenItem"},l.a.createElement(E,{plant:t})),l.a.createElement("div",{className:"burger-menu-gardenItem"},l.a.createElement(v,{plantId:t.id}))),l.a.createElement("div",{className:"plant-name-gardenItem"},l.a.createElement("p",null,t.name))),l.a.createElement("div",{className:"gardenItem-images"},t.photos.map((function(t){return l.a.createElement("img",{src:t.image,key:t.id,className:"myGardenPlantPhoto",onClick:function(){return e.handleClick(t.id)}})}))),l.a.createElement("div",{className:"gardenItem-shelf"},l.a.createElement("div",{className:"skew-left"}),l.a.createElement("div",{className:"skew-right"})))}))))}}]),t}(l.a.Component),_=(a(152),l.a.Component,localStorage.getItem("userId")),x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={photo:[]},a.handleDeleteClick=function(e){console.log("id:",e);var t="";t="https://backend-stalk.herokuapp.com",console.log("url",t),u.a.delete("".concat(t,"/photos/").concat(e,".json")).then((function(e){console.log(e)})).then(a.props.history.push("/mygarden/".concat(_))).catch(console.warn)},a.handleEditClick=function(e){console.log(e);var t="/editphoto/".concat(e);console.log("route:",t),a.props.history.push(t)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.photo_id,a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.get("".concat(a,"/photos/").concat(t,".json")).then((function(t){e.setState({photo:t.data})})).catch(console.warn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"displayPhoto"},l.a.createElement("img",{className:"mainPhoto",src:this.state.photo.image,alt:""}),l.a.createElement("p",null,this.state.photo.name," - ",this.state.photo.description),l.a.createElement("div",{className:"profileButtons"},l.a.createElement("div",{className:"centerText formButton slide-top smallerButton",onClick:function(){return e.handleDeleteClick(e.state.photo.id)}},"DELETE"),l.a.createElement("div",{className:"centerText formButton slide-top smallerButton",onClick:function(){return e.handleEditClick(e.state.photo.id)}},"EDIT"))))}}]),t}(l.a.Component),M=localStorage.getItem("userId"),P=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={user_id:localStorage.getItem("userId")},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={plant:a.state};console.log("plant",t),u.a.post("http://localhost:3000/plants.json",t).then((function(e){console.log("res:",e),console.log("userID:",M)})).then(a.props.history.push("/mygarden/".concat(M))).catch(console.warn)},a.handleSubmit=function(e){e.preventDefault();var t={plant:a.state};console.log("plant",t),u.a.post("http://localhost:3000/plants.json",t).then((function(e){console.log("res:",e),console.log("userID:",M)})).then(a.props.history.push("/mygarden/".concat(M))).catch(console.warn)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("user_id:",M)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"AddPlant"),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Plant Type"),l.a.createElement("input",{type:"text",name:"planttype",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"About your plant:"),l.a.createElement("input",{type:"text",name:"description",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Date Acquired"),l.a.createElement("input",{type:"date",name:"date_acquired",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Days between watering"),l.a.createElement("input",{type:"text",name:"water_days",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("input",{type:"submit"})))}}]),t}(l.a.Component),B=localStorage.getItem("userId"),T=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={user_id:localStorage.getItem("userId"),plant:[]},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){var t=a.props.match.params.plant_id;e.preventDefault(),console.log(a.state);var n=a.state;console.log("plant",n),u.a.put("http://localhost:3000/plants/".concat(t,".json"),{plant:n}).then((function(e){console.log("res:",e)})).then(a.props.history.push("/mygarden/".concat(B))).catch(console.warn)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plant_id;console.log("plantID",t),u.a.get("http://localhost:3000/plants/".concat(t,".json")).then((function(t){var a=t.data;e.setState({plant:a}),console.log(e.state.plant),console.log(e.state.plant.length)})).catch(console.warn)}},{key:"render",value:function(){return l.a.createElement("div",{className:"formContainer"},l.a.createElement("h2",{className:"formTitle"},"Edit ",this.state.plant.name),0===this.state.plant.length?"no":l.a.createElement("div",null),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Plant Type"),l.a.createElement("input",{type:"text",name:"planttype",defaultValue:this.state.plant.planttype,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",defaultValue:this.state.plant.name,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"About your plant:"),l.a.createElement("input",{type:"text",name:"description",defaultValue:this.state.plant.description,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Date Acquired"),l.a.createElement("input",{type:"date",name:"date_acquired",defaultValue:this.state.plant.date_acquired,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Days between watering"),l.a.createElement("input",{type:"text",name:"water_days",defaultValue:this.state.plant.water_days,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("input",{className:"formButton",type:"submit"})))}}]),t}(l.a.Component);a(274);var W=function(e){var t=Object(n.useState)("jordan@test.com"),a=Object(s.a)(t,2),o=a[0],c=a[1],r=Object(n.useState)("chicken"),i=Object(s.a)(r,2),p=i[0],d=i[1],h=Object(n.useState)(""),g=Object(s.a)(h,2),f=g[0],E=g[1],v=Object(m.f)();return l.a.createElement("div",null,f&&l.a.createElement("p",null,f),l.a.createElement("form",{id:"login",onSubmit:function(t){t.preventDefault();var a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.post("".concat(a,"/login"),{email:o,password:p,headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){t.data.jwt?(localStorage.setItem("token",t.data.jwt),localStorage.setItem("userId",t.data.user.id),u.a.defaults.headers.common.Authorization="Bearer ".concat(t.data.jwt),e.loginMessage(!0,t.data.user.name),v.push("/profile")):E(t.data.failure)})).catch((function(e){console.warn(e)})),c(""),d(""),e.loginDisplay()}},l.a.createElement("div",{id:"login-inputs"},l.a.createElement("input",{value:o,onChange:function(e){c(e.target.value)},type:"text",placeholder:"Your email address"}),l.a.createElement("input",{value:p,onChange:function(e){d(e.target.value)},type:"password",placeholder:"Password"})),l.a.createElement("br",null),l.a.createElement("button",{id:"login-submit",type:"submit"},"Login")))};var L=function(e){var t=Object(m.f)();return l.a.createElement("p",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),delete u.a.defaults.headers.common.Authorization,e.logOutMessage(!1,"Please login or sign up"),t.push("/home")},id:"logOut-link"},"Log Out")};var V=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],c=a[1],i=function(){c(!o)};return l.a.createElement("div",{id:"nav-div"},l.a.createElement("nav",{id:"navbar"},l.a.createElement("p",null,e.navMessage),l.a.createElement("div",{id:"navbar-logo"}),e.tokenHeaderValue?l.a.createElement(L,{logOutMessage:e.messageCreator}):l.a.createElement("div",{id:"nav-login-operations"},l.a.createElement("p",{id:"login-trigger",href:"#",onClick:i},"Log In"),o&&l.a.createElement("div",{id:"login-content"},l.a.createElement(W,{loginMessage:e.messageCreator,loginDisplay:i})),l.a.createElement(r.b,{to:"/signup",id:"signup-link"},"Sign Up"))))},U=a(52),z=a(73),H=(a(275),a(115),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={user:[],userId:localStorage.getItem("userId"),datesArray:[]},a.calculate=function(e,t,n,l){var o=new Date(t);o.setHours(0),o.setMinutes(0);for(var c=C()(l).diff(C()(t),"days"),r=0;c%n!==0;)r++,c++;for(var s=C()(l).add(r,"days").toDate(),i=s,u=Object(U.a)(a.state.datesArray);i.getMonth()===s.getMonth();){var m={title:e,allDay:!0,start:i,end:i};i.getTime()>=o.getTime()&&u.push(m),i=C()(i).add(n,"days").toDate()}a.setState({datesArray:u})},a.monthsChangeHandler=function(e){a.state.datesArray=[];var t=new Date(e.start);1!==t.getDate()&&(t.setDate(1),t.setMonth(t.getMonth()+1)),a.state.user.plants.forEach((function(e){a.calculate(e.name,e.date_acquired,e.water_days,t)}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";t="https://backend-stalk.herokuapp.com",console.log("url",t),u.a.get("".concat(t,"/users/").concat(this.state.userId,".json")).then((function(t){e.setState({user:t.data});var a=new Date;a.setDate(1),t.data.plants.forEach((function(t){e.calculate(t.name,t.date_acquired,t.water_days,a)}))})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(z.a,{events:this.state.datesArray,localizer:Object(z.b)(C.a),style:{height:"80vh"},onRangeChange:this.monthsChangeHandler}))}}]),t}(l.a.Component)),R="",q=localStorage.getItem("userId"),G=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={plant:[],image:""},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.setState({photo:{image:a.state.image,description:a.state.description,plant_id:R}}),console.log(a.state.photo);var t=a.state.photo;console.log("photoParams:",t);var n="";n="https://backend-stalk.herokuapp.com",console.log("url",n),u.a.post("".concat(n,"/photos.json"),{photo:{image:a.state.image,description:a.state.description,plant_id:R}}).then(console.log).then(a.props.history.push("/mygarden/".concat(q))).catch(console.log)},a.uploadWidget=function(e){e.preventDefault(),window.cloudinary.openUploadWidget({cloud_name:"dlbfbi0rp",upload_preset:"mtkzwbw5",tags:["plants"]},(function(e,t){e?console.warn("ERROR UPLOADING",e):(console.log("successfully-uploaded",t[0].url),a.setState({image:t[0].url}))}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;R=this.props.match.params.plant_id,console.log("plantID: ".concat(R));var t="";t="https://backend-stalk.herokuapp.com",console.log("url",t),u.a.get("".concat(t,"/plants/").concat(R,".json")).then((function(t){console.log(t),e.setState({plant:t.data})})).catch(console.warn),this.setState({plant_id:R})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Add Photo of ",this.state.plant.name),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"description",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("button",{className:"formButton"},"add update")),l.a.createElement("div",null,l.a.createElement("div",{className:"upload"},0===this.state.image.length?l.a.createElement("div",null,l.a.createElement("button",{className:"formButton",onClick:this.uploadWidget},"Upload Photo!")):l.a.createElement("div",{class:"uploadPhoto"},l.a.createElement("p",null,"Image Uploaded!"),l.a.createElement("img",{className:"uploadImagePreview",src:this.state.image})))))}}]),t}(l.a.Component),F="",K=(localStorage.getItem("userId"),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={photo:[]},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={image:a.state.image,description:a.state.description};console.log("photo:",t),u.a.put("http://localhost:3000/photos/".concat(F,".json"),{photo:t}).then(console.log).then(a.props.history.push("/photo/".concat(F))).catch(console.log)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;F=this.props.match.params.photo_id,console.log("plantID: ".concat("")),u.a.get("http://localhost:3000/photos/".concat(F,".json")).then((function(t){console.log(t),e.setState({photo:t.data})})).catch(console.warn)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Edit Photo for ",this.state.photo.name),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"description",defaultValue:this.state.photo.description,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"ImageURL"),l.a.createElement("input",{type:"text",name:"image",defaultValue:this.state.photo.image,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("button",null,"add update")))}}]),t}(l.a.Component)),J=localStorage.getItem("userId"),Q=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){console.log(e);var t="/photo/".concat(e);console.log("route:",t),a.props.history.push(t)},a.state={user:[],userfollows:[]},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");console.log(J),t&&(console.log("TOKEN FOUND!",t),u.a.defaults.headers.common.Authorization="Bearer ".concat(t));var a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.get("".concat(a,"/users/").concat(J,".json")).then((function(t){e.setState({user:t.data}),console.log("this.state.user",e.state.user),console.log(e.state.user.plants.length)})).catch(console.warn),console.log("userID",J),u.a.get("".concat(a,"/follows/").concat(J,".json")).then((function(t){console.log(t),e.setState({userfollows:t.data})})).catch(console.warn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Following"),l.a.createElement("p",null),0===this.state.userfollows.length?l.a.createElement("p",null,"loading"):l.a.createElement("div",null,this.state.userfollows.userfollows.map((function(t){return l.a.createElement("div",{key:t.id,className:"gardenPlantIndex"},l.a.createElement("div",{className:"skew-left"}),l.a.createElement("div",{className:"skew-right"}),l.a.createElement("div",{className:"display-plant-name"},l.a.createElement("p",null,t.name)),t.photos.map((function(t){return l.a.createElement("div",{className:"image-box",key:t.id,onClick:function(){return e.handleClick(t.id)}},l.a.createElement("img",{className:"myGardenPlantPhoto",src:t.image}))})))}))))}}]),t}(l.a.Component),Y="",$=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={plant:[]},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");t&&(console.log("TOKEN FOUND!",t),u.a.defaults.headers.common.Authorization="Bearer ".concat(t)),Y=this.props.match.params.plant_id,console.log("plantIDQuery",Y);var a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.get("".concat(a,"/plants/").concat(Y,".json")).then((function(t){console.log("res:",t),e.setState({plant:t.data}),console.log("plant:",e.state.plant)})).catch(console.warn)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Plant"),l.a.createElement("p",null,this.state.plant.name," - ",this.state.plant.planttype)," ",l.a.createElement("br",null),0===this.state.plant.length?l.a.createElement("p",null,"loading..."):this.state.plant.photos.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("img",{src:e.image,alt:""}))})))}}]),t}(l.a.Component);function X(e){var t=Math.floor((new Date-e)/1e3),a=Math.floor(t/31536e3);return a>1?a+" years":(a=Math.floor(t/2592e3))>1?a+" months":(a=Math.floor(t/86400))>1?a+" days":(a=Math.floor(t/3600))>1?a+" hours":(a=Math.floor(t/60))>1?a+" minutes":Math.floor(t)+" seconds"}var Z=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={plants:[],watering:""},a.waterPlant=function(e,t){console.log("wateringPlant:",e),console.log({last_watered:Math.floor(Date.now()/1e3)});var n=Math.floor(Date.now()/1e3);u.a.put("http://localhost:3000/plants/".concat(e,".json"),{plant:{last_watered:n},headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){if(console.log("res:",e),200===e.status){var l=Object(U.a)(a.state.plants);l[t].last_watered=n,a.setState({plants:l})}})).catch((function(e){console.warn("err:",e)}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.get("http://localhost:3000/plants.json").then((function(t){e.setState({plants:t.data.plants}),console.log("plants",e.state.plants)})).catch(console.warn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Time"),l.a.createElement("h2",null,"become a master of time and space"),0===this.state.plants.length?l.a.createElement("p",null,"time is over"):l.a.createElement("div",null,l.a.createElement("p",null,"time is complete"),this.state.plants.map((function(t,a){return l.a.createElement("div",{key:"plant".concat(t.id),className:"gardenPlantIndex"},l.a.createElement("div",{className:"skew-left"}),l.a.createElement("div",{className:"skew-right"}),l.a.createElement("div",{className:"display-plant-name"},l.a.createElement("p",null,t.name)),t.photos.map((function(t){return l.a.createElement("div",{key:"photo".concat(t.id),className:"image-box",onClick:function(){return e.handleClick(t.id)}},l.a.createElement("img",{className:"myGardenPlantPhoto",src:t.image}))})),l.a.createElement("p",null,"  //shows me lastWatered text","0 seconds"===X(new Date(1e3*t.last_watered))?"watered!":l.a.createElement("p",null,"Last Watered ",X(new Date(1e3*t.last_watered))," Hours Ago ")),l.a.createElement("div",{onClick:function(){return e.waterPlant(t.id,a)},className:"waterPlant"},l.a.createElement("img",{src:"/water.png",alt:""})))}))))}}]),t}(l.a.Component),ee=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-container"},l.a.createElement("div",{className:"viewport-header text-focus-in"},l.a.createElement("h2",null,l.a.createElement(r.b,{to:"/home",className:"home-link"}," Stalk"))),l.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},l.a.createElement("source",{src:"photos/flowers1080p.mp4",type:"video/mp4"})))}}]),t}(l.a.Component);var te=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("Welcome, please login or sign up"),i=Object(s.a)(c,2),p=i[0],d=i[1],h=function(e,t){e?(d("Welcome back, ".concat(t)),o(!0)):(d("Welcome, Please login or sign up"),o(!1))};return Object(n.useEffect)((function(){var e=localStorage.getItem("token");e&&(u.a.defaults.headers.common.Authorization="Bearer ".concat(e),o(!0))}),[]),l.a.createElement("div",{className:"stalk-app"},l.a.createElement(I.a,null),l.a.createElement("main",null,l.a.createElement("div",{id:"main-wrapper"},l.a.createElement(V,{tokenHeaderValue:a,messageCreator:h,navMessage:p}),l.a.createElement("div",{id:"main-logo"},l.a.createElement("h1",{onClick:function(){return console.log("hello")},id:"logo"},l.a.createElement(r.b,{id:"logo",to:"/users"},"Stalk"))),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/home",component:y}),l.a.createElement(m.a,{exact:!0,path:"/",component:ee}),l.a.createElement(m.a,{exact:!0,path:"/signup",render:function(e){return l.a.createElement(w,Object.assign({},e,{messageCreator:h}))}}),a&&l.a.createElement(m.a,{exact:!0,path:"/profile",component:S}),l.a.createElement(m.a,{exact:!0,path:"/users",component:b}),l.a.createElement(m.a,{exact:!0,path:"/mygarden/:user_id",render:function(e){return l.a.createElement(A,Object.assign({},e,{tokenHeaderValue:a}))}}),l.a.createElement(m.a,{exact:!0,path:"/plantcalendar/:user_id",component:H}),l.a.createElement(m.a,{exact:!0,path:"/photo/:photo_id",component:x}),l.a.createElement(m.a,{exact:!0,path:"/time/",component:Z}),l.a.createElement(m.a,{exact:!0,path:"/addplant/",component:P}),l.a.createElement(m.a,{exact:!0,path:"/editplant/:plant_id",component:T}),l.a.createElement(m.a,{exact:!0,path:"/addphoto/:plant_id",component:G}),l.a.createElement(m.a,{exact:!0,path:"/editphoto/:photo_id",component:K}),l.a.createElement(m.a,{exact:!0,path:"/following/",component:Q}),l.a.createElement(m.a,{exact:!0,path:"/plant/:plant_id",component:$}),l.a.createElement(m.a,{exact:!0,path:"/uploadphoto",component:x})))))};c.a.render(l.a.createElement(r.a,null,l.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,a){},84:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.aef73d96.chunk.js.map