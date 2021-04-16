//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormAdvancedSimilarityRule_Information {
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections {
			_89397326_037F_4A43_B362_6B9B04E7917B: DevKit.Form.Controls.ControlSection;
			_29B6CE18_08E1_4B87_B532_B18A6987BBB2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections {
			_0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D extends DevKit.Form.Controls.IControlTab {
			Section: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections;
		}
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0 extends DevKit.Form.Controls.IControlTab {
			Section: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections;
		}
		interface Tabs {
			_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D;
			_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0;
		}
		interface Body {
			Tab: Tabs;
			textanalyticsentitymappings: DevKit.Form.Controls.ControlGrid;
			/** Enter a description for the Advanced Similarity Rule */
			Description: DevKit.Form.Controls.ControlString;
			/** Filter Result By Status */
			FilterResultByStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Use Text Analytics for Target Match */
			IsAzureMLRequired: DevKit.Form.Controls.ControlBoolean;
			/** Enter the maximum number of keywords and key phrases to use with text analytics. */
			MaxNumberKeyphrases: DevKit.Form.Controls.ControlInteger;
			/** Type a logical name for the similarity configuration */
			name: DevKit.Form.Controls.ControlString;
			/** Enter an entity that similar records will be suggested for */
			SourceEntity: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAdvancedSimilarityRule_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form AdvancedSimilarityRule_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form AdvancedSimilarityRule_Information */
		Body: MyDog.FormAdvancedSimilarityRule_Information.Body;
	}
	class AdvancedSimilarityRuleApi {
		/**
		* DynamicsCrm.DevKit AdvancedSimilarityRuleApi
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
		/** Unique identifier for entity instances */
		AdvancedSimilarityRuleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Advanced Similarity Rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AdvancedSimilarityRuleIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for AzureServiceConnection associated with AdvancedSimilarityRule. */
		AzureServiceConnectionId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the Advanced Similarity Rules. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter a description for the Advanced Similarity Rule */
		Description: DevKit.WebApi.StringValue;
		/** entity */
		_Entity: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ExactMatchList: DevKit.WebApi.StringValue;
		/** For internal use only. */
		FetchXmlList: DevKit.WebApi.StringValue;
		/** Filter Result By Status */
		FilterResultByStatus: DevKit.WebApi.OptionSetValue;
		/** Filter Result By Status */
		FilterResultByStatusDisplayName: DevKit.WebApi.StringValue;
		/** Use Text Analytics for Target Match */
		IsAzureMLRequired: DevKit.WebApi.BooleanValue;
		/** Is Manageed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Enter the maximum number of keywords and key phrases to use with text analytics. */
		MaxNumberKeyphrases: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the Advanced Similarity Rules. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the advanced similarity rules. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a logical name for the similarity configuration */
		name: DevKit.WebApi.StringValue;
		/** Enter the maximum number of words in a key phrase to use with text analytics. */
		NgramSize: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the organization associated with the advanced similarity rules */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the advanced similarity rules */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the advanced similarity rules */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace AdvancedSimilarityRule {
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
		enum FilterResultByStatus {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}