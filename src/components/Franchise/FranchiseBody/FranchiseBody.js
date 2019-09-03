import React from "react"
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
        
        <ImgFranchise/>
       
        <SloganFranchise/>
        <LinkRegister />
        <NewsFranchise />
      </article>
    </div>
  )
}

export default FranchiseBody
