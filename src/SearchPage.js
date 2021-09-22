import './SearchPage.css';
import React from 'react'
import ChannelRow from './ChannelRow';
import TuneTwoToneIcon from '@material-ui/icons/TuneTwoTone';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneTwoToneIcon className='searchPage__filter__icon' />
                <h4>FILTERS</h4>
            </div>
            <hr />
            <div className='searchPage__channelRow'>
                <ChannelRow image='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
                    alt='Channel Image' channel='Clever Programmer' subs='1.01M' noOfVideos='692' desc='You can find awesome programming lessons here.' />
            </div>
            <hr />
            <div className = 'searchPage__videoRows'>
                <VideoRow image='https://i.ytimg.com/vi/hggGvwA_tcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuuU5GchNwC08KOF8tbI2RIhRnSg'
                    title='Learn React Native from scratch.' views='459K' timestamp='2 years ago' image2='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
                    channel='Clever Programmer' desc='STOP doing this. It is so annoying.' />
                <VideoRow image='https://i.ytimg.com/vi/hggGvwA_tcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuuU5GchNwC08KOF8tbI2RIhRnSg'
                    title='Learn React Native from scratch.' views='459K' timestamp='2 years ago' image2='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
                    channel='Clever Programmer' desc='STOP doing this. It is so annoying.' />
                <VideoRow image='https://i.ytimg.com/vi/hggGvwA_tcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuuU5GchNwC08KOF8tbI2RIhRnSg'
                    title='Learn React Native from scratch.' views='459K' timestamp='2 years ago' image2='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
                    channel='Clever Programmer' desc='STOP doing this. It is so annoying.' />
                <VideoRow image='https://i.ytimg.com/vi/hggGvwA_tcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuuU5GchNwC08KOF8tbI2RIhRnSg'
                    title='Learn React Native from scratch.' views='459K' timestamp='2 years ago' image2='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
                    channel='Clever Programmer' desc='STOP doing this. It is so annoying.' />
            </div>
        </div>
    )
}

export default SearchPage
