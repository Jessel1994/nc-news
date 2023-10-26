import { useState } from 'react'
import Header from './Components/Head/Header'
import AllArticles from './Components/Head/AllArticles'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <AllArticles />
    </main>
   
    
  )
}



export default App
