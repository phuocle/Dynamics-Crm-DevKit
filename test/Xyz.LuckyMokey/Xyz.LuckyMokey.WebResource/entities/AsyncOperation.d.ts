//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAsyncOperation_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Form.Controls.ControlDateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Form.Controls.ControlString;
			/** Message related to the system job. */
			Message: DevKit.Form.Controls.ControlString;
			/** Name of the system job. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type of the system job. */
			OperationType: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormAsyncOperation_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form AsyncOperation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form AsyncOperation_Information */
		Body: LuckyMokey.FormAsyncOperation_Information.Body;
	}
}
declare namespace OptionSet {
	namespace AsyncOperation {
		enum OperationType {
			/** 1 */
			System_Event,
			/** 2 */
			Bulk_Email,
			/** 3 */
			Import_File_Parse,
			/** 4 */
			Transform_Parse_Data,
			/** 5 */
			Import,
			/** 6 */
			Activity_Propagation,
			/** 7 */
			Duplicate_Detection_Rule_Publish,
			/** 8 */
			Bulk_Duplicate_Detection,
			/** 9 */
			SQM_Data_Collection,
			/** 10 */
			Workflow,
			/** 11 */
			Quick_Campaign,
			/** 12 */
			Matchcode_Update,
			/** 13 */
			Bulk_Delete,
			/** 14 */
			Deletion_Service,
			/** 15 */
			Index_Management,
			/** 16 */
			Collect_Organization_Statistics,
			/** 17 */
			Import_Subprocess,
			/** 18 */
			Calculate_Organization_Storage_Size,
			/** 19 */
			Collect_Organization_Database_Statistics,
			/** 20 */
			Collection_Organization_Size_Statistics,
			/** 21 */
			Database_Tuning,
			/** 22 */
			Calculate_Organization_Maximum_Storage_Size,
			/** 23 */
			Bulk_Delete_Subprocess,
			/** 24 */
			Update_Statistic_Intervals,
			/** 25 */
			Organization_Full_Text_Catalog_Index,
			/** 26 */
			Database_log_backup,
			/** 27 */
			Update_Contract_States,
			/** 28 */
			DBCC_SHRINKDATABASE_maintenance_job,
			/** 29 */
			DBCC_SHRINKFILE_maintenance_job,
			/** 30 */
			Reindex_all_indices_maintenance_job,
			/** 31 */
			Storage_Limit_Notification,
			/** 32 */
			Cleanup_inactive_workflow_assemblies,
			/** 35 */
			Recurring_Series_Expansion,
			/** 38 */
			Import_Sample_Data,
			/** 40 */
			Goal_Roll_Up,
			/** 41 */
			Audit_Partition_Creation,
			/** 42 */
			Check_For_Language_Pack_Updates,
			/** 43 */
			Provision_Language_Pack,
			/** 44 */
			Update_Organization_Database,
			/** 45 */
			Update_Solution,
			/** 46 */
			Regenerate_Entity_Row_Count_Snapshot_Data,
			/** 47 */
			Regenerate_Read_Share_Snapshot_Data,
			/** 50 */
			Outgoing_Activity,
			/** 51 */
			Incoming_Email_Processing,
			/** 52 */
			Mailbox_Test_Access,
			/** 53 */
			Encryption_Health_Check,
			/** 54 */
			Execute_Async_Request,
			/** 49 */
			Post_to_Yammer,
			/** 56 */
			Update_Entitlement_States,
			/** 57 */
			Calculate_Rollup_Field,
			/** 58 */
			Mass_Calculate_Rollup_Field,
			/** 59 */
			Import_Translation,
			/** 62 */
			Convert_Date_And_Time_Behavior,
			/** 63 */
			EntityKey_Index_Creation,
			/** 65 */
			Update_Knowledge_Article_States,
			/** 68 */
			Resource_Booking_Sync,
			/** 69 */
			Relationship_Assistant_Cards,
			/** 71 */
			Cleanup_Solution_Components,
			/** 72 */
			App_Module_Metadata_Operation,
			/** 73 */
			ALM_Anomaly_Detection_Operation,
			/** 75 */
			Flow_Notification,
			/** 76 */
			Ribbon_Client_Metadata_Operation,
			/** 79 */
			CallbackRegistration_Expander_Operation,
			/** 90 */
			CascadeAssign,
			/** 91 */
			CascadeDelete,
			/** 92 */
			Event_Expander_Operation,
			/** 93 */
			Import_Solution_Metadata,
			/** 94 */
			Bulk_Delete_File_Attachment,
			/** 95 */
			Refresh_Business_Unit_for_Records_Owned_By_Principal,
			/** 96 */
			Revoke_Inherited_Access
		}
		enum StateCode {
			/** 0 */
			Ready,
			/** 1 */
			Suspended,
			/** 2 */
			Locked,
			/** 3 */
			Completed
		}
		enum StatusCode {
			/** 0 */
			Waiting_For_Resources,
			/** 10 */
			Waiting,
			/** 20 */
			In_Progress,
			/** 21 */
			Pausing,
			/** 22 */
			Canceling,
			/** 30 */
			Succeeded,
			/** 31 */
			Failed,
			/** 32 */
			Canceled
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}