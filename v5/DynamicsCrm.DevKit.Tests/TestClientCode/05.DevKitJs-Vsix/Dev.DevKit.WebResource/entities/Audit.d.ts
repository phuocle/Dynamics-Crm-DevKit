//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAudit_Information {
		interface tab_General_Sections {
			/** Feedback Contacts */
			Section1: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the audit record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the entity that is being audited */
			ObjectTypeCode: DevKit.Controls.String;
			/** Unique identifier of the user who caused a change */
			UserId: DevKit.Controls.Lookup;
		}
	}
	export class FormAudit_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Audit_Information */
		Body: DevKit.FormAudit_Information.Body;
	}
	export class AuditApi {
		/**
		* DynamicsCrm.DevKit AuditApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Actions the user can perform that cause a change */
		readonly Action: OptionSet.Audit.Action | null;
		/** Additional Info for Audit */
		AdditionalInfo: string | null;
		/** Contains a CSV of the ColumnNumber metadata property of attributes */
		readonly AttributeMask: string | null;
		/** Unique identifier of the auditing instance */
		readonly AuditId: string | null;
		/** Unique identifier of the calling user in case of an impersonated call */
		readonly CallingUserId: string | null;
		/** For given audit action, contains a string value describing the change details when corresponding IsAuditEnabled property is True */
		readonly ChangeData: string | null;
		/** Date and time when the audit record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** The action that causes the audit--it will be create, delete, update, upsert or archive */
		readonly Operation: OptionSet.Audit.Operation | null;
		/** Time to live in seconds for audit record */
		readonly TimeToLiveInSeconds: number | null;
		/** Unique identifier for multiple changes that are part of a single operation; this field contains the same GUID for all the audit rows generated in a single transaction */
		readonly TransactionId: string | null;
		/** Additional information associated to the user who caused the change. */
		UserAdditionalInfo: string | null;
		/** Version number of the audit. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Actions the user can perform that cause a change */
			readonly Action: string;
			/** Additional Info for Audit */
			readonly AdditionalInfo: string;
			/** Contains a CSV of the ColumnNumber metadata property of attributes */
			readonly AttributeMask: string;
			/** Unique identifier of the auditing instance */
			readonly AuditId: string;
			/** Unique identifier of the calling user in case of an impersonated call */
			readonly CallingUserId: string;
			/** For given audit action, contains a string value describing the change details when corresponding IsAuditEnabled property is True */
			readonly ChangeData: string;
			/** Date and time when the audit record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** The action that causes the audit--it will be create, delete, update, upsert or archive */
			readonly Operation: string;
			/** Time to live in seconds for audit record */
			readonly TimeToLiveInSeconds: string;
			/** Unique identifier for multiple changes that are part of a single operation; this field contains the same GUID for all the audit rows generated in a single transaction */
			readonly TransactionId: string;
			/** Additional information associated to the user who caused the change. */
			readonly UserAdditionalInfo: string;
			/** Version number of the audit. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Audit {
		enum Action {
			/** Activate = 4*/
			Activate = 4,
			/** Add_Item = 37*/
			Add_Item = 37,
			/** Add_Member = 31*/
			Add_Member = 31,
			/** Add_Members = 35*/
			Add_Members = 35,
			/** Add_Privileges_to_Role = 57*/
			Add_Privileges_to_Role = 57,
			/** Add_Substitute = 39*/
			Add_Substitute = 39,
			/** Add_To_Queue = 52*/
			Add_To_Queue = 52,
			/** ApplicationBasedAccessAllowed = 122*/
			ApplicationBasedAccessAllowed = 122,
			/** ApplicationBasedAccessDenied = 121*/
			ApplicationBasedAccessDenied = 121,
			/** Approve = 28*/
			Approve = 28,
			/** Archive = 115*/
			Archive = 115,
			/** Assign = 13*/
			Assign = 13,
			/** Assign_Role_To_Team = 53*/
			Assign_Role_To_Team = 53,
			/** Assign_Role_To_User = 55*/
			Assign_Role_To_User = 55,
			/** Associate_Entities = 33*/
			Associate_Entities = 33,
			/** Attribute_Audit_Started = 106*/
			Attribute_Audit_Started = 106,
			/** Attribute_Audit_Stopped = 109*/
			Attribute_Audit_Stopped = 109,
			/** Audit_Change_at_Attribute_Level = 103*/
			Audit_Change_at_Attribute_Level = 103,
			/** Audit_Change_at_Entity_Level = 102*/
			Audit_Change_at_Entity_Level = 102,
			/** Audit_Change_at_Org_Level = 104*/
			Audit_Change_at_Org_Level = 104,
			/** Audit_Disabled = 110*/
			Audit_Disabled = 110,
			/** Audit_Enabled = 107*/
			Audit_Enabled = 107,
			/** Audit_Log_Deletion = 111*/
			Audit_Log_Deletion = 111,
			/** Book = 50*/
			Book = 50,
			/** Cancel = 17*/
			Cancel = 17,
			/** Cascade = 11*/
			Cascade = 11,
			/** Clone = 61*/
			Clone = 61,
			/** Close = 16*/
			Close = 16,
			/** Complete = 18*/
			Complete = 18,
			/** Create = 1*/
			Create = 1,
			/** Create_AI_assisted = 123*/
			Create_AI_assisted = 123,
			/** Deactivate = 5*/
			Deactivate = 5,
			/** Delete = 3*/
			Delete = 3,
			/** Delete_Attribute = 101*/
			Delete_Attribute = 101,
			/** Delete_Entity = 100*/
			Delete_Entity = 100,
			/** Disassociate_Entities = 34*/
			Disassociate_Entities = 34,
			/** Disqualify = 25*/
			Disqualify = 25,
			/** Enabled_for_organization = 63*/
			Enabled_for_organization = 63,
			/** Entity_Audit_Started = 105*/
			Entity_Audit_Started = 105,
			/** Entity_Audit_Stopped = 108*/
			Entity_Audit_Stopped = 108,
			/** Fulfill = 22*/
			Fulfill = 22,
			/** Generate_Quote_From_Opportunity = 51*/
			Generate_Quote_From_Opportunity = 51,
			/** Hold = 30*/
			Hold = 30,
			/** Import_Mappings = 60*/
			Import_Mappings = 60,
			/** Internal_Processing = 46*/
			Internal_Processing = 46,
			/** Invoice = 29*/
			Invoice = 29,
			/** IPFirewallAcccesAllowed = 119*/
			IPFirewallAcccesAllowed = 119,
			/** IPFirewallAcccesDenied = 118*/
			IPFirewallAcccesDenied = 118,
			/** Lose = 45*/
			Lose = 45,
			/** Merge = 12*/
			Merge = 12,
			/** Modify_Share = 48*/
			Modify_Share = 48,
			/** Paid = 23*/
			Paid = 23,
			/** Qualify = 24*/
			Qualify = 24,
			/** Read_Unmasked = 125*/
			Read_Unmasked = 125,
			/** Reject = 27*/
			Reject = 27,
			/** Remove_Item = 38*/
			Remove_Item = 38,
			/** Remove_Member = 32*/
			Remove_Member = 32,
			/** Remove_Members = 36*/
			Remove_Members = 36,
			/** Remove_Privileges_From_Role = 58*/
			Remove_Privileges_From_Role = 58,
			/** Remove_Role_From_Team = 54*/
			Remove_Role_From_Team = 54,
			/** Remove_Role_From_User = 56*/
			Remove_Role_From_User = 56,
			/** Remove_Substitute = 40*/
			Remove_Substitute = 40,
			/** Renew = 42*/
			Renew = 42,
			/** Reopen = 21*/
			Reopen = 21,
			/** Replace_Privileges_In_Role = 59*/
			Replace_Privileges_In_Role = 59,
			/** Reschedule = 47*/
			Reschedule = 47,
			/** Resolve = 20*/
			Resolve = 20,
			/** Restore = 120*/
			Restore = 120,
			/** Retain = 116*/
			Retain = 116,
			/** Retrieve = 15*/
			Retrieve = 15,
			/** Revise = 43*/
			Revise = 43,
			/** RollbackRetain = 117*/
			RollbackRetain = 117,
			/** Send_Direct_Email = 62*/
			Send_Direct_Email = 62,
			/** Set_State = 41*/
			Set_State = 41,
			/** Share = 14*/
			Share = 14,
			/** Submit = 26*/
			Submit = 26,
			/** Unknown = 0*/
			Unknown = 0,
			/** Unshare = 49*/
			Unshare = 49,
			/** Update = 2*/
			Update = 2,
			/** Update_AI_assisted = 124*/
			Update_AI_assisted = 124,
			/** Upsert = 6*/
			Upsert = 6,
			/** User_Access_Audit_Started = 112*/
			User_Access_Audit_Started = 112,
			/** User_Access_Audit_Stopped = 113*/
			User_Access_Audit_Stopped = 113,
			/** User_Access_via_Web = 64*/
			User_Access_via_Web = 64,
			/** User_Access_via_Web_Services = 65*/
			User_Access_via_Web_Services = 65,
			/** Win = 44*/
			Win = 44
		}
		enum ObjectTypeCode {
		}
		enum Operation {
			/** Access = 4*/
			Access = 4,
			/** Archive = 115*/
			Archive = 115,
			/** Create = 1*/
			Create = 1,
			/** CustomOperation = 200*/
			CustomOperation = 200,
			/** Delete = 3*/
			Delete = 3,
			/** Restore = 118*/
			Restore = 118,
			/** Retain = 116*/
			Retain = 116,
			/** RollbackRetain = 117*/
			RollbackRetain = 117,
			/** Update = 2*/
			Update = 2,
			/** Upsert = 5*/
			Upsert = 5
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}