import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-2'>
       <img style={{width:30}} src={loading} alt='loading' />
      </div>
    )
  }
}

export default loading