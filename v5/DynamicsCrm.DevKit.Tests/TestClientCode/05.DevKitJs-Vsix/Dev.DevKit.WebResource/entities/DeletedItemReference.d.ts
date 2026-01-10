//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDeleted_Item_Reference {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user who deleted the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was deleted. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who deleted the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			/** Deleted Object */
			DeletedObject: DevKit.Controls.Lookup;
			/** The Display name of the deleted record. */
			name: DevKit.Controls.String;
			/** Number of Processed Records */
			ProcessedRecords: DevKit.Controls.Integer;
			/** Regarding Object */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Total impacted Records */
			TotalRecords: DevKit.Controls.Integer;
		}
	}
	export class FormDeleted_Item_Reference extends DevKit.IForm {
		/**
		* Deleted Item Reference [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Deleted_Item_Reference */
		Body: DevKit.FormDeleted_Item_Reference.Body;
		/** The Header section of form Deleted_Item_Reference */
		Header: DevKit.FormDeleted_Item_Reference.Header;
	}
	export class DeletedItemReferenceApi {
		/**
		* DynamicsCrm.DevKit DeletedItemReferenceApi
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
		/** Unique identifier of the user who deleted the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was deleted. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who deleted the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier for entity instances */
		DeletedItemReferenceId: string | null;
		/** For internal use only. */
		readonly DeletedLogicalNames_name: string | null;
		/** For internal use only. */
		readonly DeletedRecords_name: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The Display name of the deleted record. */
		name: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Number of Processed Records */
		readonly ProcessedRecords: number | null;
		/** Regarding Object */
		RegardingObjectId: string | null;
		/** Status of the Deleted Record Reference */
		statecode: OptionSet.DeletedItemReference.statecode | null;
		/** Reason for the status of the Deleted Record Reference */
		statuscode: OptionSet.DeletedItemReference.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Total impacted Records */
		readonly TotalRecords: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** If true this record can be restored. */
		readonly ValidForRestore: boolean | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who deleted the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was deleted. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who deleted the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier for entity instances */
			readonly DeletedItemReferenceId: string;
			/** For internal use only. */
			readonly DeletedLogicalNames_name: string;
			/** For internal use only. */
			readonly DeletedRecords_name: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The Display name of the deleted record. */
			readonly name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Number of Processed Records */
			readonly ProcessedRecords: string;
			/** Regarding Object */
			readonly RegardingObjectId: string;
			/** Status of the Deleted Record Reference */
			readonly statecode: string;
			/** Reason for the status of the Deleted Record Reference */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Total impacted Records */
			readonly TotalRecords: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** If true this record can be restored. */
			readonly ValidForRestore: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DeletedItemReference {
		enum deletedobjectIdType {
		}
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