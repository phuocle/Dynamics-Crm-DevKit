//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	class AuditApi {
		/**
		* DynamicsCrm.DevKit AuditApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Actions the user can perform that cause a change */
		Action: DevKit.WebApi.OptionSetValueReadonly;
		/** Contains a CSV of the ColumnNumber metadata property of attributes */
		AttributeMask: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the auditing instance */
		AuditId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the calling user in case of an impersonated call */
		CallingUserId: DevKit.WebApi.LookupValueReadonly;
		/** Contains a CSV of old values of all the attributes whose IsAuditEnabled property is True and are being changed */
		ChangeData: DevKit.WebApi.StringValueReadonly;
		/** Date and time when the audit record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the record that is being audited */
		ObjectId: DevKit.WebApi.LookupValueReadonly;
		/** The action that causes the audit--it will be create, delete, or update */
		Operation: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the object with which the record is associated. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Unique identifier for multiple changes that are part of a single operation; this field contains the same GUID for all the audit rows generated in a single transaction */
		TransactionId: DevKit.WebApi.GuidValueReadonly;
		/** Additional information associated to the user who caused the change. */
		UserAdditionalInfo: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace Audit {
		enum Action {
			/** 0 */
			Unknown,
			/** 1 */
			Create,
			/** 2 */
			Update,
			/** 3 */
			Delete,
			/** 4 */
			Activate,
			/** 5 */
			Deactivate,
			/** 11 */
			Cascade,
			/** 12 */
			Merge,
			/** 13 */
			Assign,
			/** 14 */
			Share,
			/** 15 */
			Retrieve,
			/** 16 */
			Close,
			/** 17 */
			Cancel,
			/** 18 */
			Complete,
			/** 20 */
			Resolve,
			/** 21 */
			Reopen,
			/** 22 */
			Fulfill,
			/** 23 */
			Paid,
			/** 24 */
			Qualify,
			/** 25 */
			Disqualify,
			/** 26 */
			Submit,
			/** 27 */
			Reject,
			/** 28 */
			Approve,
			/** 29 */
			Invoice,
			/** 30 */
			Hold,
			/** 31 */
			Add_Member,
			/** 32 */
			Remove_Member,
			/** 33 */
			Associate_Entities,
			/** 34 */
			Disassociate_Entities,
			/** 35 */
			Add_Members,
			/** 36 */
			Remove_Members,
			/** 37 */
			Add_Item,
			/** 38 */
			Remove_Item,
			/** 39 */
			Add_Substitute,
			/** 40 */
			Remove_Substitute,
			/** 41 */
			Set_State,
			/** 42 */
			Renew,
			/** 43 */
			Revise,
			/** 44 */
			Win,
			/** 45 */
			Lose,
			/** 46 */
			Internal_Processing,
			/** 47 */
			Reschedule,
			/** 48 */
			Modify_Share,
			/** 49 */
			Unshare,
			/** 50 */
			Book,
			/** 51 */
			Generate_Quote_From_Opportunity,
			/** 52 */
			Add_To_Queue,
			/** 53 */
			Assign_Role_To_Team,
			/** 54 */
			Remove_Role_From_Team,
			/** 55 */
			Assign_Role_To_User,
			/** 56 */
			Remove_Role_From_User,
			/** 57 */
			Add_Privileges_to_Role,
			/** 58 */
			Remove_Privileges_From_Role,
			/** 59 */
			Replace_Privileges_In_Role,
			/** 60 */
			Import_Mappings,
			/** 61 */
			Clone,
			/** 62 */
			Send_Direct_Email,
			/** 63 */
			Enabled_for_organization,
			/** 64 */
			User_Access_via_Web,
			/** 65 */
			User_Access_via_Web_Services,
			/** 100 */
			Delete_Entity,
			/** 101 */
			Delete_Attribute,
			/** 102 */
			Audit_Change_at_Entity_Level,
			/** 103 */
			Audit_Change_at_Attribute_Level,
			/** 104 */
			Audit_Change_at_Org_Level,
			/** 105 */
			Entity_Audit_Started,
			/** 106 */
			Attribute_Audit_Started,
			/** 107 */
			Audit_Enabled,
			/** 108 */
			Entity_Audit_Stopped,
			/** 109 */
			Attribute_Audit_Stopped,
			/** 110 */
			Audit_Disabled,
			/** 111 */
			Audit_Log_Deletion,
			/** 112 */
			User_Access_Audit_Started,
			/** 113 */
			User_Access_Audit_Stopped
		}
		enum Operation {
			/** 1 */
			Create,
			/** 2 */
			Update,
			/** 3 */
			Delete,
			/** 4 */
			Access
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}