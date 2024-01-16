import React from 'react';
import Song from './Song';
const Footer = () => {
  return (
    
    <footer>
      
      <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', fontFamily: "'Comic Sans MS', cursive", color: '#333' }}>
  <p>Hey Harshi! <span style={{ color: '#e74c3c' }}>🌟</span> Just wanted to drop in and remind you how utterly adorable and special you are. 😊 Your cute smile and the way you laugh make every moment brighter for me. Even though we're miles apart, my love for you knows no distance. <span style={{ color: '#e74c3c' }}>💖</span></p>

  <p>I'm eagerly counting down the days until we can close this gap and be together. Can't wait for the day when I can hold you close and see that beautiful smile in person. <span style={{ color: '#e74c3c' }}>🥰</span></p>

  <p>Until then, every message, call, and thought of you keeps me going. You're my constant joy, and I feel so lucky to have you in my life.</p>
<br/>
  <center><p>Love You ❤️</p></center>
  
  <Song/>
</div>


      
      <br/>
    </footer>
    
  );
};

export default Footer;
