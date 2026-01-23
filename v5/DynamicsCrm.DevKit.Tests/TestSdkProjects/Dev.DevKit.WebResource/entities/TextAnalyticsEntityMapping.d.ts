//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTextAnalyticsEntityMapping_Information {
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections {
		}
		/** Details */
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F extends DevKit.Controls.ITab {
			Section: tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections;
		}
		interface Tabs {
			/** Details */
			_C01C55A7_B832_422F_B768_4BDA9674E00F: tab__C01C55A7_B832_422F_B768_4BDA9674E00F;
		}
		interface Body {
			Tab: Tabs;
			/** Select Entity */
			EntityPickList: DevKit.Controls.OptionSet;
			/** Select Field */
			FieldPickList: DevKit.Controls.OptionSet;
			/** Specify if the mapping is for text match or exact match */
			IsTextMatchMapping: DevKit.Controls.Boolean;
		}
	}
	export class FormTextAnalyticsEntityMapping_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form TextAnalyticsEntityMapping_Information */
		Body: DevKit.FormTextAnalyticsEntityMapping_Information.Body;
	}
	export class TextAnalyticsEntityMappingApi {
		/**
		* DynamicsCrm.DevKit TextAnalyticsEntityMappingApi
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
		readonly ComponentState: OptionSet.TextAnalyticsEntityMapping.ComponentState | null;
		/** Entity */
		Entity2: string | null;
		/** Entity Display Name */
		EntityDisplayName: string | null;
		/** Select Entity */
		EntityPickList: OptionSet.TextAnalyticsEntityMapping.EntityPickList | null;
		/** Field */
		Field: string | null;
		/** Field Display Name */
		FieldDisplayName: string | null;
		/** Select Field */
		FieldPickList: OptionSet.TextAnalyticsEntityMapping.FieldPickList | null;
		/** Is Manageed */
		readonly IsManaged: boolean | null;
		/** Specify if the mapping is for text match or exact match */
		IsTextMatchMapping: boolean | null;
		/** Model Type. */
		ModelType: number | null;
		/** Unique identifier of the organization associated with the Text Analytics Entity Mapping. */
		readonly OrganizationId: string | null;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Relationship Name */
		RelationshipName: string | null;
		/** Similarity Rule associated with entity mapping. */
		SimilarityRuleId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique identifier for entity instances */
		TextAnalyticsEntityMappingId: string | null;
		/** Unique identifier of the Text Analytics Entity Mapping */
		readonly TextAnalyticsEntityMappingIdUnique: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Entity */
			readonly Entity2: string;
			/** Entity Display Name */
			readonly EntityDisplayName: string;
			/** Select Entity */
			readonly EntityPickList: string;
			/** Field */
			readonly Field: string;
			/** Field Display Name */
			readonly FieldDisplayName: string;
			/** Select Field */
			readonly FieldPickList: string;
			/** Is Manageed */
			readonly IsManaged: string;
			/** Specify if the mapping is for text match or exact match */
			readonly IsTextMatchMapping: string;
			/** Model Type. */
			readonly ModelType: string;
			/** Unique identifier of the organization associated with the Text Analytics Entity Mapping. */
			readonly OrganizationId: string;
			/** Date and time when the record was created. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Relationship Name */
			readonly RelationshipName: string;
			/** Similarity Rule associated with entity mapping. */
			readonly SimilarityRuleId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier for entity instances */
			readonly TextAnalyticsEntityMappingId: string;
			/** Unique identifier of the Text Analytics Entity Mapping */
			readonly TextAnalyticsEntityMappingIdUnique: string;
		}
	}
}
declare namespace OptionSet {
	namespace TextAnalyticsEntityMapping {
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
		enum EntityPickList {
			/** No = 1*/
			No = 1,
			/** Yes = 2*/
			Yes = 2
		}
		enum FieldPickList {
			/** No = 1*/
			No = 1,
			/** Yes = 2*/
			Yes = 2
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