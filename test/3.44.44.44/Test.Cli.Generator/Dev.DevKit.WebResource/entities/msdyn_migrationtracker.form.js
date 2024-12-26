﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMigration_Tracker = function(executionContext, defaultWebResourceName) {
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
			msdyn_IsMigrationComplete: {},
			msdyn_LegacyConvertRuleId: {},
			msdyn_LegacyConvertRuleItemId: {},
			msdyn_LegacySLAId: {},
			msdyn_LegacySLAItemId: {},
			msdyn_MigrationStatus: {},
			msdyn_MigrationStatusException: {},
			msdyn_MigrationStatusReason: {},
			msdyn_MigrationType: {},
			msdyn_ModernConvertRuleId: {},
			msdyn_ModernConvertRuleItemId: {},
			msdyn_ModernSLAId: {},
			msdyn_ModernSLAItemId: {},
			msdyn_Name: {},
			msdyn_Objecttypecode: {},
			OwnerId: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.msdyn_migrationtracker = {
		msdyn_LegacyRuleIdType : {
		},
		msdyn_LegacyRuleItemIdType : {
		},
		msdyn_MigrationStatus : {
			In_Progress: 0,
			Incomplete: 2,
			Migrated: 1
		},
		msdyn_MigrationType : {
			Migration: 0,
			PreValidation: 1
		},
		msdyn_ModernRuleIdType : {
		},
		msdyn_ModernRuleItemIdType : {
		},
		msdyn_Objecttypecode : {
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