const sortSelect = document.querySelector("#sort-select")


sortSelect.addEventListener("change", () => {
  switch (sortSelect.value) {
    case "titre":
      console.log("titre");
      break;
    case "date":
      console.log("date");
      break;
    default:
      console.log("popularité");
      break;
  }
})
