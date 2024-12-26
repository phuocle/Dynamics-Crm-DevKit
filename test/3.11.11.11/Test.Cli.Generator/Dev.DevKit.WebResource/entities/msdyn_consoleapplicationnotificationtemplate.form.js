'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_consoleapplicationnotificationtemplate_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AcceptButtonText: {},
			msdyn_AutoAcceptNotification: {},
			msdyn_desktopnotificationsettings: {},
			msdyn_Icon: {},
			msdyn_infosubheader: {},
			msdyn_name: {},
			msdyn_NotificationButtons: {},
			msdyn_preview: {},
			msdyn_RejectButtonAutoAccept: {},
			msdyn_RejectButtonText: {},
			msdyn_Showtimeout: {},
			msdyn_Theme: {},
			msdyn_Timeout: {},
			msdyn_Title: {},
			NotificationFields: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_9730037D_AB23_4A34_9B05_5A0E50E1C401: {
				Section: {
					_9730037D_AB23_4A34_9B05_5A0E50E1C401_SECTION_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			NotificationFields: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_consoleapplicationnotificationtag: {}
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
	OptionSet.msdyn_consoleapplicationnotificationtemplate = {
		msdyn_ActionButtons : {
			Allow: 100000000,
			Deny: 100000001
		},
		msdyn_Showtimeout : {
			No: 100000001,
			Yes: 100000000
		},
		msdyn_Theme : {
			Dark: 100000000,
			Light: 100000001
		},
		OwnerIdType : {
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