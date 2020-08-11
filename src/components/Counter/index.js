import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  countPlus() {
      this.setState((prevState,props) =>{
             return {
              count: prevState.count++,
                    }
          }

      );
  }
  render() {
    return (
      <div className="Container">
        <button className="buttonCount" onClick={this.countPlus.bind(this)}>{this.props.label}</button>
        <h1 className="count">{this.state.count}</h1>
      </div>
    );
  }
}
export default Counter;
