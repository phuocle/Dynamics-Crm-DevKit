//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class StagedRelationshipApi {
		/**
		* DynamicsCrm.DevKit StagedRelationshipApi
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
		/** Cascade archive behavior. */
		CascadeArchive: number | null;
		/** Cascade assign behavior. */
		CascadeAssign: number | null;
		/** Cascade delete behavior. */
		CascadeDelete: number | null;
		/** Cascade link mask value. */
		CascadeLinkMask: number | null;
		/** Cascade merge behavior. */
		CascadeMerge: number | null;
		/** Cascade reparent behavior. */
		CascadeReparent: number | null;
		/** Cascade rollup view behavior. */
		CascadeRollupView: number | null;
		/** Cascade share behavior. */
		CascadeShare: number | null;
		/** Cascade unshare behavior. */
		CascadeUnShare: number | null;
		/** Solution component state of relationship. */
		ComponentState: number | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Identifier of the entity key. */
		EntityKeyId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** The version in which this relationship was introduced. */
		readonly IntroducedVersion: string | null;
		/** Indicates if the relationship is custom. */
		IsCustomRelationship: boolean | null;
		/** Indicates if the relationship is logical. */
		IsLogical: boolean | null;
		/** Indicates if the relationship attribute is denormalized. */
		IsRelationshipAttributeDenormalized: boolean | null;
		/** Indicates if the relationship is valid for advanced find. */
		IsValidForAdvancedFind: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the relationship. */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Overwrite time of the solution component relationship. */
		OverwriteTime_UtcDateAndTime: Date | null;
		/** Record identifier. */
		RecordId: number | null;
		/** Identifier of the referenced attribute. */
		ReferencedAttributeId: string | null;
		/** Identifier of the referenced entity. */
		ReferencedEntityId: string | null;
		/** Identifier of the referencing attribute. */
		ReferencingAttributeId: string | null;
		/** Identifier of the referencing entity. */
		ReferencingEntityId: string | null;
		/** Identifier of the relationship row. */
		RelationshipRowId: string | null;
		/** Type of the relationship. */
		RelationshipType: number | null;
		/** Identifier of the solution that contains relationship. */
		SolutionId: string | null;
		/** Unique identifier for entity instances. */
		StagedRelationshipId: string | null;
		/** A unique identifier used to tie together all objects staged within the same transaction. */
		StagingExecutionContextId: string | null;
		/** Status of the staged relationship. */
		statecode: OptionSet.StagedRelationship.statecode | null;
		/** Reason for the status of the staged relationship. */
		statuscode: OptionSet.StagedRelationship.statuscode | null;
		/** Identifier of the supporting solution. */
		SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Cascade archive behavior. */
			readonly CascadeArchive: string;
			/** Cascade assign behavior. */
			readonly CascadeAssign: string;
			/** Cascade delete behavior. */
			readonly CascadeDelete: string;
			/** Cascade link mask value. */
			readonly CascadeLinkMask: string;
			/** Cascade merge behavior. */
			readonly CascadeMerge: string;
			/** Cascade reparent behavior. */
			readonly CascadeReparent: string;
			/** Cascade rollup view behavior. */
			readonly CascadeRollupView: string;
			/** Cascade share behavior. */
			readonly CascadeShare: string;
			/** Cascade unshare behavior. */
			readonly CascadeUnShare: string;
			/** Solution component state of relationship. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Identifier of the entity key. */
			readonly EntityKeyId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** The version in which this relationship was introduced. */
			readonly IntroducedVersion: string;
			/** Indicates if the relationship is custom. */
			readonly IsCustomRelationship: string;
			/** Indicates if the relationship is logical. */
			readonly IsLogical: string;
			/** Indicates if the relationship attribute is denormalized. */
			readonly IsRelationshipAttributeDenormalized: string;
			/** Indicates if the relationship is valid for advanced find. */
			readonly IsValidForAdvancedFind: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the relationship. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Overwrite time of the solution component relationship. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Record identifier. */
			readonly RecordId: string;
			/** Identifier of the referenced attribute. */
			readonly ReferencedAttributeId: string;
			/** Identifier of the referenced entity. */
			readonly ReferencedEntityId: string;
			/** Identifier of the referencing attribute. */
			readonly ReferencingAttributeId: string;
			/** Identifier of the referencing entity. */
			readonly ReferencingEntityId: string;
			/** Identifier of the relationship row. */
			readonly RelationshipRowId: string;
			/** Type of the relationship. */
			readonly RelationshipType: string;
			/** Identifier of the solution that contains relationship. */
			readonly SolutionId: string;
			/** Unique identifier for entity instances. */
			readonly StagedRelationshipId: string;
			/** A unique identifier used to tie together all objects staged within the same transaction. */
			readonly StagingExecutionContextId: string;
			/** Status of the staged relationship. */
			readonly statecode: string;
			/** Reason for the status of the staged relationship. */
			readonly statuscode: string;
			/** Identifier of the supporting solution. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace StagedRelationship {
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