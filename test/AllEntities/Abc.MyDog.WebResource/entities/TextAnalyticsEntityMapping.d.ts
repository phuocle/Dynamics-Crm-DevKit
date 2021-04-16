//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
			/** Select Field */
			FieldPickList: DevKit.Controls.OptionSet;
			/** Specify if the mapping is for text match or exact match */
			IsTextMatchMapping: DevKit.Controls.Boolean;
		}
	}
	class FormTextAnalyticsEntityMapping_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form TextAnalyticsEntityMapping_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TextAnalyticsEntityMapping_Information */
		Body: MyDog.FormTextAnalyticsEntityMapping_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Advanced Similarity RuleId associated with entity mapping. */
		AdvancedSimilarityRuleId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Entity */
		_Entity: DevKit.WebApi.StringValue;
		/** Entity Display Name */
		EntityDisplayName: DevKit.WebApi.StringValue;
		/** Select Entity */
		EntityPickList: DevKit.WebApi.OptionSetValue;
		/** Field */
		Field: DevKit.WebApi.StringValue;
		/** Field Display Name */
		FieldDisplayName: DevKit.WebApi.StringValue;
		/** Select Field */
		FieldPickList: DevKit.WebApi.OptionSetValue;
		/** Is Manageed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Specify if the mapping is for text match or exact match */
		IsTextMatchMapping: DevKit.WebApi.BooleanValue;
		/** Knowledge Search Model associated with entity mapping. */
		KnowledgeSearchModelId: DevKit.WebApi.LookupValue;
		/** Model Type. */
		ModelType: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the organization associated with the Text Analytics Entity Mapping. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Relationship Name */
		RelationshipName: DevKit.WebApi.StringValue;
		/** Similarity Rule associated with entity mapping. */
		SimilarityRuleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for entity instances */
		TextAnalyticsEntityMappingId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Text Analytics Entity Mapping */
		TextAnalyticsEntityMappingIdUnique: DevKit.WebApi.GuidValueReadonly;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}