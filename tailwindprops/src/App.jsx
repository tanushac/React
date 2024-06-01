import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardOne  from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className="bg-pink-400">
      Hello world!
    </h1>
    <CardOne username="Tanusha" btnText="click"/>
    <CardOne username="Cheeni" btnText="visit"/>
    </>
  )
}

export default App
