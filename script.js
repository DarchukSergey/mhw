var lucy1_1 = document.getElementById('percent-value1_1');
var lucy1_2 = document.getElementById('percent-value1_2');
var lucy1_3 = document.getElementById('percent-value1_3');
var lucy2_1 = document.getElementById('percent-value2_1');
var lucy2_2 = document.getElementById('percent-value2_2');
var lucy2_3 = document.getElementById('percent-value2_3');
var lucy3_1 = document.getElementById('percent-value3_1');
var lucy3_2 = document.getElementById('percent-value3_2');
var lucy3_3 = document.getElementById('percent-value3_3');
var lucy4_1 = document.getElementById('percent-value4_1');
var lucy4_2 = document.getElementById('percent-value4_2');
var lucy4_3 = document.getElementById('percent-value4_3');
var lucy5_1 = document.getElementById('percent-value5_1');
var lucy5_2 = document.getElementById('percent-value5_2');
var lucy5_3 = document.getElementById('percent-value5_3');
var lucy6_1 = document.getElementById('percent-value6_1');
var lucy6_2 = document.getElementById('percent-value6_2');
var lucy6_3 = document.getElementById('percent-value6_3');
var lucy7_1 = document.getElementById('percent-value7_1');
var lucy7_2 = document.getElementById('percent-value7_2');
var lucy7_3 = document.getElementById('percent-value7_3');


var bar1_1 = new ProgressBar.SemiCircle('#percent-progress1_1', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar1_1) => {
    bar1_1.path.setAttribute('stroke', state.color);
    var value = Math.round(bar1_1.value() * 100);
    if (value === 0) {
      bar1_1.setText('');
    } else {
      bar1_1.setText(value+"%");
    }

    bar1_1.text.style.color = state.color;
    bar1_1.text.style.top = '100%';
    bar1_1.text.style.right = '100%';
    bar1_1.text.style.inset = '90%';
    bar1_1.text.style.paddingTop = '20px';
  }
});
bar1_1.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar1_1.text.style.fontSize = '20px';
bar1_1.text.style.fontWeight = '700';
bar1_1.text.style.lineHeight = '25px';
bar1_1.text.style.color = '#243838';

bar1_1.animate((lucy1_1.dataset.value/100));  // Number from 0.0 to 1.0

var bar1_2 = new ProgressBar.SemiCircle('#percent-progress1_2', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar1_2) => {
    bar1_2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar1_2.value() * 100);
    if (value === 0) {
      bar1_2.setText('');
    } else {
      bar1_2.setText(value+"%");
    }

    bar1_2.text.style.color = state.color;
    bar1_2.text.style.top = '100%';
    bar1_2.text.style.right = '100%';
    bar1_2.text.style.inset = '90%';
    bar1_2.text.style.paddingTop = '20px';
  }
});
bar1_2.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar1_2.text.style.fontSize = '20px';
bar1_2.text.style.fontWeight = '700';
bar1_2.text.style.lineHeight = '25px';
bar1_2.text.style.color = '#243838';

bar1_2.animate((lucy1_2.dataset.value/100));  // Number from 0.0 to 1.0

var bar1_3 = new ProgressBar.SemiCircle('#percent-progress1_3', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar1_3) => {
    bar1_3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar1_3.value() * 100);
    if (value === 0) {
      bar1_3.setText('');
    } else {
      bar1_3.setText(value+"%");
    }

    bar1_3.text.style.color = state.color;
    bar1_3.text.style.top = '100%';
    bar1_3.text.style.right = '100%';
    bar1_3.text.style.inset = '90%';
    bar1_3.text.style.paddingTop = '20px';
  }
});
bar1_3.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar1_3.text.style.fontSize = '20px';
bar1_3.text.style.fontWeight = '700';
bar1_3.text.style.lineHeight = '25px';
bar1_3.text.style.color = '#243838';

bar1_3.animate((lucy1_3.dataset.value/100));  // Number from 0.0 to 1.0

