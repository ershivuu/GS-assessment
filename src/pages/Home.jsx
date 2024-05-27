import React, { useState } from 'react';
import Sidenav from '../Sidenav';
import banner from "../Assets/Logos/banner.png";
import banner2 from "../Assets/Logos/banner2.png";
import Header from './Header/Header';
import playIcon from "../Assets/Logos/btn-play-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import object1 from "../Assets/Logos/object 1.png";
import object2 from "../Assets/Logos/card2.png";
import object3 from "../Assets/Logos/card3.png";
import object4 from "../Assets/Logos/card4.png";
import arrow1 from "../Assets/Logos/arrow1.png";
import livetableicon from "../Assets/Logos/livetableicon.png";
import popularicon from "../Assets/Logos/popularicon.png";
import sloticon from "../Assets/Logos/sloticon.png";
import jackpoticon from "../Assets/Logos/jackpoticon.png";
import "./Home.css";
import winner from "../Assets/Logos/winner1.png"
import winner2 from "../Assets/Logos/winner2.png"
import winner3 from "../Assets/Logos/winner3.png"
import winner4 from "../Assets/Logos/winner4.png"
import winner5 from "../Assets/Logos/winner5.png"
import winner6 from "../Assets/Logos/winner6.png"

import game1 from "../Assets/Logos/game1.png"
import menubox from "../Assets/Logos/menubox.png"
import game2 from "../Assets/Logos/game2.png"
import game3 from "../Assets/Logos/game3.png"
import game4 from "../Assets/Logos/game4.png"
import game5 from "../Assets/Logos/game5.png"
import game6 from "../Assets/Logos/game6.png"
import game7 from "../Assets/Logos/game7.png"
import game8 from "../Assets/Logos/game8.png"
import icon1 from "../Assets/Logos/icon1.png"
import icon2 from "../Assets/Logos/icon2.png"
import icon3 from "../Assets/Logos/icon3.png"
import icon4 from "../Assets/Logos/icon4.png"
import icon5 from "../Assets/Logos/icon5.png"
import icon6 from "../Assets/Logos/icon6.png"
import live1 from "../Assets/Logos/live1.png"
import live2 from "../Assets/Logos/live2.png"
import live3 from "../Assets/Logos/live3.png"
import live4 from "../Assets/Logos/live4.png"
import live5 from "../Assets/Logos/live5.png"
import live6 from "../Assets/Logos/live6.png"
import live7 from "../Assets/Logos/live7.png"
import live8 from "../Assets/Logos/live8.png"
import slot1 from "../Assets/Logos/slot1.png"
import slot2 from "../Assets/Logos/slot2.png"
import slot3 from "../Assets/Logos/slot3.png"
import slot4 from "../Assets/Logos/slot4.png"
import slot5 from "../Assets/Logos/slot5.png"
import slot6 from "../Assets/Logos/slot6.png"
import slot7 from "../Assets/Logos/slot7.png"
import slot8 from "../Assets/Logos/slot8.png"
import jackpot1 from "../Assets/Logos/jackpot1.png"
import jackpot2 from "../Assets/Logos/jackpot2.png"
import jackpot3 from "../Assets/Logos/jackpot3.png"
import jackpot4 from "../Assets/Logos/jackpot4.png"
import jackpot5 from "../Assets/Logos/jackpot5.png"
import jackpot6 from "../Assets/Logos/jackpot6.png"
import jackpot7 from "../Assets/Logos/jackpot7.png"
import jackpot8 from "../Assets/Logos/jackpot8.png"

import winasset from "../Assets/Logos/Win.png"
import WinnerSlider from './WinnerSlider';
import PopularGames from './PopularGames';
import TextField from '@mui/material/TextField';
import LiveTable from '../../src/pages/LiveTable'

