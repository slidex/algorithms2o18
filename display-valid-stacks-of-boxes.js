/*
 * display-valid-stacks-of-boxes.js
 * Displays valid stacks used by a list of boxes.
 * A stack is valid if non-null boxes are put on top of each other and
 * box sizes grow from top to bottom.
 */
var boxes = [null, 4, null, -5, 5, null, null, 6, null];

class State {  
  constructor(boxes) {
    this.boxes = boxes;
    this.used = [];
  }
  
  use(i) {
    this.used[i] = true;
  }
  
  unuse(i) {
    this.used[i] = false;
  }
  
  numBoxes() {
    return this.boxes.length;
  }

  isValidWith(index) {
    var box = this.boxes[index];
    if (box === null) {
      return false;
    }
    for (var i = index - 1; i >= 0; i--) {
      if (!this.used[i]) {
        continue;
      }
      if (typeof this.boxes[i] === 'number' && this.boxes[i] >= box) {
        return false;
      }
    }
    return true;
  }
  
  toString() {
    var result = '( ';
    for (var i = 0 ; i < this.boxes.length; i++) {
      if (this.used[i]) {
        result += this.boxes[i] + ' ';
      }
    }
    result += ')';
    return result;
  }
}

function displayStacks(boxes) {
  var state = new State(boxes);
  process(state, 0);
}

function process(state, index) {
  if (index === state.numBoxes()) {
    console.log(state.toString());
    return;
  }
  if (state.isValidWith(index)) {
    state.use(index);
    process(state, index + 1);
    state.unuse(index);
  }
  process(state, index + 1);
}

displayStacks(boxes);
