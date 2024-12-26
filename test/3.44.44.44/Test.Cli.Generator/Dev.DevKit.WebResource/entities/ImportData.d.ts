//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ImportDataApi {
		/**
		* DynamicsCrm.DevKit ImportDataApi
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
		/** Unique identifier of the user who created the import data. */
		readonly CreatedBy: string;
		/** Date and time when the import data was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the importdata. */
		readonly CreatedOnBehalfBy: string;
		/** Data row of the import file. */
		Data: string;
		/** Type of the import error. */
		ErrorType: OptionSet.ImportData.ErrorType;
		/** Information about whether this import data has an error. */
		HasError: boolean;
		/** Unique identifier of the import data. */
		ImportDataId: string;
		/** Unique identifier of the import file for this import data. */
		ImportFileId: string;
		/** Original line number of the data present in the file. */
		LineNumber: number;
		/** Unique identifier of the user who last modified the import data. */
		readonly ModifiedBy: string;
		/** Date and time when the import data was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the importdata. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Business unit that owns the import data. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the import data. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the import data. */
		readonly OwningUser: string;
		/** Unique identifier of the record. */
		RecordId: string;
		/** Status of the import data. */
		readonly StateCode: OptionSet.ImportData.StateCode;
		/** Reason for the status of the import data. */
		StatusCode: OptionSet.ImportData.StatusCode;
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
			/** 0 */
			Create,
			/** 1 */
			Update
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Active
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}