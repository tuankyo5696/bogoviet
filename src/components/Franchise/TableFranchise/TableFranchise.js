import React from "react"
import "./TableFranchise.scss"
import { dataTool } from "../../../data/dataCompany"
import logo from "../../../assets/images/logo.png"

const TableFranchise = () => {
  return (
    <>
      <div className="logoDiv">
        <img src={logo} alt="logo" />
      </div>
      <table className="tableFranchise">
        <tbody className="tableFranchise">
          <tr className="trTitleFranchise">
            <td className="thTitleFranchise" style={{width:'10%'}}>STT</td>
            <td className="thTitleFranchise">HẠNG MỤC</td>
            <td className="thTitleFranchise">ĐVT</td>
            <td className="thTitleFranchise" >SỐ LƯỢNG</td>
          </tr>
          {dataTool.map((block, index) => (
            <tr key={index}>
              <td>{block.id}</td>
              <td>{block.content}</td>
              <td>{block.unit}</td>
              <td>{block.amount}</td>
            </tr>
          ))}
        </tbody>
        <tbody className="tableFranchise table2 ">
          <tr>
            <td colSpan="2">TỔNG CHI PHÍ CỐ ĐỊNH CĂN BẢN</td>
            <td colSpan="2">18.000.000</td>
          </tr>
          <tr className="spaceFranchise">
            <td colSpan="4"></td>
           
          </tr>
          <tr>
            <td colSpan="2">CHI PHÍ ĐẦU TƯ NHƯỢNG QUYỀN</td>

            <td colSpan="2">18.000.000</td>
          </tr>
          <tr>
            <td colSpan="2">PHÍ NHƯỢNG QUYỀN (THU MỘT LẦN)</td>

            <td colSpan="2">10.000.000</td>
          </tr>
          <tr className="spaceFranchise">
            <td colSpan="4"> </td>
            
          </tr>
          <tr>
            <td colSpan="2">TỔNG PHÍ ĐẦU TƯ NHƯỢNG QUYỀN</td>
            <td colSpan="2">28.000.000</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TableFranchise
