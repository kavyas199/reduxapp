import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>COMMENTS</h1>
    <p>This is comment.</p>

    <Link to="comments" className="button">
      View comments
    </Link>
  </section>
)

export default DashboardPage