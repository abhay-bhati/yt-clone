import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <SidebarRow title='Home' Icon = {HomeIcon} />
            <SidebarRow title='Trending' Icon = {WhatshotIcon} />
            <SidebarRow title='Explore' Icon = {ExploreOutlinedIcon} />
            <hr className = 'sidebar__linebreak' />
            <SidebarRow title='Library' Icon = {VideoLibraryOutlinedIcon} />
            <SidebarRow title='History' Icon = {HistoryOutlinedIcon} />
            <SidebarRow title='Your Videos' Icon = {OndemandVideoIcon} />
            <SidebarRow title='Liked Videos' Icon = {ThumbUpOutlinedIcon}  />
            <SidebarRow title='Watch Later' Icon = {WatchLaterOutlinedIcon} />
            <hr className = 'sidebar__linebreak' />
            <SidebarRow title='Settings' Icon = {SettingsOutlinedIcon} />
            <SidebarRow title='Help' Icon = {HelpOutlineOutlinedIcon} />
            <SidebarRow title='Send Feedback' Icon = {FeedbackOutlinedIcon} />
        </div>
    )
}

export default Sidebar
