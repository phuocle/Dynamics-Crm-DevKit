//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_forecastrecurrence_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows the name of the forecast recurrence. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_forecastrecurrence_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_forecastrecurrence_Information */
		Body: DevKit.Formmsdyn_forecastrecurrence_Information.Body;
		/** The Process of form msdyn_forecastrecurrence_Information */
		Process: DevKit.Formmsdyn_forecastrecurrence_Information.Process;
		/** The SidePanes of form msdyn_forecastrecurrence_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_forecastrecurrenceApi {
		/**
		* DynamicsCrm.DevKit msdyn_forecastrecurrenceApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Stores the FetchXML for participating records for closed opportunities. For internal use. */
		msdyn_actualparticipatingrecordsfetchxml: string;
		/** Stores information about why the recalculation of forecast hierarchy failed. */
		msdyn_failureinfo: string;
		/** Unique identifier for the forecast definition that is associated with the forecast recurrence. */
		msdyn_forecastdefinitionid: string;
		/** Unique identifier for the forecast recurrence. */
		msdyn_forecastrecurrenceId: string;
		/** Stores the FetchXML for participating records for inprogress opportunities. For internal use. */
		msdyn_inprogressparticipatingrecordsfetchxml: string;
		/** For internal use only */
		msdyn_ishierarchylocked: boolean;
		/** The date and time when the forecast hierarchy was successfully recalculated. */
		msdyn_lastrecalculatedon_UtcDateAndTime: Date;
		/** Shows the name of the forecast recurrence. */
		msdyn_name: string;
		/** For internal use only. */
		msdyn_recalculatestatuschangedon_UtcDateAndTime: Date;
		/** For internal use only. */
		msdyn_recalculationstarttime_UtcDateAndTime: Date;
		/** Shows the recalculation status for the forecast recurrence hierarchy. */
		msdyn_recalculationstatus: number;
		/** Stores the description for the recalculation status of forecast hierarchy. */
		msdyn_recalculationstatusdescription: string;
		/** Stores the recurrence index that is associated with the forecast recurrence hierarchy. */
		msdyn_recurrenceindex: number;
		/** Shows the date from which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
		msdyn_validfrom_DateOnly: Date;
		/** Shows the date till which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
		msdyn_validto_DateOnly: Date;
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
		/** Status of the Forecast Recurrence */
		statecode: OptionSet.msdyn_forecastrecurrence.statecode;
		/** Reason for the status of the Forecast Recurrence */
		statuscode: OptionSet.msdyn_forecastrecurrence.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Stores the FetchXML for participating records for closed opportunities. For internal use. */
			readonly msdyn_actualparticipatingrecordsfetchxml: string;
			/** Stores information about why the recalculation of forecast hierarchy failed. */
			readonly msdyn_failureinfo: string;
			/** Unique identifier for the forecast definition that is associated with the forecast recurrence. */
			readonly msdyn_forecastdefinitionid: string;
			/** Unique identifier for the forecast recurrence. */
			readonly msdyn_forecastrecurrenceId: string;
			/** Stores the FetchXML for participating records for inprogress opportunities. For internal use. */
			readonly msdyn_inprogressparticipatingrecordsfetchxml: string;
			/** For internal use only */
			readonly msdyn_ishierarchylocked: string;
			/** The date and time when the forecast hierarchy was successfully recalculated. */
			readonly msdyn_lastrecalculatedon_UtcDateAndTime: string;
			/** Shows the name of the forecast recurrence. */
			readonly msdyn_name: string;
			/** For internal use only. */
			readonly msdyn_recalculatestatuschangedon_UtcDateAndTime: string;
			/** For internal use only. */
			readonly msdyn_recalculationstarttime_UtcDateAndTime: string;
			/** Shows the recalculation status for the forecast recurrence hierarchy. */
			readonly msdyn_recalculationstatus: string;
			/** Stores the description for the recalculation status of forecast hierarchy. */
			readonly msdyn_recalculationstatusdescription: string;
			/** Stores the recurrence index that is associated with the forecast recurrence hierarchy. */
			readonly msdyn_recurrenceindex: string;
			/** Shows the date from which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
			readonly msdyn_validfrom_DateOnly: string;
			/** Shows the date till which the forecast is applicable. The date and time are displayed in the time zone selected in Dynamics 365 Customer Engagement apps options. */
			readonly msdyn_validto_DateOnly: string;
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
			/** Status of the Forecast Recurrence */
			readonly statecode: string;
			/** Reason for the status of the Forecast Recurrence */
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
	namespace msdyn_forecastrecurrence {
		enum OwnerIdType {
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}