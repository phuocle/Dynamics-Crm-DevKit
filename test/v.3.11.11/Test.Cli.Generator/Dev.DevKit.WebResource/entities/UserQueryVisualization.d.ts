//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserQueryVisualizationApi {
		/**
		* DynamicsCrm.DevKit UserQueryVisualizationApi
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
		/** Indicates the library used to render the visualization. */
		ChartType: OptionSet.UserQueryVisualization.ChartType;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the fields that are used to display data in a chart, stored in XML format. */
		DataDescription: string;
		/** Type additional information to describe the chart, such as the filter criteria or intended audience. */
		Description: string;
		/** Select whether the chart is the default chart for the view that it is associated with. */
		IsDefault: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive name for the chart. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the user chart. */
		readonly OwningTeam: string;
		/** Unique identifier of the team who owns the user chart. */
		readonly OwningUser: string;
		/** Contains the chart's formatting details and presentation properties, stored in XML format. */
		PresentationDescription: string;
		/** Unique identifier of the user chart. */
		UserQueryVisualizationId: string;
		/** Version number of the user chart. */
		readonly VersionNumber: number;
		/** Shows the web resource that will be displayed in the chart to the user. */
		WebResourceId: string;
		readonly FormattedValue: {
			/** Indicates the library used to render the visualization. */
			readonly ChartType: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the fields that are used to display data in a chart, stored in XML format. */
			readonly DataDescription: string;
			/** Type additional information to describe the chart, such as the filter criteria or intended audience. */
			readonly Description: string;
			/** Select whether the chart is the default chart for the view that it is associated with. */
			readonly IsDefault: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the chart. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the user chart. */
			readonly OwningTeam: string;
			/** Unique identifier of the team who owns the user chart. */
			readonly OwningUser: string;
			/** Contains the chart's formatting details and presentation properties, stored in XML format. */
			readonly PresentationDescription: string;
			/** Unique identifier of the user chart. */
			readonly UserQueryVisualizationId: string;
			/** Version number of the user chart. */
			readonly VersionNumber: string;
			/** Shows the web resource that will be displayed in the chart to the user. */
			readonly WebResourceId: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserQueryVisualization {
		enum ChartType {
			/** 0 */
			ASPNET_Charts,
			/** 1 */
			Power_BI
		}
		enum OwnerIdType {
		}
		enum PrimaryEntityTypeCode {
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