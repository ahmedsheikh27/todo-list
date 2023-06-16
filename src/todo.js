import React, { useState } from "react";
import './todo.css'
import Delete from './assets/delete.png'
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [div1, setDiv1] = useState([]);
    const [div2, setDiv2] = useState([])
    const [inputvalue, setInputvalue] = useState()

    const handleInputChange = (e) => {
        setInputvalue(e.target.value)
    };
    const handleAddTodo = () => {
        if (inputvalue !== '') {
            setTodos([...todos, inputvalue]);
            setInputvalue('')
        }
    }
    const handleMoveone = (todo,index) => {
        todos.splice(index, 1);
        setDiv1([...div1, todo])
    }
    const handleMovetwo = (todo,index) => {
        div1.splice(index, 1);
        setDiv2([...div2, todo])
    }
    const handleBackone = (todo,index) => {
        div2.splice(index, 1);
        setDiv1([...div1, todo])
    }
    const handleBacktwo = (todo,index) => {
        div1.splice(index, 1);
        setTodos([...todos, todo])
    }

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos)
    }


    const Div1Component = ({index,todos}) => {
        return (
        <>    
        <div key={index}
            className="todolist"
        >

            {todos}
            <div className="btns">
                <button
                    className="delbtn"
                    onClick={() => { handleDeleteTodo(index) }}>
                    <img src={Delete} alt="" />
                </button>

                <button className="nbtnr">
                    ◀ </button>
                <button className="nbtnr"
                onClick={()=>{handleMoveone(todos,index)}}
                >
                    ▶
                </button>

            </div>

        </div></>)
    }
    const Div2Component = ({index,todos}) => {
        return (
        <>    
        <div key={index}
            className="todolist"
        >

            {todos}
            <div className="btns">
                <button className="nbtnr"
                onClick={()=>{handleBacktwo(todos,index)}}>
                    ◀ </button>
                <button className="nbtnr"
                onClick={()=>{handleMovetwo(todos,index)}}
                >
                    ▶
                </button>

            </div>

        </div></>)
    }
    const Div3Component = ({index,todos}) => {
        return (
        <>    
        <div key={index}
            className="todolist"
        >

            {todos}
            <div className="btns">
                <button className="nbtnr"
                onClick={()=>{handleBackone(todos,index)}}>
                    ◀ </button>
                <button className="nbtnr"
                onClick={()=>{handleMovetwo(todos,index)}}
                >
                    ▶
                </button>

            </div>

        </div></>)
    }

    return (
        <>
            <div className="container">

                <div className="todoinput" >
                    <div>
                        <h1>
                            Todo List
                        </h1>
                    </div>
                    <input
                        type="text"
                        value={inputvalue}
                        onChange={handleInputChange}
                        placeholder="Enter Your work"
                        className="inputt"
                    />
                    <button
                        onClick={handleAddTodo}
                        className="btn"
                    >ADD</button>
                </div>
            </div>
            <div className="div123">

                <div className="div1 ">

                    {todos.map((todos, index) => (
                    <Div1Component index={index} todos={todos}/>
                    ))}

                </div>
                <div className="div1 2">
                {div1.map((div1, index) => (
                    <Div2Component index={index} todos={div1}/>
                    ))}
                
                </div>
                <div className="div1 3">
                {div2.map((div1, index) => (
                    <Div3Component index={index} todos={div1}/>
                    ))}
                </div>
            </div>
            <footer
                className="foot">
                <h3>Made By Muhammad Ahmed</h3>
            </footer>
        </>
    );

}
export default Todo;