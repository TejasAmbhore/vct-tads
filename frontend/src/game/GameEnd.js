import React from 'react';
import './GameEnd.css'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize'

export default function GameEnd() {
 

  const { width, height } = useWindowSize()
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/", { replace: true });
  }, 7000);
  return (
    <div style={{ padding: 0 }}>
      <Confetti
        width={width}
        height={height}
        color={['#f44336', '#795548', '#ff5722', '#ff9800', '#ffc107']} />
      <div className="endgame">
        <img src="https://raw.githubusercontent.com/TAdS-VCT/Media/main/BG%20images/Fireplace2.jpeg" alt="end" className="fireplace" />
        <div className="text_endgame">
          <h1>Voila!</h1>
          <h1>The Hogwarts Express has covered all the stops and it's time to say Goodbye. Hope to see you soon in campus and explore all the places in real life.</h1>
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
