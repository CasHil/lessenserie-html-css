document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const boxCode = document.querySelector("#boxCode");
  const sliders = document.querySelectorAll('input[type="range"]');

  function updateBox(box) {
    const width = document.querySelector("#boxWidth").value;
    const height = document.querySelector("#boxHeight").value;
    const paddingTop = document.querySelector("#boxPaddingTop").value;
    const paddingRight = document.querySelector("#boxPaddingRight").value;
    const paddingBottom = document.querySelector("#boxPaddingBottom").value;
    const paddingLeft = document.querySelector("#boxPaddingLeft").value;
    const marginTop = document.querySelector("#boxMarginTop").value;
    const marginRight = document.querySelector("#boxMarginRight").value;
    const marginBottom = document.querySelector("#boxMarginBottom").value;
    const marginLeft = document.querySelector("#boxMarginLeft").value;
    const borderWidth = document.querySelector("#boxBorderWidth").value;

    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.padding = `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;
    box.style.margin = `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`;
    box.style.borderWidth = `${borderWidth}px`;

    boxCode.textContent = `.box {
    width: ${width}px;
    height: ${height}px;
    padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
    margin: ${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px;
    border-width: ${borderWidth}px;
}`;
  }

  sliders.forEach((slider) =>
    slider.addEventListener("input", () =>
      boxes.forEach((box) => {
        updateBox(box);
      })
    )
  );

  updateBox();
});
