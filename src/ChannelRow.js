import './ChannelRow.css';
import { Avatar } from '@material-ui/core';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

import React from 'react'

function ChannelRow({ image, alt, channel, subs, noOfVideos, desc }) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow__avatar' src={image} alt={alt} />
            <div className='channelRow__channelInfo'>
                <div className = 'channelRow__title'>
                    <h2>{channel} </h2>
                    <CheckCircleTwoToneIcon className = 'channelRow__title__avatar'/>
                </div>
                <p className='channelRow__desc'>{subs} subscribers . {noOfVideos} videos</p>
                <p className='channelRow__desc'>{desc}</p>
            </div>
        </div>
    )
}

export default ChannelRow
