'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.WebResource = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		WebResourceType : {
			Chuoi_RESX: 12,
			Dinh_dang_GIF: 7,
			Dinh_dang_ICO: 10,
			Dinh_dang_JPG: 6,
			Dinh_dang_PNG: 5,
			Dinh_dang_vec_to_SVG: 11,
			Du_lieu_XML: 4,
			Script_JScript: 3,
			Silverlight_XAP: 8,
			To_mau_CSS: 2,
			To_mau_XSL: 9,
			Trang_web_HTML: 1
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));