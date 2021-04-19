'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_notificationtemplate_Information = function(executionContext, defaultWebResourceName) {
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
			IsManaged: {},
			msdyn_acceptbuttontext: {},
			msdyn_autoacceptnotification: {},
			msdyn_desktopnotificationmode: {},
			msdyn_icon: {},
			msdyn_name: {},
			msdyn_rejectbuttontext: {},
			msdyn_showrejectbutton: {},
			msdyn_showtimeout: {},
			msdyn_timeout: {},
			msdyn_title: {},
			msdyn_UniqueName: {},
			NotificationFields: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_341680A1_42F7_4CA4_AF62_A2F46428A1B9: {
				Section: {
					_341680A1_42F7_4CA4_AF62_A2F46428A1B9_SECTION_2: {}
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
			NotificationFields: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

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
	OptionSet.msdyn_notificationtemplate = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_desktopnotificationmode : {
			Never: 509180000,
			When_app_is_in_background: 509180001
		},
		msdyn_theme : {
			Dark: 509180000,
			Light: 509180001
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