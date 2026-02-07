import { useEffect, useRef, useCallback } from 'react';
import { generateSquaresInCircle } from '../utils/svgGenerator';

function BackgroundAnimation() {
  const squaresRef = useRef([]);
  const lastScrollIndexRef = useRef(0);

  const INTERVAL = 300;
  
  // Checkpoints - end at CHECKPOINT_NINE so Self-Study shows full animation
  const CHECKPOINT_ONE = INTERVAL;      // End of circle draw (About)
  const CHECKPOINT_TWO = INTERVAL * 2;  // End of circle hide / start mobius
  const CHECKPOINT_THREE = INTERVAL * 3; // End of mobius draw (Coding)
  const CHECKPOINT_FOUR = INTERVAL * 4;  // End of mobius hide / start fractal
  const CHECKPOINT_FIVE = INTERVAL * 5;  // End of fractal draw (Art)
  const CHECKPOINT_SIX = INTERVAL * 6;   // End of fractal hide / start matrix
  const CHECKPOINT_SEVEN = INTERVAL * 7; // End of matrix draw (Writing)
  const CHECKPOINT_EIGHT = INTERVAL * 8; // End of matrix hide / start hexagons
  const CHECKPOINT_NINE = INTERVAL * 9;  // End of hexagon draw (Self-Study) - STOP HERE
  const FINISH_LINE = CHECKPOINT_NINE;   // End with hexagons fully visible

  // Helper to set opacity on both left and right shapes (right may be null on mobile)
  const setShapeOpacity = (shape, opacity) => {
    if (shape && shape.left) {
      shape.left.style.opacity = opacity;
      if (shape.right) {
        shape.right.style.opacity = opacity;
      }
    }
  };

  const drawShape = useCallback((index, squares) => {
    let offsetIndex, newSquare;
    
    if (index < CHECKPOINT_ONE) {
      // Drawing circle
      offsetIndex = index;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex, false, false, true, true, false, false);
        return [...squares, newSquare];
      } else {
        setShapeOpacity(squares[offsetIndex], 1);
      }
    } else if (index >= CHECKPOINT_ONE && index < CHECKPOINT_TWO) {
      // Hiding circle
      offsetIndex = index - CHECKPOINT_ONE;
      setShapeOpacity(squares[offsetIndex], 0);
    } else if (index >= CHECKPOINT_TWO && index < CHECKPOINT_THREE) {
      // Drawing mobius (squares)
      offsetIndex = index - CHECKPOINT_ONE;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex - INTERVAL, false, false, false, true, false, false);
        return [...squares, newSquare];
      } else {
        setShapeOpacity(squares[offsetIndex], 1);
      }
    } else if (index >= CHECKPOINT_THREE && index < CHECKPOINT_FOUR) {
      // Hiding mobius
      offsetIndex = index - CHECKPOINT_TWO;
      setShapeOpacity(squares[offsetIndex], 0);
    } else if (index >= CHECKPOINT_FOUR && index < CHECKPOINT_FIVE) {
      // Drawing fractal (rotating squares)
      offsetIndex = index - CHECKPOINT_TWO;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex - INTERVAL * 2, true, false, false, false, false, false);
        return [...squares, newSquare];
      } else {
        setShapeOpacity(squares[offsetIndex], 1);
      }
    } else if (index >= CHECKPOINT_FIVE && index < CHECKPOINT_SIX) {
      // Hiding fractal
      offsetIndex = index - CHECKPOINT_THREE;
      setShapeOpacity(squares[offsetIndex], 0);
    } else if (index >= CHECKPOINT_SIX && index < CHECKPOINT_SEVEN) {
      // Drawing matrix (expanding squares)
      offsetIndex = index - CHECKPOINT_THREE;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex - INTERVAL * 3, false, true, false, false, false, false);
        return [...squares, newSquare];
      } else {
        setShapeOpacity(squares[offsetIndex], 1);
      }
    } else if (index >= CHECKPOINT_SEVEN && index < CHECKPOINT_EIGHT) {
      // Hiding matrix
      offsetIndex = index - CHECKPOINT_FOUR;
      setShapeOpacity(squares[offsetIndex], 0);
    } else if (index >= CHECKPOINT_EIGHT && index < CHECKPOINT_NINE) {
      // Drawing spinning diamonds with random dimensions (Self-Study)
      offsetIndex = index - CHECKPOINT_FOUR;
      if (offsetIndex >= squares.length) {
        newSquare = generateSquaresInCircle(offsetIndex - INTERVAL * 4, false, false, false, true, false, true);
        return [...squares, newSquare];
      } else {
        setShapeOpacity(squares[offsetIndex], 1);
      }
    }
    
    return squares;
  }, []);

  const hideShape = useCallback((index, squares) => {
    if (index <= CHECKPOINT_ONE) {
      // Reverse circle drawing
      setShapeOpacity(squares[index - 1], 0);
    } else if (index > CHECKPOINT_ONE && index < CHECKPOINT_TWO) {
      // Reverse circle hiding
      const offsetIndex = index - CHECKPOINT_ONE - 1;
      setShapeOpacity(squares[offsetIndex], 1);
    } else if (index >= CHECKPOINT_TWO && index <= CHECKPOINT_THREE) {
      // Reverse mobius drawing
      const offsetIndex = index - CHECKPOINT_ONE - 1;
      setShapeOpacity(squares[offsetIndex], 0);
    } else if (index > CHECKPOINT_THREE && index < CHECKPOINT_FOUR) {
      // Reverse mobius hiding
      const offsetIndex = index - CHECKPOINT_TWO - 1;
      setShapeOpacity(squares[offsetIndex], 1);
    } else if (index >= CHECKPOINT_FOUR && index <= CHECKPOINT_FIVE) {
      // Reverse fractal drawing
      const offsetIndex = index - CHECKPOINT_TWO - 1;
      setShapeOpacity(squares[offsetIndex], 0);
    } else if (index > CHECKPOINT_FIVE && index < CHECKPOINT_SIX) {
      // Reverse fractal hiding
      const offsetIndex = index - CHECKPOINT_THREE - 1;
      setShapeOpacity(squares[offsetIndex], 1);
    } else if (index >= CHECKPOINT_SIX && index <= CHECKPOINT_SEVEN) {
      // Reverse matrix drawing
      const offsetIndex = index - CHECKPOINT_THREE - 1;
      setShapeOpacity(squares[offsetIndex], 0);
    } else if (index > CHECKPOINT_SEVEN && index < CHECKPOINT_EIGHT) {
      // Reverse matrix hiding
      const offsetIndex = index - CHECKPOINT_FOUR - 1;
      setShapeOpacity(squares[offsetIndex], 1);
    } else if (index >= CHECKPOINT_EIGHT && index <= CHECKPOINT_NINE) {
      // Reverse hexagon drawing
      const offsetIndex = index - CHECKPOINT_FOUR - 1;
      setShapeOpacity(squares[offsetIndex], 0);
    }
    
    return squares;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - viewportHeight;
      
      // Don't start animation until user scrolls past the hero section (first viewport)
      const heroEnd = viewportHeight;
      
      if (scrollY < heroEnd) {
        // Still in hero section - hide everything
        if (lastScrollIndexRef.current > 0) {
          // Reverse any visible animation
          let squares = squaresRef.current;
          for (let i = lastScrollIndexRef.current; i > 0; i--) {
            squares = hideShape(i, squares);
          }
          squaresRef.current = squares;
          lastScrollIndexRef.current = 0;
        }
        return;
      }
      
      // Calculate progress after hero section
      const scrollAfterHero = scrollY - heroEnd;
      const remainingDoc = docHeight - heroEnd;
      const scrollProgress = Math.min(scrollAfterHero / remainingDoc, 1);
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

    // Initialize with nothing visible - animation starts on scroll
    squaresRef.current = [];
    lastScrollIndexRef.current = 0;

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up squares
      document.querySelectorAll('.square').forEach(el => el.remove());
    };
  }, [drawShape, hideShape]);

  return null;
}

export default BackgroundAnimation;
