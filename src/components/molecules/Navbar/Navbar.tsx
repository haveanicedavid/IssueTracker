import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CosmosIcon } from '../../../assets/cosmos-icon.svg'
import { Typography } from '@material-ui/core'
import './Navbar.scss'

export const Navbar: React.FC = () => (
  <div className="Navbar">
    <Link to="/" className="Navbar-icon">
      <CosmosIcon className="Navbar-logo" />
    </Link>
    <Typography variant="h4">Issue Tracker</Typography>
    <div className="Navbar-right">
      <a
        href="https://github.com/haveanicedavid/IssueTracker"
        target="_blank"
        rel="noopener noreferrer"
        className="Navbar-gitLink"
      >
        <Typography variant="h6">View code</Typography>
      </a>
    </div>
  </div>
)
