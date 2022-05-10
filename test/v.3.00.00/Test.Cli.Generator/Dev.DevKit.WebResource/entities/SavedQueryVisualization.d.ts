//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Tells whether the saved query visualization can be deleted. */
		CanBeDeleted: string;
		/** Indicates the library used to render the visualization. */
		ChartType: OptionSet.SavedQueryVisualization.ChartType;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SavedQueryVisualization.ComponentState;
		/** Unique identifier of the user who created the system chart. */
		readonly CreatedBy: string;
		/** Date and time when the system chart was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the system chart. */
		readonly CreatedOnBehalfBy: string;
		/** XML string used to define the underlying data for the system chart. */
		DataDescription: string;
		/** Description of the system chart. */
		Description: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the system chart is the default chart for the entity. */
		IsDefault: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the system chart. */
		readonly ModifiedBy: string;
		/** Date and time when the system chart was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the system chart. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the system chart. */
		Name: string;
		/** Unique identifier of the organization associated with the system chart. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** XML string used to define the presentation properties of the system chart. */
		PresentationDescription: string;
		/** Unique identifier of the system chart. */
		SavedQueryVisualizationId: string;
		/** For internal use only. */
		readonly SavedQueryVisualizationIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Specifies where the chart will be used, 0 for data centric as well as interaction centric and 1 for just interaction centric */
		Type: OptionSet.SavedQueryVisualization.Type;
		/** Version number of the system chart. */
		readonly VersionNumber: number;
		/** Unique identifier of the Web resource that will be displayed in the system chart. */
		WebResourceId: string;
		readonly FormattedValue: {
			/** Tells whether the saved query visualization can be deleted. */
			readonly CanBeDeleted: string;
			/** Indicates the library used to render the visualization. */
			readonly ChartType: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the system chart. */
			readonly CreatedBy: string;
			/** Date and time when the system chart was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the system chart. */
			readonly CreatedOnBehalfBy: string;
			/** XML string used to define the underlying data for the system chart. */
			readonly DataDescription: string;
			/** Description of the system chart. */
			readonly Description: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the system chart is the default chart for the entity. */
			readonly IsDefault: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the system chart. */
			readonly ModifiedBy: string;
			/** Date and time when the system chart was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the system chart. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the system chart. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the system chart. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** XML string used to define the presentation properties of the system chart. */
			readonly PresentationDescription: string;
			/** Unique identifier of the system chart. */
			readonly SavedQueryVisualizationId: string;
			/** For internal use only. */
			readonly SavedQueryVisualizationIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Specifies where the chart will be used, 0 for data centric as well as interaction centric and 1 for just interaction centric */
			readonly Type: string;
			/** Version number of the system chart. */
			readonly VersionNumber: string;
			/** Unique identifier of the Web resource that will be displayed in the system chart. */
			readonly WebResourceId: string;
		}
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum PrimaryEntityTypeCode {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}