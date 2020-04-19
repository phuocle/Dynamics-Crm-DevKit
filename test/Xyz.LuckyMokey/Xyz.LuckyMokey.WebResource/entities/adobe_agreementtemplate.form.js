'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_agreementtemplate = {
		adobe_automaticreminder : {
			Never: 648770000,
			Every_Day_Until_Signed: 648770001,
			Every_Week_Until_Signed: 648770002
		},
		adobe_identityverification : {
			EMAIL: 648770003,
			PHONE: 648770004,
			PASSWORD: 648770000,
			KNOWLEDGE_BASE: 648770001,
			WEB_IDENTITY: 648770002
		},
		adobe_sendersigningoptions : {
			I_sign_first: 648770000,
			I_sign_last: 648770001,
			Only_I_sign: 648770002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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