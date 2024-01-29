const mainGlass = document.querySelector('.sum_water div:first-child');
const smallGlasses = document.querySelectorAll('.glasses_up div');
const goal = 2000; 
function updateMainGlass() {
  let totalFilled = 0;
  smallGlasses.forEach((glass) => {
    totalFilled += glass.dataset.position * 250;
  });
  const percentage = (totalFilled / goal) * 100;
  mainGlass.style.height = `${percentage}%`;
}
function handleGlassClick(event) {
  const clickedGlass = event.target;
  if (clickedGlass.tagName.toLowerCase() === 'div') {
    const currentPosition = parseInt(clickedGlass.dataset.position, 10);
    const newPosition = (currentPosition + 1) % 2;
    clickedGlass.dataset.position = newPosition;
    clickedGlass.classList.toggle('full', newPosition === 1);

    updateMainGlass();
  }
}
document.querySelector('.glasses_up').addEventListener('click', handleGlassClick);
updateMainGlass();
  