  const leftBtn = document.querySelector("#left");
  const rightBtn = document.querySelector("#right");
  const items = document.querySelector("#items");
  const computedStyles = getComputedStyle(items);

  

  leftBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log("Click");
    
    let currentRight = parseInt(computedStyles.right);

    if (currentRight >= 0) {
      items.style.right = currentRight - 100 + 'px';
    }
    console.log(currentRight);
  })

  rightBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log("Click");
    let currentRight = parseInt(computedStyles.right);

    if(currentRight <= 400) {
      items.style.right = currentRight + 100 + 'px';
      console.log(currentRight);
    }
  })