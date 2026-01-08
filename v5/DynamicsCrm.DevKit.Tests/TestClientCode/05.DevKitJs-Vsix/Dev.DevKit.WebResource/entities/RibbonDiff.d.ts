//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class RibbonDiffApi {
		/**
		* DynamicsCrm.DevKit RibbonDiffApi
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
		readonly ComponentState: OptionSet.RibbonDiff.ComponentState | null;
		/** Unique identifier of the context group for this tab. If this ribbon definition adds a new tab, then it is a contextual tab. */
		ContextGroupId: string | null;
		/** The string ID of this ribbon definition. */
		DiffId: string | null;
		/** Indicates the type of ribbon definition. */
		readonly DiffType: OptionSet.RibbonDiff.DiffType | null;
		/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
		Entity2: string | null;
		/** Information about whether the ribbondiff is associated with app module. */
		readonly IsAppAware: boolean | null;
		readonly IsManaged: boolean | null;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Ribbon definition XML string that contains one change action. */
		RDX: string | null;
		/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
		RibbonCustomizationId: string | null;
		/** Unique identifier. */
		RibbonDiffId: string | null;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		readonly RibbonDiffUniqueId: string | null;
		/** Sequence in which the definition is to be applied. */
		Sequence: number | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** The ID of the tab this definition applies to. */
		TabId: string | null;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the context group for this tab. If this ribbon definition adds a new tab, then it is a contextual tab. */
			readonly ContextGroupId: string;
			/** The string ID of this ribbon definition. */
			readonly DiffId: string;
			/** Indicates the type of ribbon definition. */
			readonly DiffType: string;
			/** The entity this rule applies to, also the entity this rule was imported from, will be exported to. */
			readonly Entity2: string;
			/** Information about whether the ribbondiff is associated with app module. */
			readonly IsAppAware: string;
			readonly IsManaged: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Ribbon definition XML string that contains one change action. */
			readonly RDX: string;
			/** Unique identifier of the ribbon customization with which the ribbon command is associated. */
			readonly RibbonCustomizationId: string;
			/** Unique identifier. */
			readonly RibbonDiffId: string;
			/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
			readonly RibbonDiffUniqueId: string;
			/** Sequence in which the definition is to be applied. */
			readonly Sequence: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** The ID of the tab this definition applies to. */
			readonly TabId: string;
			/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RibbonDiff {
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
		enum DiffType {
			/** Layout_Template = 2*/
			Layout_Template = 2,
			/** Localized_Label = 3*/
			Localized_Label = 3,
			/** Standard = 0*/
			Standard = 0,
			/** Tab = 1*/
			Tab = 1
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