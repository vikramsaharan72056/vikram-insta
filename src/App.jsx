import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
        <Profile />
        <Card />
        
      </main>
      <Footer/>
    </div>
  )
}

export default App
