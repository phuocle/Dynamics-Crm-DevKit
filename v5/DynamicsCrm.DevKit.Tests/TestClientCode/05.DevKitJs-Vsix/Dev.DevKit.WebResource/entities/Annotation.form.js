'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAnnotation_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["CreatedBy", "CreatedOn", "filenameattachment", "FileSize", "IsDocument", "ModifiedBy", "ModifiedOn", "NoteText", "OwnerId", "regardingobject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___account_information", "general___attachment_information", "general___content_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKit.FormNote_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["NoteText", "Subject"],
			bpf: [],
			dialog: [],
			grid: [],
			header: [],
			navigation: [],
			quick: [],
			tab: ["general___notes_information"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Annotation = {
		ObjectIdTypeCode: { },
		ObjectTypeCode: { Account: 1, Appointment: 4201, Bulk_Import: 4407, Calendar: 4003, Campaign: 4400, Campaign_Activity: 4402, Campaign_Response: 4401, Case: 112, Case_Resolution: 4206, Commitment: 4215, Competitor: 123, Contact: 2, Contract: 1010, Contract_Line: 1011, Email: 4202, FacilityEquipment: 4000, Fax: 4204, Invoice: 1090, Lead: 4, Letter: 4207, Marketing_List: 4300, Opportunity: 3, Opportunity_Close: 4208, Order: 1088, Order_Close: 4209, Phone_Call: 4210, Product: 1024, Quote: 1084, Quote_Close: 4211, Resource_Specification: 4006, Routing_Rule: 8181, Routing_Rule_Item: 8199, Service: 4001, Service_Activity: 4214, Task: 4212 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));