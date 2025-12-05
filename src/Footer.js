import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
    {length === 0 ? "You Have Completed All Your Works!": `${length} ${length===1 ? "Work":
     "Works"} pending.......`}</footer>
  )
}

export default Footer