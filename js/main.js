/* ============================================================
   main.js — Global State, Initialization & Module Wiring
   ============================================================ */

const App = {
  // ── State ──
  currentBg: 'transparent',
  currentFont: 'Latin Modern',
  currentFontWeight: 400,
  currentFontStyle: 'normal',
  scriptMode: false,

  // ── Module references (populated on init) ──
  fontManager: null,
  macroManager: null,
  preprocessor: null,

  init() {
    // Initialize sub-modules
    this.fontManager  = new FontManager();
    this.macroManager = new MacroManager();
    this.preprocessor = new Preprocessor();

    // Wire UI events (this also initializes SyntaxHighlight, QuickEdit, PreviewZoom)
    UIBindings.init();

    // Wait for MathJax
    if (window.MathJax && MathJax.startup) {
      MathJax.startup.promise.then(() => {
        Renderer.applyFontCSS(this.currentFont, this.currentFontWeight, this.currentFontStyle);
        SyntaxHighlight.update();
        Renderer.renderFormula();
      });
    } else {
      window.addEventListener('load', () => {
        Renderer.applyFontCSS(this.currentFont, this.currentFontWeight, this.currentFontStyle);
        SyntaxHighlight.update();
        Renderer.renderFormula();
      });
    }
  }
};

// Override scheduleRender at global scope for backward compat
function scheduleRender() {
  Renderer.scheduleRender();
}

// ── Kick off on DOM ready ──
document.addEventListener('DOMContentLoaded', () => App.init());
