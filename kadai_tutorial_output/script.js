$(function(){
  $('.button-more').on('mouseover', function(){
    //animate()_CSSプロパティを操作する関数
    $(this).animate({
      //不透明度
      opacity: 0.5,
      //左側の余白
      marginLeft: 20,
    }, 100);
  });

  $('.button-more').on('mouseout', function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0
    }, 100);
  });

  //slickからサンプルコードを参考にコードを書く
  $('.carousel').slick({
    autoplay: true,//画像を自動的に切り替える
    dots: true,//カルーセルの下に現在地を示すUI（ドット）を表示する
    infinite: true,//画像をループさせる
    autoplaySpeed: 1000,//5秒ごとに画像を切り替える
    arrows: false,//カルーセルの左右の矢印を非表示にする
  });

  $('#submit').on('click', function(event){
    //preventDefault()はformタグによるフォームの送信をキャンセルするメソッド
    event.preventDefault();
    let result = inputCheck();

    let error = result.error;
    let message = result.message;

    if(error == false){
      alert('お問い合わせを送信しました。')
    }else{
      alert(message);
    }
  });

  // blur()は要素がフォーカスから外れた際に実行される
  $('#name').blur(function(){
    inputCheck();
  });

  $('#furigana').blur(function(){
    inputCheck();
  });

  $('#email').blur(function(){
    inputCheck();
  });

  $('#tel').blur(function(){
    inputCheck();
  });

  $('#agree').click(function(){
    inputCheck();
  });


  function inputCheck(){
    let result;
    let message= '';
    let error = false;

    if($('#name').val() == ''){
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    }else{
      $('#name').css('background-color', '#fafafa');
    }

    if($('#furigana').val() == ''){
      $('#furigana').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    }else{
      $('#furigana').css('background-color', '#fafafa');
    }

    if($('#message').val() == ''){
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    }else{
      $('#message').css('background-color', '#fafafa');
    }

    // $('#email').val()が『空白　or @が含まれていない　or .が含まれていない』場合、
    if($('#email').val() == '' || 
      $('#email').val().indexOf('@') == -1 || 
      $('#email').val().indexOf('.') == -1){
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    }else{
      $('#email').css('background-color','#fafafa');
    }

    if($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1){
      $('#tel').css('background-color', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    }else{
      $('#tel').css('background-color', '#fafafa');
    }

    // prop()は属性プロパティに値を設定、または設定されている値を取得する
    if($('#agree').prop('checked') == false){
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }


    // prop()は属性プロパティに値を設定、または設定されている値を取得する
    if($('#agree').prop('checked') == false){
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }


    // kadai_010の始まり
    if($('#prefecture').val() == ''){
      $('#prefecture').css('background-color', '#f79999');
      error = true;
      message += '都道府県を選択してください。\n';
    }else{
      $('#prefecture').css('background-color', '#fafafa');
    }
    // kadai_010の終わり


    if(error == true){
      // attr()は属性に値を設定、または設定されている値を取得する
      $('#submit').attr('src', 'images/button-submit.png');
    }else{
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    //連想配列
    result = {
      error: error,
      message: message
    }
    //「result」は{error : *, message : *}のような形になる
    return result;
  }
});



