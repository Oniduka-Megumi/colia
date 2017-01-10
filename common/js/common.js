$(function() {
    // ページプラグインの埋め込みコードを返す。
    function pagePluginCode(w) {
        // 幅に応じて高さを変更する場合
        if(w > 400) {
            var h = 300;
        } else {
            var h = 200;
        }
        return '<div class="fb-page" data-href="https://www.facebook.com/shopbeautygarden" data-tabs="timeline,events" data-width="' + w + '" data-height="500" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/shopbeautygarden"><a href="https://www.facebook.com/shopbeautygarden">早見沙織のふり～すたいる</a></blockquote></div></div>';
    }
 
    // ページプラグインを追加する要素
    var facebookWrap = $('.facebook-wrapper');
    var fbBeforeWidth = ''; // 前回変更したときの幅
    var fbWidth = facebookWrap.width(); // 今回変更する幅
    var fbTimer = false;
    $(window).on('load resize', function() {
        if (fbTimer !== false) {
            clearTimeout(fbTimer);
        }
        fbTimer = setTimeout(function() {
            fbWidth = facebookWrap.width(); // 変更後の幅を取得
            // 前回の幅から変更があった場合のみ処理
            // スマホだとスクロール時にリサイズが発生することがあるため
            if(fbWidth != fbBeforeWidth) {
                facebookWrap.html(pagePluginCode(fbWidth)); // ページプラグインのコード変更
                window.FB.XFBML.parse(); // ページプラグインの再読み込み
                fbBeforeWidth = fbWidth; // 今回変更分を保存しておく
            }
        }, 200);
    });
});