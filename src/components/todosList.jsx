import { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {

    const [todo, setTodo] = useState([]);

    const handleRequisition = async () => {
        await axios.get('http://localhost:3000/')
            .then(response => {
                console.log(todo, 'linha10');
                console.log(response.data, 'linha11');
                setTodo(response.data);
                console.log(todo, 'linha13');
            })
            .catch(error => console.log(error))
    };


    useEffect(() => {

        handleRequisition();

    }, [])


    return (
        <div>
            <ul>
                {todo.map((item, index) => <li key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </li>)}

            </ul>
        </div>
    )

};

export default TaskList;