import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import Slot from './Slot';
import Jackpot from './Jackpot';
export default function Home() {
    const [isJoiningHovered, setIsJoiningHovered] = useState(false);
    const [isReferHovered, setIsReferHovered] = useState(false);
    const [isDailyHovered, setIsDailyHovered] = useState(false);
    const [isBonusHovered, setIsBonusHovered] = useState(false);



    const StyledTextField = styled(TextField)({
        '& .MuiInputBase-input::placeholder': {
            color: '#636366',
            opacity: 1, 
        },
        '& .MuiOutlinedInput-root': {
            color: '#636366',
        },
    });


    const handleMouseEnter = (setHoverState) => {
        setHoverState(true);
    };

    const handleMouseLeave = (setHoverState) => {
        setHoverState(false);
    };

    const containerStyle = (isHovered) => ({
        position: 'relative',
        boxShadow: isHovered
            ? '-3px -3px 2px rgba(255, 217, 88, 0.4), 3px 3px 2px rgba(255, 150, 78, 0.4)'
            : 'none',
        transition: 'box-shadow 0.3s ease-in-out',
    });

    const cardStyle = (isHovered) => ({
        position: 'absolute',
        right: '17px',
        top: '50%',
        transform: isHovered ? 'translateY(-50%) rotate(5deg)' : 'translateY(-50%) rotate(0)',
        boxShadow: isHovered ? '3px -3px 2px rgba(255, 217, 88, 0.4), -3px 3px 2px rgba(255, 150, 78, 0.4)' : '2px 2px 5px #dbdbdb',

        transition: 'transform 0.3s ease, box-shadow 0.3s ease-in',
        backgroundColor: '#121f47',
        padding: '65px',
    });

    const buttonStyle = (isHovered) => ({
        width: '108px',
        height: '32px',
        fontSize: '13px',
        fontWeight: '700',
        color:isHovered? '#fff':'#3f3f3f',        
        borderRadius: '29.45px',
        backgroundImage: isHovered ? 'linear-gradient(135deg, #fe964d, #ffbe56 12.5%, #fe964d 12.5%, #ffbe56 25%, #fe964d 25%, #ffbe56 37.5%, #fe964d 37.5%, #ffbe56 50%, #fe964d 50%, #ffbe56 62.5%, #fe964d 62.5%, #ffbe56 75%, #fe964d 75%, #ffbe56 87.5%, #fe964d 87.5%, #ffbe56 100%)' : 'linear-gradient(135deg, #fffffffa, #efedeaf5 12.5%, #fffffffa 12.5%, #efedeaf5 25%, #fffffffa 25%, #efedeaf5 37.5%, #fffffffa 37.5%, #efedeaf5 50%, #fffffffa 50%, #efedeaf5 62.5%, #fffffffa 62.5%, #efedeaf5 75%, #fffffffa 75%, #efedeaf5 87.5%, #fffffffa 87.5%, #efedeaf5 100%)',
        display: 'flex',
        animation: isHovered ? 'slidebg 3s linear infinite reverse' : 'none',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        transition: 'background-image 0.3s ease',
        whiteSpace: 'nowrap',
    });
    const winners = [
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner2,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner3,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner4,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner5,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner6,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner4,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner3,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner2,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner4,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner5,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner3,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner6,
            asset: winasset
        },
        {
            name: 'Lulian',
            price: '$2250.60',
            image: winner5,
            asset: winasset
        },
        // Add more winner objects as needed
    ];

    const games = [
        { image: game1 },
        { image: game2 },
        { image: game3 },
        { image: game4 },
        { image: game5 },
        { image: game6 },
        { image: game7 },
        { image: game4 },
        { image: game5 },
        { image: game8 },
        { image: game8 },
        { image: game1 },
        { image: game4 },
        { image: game5 },

    ]
    const Livetable = [
        { image: live1 },
        { image: live2 },
        { image: live3 },
        { image: live4 },
        { image: live5 },
        { image: live6 },
        { image: live7 },
        { image: live8 },
    ]
    const slot = [
        { image: slot1 },
        { image: slot2 },
        { image: slot3 },
        { image: slot4 },
        { image: slot5 },
        { image: slot6 },
        { image: slot7 },
        { image: slot8 },
    ]
    const jackpot = [
        { image: jackpot1 },
        { image: jackpot2 },
        { image: jackpot3 },
        { image: jackpot4 },
        { image: jackpot5 },
        { image: jackpot6 },
        { image: jackpot7 },
        { image: jackpot8 },
    ]
    return (
        <>
            {/* <Sidenav /> */}
            <Header />
            <div className="banner">
                {/* <button className="lines-button topBanner">
                    <FontAwesomeIcon icon={faPlay} />
                    <span>Play Tournaments </span>
                </button> */}
                <img src={banner} alt="banner" />
            </div>
            <div className="container">
                <div
                    className="joining-container"
                    style={containerStyle(isJoiningHovered)}
                    onMouseEnter={() => handleMouseEnter(setIsJoiningHovered)}
                    onMouseLeave={() => handleMouseLeave(setIsJoiningHovered)}
                >
                    <div>
                        <h2 className="join">JOINING</h2>
                        <p>Bonus</p>
                        <button className="lines-button" style={buttonStyle(isJoiningHovered)}>
                            <FontAwesomeIcon icon={faPlay} />
                            <span> Play Now </span>
                        </button>
                    </div>
                    <div className="img-object1">
                        <img src={object1} alt="obj1" />
                    </div>
                    <div className="card" style={cardStyle(isJoiningHovered)}></div>
                </div>

                <div
                    className="refer-container"
                    style={containerStyle(isReferHovered)}
                    onMouseEnter={() => handleMouseEnter(setIsReferHovered)}
                    onMouseLeave={() => handleMouseLeave(setIsReferHovered)}
                >
                    <h2>REFER</h2>
                    <p>Bonus</p>
                    <button className="lines-button" style={buttonStyle(isReferHovered)}>
                        <FontAwesomeIcon icon={faPlay} />
                        <span>Play Now </span>
                    </button>
                    <div className="img-object1">
                        <img src={object2} alt="obj1" />
                    </div>
                    <div className="card" style={cardStyle(isReferHovered)}></div>
                </div>

                <div
                    className="daily-container"
                    style={containerStyle(isDailyHovered)}
                    onMouseEnter={() => handleMouseEnter(setIsDailyHovered)}
                    onMouseLeave={() => handleMouseLeave(setIsDailyHovered)}
                >
                    <h2>DAILY</h2>
                    <p>Bonus</p>
                    <button className="lines-button" style={buttonStyle(isDailyHovered)}>
                        <FontAwesomeIcon icon={faPlay} />
                        <span> Play Now </span>
                    </button>
                    <div className="img-object1">
                        <img src={object3} alt="obj1" />
                    </div>
                    <div className="card" style={cardStyle(isDailyHovered)}></div>
                </div>

                <div
                    className="bonus-container"
                    style={containerStyle(isBonusHovered)}
                    onMouseEnter={() => handleMouseEnter(setIsBonusHovered)}
                    onMouseLeave={() => handleMouseLeave(setIsBonusHovered)}
                >
                    <h2>BONUS</h2>
                    <p>Bonus</p>
                    <button className="lines-button" style={buttonStyle(isBonusHovered)}>
                        <FontAwesomeIcon icon={faPlay} />
                        <span> Play Now </span>
                    </button>
                    <div className="img-object1">
                        <img src={object4} alt="obj1" />
                    </div>
                    <div className="card" style={cardStyle(isBonusHovered)}></div>
                </div>
            </div>



            {/* <div className='winner-cards'>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
                <div className='winner-card'>
                    <div className='winner-img'>
                        <img src={winner} alt="" />
                    </div>
                    <div className='winner-content'>
                        <p>Lulian</p>
                        <p className='winnerPrice'>$2250.60</p>
                    </div>
                    <div className='win-asset'> <img src={winasset} alt="" /></div>
                </div>
            </div> */}

            <div className='arrow-content'>
                <div className='arrow-img'>
                    <img src={arrow1} alt="" />
                </div>
                <div className='arrow-text'>
                    <p>Live Winners</p>
                </div>
                <div className='menubox'><img src={menubox} alt="" /></div>
            </div>

            <WinnerSlider winners={winners} />
            <div className='arrow-tabs'>

                <div className='arrow-content'>
                    <div className='arrow-img1'>
                        <img src={icon1} alt="" />
                    </div>
                    <div className='arrow-text1'>
                        <p>All Games</p>
                    </div>
                    <div className='arrow-img1'>
                        <img src={icon2} alt="" />
                    </div>
                    <div className='arrow-text1'>
                        <p>Slots</p>
                    </div>
                    <div className='arrow-img1'>
                        <img src={icon3} alt="" />
                    </div>
                    <div className='arrow-text1'>
                        <p>Poker</p>
                    </div>
                    <div className='arrow-img1'>
                        <img src={icon4} alt="" />
                    </div>
                    <div className='arrow-text1'>
                        <p>Roulette</p>
                    </div>
                    <div className='arrow-img1'>
                        <img src={icon5} alt="" />
                    </div>
                    <div className='arrow-text1'>
                        <p>Blackjack</p>
                    </div>
                    <div className='arrow-img1'>
                        <img src={icon6} alt="" />
                    </div>
                    <div className='arrow-text1'>
                        <p>Lottery</p>
                    </div>

                </div>

                <div className='search'>
                    <StyledTextField
                        id="outlined-basic"
                        placeholder="Search...."
                        variant="outlined"
                        size="small"
                        className="search-bar"
                        sx={{ marginRight: 1, background: 'black', width: '350px', borderRadius: '10px' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#636366' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </div>
            <div className='arrow-content'>
                <div className='arrow-img'>
                    <img src={popularicon} alt="" />
                </div>
                <div className='arrow-text'>
                    <p>Popular Games</p>
                </div>
                <div className='menubox'><img src={menubox} alt="" /></div>
            </div>

            <PopularGames winners={games} />


            <div className="banner1" style={{ marginTop: '-20px' }}>
                <h1 className='referText'>REFER A FRIEND</h1>
                <p className='referContent'>Spread the Joy of Gaming! Refer a Friend and Earn Rewards.
                    <br />
                    Multiply the Fun, Multiply the Wins. Start the Adventure,</p>
                <button className="lines-button banner-btn">
                    <span> Invite Now </span>
                </button>
                <img src={banner2} alt="banner" />
            </div>

         

            <div className='arrow-content'>
                <div className='icon-img'>
                    <img src={livetableicon} alt="" />
                </div>
                <div className='arrow-text'>
                    <p>Live Table Games</p>
                </div>
                <div className='menubox'><img src={menubox} alt="" /></div>
            </div>

            <LiveTable winners={Livetable} />

            <div className='arrow-content'>
                <div className='icon-img'>
                    <img src={sloticon} alt="" />
                </div>
                <div className='arrow-text'>
                    <p>Slot Games</p>
                </div>
                <div className='menubox'><img src={menubox} alt="" /></div>
            </div>

            <Slot winners={slot} />

            <div className='arrow-content'>
                <div className='jackpoticon-img'>
                    <img src={jackpoticon} alt="" />
                </div>
                <div className='arrow-text'>
                    <p>Jackpot Play</p>
                </div>
                <div className='menubox'><img src={menubox} alt="" /></div>
            </div>

            <Jackpot winners={jackpot} />
        </>
    );
}
