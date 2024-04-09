const likes = document.querySelectorAll(".likes-number");

likes.forEach(function (like, index) {
  like.addEventListener("click", function () {
 likes=(likes[index].innerText)+1;
  });
});
