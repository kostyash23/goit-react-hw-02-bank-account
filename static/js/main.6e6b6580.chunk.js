(this["webpackJsonpbank-acc"]=this["webpackJsonpbank-acc"]||[]).push([[0],{18:function(t,a,e){t.exports={balance:"Balance_balance__hRTiy"}},19:function(t,a,e){t.exports={dashboard:"Dashboard_dashboard__2uekr"}},2:function(t,a,e){t.exports={history:"TransactionHistory_history__3-LmH",headlineRow:"TransactionHistory_headlineRow__1R_kV",headlineRowItem:"TransactionHistory_headlineRowItem__2vbPo",row:"TransactionHistory_row__2gwbX",rowItem:"TransactionHistory_rowItem__2150F"}},21:function(t,a,e){t.exports=e(40)},26:function(t,a,e){},4:function(t,a,e){t.exports={controls:"Controls_controls__1rZUn",valueInput:"Controls_valueInput__14kyI",button:"Controls_button__1HnsV"}},40:function(t,a,e){"use strict";e.r(a);var n=e(1),r=e.n(n),o=e(3),c=e.n(o),s=(e(26),e(20)),l=e(8),i=e(9),u=e(11),m=e(10),b=e(12),d=e(2),h=e.n(d),p=function(t){var a=t.transactions;return r.a.createElement("table",{className:h.a.history},r.a.createElement("thead",null,r.a.createElement("tr",{className:h.a.headlineRow},r.a.createElement("th",{className:h.a.headlineRowItem},"Transaction"),r.a.createElement("th",{className:h.a.headlineRowItem},"Amount"),r.a.createElement("th",{className:h.a.headlineRowItem},"Date"))),r.a.createElement("tbody",null,a.map((function(t){var a=t.id,e=t.type,n=t.amount,o=t.date;return r.a.createElement("tr",{className:h.a.row,key:a},r.a.createElement("td",{className:h.a.rowItem},e),r.a.createElement("td",{className:h.a.rowItem},n,"$"),r.a.createElement("td",{className:h.a.rowItem},o))}))))};p.defaultProps={transactions:[]};var f=p,w=e(15),v=e.n(w),y=e(6),_=(e(35),e(4)),E=e.n(_);y.a.configure();var g=function(t){function a(){var t,e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=Object(u.a)(this,(t=Object(m.a)(a)).call.apply(t,[this].concat(r)))).state={input:""},e.handleInput=function(t){e.setState({input:t.target.value})},e.handleClick=function(t){t.preventDefault();var a=e.props,n=a.handleTransaction,r=a.balance,o=e.state.input,c=(new Date).toLocaleString(),s=Number(o),l={id:v.a.generate(),type:t.target.name,amount:s,date:c};return""===o||"0"===o||Number(o)<0?(Object(y.a)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"),void e.setState({input:""})):o.length>1&&"0"===o[0]?(Object(y.a)(" \u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0432\u043e\u0434!"),void e.setState({input:""})):r<l.amount&&"withdrawal"===l.type?(Object(y.a)("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"),void e.setState({input:""})):(n(l),void e.setState({input:""}))},e}return Object(b.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this.state.input;return r.a.createElement("section",{className:E.a.controls},r.a.createElement("input",{type:"number",value:t,onChange:this.handleInput,className:E.a.valueInput}),r.a.createElement("button",{className:E.a.button,type:"button",name:"deposit",onClick:this.handleClick},"Deposit"),r.a.createElement("button",{type:"button",name:"withdrawal",onClick:this.handleClick,className:E.a.button},"Withdraw"))}}]),a}(n.Component),N=e(18),I=e.n(N),O=function(t){var a=t.transactions,e=t.balance,n=function(t){return a.filter((function(a){return a.type===t})).reduce((function(t,a){return Number(t)+Number(a.amount)}),0)};return r.a.createElement("section",{className:I.a.balance},r.a.createElement("span",{role:"img","aria-label":"deposit"},"\u2b06\ufe0f",n("deposit"),"$"),r.a.createElement("span",{role:"img","aria-label":"withdraw"},"\u2b07\ufe0f",n("withdrawal"),"$"),r.a.createElement("span",null,"Balance: ",e,"$"))},S=e(19),k=e.n(S),j=function(t){function a(){var t,e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=Object(u.a)(this,(t=Object(m.a)(a)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0},e.handleTransaction=function(t){e.setState((function(a){return{transactions:[].concat(Object(s.a)(a.transactions),[t]),balance:"withdrawal"===t.type?a.balance-t.amount:a.balance+t.amount}}))},e}return Object(b.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({transactions:JSON.parse(localStorage.getItem("transactions"))?JSON.parse(localStorage.getItem("transactions")):[],balance:JSON.parse(localStorage.getItem("balance"))?JSON.parse(localStorage.getItem("balance")):0})}},{key:"componentDidUpdate",value:function(t,a){a!==this.state&&(localStorage.setItem("transactions",JSON.stringify(this.state.transactions)),localStorage.setItem("balance",JSON.stringify(this.state.balance)))}},{key:"render",value:function(){var t=this.state,a=t.transactions,e=t.balance;return r.a.createElement("div",{className:k.a.dashboard},r.a.createElement(g,{handleTransaction:this.handleTransaction,balance:e}),r.a.createElement(O,{transactions:a,balance:e}),r.a.createElement(f,{transactions:a}))}}]),a}(n.Component);var C=function(){return r.a.createElement("div",null,r.a.createElement(j,null))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6e6b6580.chunk.js.map