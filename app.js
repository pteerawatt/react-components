// TODO
class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            bold: false,
        };
    }
    hover() {

    }
    onListItemClick() {
        this.setState({
            done: !this.state.done
        })
        console.log('I got Clicked')
    }

    onMouseDown() {
        this.setState({
            bold: !this.state.bold
        })
    }

    render() {

        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.bold ? 'bold' : 'normal'
        };

        return (
            <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onMouseDown.bind(this)} onMouseLeave={this.onMouseDown.bind(this)}>{this.props.todo}</li>
        );
    }
}
var TodoList = (props) => {
    // var onListItemClick = (event) => {
    //     console.log('I got Clicked')
    // }
    return (
    <ul>
        {props.todos.map(todo => <TodoListItem todo={todo} />)}
    </ul>
    )
};
var App = () => (
    <div>
        <h1>List</h1>
        <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']} />
        
    </div>    
    );

  ReactDOM.render(<App />, document.getElementById("app"));