var bar2_1 = new ProgressBar.SemiCircle('#percent-progress2_1', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar2_1) => {
    bar2_1.path.setAttribute('stroke', state.color);
    var value = Math.round(bar2_1.value() * 100);
    if (value === 0) {
      bar2_1.setText('');
    } else {
      bar2_1.setText(value+"%");
    }

    bar2_1.text.style.color = state.color;
    bar2_1.text.style.top = '100%';
    bar2_1.text.style.right = '100%';
    bar2_1.text.style.inset = '90%';
    bar2_1.text.style.paddingTop = '20px';
  }
});
bar2_1.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar2_1.text.style.fontSize = '20px';
bar2_1.text.style.fontWeight = '700';
bar2_1.text.style.lineHeight = '25px';
bar2_1.text.style.color = '#243838';

bar2_1.animate((lucy2_1.dataset.value/100));  // Number from 0.0 to 1.0

var bar2_2 = new ProgressBar.SemiCircle('#percent-progress2_2', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar2_2) => {
    bar2_2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar2_2.value() * 100);
    if (value === 0) {
      bar2_2.setText('');
    } else {
      bar2_2.setText(value+"%");
    }

    bar2_2.text.style.color = state.color;
    bar2_2.text.style.top = '100%';
    bar2_2.text.style.right = '100%';
    bar2_2.text.style.inset = '90%';
    bar2_2.text.style.paddingTop = '20px';
  }
});
bar2_2.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar2_2.text.style.fontSize = '20px';
bar2_2.text.style.fontWeight = '700';
bar2_2.text.style.lineHeight = '25px';
bar2_2.text.style.color = '#243838';

bar2_2.animate((lucy2_2.dataset.value/100));  // Number from 0.0 to 1.0

var bar2_3 = new ProgressBar.SemiCircle('#percent-progress2_3', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar2_3) => {
    bar2_3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar2_3.value() * 100);
    if (value === 0) {
      bar2_3.setText('');
    } else {
      bar2_3.setText(value+"%");
    }

    bar2_3.text.style.color = state.color;
    bar2_3.text.style.top = '100%';
    bar2_3.text.style.right = '100%';
    bar2_3.text.style.inset = '90%';
    bar2_3.text.style.paddingTop = '20px';
  }
});
bar2_3.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar2_3.text.style.fontSize = '20px';
bar2_3.text.style.fontWeight = '700';
bar2_3.text.style.lineHeight = '25px';
bar2_3.text.style.color = '#243838';

bar2_3.animate((lucy2_3.dataset.value/100));  // Number from 0.0 to 1.0

var bar3_1 = new ProgressBar.SemiCircle('#percent-progress3_1', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar3_1) => {
    bar3_1.path.setAttribute('stroke', state.color);
    var value = Math.round(bar3_1.value() * 100);
    if (value === 0) {
      bar3_1.setText('');
    } else {
      bar3_1.setText(value+"%");
    }

    bar3_1.text.style.color = state.color;
    bar3_1.text.style.top = '100%';
    bar3_1.text.style.right = '100%';
    bar3_1.text.style.inset = '90%';
    bar3_1.text.style.paddingTop = '20px';
  }
});
bar3_1.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar3_1.text.style.fontSize = '20px';
bar3_1.text.style.fontWeight = '700';
bar3_1.text.style.lineHeight = '25px';
bar3_1.text.style.color = '#243838';

bar3_1.animate((lucy3_1.dataset.value/100));  // Number from 0.0 to 1.0

var bar3_2 = new ProgressBar.SemiCircle('#percent-progress3_2', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar3_2) => {
    bar3_2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar3_2.value() * 100);
    if (value === 0) {
      bar3_2.setText('');
    } else {
      bar3_2.setText(value+"%");
    }

    bar3_2.text.style.color = state.color;
    bar3_2.text.style.top = '100%';
    bar3_2.text.style.right = '100%';
    bar3_2.text.style.inset = '90%';
    bar3_2.text.style.paddingTop = '20px';
  }
});
bar3_2.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar3_2.text.style.fontSize = '20px';
bar3_2.text.style.fontWeight = '700';
bar3_2.text.style.lineHeight = '25px';
bar3_2.text.style.color = '#243838';

