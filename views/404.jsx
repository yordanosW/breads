const React = require('react')
const Default = require('./layouts/default')

function errorNotfound() {
    return (
        <Default>
            <h2>404 Error Snap!</h2>
            <p>This means the bread you are looking for is not available.Sorry for the inconvenience.</p>
            <img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="404 error" />
            <a href={`/breads`}><button>Home</button></a>
        </Default>
    )
}

module.exports = errorNotfound