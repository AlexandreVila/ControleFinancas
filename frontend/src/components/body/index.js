import React from 'react'
import './styles.css'
import Form from '../Form'
import Resume from '../Resume'
import Grid from '../Grid'

const Body = () => {
  return (
    <div className='container_body'>  
        <div className='container_section_1'>
            <Form />
            <Resume />
        </div>
        <div className='container_section_2'>
            <Grid />
        </div>
    </div>
  )
}

export default Body