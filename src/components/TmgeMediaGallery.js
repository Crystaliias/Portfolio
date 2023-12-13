import { useState } from 'react';
import { TmgePages, } from '../data';

import leftArrow from '../images/leftArrow.png'
import rightArrow from '../images/rightArrow.png'

export default function TmgeMediaGallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < TmgePages.length - 1;
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
        setIndex(TmgePages.length - 1);
    }
  }

  let entry = TmgePages[index];

  return (
    <div class="TmgeMediaGallery">
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
                src={entry.img}
                width="575"
                height="767"
            />
            <h3>
                ({index + 1} of {TmgePages.length})
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