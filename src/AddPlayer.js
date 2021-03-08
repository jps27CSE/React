import React,{Component} from 'react'

class AddPlayer extends Component {

    state={
        name:null,
        age: null,
        belt: null,
    }

    onHandleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    onHandleSubmit =(e) =>{
        e.preventDefault()
        this.props.AddPlayers(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onHandleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' onChange={this.onHandleChange}/>
                    <label htmlFor='name'>Age:</label>
                    <input type='text' id='age' onChange={this.onHandleChange}/>
                    <label htmlFor='name'>Belt:</label>
                    <input type='text' id='belt' onChange={this.onHandleChange}/>
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default AddPlayer