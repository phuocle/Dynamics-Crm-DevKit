'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAsyncOperation_Information = function(executionContext, defaultWebResourceName) {
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
			RetryCount: {},
			WebResource_systemjob: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			generaltab: {
				Section: {
					custom: {},
					general: {},
					systemlinksection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AsyncOperation = {
		OperationType : {
			Activity_Propagation: 6,
			AI_Builder_Prediction_Events: 190690092,
			AI_Builder_Training_Events: 190690091,
			ALM_Anomaly_Detection_Operation: 73,
			App_Module_Metadata_Operation: 72,
			Archive_Execution_Async_Operation: 301,
			AsyncArchive_Async_Operation: 102,
			Audit_Partition_Creation: 41,
			Bulk_Archive_Operation: 300,
			Bulk_Delete: 13,
			Bulk_Delete_File_Attachment: 94,
			Bulk_Delete_Subprocess: 23,
			Bulk_Duplicate_Detection: 8,
			Bulk_Email: 2,
			Calculate_Organization_Maximum_Storage_Size: 22,
			Calculate_Organization_Storage_Size: 18,
			Calculate_Rollup_Field: 57,
			CallbackRegistration_Expander_Operation: 79,
			Cascade_FlowSession_Permissions_Async_Operation: 100,
			Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation: 12801,
			CascadeAssign: 90,
			CascadeDelete: 91,
			Check_For_Language_Pack_Updates: 42,
			Cleanup_inactive_workflow_assemblies: 32,
			Cleanup_Solution_Components: 71,
			Collect_Organization_Database_Statistics: 19,
			Collect_Organization_Statistics: 16,
			Collection_Organization_Size_Statistics: 20,
			Convert_Date_And_Time_Behavior: 62,
			Create_Or_Refresh_Virtual_Entity: 98,
			Database_log_backup: 26,
			Database_Tuning: 21,
			DBCC_SHRINKDATABASE_maintenance_job: 28,
			DBCC_SHRINKFILE_maintenance_job: 29,
			Deletion_Service: 14,
			Denormalization_Async_Operation: 239,
			Duplicate_Detection_Rule_Publish: 7,
			Encryption_Health_Check: 53,
			EntityKey_Index_Creation: 63,
			Event_Expander_Operation: 92,
			Execute_Async_Request: 54,
			Export_Solution_Async_Operation: 202,
			FinOps_Deployment_Async_Operation: 302,
			Flow_Notification: 75,
			Goal_Roll_Up: 40,
			Import: 5,
			Import_File_Parse: 3,
			Import_Sample_Data: 38,
			Import_Solution_Async_Operation: 203,
			Import_Solution_Metadata: 93,
			Import_Subprocess: 17,
			Import_Translation: 59,
			Incoming_Email_Processing: 51,
			Index_Management: 15,
			Mailbox_Test_Access: 52,
			Mass_Calculate_Rollup_Field: 58,
			Matchcode_Update: 12,
			Migrate_article_content_to_file_storage: 86,
			Migrate_notes_to_attachments_job: 85,
			Organization_Full_Text_Catalog_Index: 25,
			Outgoing_Activity: 50,
			Post_to_Yammer: 49,
			Provision_language_for_user: 201,
			Provision_Language_Pack: 43,
			PublishAll_Async_Operation: 204,
			Purge_Archived_Content_Operation: 304,
			Quick_Campaign: 11,
			Recurring_Series_Expansion: 35,
			Refresh_Business_Unit_for_Records_Owned_By_Principal: 95,
			Refresh_Runtime_Integration_Components_Async_Operation: 250,
			Regenerate_Entity_Row_Count_Snapshot_Data: 46,
			Regenerate_Read_Share_Snapshot_Data: 47,
			Reindex_all_indices_maintenance_job: 30,
			Relationship_Assistant_Cards: 69,
			Resource_Booking_Sync: 68,
			Revoke_Inherited_Access: 96,
			Ribbon_Client_Metadata_Operation: 76,
			SQM_Data_Collection: 9,
			Storage_Limit_Notification: 31,
			System_Event: 1,
			Transform_Parse_Data: 4,
			Update_Contract_States: 27,
			Update_Entitlement_States: 56,
			Update_Knowledge_Article_States: 65,
			Update_Modern_Flow_Async_Operation: 101,
			Update_Organization_Database: 44,
			Update_Solution: 45,
			Update_Statistic_Intervals: 24,
			Updated_Deactived_On_for_Resolved_Cases_job: 87,
			Workflow: 10
		},
		OwnerIdType : {
		},
		OwningExtensionTypeCode : {
		},
		PrimaryEntityType : {
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Completed: 3,
			Locked: 2,
			Ready: 0,
			Suspended: 1
		},
		StatusCode : {
			Canceled: 32,
			Canceling: 22,
			Failed: 31,
			In_Progress: 20,
			Pausing: 21,
			Succeeded: 30,
			Waiting: 10,
			Waiting_For_Resources: 0
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