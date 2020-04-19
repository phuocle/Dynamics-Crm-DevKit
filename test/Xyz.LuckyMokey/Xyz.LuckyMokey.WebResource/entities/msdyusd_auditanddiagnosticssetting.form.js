'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyusd_auditanddiagnosticssetting_Information = function(executionContext, defaultWebResourceName) {
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
			IFRAME_userschemasettings: {},
			msdyusd_ATEnabled: {},
			msdyusd_ATforActionCalls: {},
			msdyusd_ATforAgentLogin: {},
			msdyusd_ATforAgentScripts: {},
			msdyusd_ATforCustomerSession: {},
			msdyusd_ATforEvents: {},
			msdyusd_ATforHostedControl: {},
			msdyusd_ATforSubActionCalls: {},
			msdyusd_ATforUIIAction: {},
			msdyusd_ATforWindowsNavRules: {},
			msdyusd_CacheSize: {},
			msdyusd_DGTEnabled: {},
			msdyusd_DGTVerbosityLevel: {},
			msdyusd_EnableCaching: {},
			msdyusd_name: {},
			OwnerId: {},
			TraceSourceSettings: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			ActivityTrackingTab: {
				Section: {
					tab_2_section_1: {}
				}
			},
			Diagnosticstab: {
				Section: {
					tab_3_section_2: {}
				}
			},
			UserSchemaSettingstab: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyusd_auditdiag_tracesourcesetting: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyusd_auditanddiagnosticssetting = {
		msdyusd_DGTVerbosityLevel : {
			Error: 100000000,
			Warning: 100000001,
			Information: 100000002,
			Verbose: 100000003
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