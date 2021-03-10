import React from 'react'


const Color = (WrappedComponent) =>{
    const colour =['red','pink','orange','blue','green']
    const randColour= colour[Math.floor(Math.random()*5)]
    const className = randColour + '-text'

    return (props) =>{

        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Color