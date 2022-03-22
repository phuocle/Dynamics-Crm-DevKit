//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SolutionComponentDefinitionApi {
		/**
		* DynamicsCrm.DevKit SolutionComponentDefinitionApi
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
		/** Boolean identifier for using deleting base layers. */
		AllowDeleteBaseSolutionRowAndFakeDelete: boolean;
		/** Whether this component allows Overwrite Customizations when update managed solution */
		AllowOverwriteCustomizations: boolean;
		/** Boolean identifier for a row that is marked as logically deleted in the Active solution and should be re-created back */
		AllowRecreateForLogicallyDeletedRow: boolean;
		/** Flag used to indicate whether this component always removes active customizations on uninstall */
		AlwaysRemoveActiveCustomizationsOnUninstall: boolean;
		/** Flag indicating whether the subcomponent can be added directly to the SolutionComponents table */
		CanBeAddedToSolutionComponents: boolean;
		/** Whether this component is hidden using an IsHidden managed property */
		CanBeHidden: boolean;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SolutionComponentDefinition.ComponentState;
		/** Path to component's XML node */
		ComponentXPath: string;
		/** Flag that indicates whether this component uses its descendent as its viewable component */
		DescendentIsViewableComponent: boolean;
		/** Group Parent Component Attribute Name */
		GroupParentComponentAttributeName: string;
		/** Group Parent Component Type */
		GroupParentComponentType: number;
		/** Boolean that indicates if the component has a renamable attribute */
		HasIsRenameableAttribute: boolean;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Is dependency disabled for the component */
		IsDependencyDisabled: boolean;
		/** Boolean that indicates if the component has user interface enabled */
		IsDisplayable: boolean;
		/** Boolean that indicates if the component is managed */
		IsManaged: boolean;
		/** Whether this component is either a mergeable component, or part of a mergeable component */
		IsMergeable: boolean;
		/** Boolean identifier for metadata components */
		IsMetadata: boolean;
		/** Whether this component is viewable in the SDK and UI */
		IsViewable: boolean;
		/** Label Type Code */
		LabelTypeCode: number;
		/** Name */
		Name: string;
		/** Object Type Code */
		ObjectTypeCode: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** The attribute name of the parent attribute */
		ParentAttributeName: string;
		/** Component Entity Logical Name */
		PrimaryEntityName: string;
		/** Remove Active Customizations Behavior. */
		RemoveActiveCustomizationsBehavior: OptionSet.SolutionComponentDefinition.RemoveActiveCustomizationsBehavior;
		/** Root Solution Component Type Name */
		RootAttributeName: string;
		/** Root Solution Component Type */
		RootComponent: number;
		/** Unique identifier of the solution component definition */
		SolutionComponentDefinitionId: string;
		/** For internal use only. */
		readonly SolutionComponentDefinitionIdUnique: string;
		/** Solution Component Type */
		SolutionComponentType: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Boolean identifier for forcing delete for solution update. */
		UseForceDeleteForSolutionUpdate: boolean;
		/** Boolean identifier for always forcing update. */
		UseForceUpdateAlways: boolean;
		/** Boolean identifier for using sentine rows. */
		UseSentinelRowInBaseSolution: boolean;
		/** The component type of the viewable descendent */
		ViewableDescendentComponentType: number;
	}
}
declare namespace OptionSet {
	namespace SolutionComponentDefinition {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum RemoveActiveCustomizationsBehavior {
			/** 2 */
			Cascade,
			/** 1 */
			No_Cascade,
			/** 0 */
			None
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}