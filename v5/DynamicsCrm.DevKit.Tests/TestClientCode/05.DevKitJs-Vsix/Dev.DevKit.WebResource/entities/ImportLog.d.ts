//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ImportLogApi {
		/**
		* DynamicsCrm.DevKit ImportLogApi
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
		/** Additional information related to the error. */
		AdditionalInfo: string | null;
		/** Value in the column. */
		ColumnValue: string | null;
		/** Unique identifier of the user who created the import log. */
		readonly CreatedBy: string | null;
		/** Date and time when the import log was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the importlog. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of an error. */
		ErrorDescription: string | null;
		/** Error code of an error. */
		ErrorNumber: number | null;
		/** Name of the column heading. */
		HeaderColumn: string | null;
		/** Unique identifier of the import data for this import log. */
		ImportDataId: string | null;
		/** Unique identifier of the import file for this import log. */
		ImportFileId: string | null;
		/** Unique identifier of the import log. */
		ImportLogId: string | null;
		/** Original line number of the data used in this log. */
		LineNumber: number | null;
		/** Phase for which the log is recorded. */
		LogPhaseCode: OptionSet.ImportLog.LogPhaseCode | null;
		/** Unique identifier of the user who last modified the import log. */
		readonly ModifiedBy: string | null;
		/** Date and time when the import log was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the importlog. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Business unit that owns the import log. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the import log. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the import log. */
		readonly OwningUser: string | null;
		/** Sequence number of the error in this log. */
		readonly SequenceNumber: number | null;
		/** Status of the import log. */
		readonly StateCode: OptionSet.ImportLog.StateCode | null;
		/** Reason for the status of the import log. */
		StatusCode: OptionSet.ImportLog.StatusCode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Additional information related to the error. */
			readonly AdditionalInfo: string;
			/** Value in the column. */
			readonly ColumnValue: string;
			/** Unique identifier of the user who created the import log. */
			readonly CreatedBy: string;
			/** Date and time when the import log was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the importlog. */
			readonly CreatedOnBehalfBy: string;
			/** Description of an error. */
			readonly ErrorDescription: string;
			/** Error code of an error. */
			readonly ErrorNumber: string;
			/** Name of the column heading. */
			readonly HeaderColumn: string;
			/** Unique identifier of the import data for this import log. */
			readonly ImportDataId: string;
			/** Unique identifier of the import file for this import log. */
			readonly ImportFileId: string;
			/** Unique identifier of the import log. */
			readonly ImportLogId: string;
			/** Original line number of the data used in this log. */
			readonly LineNumber: string;
			/** Phase for which the log is recorded. */
			readonly LogPhaseCode: string;
			/** Unique identifier of the user who last modified the import log. */
			readonly ModifiedBy: string;
			/** Date and time when the import log was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the importlog. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Business unit that owns the import log. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the import log. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the import log. */
			readonly OwningUser: string;
			/** Sequence number of the error in this log. */
			readonly SequenceNumber: string;
			/** Status of the import log. */
			readonly StateCode: string;
			/** Reason for the status of the import log. */
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImportLog {
		enum LogPhaseCode {
			/** Import_Create = 2*/
			Import_Create = 2,
			/** Import_Update = 3*/
			Import_Update = 3,
			/** Parse = 0*/
			Parse = 0,
			/** Transform = 1*/
			Transform = 1
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0
		}
		enum StatusCode {
			/** Active = 0*/
			Active = 0
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