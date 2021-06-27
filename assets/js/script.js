let my_list = document.getElementById("my_list");
let btn = document.getElementById("btn");

btn.onclick = function () {
  if (my_list.paused) {
    my_list.play();
    btn.src = "./assets/images/pause.png";
  } else {
    my_list.pause();
    btn.src = "./assets/images/play.png";
  }
};
