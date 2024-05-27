import React from 'react'
import Home from './Home'
import "./NewHome.css"
import SideNav from './SideNav'

export default function NewHome() {
    return (
        <>
            <div className='pc'
                style={{
                    display: "flex",
                    flexGrow: 1,
                    position: "relative",
                    margin: 0,
                    // height: "85vh",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        maxWidth: "17%",
                        flexShrink: 0,
                        textAlign: "left",

                    }}
                >
                    <SideNav />
                </div>

                <div style={{ flexGrow: 1, overflowY: "auto", marginLeft: '230px', marginRight: '20px' }}>
                    <Home></Home>
                </div>
            </div>


            <div className='mobile'>
                <Home></Home>
            </div>
        </>

    )
}
