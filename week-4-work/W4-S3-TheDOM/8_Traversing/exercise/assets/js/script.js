// select all <li> elements
var liEls = document.querySelectorAll('li');

// change the color of all <li> elements to blue
for (var i = 0; i < liEls.length; i++) {
  liEls[i].style.color = 'blue';
}

// select the first <h2> inside a widget
var firstWidgetHeadingEl = document.querySelector('.widget h2');

// change the text of the <h2> to "Reports"
if (firstWidgetHeadingEl) {
  firstWidgetHeadingEl.textContent = 'Reports';
}

// select all widgets
var widgetEls = document.querySelectorAll('.widget');

// change the <p> tag in the third widget
if (widgetEls.length >= 3) {
  var thirdWidgetParagraphEl = widgetEls[2].querySelector('p');
  if (thirdWidgetParagraphEl) {
    thirdWidgetParagraphEl.textContent = 'Optimise performance metrics here.';
  }
}

