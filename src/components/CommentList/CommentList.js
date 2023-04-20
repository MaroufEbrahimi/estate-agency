import React from "react"

import "./CommentList.css"
const CommentList = (props) => {
  return (
    <div className="comments">
      <ul>
        {props.products.map((item) => (
          <li key={item.id}>
            <img src={props.author1} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <i>7 Apr 2023</i>
              <p>{item.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentList
//   onClick={props.onRemoveItem.bind(this, item.id)}
