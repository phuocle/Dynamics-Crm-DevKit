//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class StagedEntityAttributeApi {
		/**
		* DynamicsCrm.DevKit StagedEntityAttributeApi
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
		/** The attribute decription with properties for async metadata creation */
		AttributeDescription: string;
		/** The AttributeTypeId for staged attribute. */
		AttributeTypeId: string;
		/** ComponentState for staged attribute */
		ComponentState: number;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The ID of the entity for staged attribute. */
		EntityId: string;
		/** The external name of the staged attribute for virtual entity. */
		ExternalName: string;
		/** Determines if Staged Attribute has multiple labels */
		HasMultipleLabels: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Determines if Staged Attribute IsLogical */
		IsLogical: boolean;
		/** Determines if Staged Attribute is Primary Key */
		IsPKAttribute: boolean;
		/** The LogicalName of the staged attribute. */
		LogicalName: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the staged attribute. */
		Name: string;
		/** The localized description of the attribute. */
		OriginalLocalizedDescription: string;
		/** The original localized name of the staged attribute. */
		OriginalLocalizedName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** OverwriteTime for staged attribute. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** The PhysicalName of the staged attribute. */
		PhysicalName: string;
		/** The SolutionId for staged attribute. */
		SolutionId: string;
		/** Unique identifier for entity attribute instances */
		StagedEntityAttributeId: string;
		/** Status of the Staged Entity Attribute */
		statecode: OptionSet.StagedEntityAttribute.statecode;
		/** Reason for the status of the Staged Entity Attribute */
		statuscode: OptionSet.StagedEntityAttribute.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Determines if Staged Attribute is ValidForReadAPI */
		ValidForReadAPI: boolean;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** The attribute decription with properties for async metadata creation */
			readonly AttributeDescription: string;
			/** The AttributeTypeId for staged attribute. */
			readonly AttributeTypeId: string;
			/** ComponentState for staged attribute */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The ID of the entity for staged attribute. */
			readonly EntityId: string;
			/** The external name of the staged attribute for virtual entity. */
			readonly ExternalName: string;
			/** Determines if Staged Attribute has multiple labels */
			readonly HasMultipleLabels: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Determines if Staged Attribute IsLogical */
			readonly IsLogical: string;
			/** Determines if Staged Attribute is Primary Key */
			readonly IsPKAttribute: string;
			/** The LogicalName of the staged attribute. */
			readonly LogicalName: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the staged attribute. */
			readonly Name: string;
			/** The localized description of the attribute. */
			readonly OriginalLocalizedDescription: string;
			/** The original localized name of the staged attribute. */
			readonly OriginalLocalizedName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** OverwriteTime for staged attribute. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** The PhysicalName of the staged attribute. */
			readonly PhysicalName: string;
			/** The SolutionId for staged attribute. */
			readonly SolutionId: string;
			/** Unique identifier for entity attribute instances */
			readonly StagedEntityAttributeId: string;
			/** Status of the Staged Entity Attribute */
			readonly statecode: string;
			/** Reason for the status of the Staged Entity Attribute */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Determines if Staged Attribute is ValidForReadAPI */
			readonly ValidForReadAPI: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace StagedEntityAttribute {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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