bar3_2.animate((lucy3_2.dataset.value/100));  // Number from 0.0 to 1.0

var bar3_3 = new ProgressBar.SemiCircle('#percent-progress3_3', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar3_3) => {
    bar3_3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar3_3.value() * 100);
    if (value === 0) {
      bar3_3.setText('');
    } else {
      bar3_3.setText(value+"%");
    }

    bar3_3.text.style.color = state.color;
    bar3_3.text.style.top = '100%';
    bar3_3.text.style.right = '100%';
    bar3_3.text.style.inset = '90%';
    bar3_3.text.style.paddingTop = '20px';
  }
});
bar3_3.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar3_3.text.style.fontSize = '20px';
bar3_3.text.style.fontWeight = '700';
bar3_3.text.style.lineHeight = '25px';
bar3_3.text.style.color = '#243838';

bar3_3.animate((lucy3_3.dataset.value/100));  // Number from 0.0 to 1.0

var bar4_1 = new ProgressBar.SemiCircle('#percent-progress4_1', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar4_1) => {
    bar4_1.path.setAttribute('stroke', state.color);
    var value = Math.round(bar4_1.value() * 100);
    if (value === 0) {
      bar4_1.setText('');
    } else {
      bar4_1.setText(value+"%");
    }

    bar4_1.text.style.color = state.color;
    bar4_1.text.style.top = '100%';
    bar4_1.text.style.right = '100%';
    bar4_1.text.style.inset = '90%';
    bar4_1.text.style.paddingTop = '20px';
  }
});
bar4_1.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar4_1.text.style.fontSize = '20px';
bar4_1.text.style.fontWeight = '700';
bar4_1.text.style.lineHeight = '25px';
bar4_1.text.style.color = '#243838';

bar4_1.animate((lucy4_1.dataset.value/100));  // Number from 0.0 to 1.0

var bar4_2 = new ProgressBar.SemiCircle('#percent-progress4_2', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar4_2) => {
    bar4_2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar4_2.value() * 100);
    if (value === 0) {
      bar4_2.setText('');
    } else {
      bar4_2.setText(value+"%");
    }

    bar4_2.text.style.color = state.color;
    bar4_2.text.style.top = '100%';
    bar4_2.text.style.right = '100%';
    bar4_2.text.style.inset = '90%';
    bar4_2.text.style.paddingTop = '20px';
  }
});
bar4_2.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar4_2.text.style.fontSize = '20px';
bar4_2.text.style.fontWeight = '700';
bar4_2.text.style.lineHeight = '25px';
bar4_2.text.style.color = '#243838';

bar4_2.animate((lucy4_2.dataset.value/100));  // Number from 0.0 to 1.0

var bar4_3 = new ProgressBar.SemiCircle('#percent-progress4_3', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar4_3) => {
    bar4_3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar4_3.value() * 100);
    if (value === 0) {
      bar4_3.setText('');
    } else {
      bar4_3.setText(value+"%");
    }

    bar4_3.text.style.color = state.color;
    bar4_3.text.style.top = '100%';
    bar4_3.text.style.right = '100%';
    bar4_3.text.style.inset = '90%';
    bar4_3.text.style.paddingTop = '20px';
  }
});
bar4_3.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar4_3.text.style.fontSize = '20px';
bar4_3.text.style.fontWeight = '700';
bar4_3.text.style.lineHeight = '25px';
bar4_3.text.style.color = '#243838';

bar4_3.animate((lucy4_3.dataset.value/100));  // Number from 0.0 to 1.0

