//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OfficeDocumentApi {
		/**
		* DynamicsCrm.DevKit OfficeDocumentApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Client data regarding this office document. */
		ClientData: DevKit.WebApi.StringValue;
		/** Bytes of the office document. */
		Content: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the office document. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the office document was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the office document. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Option set for selecting the type of the office document */
		DocumentType: DevKit.WebApi.OptionSetValue;
		/** Lock state of file. */
		FileLockState: DevKit.WebApi.IntegerValue;
		/** File Size. */
		FileSize: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the office document. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the office document was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the office document. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the office document. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the office document. */
		OfficeDocumentId: DevKit.WebApi.GuidValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Stores the SHA256 Hash key value. */
		SHA256: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace OfficeDocument {
		enum DocumentType {
			/** 1 */
			Microsoft_Excel,
			/** 2 */
			Microsoft_Word
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}