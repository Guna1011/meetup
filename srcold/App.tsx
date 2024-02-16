import React from 'react';
import './App.css';
import Login from './component/login';
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
	<NextUIProvider>
    <Login />
	</NextUIProvider>
  );
}

export default App;