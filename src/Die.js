import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
  render() {
    // const array = [
    //   { num: 'null' },
    //   { num: 'one' },
    //   { num: 'two' },
    //   { num: 'three' },
    //   { num: 'four' },
    //   { num: 'five' },
    //   { num: 'six' }
    // ];

    return (
      <div>
        <div>
          <i
            className={`die fas fa-7x fa-dice-${this.props.face} ${this.props
              .rolling && 'shaking'}`}
          />
        </div>
      </div>
    );
  }
}
