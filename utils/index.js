import React from 'react'

function sortDate(a, b) {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  
}

export default sortDate
