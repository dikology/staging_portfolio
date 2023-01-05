import React from 'react'

import Navbar from '../components/Navbar'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Navbar/>
     <main>{children}</main> 
     
    </Container>
  )
}