import React, { useEffect, useRef, useCallback } from 'react';
import { generateSquaresInCircle } from '../utils/svgGenerator';

function BackgroundAnimation() {
  const squaresRef = useRef([]);
  const lastScrollIndexRef = useRef(0);
  const containerRef = useRef(null);

  const INTERVAL = 300;
  const SHAPES_PER_SECTION = INTERVAL;
  
  // Checkpoints for each section transition
  const CHECKPOINT_ONE = INTERVAL;      // End of circle draw
  const CHECKPOINT_TWO = INTERVAL * 2;  // End of circle hide / start mobius
  const CHECKPOINT_THREE = INTERVAL * 3; // End of mobius draw
  const CHECKPOINT_FOUR = INTERVAL * 4;  // End of mobius hide / start fractal
  const CHECKPOINT_FIVE = INTERVAL * 5;  // End of fractal draw
  const CHECKPOINT_SIX = INTERVAL * 6;   // End of fractal hide / start matrix
  const CHECKPOINT_SEVEN = INTERVAL * 7; // End of matrix draw
  const CHECKPOINT_EIGHT = INTERVAL * 8; // End of matrix hide
  const FINISH_LINE = CHECKPOINT_EIGHT;

  const drawShape = useCallback((index, squares) => {
    // Determine which section and phase we're in
    let offsetIndex, newSquare;
    
    if (index < CHECKPOINT_ONE) {
      // Drawing circle
      offsetIndex = index;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex, false, false, true, true);
        return [...squares, newSquare];
      } else if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 1;
      }
    } else if (index >= CHECKPOINT_ONE && index < CHECKPOINT_TWO) {
      // Hiding circle
      offsetIndex = index - CHECKPOINT_ONE;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 0;
      }
    } else if (index >= CHECKPOINT_TWO && index < CHECKPOINT_THREE) {
      // Drawing mobius (squares)
      offsetIndex = index - CHECKPOINT_ONE;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex - INTERVAL, false, false, false, true);
        return [...squares, newSquare];
      } else if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 1;
      }
    } else if (index >= CHECKPOINT_THREE && index < CHECKPOINT_FOUR) {
      // Hiding mobius
      offsetIndex = index - CHECKPOINT_TWO;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 0;
      }
    } else if (index >= CHECKPOINT_FOUR && index < CHECKPOINT_FIVE) {
      // Drawing fractal (rotating squares)
      offsetIndex = index - CHECKPOINT_TWO;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex - INTERVAL * 2, true, false, false, false);
        return [...squares, newSquare];
      } else if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 1;
      }
    } else if (index >= CHECKPOINT_FIVE && index < CHECKPOINT_SIX) {
      // Hiding fractal
      offsetIndex = index - CHECKPOINT_THREE;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 0;
      }
    } else if (index >= CHECKPOINT_SIX && index < CHECKPOINT_SEVEN) {
      // Drawing matrix (expanding squares)
      offsetIndex = index - CHECKPOINT_THREE;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex - INTERVAL * 3, false, true, false, false);
        return [...squares, newSquare];
      } else if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 1;
      }
    } else if (index >= CHECKPOINT_SEVEN && index < CHECKPOINT_EIGHT) {
      // Hiding matrix
      offsetIndex = index - CHECKPOINT_FOUR;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 0;
      }
    }
    
    return squares;
  }, []);

  const hideShape = useCallback((index, squares) => {
    // Reverse of drawShape - show what was hidden, hide what was shown
    if (index <= CHECKPOINT_ONE) {
      // Reverse circle drawing
      if (squares[index - 1]) {
        squares[index - 1].style.opacity = 0;
      }
    } else if (index > CHECKPOINT_ONE && index < CHECKPOINT_TWO) {
      // Reverse circle hiding
      const offsetIndex = index - CHECKPOINT_ONE - 1;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 1;
      }
    } else if (index >= CHECKPOINT_TWO && index <= CHECKPOINT_THREE) {
      // Reverse mobius drawing
      const offsetIndex = index - CHECKPOINT_ONE - 1;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 0;
      }
    } else if (index > CHECKPOINT_THREE && index < CHECKPOINT_FOUR) {
      // Reverse mobius hiding
      const offsetIndex = index - CHECKPOINT_TWO - 1;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 1;
      }
    } else if (index >= CHECKPOINT_FOUR && index <= CHECKPOINT_FIVE) {
      // Reverse fractal drawing
      const offsetIndex = index - CHECKPOINT_TWO - 1;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 0;
      }
    } else if (index > CHECKPOINT_FIVE && index < CHECKPOINT_SIX) {
      // Reverse fractal hiding
      const offsetIndex = index - CHECKPOINT_THREE - 1;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 1;
      }
    } else if (index >= CHECKPOINT_SIX && index <= CHECKPOINT_SEVEN) {
      // Reverse matrix drawing
      const offsetIndex = index - CHECKPOINT_THREE - 1;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 0;
      }
    } else if (index > CHECKPOINT_SEVEN && index < CHECKPOINT_EIGHT) {
      // Reverse matrix hiding
      const offsetIndex = index - CHECKPOINT_FOUR - 1;
      if (squares[offsetIndex]) {
        squares[offsetIndex].style.opacity = 1;
      }
    }
    
    return squares;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Map scroll position to animation index (0 to FINISH_LINE)
      const scrollProgress = Math.min(scrollY / docHeight, 1);
      const targetIndex = Math.floor(scrollProgress * FINISH_LINE);
      
      const currentIndex = lastScrollIndexRef.current;
      let squares = squaresRef.current;
      
      if (targetIndex > currentIndex) {
        // Scrolling down - advance animation
        for (let i = currentIndex; i < targetIndex; i++) {
          squares = drawShape(i, squares);
        }
      } else if (targetIndex < currentIndex) {
        // Scrolling up - reverse animation
        for (let i = currentIndex; i > targetIndex; i--) {
          squares = hideShape(i, squares);
        }
      }
      
      squaresRef.current = squares;
      lastScrollIndexRef.current = targetIndex;
    };

    // Start with no shapes - they animate in as user scrolls
    squaresRef.current = [];
    lastScrollIndexRef.current = 0;

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up squares
      document.querySelectorAll('.square').forEach(el => el.remove());
    };
  }, [drawShape, hideShape]);

  return null; // This component just manages the DOM elements directly
}

export default BackgroundAnimation;
