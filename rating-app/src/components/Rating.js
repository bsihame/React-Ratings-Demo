import React, { Component } from 'react'
import Start from './Start'

import React, { Component } from 'react'

class Rating extends Component {
  static defaultProps = { max: 5 };
  constructor(props) {
    super(props);
    this.state = {
      dynamicValue: props.stars,
      value: 0
    }
    This_meanings = {
      0: "No Rating",
      1: "Terrible",
      2: "Mediocre",
      3: "Average",
      4: "Solid",
      5: "Fantastic",
    } 
    
  }

  render() {
    return (
      <div>
        <p>{this._meanings[value]}</p>
      </div>
    )
  }
}

export default Rating


export default Start