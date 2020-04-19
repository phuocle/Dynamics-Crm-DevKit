//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class SavedQueryVisualizationApi {
		/**
		* DynamicsCrm.DevKit SavedQueryVisualizationApi
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
		/** Tells whether the saved query visualization can be deleted. */
		CanBeDeleted: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates the library used to render the visualization. */
		ChartType: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the system chart. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the system chart was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the system chart. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** XML string used to define the underlying data for the system chart. */
		DataDescription: DevKit.WebApi.StringValue;
		/** Description of the system chart. */
		Description: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the system chart is the default chart for the entity. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the system chart. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the system chart was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the system chart. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the system chart. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the system chart. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** XML string used to define the presentation properties of the system chart. */
		PresentationDescription: DevKit.WebApi.StringValue;
		/** Unique identifier of the system chart. */
		SavedQueryVisualizationId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SavedQueryVisualizationIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Specifies where the chart will be used, 0 for data centric as well as interaction centric and 1 for just interaction centric */
		Type: DevKit.WebApi.OptionSetValue;
		/** Version number of the system chart. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the Web resource that will be displayed in the system chart. */
		WebResourceId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace SavedQueryVisualization {
		enum ChartType {
			/** 0 */
			ASPNET_Charts,
			/** 1 */
			Power_BI
		}
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
		enum Type {
			/** 0 */
			for_data_centric_as_well_as_interaction_centric,
			/** 1 */
			just_for_interaction_centric
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