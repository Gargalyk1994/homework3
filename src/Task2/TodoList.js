// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. 
// Внутри каждого элемента списка разместите текст задачи и IconButton 
// с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from "react";

export default function Todolist() {
    // Массив для хранения списка дел
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState([]);
    
    //Обработчик события изменения текста в текстовом поле ввода
    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    };
    
    // Обработчик события клика по Enter "Добавить дело"
    const handleAddTodo = (e) => {
        // Добавление новой задачи в список только если текст ввода не пустой
        // и существует хотя бы одна задача в списке
        if (e.key === 'Enter' && inputValue) {
            // // Отмена поведения по умолчанию при отправке формы
            e.preventDefault();
            const newTodo = {
                id: Math.random().toString(36).substr(2, 9),
                text: inputValue,
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };
    
    // Обработчик события клика по кнопке "Удалить все дела"
    const handleDeleteAllTodos = () => {
        // Очистить список дел
        setTodos([]);
    };
    
    // Обработчик события клика по кнопке "Удалить"
    const handleDeleteTodo = (currentId) => {
        const updatedTodos = todos.filter((todo) => currentId!== todo.id);
        setTodos(updatedTodos);
    };
    
    // Отображение компонента Todolist с добавленными полями ввода и списком дел
    // кнопкой удаления всех дела и одного или несколько дела по id
    return (
        <>
            <form onSubmit={handleAddTodo}>
                <TextField
                    label="Добавить дело"
                    value={inputValue}
                    onChange={handleChangeInput}
                    onKeyDown={handleAddTodo}
                />
            </form>
            <button onClick={handleDeleteAllTodos}>Удалить все дела</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </li>
                ))}
            </ul>
        </>
    );
};