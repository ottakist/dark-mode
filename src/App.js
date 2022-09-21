import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [theme,setMode] = useState(()=>{
    let storagedTheme = localStorage.getItem('theme')
    return storagedTheme || 'light-mode'
  })
  useEffect(()=>{
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  },[theme])
 
  const toggleMode =()=>{
    setMode(theme === 'light-mode'?'dark-mode':'light-mode');
  }
  return (<main>
    <div className="nav-center">
      <h1>Darkmode</h1>
      <button className="btn" onClick={()=>toggleMode()}>toggle</button>
    </div>
    <section className="articles">
      {data.map((article)=>{
        return(
          <Article key={article.id} {...article}/>
        )
      })}
    </section>
  </main>)
}

export default App
