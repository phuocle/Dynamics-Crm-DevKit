//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTextAnalyticsEntityMapping_Information {
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections {
		}
		interface tab__C01C55A7_B832_422F_B768_4BDA9674E00F extends DevKit.Controls.ITab {
			Section: tab__C01C55A7_B832_422F_B768_4BDA9674E00F_Sections;
		}
		interface Tabs {
			_C01C55A7_B832_422F_B768_4BDA9674E00F: tab__C01C55A7_B832_422F_B768_4BDA9674E00F;
		}
		interface Body {
			Tab: Tabs;
			/** Select Entity */
			EntityPickList: DevKit.Controls.OptionSet;
			entitypicklist_UC: DevKit.Controls.ActionCards;
			/** Select Field */
			FieldPickList: DevKit.Controls.OptionSet;
			fieldpicklist_UC: DevKit.Controls.ActionCards;
			/** Specify if the mapping is for text match or exact match */
			IsTextMatchMapping: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormTextAnalyticsEntityMapping_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TextAnalyticsEntityMapping_Information */
		Body: DevKit.FormTextAnalyticsEntityMapping_Information.Body;
		/** The Process of form TextAnalyticsEntityMapping_Information */
		Process: DevKit.FormTextAnalyticsEntityMapping_Information.Process;
		/** The SidePanes of form TextAnalyticsEntityMapping_Information */
		SidePanes: DevKit.SidePanes;
	}
	class TextAnalyticsEntityMappingApi {
		/**
		* DynamicsCrm.DevKit TextAnalyticsEntityMappingApi
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
		/** Advanced Similarity RuleId associated with entity mapping. */
		AdvancedSimilarityRuleId: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.TextAnalyticsEntityMapping.ComponentState;
		/** Entity */
		Entity1: string;
		/** Entity Display Name */
		EntityDisplayName: string;
		/** Select Entity */
		EntityPickList: OptionSet.TextAnalyticsEntityMapping.EntityPickList;
		/** Field */
		Field: string;
		/** Field Display Name */
		FieldDisplayName: string;
		/** Select Field */
		FieldPickList: OptionSet.TextAnalyticsEntityMapping.FieldPickList;
		/** Is Manageed */
		readonly IsManaged: boolean;
		/** Specify if the mapping is for text match or exact match */
		IsTextMatchMapping: boolean;
		/** Knowledge Search Model associated with entity mapping. */
		KnowledgeSearchModelId: string;
		/** Model Type. */
		ModelType: number;
		/** Unique identifier of the organization associated with the Text Analytics Entity Mapping. */
		readonly OrganizationId: string;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Relationship Name */
		RelationshipName: string;
		/** Similarity Rule associated with entity mapping. */
		SimilarityRuleId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier for entity instances */
		TextAnalyticsEntityMappingId: string;
		/** Unique identifier of the Text Analytics Entity Mapping */
		readonly TextAnalyticsEntityMappingIdUnique: string;
		/** Topic Model Configuration associated with entity mapping. */
		TopicModelConfigurationId: string;
	}
}
declare namespace OptionSet {
	namespace TextAnalyticsEntityMapping {
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
		enum EntityPickList {
			/** 1 */
			No,
			/** 2 */
			Yes
		}
		enum FieldPickList {
			/** 1 */
			No,
			/** 2 */
			Yes
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}