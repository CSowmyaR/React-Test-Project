// import { useState,useEffect } from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./UseDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./GlobalStyles";
import Toggle from "./Toggle";
import Blogs from './Blogs';

function App() {
const [theme, toggleTheme, mountedComponent] = useDarkMode();
const themeMode = theme === 'light' ? lightTheme : darkTheme;

if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
       <GlobalStyles/>
         <h1><i>Blogs</i></h1>
         <Toggle theme={theme} toggleTheme={toggleTheme} />
         <Blogs />
    </ThemeProvider>
    
  );
}

export default App;
