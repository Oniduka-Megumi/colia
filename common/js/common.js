//  slick

jQuery(document).ready(function(){

	jQuery('#slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 1,
		centerMode: true, //要素を中央寄せ
		centerPadding: '0px', //両サイドの見えている部分のサイズ
		autoplay: true, //自動再生
		responsive: [{
			breakpoint: 300,
				settings: {
					centerMode: false,
			}
		}]

	});

});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});