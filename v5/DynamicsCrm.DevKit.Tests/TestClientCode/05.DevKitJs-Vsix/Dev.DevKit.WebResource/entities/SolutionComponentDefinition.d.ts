//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SolutionComponentDefinitionApi {
		/**
		* DynamicsCrm.DevKit SolutionComponentDefinitionApi
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
		/** Boolean identifier for using deleting base layers. */
		AllowDeleteBaseSolutionRowAndFakeDelete: boolean | null;
		/** Whether this component allows Overwrite Customizations when update managed solution */
		AllowOverwriteCustomizations: boolean | null;
		/** Boolean identifier for a row that is marked as logically deleted in the Active solution and should be re-created back */
		AllowRecreateForLogicallyDeletedRow: boolean | null;
		/** Flag used to indicate whether this component always removes active customizations on uninstall */
		AlwaysRemoveActiveCustomizationsOnUninstall: boolean | null;
		/** Flag indicating whether the subcomponent can be added directly to the SolutionComponents table */
		CanBeAddedToSolutionComponents: boolean | null;
		/** Whether this component is hidden using an IsHidden managed property */
		CanBeHidden: boolean | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SolutionComponentDefinition.ComponentState | null;
		/** Path to component's XML node */
		ComponentXPath: string | null;
		/** Flag that indicates whether this component uses its descendent as its viewable component */
		DescendentIsViewableComponent: boolean | null;
		/** Group Parent Component Attribute Name */
		GroupParentComponentAttributeName: string | null;
		/** Group Parent Component Type */
		GroupParentComponentType: number | null;
		/** Boolean that indicates if the component has a renamable attribute */
		HasIsRenameableAttribute: boolean | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Is dependency disabled for the component */
		IsDependencyDisabled: boolean | null;
		/** Boolean that indicates if the component has user interface enabled */
		IsDisplayable: boolean | null;
		/** Boolean that indicates if the component is managed */
		IsManaged: boolean | null;
		/** Whether this component is either a mergeable component, or part of a mergeable component */
		IsMergeable: boolean | null;
		/** Boolean identifier for metadata components */
		IsMetadata: boolean | null;
		/** Whether this component is viewable in the SDK and UI */
		IsViewable: boolean | null;
		/** Label Type Code */
		LabelTypeCode: number | null;
		/** Name */
		Name: string | null;
		/** Object Type Code */
		ObjectTypeCode: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** The attribute name of the parent attribute */
		ParentAttributeName: string | null;
		/** Component Entity Logical Name */
		PrimaryEntityName: string | null;
		/** Remove Active Customizations Behavior. */
		RemoveActiveCustomizationsBehavior: OptionSet.SolutionComponentDefinition.RemoveActiveCustomizationsBehavior | null;
		/** Root Solution Component Type Name */
		RootAttributeName: string | null;
		/** Root Solution Component Type */
		RootComponent: number | null;
		/** Unique identifier of the solution component definition */
		SolutionComponentDefinitionId: string | null;
		/** For internal use only. */
		readonly SolutionComponentDefinitionIdUnique: string | null;
		/** Solution Component Type */
		SolutionComponentType: number | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Boolean identifier for forcing delete for solution update. */
		UseForceDeleteForSolutionUpdate: boolean | null;
		/** Boolean identifier for always forcing update. */
		UseForceUpdateAlways: boolean | null;
		/** Boolean identifier for using sentine rows. */
		UseSentinelRowInBaseSolution: boolean | null;
		/** The component type of the viewable descendent */
		ViewableDescendentComponentType: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Boolean identifier for using deleting base layers. */
			readonly AllowDeleteBaseSolutionRowAndFakeDelete: string;
			/** Whether this component allows Overwrite Customizations when update managed solution */
			readonly AllowOverwriteCustomizations: string;
			/** Boolean identifier for a row that is marked as logically deleted in the Active solution and should be re-created back */
			readonly AllowRecreateForLogicallyDeletedRow: string;
			/** Flag used to indicate whether this component always removes active customizations on uninstall */
			readonly AlwaysRemoveActiveCustomizationsOnUninstall: string;
			/** Flag indicating whether the subcomponent can be added directly to the SolutionComponents table */
			readonly CanBeAddedToSolutionComponents: string;
			/** Whether this component is hidden using an IsHidden managed property */
			readonly CanBeHidden: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Path to component's XML node */
			readonly ComponentXPath: string;
			/** Flag that indicates whether this component uses its descendent as its viewable component */
			readonly DescendentIsViewableComponent: string;
			/** Group Parent Component Attribute Name */
			readonly GroupParentComponentAttributeName: string;
			/** Group Parent Component Type */
			readonly GroupParentComponentType: string;
			/** Boolean that indicates if the component has a renamable attribute */
			readonly HasIsRenameableAttribute: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Is dependency disabled for the component */
			readonly IsDependencyDisabled: string;
			/** Boolean that indicates if the component has user interface enabled */
			readonly IsDisplayable: string;
			/** Boolean that indicates if the component is managed */
			readonly IsManaged: string;
			/** Whether this component is either a mergeable component, or part of a mergeable component */
			readonly IsMergeable: string;
			/** Boolean identifier for metadata components */
			readonly IsMetadata: string;
			/** Whether this component is viewable in the SDK and UI */
			readonly IsViewable: string;
			/** Label Type Code */
			readonly LabelTypeCode: string;
			/** Name */
			readonly Name: string;
			/** Object Type Code */
			readonly ObjectTypeCode: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** The attribute name of the parent attribute */
			readonly ParentAttributeName: string;
			/** Component Entity Logical Name */
			readonly PrimaryEntityName: string;
			/** Remove Active Customizations Behavior. */
			readonly RemoveActiveCustomizationsBehavior: string;
			/** Root Solution Component Type Name */
			readonly RootAttributeName: string;
			/** Root Solution Component Type */
			readonly RootComponent: string;
			/** Unique identifier of the solution component definition */
			readonly SolutionComponentDefinitionId: string;
			/** For internal use only. */
			readonly SolutionComponentDefinitionIdUnique: string;
			/** Solution Component Type */
			readonly SolutionComponentType: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Boolean identifier for forcing delete for solution update. */
			readonly UseForceDeleteForSolutionUpdate: string;
			/** Boolean identifier for always forcing update. */
			readonly UseForceUpdateAlways: string;
			/** Boolean identifier for using sentine rows. */
			readonly UseSentinelRowInBaseSolution: string;
			/** The component type of the viewable descendent */
			readonly ViewableDescendentComponentType: string;
		}
	}
}
declare namespace OptionSet {
	namespace SolutionComponentDefinition {
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
		enum RemoveActiveCustomizationsBehavior {
			/** Cascade = 2*/
			Cascade = 2,
			/** No_Cascade = 1*/
			No_Cascade = 1,
			/** None = 0*/
			None = 0
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