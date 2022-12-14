import React, {FC, useEffect, useState} from "react";
import {ITodo} from "../types/types";
import axios from "axios";
import TodoItem from "./TodoItem";
import List from "./List";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);


    useEffect(() => {
        fetchTodos();
    }, [])

    //Функция для получения данных с сервера

    async function fetchTodos () {
        try{
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data)
        }catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    )
}

export default TodosPage;