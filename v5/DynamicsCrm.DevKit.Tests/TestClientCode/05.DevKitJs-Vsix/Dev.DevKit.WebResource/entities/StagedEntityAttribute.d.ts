//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class StagedEntityAttributeApi {
		/**
		* DynamicsCrm.DevKit StagedEntityAttributeApi
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
		/** The attribute decription with properties for async metadata creation */
		AttributeDescription: string | null;
		/** The id of the parent attribute. */
		AttributeOf: string | null;
		/** The AttributeTypeId for staged attribute. */
		AttributeTypeId: string | null;
		/** ComponentState for staged attribute */
		ComponentState: number | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** The ID of the entity for staged attribute. */
		EntityId: string | null;
		/** The external name of the staged attribute for virtual entity. */
		ExternalName: string | null;
		/** Determines if Staged Attribute has multiple labels */
		HasMultipleLabels: boolean | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Determines if Staged Attribute IsLogical */
		IsLogical: boolean | null;
		/** Determines if Staged Attribute is Primary Key */
		IsPKAttribute: boolean | null;
		/** The LogicalName of the staged attribute. */
		LogicalName: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the staged attribute. */
		Name: string | null;
		/** The localized description of the attribute. */
		OriginalLocalizedDescription: string | null;
		/** The original localized name of the staged attribute. */
		OriginalLocalizedName: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** OverwriteTime for staged attribute. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** The PhysicalName of the staged attribute. */
		PhysicalName: string | null;
		/** The SolutionId for staged attribute. */
		SolutionId: string | null;
		/** Unique identifier for entity attribute instances */
		StagedEntityAttributeId: string | null;
		/** A unique identifier used to tie together all objects staged within the same transaction. */
		StagingExecutionContextId: string | null;
		/** Status of the Staged Entity Attribute */
		statecode: OptionSet.StagedEntityAttribute.statecode | null;
		/** Reason for the status of the Staged Entity Attribute */
		statuscode: OptionSet.StagedEntityAttribute.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Determines if Staged Attribute is ValidForReadAPI */
		ValidForReadAPI: boolean | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The attribute decription with properties for async metadata creation */
			readonly AttributeDescription: string;
			/** The id of the parent attribute. */
			readonly AttributeOf: string;
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
			/** A unique identifier used to tie together all objects staged within the same transaction. */
			readonly StagingExecutionContextId: string;
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
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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