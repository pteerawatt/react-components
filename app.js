// TODO
var TodoList = (props) => {
    var onListItemClick = (event) => {
        console.log('I got Clicked')
    }
    return (
    <ul>
        <li onClick={onListItemClick}>{props.todos[0]}</li>
        <li>{props.todos[1]}</li>
        <li>{props.todos[2]}</li>
    </ul>
    )
};
var App = () => (
    <div>
        <h1>List</h1>
        <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
        
    </div>    
    );

  ReactDOM.render(<App />, document.getElementById("app"));