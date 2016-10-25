import React, { PropTypes } from 'react'

const Link = ({ active, children, setVisibilityFilter, type }) => {
  console.log("active", active)
  if (active === type) {
    return <span>{children}</span>
  }

  const handleClick = e => {
    e.preventDefault()
    console.log("type", type)
    setVisibilityFilter(type)
  }

  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

export default Link
