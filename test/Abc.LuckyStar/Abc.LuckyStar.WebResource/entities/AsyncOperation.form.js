'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormAsyncOperation_Information = function(executionContext, defaultWebResourceName) {
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
			CompletedOn: {},
			CreatedOn: {},
			FriendlyMessage: {},
			Message: {},
			Name: {},
			OperationType: {},
			OwnerId: {},
			RegardingObjectId: {},
			RetryCount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AsyncOperation = {
		OperationType : {
			System_Event: 1,
			Bulk_Email: 2,
			Import_File_Parse: 3,
			Transform_Parse_Data: 4,
			Import: 5,
			Activity_Propagation: 6,
			Duplicate_Detection_Rule_Publish: 7,
			Bulk_Duplicate_Detection: 8,
			SQM_Data_Collection: 9,
			Workflow: 10,
			Quick_Campaign: 11,
			Matchcode_Update: 12,
			Bulk_Delete: 13,
			Deletion_Service: 14,
			Index_Management: 15,
			Collect_Organization_Statistics: 16,
			Import_Subprocess: 17,
			Calculate_Organization_Storage_Size: 18,
			Collect_Organization_Database_Statistics: 19,
			Collection_Organization_Size_Statistics: 20,
			Database_Tuning: 21,
			Calculate_Organization_Maximum_Storage_Size: 22,
			Bulk_Delete_Subprocess: 23,
			Update_Statistic_Intervals: 24,
			Organization_Full_Text_Catalog_Index: 25,
			Database_log_backup: 26,
			Update_Contract_States: 27,
			DBCC_SHRINKDATABASE_maintenance_job: 28,
			DBCC_SHRINKFILE_maintenance_job: 29,
			Reindex_all_indices_maintenance_job: 30,
			Storage_Limit_Notification: 31,
			Cleanup_inactive_workflow_assemblies: 32,
			Recurring_Series_Expansion: 35,
			Import_Sample_Data: 38,
			Goal_Roll_Up: 40,
			Audit_Partition_Creation: 41,
			Check_For_Language_Pack_Updates: 42,
			Provision_Language_Pack: 43,
			Update_Organization_Database: 44,
			Update_Solution: 45,
			Regenerate_Entity_Row_Count_Snapshot_Data: 46,
			Regenerate_Read_Share_Snapshot_Data: 47,
			Outgoing_Activity: 50,
			Incoming_Email_Processing: 51,
			Mailbox_Test_Access: 52,
			Encryption_Health_Check: 53,
			Execute_Async_Request: 54,
			Post_to_Yammer: 49,
			Update_Entitlement_States: 56,
			Calculate_Rollup_Field: 57,
			Mass_Calculate_Rollup_Field: 58,
			Import_Translation: 59,
			Convert_Date_And_Time_Behavior: 62,
			EntityKey_Index_Creation: 63,
			Update_Knowledge_Article_States: 65,
			Resource_Booking_Sync: 68,
			Relationship_Assistant_Cards: 69,
			Cleanup_Solution_Components: 71,
			App_Module_Metadata_Operation: 72,
			ALM_Anomaly_Detection_Operation: 73,
			Flow_Notification: 75,
			Ribbon_Client_Metadata_Operation: 76,
			CallbackRegistration_Expander_Operation: 79,
			CascadeAssign: 90,
			CascadeDelete: 91,
			Event_Expander_Operation: 92,
			Import_Solution_Metadata: 93,
			Bulk_Delete_File_Attachment: 94,
			Refresh_Business_Unit_for_Records_Owned_By_Principal: 95,
			Revoke_Inherited_Access: 96
		},
		StateCode : {
			Ready: 0,
			Suspended: 1,
			Locked: 2,
			Completed: 3
		},
		StatusCode : {
			Waiting_For_Resources: 0,
			Waiting: 10,
			In_Progress: 20,
			Pausing: 21,
			Canceling: 22,
			Succeeded: 30,
			Failed: 31,
			Canceled: 32
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