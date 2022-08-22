import React from 'react'
import Navbar_Main from "../Navbar";
import Header from "../Header"
import HowDoesItWork from "../HowDoesItWork";
import UseApp from "../UseApp.js"
import HowToSendMoney from "../HowToSendMoney"
import SalesTeam from "../SalesTeam"
import Footer from "../Footer"

const Home = () => {
  return (
    <div>
      <Navbar_Main />
      <Header />
      <HowDoesItWork />
      <UseApp />
      <HowToSendMoney />
      <SalesTeam />
      <Footer />
    </div>
  )
}

export default Home