'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormDeletedRecords = function(executionContext, defaultWebResourceName) {
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
			Subgrid_new_1: {},
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
			},
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Subgrid_new_1: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
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
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormNew_Bulk_Cancel_Job_form = function(executionContext, defaultWebResourceName) {
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
			_14EE90DC_D6B1_4CF2_B39F_4B978B7DE7A0: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			NEW_JOB_TAB: {
				Section: {
					NEW_BULK_CANCEL_JOB: {}
				}
			}
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
	DevKit.FormNew_Bulk_Pause_Job_form = function(executionContext, defaultWebResourceName) {
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
			_01392873_0F90_41FE_83E7_430CF3443A8B: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			NEW_JOB_TAB: {
				Section: {
					NEW_BULK_PAUSE_JOB: {}
				}
			}
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
	DevKit.FormNew_Bulk_Resume_Job_form = function(executionContext, defaultWebResourceName) {
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
			_CDE1C43F_D8D5_4A1D_9FF0_5F6D52F56FD9: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			NEW_JOB_TAB: {
				Section: {
					NEW_BULK_RESUME_JOB: {}
				}
			}
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
	DevKit.FormNew_Duplicate_Detection_Job_form = function(executionContext, defaultWebResourceName) {
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
			_ED99F095_264A_41F9_98C8_086000F8E699: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			NEW_JOB_TAB: {
				Section: {
					NEW_DUPLICATE_DETECTION_JOB: {}
				}
			}
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
	DevKit.FormView_Duplicate_Detection_Job_details_form = function(executionContext, defaultWebResourceName) {
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
			_4E64B996_F144_4D9A_8678_AD4FAD663383: {},
			_D9EC5B3F_6E0A_46D6_B1CD_C951D4F0A5ED: {},
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
			DETAILS_TAB: {
				Section: {
					VIEW_DUPLICATE_DETECTION_JOB: {}
				}
			},
			detailstab_legacy: {
				Section: {
					Message: {}
				}
			},
			generaltab_legacy: {
				Section: {
					custom: {},
					general: {},
					systemlinksection: {}
				}
			},
			VIEW_DUPLICATES_TAB: {
				Section: {
					VIEW_DUPLICATES_DUPLICATE_DETECTION_JOB: {}
				}
			}
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
	OptionSet.AsyncOperation = {
		OperationType : {
			Activity_Propagation: 6,
			AI_Builder_Prediction_Events: 190690092,
			AI_Builder_Training_Events: 190690091,
			ALM_Anomaly_Detection_Operation: 73,
			App_Module_Metadata_Operation: 72,
			Archive_Execution_Async_Operation: 301,
			Async_Restore_Job: 187,
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
			Cancel_Async_Operations_System: 103,
			Cascade_Assign_All_Async_Operation: 105,
			Cascade_FlowSession_Permissions_Async_Operation: 100,
			Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation: 12801,
			Cascade_Merge_Async_Operation: 89,
			Cascade_Reparent_DB_Async_Operation: 88,
			CascadeAssign: 90,
			CascadeDelete: 91,
			Catalog_service_asyc_operation_to_poll_for_a_solution_checker_request: 335,
			Catalog_service_asyc_operation_to_submit_a_solution_checker_request: 336,
			Catalog_Service_Generate_Package_Async_Operation: 320,
			Catalog_Service_Install_Request_Async_Operation: 322,
			Catalog_Service_Submit_Approval_Request_Async_Operation: 321,
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
			DeleteAndPromote_Async_Operation: 207,
			Deletes_related_Elastic_or_SQL_Table_records_when_an_Elastic_Table_record_is_deleted: 334,
			Deletes_related_Elastic_Table_records_when_a_SQL_record_is_deleted: 333,
			Deletion_Service: 14,
			Denormalization_Async_Operation: 239,
			Duplicate_Detection_Rule_Publish: 7,
			Encryption_Health_Check: 53,
			EntityKey_Index_Creation: 63,
			Event_Expander_Operation: 92,
			Execute_Async_Request: 54,
			Execute_DataProcessing_Configuration: 306,
			Export_Solution_Async_Operation: 202,
			FinOps_DB_Sync_Async_Operation: 308,
			FinOps_Deploy_Custom_Package_Async_Operation: 332,
			FinOps_Deployment_Async_Operation: 302,
			FinOps_Unit_Test_Async_Operation: 309,
			Flow_Notification: 75,
			Goal_Roll_Up: 40,
			Import: 5,
			Import_File_Parse: 3,
			Import_Sample_Data: 38,
			Import_Solution_Async_Operation: 203,
			Import_Solution_Metadata: 93,
			Import_Subprocess: 17,
			Import_Translation: 59,
			ImportTranslation_Async_Operation: 210,
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
			Process_Table_For_RecycleBin: 104,
			Provision_language_for_user: 201,
			Provision_Language_Pack: 43,
			ProvisionLanguage_Async_Operation: 209,
			PublishAll_Async_Operation: 204,
			Purge_Archived_Content_Operation: 304,
			Quick_Campaign: 11,
			Recurring_Series_Expansion: 35,
			Refresh_Business_Unit_for_Records_Owned_By_Principal: 95,
			Refresh_Runtime_Integration_Components_Async_Operation: 250,
			Regenerate_Entity_Row_Count_Snapshot_Data: 46,
			Regenerate_Read_Share_Snapshot_Data: 47,
			Register_Offering_Async_Operation: 305,
			Reindex_all_indices_maintenance_job: 30,
			Relationship_Assistant_Cards: 69,
			Resource_Booking_Sync: 68,
			Revoke_Inherited_Access: 96,
			Ribbon_Client_Metadata_Operation: 76,
			SQM_Data_Collection: 9,
			StageAndUpgrade_Async_Operation: 211,
			Storage_Limit_Notification: 31,
			Sync_Synapse_Tables_Schema: 307,
			System_Event: 1,
			TDS_endpoint_provisioning_new_TVF_functions_and_grant_permission_Async_Operation: 330,
			Transform_Parse_Data: 4,
			UninstallSolution_Async_Operation: 208,
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