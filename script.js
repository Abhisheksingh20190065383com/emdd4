const viewer = document.getElementById("viewer");

function setView(position) {
  switch (position) {
    case "front":
      viewer.cameraOrbit = "0deg 90deg 2.5m";
      break;
    case "back":
      viewer.cameraOrbit = "180deg 90deg 2.5m";
      break;
    case "left":
      viewer.cameraOrbit = "-90deg 90deg 2.5m";
      break;
    case "right":
      viewer.cameraOrbit = "90deg 90deg 2.5m";
      break;
  }
}

function toggleRotation() {
  if (viewer.autoRotate) {
    viewer.autoRotate = false;
  } else {
    viewer.autoRotate = true;
  }
}