//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SocialInsightsConfigurationApi {
		/**
		* DynamicsCrm.DevKit SocialInsightsConfigurationApi
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
		/** Id of the control. */
		ControlId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the form with which the like is associated. */
		FormId: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the solution. */
		readonly OrganizationId: string | null;
		/** Data Item Id for social data. */
		SocialDataItemId: string | null;
		/** Type of social data item. */
		SocialDataItemType: OptionSet.SocialInsightsConfiguration.SocialDataItemType | null;
		/** Parameters used to render social data. */
		SocialDataParameters: string | null;
		/** Shows the ID of the social insights configuration. */
		SocialInsightsConfigurationId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Id of the control. */
			readonly ControlId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the form with which the like is associated. */
			readonly FormId: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the solution. */
			readonly OrganizationId: string;
			/** Data Item Id for social data. */
			readonly SocialDataItemId: string;
			/** Type of social data item. */
			readonly SocialDataItemType: string;
			/** Parameters used to render social data. */
			readonly SocialDataParameters: string;
			/** Shows the ID of the social insights configuration. */
			readonly SocialInsightsConfigurationId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SocialInsightsConfiguration {
		enum FormTypeCode {
			/** System_Form = 1030*/
			System_Form = 1030,
			/** User_Form = 1031*/
			User_Form = 1031
		}
		enum RegardingObjectTypeCode {
		}
		enum SocialDataItemType {
			/** Class = 2*/
			Class = 2,
			/** Search_Item = 1*/
			Search_Item = 1
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