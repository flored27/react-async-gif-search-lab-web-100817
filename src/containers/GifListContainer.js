import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    debugger;
    this.setState({
      value:event.target.value
    });
    console.log(event)
  }

  // handleChange = (event) => {
  //
  //   this.setState({value: event.target.value})
  // }
  render(){
    return(
      <div>
        <GifList />
        <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default GifListContainer
