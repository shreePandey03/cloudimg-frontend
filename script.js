async function loadImages() {
  const response = await fetch("https://cloudimg-functions-f9gqcmgqbxakdfhb.swedencentral-01.azurewebsites.net/api/getMedia");
  const images = await response.json();

  const container = document.getElementById("images");
  container.innerHTML = "";

  images.forEach(img => {
    const image = document.createElement("img");
    image.src = img.filePath;
    image.width = 200;
    container.appendChild(image);
  });
}
