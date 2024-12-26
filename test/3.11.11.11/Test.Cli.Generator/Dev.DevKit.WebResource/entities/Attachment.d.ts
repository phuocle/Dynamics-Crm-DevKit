//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AttachmentApi {
		/**
		* DynamicsCrm.DevKit AttachmentApi
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
		/** Unique identifier of the attachment. */
		AttachmentId: string;
		/** Contents of the attachment. */
		Body: string;
		/** File name of the attachment. */
		FileName: string;
		/** File pointer of the attachment. */
		readonly FilePointer: string;
		/** File size of the attachment. */
		readonly FileSize: number;
		/** MIME type of the attachment. */
		MimeType: string;
		/** Prefix of the file pointer in blob storage. */
		readonly Prefix: string;
		/** Storage pointer. */
		readonly StoragePointer: string;
		/** Subject associated with the attachment. */
		Subject: string;
		/** Version number of the attachment. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the attachment. */
			readonly AttachmentId: string;
			/** Contents of the attachment. */
			readonly Body: string;
			/** File name of the attachment. */
			readonly FileName: string;
			/** File pointer of the attachment. */
			readonly FilePointer: string;
			/** File size of the attachment. */
			readonly FileSize: string;
			/** MIME type of the attachment. */
			readonly MimeType: string;
			/** Prefix of the file pointer in blob storage. */
			readonly Prefix: string;
			/** Storage pointer. */
			readonly StoragePointer: string;
			/** Subject associated with the attachment. */
			readonly Subject: string;
			/** Version number of the attachment. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Attachment {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}