#JSX
var Mycomponents = React.createClass({
  getInitialState:function(){
    return {
          "iname":"cvcv",
          "todolist":[
            {"name":"张三","belong":"武当"},
            {"name":"张无忌","belong":"明教"},
            {"name":"灭绝","belong":"不知道"}
          ]
        }
  },
  changes:function(event){
    this.setState({iname : event.target.value});
  },
  render:function(){
    return <div><input type="text" onChange={this.changes}/><p>my first react code {this.state.iname}</p><List todo={this.state.todolist}/></div>
  }
});

var List = React.createClass({
  clicks:function(){
    console.log('组件的点击事件');
  },
  getDefaultProps:function(){
    return {"setName":"真的好么"}
  },
  render:function(){
    return (<div><ul>
          
          {
            this.props.todo.map(function(item,i){
              return (
                    <li>{item.name}--{item.belong}</li>
                  ) 
            })
          }
          
        </ul>{this.props.setName}</div>
      )
  }
});