var bar5_1 = new ProgressBar.SemiCircle('#percent-progress5_1', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar5_1) => {
    bar5_1.path.setAttribute('stroke', state.color);
    var value = Math.round(bar5_1.value() * 100);
    if (value === 0) {
      bar5_1.setText('');
    } else {
      bar5_1.setText(value+"%");
    }

    bar5_1.text.style.color = state.color;
    bar5_1.text.style.top = '100%';
    bar5_1.text.style.right = '100%';
    bar5_1.text.style.inset = '90%';
    bar5_1.text.style.paddingTop = '20px';
  }
});
bar5_1.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar5_1.text.style.fontSize = '20px';
bar5_1.text.style.fontWeight = '700';
bar5_1.text.style.lineHeight = '25px';
bar5_1.text.style.color = '#243838';

bar5_1.animate((lucy5_1.dataset.value/100));  // Number from 0.0 to 1.0

var bar5_2 = new ProgressBar.SemiCircle('#percent-progress5_2', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar5_2) => {
    bar5_2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar5_2.value() * 100);
    if (value === 0) {
      bar5_2.setText('');
    } else {
      bar5_2.setText(value+"%");
    }

    bar5_2.text.style.color = state.color;
    bar5_2.text.style.top = '100%';
    bar5_2.text.style.right = '100%';
    bar5_2.text.style.inset = '90%';
    bar5_2.text.style.paddingTop = '20px';
  }
});
bar5_2.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar5_2.text.style.fontSize = '20px';
bar5_2.text.style.fontWeight = '700';
bar5_2.text.style.lineHeight = '25px';
bar5_2.text.style.color = '#243838';

bar5_2.animate((lucy5_2.dataset.value/100));  // Number from 0.0 to 1.0

var bar5_3 = new ProgressBar.SemiCircle('#percent-progress5_3', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar5_3) => {
    bar5_3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar5_3.value() * 100);
    if (value === 0) {
      bar5_3.setText('');
    } else {
      bar5_3.setText(value+"%");
    }

    bar5_3.text.style.color = state.color;
    bar5_3.text.style.top = '100%';
    bar5_3.text.style.right = '100%';
    bar5_3.text.style.inset = '90%';
    bar5_3.text.style.paddingTop = '20px';
  }
});
bar5_3.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar5_3.text.style.fontSize = '20px';
bar5_3.text.style.fontWeight = '700';
bar5_3.text.style.lineHeight = '25px';
bar5_3.text.style.color = '#243838';

bar5_3.animate((lucy5_3.dataset.value/100));  // Number from 0.0 to 1.0

var bar6_1 = new ProgressBar.SemiCircle('#percent-progress6_1', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar6_1) => {
    bar6_1.path.setAttribute('stroke', state.color);
    var value = Math.round(bar6_1.value() * 100);
    if (value === 0) {
      bar6_1.setText('');
    } else {
      bar6_1.setText(value+"%");
    }

    bar6_1.text.style.color = state.color;
    bar6_1.text.style.top = '100%';
    bar6_1.text.style.right = '100%';
    bar6_1.text.style.inset = '90%';
    bar6_1.text.style.paddingTop = '20px';
  }
});
bar6_1.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar6_1.text.style.fontSize = '20px';
bar6_1.text.style.fontWeight = '700';
bar6_1.text.style.lineHeight = '25px';
bar6_1.text.style.color = '#243838';

bar6_1.animate((lucy6_1.dataset.value/100));  // Number from 0.0 to 1.0

var bar6_2 = new ProgressBar.SemiCircle('#percent-progress6_2', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar6_2) => {
    bar6_2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar6_2.value() * 100);
    if (value === 0) {
      bar6_2.setText('');
    } else {
      bar6_2.setText(value+"%");
    }

    bar6_2.text.style.color = state.color;
    bar6_2.text.style.top = '100%';
    bar6_2.text.style.right = '100%';
    bar6_2.text.style.inset = '90%';
    bar6_2.text.style.paddingTop = '20px';
  }
});
bar6_2.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar6_2.text.style.fontSize = '20px';
bar6_2.text.style.fontWeight = '700';
bar6_2.text.style.lineHeight = '25px';
bar6_2.text.style.color = '#243838';

