/* global $*/
$(function(){
    const words = $('h1').text();
    console.log(words);
    $('h1').text('');
    let count = 1;
    const text_animation = () => {
        const word = words.substr(0, count);
        console.log(word);
        $('h1').text(word);
        if(count === words.length){
            clearInterval(timer);
        }
        count++;
    };
    
    // text_animation();
    // タイマー処理
    const timer = setInterval(text_animation, 200);
    
    // 秒数カウントアップ
    let sec = 0;
    const count_up = () => {
      sec++;
      $('span').text(sec);
    };
    setInterval(count_up, 1000);
    
    // 画像のfadein/fadeout
    let image_count = 1;
    const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
    const image_animation = () => {
        $('img').animate({'opacity': 0}, 2000, () => {
            $('img').prop('src', images[image_count]);
            $('img').prop('alt', images[image_count]);
            $('img').animate({'opacity': 1}, 2000);
            // 次の画像に進む
            image_count++;
            // 次の画像がなくなれば１枚目に戻る
            if(image_count === images.length){
                image_count = 0;
            }
        });
    };
    // image_animation();
    // タイマー処理
    setInterval(image_animation, 5000);
});