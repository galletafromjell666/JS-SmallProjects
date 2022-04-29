let disks = document.querySelectorAll(".disk");

disks.forEach((disk) => {
  disk.addEventListener("dragstart", () => {
    disk.classList.add("dragging");
  });

  disk.addEventListener("dragend", () => {
    disk.classList.remove("dragging");
  });
});

let stacks = document.querySelectorAll(".stack");

stacks.forEach((stack) => {
  let prepend = false;
  stack.addEventListener("dragover", (e) => {
    e.preventDefault();
    const drag = document.querySelector(".dragging");
    let diskstack = stack.querySelectorAll(".disk");
    let lastDisk = diskstack[1];
    if (typeof lastDisk != "undefined") {
      console.log("SUCESS getting lastdisk on stack ");
      let lastDiskOnStackNumber = Number(
        lastDisk.className.split(" ")[1].charAt(1)
      );
      console.log(`Last disk on stack number == ${lastDiskOnStackNumber}`);
      let dragDiskNumber = drag.className.split(" ")[1].charAt(1);
      console.log(`disk being dragged numbebr == ${dragDiskNumber}`);

      if (dragDiskNumber < lastDiskOnStackNumber) {
        console.log("is safe to prepend here");
        prepend = true;
        stack.prepend(drag);
      } else {
        console.log("you can't to prepend here");
        let bf = document.querySelector(".header");
        console.log(bf);
        bf.appendChild(drag);
        prepend = false;
      }
    } else {
      console.log(
        `lasdisk on stack UNDEFINED, probably the stack is empty, so you can prepend here :)`
      );
      prepend = true;
      stack.prepend(drag);
    }

    console.log(`prepend value ${prepend}`);
    if (prepend) {
    } else {
      console.log("Read the rules please");
    }
  });
});
