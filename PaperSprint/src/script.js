document.addEventListener('DOMContentLoaded', () => {
  const fileUpload = document.getElementById('file-upload');
  const fileNameDisplay = document.getElementById('file-name');
  const placeOrderBtn = document.getElementById('place-order-btn');
  const statusSection = document.getElementById('status-section');
  const costDisplay = document.getElementById('cost');

  const options = {
    copies: document.getElementById('copies'),
    binding: document.getElementById('binding'),
    sided: document.getElementById('sided'),
    color: document.getElementById('color'),
  };

  let fileIsUploaded = false;

  // --- Event Listeners ---
  fileUpload.addEventListener('change', () => {
    if (fileUpload.files.length > 0) {
        fileNameDisplay.textContent = fileUpload.files[0].name;
        fileIsUploaded = true;
        togglePlaceOrderButton();
    }
  });

  Object.values(options).forEach(option => {
    option.addEventListener('change', calculateCost);
  });

  placeOrderBtn.addEventListener('click', placeOrder);

  // --- Functions ---
  function togglePlaceOrderButton() {
    placeOrderBtn.disabled = !fileIsUploaded;
  }

  function calculateCost() {
    const copies = parseInt(options.copies.value);
    const isColor = options.color.value === 'color';
    const isSingleSided = options.sided.value === 'single';

    let baseCost = isColor ? 30 : 20;
    if (isSingleSided) {
        baseCost *= 1.8; // 10% discount for double-sided
    }
      
    const totalCost = baseCost * copies;
    costDisplay.innerHTML = `Rs.${totalCost.toFixed(2)}`;
  }

  function placeOrder() {
    statusSection.classList.remove('hidden');
    statusSection.scrollIntoView({ behavior: 'smooth' });
    startCountdown(15); // 15 Sec
    updateStatus();
  }

  function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const countdownEl = document.getElementById('countdown');

    const interval = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      countdownEl.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        clearInterval(interval);
        countdownEl.textContent = "Delivered!";
      }
    }, 1000);
  }

  function updateStatus() {
    const progressBar = document.getElementById('progress-bar');
    const statuses = ['status-printing', 'status-pickup', 'status-enroute', 'status-delivered'];
    let currentStatusIndex = 0;

    progressBar.style.width = '25%';
    document.getElementById(statuses[0]).classList.add('font-bold');

    const statusInterval = setInterval(() => {
      currentStatusIndex++;
      if (currentStatusIndex < statuses.length) {
        // Update progress bar
        const progress = (currentStatusIndex + 1) * 25;
        progressBar.style.width = `${progress}%`;

        // Bold the current status
        document.getElementById(statuses[currentStatusIndex - 1]).classList.remove('font-bold');
        document.getElementById(statuses[currentStatusIndex]).classList.add('font-bold');
        } else {
              clearInterval(statusInterval);
              progressBar.style.width = '100%';
          }
      }, 4000); // Update status every 15 seconds for simulation
  }

  // Initial calculation
  calculateCost();
});
