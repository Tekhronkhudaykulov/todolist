import React, {useState, useEffect} from "react";
import  './assets/style/style.scss';

const  TodoItem = ({title, completed, onCompleted, deleteTodo}) => {
    

    return (
        <div className={'todo'}>
            <div className={'checkbox'} onClick={onCompleted}>
                {completed && <span>&#10003;</span>}
            </div>
            <p>{title}</p>
            <span onClick={deleteTodo} className={'deleteIcon'}>&#10008;</span>
        </div>
    )
};

function App () {
     const  [todos, setTodos] = useState([]); //bu huk  inputga kiritilayotgan qiymatni yani yozilgan todoni chiqarib beradi
     const  [todoText, setTodoText] = useState('');//bu huk inputga kiritilayotgan qiymat
     const  [filter, setFilter] = useState(0);

    useEffect(() => {
        const todolar = getTodosFromDatabase();
            setTodos(todolar ?? []);
    }, []);

    useEffect(() => {
           saveTodosToDatabase(todos);
    }, [todos]);

    const  saveTodosToDatabase = (todos) => {
        const  todoString = JSON.stringify(todos);
        localStorage.setItem('todos', todoString);
    };

    const  getTodosFromDatabase = () => {
        const  saveTodos = localStorage.getItem('todos');
        return (JSON.parse(saveTodos))
    }

    const changedCompleted = (id) => {
        const changed = todos.map(item => {
            if (item.id === id){
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        })
        setTodos(changed);

    }
    const  deleteTodo = (id) => {
        const changed = todos.filter(item => {
            if (item.id !== id){
                return item;
            }
        });
        setTodos(changed);
    }

    return(
        <div className={'container'}>
            <input
                type="text"
                className={'todo_input'}
                value={todoText}
                onChange={e => {
                setTodoText(e.target.value)
                }}
                onKeyDown={(event) => {
                    if (event.keyCode === 13 && todoText !== ''){
                        const  newTodo = {
                            id:Math.random(),
                            title:todoText,
                            completed:false
                        }
                        setTodos([...todos, newTodo]);
                        setTodoText('');
                    }
                    console.log(todos)
                }}
            />
            <div className="todos">
                {
                    todos.map(todo=>{
                    if (filter === 0){
                        return   <TodoItem
                            completed={todo.completed}
                            title={todo.title}
                            onCompleted={() => changedCompleted(todo.id)}
                            deleteTodo={() => deleteTodo(todo.id)}
                        />
                    }else  if (filter === 1 && todo.completed){
                        return   <TodoItem
                            completed={todo.completed}
                            title={todo.title}
                            onCompleted={() => changedCompleted(todo.id)}
                            deleteTodo={() => deleteTodo(todo.id)}
                        />
                    }else if (filter === 2 && !todo.completed){
                        return  <TodoItem
                            completed={todo.completed}
                            title={todo.title}
                            onCompleted={() => changedCompleted(todo.id)}
                            deleteTodo={() => deleteTodo(todo.id)}
                        />
                    }
                })
                }
            </div>
            <div className="filter">
                <span onClick={() => setFilter(0)} className={filter === 0 && 'active'}>All</span>
                <span onClick={() => setFilter(1)} className={filter === 1 && 'active'}>Completed</span>
                <span onClick={() => setFilter(2)} className={filter === 2 && 'active'}>Uncompleted</span>
            </div>
        </div>
  );
}
export default  App;