import { useState } from 'react'
import Header from './Components/Head/Header'
import AllArticles from './Components/Head/AllArticles'
import ViewSingleArticle from './Components/ViewSingleArticle'
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import { useParams } from 'react-router-dom'




function App() {
  let {article_id} = useParams()
  const [user, setUser] = useState({
    "username": "grumpy19",
    "name": "Paul Grump",
    "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
    })

  return (
    
       <main>
      <Header user={user}/>
      <Routes>
        <Route path ='/' element ={<AllArticles />}/>
        <Route path ='/articles/:article_id' element ={<ViewSingleArticle user={user}/>}/>
        
      </Routes>
      
    </main>
    
   
   
    
  )
}



export default App
