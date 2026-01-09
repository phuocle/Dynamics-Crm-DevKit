//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SavedQueryVisualizationApi {
		/**
		* DynamicsCrm.DevKit SavedQueryVisualizationApi
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
		/** Tells whether the saved query visualization can be deleted. */
		CanBeDeleted: string | null;
		/** Indicates the library used to render the visualization. */
		ChartType: OptionSet.SavedQueryVisualization.ChartType | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SavedQueryVisualization.ComponentState | null;
		/** Unique identifier of the user who created the system chart. */
		readonly CreatedBy: string | null;
		/** Date and time when the system chart was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the system chart. */
		readonly CreatedOnBehalfBy: string | null;
		/** XML string used to define the underlying data for the system chart. */
		DataDescription: string | null;
		/** Description of the system chart. */
		Description: string | null;
		/** Tells whether the chart can retrieve data from all cluster partitions. */
		EnableCrossPartition: boolean | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Indicates whether the system chart is the default chart for the entity. */
		IsDefault: boolean | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who last modified the system chart. */
		readonly ModifiedBy: string | null;
		/** Date and time when the system chart was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the system chart. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the system chart. */
		Name: string | null;
		/** Unique identifier of the organization associated with the system chart. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** XML string used to define the presentation properties of the system chart. */
		PresentationDescription: string | null;
		/** Unique identifier of the system chart. */
		SavedQueryVisualizationId: string | null;
		/** For internal use only. */
		readonly SavedQueryVisualizationIdUnique: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Specifies where the chart will be used, 0 for data centric as well as interaction centric and 1 for just interaction centric */
		Type: OptionSet.SavedQueryVisualization.Type | null;
		/** Version number of the system chart. */
		readonly VersionNumber: number | null;
		/** Unique identifier of the Web resource that will be displayed in the system chart. */
		WebResourceId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Tells whether the chart can retrieve data from all cluster partitions. */
			readonly EnableCrossPartition: string;
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
			/** ASPNET_Charts = 0*/
			ASPNET_Charts = 0,
			/** Power_BI = 1*/
			Power_BI = 1
		}
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
		enum PrimaryEntityTypeCode {
		}
		enum Type {
			/** for_data_centric_as_well_as_interaction_centric = 0*/
			for_data_centric_as_well_as_interaction_centric = 0,
			/** just_for_interaction_centric = 1*/
			just_for_interaction_centric = 1
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