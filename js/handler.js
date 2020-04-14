var widths = 
[
  1920,
  1536,
  1280,
  1024,
  960,
  768,
  640,
  512
]

var heights = 
[
  960,
  1020,
  1125,
  1080,
  1050,
  766,
  744,
  512
]

var logoWidths = 
[
  256,
  256,
  200,
  200,
  200,
  160,
  160,
  100
]

var activePanel;

calculateSize();

$( window ).resize(function() 
{
  calculateSize();
});

$('.accordian').each
(
  function()
  {
    $(this).click
    (
      function()
      {
        if(activePanel)
        {
          activePanel.style.maxHeight = 0;
          $(activePanel).prev().find('.right')[0].innerHTML = "+";
          activePanel = null;
        }

        $(this).toggleClass('active');

        var acc_panel = $(this).next()[0];

        console.log(acc_panel.style.maxHeight);

        if (acc_panel.style.maxHeight) 
        {
          console.log("first");
          acc_panel.style.maxHeight = null;
          $(this).find('.right')[0].innerHTML = "+";
          activePanel = null;
        } 
        else 
        {
          console.log("sec");
          acc_panel.style.maxHeight = acc_panel.scrollHeight + "px";
          $(this).find('.right')[0].innerHTML = "X";
          activePanel = acc_panel;
        } 
      }
    )
  }
);

function calculateSize()
{
  console.clear();

  var scWidth = $(window).width();

  var newWidth = widths.reduce((prev, curr) => Math.abs(curr - scWidth) < Math.abs(prev - scWidth) ? curr : prev);

  console.log(newWidth);

  $('.bg').height(heights[widths.indexOf(newWidth)]);

  var logoWidth = logoWidths[widths.indexOf(newWidth)];

  $('.logo').width(logoWidth);
  $('.btn-signin').width(logoWidth / 2);
  $('.btn-signin').height((logoWidth / 2) / 2);
}