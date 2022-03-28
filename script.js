var imageUrls = ["IMAGE-2.png", "IMAGE-3.png", "IMAGE-4.png"];
function changeImage() {
  var img = document.getElementById("image");
  var imageUrl = imageUrls.shift();
  img.src = imageUrl;
  imageUrls.push(imageUrl);
}