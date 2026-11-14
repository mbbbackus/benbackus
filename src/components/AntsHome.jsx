import React, { useEffect, useRef, useState } from "react";
import '../styles/AntsHome.css';
import resume from "../media/writing/Backus_Resume_2024.pdf";

// Langton's ants: each ant turns right on an empty cell and left on a marked one, flipping it as it leaves.
// Marked cells fade with a long tail: brightness = (1 + age/HALF)^-POWER, cut to black below CUTOFF.
const CELL = 3, ANTS = 5, STEPS = 150, HALF = 4, POWER = 1, CUTOFF = .04;
const D = [[0, -1], [1, 0], [0, 1], [-1, 0]];

function hsl(h, s, l) {
  const f = n => { const k = (n + h / 30) % 12; return l - s * Math.min(l, 1 - l) * Math.max(-1, Math.min(k - 3, 9 - k, 1)); };
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}

function AntsHome() {
  const canvas = useRef(null);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const cv = canvas.current, g = cv.getContext('2d');
    let W, H, G, born, owner, ants, img, t0, raf, width, steps;

    function init() {
      width = window.innerWidth;
      W = Math.floor(cv.clientWidth / CELL); H = Math.floor(cv.clientHeight / CELL); cv.width = W; cv.height = H;
      // smaller screens get proportionally fewer steps so they fill up at the same pace as a laptop screen
      steps = Math.max(30, Math.round(STEPS * W * H / (480 * 300)));
      G = new Uint8Array(W * H); born = new Float32Array(W * H); owner = new Uint8Array(W * H);
      img = g.createImageData(W, H); t0 = performance.now();
      ants = Array.from({ length: ANTS }, (_, k) => ({
        x: Math.floor(W / 2 + (Math.random() - .5) * W * .4), y: Math.floor(H / 2 + (Math.random() - .5) * H * .4),
        d: Math.floor(Math.random() * 4), rgb: hsl(k * 360 / ANTS, .8, .6),
      }));
    }

    function frame() {
      const now = (performance.now() - t0) / 1000;
      for (let n = 0; n < steps; n++) for (let k = 0; k < ants.length; k++) {
        const a = ants[k], i = a.y * W + a.x;
        if (G[i]) { a.d = (a.d + 3) % 4; G[i] = 0; } else { a.d = (a.d + 1) % 4; G[i] = 1; born[i] = now; owner[i] = k; }
        a.x = (a.x + D[a.d][0] + W) % W; a.y = (a.y + D[a.d][1] + H) % H;
      }
      const d = img.data;
      for (let i = 0; i < W * H; i++) {
        let b = G[i] ? Math.pow(1 + (now - born[i]) / HALF, -POWER) : 0;
        b = b < CUTOFF ? 0 : (b - CUTOFF) / (1 - CUTOFF);
        const c = ants[owner[i]].rgb, j = i * 4;
        d[j] = c[0] * b; d[j + 1] = c[1] * b; d[j + 2] = c[2] * b; d[j + 3] = 255;
      }
      g.putImageData(img, 0, 0);
      raf = requestAnimationFrame(frame);
    }

    // phones fire resize when the address bar slides; only restart when the width really changes
    const onResize = () => { if (window.innerWidth !== width) init(); };
    init(); frame();
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <div className="ants-home" onClick={() => setShowInfo(s => !s)}>
      <canvas ref={canvas} className="ants-canvas" />
      <header className={`ants-info${showInfo ? '' : ' hidden'}`} onClick={e => e.stopPropagation()}>
        <h1>Ben Backus</h1>
        <nav>
          <a href={resume}>Resume</a>
          <a href="https://x.com/BenBackus4">Twitter</a>
          <a href="https://www.linkedin.com/in/ben-backus-72845492/">LinkedIn</a>
        </nav>
      </header>
    </div>
  );
}

export default AntsHome;
