const steps = document.querySelectorAll('.out');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

let currentStep = 0;

function enableButtons() {
  previousButton.disabled = currentStep === 0;
  nextButton.disabled = currentStep === steps.length - 1;
}

nextButton.addEventListener('click', () => {
  steps[currentStep].classList.remove('active');
  currentStep++;
  if (currentStep === steps.length) {
    nextButton.disabled = true;
    return;
  }
  steps[currentStep].classList.add('active');
  previousButton.disabled = false;
  enableButtons();
});

previousButton.addEventListener('click', () => {
  steps[currentStep].classList.remove('active');
  currentStep--;
  if (currentStep === -1) {
    previousButton.disabled = true;
    return;
  }
  steps[currentStep].classList.add('active');
  nextButton.disabled = false;
  enableButtons();
});

enableButtons();