jQuery(function($) {
	$("#flipbook").turn({
        display:'single',
			elevation: 50,
			gradients: true,       // ページをめくるアニメーションの可否
			autoCenter: false    // 開始ページをセンターリングする。
	});
});