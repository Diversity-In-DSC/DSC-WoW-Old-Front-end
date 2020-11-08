import React, {useEffect} from 'react';
import {ReactComponent as DarkModeButtonIcon} from '../assets/darkMode.svg';

const DarkModeButton = () => {
    
    const toggleDarkMode = () => {
        const currentBackground = window.localStorage.getItem('darkMode');
        const { style } = document.body;
        const isDark = currentBackground === 'true';
        document.body.classList.toggle('dark');
        style.setProperty('--background-color', isDark ? '#fffffe' : '#16161a');
        style.setProperty('--text-color', isDark ? '#000000' : '#fefefe');
        style.setProperty('--heading-color', isDark ? '#000000' : '#fefefe');
        style.setProperty('--invert-filter', `invert(${isDark ? 0 : 100}%)`);
        window.localStorage.setItem('darkMode', !isDark);
    }
    
    useEffect(() => {
        const currentBackground = window.localStorage.getItem('darkMode');
        const isDark = currentBackground === 'true';
        console.log(currentBackground, isDark)
        if(isDark) {
            window.localStorage.setItem('darkMode', !isDark);
            toggleDarkMode();
       }
    }, []);
    
    return (
        <DarkModeButtonIcon onClick={toggleDarkMode} className='darkModeIcon' />
    )
}

export default DarkModeButton;