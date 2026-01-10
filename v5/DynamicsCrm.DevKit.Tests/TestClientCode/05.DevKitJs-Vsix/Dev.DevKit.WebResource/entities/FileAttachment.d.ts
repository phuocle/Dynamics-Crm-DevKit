//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class FileAttachmentApi {
		/**
		* DynamicsCrm.DevKit FileAttachmentApi
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
		/** Body */
		readonly Body: string | null;
		/** Date and time when the attachment was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the file attachment. */
		FileAttachmentId: string | null;
		/** File name of the attachment. */
		FileName: string | null;
		/** File pointer of the attachment. */
		readonly FilePointer: string | null;
		/** File size of the attachment in bytes. */
		readonly FileSizeInBytes: number | null;
		/** IsCommitted */
		readonly IsCommitted: boolean | null;
		/** MIME type of the attachment. */
		MimeType: string | null;
		/** Prefix of the file pointer in blob storage. */
		readonly Prefix: string | null;
		/** Regarding attribute schema name of the attachment. */
		RegardingFieldName: string | null;
		/** Storage pointer. */
		readonly StoragePointer: string | null;
		/** Version number of the file attachment. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Body */
			readonly Body: string;
			/** Date and time when the attachment was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the file attachment. */
			readonly FileAttachmentId: string;
			/** File name of the attachment. */
			readonly FileName: string;
			/** File pointer of the attachment. */
			readonly FilePointer: string;
			/** File size of the attachment in bytes. */
			readonly FileSizeInBytes: string;
			/** IsCommitted */
			readonly IsCommitted: string;
			/** MIME type of the attachment. */
			readonly MimeType: string;
			/** Prefix of the file pointer in blob storage. */
			readonly Prefix: string;
			/** Regarding attribute schema name of the attachment. */
			readonly RegardingFieldName: string;
			/** Storage pointer. */
			readonly StoragePointer: string;
			/** Version number of the file attachment. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace FileAttachment {
		enum ObjectIdTypeCode {
		}
		enum ObjectTypeCode {
			/** Account = 1*/
			Account = 1
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