bar6_2.animate((lucy6_2.dataset.value/100));  // Number from 0.0 to 1.0

var bar6_3 = new ProgressBar.SemiCircle('#percent-progress6_3', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar6_3) => {
    bar6_3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar6_3.value() * 100);
    if (value === 0) {
      bar6_3.setText('');
    } else {
      bar6_3.setText(value+"%");
    }

    bar6_3.text.style.color = state.color;
    bar6_3.text.style.top = '100%';
    bar6_3.text.style.right = '100%';
    bar6_3.text.style.inset = '90%';
    bar6_3.text.style.paddingTop = '20px';
  }
});
bar6_3.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar6_3.text.style.fontSize = '20px';
bar6_3.text.style.fontWeight = '700';
bar6_3.text.style.lineHeight = '25px';
bar6_3.text.style.color = '#243838';

bar6_3.animate((lucy6_3.dataset.value/100));  // Number from 0.0 to 1.0

var bar7_1 = new ProgressBar.SemiCircle('#percent-progress7_1', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar7_1) => {
    bar7_1.path.setAttribute('stroke', state.color);
    var value = Math.round(bar7_1.value() * 100);
    if (value === 0) {
      bar7_1.setText('');
    } else {
      bar7_1.setText(value+"%");
    }

    bar7_1.text.style.color = state.color;
    bar7_1.text.style.top = '100%';
    bar7_1.text.style.right = '100%';
    bar7_1.text.style.inset = '90%';
    bar7_1.text.style.paddingTop = '20px';
  }
});
bar7_1.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar7_1.text.style.fontSize = '20px';
bar7_1.text.style.fontWeight = '700';
bar7_1.text.style.lineHeight = '25px';
bar7_1.text.style.color = '#243838';

bar7_1.animate((lucy7_1.dataset.value/100));  // Number from 0.0 to 1.0

var bar7_2 = new ProgressBar.SemiCircle('#percent-progress7_2', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar7_2) => {
    bar7_2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar7_2.value() * 100);
    if (value === 0) {
      bar7_2.setText('');
    } else {
      bar7_2.setText(value+"%");
    }

    bar7_2.text.style.color = state.color;
    bar7_2.text.style.top = '100%';
    bar7_2.text.style.right = '100%';
    bar7_2.text.style.inset = '90%';
    bar7_2.text.style.paddingTop = '20px';
  }
});
bar7_2.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar7_2.text.style.fontSize = '20px';
bar7_2.text.style.fontWeight = '700';
bar7_2.text.style.lineHeight = '25px';
bar7_2.text.style.color = '#243838';

bar7_2.animate((lucy7_2.dataset.value/100));  // Number from 0.0 to 1.0

var bar7_3 = new ProgressBar.SemiCircle('#percent-progress7_3', {
  strokeWidth: 5,
  color: 'url(#gradient)',
  trailColor: '#EEEEEE',
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  
  // Set default step function for all animate calls
  step: (state, bar7_3) => {
    bar7_3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar7_3.value() * 100);
    if (value === 0) {
      bar7_3.setText('');
    } else {
      bar7_3.setText(value+"%");
    }

    bar7_3.text.style.color = state.color;
    bar7_3.text.style.top = '100%';
    bar7_3.text.style.right = '100%';
    bar7_3.text.style.inset = '90%';
    bar7_3.text.style.paddingTop = '20px';
  }
});
bar7_3.text.style.fontFamily = '"Onest", Helvetica, sans-serif';
bar7_3.text.style.fontSize = '20px';
bar7_3.text.style.fontWeight = '700';
bar7_3.text.style.lineHeight = '25px';
bar7_3.text.style.color = '#243838';

bar7_3.animate((lucy7_3.dataset.value/100));  // Number from 0.0 to 1.0