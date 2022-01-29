console.log("start work");
document.addEventListener("DOMContentLoaded", function () {
  console.log();

  if (window.innerWidth < 1024) {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("accordian_title")) {
        let contentEl = e.target
          .closest(".accordian")
          .querySelector(".accordian_content");
        if (contentEl) {
          contentEl.classList.toggle("toggled");
          contentEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
            // inline: "nearest",
          });
        }
      }
    });
    // $(".accordian .accordian_title").click(function () {
    //   $(this).parent().find(".accordian_content").slideToggle();
    //   $(this).parent().siblings().find(".accordian_content").slideUp();
    //   $(this).parent().toggleClass("active_header");
    //   $(this).parent().siblings().removeClass("active_header");
    // });
  }

  // Аналог $(document).ready(function(){
  // Если должен быть найден один элемент
  if (
    (e = document.querySelector(
      "#form_error_message_frontend + div > div:last-child label"
    )) !== null
  )
    e.classList.add("last"); // Аналог выборки и присвоения класса
  // Если элементов будет много
  Array.prototype.forEach.call(
    document.querySelectorAll(
      "#form_error_message_frontend + div > div:last-child label"
    ),
    function (e) {
      e.classList.add("last");
    }
  );
});
