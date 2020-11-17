import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="container">
            <h1>Web Animations</h1>
            <div className="catg">
                <h2>Using React</h2>
                <Link to="example01">Example 01</Link>
                <Link to="example02">Example 02</Link>
                <Link to="example03">Example 03</Link>
            </div>
            <div className="catg">
                <h2>Using HTML</h2>
                <a href="./using-js/index.html">Example01</a>
            </div>
        </div>
    )
}
