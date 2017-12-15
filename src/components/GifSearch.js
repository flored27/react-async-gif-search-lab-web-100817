import React from 'react'

class GifSearch extends React.Component {
  constructor(){
    super();

    this.state = {
      value : ''
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render () {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          <input type="submit" value="Find me a gif pwease!"></input>
        </form>
      </div>
    )
  }
}

export default GifSearch;
