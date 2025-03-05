import React, { PureComponent } from 'react'

class Header extends PureComponent {

    render() {
        return (
            <div className='bg-red-500 text-lg'>
                <a href="/">Home</a>
                <a> | </a>
                <a href="/about">About</a>
            </div>
        )
    }
}

export default Header