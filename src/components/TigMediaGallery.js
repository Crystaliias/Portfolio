import { useState } from 'react';
import { TigImages } from '../DataTig';

import leftArrow from '../images/leftArrow.png'
import rightArrow from '../images/rightArrow.png'

export default function TigMediaGallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < TigImages.length - 1;
  const hasLast = index > 0;

  function handleRightArrow() {
    if (hasNext) { 
      setIndex(index + 1);
    } 
    else {
        setIndex(0);
    }
  }

  function handleLeftArrow() {
    if (hasLast) {
        setIndex(index - 1);
    }
    else {
        setIndex(TigImages.length - 1);
    }
  }

  let image = TigImages[index];

  return (
    <div class="TigMediaGallery">
        <div class="left">
            <button onClick={handleLeftArrow}>
            <img
                src={leftArrow}
                height="250"
                width="250"
            />
            </button>
        </div>

        <div class="mid">
            <img
                src={image.img}
                width="720"
                height="450"
            />
            <h3>
                ({index + 1} of {TigImages.length})
            </h3>
        </div>

        <div class="right">
            <button onClick={handleRightArrow}>
                <img
                src={rightArrow}
                height="250"
                width="250"
                />
            </button>
        </div>
    </div>
  );
}