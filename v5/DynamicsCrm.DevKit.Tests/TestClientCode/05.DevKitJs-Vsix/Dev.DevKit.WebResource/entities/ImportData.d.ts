//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ImportDataApi {
		/**
		* DynamicsCrm.DevKit ImportDataApi
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
		/** Unique identifier of the user who created the import data. */
		readonly CreatedBy: string | null;
		/** Date and time when the import data was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the importdata. */
		readonly CreatedOnBehalfBy: string | null;
		/** Data row of the import file. */
		Data: string | null;
		/** Type of the import error. */
		ErrorType: OptionSet.ImportData.ErrorType | null;
		/** Information about whether this import data has an error. */
		HasError: boolean | null;
		/** Unique identifier of the import data. */
		ImportDataId: string | null;
		/** Unique identifier of the import file for this import data. */
		ImportFileId: string | null;
		/** Original line number of the data present in the file. */
		LineNumber: number | null;
		/** Unique identifier of the user who last modified the import data. */
		readonly ModifiedBy: string | null;
		/** Date and time when the import data was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the importdata. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Business unit that owns the import data. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the import data. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the import data. */
		readonly OwningUser: string | null;
		/** Unique identifier of the record. */
		RecordId: string | null;
		/** Status of the import data. */
		readonly StateCode: OptionSet.ImportData.StateCode | null;
		/** Reason for the status of the import data. */
		StatusCode: OptionSet.ImportData.StatusCode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the import data. */
			readonly CreatedBy: string;
			/** Date and time when the import data was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the importdata. */
			readonly CreatedOnBehalfBy: string;
			/** Data row of the import file. */
			readonly Data: string;
			/** Type of the import error. */
			readonly ErrorType: string;
			/** Information about whether this import data has an error. */
			readonly HasError: string;
			/** Unique identifier of the import data. */
			readonly ImportDataId: string;
			/** Unique identifier of the import file for this import data. */
			readonly ImportFileId: string;
			/** Original line number of the data present in the file. */
			readonly LineNumber: string;
			/** Unique identifier of the user who last modified the import data. */
			readonly ModifiedBy: string;
			/** Date and time when the import data was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the importdata. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Business unit that owns the import data. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the import data. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the import data. */
			readonly OwningUser: string;
			/** Unique identifier of the record. */
			readonly RecordId: string;
			/** Status of the import data. */
			readonly StateCode: string;
			/** Reason for the status of the import data. */
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImportData {
		enum ErrorType {
			/** Create = 0*/
			Create = 0,
			/** Update = 1*/
			Update = 1
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