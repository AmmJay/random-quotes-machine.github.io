import React from 'react'

function Button({idname, text, onclick}) {
  return (
    <button onClick={onclick} id={idname}>
      {text}
    </button>
  )
}

export default Button;
