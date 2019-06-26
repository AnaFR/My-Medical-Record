(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(55)},41:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),s=n.n(o);n(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(10),l=n(16),u=r.a.createContext(null),c=n(3),m=n(4),d=n(6),h=n(5),p=n(7),f=r.a.createContext(null),b=function(e){return function(t){return r.a.createElement(f.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},g=f,E=n(9),v=n(17),O=n.n(v),w=(n(44),n(46),{apiKey:"AIzaSyBKnvBh6VO28njBtix0U5cUhbNtg3eIS6s",authDomain:"medical-record-a2309.firebaseapp.com",databaseURL:"https://medical-record-a2309.firebaseio.com",projectId:"medical-record-a2309",storageBucket:"medical-record-a2309.appspot.com",messagingSenderId:"806012811852",appId:"1:806012811852:web:5298aec94d3e5b15"}),S=function e(){var t=this;Object(c.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged(function(a){a?t.user(a.uid).once("value").then(function(t){var n=t.val();n.roles||(n.roles={}),a=Object(E.a)({uid:a.uid,email:a.email},n),e(a)}):n()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},O.a.initializeApp(w),this.serverValue=O.a.database.ServerValue,this.emailAuthProvider=O.a.auth.EmailAuthProvider,this.auth=O.a.auth(),this.db=O.a.database(),this.googleProvider=new O.a.auth.GoogleAuthProvider},j=function(e){var t=function(t){function n(e){var t;return Object(c.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(p.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(u.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return b(t)},y=n(14),C="/home",k=function(e){return function(t){var n=function(n){function a(){return Object(c.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,n),Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(n){e(n)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(u.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(y.a)(l.f,b)(n)}},M=b(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),U="ADMIN",P=function(e){var t=e.authUser;return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(i.b,{to:C},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/account"},"Account")),!!t.roles[U]&&r.a.createElement("li",null,r.a.createElement(i.b,{to:"/admin"},"Admin")),r.a.createElement("li",null,r.a.createElement(M,null)))},x=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Welcome")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/signin"},"Sign In")))},I=function(){return r.a.createElement(u.Consumer,null,function(e){return e?r.a.createElement(P,{authUser:e}):r.a.createElement(x,null)})},A=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to my medical Record"))},T=n(11),L={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},D="auth/email-already-in-use",W="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne,s=t.isAdmin,i={};s&&(i[U]=U),n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:i})}).then(function(){n.setState(Object(E.a)({},L)),n.props.history.push(C)}).catch(function(e){e.code===D&&(e.message=W),n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(T.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(T.a)({},e.target.name,e.target.checked))},n.state=Object(E.a)({},L),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,s=e.isAdmin,i=e.error,l=a!==o||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("label",null,"Admin:",r.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:s,onChange:this.onChangeCheckbox})),r.a.createElement("button",{disabled:l,type:"submit"},"Sign Up"),i&&r.a.createElement("p",null,i.message))}}]),t}(a.Component),N=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(i.b,{to:"/signup"},"Sign Up"))},B=Object(y.a)(l.f,b)(R),F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(B,null))},V={email:"",error:null},G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(Object(E.a)({},V))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(T.a)({},e.target.name,e.target.value))},n.state=Object(E.a)({},V),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),J=function(){return r.a.createElement("p",null,r.a.createElement(i.b,{to:"/pw-forget"},"Forgot Password?"))},z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(H,null))},H=b(G),K={email:"",password:"",error:null},$="auth/account-exists-with-different-credential",q="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",Q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(Object(E.a)({},K)),n.props.history.push(C)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(T.a)({},e.target.name,e.target.value))},n.state=Object(E.a)({},K),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then(function(e){return n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:{}})}).then(function(){n.setState({error:null}),n.props.history.push(C)}).catch(function(e){e.code===$&&(e.message=q),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),Y=Object(y.a)(l.f,b)(Q),Z=Object(y.a)(l.f,b)(X),_=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(Y,null),r.a.createElement(Z,null),r.a.createElement(J,null),r.a.createElement(N,null))},ee=n(35),te=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onToggleEditMode=function(){n.setState(function(e){return{editMode:!e.editMode,editText:n.props.message.text}})},n.onChangeEditText=function(e){n.setState({editText:e.target.value})},n.onSaveEditText=function(){n.props.onEditMessage(n.props.message,n.state.editText),n.setState({editMode:!1})},n.state={editMode:!1,editText:n.props.message.text},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authUser,n=e.message,a=e.onRemoveMessage,o=this.state,s=o.editMode,i=o.editText;return r.a.createElement("li",null,s?r.a.createElement("input",{type:"text",value:i,onChange:this.onChangeEditText}):r.a.createElement("span",null,r.a.createElement("strong",null,n.userId)," ",n.text,n.editedAt&&r.a.createElement("span",null,"(Edited)")),t.username===n.userId&&r.a.createElement("span",null,s?r.a.createElement("span",null,r.a.createElement("button",{onClick:this.onSaveEditText},"Save"),r.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):r.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!s&&r.a.createElement("button",{type:"button",onClick:function(){return a(n.username)}},"Delete")))}}]),t}(a.Component),ne=function(e){var t=e.authUser,n=e.messages,a=e.onEditMessage,o=e.onRemoveMessage;return r.a.createElement("ul",null,n.map(function(e){return r.a.createElement(te,{authUser:t,key:e.uid,message:e,onEditMessage:a,onRemoveMessage:o})}))},ae=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onListenForMessages=function(){n.setState({loading:!0}),n.props.firebase.messages().orderByChild("createdAt").limitToLast(n.state.limit).on("value",function(e){var t=e.val();if(t){var a=Object.keys(t).map(function(e){return Object(E.a)({},t[e],{username:e})});n.setState({messages:a,loading:!1})}else n.setState({messages:null,loading:!1})})},n.onChangeText=function(e){n.setState({text:e.target.value})},n.onCreateMessage=function(e,t){n.props.firebase.messages().push({text:n.state.text,userId:t.username,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({text:""}),e.preventDefault()},n.onEditMessage=function(e,t){e.username;var a=Object(ee.a)(e,["username"]);n.props.firebase.message(e.username).set(Object(E.a)({},a,{text:t,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveMessage=function(e){n.props.firebase.message(e).remove()},n.onNextPage=function(){n.setState(function(e){return{limit:e.limit+5}},n.onListenForMessages)},n.state={text:"",loading:!1,messages:[],limit:5},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.onListenForMessages()}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this,t=this.state,n=t.text,a=t.messages,o=t.loading;return r.a.createElement(u.Consumer,null,function(t){return r.a.createElement("div",null,!o&&a&&r.a.createElement("button",{type:"button",onClick:e.onNextPage},"More"),o&&r.a.createElement("div",null,"Loading ..."),a&&r.a.createElement(ne,{authUser:t,messages:a,onEditMessage:e.onEditMessage,onRemoveMessage:e.onRemoveMessage}),!a&&r.a.createElement("div",null,"There are no messages ..."),r.a.createElement("form",{onSubmit:function(n){return e.onCreateMessage(n,t)}},r.a.createElement("input",{type:"text",value:n,onChange:e.onChangeText}),r.a.createElement("button",{type:"submit"},"Send")))})}}]),t}(a.Component),re=b(ae),oe=k(function(e){return!!e})(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"This is your Medical Record."),r.a.createElement(re,null))}),se={passwordOne:"",passwordTwo:"",error:null},ie=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(Object(E.a)({},se))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(T.a)({},e.target.name,e.target.value))},n.state=Object(E.a)({},se),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),le=b(ie),ue=[{id:"password",provider:null},{id:"google.com",provider:"googleProvider"}],ce=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).fetchSignInMethods=function(){n.props.firebase.auth.fetchSignInMethodsForEmail(n.props.authUser.email).then(function(e){return n.setState({activeSignInMethods:e,error:null})}).catch(function(e){return n.setState({error:e})})},n.onSocialLoginLink=function(e){n.props.firebase.auth.currentUser.linkWithPopup(n.props.firebase[e]).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.onDefaultLoginLink=function(e){var t=n.props.firebase.emailAuthProvider.credential(n.props.authUser.email,e);n.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.onUnlink=function(e){n.props.firebase.auth.currentUser.unlink(e).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.state={activeSignInMethods:[],error:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeSignInMethods,a=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",null,ue.map(function(t){var a=1===n.length,o=n.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(de,{onlyOneLeft:a,isEnabled:o,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(me,{onlyOneLeft:a,isEnabled:o,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))})),a&&a.message)}}]),t}(a.Component),me=function(e){var t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,o=e.onLink,s=e.onUnlink;return n?r.a.createElement("button",{type:"button",onClick:function(){return s(a.id)},disabled:t},"Deactivate ",a.id):r.a.createElement("button",{type:"button",onClick:function(){return o(a.provider)}},"Link ",a.id)},de=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),n.props.onLink(n.state.passwordOne),n.setState({passwordOne:"",passwordTwo:""})},n.onChange=function(e){n.setState(Object(T.a)({},e.target.name,e.target.value))},n.state={passwordOne:"",passwordTwo:""},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,o=e.onUnlink,s=this.state,i=s.passwordOne,l=s.passwordTwo,u=i!==l||""===i;return n?r.a.createElement("button",{type:"button",onClick:function(){return o(a.id)},disabled:t},"Deactivate ",a.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:i,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:u,type:"submit"},"Link ",a.id))}}]),t}(a.Component),he=b(ce),pe=Object(y.a)(k(function(e){return!!e}))(function(){return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(H,null),r.a.createElement(le,null),r.a.createElement(he,{authUser:e}))})}),fe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1,users:[]},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var n=t.val(),a=Object.keys(n).map(function(e){return Object(E.a)({},n[e],{uid:e})});e.setState({users:a,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement(i.b,{to:{pathname:"".concat("/admin","/").concat(e.uid),state:{user:e}}},"Details")))})))}}]),t}(a.Component),be=b(fe),ge=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSendPasswordResetEmail=function(){n.props.firebase.doPasswordReset(n.state.user.email)},n.state=Object(E.a)({loading:!1,user:null},e.location.state),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",function(t){e.setState({user:t.val(),loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),n&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",t.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",t.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",t.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))}}]),t}(a.Component),Ee=b(ge),ve=Object(y.a)(k(function(e){return e&&!!e.roles[U]}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/admin/:id",component:Ee}),r.a.createElement(l.a,{exact:!0,path:"/admin",component:be})))}),Oe=j(function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement("hr",null),r.a.createElement(l.a,{exact:!0,path:"/",component:A}),r.a.createElement(l.a,{path:"/signup",component:F}),r.a.createElement(l.a,{path:"/signin",component:_}),r.a.createElement(l.a,{path:"/pw-forget",component:z}),r.a.createElement(l.a,{path:C,component:oe}),r.a.createElement(l.a,{path:"/account",component:pe}),r.a.createElement(l.a,{path:"/admin",component:ve})))});s.a.render(r.a.createElement(g.Provider,{value:new S},r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.b986936c.chunk.js.map