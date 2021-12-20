import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'

function Feed() {
    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>Homepage</h2>         
            </div>
        <TweetBox />
            


        </div>
    )
}

export default Feed
