import React, { useState } from 'react';
import './App.css';
import InputElementsContainer from './components/InputElementsContainer'
import TemplatesContainer from './components/TemplatesContainer'
const App = () => {

  return (
        <div>
          <InputElementsContainer />
          <TemplatesContainer />
        </div>
    
  )
}

export default App;