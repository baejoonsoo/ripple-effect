const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", (event) => {
  const { x, y, width, height } = btn1.getBoundingClientRect();
  const radius = Math.sqrt(width * width + height * height); // btn1의 대각선 길이 & after 원의 반지름 (피타고라스 정리 사용)

  btn1.style.setProperty("--diameter", radius * 2 + "px");

  const { clientX, clientY } = event;

  const left = ((clientX - x - radius) / width) * 100 + "%";
  const top = ((clientY - y - radius) / height) * 100 + "%";

  btn1.style.setProperty("--left", left);
  btn1.style.setProperty("--top", top);
  btn1.style.setProperty("--a", "");
  setTimeout(() => {
    btn1.style.setProperty("--a", "ripple-effect 500ms linear");
  });
});
