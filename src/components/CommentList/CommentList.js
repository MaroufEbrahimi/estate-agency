import React from "react"

import "./CommentList.css"
const CommentList = (props) => {
  let day = new Date().getDate()
  let month = new Date().getMonth()
  let year = new Date().getFullYear()
  let date

  switch (month) {
    case 0:
      date = day + " Jan " + year
      break
    case 1:
      date = day + " Feb " + year
      break
    case 2:
      date = day + " Mar " + year
      break
    case 3:
      date = day + " Apr " + year
      break
    case 4:
      date = day + " May " + year
      break
    case 5:
      date = day + " Jun " + year
      break
    case 6:
      date = day + " Jul " + year
      break
    case 7:
      date = day + " Aug " + year
      break
    case 8:
      date = day + " Sep " + year
      break
    case 9:
      date = day + " Oct " + year
      break
    case 10:
      date = day + " Nov " + year
      break
    case 11:
      date = day + " Dec " + year
      break
  }

  return (
    <div className="comments">
      <ul>
        {props.products.map((item) => (
          <li key={item.id}>
            <img src={props.author1} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <i>{date}</i>
              <p>{item.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentList
