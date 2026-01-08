'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMain_Information_Form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CreatedBy", "CreatedOn", "CreatedOnBehalfBy", "ModifiedBy", "ModifiedOn", "ModifiedOnBehalfBy", "mspcat_Description", "mspcat_File", "mspcat_FileType", "mspcat_ImageSize", "mspcat_Name", "mspcat_PackageStore", "OwnerId"],
			bpf: [],
			dialog: [],
			grid: [],
			header: ["statecode", "statuscode"],
			navigation: [],
			quick: [],
			tab: []
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspcat_CatalogSubmissionFiles = {
		mspcat_FileType: { Document: 526430001, Image: 526430000, Video: 526430002 },
		mspcat_ImageSize: { _216_x_216: 526430001, _48_x_48: 526430000, Screen_Shot: 526430002 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));