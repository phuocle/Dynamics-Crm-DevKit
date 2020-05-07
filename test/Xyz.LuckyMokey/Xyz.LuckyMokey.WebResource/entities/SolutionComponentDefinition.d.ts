//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Boolean identifier for using deleting base layers. */
		AllowDeleteBaseSolutionRowAndFakeDelete: DevKit.WebApi.BooleanValue;
		/** Whether this component allows Overwrite Customizations when update managed solution */
		AllowOverwriteCustomizations: DevKit.WebApi.BooleanValue;
		/** Boolean identifier for a row that is marked as logically deleted in the Active solution and should be re-created back */
		AllowRecreateForLogicallyDeletedRow: DevKit.WebApi.BooleanValue;
		/** Flag used to indicate whether this component always removes active customizations on uninstall */
		AlwaysRemoveActiveCustomizationsOnUninstall: DevKit.WebApi.BooleanValue;
		/** Flag indicating whether the subcomponent can be added directly to the SolutionComponents table */
		CanBeAddedToSolutionComponents: DevKit.WebApi.BooleanValue;
		/** Whether this component is hidden using an IsHidden managed property */
		CanBeHidden: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Path to component's XML node */
		ComponentXPath: DevKit.WebApi.StringValue;
		/** Flag that indicates whether this component uses its descendent as its viewable component */
		DescendentIsViewableComponent: DevKit.WebApi.BooleanValue;
		/** Group Parent Component Attribute Name */
		GroupParentComponentAttributeName: DevKit.WebApi.StringValue;
		/** Group Parent Component Type */
		GroupParentComponentType: DevKit.WebApi.IntegerValue;
		/** Boolean that indicates if the component has a renamable attribute */
		HasIsRenameableAttribute: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is dependency disabled for the component */
		IsDependencyDisabled: DevKit.WebApi.BooleanValue;
		/** Boolean that indicates if the component has user interface enabled */
		IsDisplayable: DevKit.WebApi.BooleanValue;
		/** Boolean that indicates if the component is managed */
		IsManaged: DevKit.WebApi.BooleanValue;
		/** Whether this component is either a mergeable component, or part of a mergeable component */
		IsMergeable: DevKit.WebApi.BooleanValue;
		/** Boolean identifier for metadata components */
		IsMetadata: DevKit.WebApi.BooleanValue;
		/** Whether this component is viewable in the SDK and UI */
		IsViewable: DevKit.WebApi.BooleanValue;
		/** Label Type Code */
		LabelTypeCode: DevKit.WebApi.IntegerValue;
		/** Name */
		Name: DevKit.WebApi.StringValue;
		/** Object Type Code */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** The attribute name of the parent attribute */
		ParentAttributeName: DevKit.WebApi.StringValue;
		/** Component Entity Logical Name */
		PrimaryEntityName: DevKit.WebApi.StringValue;
		/** Remove Active Customizations Behavior. */
		RemoveActiveCustomizationsBehavior: DevKit.WebApi.OptionSetValue;
		/** Root Solution Component Type Name */
		RootAttributeName: DevKit.WebApi.StringValue;
		/** Root Solution Component Type */
		RootComponent: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the solution component definition */
		SolutionComponentDefinitionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SolutionComponentDefinitionIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Solution Component Type */
		SolutionComponentType: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Boolean identifier for forcing delete for solution update. */
		UseForceDeleteForSolutionUpdate: DevKit.WebApi.BooleanValue;
		/** Boolean identifier for always forcing update. */
		UseForceUpdateAlways: DevKit.WebApi.BooleanValue;
		/** Boolean identifier for using sentine rows. */
		UseSentinelRowInBaseSolution: DevKit.WebApi.BooleanValue;
		/** The component type of the viewable descendent */
		ViewableDescendentComponentType: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace SolutionComponentDefinition {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum RemoveActiveCustomizationsBehavior {
			/** 0 */
			None,
			/** 1 */
			No_Cascade,
			/** 2 */
			Cascade
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}