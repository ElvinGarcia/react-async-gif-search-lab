import React from "react"
import { Component } from "react"
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'




class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };

  };



  async gifQuery(queryTerm) {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${queryTerm}&api_key=dc6zaTOxFJmzC&rating=g`);
    const jsonResp = await resp.json();
    const images = jsonResp.data.slice(0, 3);
    this.setState({ images });

     }

     componentDidMount() {
       this.gifQuery();
    }

    render() {
      return (
        <React.Fragment>
          <GifSearch gifQuery={this.gifQuery.bind(this) }/>
          {this.state ? <GifList images={this.state.images }/> : null }
          </React.Fragment>
      );

  }
}
 export default GifListContainer