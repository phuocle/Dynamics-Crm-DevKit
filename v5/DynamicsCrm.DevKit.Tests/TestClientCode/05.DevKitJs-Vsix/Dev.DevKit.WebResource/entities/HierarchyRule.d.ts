//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class HierarchyRuleApi {
		/**
		* DynamicsCrm.DevKit HierarchyRuleApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.HierarchyRule.ComponentState | null;
		/** Description of the hierarchy rule. */
		Description: string | null;
		/** Unique identifier of the record type hierarchy rule. */
		HierarchyRuleID: string | null;
		/** Unique identifier of the hierarchy rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly HierarchyRuleIDUnique: string | null;
		/** Version in which the hierarchy rule is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		readonly IsManaged: boolean | null;
		/** Name of the hierarchy rule. */
		Name: string | null;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string | null;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Form Id for the Primary Entity */
		PrimaryEntityFormID: string | null;
		/** Logical Name for the Primary entity. */
		PrimaryEntityLogicalName: string | null;
		readonly PublishedOn_UtcDateAndTime: Date | null;
		/** Form Id for the Related Entity. */
		readonly RelatedEntityFormId: string | null;
		/** Logical Name for the Related entity. */
		readonly RelatedEntityLogicalName: string | null;
		/** To show disabled records or not. */
		ShowDisabled: boolean | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** columns to sort in the primary entity */
		readonly SortBy: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Version number of the Hierarchy rule. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Description of the hierarchy rule. */
			readonly Description: string;
			/** Unique identifier of the record type hierarchy rule. */
			readonly HierarchyRuleID: string;
			/** Unique identifier of the hierarchy rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly HierarchyRuleIDUnique: string;
			/** Version in which the hierarchy rule is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Name of the hierarchy rule. */
			readonly Name: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** Date and time when the record was created. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Form Id for the Primary Entity */
			readonly PrimaryEntityFormID: string;
			/** Logical Name for the Primary entity. */
			readonly PrimaryEntityLogicalName: string;
			readonly PublishedOn_UtcDateAndTime: string;
			/** Form Id for the Related Entity. */
			readonly RelatedEntityFormId: string;
			/** Logical Name for the Related entity. */
			readonly RelatedEntityLogicalName: string;
			/** To show disabled records or not. */
			readonly ShowDisabled: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** columns to sort in the primary entity */
			readonly SortBy: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Version number of the Hierarchy rule. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace HierarchyRule {
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