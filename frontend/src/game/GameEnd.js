import React from 'react';
import './GameEnd.css'

export default function GameEnd() {
    return (
        <div style={{padding: 0}}>
    <div className="endgame">
      <img src="https://raw.githubusercontent.com/TAdS-VCT/Media/main/BG%20images/Fireplace2.jpeg" alt="end" className="fireplace"/>
      <div className="text_endgame"> 
        <h1>Voila!</h1>
        <h1> You just had a tour of the entire IIT KGP campus! Results will be released soon...</h1>
      </div>
      
    </div>
  {/*  <section class="contact">
    <div class="content-contact">
        <p class="contact-p" style="color: black;">This platform is not one sided. Here at KGP, we being a family, let us help others with their doubts. So if you have doubt or if you have successfully solved unsolved problem, then feel free to reach out to us.
            We would also love to receive feedback regarding suggestion or improvement. Also If you want to contribute to build this website then contact us.
        </p>
    </div>
</section>  */}
  </div>
    )
}
