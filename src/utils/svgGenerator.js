export function generateSquaresInCircle(i, isRotating=false, isExpanding=false, isCircles=false, isFadeIn=false, container=null) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const squareSize = 50;
    const radius = 100;

    const numSquares = 342;
    const angle = 360 / numSquares;

    const square = document.createElement('div');
    // Position on left side of screen
    const left = Math.cos(angle * i) * radius + 200 - squareSize / 2;
    const top = Math.sin(angle * i) * radius + windowHeight / 2 - squareSize / 2;

    // Faded dark gray color - slightly lighter than background
    const borderColor = isFadeIn 
        ? `rgba(60, 60, 60, ${(i / 300) % 1})` 
        : 'rgba(60, 60, 60, 1)';

    square.setAttribute('style', `
        position: fixed;
        left: ${left}px;
        top: ${top}px;
        width: ${isExpanding ? squareSize * Math.random(0.5, 1.5) : squareSize}px;
        height: ${isExpanding ? squareSize * Math.random(0.5, 1.5) : squareSize}px;
        border: 1px solid ${borderColor};
        background-color: #1c1c1c;
        touch-action: none;
        z-index: 0;
        pointer-events: none;
        ${isRotating ? `transform: rotate(${angle*i}deg)` : ''}
        ${isCircles ? 'border-radius: 25px;': ''}
    `);
    square.setAttribute('class', 'square');
    
    if (container) {
        container.appendChild(square);
    } else {
        document.body.appendChild(square);
    }

    return square;
}

