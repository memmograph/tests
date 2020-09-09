import React from "react"
import API from "../../../Utils/Api"

class Discover extends React.Component {
    state = {
        image: "",
        match: 0,
        like: false
    }


    componentDidMount = () => {
        this.callNewDog()
    }


    callNewDog = () => {
        API.random().then(response => {
            let dogImg = response.data.message
            this.setState({
                image: dogImg
            })
        })
    }



    handleClick = (choice) => {
        if (choice === "like") {

            let randomnum = Math.floor(Math.random() * 5)
            console.log(randomnum)
            if (randomnum === 1) {
                this.setState({
                    like: true,
                    match: this.state.match + 1
                })
            }
            else if (randomnum !== 1) {
                this.setState({
                    like: false,
                })
            }
            this.callNewDog()


        }
        else {
            this.callNewDog()
        }
    }



    render() {
        return (
            <div>
                <h1>This is the Discover page</h1>

                <img src={this.state.image} />
                <div>
                    <button onClick={() => this.handleClick("like")}>thumb up</button>
                    <button onClick={() => this.handleClick("dislike")}>thumb down</button>
                </div>
                {this.state.like ? <h1>you found a match!</h1> : null}
                <h3>{this.state.match}</h3>
            </div >
        )
    }
}

export default Discover