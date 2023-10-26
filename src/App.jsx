import { useState } from 'react'
import Header from './Components/Head/Header'
import AllArticles from './Components/Head/AllArticles'
import ViewSingleArticle from './Components/ViewSingleArticle'
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import { useParams } from 'react-router-dom'




function App() {
  let {article_id} = useParams()
  const [count, setCount] = useState(0)

  return (
    
       <main>
      <Header />
      <Routes>
        <Route path ='/' element ={<AllArticles />}/>
        <Route path ='/articles/:article_id' element ={<ViewSingleArticle/>}/>
        
      </Routes>
      
    </main>
    
   
   
    
  )
}



export default App
