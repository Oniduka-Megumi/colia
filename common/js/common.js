$(function() {
    // �y�[�W�v���O�C���̖��ߍ��݃R�[�h��Ԃ��B
    function pagePluginCode(w) {
        // ���ɉ����č�����ύX����ꍇ
        if(w > 400) {
            var h = 300;
        } else {
            var h = 200;
        }
        return '<div class="fb-page" data-href="https://www.facebook.com/shopbeautygarden" data-tabs="timeline,events" data-width="' + w + '" data-height="500" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/shopbeautygarden"><a href="https://www.facebook.com/shopbeautygarden">�������D�̂ӂ�`��������</a></blockquote></div></div>';
    }
 
    // �y�[�W�v���O�C����ǉ�����v�f
    var facebookWrap = $('.facebook-wrapper');
    var fbBeforeWidth = ''; // �O��ύX�����Ƃ��̕�
    var fbWidth = facebookWrap.width(); // ����ύX���镝
    var fbTimer = false;
    $(window).on('load resize', function() {
        if (fbTimer !== false) {
            clearTimeout(fbTimer);
        }
        fbTimer = setTimeout(function() {
            fbWidth = facebookWrap.width(); // �ύX��̕����擾
            // �O��̕�����ύX���������ꍇ�̂ݏ���
            // �X�}�z���ƃX�N���[�����Ƀ��T�C�Y���������邱�Ƃ����邽��
            if(fbWidth != fbBeforeWidth) {
                facebookWrap.html(pagePluginCode(fbWidth)); // �y�[�W�v���O�C���̃R�[�h�ύX
                window.FB.XFBML.parse(); // �y�[�W�v���O�C���̍ēǂݍ���
                fbBeforeWidth = fbWidth; // ����ύX����ۑ����Ă���
            }
        }, 200);
    });
});