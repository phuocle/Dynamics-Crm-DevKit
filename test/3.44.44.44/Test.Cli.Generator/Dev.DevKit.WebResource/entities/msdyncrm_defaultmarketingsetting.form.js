'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_defaultmarketingsetting_Information = function(executionContext, defaultWebResourceName) {
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
			ModifiedOn: {},
			msdyncrm_bypassemaildeduplication: {},
			msdyncrm_consentconfirmationmessage: {},
			msdyncrm_Default: {},
			msdyncrm_DefaultCntntSettings: {},
			msdyncrm_defaultemailfromemail: {},
			msdyncrm_defaultemailfromname: {},
			msdyncrm_defaultmarketingthankyoupage: {},
			msdyncrm_defaultmarketingthankyoupagedoi: {},
			msdyncrm_defaultmarketingthankyouurl: {},
			msdyncrm_defaultmarketingthankyouurldoi: {},
			msdyncrm_DefaultSetupDomain: {},
			msdyncrm_DefaultTestContact: {},
			msdyncrm_defaulttimezone: {},
			msdyncrm_doubleoptincontentsettings: {},
			msdyncrm_enabledoubleoptin: {},
			msdyncrm_EnableLitmusIntegration: {},
			msdyncrm_name: {},
			msdyncrm_subscriptionoptinmessage: {},
			msdyncrm_thankyoupagesource: {},
			OwnerId: {},
			WebResource_LitmusTermsStatement: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Bypass_Email_Deduplication: {
				Section: {
					tab_5_section_1: {}
				}
			},
			CustomerJourney: {
				Section: {
					tab_3_section_1: {}
				}
			},
			DoubleOptIn: {
				Section: {
					DoubleOptIn_section_2: {},
					DoubleOptIn_section_3: {},
					tab_4_section_1: {}
				}
			},
			MarketingEmail: {
				Section: {
					tab_2_section_1: {}
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
	OptionSet.msdyncrm_defaultmarketingsetting = {
		msdyncrm_thankyoupagesource : {
			No: 100000001,
			Yes: 100000000
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