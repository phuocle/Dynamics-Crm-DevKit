//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Actions the user can perform that cause a change */
		readonly Action: OptionSet.Audit.Action;
		/** Contains a CSV of the ColumnNumber metadata property of attributes */
		readonly AttributeMask: string;
		/** Unique identifier of the auditing instance */
		readonly AuditId: string;
		/** Unique identifier of the calling user in case of an impersonated call */
		readonly CallingUserId: string;
		/** Contains a CSV of old values of all the attributes whose IsAuditEnabled property is True and are being changed */
		readonly ChangeData: string;
		/** Date and time when the audit record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** The action that causes the audit--it will be create, delete, or update */
		readonly Operation: OptionSet.Audit.Operation;
		/** Unique identifier for multiple changes that are part of a single operation; this field contains the same GUID for all the audit rows generated in a single transaction */
		readonly TransactionId: string;
		/** Additional information associated to the user who caused the change. */
		UserAdditionalInfo: string;
		/** Unique identifier of the user who caused a change */
		readonly userid: string;
		readonly FormattedValue: {
			/** Actions the user can perform that cause a change */
			readonly Action: string;
			/** Contains a CSV of the ColumnNumber metadata property of attributes */
			readonly AttributeMask: string;
			/** Unique identifier of the auditing instance */
			readonly AuditId: string;
			/** Unique identifier of the calling user in case of an impersonated call */
			readonly CallingUserId: string;
			/** Contains a CSV of old values of all the attributes whose IsAuditEnabled property is True and are being changed */
			readonly ChangeData: string;
			/** Date and time when the audit record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** The action that causes the audit--it will be create, delete, or update */
			readonly Operation: string;
			/** Unique identifier for multiple changes that are part of a single operation; this field contains the same GUID for all the audit rows generated in a single transaction */
			readonly TransactionId: string;
			/** Additional information associated to the user who caused the change. */
			readonly UserAdditionalInfo: string;
			/** Unique identifier of the user who caused a change */
			readonly userid: string;
		}
	}
}
declare namespace OptionSet {
	namespace Audit {
		enum Action {
			/** 4 */
			Activate,
			/** 37 */
			Add_Item,
			/** 31 */
			Add_Member,
			/** 35 */
			Add_Members,
			/** 57 */
			Add_Privileges_to_Role,
			/** 39 */
			Add_Substitute,
			/** 52 */
			Add_To_Queue,
			/** 28 */
			Approve,
			/** 13 */
			Assign,
			/** 53 */
			Assign_Role_To_Team,
			/** 55 */
			Assign_Role_To_User,
			/** 33 */
			Associate_Entities,
			/** 106 */
			Attribute_Audit_Started,
			/** 109 */
			Attribute_Audit_Stopped,
			/** 103 */
			Audit_Change_at_Attribute_Level,
			/** 102 */
			Audit_Change_at_Entity_Level,
			/** 104 */
			Audit_Change_at_Org_Level,
			/** 110 */
			Audit_Disabled,
			/** 107 */
			Audit_Enabled,
			/** 111 */
			Audit_Log_Deletion,
			/** 50 */
			Book,
			/** 17 */
			Cancel,
			/** 11 */
			Cascade,
			/** 61 */
			Clone,
			/** 16 */
			Close,
			/** 18 */
			Complete,
			/** 1 */
			Create,
			/** 5 */
			Deactivate,
			/** 3 */
			Delete,
			/** 101 */
			Delete_Attribute,
			/** 100 */
			Delete_Entity,
			/** 34 */
			Disassociate_Entities,
			/** 25 */
			Disqualify,
			/** 63 */
			Enabled_for_organization,
			/** 105 */
			Entity_Audit_Started,
			/** 108 */
			Entity_Audit_Stopped,
			/** 22 */
			Fulfill,
			/** 51 */
			Generate_Quote_From_Opportunity,
			/** 30 */
			Hold,
			/** 60 */
			Import_Mappings,
			/** 46 */
			Internal_Processing,
			/** 29 */
			Invoice,
			/** 45 */
			Lose,
			/** 12 */
			Merge,
			/** 48 */
			Modify_Share,
			/** 23 */
			Paid,
			/** 24 */
			Qualify,
			/** 27 */
			Reject,
			/** 38 */
			Remove_Item,
			/** 32 */
			Remove_Member,
			/** 36 */
			Remove_Members,
			/** 58 */
			Remove_Privileges_From_Role,
			/** 54 */
			Remove_Role_From_Team,
			/** 56 */
			Remove_Role_From_User,
			/** 40 */
			Remove_Substitute,
			/** 42 */
			Renew,
			/** 21 */
			Reopen,
			/** 59 */
			Replace_Privileges_In_Role,
			/** 47 */
			Reschedule,
			/** 20 */
			Resolve,
			/** 15 */
			Retrieve,
			/** 43 */
			Revise,
			/** 62 */
			Send_Direct_Email,
			/** 41 */
			Set_State,
			/** 14 */
			Share,
			/** 26 */
			Submit,
			/** 0 */
			Unknown,
			/** 49 */
			Unshare,
			/** 2 */
			Update,
			/** 112 */
			User_Access_Audit_Started,
			/** 113 */
			User_Access_Audit_Stopped,
			/** 64 */
			User_Access_via_Web,
			/** 65 */
			User_Access_via_Web_Services,
			/** 44 */
			Win
		}
		enum ObjectTypeCode {
		}
		enum Operation {
			/** 4 */
			Access,
			/** 1 */
			Create,
			/** 3 */
			Delete,
			/** 2 */
			Update
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}