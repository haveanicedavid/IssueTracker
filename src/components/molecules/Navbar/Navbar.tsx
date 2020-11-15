import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CosmosIcon } from '../../../assets/cosmos-icon.svg'
import { Typography } from '@material-ui/core'
import './Navbar.scss'

export const Navbar: React.FC = () => (
  <div className="Navbar">
    <Link to="/">
      <CosmosIcon className="Navbar-logo" />
    </Link>
    <Typography variant="h4">Issue Tracker</Typography>
  </div>
)
