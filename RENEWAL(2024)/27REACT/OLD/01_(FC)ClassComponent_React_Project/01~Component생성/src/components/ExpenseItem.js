import React, { Component } from 'react'
import './ExpenseItem.css'
import {MdDelete,MdEdit} from "react-icons/md"

export class ExpenseItem extends Component {
  render() {
    return (
        <li className='item'>
         <div className='info'></div>
            <span className='expense'>학원등록</span>
            <span className='amount'>원</span>
         <div>
            <button className='edit-btn'><MdEdit /></button>
            <button className='clear-btn'><MdDelete /> </button>
         </div>

        </li>
    )
  }
}

export default ExpenseItem