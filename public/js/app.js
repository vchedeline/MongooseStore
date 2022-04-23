
$("#btn-buy").on("click", () => {
  console.log("Buy Now Clicked")
  $.ajax({
    url: "localhost:3000/products/clicked"
  })
})