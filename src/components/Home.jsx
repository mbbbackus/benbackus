import '../styles/Home.css';
import React, {useState, useEffect, useRef} from 'react';
import {generateSquaresInCircle} from '../utils/svgGenerator';

function Home() {

  const [scrollCount, setScrollCount] = useState(0);
  const [squares, setSquares] = useState([]);
  const [caption, setCaption] = useState(null);
  const [title, setTitle] = useState(null);
  const [upArrow, setUpArrow] = useState(null);
  const [downArrow, setDownArrow] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const isAnimatingRef = useRef(false);

  const scrollCountRef = useRef(scrollCount);
  const setScrollCountRef = (data) => {
    scrollCountRef.current = data;
    setScrollCount(data);
  }

  const squaresRef = useRef(squares);
  const setSquaresRef = (data) => {
    squaresRef.current = data;
    setSquares(data);
  }

  const bodyMouseWheel = (e) => {
    if (e.deltaY > 0) {
      handleScrollDown();
    } else {
      handleScrollUp();
    }
    e.preventDefault()
  }

  /**
   * The gameplan:
   * 1. Create a function that updates the opacity of a given square
   * 2. Upon hitting certain checkpoints (like 300), change the opacity
   *    of the squares, and then at the next checkpoint start new drawing
   *    2.5 We will decide the best way to toggle opacity after we make the
   *        function but for now, the two strategies are: All at once, or 
   *        in order until all squares disappear or reappear
   * 3. Eventually, incorporate appearance of text (center title and caption below art)
   * 4. Maybe add some hotkeys/buttons that'll take you to the page you want too...
   * 
   * - (SOLVED) One problem: How do we handle the fact that the first time you scroll down,
   *   you're creating squares, but then if you scroll up then back down, you're 
   *   using existing squares and just toggling the opacity?
   *   - I guess we'll just have to compare the index to the size of the square array?
   * 
   * - Another problem: How do we handle the speed? Sometimes if you leave the page
   *   open for a while then when you scroll, the operation happens much faster
   *   - I thing we'll have to add some sort of timeout to the graphical functions so
   *     that the graphics can go as slow as they want, but they can never go faster
   *     than a certain speed, and at least that'll be consistent enough
   */

  const INTERVAL = 300;
  const CHECKPOINT_ONE = INTERVAL;
  const CHECKPOINT_TWO = INTERVAL * 2;
  const CHECKPOINT_THREE = INTERVAL * 3;
  const CHECKPOINT_FOUR = INTERVAL * 4;
  const CHECKPOINT_FIVE = INTERVAL * 5;
  const CHECKPOINT_SIX = INTERVAL * 6;
  const CHECKPOINT_SEVEN = INTERVAL * 7;
  const CHECKPOINT_EIGHT = INTERVAL * 8;

  const FINISH_LINE = CHECKPOINT_EIGHT;

  const drawShapes = (index, squares, setSquaresRef, intervalModifier, isRotating=false, isExpanding=false, isCircles=false) => {
    const offsetIndex = index - INTERVAL * intervalModifier;
    if (offsetIndex >= squares.length) {
      const newSquare = generateSquaresInCircle(offsetIndex, isRotating, isExpanding, isCircles);
      setSquaresRef(squares.concat(newSquare))
    } else {
      const currentSquare = squares[offsetIndex];
      currentSquare.style.opacity = 1;
    }
  }

  const hideShapes = (index, squares, intervalModifier, reversal=false) => {
    const offsetIndex = index - INTERVAL * intervalModifier;
    const currentSquare = squares[offsetIndex - reversal];
    currentSquare.style.opacity = 0;
  }

  const reverseDrawShapes = (index, squares, intervalModifier) => {
    const offsetIndex = index - INTERVAL * intervalModifier;
    const currentSquare = squares[offsetIndex - INTERVAL];
    currentSquare.style.opacity = 1;
  }

  /** This method is more complex then scrolling up because
   *  we can't assume the squares exist yet, so we have to check
   *  if our scroll index is bigger than the size of the squares
   *  array. If it is, then we must create a new square. If it isn't,
   *  we can grab the existing square and update its opacity to 1.
  */ 
  const forwardAnimation = () => {
    const index = scrollCountRef.current;
    const squares = squaresRef.current;
    if (index === FINISH_LINE) return;

    setScrollCountRef(index + 1);

    /**
     * KEY:
     * Circle - Just a circle made of circles
     * Fractal - rotating squares
     * Mobius - unrotating squares
     * Matrix - expanding, unrotating squares
     * Open - Beginning half of animation, opacity set to 1
     * Close - Ending half of animation, opacity set to 0
     * Reverse - opposite order of events
     */

    // OPEN CIRCLE:
    if (index < CHECKPOINT_ONE) {
      drawShapes(index, squares, setSquaresRef, 0, false, false, true);
    } 
    // CLOSE CIRCLE:
    else if (index >= CHECKPOINT_ONE && index < CHECKPOINT_TWO) {
      hideShapes(index, squares, 1);
    } 
    // OPEN MOBIUS
    else if (index >= CHECKPOINT_TWO && index < CHECKPOINT_THREE) {
      drawShapes(index, squares, setSquaresRef, 1);
    }
    // CLOSE MOBIUS
    else if (index >= CHECKPOINT_THREE && index < CHECKPOINT_FOUR) {
      hideShapes(index, squares, 2);
    } 
    // OPEN FRACTAL
    else if (index >= CHECKPOINT_FOUR && index < CHECKPOINT_FIVE) {
      drawShapes(index, squares, setSquaresRef, 2, true);
    }
    // CLOSE FRACTAL
    else if (index >= CHECKPOINT_FIVE && index < CHECKPOINT_SIX) {
      hideShapes(index, squares, 3);
    }
    // OPEN MATRIX
    else if (index >= CHECKPOINT_SIX && index < CHECKPOINT_SEVEN) {
      drawShapes(index, squares, setSquaresRef, 3, false, true);
    }
    // CLOSE MATRIX
    else if (index >= CHECKPOINT_SEVEN && index < CHECKPOINT_EIGHT) {
      hideShapes(index, squares, 4);
    } 
  }

  const backwardAnimation = () => {
    const index = scrollCountRef.current;
    const squares = squaresRef.current;
    if (index === 0) return; 

    setScrollCountRef(index - 1);

    // REVERSE OPENING OF CIRCLE
    if (index <= CHECKPOINT_ONE) {
      hideShapes(index, squares, 0, true);
    } 
    // REVERSE CLOSING OF CIRCLE
    else if (index > CHECKPOINT_ONE && index < CHECKPOINT_TWO) {
      reverseDrawShapes(index, squares, 0);
    }
    // REVERSE OPENING OF MOBIUS
    else if (index >= CHECKPOINT_TWO && index <= CHECKPOINT_THREE) {
      hideShapes(index, squares, 1, true);
    } 
    // REVERSE CLOSING OF MOBIUS
    else if (index > CHECKPOINT_THREE && index < CHECKPOINT_FOUR) {
      reverseDrawShapes(index, squares, 1);
    }
    // REVERSE OPENING OF FRACTAL
    else if (index >= CHECKPOINT_FOUR && index <= CHECKPOINT_FIVE) {
      hideShapes(index, squares, 2, true);
    } 
    // REVERSE CLOSING OF FRACTAL
    else if (index > CHECKPOINT_FIVE && index < CHECKPOINT_SIX) {
      reverseDrawShapes(index, squares, 2);
    }
    // REVERSE OPENING OF MATRIX
    else if (index >= CHECKPOINT_SIX && index <= CHECKPOINT_SEVEN) {
      hideShapes(index, squares, 3, true);
    } 
    // REVERSE CLOSING OF MATRIX
    else if (index > CHECKPOINT_SEVEN && index < CHECKPOINT_EIGHT) {
      reverseDrawShapes(index, squares, 3);
    }
  }

  const handleScrollDown = () => {
    if (isAnimatingRef.current) return;
    for (let i = 0; i < 4; i++) {
      forwardAnimation();
    }
  }

  const handleScrollUp = () => {
    if (isAnimatingRef.current) return;
    for (let i = 0; i < 4; i++) {
      backwardAnimation();
    }
  }

  useEffect(() => {
    window.addEventListener('mousewheel', bodyMouseWheel, {passive: false})
    return () => {
      window.removeEventListener('mousewheel', bodyMouseWheel);
      document.querySelectorAll('.square').forEach(el => el.remove());
    };
  }, []);

  const clickUpButton = async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    let index = scrollCountRef.current;

    if (index % 300 === 0) {
      backwardAnimation();
      index--;
    }

    while (index % 300 !== 0 || index % 600 === 0) {
      backwardAnimation();
      await new Promise(r => setTimeout(r, 1));
      index--;
    }

    isAnimatingRef.current = false;
  }

  const clickDownButton = async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    let index = scrollCountRef.current;

    if (index % 300 === 0) {
      forwardAnimation();
      index++;
    }

    while (index % 300 !== 0 || index % 600 === 0) {
      forwardAnimation();
      await new Promise(r => setTimeout(r, 1));
      index++;
    }

    isAnimatingRef.current = false;
  }

  useEffect(() => {
    let captionText = '';
    if (scrollCount > 0 && scrollCount < CHECKPOINT_TWO) {
      captionText = 'About';
    } else if (scrollCount >= CHECKPOINT_TWO && scrollCount < CHECKPOINT_FOUR) {
      captionText = 'Coding';
    } else if (scrollCount >= CHECKPOINT_FOUR && scrollCount < CHECKPOINT_SIX) {
      captionText = 'Art';
    } else if (scrollCount >= CHECKPOINT_SIX && scrollCount < CHECKPOINT_EIGHT) {
      captionText = 'Writing';
    }

    const captionElement = captionText ? (
      <div className="caption-container fade-in">
        <a href={`/#/${captionText}`}>{captionText}</a>
      </div>
    ) : '';
      
    setCaption(captionElement);

    if (scrollCount === 0 || scrollCount === FINISH_LINE) {
      setTitle(
        <div className="name-container fade-in" id="ben-backus-title">
          Ben Backus
        </div>
      )

    } else {
      setTitle(null);
    }
    setUpArrow(
        scrollCount !== 0 ?
          <div className={`${scrollCount === 0 || scrollCount === FINISH_LINE ? 'bouncing-arrow' : ''} arrow-up`} onClick={clickUpButton}>
            <span>
              <div className="arrow-tip-up"></div>
            </span>
          </div> : ''
        
    );
    setDownArrow(
        scrollCount !== FINISH_LINE ?
           <div className={`${scrollCount === 0 || scrollCount === FINISH_LINE ? 'bouncing-arrow' : ''} arrow-down`} onClick={clickDownButton}>
            <span>
              <div className="arrow-tip-down"></div> 
            </span>
          </div> : ''
        
    )
  }, [scrollCount]);

  return (
    <div className="Home">
      {title}
      {caption}
      {upArrow}
      {downArrow}
    </div>
  );
}

export default Home;
