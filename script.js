// Get the element to display the current time
  const timeEl = document.getElementById("current-time");
  const urlInput = document.getElementById("urlInput");
  const fileInput = document.getElementById("fileInput");
  const avatar = document.getElementById("avatar");

  function updateTime() {
    const currentTime = Date.now();
    timeEl.textContent = currentTime + " ms";
  }

  // Run immediately
  updateTime();

  // Update every 1 second
  setInterval(updateTime, 1000);
  

// Default image (optional fallback)
// const defaultImage = avatar.src;

// // Handle URL input
// urlInput.addEventListener("input", (e) => {
//   const url = e.target.value.trim();

//   if (url) {
//     avatar.src = url;
//   } else {
//     avatar.src = defaultImage;
//   }
// });

// Handle file upload
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file && file.type.startsWith("image/")) {
    const imageUrl = URL.createObjectURL(file);
    avatar.src = imageUrl;
  }
});