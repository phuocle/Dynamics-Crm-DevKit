'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAnnotation_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CreatedBy: {},
			CreatedOn: {},
			filenameattachment: {},
			FileSize: {},
			IsDocument: {},
			ModifiedBy: {},
			ModifiedOn: {},
			NoteText: {},
			OwnerId: {},
			regardingobject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					account_information: {},
					attachment_information: {},
					content_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormNote_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			NoteText: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					notes_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Annotation = {
		ObjectIdTypeCode : {
		},
		ObjectTypeCode : {
			Account: 1,
			Appointment: 4201,
			Bulk_Import: 4407,
			Calendar: 4003,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Case_Resolution: 4206,
			Commitment: 4215,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Contract_Line: 1011,
			Email: 4202,
			FacilityEquipment: 4000,
			Fax: 4204,
			Invoice: 1090,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Opportunity: 3,
			Opportunity_Close: 4208,
			Order: 1088,
			Order_Close: 4209,
			Phone_Call: 4210,
			Product: 1024,
			Quote: 1084,
			Quote_Close: 4211,
			Resource_Specification: 4006,
			Routing_Rule: 8181,
			Routing_Rule_Item: 8199,
			Service: 4001,
			Service_Activity: 4214,
			Task: 4212
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