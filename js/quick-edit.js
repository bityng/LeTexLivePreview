/* ============================================================
   quick-edit.js — Word-like Quick Formula Editing Toolbar
   ============================================================ */

const QuickEdit = {

  /** Initialize toolbar button event listeners */
  init() {
    document.querySelectorAll('.qeb-btn[data-insert]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.insert;
        this._handleAction(action, btn.dataset.before || '', btn.dataset.after || '');
      });
    });
  },

  _handleAction(action, before, after) {
    switch (action) {
      case 'frac':
        SyntaxHighlight.wrapOrInsert('\\frac{', '}{}');
        break;
      case 'sqrt':
        SyntaxHighlight.wrapOrInsert('\\sqrt{', '}');
        break;
      case 'nsqrt':
        SyntaxHighlight.wrapOrInsert('\\sqrt[', ']{}');
        break;
      case 'sup':
        SyntaxHighlight.wrapOrInsert('^{', '}');
        break;
      case 'sub':
        SyntaxHighlight.wrapOrInsert('_{', '}');
        break;
      case 'sum':
        SyntaxHighlight.insertAtCursor('\\sum_{}^{} ');
        break;
      case 'prod':
        SyntaxHighlight.insertAtCursor('\\prod_{}^{} ');
        break;
      case 'int':
        SyntaxHighlight.insertAtCursor('\\int_{}^{} ');
        break;
      case 'lim':
        SyntaxHighlight.insertAtCursor('\\lim_{} ');
        break;
      case 'leftright':
        SyntaxHighlight.wrapOrInsert('\\left( ', ' \\right)');
        break;
      case 'leftrightbracket':
        SyntaxHighlight.wrapOrInsert('\\left[ ', ' \\right]');
        break;
      case 'leftrightbrace':
        SyntaxHighlight.wrapOrInsert('\\left\\{ ', ' \\right\\}');
        break;
      case 'pmatrix':
        SyntaxHighlight.insertAtCursor('\\begin{pmatrix}\n  & \\\\\n  & \n\\end{pmatrix}');
        break;
      case 'bmatrix':
        SyntaxHighlight.insertAtCursor('\\begin{bmatrix}\n  & \\\\\n  & \n\\end{bmatrix}');
        break;
      case 'cases':
        SyntaxHighlight.insertAtCursor('\\begin{cases}\n   & \\\\\n   & \n\\end{cases}');
        break;
      case 'bar':
        SyntaxHighlight.wrapOrInsert('\\bar{', '}');
        break;
      case 'hat':
        SyntaxHighlight.wrapOrInsert('\\hat{', '}');
        break;
      case 'vec':
        SyntaxHighlight.wrapOrInsert('\\vec{', '}');
        break;
      case 'mathbb':
        SyntaxHighlight.wrapOrInsert('\\mathbb{', '}');
        break;
      case 'textcolor':
        SyntaxHighlight.wrapOrInsert('\\textcolor{red}{', '}');
        break;
      case 'cdot':
        SyntaxHighlight.insertAtCursor('\\cdot ');
        break;
      case 'times':
        SyntaxHighlight.insertAtCursor('\\times ');
        break;
      case 'pm':
        SyntaxHighlight.insertAtCursor('\\pm ');
        break;
      case 'alpha':
        SyntaxHighlight.insertAtCursor('\\alpha ');
        break;
      case 'beta':
        SyntaxHighlight.insertAtCursor('\\beta ');
        break;
      case 'gamma':
        SyntaxHighlight.insertAtCursor('\\gamma ');
        break;
      case 'delta':
        SyntaxHighlight.insertAtCursor('\\delta ');
        break;
      case 'pi':
        SyntaxHighlight.insertAtCursor('\\pi ');
        break;
      case 'sigma':
        SyntaxHighlight.insertAtCursor('\\sigma ');
        break;
      case 'omega':
        SyntaxHighlight.insertAtCursor('\\omega ');
        break;
      default:
        if (before || after) {
          SyntaxHighlight.wrapOrInsert(before, after);
        }
    }
  }
};
