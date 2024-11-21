// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Players from './Components/Players';



function App() {
  return (
    <div className="App">
      <h1 className='heading'>TYPESCRIPT</h1>
      <h1 className='heading'>IPL T20 TEAM PLAYERS</h1>
        <div className='IPLT20Players'>

          {/* CSK IPL T20 TEAM */}
          <div className='playersDiv CSKColor'>
          <Players name="Ruturaj Gaikwad" team="Chennai Super Kings (CSK)" role="Batter" imageURL="./images/CSKImage.png"/>
          </div>

          {/* DC IPL T20 TEAM */}
          <div className='playersDiv DCColor'>
          <Players name="Rishabh Pant" team="Delhi Capitals (DC)" role="Wicketkeeper Batter" imageURL="./images/DCImage.png"/>
          </div>

          {/* GT IPL T20 TEAM */}
          <div className='playersDiv GTColor'>
          <Players name="Shubman Gill" team="Gujarat Titans (GT)" role="Batter" imageURL="./images/GTImage.png"/>
          </div>

          {/* KKR IPL T20 TEAM */}
          <div className='playersDiv KKRColor'>
          <Players name="Shreyas Iyer" team="Kolkata Knight Riders (KKR)" role="Batter" imageURL="./images/KKRImage.png"/>
          </div>

           {/* LSG IPL T20 TEAM */}
           <div className='playersDiv LSGColor'>
          <Players name="KL Rahul" team="Lucknow Super Giants (LSG)" role="Wicketkeeper Batter" imageURL="./images/LSGImage.png"/>
          </div>

          {/* PK IPL T20 TEAM */}
          <div className='playersDiv PKColor'>
          <Players name="Shikhar Dhawan" team="Punjab Kings (PBKS)" role="Batter" imageURL="./images/PKImage.png"/>
          </div>

          {/* RR IPL T20 TEAM */}
          <div className='playersDiv RRColor'>
          <Players name="Sanju Samson" team="Rajasthan Royals (RR)" role="Wicketkeeper Batter" imageURL="./images/RRImage.png"/>
          </div>

          {/* RCB IPL T20 TEAM */}
          <div className='playersDiv RCBColor'>
          <Players name="Faf du Plessis" team="Royal Challengers Bengaluru (RCB)" role="Batter" imageURL="./images/RCBImage.png"/>
          </div>

          {/* SRH IPL T20 TEAM */}
          <div className='playersDiv SRHColor'>
          <Players name="Pat Cummins" team="Sunrisers Hyderabad (SRH)" role="Bowler" imageURL="./images/SRHImage.png"/>
          </div>

        </div>
    </div>
  );
}

export default App;
