// Get the element to display the current time
  const timeEl = document.getElementById("current-time");

  function updateTime() {
    const currentTime = Date.now();
    timeEl.textContent = currentTime + " ms";
  }

  // Run immediately
  updateTime();

  // Update every 1 second
  setInterval(updateTime, 1000);