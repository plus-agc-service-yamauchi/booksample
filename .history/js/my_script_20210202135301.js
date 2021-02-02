jQuery(function($) {
	$("#book").turn({

			elevation: 50,
			gradients: true,       // ページをめくるアニメーションの可否
			autoCenter: false    // 開始ページをセンターリングする。
	});
	// トップへ移動
	$("#toTop").click(function(){
		$(".flipbook").turn("page", 1);
	})
	// 前のページへ移動
	$("#toPrev").click(function(){
	    $(".flipbook").turn("previous");
	});
	// 次のページへ移動
	$("#toNext").click(function(){
	    $(".flipbook").turn("next");
	});
	// 最後のページへ移動
	$("#toLast").click(function(){
		$(".flipbook").turn("page", 7);
	})
});