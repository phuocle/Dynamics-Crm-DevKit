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
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		WebResourceType : {
			Data_XML: 4,
			GIF_format: 7,
			ICO_format: 10,
			JPG_format: 6,
			PNG_format: 5,
			Script_JScript: 3,
			Silverlight_XAP: 8,
			String_RESX: 12,
			Style_Sheet_CSS: 2,
			Style_Sheet_XSL: 9,
			Vector_format_SVG: 11,
			Webpage_HTML: 1
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