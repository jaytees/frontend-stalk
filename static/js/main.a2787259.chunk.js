(this.webpackJsonpstalk=this.webpackJsonpstalk||[]).push([[0],{30:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},55:function(e,t,a){e.exports=a(90)},60:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),o=a.n(r),c=(a(60),a(12));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(14),i=a(3),u=a.n(i),m=a(24),p=(a(30),a(78),a(6)),d=a(4),h=a(8),f=a(7),E=a(9);a(46),a(79);var g=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],o=a[1];return l.a.createElement("div",{className:"waterPlant"},l.a.createElement("div",{className:"waterPlant-droplet"},l.a.createElement("div",{className:"droplet",onClick:function(){return function(e){var t=Math.floor(Date.now()/1e3),a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.put("".concat(a,"/plants/").concat(e,".json"),{plant:{last_watered:t},headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log("res:",e),200===e.status&&o(!0)})).catch((function(e){console.warn("err:",e)}))}(e.plant.id)}})),r?l.a.createElement("div",{className:"waterPlant-text"},l.a.createElement("p",{id:e.plant.id},"Watered!")):l.a.createElement("div",null,l.a.createElement("div",{className:"waterPlant-text"},l.a.createElement("p",{id:e.plant.id},"Last Watered"," ",function(e){var t=Math.floor((new Date-e)/1e3),a=Math.floor(t/31536e3);return a>1?a+" years":(a=Math.floor(t/2592e3))>1?a+" months":(a=Math.floor(t/86400))>1?a+" days":(a=Math.floor(t/3600))>1?a+" hours":(a=Math.floor(t/60))>1?a+" minutes":Math.floor(t)+" seconds"}(new Date(1e3*e.plant.last_watered))," Ago"," "))))};a(80);var v=function(e){var t=Object(m.f)();return l.a.createElement("div",null,l.a.createElement("div",{id:"menuToggle"},l.a.createElement("input",{type:"checkbox"}),l.a.createElement("span",{className:"forIcon"}),l.a.createElement("span",{className:"forIcon"}),l.a.createElement("span",{className:"forIcon"}),l.a.createElement("ul",{id:"menu"},l.a.createElement("li",{key:"edit",onClick:function(){return function(e){var a="/editplant/".concat(e);t.push(a)}(e.plantId)}},"Edit"),l.a.createElement("li",{key:"delete",onClick:function(){return function(e){var t="";t="https://backend-stalk.herokuapp.com",u.a.delete("".concat(t,"/plants/").concat(e,".json")).then((function(e){})).catch((function(e){return console.log(e)}))}(e.plantId)}},"Delete"),l.a.createElement("li",{key:"add",onClick:function(){return function(e){var a="/addphoto/".concat(e);t.push(a)}(e.plantId)}},"Add Photo"))))},b=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={users:[]},a.handleClick=function(e){var t="/mygarden/".concat(e);a.props.history.push(t)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";t="https://backend-stalk.herokuapp.com",u.a.get("".concat(t,"/users.json")).then((function(t){e.setState({users:t.data.users})})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Stalkers"),0===this.state.users.length?l.a.createElement("p",null,"no users"):l.a.createElement("div",null,this.state.users.map((function(t){return l.a.createElement("div",{key:t.id,className:"gardenItem",onClick:function(){return e.handleClick(t.id)}},l.a.createElement("div",{className:"gardenItem-header"},"/home"!==e.props.history.location?l.a.createElement("div",null,l.a.createElement("div",{className:"water-gardenItem"},l.a.createElement("p",null,"Click to View Full Garden!")),l.a.createElement("div",{className:"water-gardenItem"})):l.a.createElement("div",null,l.a.createElement("div",{className:"water-gardenItem"},l.a.createElement(g,{plant:t})),l.a.createElement("div",{className:"burger-menu-gardenItem"},l.a.createElement(v,{plantId:t.id}))),l.a.createElement("div",{className:"plant-name-gardenItem"},l.a.createElement("p",null,t.username,"s garden"))),l.a.createElement("div",{className:"gardenItem-images"},t.plants.map((function(a){return l.a.createElement("img",{src:a.photos[0].image,key:a.id,alt:a.name,className:"myGardenPlantPhoto",onClick:function(){return e.handleClick(t.id)}})}))),l.a.createElement("div",{className:"gardenItem-shelf"},l.a.createElement("div",{className:"skew-left"}),l.a.createElement("div",{className:"skew-right"})))}))))}}]),t}(l.a.Component),y=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,{history:this.props.history}))}}]),t}(l.a.Component),k=a(17),j=a(52);a(85);var w=function(e){var t=Object(n.useReducer)((function(e,t){return Object(j.a)({},e,{},t)}),{name:"",username:"",location:"",email:"",password:"",password_confirmation:""}),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(m.f)(),i=Object(n.useState)([]),p=Object(s.a)(i,2),d=p[0],h=p[1],f=function(e){var t=e.target.name,a=e.target.value;o(Object(k.a)({},t,a))};return l.a.createElement("div",{className:"formContainer"},l.a.createElement("h2",{className:"formTitle"},"Sign up"),d&&l.a.createElement("div",{id:"signup-errors"},l.a.createElement("ul",null,d.map((function(e){return l.a.createElement("li",null,e)})))),l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a="";a="https://backend-stalk.herokuapp.com",u.a.post("".concat(a,"/users"),{user:r,headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){t.data.jwt?(localStorage.setItem("token",t.data.jwt),localStorage.setItem("userId",t.data.user.id),u.a.defaults.headers.common.Authorization="Bearer ".concat(t.data.jwt),e.messageCreator(!0,t.data.user.name),c.push("/profile"),o(function(e){Object.keys(e).map((function(t){return e[t]=""}))}(r))):h(t.data.errors)})).catch((function(e){h(e.response.data.errors)}))}},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Name:"),l.a.createElement("br",null),l.a.createElement("input",{value:r.name,onChange:f,type:"text",name:"name",placeholder:"name"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Username:"),l.a.createElement("br",null),l.a.createElement("input",{value:r.username,onChange:f,type:"text",name:"username",placeholder:"username"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Location:"),l.a.createElement("br",null),l.a.createElement("input",{value:r.location,onChange:f,type:"text",name:"location",placeholder:"location"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Email:"),l.a.createElement("br",null),l.a.createElement("input",{value:r.email,onChange:f,type:"text",name:"email",placeholder:"email"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Password:"),l.a.createElement("br",null),l.a.createElement("input",{value:r.password,onChange:f,type:"password",name:"password",placeholder:"password"})),l.a.createElement("br",null),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Password Confirmation:"),l.a.createElement("br",null),l.a.createElement("input",{value:r.password_confirmation,onChange:f,type:"password",name:"password_confirmation",placeholder:"password confirmation"})),l.a.createElement("br",null),l.a.createElement("button",{className:"formButton",type:"submit"},"Submit")))},O=a(22),C=a.n(O),N=(a(48),a(25)),I=a.n(N),S=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={id:localStorage.getItem("userId"),user:[],notificationId:"",notifications:[]},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";t="https://backend-stalk.herokuapp.com",u.a.get("".concat(t,"/users/").concat(this.state.id,".json")).then((function(t){e.setState({user:t.data});var a=C()().hours(0).minutes(0).seconds(0);e.state.user.plants.forEach((function(t){var n=C()(t.date_acquired);a.diff(n,"days")%t.water_days===0&&(e.setState({notificationId:N.store.addNotification({title:"Water me!",message:"I am ".concat(t.name),type:"success",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:1e4,onScreen:!0,pauseOnHover:!0}})}),e.state.notifications.push(e.state.notificationId))}))}))}},{key:"componentWillUnmount",value:function(){this.state.notifications.forEach((function(e){N.store.removeNotification(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"centered"},"Profile Page for ",this.state.user.name),l.a.createElement("div",{className:"profileButtons"},l.a.createElement(c.b,{to:"/users"},l.a.createElement("div",{className:"profileButton slide-top"},"STALKERS")),l.a.createElement(c.b,{to:"/addplant"},l.a.createElement("div",{className:"profileButton slide-top"},"+PLANT")),l.a.createElement(c.b,{to:"/mygarden/".concat(this.state.user.id)},l.a.createElement("div",{className:"profileButton slide-top"},"MY GARDEN")),l.a.createElement(c.b,{to:"/plantcalendar/".concat(this.state.user.id)},l.a.createElement("div",{className:"profileButton slide-top"},"CALENDAR"))))}}]),t}(l.a.Component),A="",D=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={user:[]},a.handleClick=function(e){var t="/photo/".concat(e);a.props.history.push(t)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");t&&(u.a.defaults.headers.common.Authorization="Bearer ".concat(t)),A=this.props.match.params.user_id;var a="";a="https://backend-stalk.herokuapp.com",u.a.get("".concat(a,"/users/").concat(A,".json")).then((function(t){e.setState({user:t.data})})).catch(console.warn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,this.state.user.name,"s Garden"),0===this.state.user.length?l.a.createElement("p",null,"loading"):l.a.createElement("div",null,this.state.user.plants.map((function(t){return l.a.createElement("div",{key:t.id,className:"gardenItem"},l.a.createElement("div",{className:"gardenItem-header"},e.state.user.id==localStorage.getItem("userId")&&l.a.createElement("div",null,l.a.createElement("div",{className:"water-gardenItem"},l.a.createElement(g,{plant:t})),l.a.createElement("div",{className:"burger-menu-gardenItem"},l.a.createElement(v,{plantId:t.id}))),l.a.createElement("div",{className:"plant-name-gardenItem"},l.a.createElement("p",null,t.name))),l.a.createElement("div",{className:"gardenItem-images"},t.photos.map((function(a){return l.a.createElement("img",{src:a.image,key:a.id,alt:t.name,className:"myGardenPlantPhoto",onClick:function(){return e.handleClick(a.id)}})}))),l.a.createElement("div",{className:"gardenItem-shelf"},l.a.createElement("div",{className:"skew-left"}),l.a.createElement("div",{className:"skew-right"})))}))))}}]),t}(l.a.Component),_=localStorage.getItem("userId"),x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={photo:[]},a.handleDeleteClick=function(e){var t="";t="https://backend-stalk.herokuapp.com",u.a.delete("".concat(t,"/photos/").concat(e,".json")).then((function(e){console.log(e)})).then(a.props.history.push("/mygarden/".concat(_))).catch((function(e){return console.warn(e)}))},a.handleEditClick=function(e){var t="/editphoto/".concat(e);a.props.history.push(t)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.photo_id,a="";a="https://backend-stalk.herokuapp.com",u.a.get("".concat(a,"/photos/").concat(t,".json")).then((function(t){e.setState({photo:t.data})})).catch(console.warn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"displayPhoto"},l.a.createElement("img",{className:"mainPhoto",src:this.state.photo.image,alt:""}),l.a.createElement("p",null,this.state.photo.name," - ",this.state.photo.description),l.a.createElement("div",{className:"profileButtons"},l.a.createElement("div",{className:"centerText formButton slide-top smallerButton",onClick:function(){return e.handleDeleteClick(e.state.photo.id)}},"DELETE"),l.a.createElement("div",{className:"centerText formButton slide-top smallerButton",onClick:function(){return e.handleEditClick(e.state.photo.id)}},"EDIT"))))}}]),t}(l.a.Component),P=localStorage.getItem("userId"),M=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={user_id:localStorage.getItem("userId")},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={plant:a.state};u.a.post("http://localhost:3000/plants.json",t).then(a.props.history.push("/mygarden/".concat(P))).catch((function(e){return console.warn(e)}))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("user_id:",P)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"AddPlant"),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Plant Type"),l.a.createElement("input",{type:"text",name:"planttype",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"About your plant:"),l.a.createElement("input",{type:"text",name:"description",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Date Acquired"),l.a.createElement("input",{type:"date",name:"date_acquired",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Days between watering"),l.a.createElement("input",{type:"text",name:"water_days",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("input",{type:"submit"})))}}]),t}(l.a.Component),B=localStorage.getItem("userId"),T=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={user_id:localStorage.getItem("userId"),plant:[]},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.plant.id,n=a.state;u.a.put("http://localhost:3000/plants/".concat(t,".json"),{plant:n}).then((function(e){console.log("res:",e)})).then(a.props.history.push("/mygarden/".concat(B))).catch((function(e){return console.warn(e)}))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plant_id;u.a.get("http://localhost:3000/plants/".concat(t,".json")).then((function(t){var a=t.data;e.setState({plant:a})})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"formContainer"},l.a.createElement("h2",{className:"formTitle"},"Edit ",this.state.plant.name),0===this.state.plant.length?"no":l.a.createElement("div",null),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Plant Type"),l.a.createElement("input",{type:"text",name:"planttype",defaultValue:this.state.plant.planttype,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",defaultValue:this.state.plant.name,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"About your plant:"),l.a.createElement("input",{type:"text",name:"description",defaultValue:this.state.plant.description,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Date Acquired"),l.a.createElement("input",{type:"date",name:"date_acquired",defaultValue:this.state.plant.date_acquired,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"Days between watering"),l.a.createElement("input",{type:"text",name:"water_days",defaultValue:this.state.plant.water_days,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("input",{className:"formButton",type:"submit"})))}}]),t}(l.a.Component);a(88);var U=function(e){var t=Object(n.useState)("jordan@test.com"),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)("chicken"),i=Object(s.a)(c,2),p=i[0],d=i[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),E=f[0],g=f[1],v=Object(m.f)();return l.a.createElement("div",null,E&&l.a.createElement("p",null,E),l.a.createElement("form",{id:"login",onSubmit:function(t){t.preventDefault();var a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.post("".concat(a,"/login"),{email:r,password:p,headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){t.data.jwt?(localStorage.setItem("token",t.data.jwt),localStorage.setItem("userId",t.data.user.id),u.a.defaults.headers.common.Authorization="Bearer ".concat(t.data.jwt),e.loginMessage(!0,t.data.user.name),v.push("/profile")):g(t.data.failure)})).catch((function(e){console.warn(e)})),o(""),d(""),e.loginDisplay()}},l.a.createElement("div",{id:"login-inputs"},l.a.createElement("input",{value:r,onChange:function(e){o(e.target.value)},type:"text",placeholder:"Your email address"}),l.a.createElement("input",{value:p,onChange:function(e){d(e.target.value)},type:"password",placeholder:"Password"})),l.a.createElement("br",null),l.a.createElement("button",{id:"login-submit",type:"submit"},"Login")))};var L=function(e){var t=Object(m.f)();return l.a.createElement("p",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),delete u.a.defaults.headers.common.Authorization,e.logOutMessage(!1,"Please login or sign up"),t.push("/home")},id:"logOut-link"},"Log Out")};var W=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],o=a[1],i=function(){o(!r)};return l.a.createElement("div",{id:"nav-div"},l.a.createElement("nav",{id:"navbar"},l.a.createElement("p",null,e.navMessage),e.tokenHeaderValue?l.a.createElement(l.a.Fragment,null,l.a.createElement(c.b,{to:"/profile/"},l.a.createElement("p",null,"Profile")),l.a.createElement(c.b,{to:"/mygarden/".concat(localStorage.getItem("userId"))},l.a.createElement("p",null,"Your Garden")),l.a.createElement(c.b,{to:"/plantcalendar/".concat(localStorage.getItem("userId"))},l.a.createElement("p",null,"Calendar")),l.a.createElement(L,{logOutMessage:e.messageCreator})):l.a.createElement("div",{id:"nav-login-operations"},l.a.createElement("p",{id:"login-trigger",href:"#",onClick:i},"Log In"),r&&l.a.createElement("div",{id:"login-content"},l.a.createElement(U,{loginMessage:e.messageCreator,loginDisplay:i})),l.a.createElement(c.b,{to:"/signup",id:"signup-link"},"Sign Up"))))},R=a(28),V=a(36),z=(a(89),a(49),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={user:[],userId:localStorage.getItem("userId"),datesArray:[]},a.calculate=function(e,t,n,l){var r=new Date(t);r.setHours(0),r.setMinutes(0);for(var o=C()(l).diff(C()(t),"days"),c=0;o%n!==0;)c++,o++;for(var s=C()(l).add(c,"days").toDate(),i=s,u=Object(R.a)(a.state.datesArray);i.getMonth()===s.getMonth();){var m={title:e,allDay:!0,start:i,end:i};i.getTime()>=r.getTime()&&u.push(m),i=C()(i).add(n,"days").toDate()}a.setState({datesArray:u})},a.monthsChangeHandler=function(e){a.setState({datesArray:[]});var t=new Date(e.start);1!==t.getDate()&&(t.setDate(1),t.setMonth(t.getMonth()+1)),a.state.user.plants.forEach((function(e){a.calculate(e.name,e.date_acquired,e.water_days,t)}))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";t="https://backend-stalk.herokuapp.com",u.a.get("".concat(t,"/users/").concat(this.state.userId,".json")).then((function(t){e.setState({user:t.data});var a=new Date;a.setDate(1),t.data.plants.forEach((function(t){e.calculate(t.name,t.date_acquired,t.water_days,a)}))})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(V.a,{events:this.state.datesArray,localizer:Object(V.b)(C.a),style:{height:"80vh"},onRangeChange:this.monthsChangeHandler}))}}]),t}(l.a.Component)),G=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={image_url:""},a.uploadWidget=function(e){e.preventDefault(),window.cloudinary.openUploadWidget({cloud_name:"dlbfbi0rp",upload_preset:"mtkzwbw5",tags:["plants"]},(function(e,t){e?console.warn("ERROR UPLOADING",e):(a.setState({image_url:t[0].url}),a.props.onImageUpload(t[0].url))}))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"upload"},l.a.createElement("button",{className:"formButton",onClick:this.uploadWidget},"Upload PLANT!"),0===this.state.image_url.length?l.a.createElement("p",null,"No Image"):l.a.createElement("img",{className:"uploadImagePreview",src:this.state.image_url,alt:"upload preview",style:{maxWidth:"200px"}})))}}]),t}(l.a.Component),q="",H=localStorage.getItem("userId"),F=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={plant:[],image:""},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.setState({photo:{image:a.state.image,description:a.state.description,plant_id:q}});var t="";t="https://backend-stalk.herokuapp.com",u.a.post("".concat(t,"/photos.json"),{photo:{image:a.state.image,description:a.state.description,plant_id:q}}).then(a.props.history.push("/mygarden/".concat(H))).catch((function(e){return console.warn(e)}))},a.uploadWidget=function(e){e.preventDefault(),window.cloudinary.openUploadWidget({cloud_name:"dlbfbi0rp",upload_preset:"mtkzwbw5",tags:["plants"]},(function(e,t){e?console.warn("ERROR UPLOADING",e):a.setState({image:t[0].url})}))},a.handleImageUploaded=function(e){a.setState({imageURL:e})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;q=this.props.match.params.plant_id;var t="";t="https://backend-stalk.herokuapp.com",u.a.get("".concat(t,"/plants/").concat(q,".json")).then((function(t){e.setState({plant:t.data})})).catch((function(e){return console.warn(e)})),this.setState({plant_id:q})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Add Photo of ",this.state.plant.name),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"description",onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"ImageURL"),l.a.createElement("input",{type:"text",name:"imageURL",value:this.state.imageURL,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement(G,{onImageUpload:this.handleImageUploaded}),l.a.createElement("button",{className:"formButton"},"add update")),l.a.createElement("div",null,l.a.createElement("div",{className:"upload"},0===this.state.image.length?l.a.createElement("div",null,l.a.createElement("button",{className:"formButton",onClick:this.uploadWidget},"Upload Photo!")):l.a.createElement("div",{class:"uploadPhoto"},l.a.createElement("p",null,"Image Uploaded!"),l.a.createElement("img",{className:"uploadImagePreview",src:this.state.image,alt:"upload preview"})))))}}]),t}(l.a.Component),Y="",J=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={photo:[]},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={image:a.state.image,description:a.state.description};u.a.put("http://localhost:3000/photos/".concat(Y,".json"),{photo:t}).then(a.props.history.push("/photo/".concat(Y))).catch((function(e){return console.warn(e)}))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y=this.props.match.params.photo_id,u.a.get("http://localhost:3000/photos/".concat(Y,".json")).then((function(t){e.setState({photo:t.data})})).catch(console.warn)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Edit Photo for ",this.state.photo.name),l.a.createElement("form",{action:"",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"description",defaultValue:this.state.photo.description,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("label",null,"ImageURL"),l.a.createElement("input",{type:"text",name:"image",defaultValue:this.state.photo.image,onChange:this.handleChange})," ",l.a.createElement("br",null),l.a.createElement("button",null,"add update")))}}]),t}(l.a.Component),K=localStorage.getItem("userId"),Q=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={user:[],userfollows:[]},a.handleClick=function(e){var t="/photo/".concat(e);a.props.history.push(t)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");t&&(u.a.defaults.headers.common.Authorization="Bearer ".concat(t));var a="";a="https://backend-stalk.herokuapp.com",u.a.get("".concat(a,"/users/").concat(K,".json")).then((function(t){e.setState({user:t.data})})).catch((function(e){return console.warn(e)})),u.a.get("".concat(a,"/follows/").concat(K,".json")).then((function(t){e.setState({userfollows:t.data})})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Following"),l.a.createElement("p",null),0===this.state.userfollows.length?l.a.createElement("p",null,"loading"):l.a.createElement("div",null,this.state.userfollows.userfollows.map((function(t){return l.a.createElement("div",{key:t.id,className:"gardenPlantIndex"},l.a.createElement("div",{className:"skew-left"}),l.a.createElement("div",{className:"skew-right"}),l.a.createElement("div",{className:"display-plant-name"},l.a.createElement("p",null,t.name)),t.photos.map((function(t){return l.a.createElement("div",{className:"image-box",key:t.id,onClick:function(){return e.handleClick(t.id)}},l.a.createElement("img",{className:"myGardenPlantPhoto",src:t.image,alt:"plant"}))})))}))))}}]),t}(l.a.Component),$="",X=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={plant:[]},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");t&&(console.log("TOKEN FOUND!",t),u.a.defaults.headers.common.Authorization="Bearer ".concat(t)),$=this.props.match.params.plant_id,console.log("plantIDQuery",$);var a="";a="https://backend-stalk.herokuapp.com",console.log("url",a),u.a.get("".concat(a,"/plants/").concat($,".json")).then((function(t){console.log("res:",t),e.setState({plant:t.data}),console.log("plant:",e.state.plant)})).catch(console.warn)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Plant"),l.a.createElement("p",null,this.state.plant.name," - ",this.state.plant.planttype)," ",l.a.createElement("br",null),0===this.state.plant.length?l.a.createElement("p",null,"loading..."):this.state.plant.photos.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("img",{src:e.image,alt:""}))})))}}]),t}(l.a.Component);function Z(e){var t=Math.floor((new Date-e)/1e3),a=Math.floor(t/31536e3);return a>1?a+" years":(a=Math.floor(t/2592e3))>1?a+" months":(a=Math.floor(t/86400))>1?a+" days":(a=Math.floor(t/3600))>1?a+" hours":(a=Math.floor(t/60))>1?a+" minutes":Math.floor(t)+" seconds"}var ee=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={plants:[],watering:""},a.waterPlant=function(e,t){var n=Math.floor(Date.now()/1e3);u.a.put("http://localhost:3000/plants/".concat(e,".json"),{plant:{last_watered:n},headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){if(console.log("res:",e),200===e.status){var l=Object(R.a)(a.state.plants);l[t].last_watered=n,a.setState({plants:l})}})).catch((function(e){console.warn("err:",e)}))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.get("http://localhost:3000/plants.json").then((function(t){e.setState({plants:t.data.plants}),console.log("plants",e.state.plants)})).catch(console.warn)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Time"),l.a.createElement("h2",null,"become a master of time and space"),0===this.state.plants.length?l.a.createElement("p",null,"time is over"):l.a.createElement("div",null,l.a.createElement("p",null,"time is complete"),this.state.plants.map((function(t,a){return l.a.createElement("div",{key:"plant".concat(t.id),className:"gardenPlantIndex"},l.a.createElement("div",{className:"skew-left"}),l.a.createElement("div",{className:"skew-right"}),l.a.createElement("div",{className:"display-plant-name"},l.a.createElement("p",null,t.name)),t.photos.map((function(a){return l.a.createElement("div",{key:"photo".concat(a.id),className:"image-box",onClick:function(){return e.handleClick(a.id)}},l.a.createElement("img",{className:"myGardenPlantPhoto",src:a.image,alt:t.name}))})),l.a.createElement("p",null,"0 seconds"===Z(new Date(1e3*t.last_watered))?"watered!":l.a.createElement("p",null,"Last Watered ",Z(new Date(1e3*t.last_watered))," Hours Ago ")),l.a.createElement("div",{onClick:function(){return e.waterPlant(t.id,a)},className:"waterPlant"},l.a.createElement("img",{src:"/water.png",alt:""})))}))))}}]),t}(l.a.Component),te=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-container"},l.a.createElement("div",{className:"viewport-header text-focus-in"},l.a.createElement("h2",null,l.a.createElement(c.b,{to:"/home",className:"home-link"}," Stalk"))),l.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},l.a.createElement("source",{src:"photos/flowers1080p.mp4",type:"video/mp4"})))}}]),t}(l.a.Component);var ae=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("Welcome, please login or sign up"),i=Object(s.a)(o,2),p=i[0],d=i[1],h=function(e,t){e?(d("Welcome back, ".concat(t)),r(!0)):(d("Welcome, Please login or sign up"),r(!1))};return Object(n.useEffect)((function(){var e=localStorage.getItem("token");e&&(u.a.defaults.headers.common.Authorization="Bearer ".concat(e),r(!0))}),[]),l.a.createElement("div",{className:"stalk-app"},l.a.createElement(I.a,null),l.a.createElement("main",null,l.a.createElement("div",{id:"main-wrapper"},l.a.createElement(W,{tokenHeaderValue:a,messageCreator:h,navMessage:p}),l.a.createElement("div",{id:"main-logo"},l.a.createElement("h1",{id:"logo"},l.a.createElement(c.b,{id:"logo",to:"/users"},"Stalk"))),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/home",component:y}),l.a.createElement(m.a,{exact:!0,path:"/",component:te}),l.a.createElement(m.a,{exact:!0,path:"/signup",render:function(e){return l.a.createElement(w,Object.assign({},e,{messageCreator:h}))}}),a&&l.a.createElement(m.a,{exact:!0,path:"/profile",component:S}),l.a.createElement(m.a,{exact:!0,path:"/users",component:b}),l.a.createElement(m.a,{exact:!0,path:"/mygarden/:user_id",render:function(e){return l.a.createElement(D,Object.assign({},e,{tokenHeaderValue:a}))}}),l.a.createElement(m.a,{exact:!0,path:"/plantcalendar/:user_id",component:z}),l.a.createElement(m.a,{exact:!0,path:"/photo/:photo_id",component:x}),l.a.createElement(m.a,{exact:!0,path:"/time/",component:ee}),l.a.createElement(m.a,{exact:!0,path:"/addplant/",component:M}),l.a.createElement(m.a,{exact:!0,path:"/editplant/:plant_id",component:T}),l.a.createElement(m.a,{exact:!0,path:"/addphoto/:plant_id",component:F}),l.a.createElement(m.a,{exact:!0,path:"/editphoto/:photo_id",component:J}),l.a.createElement(m.a,{exact:!0,path:"/following/",component:Q}),l.a.createElement(m.a,{exact:!0,path:"/plant/:plant_id",component:X}),l.a.createElement(m.a,{exact:!0,path:"/uploadphoto",component:x})))))};o.a.render(l.a.createElement(c.a,null,l.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.a2787259.chunk.js.map