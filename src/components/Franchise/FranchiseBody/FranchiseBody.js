import React from "react"
import { NavLink } from "react-router-dom"
import "./_FranchiseBody.scss"
import LinkRegister from "../LinkRegister/LinkRegister"
import NewsFranchise from "../News/NewsFranchise"
import SloganFranchise from "../SloganFranchise/SloganFranchise";

const FranchiseBody = () => {
  return (
    <div className="container">
      <article className="article">
        <NavLink to="/">
          <h1 className="title-detail">HỢP TÁC KINH DOANH BƠ GƠ VIỆT</h1>
        </NavLink>
        <SloganFranchise/>
        <LinkRegister />
        <NewsFranchise />
      </article>
    </div>
  )
}

export default FranchiseBody
