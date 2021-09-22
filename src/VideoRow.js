import './VideoRow.css';
import Avatar from '@material-ui/core/Avatar';

import React from 'react'

function VideoRow({image, title, views, timestamp, image2, channel, desc}) {
    return (
        <div className='videoRow'>
            <div className = 'videoRow__thumbnail'>
                <img src={image} alt='Thumbnail Image' />
            </div>
            <div className = 'videoRow__info'>
                <h3>{title}</h3>
                <p>{views} views . {timestamp}</p>
                <div>
                    <Avatar className = 'videoRow__info__avatar' src={image2} alt='Channel Image' />
                    <p>{channel}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default VideoRow
