'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_consentprovider_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_ConsentproviderLocalization_msdynmk: {},
			msdynmkt_msdynmkt_consentprovider_msdynmkt_complia: {}
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
	OptionSet.msdynmkt_consentprovider = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_consentresolutionmessageoptions : {
			Always_resolve_to_consent_given: 238550002,
			Always_resolve_to_consent_not_given: 238550003,
			Use_custom_api_to_resolve: 238550001,
			Use_Real_time_journeys_default_implementation: 238550004
		},
		msdynmkt_consentresolutiontrackingoptions : {
			Always_resolve_to_consent_given: 238550002,
			Always_resolve_to_consent_not_given: 238550003,
			Use_custom_api_to_resolve: 238550001,
			Use_Real_time_journeys_default_implementation: 238550004
		},
		msdynmkt_email_consentresolutionmessageoverride : {
			Always_resolve_to_consent_given: 238550002,
			Always_resolve_to_consent_not_given: 238550003,
			No_override: 238550000,
			Use_custom_api_to_resolve: 238550001,
			Use_Real_time_journeys_default_implementation: 238550004
		},
		msdynmkt_email_consentresolutiontrackingoverride : {
			Always_resolve_to_consent_given: 238550002,
			Always_resolve_to_consent_not_given: 238550003,
			No_override: 238550000,
			Use_custom_api_to_resolve: 238550001,
			Use_Real_time_journeys_default_implementation: 238550004
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