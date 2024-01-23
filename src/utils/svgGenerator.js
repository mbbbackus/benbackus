export function generateSquaresInCircle(i, isRotating=false, isExpanding=false, isCircles=false, isFadeIn=false) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const squareSize = 50;
    const radius = 100;

    const numSquares = 342;
    const angle = 360 / numSquares;
    // const angle = 1.051;

    const square = document.createElement('div');
    const left = Math.cos(angle * i) * radius + windowWidth / 2 - squareSize / 2;
    const top = Math.sin(angle * i) * radius + windowHeight / 2 - squareSize / 2;
    // console.log('left', left, 'top', top, 'angle * i', angle * i);

    square.setAttribute('style', `
        position: fixed;
        left: ${left}px;
        top: ${top}px;
        width: ${isExpanding ? squareSize * Math.random(0.5, 1.5) : squareSize}px;
        height: ${isExpanding ? squareSize * Math.random(0.5, 1.5) : squareSize}px;
        border: 1px solid rgba(255, 255, 255, ${isFadeIn ? i / 300 % 1 : 1});
        background-color: rgb(20, 20, 20);
        touch-action: none;
        ${isRotating ? `transform: rotate(${angle*i}deg)` : ''}
        ${isCircles ? 'border-radius: 25px;': ''}
    `);
    square.setAttribute('class', 'square')
    document.body.appendChild(square);

    return square;
}

