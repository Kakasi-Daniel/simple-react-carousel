import React, { useState, useEffect } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNextOutlined';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './Slider.css';

function Slider({w,h,pics}) {
  let [current, setCurrent] = useState(pics.length - 1);

  useEffect(() => {
    console.log(current,w,h);
  });

  const nextHandler = () => {
    console.log(current);
    let images = [];
    document.querySelectorAll('img').forEach((e) => images.push(e));
    if (current !== 0) {
      images[current].classList.remove('grow');
      images[current].classList.add('shrink');
      setCurrent(current - 1);
    } else {
      setCurrent(pics.length - 1);
      images.forEach((i,index,arr) => {
        if(index !== 0){
          i.classList.remove('shrink');
          i.classList.add('grow');
        }
      });
    }
  };

  const prevHandler = () => {
    console.log(current);
    let images = [];
    document.querySelectorAll('img').forEach((e) => images.push(e));
    images[current].classList.remove('shrink');
    if (current !== pics.length - 1) {
      setCurrent(current + 1);
      images[current + 1].classList.add('grow');
    } else {
      setCurrent(0);
      images.forEach((i) => {
        i.classList.remove('grow');
        i.classList.add('shrink');
      });
      images[0].classList.add('grow');
    }
  };

  let styleDiv = {
    width: `${w}`,
    height: `${h}`,
    margin: 'auto',
    overflow: 'hidden'
  }

  return (
    <div style={styleDiv} >
      <div className="slider">
        {pics.map((pic, index) => {
          return <img src={pic} alt="slide" key={index} />;
        })}
        <NavigateBeforeIcon onClick={prevHandler} className='larr' />
        <NavigateNextIcon onClick={nextHandler} className='rarr' />
      </div>
    </div>
  );
}

export default Slider;
