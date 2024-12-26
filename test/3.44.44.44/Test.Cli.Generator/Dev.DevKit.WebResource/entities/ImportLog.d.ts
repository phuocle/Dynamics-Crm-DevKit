//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ImportLogApi {
		/**
		* DynamicsCrm.DevKit ImportLogApi
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
		/** Additional information related to the error. */
		AdditionalInfo: string;
		/** Value in the column. */
		ColumnValue: string;
		/** Unique identifier of the user who created the import log. */
		readonly CreatedBy: string;
		/** Date and time when the import log was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the importlog. */
		readonly CreatedOnBehalfBy: string;
		/** Description of an error. */
		ErrorDescription: string;
		/** Error code of an error. */
		ErrorNumber: number;
		/** Name of the column heading. */
		HeaderColumn: string;
		/** Unique identifier of the import data for this import log. */
		ImportDataId: string;
		/** Unique identifier of the import file for this import log. */
		ImportFileId: string;
		/** Unique identifier of the import log. */
		ImportLogId: string;
		/** Original line number of the data used in this log. */
		LineNumber: number;
		/** Phase for which the log is recorded. */
		LogPhaseCode: OptionSet.ImportLog.LogPhaseCode;
		/** Unique identifier of the user who last modified the import log. */
		readonly ModifiedBy: string;
		/** Date and time when the import log was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the importlog. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Business unit that owns the import log. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the import log. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the import log. */
		readonly OwningUser: string;
		/** Sequence number of the error in this log. */
		readonly SequenceNumber: number;
		/** Status of the import log. */
		readonly StateCode: OptionSet.ImportLog.StateCode;
		/** Reason for the status of the import log. */
		StatusCode: OptionSet.ImportLog.StatusCode;
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
			/** 2 */
			Import_Create,
			/** 3 */
			Import_Update,
			/** 0 */
			Parse,
			/** 1 */
			Transform
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