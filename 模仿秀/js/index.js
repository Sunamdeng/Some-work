$(function(){
  $('#dowebok').fullpage({
    //滚到某一屏后调用
    afterLoad:function(link,index){
      $('.section').removeClass('current');
      setTimeout(function () {
					$('.section').eq(index - 1).addClass('current');
				}, 100);
    }
  });
});
