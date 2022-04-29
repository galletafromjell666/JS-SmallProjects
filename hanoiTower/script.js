let disks = document.querySelectorAll(".disk");
var stacks = document.querySelectorAll(".stack");

disks.forEach((disk) => {
  disk.addEventListener("dragstart", () => {
    disk.classList.add("dragging");
  });

  disk.addEventListener("dragend", () => {
    disk.classList.remove("dragging");
  });
});

stacks.forEach((stack) => {
  stack.addEventListener("dragenter", (e) => {
    stacks = document.querySelectorAll(".stack");
    e.preventDefault();
    const drag = document.querySelector(".dragging");
    let diskstack = stack.querySelectorAll(".disk:not(.dragging)");
    console.log(diskstack);
    if (diskstack.length == 0) {
      stack.prepend(drag);
    } else {
      let lastDiskNumber = Number(
        diskstack[0].className.split(" ")[1].charAt(1)
      );
      let dragNumber = Number(drag.className.split(" ")[1].charAt(1));

      if (dragNumber < lastDiskNumber) {
        stack.prepend(drag);
      } else {
      }
    }
  });
});

let stackContainers = document.querySelectorAll(".container-stack");

stackContainers.forEach((stackContainer) => {
  stackContainer.addEventListener("mouseenter", () => {
    let stackingDisks = stackContainer.querySelectorAll(".disk");
    if (stackingDisks.length >= 1) {
      stackingDisks.forEach((stackingDisk) => {
        stackingDisk.setAttribute("draggable", false);
      });
      stackingDisks[0].setAttribute("draggable", true);
    }
  });
});
