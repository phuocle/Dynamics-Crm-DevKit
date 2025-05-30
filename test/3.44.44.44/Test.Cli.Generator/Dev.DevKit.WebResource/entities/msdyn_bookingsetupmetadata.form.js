﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_bookingsetupmetadata_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AvailableDurationMinimumPercentage: {},
			msdyn_BookingRelationshipLogicalName: {},
			msdyn_BookingStatusFieldLogicalName: {},
			msdyn_CancelBookingsWhenMoving: {},
			msdyn_DefaultBookingCanceledStatus: {},
			msdyn_DefaultBookingCommittedStatus: {},
			msdyn_DefaultBookingDuration: {},
			msdyn_DefaultRequirementActiveStatus: {},
			msdyn_DefaultRequirementCanceledStatus: {},
			msdyn_DefaultRequirementCompletedStatus: {},
			msdyn_DisableRequirementAutoCreation: {},
			msdyn_enablequickbook: {},
			msdyn_EntityLogicalName: {},
			msdyn_RequirementRelationshipLogicalName: {},
			msdyn_ResourceAvailabilityRetrievalLimit: {},
			OwnerId: {},
			WebResource_ScheduleAttributeMapping: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_bookingsetupmetadata_bookableresourcebooking: {},
			msdyn_msdyn_bookingsetupmetadata_msdyn_resourcerequirement: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_bookingsetupmetadata_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyn_EntityLogicalName: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_bookingsetupmetadata_bookableresourcebooking: {},
			msdyn_msdyn_bookingsetupmetadata_msdyn_resourcerequirement: {}
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
	OptionSet.msdyn_bookingsetupmetadata = {
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