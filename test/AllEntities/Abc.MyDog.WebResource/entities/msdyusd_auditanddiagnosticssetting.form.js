'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyusd_auditanddiagnosticssetting_Information = function(executionContext, defaultWebResourceName) {
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
			msdyusd_CrashDumpEnabled: {},
			msdyusd_DGTEnabled: {},
			msdyusd_DGTVerbosityLevel: {},
			msdyusd_EnableCaching: {},
			msdyusd_ExitMonitoringEnabled: {},
			msdyusd_LogsDirectory: {},
			msdyusd_MaxDiagnosticLogsSizeInMB: {},
			msdyusd_name: {},
			msdyusd_ODDShortcut: {},
			msdyusd_ODPerfBeginShortcut: {},
			msdyusd_ODPerfEndShortcut: {},
			msdyusd_userschemasettings: {},
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
					tab_3_section_2: {},
					Diagnosticstab_section_2: {}
				}
			},
			UserSchemaSettingstab: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_UCI: {}
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
		var grid = {
			TraceSourceSettings: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyusd_auditdiag_tracesourcesetting: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyusd_auditanddiagnosticssetting = {
		msdyusd_DGTVerbosityLevel : {
			Error: 100000000,
			Information: 100000002,
			Verbose: 100000003,
			Warning: 100000001
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