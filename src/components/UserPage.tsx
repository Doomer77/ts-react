import React, {FC, useEffect, useState} from "react";
import {IUser} from "../types/types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import {useHistory} from "react-router-dom";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useHistory();
    useEffect(() => {
        fetchUsers();

    }, [])

    //Функция для получения данных с сервера
    async function fetchUsers () {
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        }catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => history.push('/users/' + user.id)} user={user} key={user.id}/>}/>
        </div>
    )
}

export default UserPage;