'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DocumentTemplate = {
		DocumentType : {
			Microsoft_Excel: 1,
			Microsoft_Word: 2
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