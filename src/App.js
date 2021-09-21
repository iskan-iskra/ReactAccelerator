import React, { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './Style/AppVariables.scss';
import './Style/App.scss';

import AppRouter from './Router/AppRouter';

function App() {
  // специальная функция для оптимизации размера окна в мобильных браузерах!!!
  const [vh,setvh] = useState(window.innerHeight/100)
  window.addEventListener('resize', ()=>{
    setvh(window.innerHeight/100)
  })
  document.body.style.setProperty('--vh', vh +'px');

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
