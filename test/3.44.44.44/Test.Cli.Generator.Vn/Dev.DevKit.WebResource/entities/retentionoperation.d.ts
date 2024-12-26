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
		interface Navigation {
			retentionoperation_retentionopera: DevKit.Controls.NavigationItem
		}
	}
	class Formretentionoperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form retentionoperation_Information */
		Body: DevKit.Formretentionoperation_Information.Body;
		/** The Navigation of form retentionoperation_Information */
		Navigation: DevKit.Formretentionoperation_Information.Navigation;
		/** The SidePanes of form retentionoperation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class retentionoperationApi {
		/**
		* DynamicsCrm.DevKit retentionoperationApi
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
		/** Addintional details. */
		AdditionalDetails: string;
		/** For internal use only. */
		AsyncOperationId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Fetch XML format criteria used to select records for retention. */
		Criteria: string;
		/** Endtime of the retention operation. */
		EndTime_UtcDateAndTime: Date;
		/** Total failed records. */
		FailedCount: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Last marked version number of the retained records. */
		LastMarkedVersionNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the retention operation. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Pagination criteria to process next page records. */
		PagingCookie: string;
		/** Identifier for retention config. */
		RetentionConfigId: string;
		/** Total retained records. */
		RetentionCount: number;
		/** Unique identifier for execution instance. */
		retentionoperationId: string;
		/** Table name on which retention was executed. */
		RootEntityLogicalName: string;
		/** Start time of the retention operation. */
		StartTime_UtcDateAndTime: Date;
		/** Status of the retentionoperation */
		statecode: OptionSet.retentionoperation.statecode;
		/** Reason for the status of the retentionoperation */
		statuscode: OptionSet.retentionoperation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 3 */
			Completed,
			/** 2 */
			Inprogress,
			/** 0 */
			Scheduled
		}
		enum statuscode {
			/** 32 */
			Cancelled,
			/** 21 */
			Copying,
			/** 22 */
			Deleting,
			/** 31 */
			Failed,
			/** 20 */
			Marking,
			/** 30 */
			Succeeded,
			/** 0 */
			Waiting
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}