//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class msdyn_AIDataProcessingEventApi {
		/**
		* DynamicsCrm.DevKit msdyn_AIDataProcessingEventApi
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
		/** Unique identifier for entity instances */
		msdyn_AIDataProcessingEventId: string | null;
		/** Free area. Used for instructions to a reviewer, or JSON for cases where maker needs more customized info. */
		msdyn_CustomData: string | null;
		/** Input data of the process (e.g. file content for Document Processing). */
		readonly msdyn_InputData_name: string | null;
		/** Format of Input Data (JSON, XML, etc) */
		msdyn_InputDataFormat: string | null;
		/** Name of data source (e.g. file name on Document Processing) */
		msdyn_Name: string | null;
		/** Output of AI models for this data. (e.g. Extracted data from Documents in Doc. Processing) */
		msdyn_ProcessedData: string | null;
		/** Current processing status of data. */
		msdyn_ProcessingStatus: OptionSet.msdyn_AIDataProcessingEvent.msdyn_ProcessingStatus | null;
		/** Agent or Model processing this data. */
		msdyn_ProcessorName: string | null;
		/** Type of processor (e.g. bot or workflow) */
		msdyn_ProcessorType: string | null;
		/** Date input data was received. */
		msdyn_ReceivedDate_TimezoneDateOnly: Date | null;
		/** Date the last update of Processing Status happened. */
		msdyn_UpdatedDate_UtcDateAndTime: Date | null;
		/** Result of validation process when this data is handled by an agent or AI model. */
		msdyn_ValidationResult: string | null;
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
		/** Status of the DataProcessingEvent */
		statecode: OptionSet.msdyn_AIDataProcessingEvent.statecode | null;
		/** Reason for the status of the DataProcessingEvent */
		statuscode: OptionSet.msdyn_AIDataProcessingEvent.statuscode | null;
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
			/** Unique identifier for entity instances */
			readonly msdyn_AIDataProcessingEventId: string;
			/** Free area. Used for instructions to a reviewer, or JSON for cases where maker needs more customized info. */
			readonly msdyn_CustomData: string;
			/** Input data of the process (e.g. file content for Document Processing). */
			readonly msdyn_InputData_name: string;
			/** Format of Input Data (JSON, XML, etc) */
			readonly msdyn_InputDataFormat: string;
			/** Name of data source (e.g. file name on Document Processing) */
			readonly msdyn_Name: string;
			/** Output of AI models for this data. (e.g. Extracted data from Documents in Doc. Processing) */
			readonly msdyn_ProcessedData: string;
			/** Current processing status of data. */
			readonly msdyn_ProcessingStatus: string;
			/** Agent or Model processing this data. */
			readonly msdyn_ProcessorName: string;
			/** Type of processor (e.g. bot or workflow) */
			readonly msdyn_ProcessorType: string;
			/** Date input data was received. */
			readonly msdyn_ReceivedDate_TimezoneDateOnly: string;
			/** Date the last update of Processing Status happened. */
			readonly msdyn_UpdatedDate_UtcDateAndTime: string;
			/** Result of validation process when this data is handled by an agent or AI model. */
			readonly msdyn_ValidationResult: string;
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
			/** Status of the DataProcessingEvent */
			readonly statecode: string;
			/** Reason for the status of the DataProcessingEvent */
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
	namespace msdyn_AIDataProcessingEvent {
		enum msdyn_ProcessingStatus {
			/** Exported = 375150005*/
			Exported = 375150005,
			/** Exporting_Failed = 375150006*/
			Exporting_Failed = 375150006,
			/** Manual_Review = 375150004*/
			Manual_Review = 375150004,
			/** New = 375150000*/
			New = 375150000,
			/** Processed = 375150001*/
			Processed = 375150001,
			/** Processing_Failed = 375150002*/
			Processing_Failed = 375150002,
			/** Rejected = 375150007*/
			Rejected = 375150007,
			/** Validated = 375150003*/
			Validated = 375150003
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