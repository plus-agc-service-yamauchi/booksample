// jQuery(function ($) {
//   $("#flipbook").turn({
//     /* display: "single", */
//     direction: "rtl",
//     elevation: 50,
//     gradients: true,
//     autoCenter: false,
//   });
// });
var flipbookEL = document.getElementById('flipbook');
window.addEventListener('resize', function (e) {
  flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});
$(flipbookEL).turn({
    autoCenter: true,
    direction:"rtl"
});