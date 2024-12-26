'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_recurringsalesactionv2_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_TriggerName: {}
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
	OptionSet.msdyn_recurringsalesactionv2 = {
		msdyn_FeatureName : {
			Check_Azure_Storage_for_Sales_Skill_Usage_Data: 22,
			Digital_selling_task_maintenance_job: 13,
			Manual_Forecasting: 18,
			OOB_Suggestions_Athena_Sync_Status: 14,
			Opportunities_to_focus: 21,
			Predictive_Forecasting: 16,
			Recurrent_Assignment: 3,
			Recurrent_Duplicate_Detection: 4,
			Relationship_Analytics: 15,
			Restore_Missing_RSA_Triggers: 8,
			Sales_Accelerator_Mail_Notification_to_Admin: 5,
			Sales_analytics_provisioning_trigger: 12,
			Sales_Cxp_provisioning_trigger: 11,
			Scheduled_Assignment: 1,
			Scheduled_DataHygiene_Validation: 7,
			Scheduled_DataHygiene_Validation_Trigger: 6,
			Scheduled_Maintenance: 2,
			Scheduled_Scoring: 0,
			Similar_opportunities: 19,
			Stalled_opportunities: 20,
			Sync_CRUD_Data_to_CDS: 10,
			Sync_CRUD_Data_to_CDS_Validation: 9,
			Sync_sales_skill_usage_data_from_azure_storage_to_CDS: 23,
			Work_assignment_user_membership_trigger: 17
		},
		msdyn_RecordState : {
			Created: 0,
			Missing: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2,
			Missing: 3
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