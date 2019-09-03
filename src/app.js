import React from "react"

class Previewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //input state variable holds the value for controlled input
      input: ""
    }
  }

  handleInput = event => {
    //function to handle controlled input
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div id="container">
        <textarea
          id="editor"
          onChange={this.handleInput}
          value={this.state.input}
        />
        <div id="vl" />
        <div //this is how you set the inner HTML of your component
          dangerouslySetInnerHTML={{ __html: this.state.input }}
          id="preview"
        />
      </div>
    )
  }
}

export default Previewer
