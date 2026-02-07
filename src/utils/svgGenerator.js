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

    if (isMobile) {
        // Single centered shape on mobile
        const square = document.createElement('div');
        const centerX = Math.cos(angle * i) * radius + windowWidth / 2 - squareSize / 2;
        
        // For rectangles (isExpanding): different width and height with high variance
        const expandWidth = isExpanding ? squareSize * (0.2 + Math.random() * 2.0) : squareSize;
        const expandHeight = isExpanding ? squareSize * (0.2 + Math.random() * 2.0) : squareSize;
        
        // For diamonds/kites (isDiamond): different width and height for kite/parallelogram shapes
        const diamondWidth = isDiamond ? squareSize * (0.3 + Math.random() * 1.0) : squareSize;
        const diamondHeight = isDiamond ? squareSize * (0.5 + Math.random() * 1.5) : squareSize;
        
        const finalWidth = isDiamond ? diamondWidth : (isExpanding ? expandWidth : squareSize);
        const finalHeight = isDiamond ? diamondHeight : (isExpanding ? expandHeight : squareSize);

        square.setAttribute('style', `
            position: fixed;
            left: ${centerX}px;
            top: ${topY}px;
            width: ${finalWidth}px;
            height: ${finalHeight}px;
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
        square.setAttribute('class', 'square');
        document.body.appendChild(square);

        return { left: square, right: null };
    }

    // Desktop: Left side shape
    const squareLeft = document.createElement('div');
    const leftX = Math.cos(angle * i) * radius + 200 - squareSize / 2;
    
    // For rectangles (isExpanding): different width and height with high variance
    const leftExpandWidth = isExpanding ? squareSize * (0.2 + Math.random() * 2.0) : squareSize;
    const leftExpandHeight = isExpanding ? squareSize * (0.2 + Math.random() * 2.0) : squareSize;
    
    // For diamonds/kites (isDiamond): different width and height
    const leftDiamondWidth = isDiamond ? squareSize * (0.3 + Math.random() * 1.0) : squareSize;
    const leftDiamondHeight = isDiamond ? squareSize * (0.5 + Math.random() * 1.5) : squareSize;
    
    const leftWidth = isDiamond ? leftDiamondWidth : (isExpanding ? leftExpandWidth : squareSize);
    const leftHeight = isDiamond ? leftDiamondHeight : (isExpanding ? leftExpandHeight : squareSize);

    squareLeft.setAttribute('style', `
        position: fixed;
        left: ${leftX}px;
        top: ${topY}px;
        width: ${leftWidth}px;
        height: ${leftHeight}px;
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
    
    // For rectangles (isExpanding): different width and height with high variance
    const rightExpandWidth = isExpanding ? squareSize * (0.2 + Math.random() * 2.0) : squareSize;
    const rightExpandHeight = isExpanding ? squareSize * (0.2 + Math.random() * 2.0) : squareSize;
    
    // For diamonds/kites (isDiamond): different width and height
    const rightDiamondWidth = isDiamond ? squareSize * (0.3 + Math.random() * 1.0) : squareSize;
    const rightDiamondHeight = isDiamond ? squareSize * (0.5 + Math.random() * 1.5) : squareSize;
    
    const rightWidth = isDiamond ? rightDiamondWidth : (isExpanding ? rightExpandWidth : squareSize);
    const rightHeight = isDiamond ? rightDiamondHeight : (isExpanding ? rightExpandHeight : squareSize);

    squareRight.setAttribute('style', `
        position: fixed;
        left: ${rightX}px;
        top: ${topY}px;
        width: ${rightWidth}px;
        height: ${rightHeight}px;
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
