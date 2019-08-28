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
      <div className="tableFranchise">
        <table className="tableFranchise">
          <tr>
            <th className="thTitleFranchise">STT</th>
            <th className="thTitleFranchise">HẠNG MỤC</th>
            <th className="thTitleFranchise">ĐVT</th>
            <th className="thTitleFranchise">SỐ LƯỢNG</th>
          </tr>
          {dataTool.map((block, index) => (
            <tr>
              <td>{block.id}</td>
              <td>{block.content}</td>
              <td>{block.unit}</td>
              <td>{block.amount}</td>
            </tr>
          ))}

          <tr>
            <td>TỔNG CHI PHÍ CỐ ĐỊNH CĂN BẢN</td>
           
            <td>18.000.000</td>
          </tr>
          <tr className="spaceFranchise">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>CHI PHÍ ĐẦU TƯ NHƯỢNG QUYỀN</td>
            <td></td>
            <td></td>
            <td>18.000.000</td>
          </tr>
          <tr>
            <td>PHÍ NHƯỢNG QUYỀN (THU MỘT LẦN)</td>
            <td></td>
            <td></td>
            <td>10.000.000</td>
          </tr>
          <tr className="spaceFranchise">
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>TỔNG PHÍ ĐẦU TƯ NHƯỢNG QUYỀN</td>
           
            
            <td>28.000.000</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default TableFranchise
