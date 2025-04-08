let svgs = Array.from(document.querySelectorAll(".faqbox svg"));
const otherTiles = Array.from(document.querySelectorAll(".infoTile"));

svgs.forEach((svg) => {
  svg.style.transform = "rotateZ(0deg)";
  svg.addEventListener("click", (e) => {
    const siblingDiv = e.target.parentNode.parentNode.children[1]; // Gets the second child of grandparent
    otherTiles.forEach((item) => {
      if (siblingDiv != item) {
        item.style.visibility = "hidden";
        item.style.position = "absolute";
        item.style.opacity = 0;
      }
    });

    if (siblingDiv) {
      if (siblingDiv.style.visibility !== "visible") {
        siblingDiv.style.opacity = 1;
        siblingDiv.style.position = "static";
        siblingDiv.style.visibility = "visible";
        e.target.style.transform = "rotate(45deg)";
      } else {
        siblingDiv.style.visibility = "hidden";
        siblingDiv.style.position = "absolute";
        siblingDiv.style.opacity = 0;
        e.target.style.transform = "rotate(0deg)";
      }
    }
  });
});
