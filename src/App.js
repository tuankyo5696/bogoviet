import React from "react"
import { Switch } from "react-router-dom"
import Layout from "./hoc/Layout/Layout"
import HomePage from "./container/HomePage/Homepage"
import ProductPage from "./container/ProductPage/Productpage"
import Franchise from "./components/Franchise/Franchise"
import ContactPage from "./container/ContactPage/ContactPage";
import ScrollToTop from './components/Navigation/NavigationItems/ScrollToTop/ScrollToTop'

const app = props => {
  return (
    <Layout>
      <Switch>
        <ScrollToTop path="/" exact component={HomePage} />
        <ScrollToTop path="/product" component={ProductPage} />
        <ScrollToTop path="/franchise" component={Franchise} />
        <ScrollToTop path="/contact" component={ContactPage} />
      </Switch>
    </Layout>
  )
}

export default app
