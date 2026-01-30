const popoverTrigger = document.querySelector(".popover-trigger");
const popover = document.querySelector(".popover");

// get rects
const triggerRect = popoverTrigger.getBoundingClientRect();
const popoverRect = popover.getBoundingClientRect();

// popover is positioned relative to its offset parent
const offsetParent = popover.offsetParent;
const parentRect = offsetParent.getBoundingClientRect();

// center of trigger (viewport coordinates)
const triggerCenterX = (triggerRect.left + triggerRect.right) / 2;

// convert viewport → parent coordinates and center popover
const leftPosition =
  triggerCenterX - parentRect.left - popoverRect.width / 2;

// apply
popover.style.left = `${leftPosition}px`;
