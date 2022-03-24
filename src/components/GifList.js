import React from "react"
import { Component } from "react"


class GifList extends Component {
    render() {
    return (
        <ul>
          {this.props.images ? this.props.images.map((obj, i) => <li  key={i}><img src={obj.images.original.url} alt="gif" /></li>) : null}
        </ul>
    )
  }
}





export default GifList;