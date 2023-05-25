import React from 'react'

const Test = () => {

    return (
        <div>
           


            <Test2>
                <h2>2</h2>

            </Test2>
        </div>
    )
}

const Test2 = ({ children }) => {
    return (
        <div>
            <h1>hola</h1>
            {children}
        </div>
    )
}

export default Test