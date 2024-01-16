import React, { useState } from 'react';


const Pictures = () => {
  const [images] = useState([
    require('./harshiiii/1.jpeg'), 
    require('./harshiiii/2.jpeg'),
    require('./harshiiii/3.jpeg'), 
    require('./harshiiii/4.jpeg'),
    require('./harshiiii/5.jpeg'), 
    require('./harshiiii/6.jpeg'),
    require('./harshiiii/7.jpeg'), 
    require('./harshiiii/8.jpeg'),
    require('./harshiiii/9.jpeg'), 
    require('./harshiiii/10.jpg'),
    require('./harshiiii/11.jpg'), 
    require('./harshiiii/12.jpg'),
    require('./harshiiii/13.jpg'), 
    require('./harshiiii/14.jpg'),
    require('./harshiiii/15.jpg'), 
    require('./harshiiii/16.jpg'),
    require('./harshiiii/17.jpg'), 
    require('./harshiiii/18.jpg'),
    require('./harshiiii/19.jpg'), 
    require('./harshiiii/20.jpg'),
    require('./harshiiii/21.jpg'), 
    require('./harshiiii/22.jpg'),
    require('./harshiiii/23.jpg'), 
    require('./harshiiii/24.jpeg'),
    require('./harshiiii/25.jpeg'), 
    require('./harshiiii/26.jpeg'),
    require('./harshiiii/27.jpeg'), 
    require('./harshiiii/28.jpeg'),
    require('./harshiiii/29.jpeg'), 
    require('./harshiiii/30.jpeg'),
    require('./harshiiii/31.jpeg'), 
    require('./harshiiii/32.jpeg'),
    require('./harshiiii/33.jpeg'), 
    require('./harshiiii/34.jpeg'),
    require('./harshiiii/35.jpeg'),
    // require('./harshiiii/36.jpeg'),
    require('./harshiiii/37.jpeg'), 
    require('./harshiiii/38.jpeg'),
    require('./harshiiii/39.jpeg'), 
    require('./harshiiii/40.jpeg'),
    require('./harshiiii/41.jpeg'), 
    require('./harshiiii/42.jpeg'),
    require('./harshiiii/43.jpeg'), 
    require('./harshiiii/44.jpeg'),
    require('./harshiiii/45.jpeg'), 
    require('./harshiiii/46.jpeg'),
    require('./harshiiii/47.jpeg'), 
    require('./harshiiii/48.jpeg'),
    require('./harshiiii/49.jpeg'), 
    require('./harshiiii/50.jpeg'),
    require('./harshiiii/51.jpeg'), 
    require('./harshiiii/52.jpeg'),
    require('./harshiiii/53.jpeg'), 
    require('./harshiiii/54.jpeg'),
    require('./harshiiii/55.jpeg'), 
    require('./harshiiii/56.jpeg'),
    require('./harshiiii/57.jpeg'), 
    require('./harshiiii/58.jpeg'),
    require('./harshiiii/59.PNG'),
    require('./harshiiii/60.PNG'),
    require('./harshiiii/61.PNG'),
    require('./harshiiii/62.PNG'),
    require('./harshiiii/63.PNG'),
    
    require('./harshiiii/65.JPG'),
    require('./harshiiii/66.JPG'),
    require('./harshiiii/67.JPG'),
    require('./harshiiii/68.JPG'),
    require('./harshiiii/69.JPG'),
    require('./harshiiii/70.JPG'),
    require('./harshiiii/71.JPG'),
    
    require('./harshiiii/73.JPG'),
    require('./harshiiii/74.JPG'),

    require('./harshiiii/76.JPG'),
    require('./harshiiii/77.JPG'),

    require('./harshiiii/79.JPG'),
    require('./harshiiii/80.JPG'),
    require('./harshiiii/81.JPG'),
   
    require('./harshiiii/83.JPG'),
    require('./harshiiii/84.JPG'),
    require('./harshiiii/85.JPG'),
    require('./harshiiii/86.JPG'),
    require('./harshiiii/87.JPG'),
    require('./harshiiii/88.JPG'),
    require('./harshiiii/90.JPG'),
    require('./harshiiii/91.JPG'),
    require('./harshiiii/92.JPG'),
    require('./harshiiii/93.JPG'),
    require('./harshiiii/94.JPG'),
    require('./harshiiii/95.JPG'),
    require('./harshiiii/96.JPG'),
    require('./harshiiii/97.JPG'),
    require('./harshiiii/98.JPG'),
    require('./harshiiii/99.PNG'),
    require('./harshiiii/100.PNG'),
    require('./harshiiii/101.PNG'),
    require('./harshiiii/102.JPG'),
    require('./harshiiii/103.JPG'),
    require('./harshiiii/104.PNG'),
    require('./harshiiii/105.PNG'),
    require('./harshiiii/106.PNG'),
    require('./harshiiii/107.PNG'),
    require('./harshiiii/108.PNG'),
    require('./harshiiii/109.PNG'),
    require('./harshiiii/110.PNG'),
    require('./harshiiii/111.JPG'),
    require('./harshiiii/112.PNG'),
    require('./harshiiii/113.PNG'),
    require('./harshiiii/115.JPG'),
    require('./harshiiii/116.PNG'),
    require('./harshiiii/117.PNG'),
    require('./harshiiii/121.PNG'),

    





    // Add more image URLs as needed
  ]);

  const renderImages = () => {
    const imageSize = {
      width: '400px',
      height: '500px',
      margin: '20px', // Add margin between images if needed
    };

    return images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Uploaded ${index}`}
        style={imageSize}
      />
    ));
  };

  return (
    <div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {renderImages()}
      </div>
    </div>
  );
};

export default Pictures;
