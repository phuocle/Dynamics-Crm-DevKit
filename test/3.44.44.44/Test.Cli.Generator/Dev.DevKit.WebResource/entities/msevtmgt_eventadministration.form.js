'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEvent_administration = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_contactmatchingstrategy: {},
			msevtmgt_emailtemplateforattendee: {},
			msevtmgt_emailtemplateforpurchaser: {},
			msevtmgt_enablefinalizationendpoints: {},
			msevtmgt_name: {},
			msevtmgt_sendmailtoeventattendee: {},
			msevtmgt_sendmailtopurchaser: {},
			OwnerId: {},
			WebResource_TemplatePickerForAttendee: {},
			WebResource_TemplatePickerForPurchaser: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_106D6C24_43CF_4B7B_99C6_CAE70B790B20: {
				Section: {
					_106D6C24_43CF_4B7B_99C6_CAE70B790B20_COLUMN_2_SECTION_1: {},
					_8AD9519B_039D_49B8_9184_C2E183294391: {}
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_eventadministration = {
		msevtmgt_contactmatchingstrategy : {
			Email: 100000000,
			Email_and_event_owner: 100000003,
			Email_first_name_and_last_name: 100000002,
			First_name_and_last_name: 100000001
		},
		msevtmgt_enablefinalizationendpoints : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_sendmailtoeventattendee : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_sendmailtopurchaser : {
			No: 100000001,
			Yes: 100000002
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