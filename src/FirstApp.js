import React,{Component} from 'react'

class MyApp extends Component {

    render() {
        const {players} = this.props
        const players_info = players.map(pl=>{
            return(
                <div className='App' key={pl.id}>
                <h1>My Name is {pl.name}</h1>
                <h2>I am {pl.age} years old</h2>
              </div>
            )
        })
        return(
            <div> {players_info}</div>
        )
    }
}

export default MyApp