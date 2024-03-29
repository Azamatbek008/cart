var numArticle= 0;
$('.add-article').click(function () {
        var current = $(this);
        var currentParent = current.parents('.article-box');
        var currentImage = currentParent.find('.article-img');

        var currentClone = currentImage.clone();

        var topImage = currentImage.offset().top;
        var LeftImage = currentImage.offset().left;

        currentClone.removeClass('article-img');
        currentClone.css({top: topImage, left: LeftImage});


        currentClone.addClass('animation-cart');
        currentClone.appendTo('body');

        var topCart = $('.header-cart').offset().top;
        var LeftCart = $('.header-cart').offset().left;
        numArticle++;
         

        setTimeout(function(){
            $('.header-cart').addClass('shake');
            currentClone.animate({
                top: topCart - 130,
                left: LeftCart - 140
            }, 1200 );
        }, 600);
  
        setTimeout(function(){
           $('.header-cart span').html(numArticle);
         }, 1800);

        setTimeout(function(){
            $('.header-cart').removeClass('shake');
             currentClone.remove();
        }, 2200);

    });