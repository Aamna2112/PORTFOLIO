(() => {
  const hero = document.querySelector('.hero');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const raw = { x: -999, y: -999, radius: 0 };
  const smooth = { x: -999, y: -999, radius: 0 };
  const desktopRadius = 235;
  const mobileRadius = 150;
  const radiusForScreen = () => window.innerWidth <= 720 ? mobileRadius : desktopRadius;
  const setPoint = (x, y) => { const rect = hero.getBoundingClientRect(); raw.x = x - rect.left; raw.y = y - rect.top; };
  hero.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { setPoint(e.clientX, e.clientY); raw.radius = radiusForScreen(); }});
  hero.addEventListener('pointermove', e => { setPoint(e.clientX, e.clientY); if (e.pointerType === 'mouse') raw.radius = radiusForScreen(); });
  hero.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') raw.radius = 0; });
  hero.addEventListener('pointerdown', e => { setPoint(e.clientX, e.clientY); raw.radius = radiusForScreen(); });
  hero.addEventListener('pointerup', e => { if (e.pointerType !== 'mouse') raw.radius = 0; });
  function frame() {
    const p = reduced ? 1 : .14, r = reduced ? 1 : .12;
    smooth.x += (raw.x - smooth.x) * p; smooth.y += (raw.y - smooth.y) * p; smooth.radius += (raw.radius - smooth.radius) * r;
    hero.style.setProperty('--reveal-x', `${smooth.x}px`); hero.style.setProperty('--reveal-y', `${smooth.y}px`); hero.style.setProperty('--reveal-radius', `${smooth.radius}px`);
    requestAnimationFrame(frame);
  }
  frame();
})();
