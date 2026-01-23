//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formretentionoperation_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the retention operation. */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class Formretentionoperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form retentionoperation_Information */
		Body: DevKit.Formretentionoperation_Information.Body;
	}
	export class retentionoperationApi {
		/**
		* DynamicsCrm.DevKit retentionoperationApi
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
		/** Addintional details. */
		AdditionalDetails: string | null;
		/** For internal use only. */
		AsyncOperationId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Fetch XML format criteria used to select records for retention. */
		Criteria: string | null;
		/** Endtime of the retention operation. */
		EndTime_UtcDateAndTime: Date | null;
		/** Total failed records. */
		FailedCount: number | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Last marked version number of the retained records. */
		LastMarkedVersionNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the retention operation. */
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
		/** Pagination criteria to process next page records. */
		PagingCookie: string | null;
		/** Identifier for retention config. */
		RetentionConfigId: string | null;
		/** Total retained records. */
		RetentionCount: number | null;
		/** Unique identifier for execution instance. */
		retentionoperationId: string | null;
		/** Table name on which retention was executed. */
		RootEntityLogicalName: string | null;
		/** Start time of the retention operation. */
		StartTime_UtcDateAndTime: Date | null;
		/** Status of the retentionoperation */
		statecode: OptionSet.retentionoperation.statecode | null;
		/** Reason for the status of the retentionoperation */
		statuscode: OptionSet.retentionoperation.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Addintional details. */
			readonly AdditionalDetails: string;
			/** For internal use only. */
			readonly AsyncOperationId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Fetch XML format criteria used to select records for retention. */
			readonly Criteria: string;
			/** Endtime of the retention operation. */
			readonly EndTime_UtcDateAndTime: string;
			/** Total failed records. */
			readonly FailedCount: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Last marked version number of the retained records. */
			readonly LastMarkedVersionNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the retention operation. */
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
			/** Pagination criteria to process next page records. */
			readonly PagingCookie: string;
			/** Identifier for retention config. */
			readonly RetentionConfigId: string;
			/** Total retained records. */
			readonly RetentionCount: string;
			/** Unique identifier for execution instance. */
			readonly retentionoperationId: string;
			/** Table name on which retention was executed. */
			readonly RootEntityLogicalName: string;
			/** Start time of the retention operation. */
			readonly StartTime_UtcDateAndTime: string;
			/** Status of the retentionoperation */
			readonly statecode: string;
			/** Reason for the status of the retentionoperation */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace retentionoperation {
		enum statecode {
			/** Completed = 3*/
			Completed = 3,
			/** Inprogress = 2*/
			Inprogress = 2,
			/** Scheduled = 0*/
			Scheduled = 0
		}
		enum statuscode {
			/** Cancelled = 32*/
			Cancelled = 32,
			/** Copying = 21*/
			Copying = 21,
			/** Deleting = 22*/
			Deleting = 22,
			/** Failed = 31*/
			Failed = 31,
			/** Marking = 20*/
			Marking = 20,
			/** Succeeded = 30*/
			Succeeded = 30,
			/** Waiting = 0*/
			Waiting = 0
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