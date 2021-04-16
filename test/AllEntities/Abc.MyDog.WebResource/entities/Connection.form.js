'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormConnection_Information = function(executionContext, defaultWebResourceName) {
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
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Connection = {
		Record1ObjectTypeCode : {
			Social_Profile: 99,
			Phone_Call: 4210,
			Task: 4212,
			Fax: 4204,
			Recurring_Appointment: 4251,
			Team: 9,
			WebApi: 10030,
			Custom_Activity: 10042,
			Territory: 2013,
			Channel_Access_Profile_Rule: 9400,
			Process_Session: 4710,
			Contact: 2,
			Goal: 9600,
			User: 8,
			Activity: 4200,
			Knowledge_Article: 9953,
			Letter: 4207,
			Account: 1,
			Appointment: 4201,
			Email: 4202,
			Position: 50,
			Social_Activity: 4216,
			Knowledge_Base_Record: 9930
		},
		Record2ObjectTypeCode : {
			Letter: 4207,
			Email: 4202,
			Team: 9,
			Phone_Call: 4210,
			Contact: 2,
			User: 8,
			WebApi: 10030,
			Custom_Activity: 10042,
			Territory: 2013,
			Knowledge_Article: 9953,
			Social_Activity: 4216,
			Recurring_Appointment: 4251,
			Appointment: 4201,
			Account: 1,
			Activity: 4200,
			Social_Profile: 99,
			Goal: 9600,
			Knowledge_Base_Record: 9930,
			Position: 50,
			Fax: 4204,
			Channel_Access_Profile_Rule: 9400,
			Task: 4212,
			Process_Session: 4710
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