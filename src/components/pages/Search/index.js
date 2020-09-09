import React from "react"

class Search extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the search page</h1>
                <input type="text" onChange={this.handleChange} />
            </div>
        )
    }
}

export default Search