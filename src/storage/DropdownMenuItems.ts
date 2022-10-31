import {nanoid} from "nanoid";

import TodoList from "../components/UI/Header/assets/img/icon-todo.svg";
import Calendar from "../components/UI/Header/assets/img/icon-calendar.svg";
import Reminders from "../components/UI/Header/assets/img/icon-reminders.svg";
import Planning from "../components/UI/Header/assets/img/icon-planning.svg";

export const features = [
    {id: nanoid(), title: "Todo List", icon: TodoList},
    {id: nanoid(), title: "Calendar", icon: Calendar},
    {id: nanoid(), title: "Reminders", icon: Reminders},
    {id: nanoid(), title: "Planning", icon: Planning},
];
export const company = [
    {id: nanoid(), title: "History"},
    {id: nanoid(), title: "Our Team"},
    {id: nanoid(), title: "Blog"},
];