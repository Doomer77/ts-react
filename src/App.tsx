import React from 'react';
// import Card, {CardVariant} from "./components/Card";
// import EventsExample from "./components/EventsExample";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

function App() {

  return (
    // <div>
    //   <EventsExample />
    //   <Card
    //         // onClick={(num) => console.log('click', num)}
    //         variant={CardVariant.outlined} width='200px' height='200px'>
    //       <button>Button</button>
    //   </Card>
    // </div>
    <BrowserRouter>
      <div>
          <div>
              <NavLink to='/users'>Пользователи</NavLink>
              <NavLink to='/todos'>Список дел</NavLink>
          </div>
        <Route path={'/users'} exact>
            <UserPage />
        </Route>
          <Route path={'/todos'} exact>
              <TodosPage />
          </Route>
          <Route path={'/users/:id'} exact>
              <UserItemPage />
          </Route>
          <Route path={'/todos/:id'} exact>
              <TodoItemPage />
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
