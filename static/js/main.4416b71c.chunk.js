(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/survey.933d2776.png"},172:function(e,t,a){e.exports=a.p+"static/media/corusel2.2278336a.jpg"},202:function(e,t,a){e.exports=a(346)},207:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),i=a.n(o);a(207),a(208),a(209),a(210),a(211),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(28),l=a(49),c=a(17),u=a(19),m=a(21),d=a(20),h=a(22),p=r.a.createContext(null),f=r.a.createContext(null),g=function(e){return function(t){return r.a.createElement(f.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},E=f,b=a(24),v=a(55),O=a.n(v),y=(a(214),a(216),{apiKey:"AIzaSyBKnvBh6VO28njBtix0U5cUhbNtg3eIS6s",authDomain:"medical-record-a2309.firebaseapp.com",databaseURL:"https://medical-record-a2309.firebaseio.com",projectId:"medical-record-a2309",storageBucket:"medical-record-a2309.appspot.com",messagingSenderId:"806012811852",appId:"1:806012811852:web:5298aec94d3e5b15"}),w=function e(){var t=this;Object(c.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:"http://localhost:3000"})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged(function(n){n?t.user(n.uid).once("value").then(function(t){var a=t.val();a.roles||(a.roles={}),n=Object(b.a)({uid:n.uid,email:n.email,emailVerified:n.emailVerified,providerData:n.providerData},a),e(n)}):a()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},this.form=function(){return t.db.ref("form")},O.a.initializeApp(y),this.serverValue=O.a.database.ServerValue,this.emailAuthProvider=O.a.auth.EmailAuthProvider,this.auth=O.a.auth(),this.db=O.a.database(),this.googleProvider=new O.a.auth.GoogleAuthProvider},j=function(e){var t=function(t){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(h.a)(a,t),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(p.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return g(t)},S=a(29),C="/home",k=function(e){return function(t){var a=function(a){function n(){return Object(c.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(h.a)(n,a),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(a){e(a)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(p.Consumer,null,function(n){return e(n)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(S.a)(l.f,g)(a)}},M=function(e){var t=function(t){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then(function(){return t.setState({isSent:!0})})},t.state={isSent:!1},t}return Object(h.a)(a,t),Object(u.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(p.Consumer,null,function(a){return function(e){return e&&!e.emailVerified&&e.providerData.map(function(e){return e.providerId}).includes("password")}(a)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check your E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check your E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)})}}]),a}(r.a.Component);return g(t)},x=g(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),N="ADMIN",P=a(117),I=a.n(P),A=a(15),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(A.i,{color:"default-color",dark:!0,expand:"md"},r.a.createElement(A.j,null,r.a.createElement("img",{src:I.a,alt:"Logo",width:"50",height:"30"})),r.a.createElement(A.l,{onClick:this.toggleCollapse}),r.a.createElement(A.d,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(A.k,{left:!0},r.a.createElement(A.g,{active:!0},r.a.createElement(A.h,{to:"/"},"Welcome")),r.a.createElement(A.g,null,r.a.createElement(A.h,{to:C},"My Medical Record")),r.a.createElement(A.g,null,r.a.createElement(A.h,{to:"/admin"},"Patients")),r.a.createElement(A.g,null,r.a.createElement(A.h,{to:"/blog"},"Blog")),r.a.createElement(A.g,null,r.a.createElement(A.h,{to:"/account"},"Account")),r.a.createElement(A.g,null,r.a.createElement(x,null)),r.a.createElement(A.g,null,r.a.createElement(A.f,null)))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(A.i,{color:"default-color",dark:!0,expand:"md"},r.a.createElement(A.j,null,r.a.createElement("img",{src:I.a,alt:"Logo",width:"50",height:"30"})),r.a.createElement(A.l,{onClick:this.toggleCollapse}),r.a.createElement(A.d,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(A.k,{left:!0},r.a.createElement(A.g,{active:!0},r.a.createElement(A.h,{to:"/"},"Welcome")),r.a.createElement(A.g,null,r.a.createElement(A.h,{to:"/signin"},"Sign In")),r.a.createElement(A.g,null,r.a.createElement(A.f,null)))))}}]),t}(n.Component),D=function(){return r.a.createElement(p.Consumer,null,function(e){return e?r.a.createElement(U,{authUser:e}):r.a.createElement(T,null)})},L=a(47),R=a.n(L),W=a(172),F=a.n(W),V=function(){return r.a.createElement(A.e,null,r.a.createElement(A.a,{activeItem:1,length:2,showControls:!0,showIndicators:!0,className:"z-depth-1"},r.a.createElement(A.b,null,r.a.createElement(A.c,{itemId:"1"},r.a.createElement(A.m,null,r.a.createElement("img",{className:"d-block w-100",src:R.a,alt:"First slide"}))),r.a.createElement(A.c,{itemId:"2"},r.a.createElement(A.m,null,r.a.createElement("img",{className:"d-block w-100",src:F.a,alt:"Second slide"}))))))},B=a(31),z=a(358),G=a(361),J=a(360),K=a(355),H=a(357),Y={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},X="auth/email-already-in-use",$="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,o=t.passwordOne,i=t.isAdmin,s={};i&&(s[N]=N),a.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r,roles:s})}).then(function(){return a.props.firebase.doSendEmailVerification()}).then(function(){a.setState(Object(b.a)({},Y)),a.props.history.push(C)}).catch(function(e){e.code===X&&(e.message=$),a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.onChangeCheckbox=function(e){a.setState(Object(B.a)({},e.target.name,e.target.checked))},a.state=Object(b.a)({},Y),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,i=e.isAdmin,s=e.error,l=n!==o||""===n||""===a||""===t;return r.a.createElement(z.a,{centered:!0,columns:3},r.a.createElement("img",{className:"loginbkg",src:R.a,alt:"Computer"}),r.a.createElement(z.a.Column,null,r.a.createElement(G.a,{as:"h2",textAlign:"center"},r.a.createElement("br",null),r.a.createElement("br",null),"My Medical Record"),r.a.createElement(J.a,{onSubmit:this.onSubmit},r.a.createElement(K.a,{size:"large"},r.a.createElement(K.a.Input,{fluid:!0,icon:"user",iconPosition:"left",name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full name"}),r.a.createElement(K.a.Input,{fluid:!0,icon:"mail",iconPosition:"left",name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email address"}),r.a.createElement(K.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",name:"passwordOne",value:n,onChange:this.onChange,placeholder:"Password",type:"password"}),r.a.createElement(K.a.Input,{fluid:!0,icon:"warning sign",iconPosition:"left",name:"passwordTwo",value:o,onChange:this.onChange,placeholder:"Confirm Password",type:"password"}),r.a.createElement("label",null,"Doctor:",r.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:i,onChange:this.onChangeCheckbox})),r.a.createElement(H.a,{disabled:l,type:"submit",color:"blue",fluid:!0,size:"large"},"SIGN UP"),s&&r.a.createElement("p",null,s.message)))))}}]),t}(n.Component),q=Object(S.a)(l.f,g)(_),Q=function(){return r.a.createElement("div",null,r.a.createElement(q,null))},Z={email:"",error:null},ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(b.a)({},Z))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.state=Object(b.a)({},Z),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("img",{className:"loginbkg",src:R.a,alt:"Computer"}),r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(n.Component),te=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(ae,null))},ae=g(ee),ne=a(356),re=a(66),oe={email:"",password:"",error:null},ie="auth/account-exists-with-different-credential",se="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(b.a)({},oe)),a.props.history.push(C)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.state=Object(b.a)({},oe),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement(z.a,{centered:!0,columns:3},r.a.createElement("img",{className:"loginbkg",src:R.a,alt:"Computer"}),r.a.createElement(z.a.Column,null,r.a.createElement(G.a,{as:"h2",textAlign:"center"},r.a.createElement("br",null),r.a.createElement("br",null),"My Medical Record"),r.a.createElement(J.a,{onSubmit:this.onSubmit},r.a.createElement(K.a,{size:"large"},r.a.createElement(K.a.Input,{fluid:!0,icon:"user",iconPosition:"left",name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email address"}),r.a.createElement(K.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",name:"password",value:a,onChange:this.onChange,placeholder:"Password",type:"password"}),r.a.createElement(H.a,{disabled:o,type:"submit",color:"blue",fluid:!0,size:"large"},"Login"),n&&r.a.createElement("p",null,n.message))),r.a.createElement(ne.a,null,r.a.createElement(s.b,{to:"/signup"},"Register Now")," \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement(s.b,{to:"/pw-forget"},"Forgot Password?"))))}}]),t}(n.Component),ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){a.props.firebase.doSignInWithGoogle().then(function(e){return a.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:{}})}).then(function(){a.setState({error:null}),a.props.history.push(C)}).catch(function(e){e.code===ie&&(e.message=se),a.setState({error:e})}),e.preventDefault()},a.state={error:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("center",null," ","or Sign Up with.",r.a.createElement(H.a,{type:"submit",icon:!0},r.a.createElement(re.a,{name:"google"}))),e&&r.a.createElement("p",null,e.message))}}]),t}(n.Component),ue=Object(S.a)(l.f,g)(le),me=Object(S.a)(l.f,g)(ce),de=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(me,null))},he=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={form:[],alert:!1,alertData:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"showAlert",value:function(e,t){var a=this;this.setState({alert:!0,alertData:{type:e,message:t}}),setTimeout(function(){a.setState({alert:!1})},4e3)}},{key:"resetForm",value:function(){this.refs.contactForm.reset()}},{key:"componentWillMount",value:function(){var e=this;this.props.firebase.form().orderByKey().limitToLast(6),this.props.firebase.form().on("child_added",function(t){var a=t.val(),n={name:a.name,email:a.email,city:a.city,phone:a.phone,message:a.message,age:a.age,weight:a.weight,height:a.height};e.setState({form:[n].concat(e.state.form)})})}},{key:"sendMessage",value:function(e){var t=this;e.preventDefault();var a={name:this.inputName.value,email:this.inputEmail.value,phone:this.inputPhone.value,sex:this.inputSex.value,message:this.textAreaMessage.value,age:this.inputAge.value,weight:this.inputWeight.value,height:this.inputHeight.value};a.name&&a.email&&a.phone&&a.sex&&a.message&&a.age&&a.weight&&a.height?(this.props.firebase.form().push(a).then(function(){t.showAlert("success","Your Medical Record was sent successfull")}).catch(function(){t.showAlert("danger","Your Medical Record could not be sent")}),this.resetForm()):this.showAlert("warning","Please fill the form")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.alert&&r.a.createElement("div",{className:"alert alert-".concat(this.state.alertData.type),role:"alert"},r.a.createElement("div",{className:"container"},this.state.alertData.message)),r.a.createElement("div",{className:"container",style:{padding:"50px 0px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("h2",null,"My medical Record"),r.a.createElement("form",{onSubmit:this.sendMessage.bind(this),ref:"contactForm"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Name",ref:function(t){return e.inputName=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email",ref:function(t){return e.inputEmail=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"number",className:"form-control",id:"phone",placeholder:"+52 1",ref:function(t){return e.inputPhone=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sex"},"Sex"),r.a.createElement("select",{className:"form-control",id:"sex",ref:function(t){return e.inputSex=t}},r.a.createElement("option",{value:"M\xe9xico"},"Female"),r.a.createElement("option",{value:"Guadalajara"},"Male"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"age"},"Age"),r.a.createElement("input",{type:"number",className:"form-control",id:"age",placeholder:"age",ref:function(t){return e.inputAge=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"weight"},"Weight(Kg)"),r.a.createElement("input",{type:"number",className:"form-control",id:"weight",placeholder:"weight",ref:function(t){return e.inputWeight=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"height"},"Height(mts)"),r.a.createElement("input",{type:"height",className:"form-control",id:"height",placeholder:"height",ref:function(t){return e.inputHeight=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Medical Diganosis"),r.a.createElement("textarea",{className:"form-control",id:"message",rows:"1",ref:function(t){return e.textAreaMessage=t}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Send"))),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row"},this.state.form.map(function(e){return r.a.createElement("div",{className:"col-sm-6",key:e.phone,style:{margin:"0px 0px 30px 0px"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h8",{className:"card-title"},"Name:     "+e.name),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Email:      "+e.email),r.a.createElement("p",{className:"card-text"},"DX:    "+e.message),r.a.createElement("a",{href:"tel:".concat(e.phone),className:"card-link"},"Phone:   "+e.phone),r.a.createElement("a",{href:"age:".concat(e.age),className:"card-link"},e.age+"   years"))))}))))),r.a.createElement("div",{className:"alert alert-info fixed-bottom"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"})))))}}]),t}(n.Component),pe=g(he),fe=Object(S.a)(M,k(function(e){return!!e}))(function(){return r.a.createElement("div",null,r.a.createElement(pe,null))}),ge=a(189),Ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onToggleEditMode=function(){a.setState(function(e){return{editMode:!e.editMode,editText:a.props.message.text}})},a.onChangeEditText=function(e){a.setState({editText:e.target.value})},a.onSaveEditText=function(){a.props.onEditMessage(a.props.message,a.state.editText),a.setState({editMode:!1})},a.state={editMode:!1,editText:a.props.message.text},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authUser,a=e.message,n=e.onRemoveMessage,o=this.state,i=o.editMode,s=o.editText;return r.a.createElement("li",null,i?r.a.createElement("input",{type:"text",value:s,onChange:this.onChangeEditText}):r.a.createElement("span",null,r.a.createElement("strong",null,a.userId)," ",a.text,a.editedAt&&r.a.createElement("span",null,"(Edited)")),t.username===a.userId&&r.a.createElement("span",null,i?r.a.createElement("span",null,r.a.createElement("button",{onClick:this.onSaveEditText},"Save"),r.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):r.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!i&&r.a.createElement("button",{type:"button",onClick:function(){return n(a.username)}},"Delete")))}}]),t}(n.Component),be=function(e){var t=e.authUser,a=e.messages,n=e.onEditMessage,o=e.onRemoveMessage;return r.a.createElement("ul",null,a.map(function(e){return r.a.createElement(Ee,{authUser:t,key:e.username,message:e,onEditMessage:n,onRemoveMessage:o})}))},ve=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onListenForMessages=function(){a.setState({loading:!0}),a.props.firebase.messages().orderByChild("createdAt").limitToLast(a.state.limit).on("value",function(e){var t=e.val();if(t){var n=Object.keys(t).map(function(e){return Object(b.a)({},t[e],{username:e})});a.setState({messages:n,loading:!1})}else a.setState({messages:null,loading:!1})})},a.onChangeText=function(e){a.setState({text:e.target.value})},a.onCreateMessage=function(e,t){a.props.firebase.messages().push({text:a.state.text,userId:t.username,createdAt:a.props.firebase.serverValue.TIMESTAMP}),a.setState({text:""}),e.preventDefault()},a.onEditMessage=function(e,t){e.username;var n=Object(ge.a)(e,["username"]);a.props.firebase.message(e.username).set(Object(b.a)({},n,{text:t,editedAt:a.props.firebase.serverValue.TIMESTAMP}))},a.onRemoveMessage=function(e){a.props.firebase.message(e).remove()},a.onNextPage=function(){a.setState(function(e){return{limit:e.limit+5}},a.onListenForMessages)},a.state={text:"",loading:!1,messages:[],limit:5},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onListenForMessages()}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.text,n=t.messages,o=t.loading;return r.a.createElement(p.Consumer,null,function(t){return r.a.createElement("div",null,!o&&n&&r.a.createElement("button",{type:"button",onClick:e.onNextPage},"More"),o&&r.a.createElement("div",null,"Loading ..."),n&&r.a.createElement(be,{authUser:t,messages:n,onEditMessage:e.onEditMessage,onRemoveMessage:e.onRemoveMessage}),!n&&r.a.createElement("div",null,"There are no messages ..."),r.a.createElement("form",{onSubmit:function(a){return e.onCreateMessage(a,t)}},r.a.createElement("input",{type:"text",value:a,onChange:e.onChangeText}),r.a.createElement("button",{type:"submit"},"Send")))})}}]),t}(n.Component),Oe=g(ve),ye=Object(S.a)(M,k(function(e){return!!e}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Blog"),r.a.createElement("p",null,"This is a Medical blog you can share information about medical issues...... "),r.a.createElement(Oe,null))}),we={passwordOne:"",passwordTwo:"",error:null},je=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(b.a)({},we))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.state=Object(b.a)({},we),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,o=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),Se=g(je),Ce=[{id:"password",provider:null},{id:"google.com",provider:"googleProvider"}],ke=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).fetchSignInMethods=function(){a.props.firebase.auth.fetchSignInMethodsForEmail(a.props.authUser.email).then(function(e){return a.setState({activeSignInMethods:e,error:null})}).catch(function(e){return a.setState({error:e})})},a.onSocialLoginLink=function(e){a.props.firebase.auth.currentUser.linkWithPopup(a.props.firebase[e]).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.onDefaultLoginLink=function(e){var t=a.props.firebase.emailAuthProvider.credential(a.props.authUser.email,e);a.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.onUnlink=function(e){a.props.firebase.auth.currentUser.unlink(e).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.state={activeSignInMethods:[],error:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeSignInMethods,n=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",null,Ce.map(function(t){var n=1===a.length,o=a.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(xe,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(Me,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))})),n&&n.message)}}]),t}(n.Component),Me=function(e){var t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onLink,i=e.onUnlink;return a?r.a.createElement("button",{type:"button",onClick:function(){return i(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement("button",{type:"button",onClick:function(){return o(n.provider)}},"Link ",n.id)},xe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.onLink(a.state.passwordOne),a.setState({passwordOne:"",passwordTwo:""})},a.onChange=function(e){a.setState(Object(B.a)({},e.target.name,e.target.value))},a.state={passwordOne:"",passwordTwo:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onUnlink,i=this.state,s=i.passwordOne,l=i.passwordTwo,c=s!==l||""===s;return a?r.a.createElement("button",{type:"button",onClick:function(){return o(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:s,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:c,type:"submit"},"Link ",n.id))}}]),t}(n.Component),Ne=g(ke),Pe=Object(S.a)(M,k(function(e){return!!e}))(function(){return r.a.createElement(p.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(ae,null),r.a.createElement(Se,null),r.a.createElement(Ne,{authUser:e}))})}),Ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(b.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement(s.b,{to:{pathname:"".concat("/admin","/").concat(e.uid),state:{user:e}}},"Details")))})))}}]),t}(n.Component),Ae=g(Ie),Ue=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onSendPasswordResetEmail=function(){a.props.firebase.doPasswordReset(a.state.user.email)},a.state=Object(b.a)({loading:!1,user:null},e.location.state),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",function(t){e.setState({user:t.val(),loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),a&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",t.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",t.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",t.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))}}]),t}(n.Component),Te=g(Ue),De=Object(S.a)(k(function(e){return e&&!!e.roles[N]}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/admin/:id",component:Te}),r.a.createElement(l.a,{exact:!0,path:"/admin",component:Ae})))}),Le=j(function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(l.a,{exact:!0,path:"/",component:V}),r.a.createElement(l.a,{path:"/signup",component:Q}),r.a.createElement(l.a,{path:"/signin",component:de}),r.a.createElement(l.a,{path:"/pw-forget",component:te}),r.a.createElement(l.a,{path:C,component:fe}),r.a.createElement(l.a,{path:"/blog",component:ye}),r.a.createElement(l.a,{path:"/account",component:Pe}),r.a.createElement(l.a,{path:"/admin",component:De})))});i.a.render(r.a.createElement(E.Provider,{value:new w},r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,a){e.exports=a.p+"static/media/computer.f71e9b9a.jpg"}},[[202,1,2]]]);
//# sourceMappingURL=main.4416b71c.chunk.js.map