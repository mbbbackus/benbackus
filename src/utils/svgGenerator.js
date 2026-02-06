export function generateSquaresInCircle(i, isRotating=false, isExpanding=false, isCircles=false, isFadeIn=false, container=null) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const squareSize = 50;
    const radius = 100;

    const numSquares = 342;
    const angle = 360 / numSquares;

    // Faded dark gray color - slightly lighter than background
    const borderColor = isFadeIn 
        ? `rgba(60, 60, 60, ${(i / 300) % 1})` 
        : 'rgba(60, 60, 60, 1)';

    // Left side shape
    const squareLeft = document.createElement('div');
    const leftX = Math.cos(angle * i) * radius + 200 - squareSize / 2;
    const topY = Math.sin(angle * i) * radius + windowHeight / 2 - squareSize / 2;

    squareLeft.setAttribute('style', `
        position: fixed;
        left: ${leftX}px;
        top: ${topY}px;
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
    squareLeft.setAttribute('class', 'square');

    // Right side shape (mirrored)
    const squareRight = document.createElement('div');
    const rightX = windowWidth - 200 - Math.cos(angle * i) * radius - squareSize / 2;

    squareRight.setAttribute('style', `
        position: fixed;
        left: ${rightX}px;
        top: ${topY}px;
        width: ${isExpanding ? squareSize * Math.random(0.5, 1.5) : squareSize}px;
        height: ${isExpanding ? squareSize * Math.random(0.5, 1.5) : squareSize}px;
        border: 1px solid ${borderColor};
        background-color: #1c1c1c;
        touch-action: none;
        z-index: 0;
        pointer-events: none;
        ${isRotating ? `transform: rotate(${-angle*i}deg)` : ''}
        ${isCircles ? 'border-radius: 25px;': ''}
    `);
    squareRight.setAttribute('class', 'square');
    
    document.body.appendChild(squareLeft);
    document.body.appendChild(squareRight);

    // Return both as an object so we can control them together
    return { left: squareLeft, right: squareRight };
}

