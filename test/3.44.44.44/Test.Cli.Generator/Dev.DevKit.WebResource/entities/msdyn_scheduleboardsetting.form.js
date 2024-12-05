﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_scheduleboardsetting_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_BookBasedOn: {},
			msdyn_CustomTabName: {},
			msdyn_CustomTabWebResource: {},
			msdyn_FullyBookedColor: {},
			msdyn_HideCancelled: {},
			msdyn_IsSynchronizeResources: {},
			msdyn_MapViewTabPlacement: {},
			msdyn_NotBookedColor: {},
			msdyn_OrderNumber: {},
			msdyn_OrganizationalUnitTooltipsViewId: {},
			msdyn_OrganizationalUnitViewId: {},
			msdyn_OverbookedColor: {},
			msdyn_PartiallyBookedColor: {},
			msdyn_SAAvailableIcon: {},
			msdyn_SAPartiallyAvailableIcon: {},
			msdyn_SAUnavailableIcon: {},
			msdyn_SchedulerAlertsView: {},
			msdyn_SchedulerResourceDetailsView: {},
			msdyn_SchedulerResourceTooltipView: {},
			msdyn_Settings: {},
			msdyn_ShareType: {},
			msdyn_TabName: {},
			msdyn_UnscheduledRequirementsViewId: {},
			msdyn_UnscheduledWOPageRecCount: {},
			msdyn_WorkingHoursColor: {},
			OwnerId: {},
			WebResource_FullyBookedColor: {},
			WebResource_NotBookedColor: {},
			WebResource_OverbookedColor: {},
			WebResource_PartiallyBookedColor: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid: {}
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
	OptionSet.msdyn_scheduleboardsetting = {
		msdyn_ShareType : {
			Everyone: 192350000,
			Just_me: 192350001,
			Specific_people: 192350002,
			System: 192350003
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