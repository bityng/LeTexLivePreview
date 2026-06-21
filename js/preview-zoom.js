/* ============================================================
   preview-zoom.js — Preview Image Click-to-Zoom (Lightbox)
   ============================================================ */

const PreviewZoom = {

  scale: 2.5,
  translateX: 0,
  translateY: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  lastTranslateX: 0,
  lastTranslateY: 0,

  init() {
    const overlay = document.getElementById('zoomOverlay');
    const previewWrap = document.getElementById('previewWrap');
    const zoomContent = document.getElementById('zoomContent');
    const zoomRender = document.getElementById('zoomRender');
    const zoomScaleInfo = document.getElementById('zoomScaleInfo');
    const zoomClose = document.getElementById('zoomClose');

    if (!overlay || !previewWrap) return;

    // Click preview to open
    previewWrap.addEventListener('click', (e) => {
      // Don't open if error or nothing rendered
      const formulaRender = document.getElementById('formula-render');
      if (!formulaRender.querySelector('svg')) return;
      this.open();
    });

    // Close button
    zoomClose.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });

    // Click overlay background to close
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });

    // Keyboard: ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        this.close();
      }
    });

    // Mouse wheel zoom
    zoomContent.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.3 : 0.3;
      this.scale = Math.max(0.5, Math.min(8, this.scale + delta));
      this._applyTransform();
      zoomScaleInfo.textContent = Math.round(this.scale * 100) + '%';
    }, { passive: false });

    // Drag to pan
    zoomContent.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
      this.lastTranslateX = this.translateX;
      this.lastTranslateY = this.translateY;
      zoomContent.style.cursor = 'grabbing';
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      this.translateX = this.lastTranslateX + (e.clientX - this.dragStartX);
      this.translateY = this.lastTranslateY + (e.clientY - this.dragStartY);
      this._applyTransform();
    });

    window.addEventListener('mouseup', () => {
      if (this.isDragging) {
        this.isDragging = false;
        zoomContent.style.cursor = 'default';
      }
    });

    // Double-click to reset
    zoomContent.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.scale = 2.5;
      this.translateX = 0;
      this.translateY = 0;
      this._applyTransform();
      zoomScaleInfo.textContent = '250%';
    });
  },

  open() {
    const overlay = document.getElementById('zoomOverlay');
    const zoomRender = document.getElementById('zoomRender');
    const zoomScaleInfo = document.getElementById('zoomScaleInfo');
    const formulaRender = document.getElementById('formula-render');

    const svgEl = formulaRender.querySelector('svg');
    if (!svgEl) return;

    // Clone SVG to zoom render
    const clone = svgEl.cloneNode(true);
    // Apply explicit font size to work standalone
    const fontSizeEl = document.getElementById('fontSize');
    clone.style.fontSize = (fontSizeEl ? parseInt(fontSizeEl.value) * 2.5 : 90) + 'px';
    clone.style.maxWidth = '100%';
    clone.style.maxHeight = '100%';

    zoomRender.innerHTML = '';
    zoomRender.appendChild(clone);

    this.scale = 2.5;
    this.translateX = 0;
    this.translateY = 0;
    this._applyTransform();
    zoomScaleInfo.textContent = '250%';

    overlay.classList.add('active');
  },

  close() {
    const overlay = document.getElementById('zoomOverlay');
    overlay.classList.remove('active');
  },

  _applyTransform() {
    const zoomRender = document.getElementById('zoomRender');
    zoomRender.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
    zoomRender.style.transformOrigin = 'center center';
  }
};
