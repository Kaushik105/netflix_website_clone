let svgs = Array.from(document.querySelectorAll(".faqbox svg"));

svgs.forEach((e) => {
  e.addEventListener("click", (e) => {
    const siblingDiv = e.target.parentNode.parentNode.children[1]; // Gets the second child of grandparent
    if (Array.from(siblingDiv.classList)[0] === "infoTile") {
      if (siblingDiv.style.display === "block") {
        siblingDiv.style.display = "none";
        siblingDiv.style.opacity = 0;
      } else {
        siblingDiv.style.opacity = 1;
        siblingDiv.style.display = "block";
      }
    }
  });
});
