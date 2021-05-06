'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormConnection_Information = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			EffectiveEnd: {},
			EffectiveStart: {},
			OwnerId: {},
			Record1Id: {},
			Record1RoleId: {},
			Record2Id: {},
			Record2RoleId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			info: {
				Section: {
					info_s: {},
					description: {}
				}
			},
			details: {
				Section: {
					connect_from: {},
					details: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			Record1Id: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Connection = {
		Record1ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Appointment: 4201,
			Channel_Access_Profile_Rule: 9400,
			Contact: 2,
			Custom_Activity: 10042,
			Email: 4202,
			Fax: 4204,
			Goal: 9600,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Letter: 4207,
			Phone_Call: 4210,
			Position: 50,
			Process_Session: 4710,
			Recurring_Appointment: 4251,
			Social_Activity: 4216,
			Social_Profile: 99,
			Task: 4212,
			Team: 9,
			Territory: 2013,
			User: 8,
			WebApi: 10030
		},
		Record2ObjectTypeCode : {
			Account: 1,
			Activity: 4200,
			Appointment: 4201,
			Channel_Access_Profile_Rule: 9400,
			Contact: 2,
			Custom_Activity: 10042,
			Email: 4202,
			Fax: 4204,
			Goal: 9600,
			Knowledge_Article: 9953,
			Knowledge_Base_Record: 9930,
			Letter: 4207,
			Phone_Call: 4210,
			Position: 50,
			Process_Session: 4710,
			Recurring_Appointment: 4251,
			Social_Activity: 4216,
			Social_Profile: 99,
			Task: 4212,
			Team: 9,
			Territory: 2013,
			User: 8,
			WebApi: 10030
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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