//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SystemApplicationMetadataApi {
		/**
		* DynamicsCrm.DevKit SystemApplicationMetadataApi
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
		/** The logical name of the entity this application metadata is associated with. */
		AssociatedEntityLogicalName: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** For internal use only. */
		Data: string;
		/** For internal use only. */
		Dependency: string;
		/** For internal use only. */
		DisplayName: string;
		/** For internal use only. */
		FormFactor: number;
		/** For internal use only. */
		IsDefault: boolean;
		/** For internal use only. */
		Lcid: number;
		/** For internal use only. */
		MetadataSubtype: number;
		/** For internal use only. */
		MetadataType: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** For internal use only. */
		SourceId: string;
		/** For internal use only. */
		State: number;
		/** For internal use only. */
		SystemApplicationMetadataId: string;
		/** For internal use only. */
		Version: string;
		readonly FormattedValue: {
			/** The logical name of the entity this application metadata is associated with. */
			readonly AssociatedEntityLogicalName: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. */
			readonly Data: string;
			/** For internal use only. */
			readonly Dependency: string;
			/** For internal use only. */
			readonly DisplayName: string;
			/** For internal use only. */
			readonly FormFactor: string;
			/** For internal use only. */
			readonly IsDefault: string;
			/** For internal use only. */
			readonly Lcid: string;
			/** For internal use only. */
			readonly MetadataSubtype: string;
			/** For internal use only. */
			readonly MetadataType: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly SourceId: string;
			/** For internal use only. */
			readonly State: string;
			/** For internal use only. */
			readonly SystemApplicationMetadataId: string;
			/** For internal use only. */
			readonly Version: string;
		}
	}
}
declare namespace OptionSet {
	namespace SystemApplicationMetadata {
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