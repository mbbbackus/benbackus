export function generateSquaresInCircle(i, isRotating=false, isExpanding=false, isCircles=false, isFadeIn=false, isHexagon=false, isDiamond=false, container=null) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const squareSize = 50;
    const radius = 100;
    const isMobile = windowWidth < 768;

    const numSquares = 342;
    const angle = 360 / numSquares;

    // Faded dark gray color - slightly lighter than background
    const borderColor = isFadeIn 
        ? `rgba(60, 60, 60, ${(i / 300) % 1})` 
        : 'rgba(60, 60, 60, 1)';

    const topY = Math.sin(angle * i) * radius + windowHeight / 2 - squareSize / 2;
    
    // For diamonds, use random size multiplier
    const diamondSize = isDiamond ? squareSize * (0.5 + Math.random()) : squareSize;
    const expandedSize = isExpanding ? squareSize * (0.5 + Math.random()) : squareSize;
    const finalSize = isDiamond ? diamondSize : expandedSize;

    if (isMobile) {
        // Single centered shape on mobile
        const square = document.createElement('div');
        const centerX = Math.cos(angle * i) * radius + windowWidth / 2 - squareSize / 2;

        square.setAttribute('style', `
            position: fixed;
            left: ${centerX}px;
            top: ${topY}px;
            width: ${(isExpanding || isDiamond) ? finalSize : squareSize}px;
            height: ${(isExpanding || isDiamond) ? finalSize : squareSize}px;
            border: 1px solid ${borderColor};
            background-color: #1c1c1c;
            touch-action: none;
            z-index: 0;
            pointer-events: none;
            ${isRotating ? `transform: rotate(${angle*i}deg)` : ''}
            ${isDiamond ? `transform: rotate(${45 + angle*i}deg)` : ''}
            ${isCircles ? 'border-radius: 25px;': ''}
            ${isHexagon ? 'clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);': ''}
        `);
        square.setAttribute('class', 'square');
        document.body.appendChild(square);

        return { left: square, right: null };
    }

    // Desktop: Left side shape
    const squareLeft = document.createElement('div');
    const leftX = Math.cos(angle * i) * radius + 200 - squareSize / 2;
    // Use different random size for each side on desktop
    const leftSize = isDiamond ? squareSize * (0.5 + Math.random()) : (isExpanding ? squareSize * (0.5 + Math.random()) : squareSize);

    squareLeft.setAttribute('style', `
        position: fixed;
        left: ${leftX}px;
        top: ${topY}px;
        width: ${leftSize}px;
        height: ${leftSize}px;
        border: 1px solid ${borderColor};
        background-color: #1c1c1c;
        touch-action: none;
        z-index: 0;
        pointer-events: none;
        ${isRotating && !isDiamond ? `transform: rotate(${angle*i}deg)` : ''}
        ${isDiamond ? `transform: rotate(${45 + angle*i}deg)` : ''}
        ${isCircles ? 'border-radius: 25px;': ''}
        ${isHexagon ? 'clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);': ''}
    `);
    squareLeft.setAttribute('class', 'square');

    // Desktop: Right side shape (mirrored)
    const squareRight = document.createElement('div');
    const rightX = windowWidth - 200 - Math.cos(angle * i) * radius - squareSize / 2;
    const rightSize = isDiamond ? squareSize * (0.5 + Math.random()) : (isExpanding ? squareSize * (0.5 + Math.random()) : squareSize);

    squareRight.setAttribute('style', `
        position: fixed;
        left: ${rightX}px;
        top: ${topY}px;
        width: ${rightSize}px;
        height: ${rightSize}px;
        border: 1px solid ${borderColor};
        background-color: #1c1c1c;
        touch-action: none;
        z-index: 0;
        pointer-events: none;
        ${isRotating && !isDiamond ? `transform: rotate(${-angle*i}deg)` : ''}
        ${isDiamond ? `transform: rotate(${45 - angle*i}deg)` : ''}
        ${isCircles ? 'border-radius: 25px;': ''}
        ${isHexagon ? 'clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);': ''}
    `);
    squareRight.setAttribute('class', 'square');
    
    document.body.appendChild(squareLeft);
    document.body.appendChild(squareRight);

    return { left: squareLeft, right: squareRight };
}

