//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class OfficeDocumentApi {
		/**
		* DynamicsCrm.DevKit OfficeDocumentApi
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
		/** Client data regarding this office document. */
		ClientData: string | null;
		/** Bytes of the office document. */
		Content: string | null;
		/** Unique identifier of the user who created the office document. */
		readonly CreatedBy: string | null;
		/** Date and time when the office document was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the office document. */
		readonly CreatedOnBehalfBy: string | null;
		/** Option set for selecting the type of the office document */
		DocumentType: OptionSet.OfficeDocument.DocumentType | null;
		/** Lock state of file. */
		FileLockState: number | null;
		/** File Size. */
		FileSize: number | null;
		/** Unique identifier of the user who last modified the office document. */
		readonly ModifiedBy: string | null;
		/** Date and time when the office document was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the office document. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the office document. */
		Name: string | null;
		/** Unique identifier of the office document. */
		OfficeDocumentId: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Stores the SHA256 Hash key value. */
		SHA256: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Client data regarding this office document. */
			readonly ClientData: string;
			/** Bytes of the office document. */
			readonly Content: string;
			/** Unique identifier of the user who created the office document. */
			readonly CreatedBy: string;
			/** Date and time when the office document was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the office document. */
			readonly CreatedOnBehalfBy: string;
			/** Option set for selecting the type of the office document */
			readonly DocumentType: string;
			/** Lock state of file. */
			readonly FileLockState: string;
			/** File Size. */
			readonly FileSize: string;
			/** Unique identifier of the user who last modified the office document. */
			readonly ModifiedBy: string;
			/** Date and time when the office document was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the office document. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the office document. */
			readonly Name: string;
			/** Unique identifier of the office document. */
			readonly OfficeDocumentId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Stores the SHA256 Hash key value. */
			readonly SHA256: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace OfficeDocument {
		enum DocumentType {
			/** Microsoft_Excel = 1*/
			Microsoft_Excel = 1,
			/** Microsoft_Word = 2*/
			Microsoft_Word = 2
		}
		enum ObjectTypeCode {
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