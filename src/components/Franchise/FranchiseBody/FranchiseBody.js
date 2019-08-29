import React from "react"
import { NavLink } from "react-router-dom"
import "./_FranchiseBody.scss"
import LinkRegister from "../LinkRegister/LinkRegister"
import NewsFranchise from "../News/NewsFranchise"
import SloganFranchise from "../SloganFranchise/SloganFranchise";
import TableFranchise from "../TableFranchise/TableFranchise";
import ImgFranchise from "../ImgFranchise/ImgFranchise";

const FranchiseBody = () => {
  return (
    <div className="container">
      <article className="article">
        <NavLink to="/">
          <h1 className="title-detail">HỢP TÁC KINH DOANH BƠ GƠ VIỆT</h1>
          <h2>KHÔNG MỚI ... NHƯNG RẤT MỚI ... </h2>
        </NavLink>
        <ImgFranchise/>
        <TableFranchise/>
        <SloganFranchise/>
        <LinkRegister />
        <NewsFranchise />
      </article>
    </div>
  )
}

export default FranchiseBody
