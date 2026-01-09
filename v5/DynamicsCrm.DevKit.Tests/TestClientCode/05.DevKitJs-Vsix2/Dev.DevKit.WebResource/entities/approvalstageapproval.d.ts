//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formapprovalstageapproval_Information {
		interface Tabs {
		}
		interface Body {
			/** Choice to allow cancellation of approval */
			AllowCancel: DevKit.Controls.Boolean;
			/** Choice to allow approval reassignment */
			AllowReassign: DevKit.Controls.Boolean;
			/** Custom fields provided by customer */
			CustomFields: DevKit.Controls.String;
			/** Description of approval */
			Details: DevKit.Controls.String;
			/** Optional link to the item to approve */
			ItemLink: DevKit.Controls.String;
			/** Optional description for the item link */
			ItemLinkDescription: DevKit.Controls.String;
			/** The guid of the linked approval model */
			ModelId: DevKit.Controls.String;
			/** The type of the linked approval model */
			ModelType: DevKit.Controls.String;
			/** Name */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The result of the approval */
			Result: DevKit.Controls.String;
			/** Whether to send system generated emails */
			SendEmailNotification: DevKit.Controls.Boolean;
			/** Title of the approval */
			Title: DevKit.Controls.String;
		}
	}
	export class Formapprovalstageapproval_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form approvalstageapproval_Information */
		Body: DevKit.Formapprovalstageapproval_Information.Body;
	}
	export class approvalstageapprovalApi {
		/**
		* DynamicsCrm.DevKit approvalstageapprovalApi
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
		/** Choice to allow cancellation of approval */
		AllowCancel: boolean | null;
		/** Choice to allow approval reassignment */
		AllowReassign: boolean | null;
		/** The linked parent approval */
		Approval: string | null;
		/** Unique identifier for entity instances */
		approvalstageapprovalId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Custom fields provided by customer */
		CustomFields: string | null;
		/** Description of approval */
		Details: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Optional link to the item to approve */
		ItemLink: string | null;
		/** Optional description for the item link */
		ItemLinkDescription: string | null;
		/** The guid of the linked approval model */
		ModelId: string | null;
		/** The type of the linked approval model */
		ModelType: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** The result of the approval */
		Result: string | null;
		/** Whether to send system generated emails */
		SendEmailNotification: boolean | null;
		/** Status of the Approval Stage Approval */
		statecode: OptionSet.approvalstageapproval.statecode | null;
		/** Reason for the status of the Approval Stage Approval */
		statuscode: OptionSet.approvalstageapproval.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Title of the approval */
		Title: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Choice to allow cancellation of approval */
			readonly AllowCancel: string;
			/** Choice to allow approval reassignment */
			readonly AllowReassign: string;
			/** The linked parent approval */
			readonly Approval: string;
			/** Unique identifier for entity instances */
			readonly approvalstageapprovalId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Custom fields provided by customer */
			readonly CustomFields: string;
			/** Description of approval */
			readonly Details: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Optional link to the item to approve */
			readonly ItemLink: string;
			/** Optional description for the item link */
			readonly ItemLinkDescription: string;
			/** The guid of the linked approval model */
			readonly ModelId: string;
			/** The type of the linked approval model */
			readonly ModelType: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** The result of the approval */
			readonly Result: string;
			/** Whether to send system generated emails */
			readonly SendEmailNotification: string;
			/** Status of the Approval Stage Approval */
			readonly statecode: string;
			/** Reason for the status of the Approval Stage Approval */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Title of the approval */
			readonly Title: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace approvalstageapproval {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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