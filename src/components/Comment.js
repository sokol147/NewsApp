import React from 'react'

export default function Comment({comment}){
  return(
    <p>
      {comment.text} <b>by {comment.user}</b>
    </p>
  )
}