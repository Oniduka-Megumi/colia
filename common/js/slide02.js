$(function() {

  $('.pattern1').slick({
    accessibility: true,
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 800,
    lazyLoad: "progressive"
  });

  $('.pattern2').slick({
    dots: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyLoad: "progressive"
  });

  $('.pattern3').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnDotsHover: false,
    pauseOnHover: false,
    lazyLoad: "progressive"
  });

  $('.pattern4').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '20%'
  });

  $('.pattern5-1').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '20%',
    asNavFor: '.pattern5-2'
  });

  $('.pattern5-2').slick({
    slidesToShow: 6,
    arrows: false,
    asNavFor: '.pattern5-1',
    focusOnSelect: true
  });

  // 再生停止ボタンを準備（HTMLに直接追加でもいいです）
  var stopBtn = $('<button id="tglBtn"><span id="startBtn">再生</span><span id="stopBtn">停止</span></button>');

  // ページ送りの前に追加（あってもなくてもいいです）
  stopBtn.prependTo('.pattern3 .slick-dots');

  // デフォルトは再生ボタンを非表示に
  $('#startBtn').hide();
  // 切り替えフラグを準備
  var flg = "play";

  // ボタンをクリックした時の処理
  $('#tglBtn').click(function(){
    // toggleでフラグを切り替え
    $('#startBtn').toggle();
    // フラグの条件でボタンの切り替えと再生・停止の処理
    if(flg == "play") {
      $('#startBtn').show();
      $('#stopBtn').hide();
      flg = "stop";
      $('.pattern3').slick('slickPause');
    } else {
      $('#startBtn').hide();
      $('#stopBtn').show();
      flg = "play";
      $('.pattern3').slick('slickPlay');
    }
  });

});