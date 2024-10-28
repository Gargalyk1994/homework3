// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и 
// Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import React, { useState } from'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Card, Typography } from '@mui/material';

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState(0);
    const [farenheit, setFarenheit] = useState(0);
    
    const handleCelsiusChange = (e) => {
        e.preventDefault();
        setCelsius(e.target.value);
        setFarenheit((e.target.value * 9 / 5) + 32);
    };
    
    const handleFarenheitChange = (e) => {
        e.preventDefault();
        setFarenheit(e.target.value);
        setCelsius((e.target.value - 32) * 5 / 9);
    };
    
    TemperatureConverter.propTypes ={
        celsius: PropTypes.number.isRequired,
        farenheit: PropTypes.number.isRequired,
    }
    return ( 
        <>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField onChange={handleCelsiusChange} fullWidth value={celsius} label="Введите температуру в Цельсиях" id="fullWidth" />
                <TextField onChange={handleFarenheitChange} fullWidth value={farenheit} label="Температура по Фаренгейту"/>
                <Button onClick={(e) => setFarenheit(e.target.value)} variant="contained" color="success">Celsius</Button>
                <Button onClick={(e) => setCelsius(e.target.value)} variant="contained" color="success">Farenheit</Button>
                <Card sx={{ minWidth: 275 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h5" component="h2">{celsius} C</Typography>
                        <Typography variant="h5" component="h2">{farenheit} F</Typography>
                    </Box>
                </Card>
            </Box>
        </>
    )    
};
