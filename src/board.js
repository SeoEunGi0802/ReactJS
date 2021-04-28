import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data =[]
        }
    }


    clickInput() {
        console.log(this.textInput.current.value)
    }


    render(){
        return <div>
            <input type="text" ref={this.textInput}></input><div onClick={this.clickInput.bind(this)}>입력</div>
        </div>
    }
}

export default Board;