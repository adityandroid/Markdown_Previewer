import React from "react"

class Previewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }

  handleInput = event => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <textarea
          id="editor"
          onChange={this.handleInput}
          value={this.state.input}
        />
        <div
          dangerouslySetInnerHTML={{ __html: this.state.input }}
          id="preview"
        />
      </div>
    )
  }
}

export default Previewer
