import React from 'react'
import Header from "./components/Header"
import Title from "./components/Title"
import Footer from "./components/Footer"
import Home from "./components/Home/Home"
import Store from "./components/Store/Store"
import About from "./components/About/About"

const App = () => {
  return (
    <div>
      <Header></Header>
      <Title></Title>
      {/* <Home></Home> */}
      <Store></Store>
      {/* <About></About> */}
      <Footer>  </Footer>
    </div>
  )
}

export default App