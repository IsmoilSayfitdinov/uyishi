import React from 'react'
import "./Sec.css"
 import ImgSec from "../../assets/img/piechart.jpg"
 import ImgTabl from "../../assets/img/Vector 5.png"
 import ImgLine from "../../assets/img/Vector 6.png"



function Sect() {
  return (
    <div className='SecTion'>
        <div className="sectionsMain">
            <div className="textSec">
                <h1 className='text_h1'>Boshqaruv</h1>
            </div>
            <div className="secBlock">
                <div className="blockText">
                    <p className='sec_block_text_p'>O’quvchilar oqimi</p>
                </div>
                <div className="img_sec">
                    <img src={ImgSec} alt="" />
                </div>
                <div className="NotWalk">
                    <div className="walkone">
                        <div className="red"></div>
                         <p className="textred">Kelmaganlar <span>66 ta</span></p>
                    </div>
                    <div className="walktwo">
                        <div className="puple"></div>
                         <p className="textred">Kelganlar <span>129 ta</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="secMoney">
             <div className="textMoney">
                <h2 className='text_mny-h2'>Oylik maosh va to’lovlar</h2>
             </div>
             <div className="redAndBlu">
                <div className="red_block">
                    <div className="reD"></div>
                    <div className="red_texttwo">Oylik maosh</div>
                </div>
                <div className="blue_block">
                    <div className="blue"></div>
                    <div className="blue_text">Oylik maosh</div>
                </div>
             </div>
             <div className="table">
                <div className="table1">
                   <p className='tablle_p'>250 </p>
                   <span className='border_p'></span>
                </div>
                <div className="table1">
                 <p className='tablle_p'>200 </p>
                 <span className='border_p'></span>
                </div>
                <div className="table1">
                 <p className='tablle_p'>150</p>
                 <span className='border_p'></span>
                </div>
                <div className="table1">
                 <p className='tablle_p'>100 </p>
                 <span className='border_p'></span>
                </div>
                <div className="table1">
                 <p className='tablle_p'>50</p> 
                 <span className='border_p'></span>
                </div>
             </div>
             <div className="red_line">
                 <img src={ImgTabl} alt="" />
                 <svg className='path2' xmlns="http://www.w3.org/2000/svg" width="563" height="249" viewBox="0 0 563 249" fill="none">
                 <path d="M76.4568 146.931H0V249H563V0.0396729L500.844 103.281C490.895 119.806 467.887 122.194 454.756 108.065L429.548 80.9405C416.968 67.4038 395.106 68.9291 384.527 84.0816L298.805 206.868C293.381 214.637 284.503 219.267 275.027 219.267H188.583C182.085 219.267 175.776 217.085 170.666 213.07L94.3733 153.127C89.264 149.113 82.9545 146.931 76.4568 146.931Z" fill="url(#paint0_linear_0_157)"/>
                 <defs>
                 <linearGradient id="paint0_linear_0_157" x1="281.5" y1="0.0396729" x2="281.5" y2="249" gradientUnits="userSpaceOnUse">
                 <stop stop-color="#FF4062" stop-opacity="0.37"/>
                  <stop offset="1" stop-color="#FF4062" stop-opacity="0"/>
                 </linearGradient>
                 </defs>
                 </svg>
             </div>
             <div className="blue_line">
                <img src={ImgLine} alt="" />
                <svg className='path' xmlns="http://www.w3.org/2000/svg" width="563" height="226" viewBox="0 0 563 226" fill="none">
                <path d="M68.2311 87.7413L9.18617 143.151C3.34466 148.633 0.0309448 156.287 0.0309448 164.298V225.429H563V195.545C563 186.355 558.643 177.708 551.257 172.239L506.241 138.907C494.754 130.401 478.782 131.534 468.61 141.577L438.035 171.762C423.996 185.622 400.515 181.723 391.709 164.069L318.043 16.3724C307.954 -3.85457 279.629 -5.27595 267.566 13.8395L198.709 122.954C189.18 138.054 168.4 141.039 155.007 129.232L107.253 87.1342C96.035 77.2447 79.1362 77.5076 68.2311 87.7413Z" fill="url(#paint0_linear_0_160)"/>
                 <defs>
                  <linearGradient id="paint0_linear_0_160" x1="281.515" y1="-29.7183" x2="281.515" y2="225.429" gradientUnits="userSpaceOnUse">
                 <stop stop-color="#0968C0" stop-opacity="0.21"/>
                 <stop offset="1" stop-color="#0968C0" stop-opacity="0"/>
                </linearGradient>
                </defs>
                </svg>
             </div>
             <div className="hafta">
                 <div className="weaks">
                     <p className='weak'>Dushanba</p>
                     <p className='weak'>Seshanba</p>
                     <p className='weak'>Chorshanba</p>
                     <p className='weak'>Payshaba</p>
                     <p className='weak'>Juma</p>
                     <p className='weak'>Shanba</p>
                 </div>
             </div>
        </div>
        <div className="teacherData">
            <div className="data_text">
                <p className='data_p'>O’qtuvchi ismi</p>
                <p className='data_p'>O’rtacha oylik maoshi</p>
                <p className='data_p'>Guruhlari soni</p>
                <p className='data_p'>O’quvchilari soni</p>
                <p className='data_p'>To’lov qilmaganlar soni</p>
            </div>
            <div className="dataBlock">
                <div className="dataDiv">
                   <p className='data_p2Blocka'>John Doe Lemoni</p>
                   <p className='data_p2Block'>12.000.000 so’m</p>
                   <p className='data_p2Block'>10 ta</p>
                   <p className='data_p2Block'>116 ta</p>
                   <p className='data_p2Block'>16 ta</p>
                </div>
                <div className="dataDiv">
                   <p className='data_p2Blocka'>Will Smith Alexdanre...</p>
                   <p className='data_p2Block'>4.000.000 so’m</p>
                   <p className='data_p2Block'>7 ta</p>
                   <p className='data_p2Block'>60 ta</p>
                   <p className='data_p2Block'>5 ta</p>
                </div>
                <div className="dataDiv">
                    <p className='data_p2Blocka'>Will Smith Alexdanre...</p>
                    <p className='data_p2Block'>4.000.000 so’m</p>
                    <p className='data_p2Block'>7 ta</p>
                    <p className='data_p2Block'>60 ta</p>
                    <p className='data_p2Block'>5 ta</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sect