(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(t,e,a){t.exports=a(40)},40:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),i=a(12),r=a.n(i),o=a(13),u=a(14),s=a(16),d=a(15),c=a(17),p=a(2),h=a.n(p),m=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(l)))).state={data:[],id:0,message:null,intervalIsSet:!1,idToDelete:null,idToUpdate:null,objectToUpdate:null},a.getDataFromDb=function(){fetch("http://3.19.29.61:3000/api/getData").then((function(t){return t.json()})).then((function(t){return a.setState({data:t.data})}))},a.putDataToDB=function(t){for(var e=a.state.data.map((function(t){return t.id})),n=0;e.includes(n);)++n;h.a.post("http://3.19.29.61:3000/api/putData",{id:n,message:t})},a.deleteFromDB=function(t){parseInt(t);var e=null;a.state.data.forEach((function(a){a.id==t&&(e=a._id)})),h.a.delete("http://3.19.29.61:3000/api/deleteData",{data:{id:e}})},a.updateDB=function(t,e){var n=null;parseInt(t),a.state.data.forEach((function(e){e.id==t&&(n=e._id)})),h.a.post("http://3.19.29.61:3000/api/updateData",{id:n,update:{message:e}})},a}return Object(c.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){if(this.getDataFromDb(),!this.state.intervalIsSet){var t=setInterval(this.getDataFromDb,1e3);this.setState({intervalIsSet:t})}}},{key:"componentWillUnmount",value:function(){this.state.intervalIsSet&&(clearInterval(this.state.intervalIsSet),this.setState({intervalIsSet:null}))}},{key:"render",value:function(){var t=this,e=this.state.data;return l.a.createElement("div",null,l.a.createElement("ul",null,e.length<=0?"NO DB ENTRIES YET":e.map((function(t){return l.a.createElement("li",{style:{padding:"10px"},key:e.message},l.a.createElement("span",{style:{color:"gray"}}," id: ")," ",t.id," ",l.a.createElement("br",null),l.a.createElement("span",{style:{color:"gray"}}," data: "),t.message)}))),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement("input",{type:"text",onChange:function(e){return t.setState({message:e.target.value})},placeholder:"add something in the database",style:{width:"200px"}}),l.a.createElement("button",{onClick:function(){return t.putDataToDB(t.state.message)}},"ADD")),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement("input",{type:"text",style:{width:"200px"},onChange:function(e){return t.setState({idToDelete:e.target.value})},placeholder:"put id of item to delete here"}),l.a.createElement("button",{onClick:function(){return t.deleteFromDB(t.state.idToDelete)}},"DELETE")),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement("input",{type:"text",style:{width:"200px"},onChange:function(e){return t.setState({idToUpdate:e.target.value})},placeholder:"id of item to update here"}),l.a.createElement("input",{type:"text",style:{width:"200px"},onChange:function(e){return t.setState({updateToApply:e.target.value})},placeholder:"put new value of the item here"}),l.a.createElement("button",{onClick:function(){return t.updateDB(t.state.idToUpdate,t.state.updateToApply)}},"UPDATE")))}}]),e}(n.Component);r.a.render(l.a.createElement(m,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f60a66f9.chunk.js.map