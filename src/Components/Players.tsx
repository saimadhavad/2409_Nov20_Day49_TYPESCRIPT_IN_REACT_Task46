import React from 'react'

function Players(props:any) {
  return (
    <div>
            <img src={props.imageURL} alt='CSKImage'></img>
            <h2>Name : {props.name}</h2>
            <h3>Team : {props.team}</h3>
            <h4>Role : {props.role}</h4>

    {/* <div className='playersDiv CSKColor'>
      <img src='./images/CSKImage.png' alt='CSKImage'></img>
      <h2>Name : Ruturaj Gaikwad</h2>
      <h3>Team : Chennai Super Kings (CSK)</h3>
      <h4>Role : Batter</h4>
    </div>
    <div className='playersDiv DCColor'>
      <img src='./images/DCImage.png' alt='DCImage'></img>
      <h2>Name : Rishabh Pant</h2>
      <h3>Team : Delhi Capitals (DC)</h3>
      <h4>Role : Wicketkeeper Batter</h4>
    </div>
    <div className='playersDiv GTColor'>
      <img src='./images/GTImage.png' alt='GTImage'></img>
      <h2>Name : Shubman Gill</h2>
      <h3>Team : Gujarat Titans (GT)</h3>
      <h4>Role : Batter</h4>
    </div>
    <div className='playersDiv KKRColor'>
      <img src='./images/KKRImage.png' alt='KKRImage'></img>
      <h2>Name : Shreyas Iyer</h2>
      <h3>Team : Kolkata Knight Riders (KKR)</h3>
      <h4>Role : Batter</h4>
    </div>
    <div className='playersDiv LSGColor'>
      <img src='./images/LSGImage.png' alt='LSGImage'></img>
      <h2>Name : KL Rahul</h2>
      <h3>Team : Lucknow Super Giants (LSG)</h3>
      <h4>Role : Wicketkeeper Batter</h4>
    </div>
    <div className='playersDiv MIColor'>
      <img src='./images/MIImage.png' alt='MIImage'></img>
      <h2>Name : Hardik Pandya</h2>
      <h3>Team : Mumbai Indians (MI)</h3>
      <h4>Role : All-rounder</h4>
    </div>
    <div className='playersDiv PKColor'>
      <img src='./images/PKImage.png' alt='PKImage'></img>
      <h2>Name : Shikhar Dhawan</h2>
      <h3>Team : Punjab Kings (PBKS)</h3>
      <h4>Role : Batter</h4>
    </div>
    <div className='playersDiv RRColor'>
      <img src='./images/RRImage.png' alt='RRImage'></img>
      <h2>Name : Sanju Samson</h2>
      <h3>Team : Rajasthan Royals (RR)</h3>
      <h4>Role : Wicketkeeper Batter</h4>
    </div>
    <div className='playersDiv RCBColor'>
      <img src='./images/RCBImage.png' alt='RCBImage'></img>
      <h2>Name : Faf du Plessis</h2>
      <h3>Team : Royal Challengers Bengaluru (RCB)</h3>
      <h4>Role : Batter</h4>
    </div>
    <div className='playersDiv SRHColor'>
      <img src='./images/SRHImage.png' alt='SRHImage'></img>
      <h2>Name : Pat Cummins</h2>
      <h3>Team : Sunrisers Hyderabad (SRH)</h3>
      <h4>Role : Bowler</h4>
    </div> */}
</div>
  )
}

export default Players
