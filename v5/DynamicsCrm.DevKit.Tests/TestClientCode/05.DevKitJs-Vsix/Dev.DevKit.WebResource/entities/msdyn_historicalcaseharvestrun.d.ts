//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class msdyn_historicalcaseharvestrunApi {
		/**
		* DynamicsCrm.DevKit msdyn_historicalcaseharvestrunApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		msdyn_additionaldetails: string | null;
		/** Timestamp when all cases were identified for the run. */
		msdyn_caseidentificationcompletedon_UtcDateAndTime: Date | null;
		msdyn_conditions: string | null;
		msdyn_fieldmapping: string | null;
		/** Indicates what type of entity this harvest run is happening for */
		msdyn_harvestingdatatype: OptionSet.msdyn_historicalcaseharvestrun.msdyn_harvestingdatatype | null;
		msdyn_harvestsourceentity: string | null;
		/** Unique identifier for entity instances */
		msdyn_historicalcaseharvestrunId: string | null;
		msdyn_pageIndex: number | null;
		msdyn_paginationmarker: string | null;
		msdyn_totalarticlescreated: number | null;
		msdyn_totalcasesdiscovered: number | null;
		msdyn_totalcasesprocessed: number | null;
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
		/** Date and time when the batch run process was started. */
		ProcessStartedOn_UtcDateAndTime: Date | null;
		/** Status of the historical case harvest runs */
		statecode: OptionSet.msdyn_historicalcaseharvestrun.statecode | null;
		/** Reason for the status of the historical case harvest run */
		statuscode: OptionSet.msdyn_historicalcaseharvestrun.statuscode | null;
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
			readonly msdyn_additionaldetails: string;
			/** Timestamp when all cases were identified for the run. */
			readonly msdyn_caseidentificationcompletedon_UtcDateAndTime: string;
			readonly msdyn_conditions: string;
			readonly msdyn_fieldmapping: string;
			/** Indicates what type of entity this harvest run is happening for */
			readonly msdyn_harvestingdatatype: string;
			readonly msdyn_harvestsourceentity: string;
			/** Unique identifier for entity instances */
			readonly msdyn_historicalcaseharvestrunId: string;
			readonly msdyn_pageIndex: string;
			readonly msdyn_paginationmarker: string;
			readonly msdyn_totalarticlescreated: string;
			readonly msdyn_totalcasesdiscovered: string;
			readonly msdyn_totalcasesprocessed: string;
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
			/** Date and time when the batch run process was started. */
			readonly ProcessStartedOn_UtcDateAndTime: string;
			/** Status of the historical case harvest runs */
			readonly statecode: string;
			/** Reason for the status of the historical case harvest run */
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
	namespace msdyn_historicalcaseharvestrun {
		enum msdyn_harvestingdatatype {
			/** Case = 0*/
			Case = 0,
			/** Conversation = 1*/
			Conversation = 1,
			/** Custom_Entity = 2*/
			Custom_Entity = 2
		}
		enum statecode {
			/** Completed = 1*/
			Completed = 1,
			/** Failed = 2*/
			Failed = 2,
			/** InProgress = 0*/
			InProgress = 0,
			/** InQueue = 3*/
			InQueue = 3,
			/** Stopped = 4*/
			Stopped = 4
		}
		enum statuscode {
			/** CaseIdentificationCompleted_3 = 3*/
			CaseIdentificationCompleted_3 = 3,
			/** CaseIdentificationCompleted_9 = 9*/
			CaseIdentificationCompleted_9 = 9,
			/** CaseIdentificationFailed = 5*/
			CaseIdentificationFailed = 5,
			/** CaseIndentificationInProgress_2 = 2*/
			CaseIndentificationInProgress_2 = 2,
			/** CaseIndentificationInProgress_8 = 8*/
			CaseIndentificationInProgress_8 = 8,
			/** Completed = 4*/
			Completed = 4,
			/** CTandEACcheckFailed = 6*/
			CTandEACcheckFailed = 6,
			/** Ready_1 = 1*/
			Ready_1 = 1,
			/** Ready_7 = 7*/
			Ready_7 = 7,
			/** Stopped = 10*/
			Stopped = 10
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