import React from 'react'
import Link from './Link'

// const FILTER_TITLES = {
//   [SHOW_ALL]: 'All',
//   [SHOW_ACTIVE]: 'Active',
//   [SHOW_COMPLETED]: 'Completed'
// }

const Footer = (props) => {

  const render = ["SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED"].map(filter => {
    return (
      <Link {...props} key={filter} type={filter}>
        {filter}
      </Link>
    )
  })

  return (
    <p>
      {render}
    </p>
  )

}
export default Footer
