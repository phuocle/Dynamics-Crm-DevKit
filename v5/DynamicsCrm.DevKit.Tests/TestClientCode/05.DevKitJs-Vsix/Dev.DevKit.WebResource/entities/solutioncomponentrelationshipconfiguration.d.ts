//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formsolutioncomponentrelationshipconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
		}
	}
	export class Formsolutioncomponentrelationshipconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form solutioncomponentrelationshipconfiguration_Information */
		Body: DevKit.Formsolutioncomponentrelationshipconfiguration_Information.Body;
	}
	export class solutioncomponentrelationshipconfigurationApi {
		/**
		* DynamicsCrm.DevKit solutioncomponentrelationshipconfigurationApi
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
		AddRelatedComponents: boolean | null;
		CascadeRemoveComponents: boolean | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.solutioncomponentrelationshipconfiguration.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier for Entity Relationship associated with Solution Component Relationship Configuration. */
		EntityRelationshipId: string | null;
		ForceAddingManagedRelatedComponents: boolean | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Boolean that indicates if this relationship can be excluded from the export as a missing dependency if the target is part of an api managed solution. */
		NoMissingDependencyForApiManagedSolution: boolean | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		PrimaryEntityDependencyType: OptionSet.solutioncomponentrelationshipconfiguration.PrimaryEntityDependencyType | null;
		RespectParentRootComponentBehavior: boolean | null;
		SecondaryEntityDependencyType: OptionSet.solutioncomponentrelationshipconfiguration.SecondaryEntityDependencyType | null;
		/** Unique identifier for entity instances */
		solutioncomponentrelationshipconfigurationId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Solution Component Relationship Configuration */
		statecode: OptionSet.solutioncomponentrelationshipconfiguration.statecode | null;
		/** Reason for the status of the Solution Component Relationship Configuration */
		statuscode: OptionSet.solutioncomponentrelationshipconfiguration.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
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
			readonly AddRelatedComponents: string;
			readonly CascadeRemoveComponents: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier for Entity Relationship associated with Solution Component Relationship Configuration. */
			readonly EntityRelationshipId: string;
			readonly ForceAddingManagedRelatedComponents: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Boolean that indicates if this relationship can be excluded from the export as a missing dependency if the target is part of an api managed solution. */
			readonly NoMissingDependencyForApiManagedSolution: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			readonly PrimaryEntityDependencyType: string;
			readonly RespectParentRootComponentBehavior: string;
			readonly SecondaryEntityDependencyType: string;
			/** Unique identifier for entity instances */
			readonly solutioncomponentrelationshipconfigurationId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Solution Component Relationship Configuration */
			readonly statecode: string;
			/** Reason for the status of the Solution Component Relationship Configuration */
			readonly statuscode: string;
			/** For internal use only. */
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
	namespace solutioncomponentrelationshipconfiguration {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum PrimaryEntityDependencyType {
			/** Hard_Dependency = 0*/
			Hard_Dependency = 0,
			/** Soft_Dependency = 1*/
			Soft_Dependency = 1
		}
		enum SecondaryEntityDependencyType {
			/** Hard_Dependency = 0*/
			Hard_Dependency = 0,
			/** Soft_Dependency = 1*/
			Soft_Dependency = 1
		}
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