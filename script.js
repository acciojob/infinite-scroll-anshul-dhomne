const list = document.getElementById('infinite-list');
let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Infinite scroll logic
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;

  if (scrollTop + windowHeight >= bodyHeight - 10) {
    addItems(2); // Add 2 more items
  }
});
