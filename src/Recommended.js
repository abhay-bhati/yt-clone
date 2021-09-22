import React from 'react';
import './Recommended.css';
import VideoCard from './VideoCard';

function Recommended() {
    return (
        <div className='recommended'>
            <div className='recommended__videos'>
                <VideoCard thumbnail='https://i1.wp.com/viewsopt.com/wp-content/uploads/2019/01/Youtube-Thumbnail-Featured-Image-1.jpg?resize=650%2C317&ssl=1'
                    avatar='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    title='How to make youtube thumbnail' channel='AbhayB' views='2.3M' timestamp='3 years ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/iLKkxalXwm0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnjSCyCeQBAUc0qZ4TpFeg3HqiUQ'
                    avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEXVdGPz6hZZcurUgKooJbOU9Kb24D505K2Q&usqp=CAU'
                    title='Metallica - "Seek and Destroy"' channel='Howard Stern Show' views='3.5M' timestamp='10 weeks ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/nD5_6K8uVJE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdxWOMwrsz12M7LQWE-udOlCEjGA'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLQoRE2jGzztgXOB197Y86ECDQG3zcScz-tmc32igg=s68-c-k-c0x00ffffff-no-rj'
                    title='where is my mind? - pixies cover' channel='Alicia Widar' views='2M' timestamp='13 days ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/SmqbYt7gua4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcI_zratyOtKzC4cuSgRlETbjO1Q'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLToM-AZM8GU3dWAfV15-F3p9Raov1h5sHZsRNTtlg=s68-c-k-c0x00ffffff-no-rj'
                    title='Post Malone plays the guitar in his tour van' channel='Official MikeLo' views='220K' timestamp='3 years ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/5WyYNpo2B1c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCw6a6XtMyXuWWbRfb6Kc2euAiH-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLRPwZN0Gm1PRLUR09_6ZJQ88i8rCZaAR5XlfHKpTQ=s68-c-k-c0x00ffffff-no-rj'
                    title='Hamilton Battles Verstappen | 2018 US GrandPrix' channel='FORMULA 1' views='1.5M' timestamp='2 years ago' />
                 <VideoCard thumbnail='https://i.ytimg.com/vi/tjaYM71dye8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrd1e6SrAED7tAJaawribk3O-hhQ'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLSS64Yu4r5x3vGj2rvc3MSib10E82An2WfQrVqY=s68-c-k-c0x00ffffff-no-rj'
                    title='PUDDLE OF MUDD - Blurry' channel='MixedUpEverything' views='87K' timestamp='2 weeks ago' />
                 <VideoCard thumbnail='https://i.ytimg.com/vi/gU6XG25eigk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwo0PCq93tFI-vAAo_-XKMMsUb-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLSh9I1U6ByRS5hVHzSzte3o-e9YEX1UF2wBCgCI=s88-c-k-c0x00ffffff-no-rj'
                    title='Corey Taylor - "Holier Than Thou" from The Metallica Blacklist' channel='Corey Taylor' views='384K' timestamp='1 week ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/xAN1ThhTWsE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLHojDrt8IAbA0_XohFRgjZ7zg4g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLQgL1jBVAGEEGwBzmLV38AWj0_yrdPw0vDxdpce0A=s68-c-k-c0x00ffffff-no-rj'
                    title='You Season 3 | Official Trailer | Netflix' channel='Netflix' views='4.6M' timestamp='2 days ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'
                    title="Let's Learn Javascript from Scratch" channel='Clever Programmer' views='193K' timestamp='1 year ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/gU6XG25eigk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwo0PCq93tFI-vAAo_-XKMMsUb-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'
                    title='Corey Taylor - "Holier Than Thou" from The Metallica Blacklist' channel='Corey Taylor' views='384K' timestamp='1 week ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/gU6XG25eigk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwo0PCq93tFI-vAAo_-XKMMsUb-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLSh9I1U6ByRS5hVHzSzte3o-e9YEX1UF2wBCgCI=s88-c-k-c0x00ffffff-no-rj'
                    title='Corey Taylor - "Holier Than Thou" from The Metallica Blacklist' channel='Corey Taylor' views='384K' timestamp='1 week ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/gU6XG25eigk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwo0PCq93tFI-vAAo_-XKMMsUb-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLSh9I1U6ByRS5hVHzSzte3o-e9YEX1UF2wBCgCI=s88-c-k-c0x00ffffff-no-rj'
                    title='Corey Taylor - "Holier Than Thou" from The Metallica Blacklist' channel='Corey Taylor' views='384K' timestamp='1 week ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/gU6XG25eigk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwo0PCq93tFI-vAAo_-XKMMsUb-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLSh9I1U6ByRS5hVHzSzte3o-e9YEX1UF2wBCgCI=s88-c-k-c0x00ffffff-no-rj'
                    title='Corey Taylor - "Holier Than Thou" from The Metallica Blacklist' channel='Corey Taylor' views='384K' timestamp='1 week ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/gU6XG25eigk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwo0PCq93tFI-vAAo_-XKMMsUb-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLSh9I1U6ByRS5hVHzSzte3o-e9YEX1UF2wBCgCI=s88-c-k-c0x00ffffff-no-rj'
                    title='Corey Taylor - "Holier Than Thou" from The Metallica Blacklist' channel='Corey Taylor' views='384K' timestamp='1 week ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/gU6XG25eigk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwo0PCq93tFI-vAAo_-XKMMsUb-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLSh9I1U6ByRS5hVHzSzte3o-e9YEX1UF2wBCgCI=s88-c-k-c0x00ffffff-no-rj'
                    title='Corey Taylor - "Holier Than Thou" from The Metallica Blacklist' channel='Corey Taylor' views='384K' timestamp='1 week ago' />
                <VideoCard thumbnail='https://i.ytimg.com/vi/gU6XG25eigk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwo0PCq93tFI-vAAo_-XKMMsUb-g'
                    avatar='https://yt3.ggpht.com/ytc/AKedOLSh9I1U6ByRS5hVHzSzte3o-e9YEX1UF2wBCgCI=s88-c-k-c0x00ffffff-no-rj'
                    title='Corey Taylor - "Holier Than Thou" from The Metallica Blacklist' channel='Corey Taylor' views='384K' timestamp='1 week ago' />
            </div>
        </div>

    )
}

export default Recommended
