jQuery(function($) {
	$("#flipbook").turn({
        display:'single',
			elevation: 50,
			gradients: true,       // ページをめくるアニメーションの可否
            autoCenter: false,
            direction: 'rtl',    // 開始ページをセンターリングする。
	});
});