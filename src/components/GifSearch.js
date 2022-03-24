import React from 'react'



class GifSearch extends React.Component{
  constructor(props) {
    super();
    this.state = {
      query: null
    };
  };

  handleChange(event) {
    this.setState({query: `${event.target.value}`})
  }

  handleSubmit(event) {
    this.props.gifQuery(this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}  className='container-fluid'  >
          <input type="text" value={this.state.value} onChange={(event)=> this.handleChange(event)} className='container-fluid' placeholder="Type to search..." aria-label=".form-control" />
          <button type="submit" value="search" className='btn btn-primary'>Search</button>
        </form>
      </div>
    )
  }

};


export default GifSearch;