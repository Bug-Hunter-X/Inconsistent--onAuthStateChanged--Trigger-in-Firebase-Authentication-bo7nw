// Original buggy code
firebase.auth().onAuthStateChanged((user) => {
  // ... process user state ...
});

// Improved code with debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const onAuthStateChangedDebounced = debounce((user) => {
  // ... process user state ...
}, 500); // 500ms debounce time

firebase.auth().onAuthStateChanged(onAuthStateChangedDebounced);
