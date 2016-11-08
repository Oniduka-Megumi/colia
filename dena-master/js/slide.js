$(function() {
	$('.main-gallery').flickity({
	  // options
	  cellAlign: 'left',
	  wrapAround: true,
	  imagesLoaded: true,
	draggable: true,
    // falseで矢印ボタンを非表示にします。
    prevNextButtons: false,
    // falseで下のドットを非表示にします。
    pageDots: false,
    // キーボードの左右で切り替えできるかどうかを指定します。
    accessibility: true,
    // 自動再生するかどうかを指定します。trueで3秒間隔で切り替わります。
    autoPlay: 4000 //数字を指定するとその速さで切り替わります。
	});

});