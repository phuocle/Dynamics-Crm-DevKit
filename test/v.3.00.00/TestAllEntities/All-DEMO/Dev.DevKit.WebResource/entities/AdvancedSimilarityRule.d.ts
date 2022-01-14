//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAdvancedSimilarityRule_Information {
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections {
			_0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1: DevKit.Controls.Section;
		}
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections {
		}
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0 extends DevKit.Controls.ITab {
			Section: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections;
		}
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D extends DevKit.Controls.ITab {
			Section: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections;
		}
		interface Tabs {
			_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0;
			_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D;
		}
		interface Body {
			Tab: Tabs;
			/** Enter a description for the Advanced Similarity Rule */
			Description: DevKit.Controls.String;
			/** Filter Result By Status */
			FilterResultByStatus: DevKit.Controls.OptionSet;
			filterresultbystatus_UC: DevKit.Controls.ActionCards;
			/** Type a logical name for the similarity configuration */
			name: DevKit.Controls.String;
			/** Provide noise key phrases by a semicolon ( ; ). These phrases will be filtered while searching for similar cases */
			NoiseKeyphraseslist: DevKit.Controls.String;
			/** Enter an entity that similar records will be suggested for */
			SourceEntity: DevKit.Controls.String;
			sourceentity_UC: DevKit.Controls.ActionCards;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			textanalyticsentitymappings: DevKit.Controls.Grid;
		}
	}
	class FormAdvancedSimilarityRule_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form AdvancedSimilarityRule_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form AdvancedSimilarityRule_Information */
		Body: DevKit.FormAdvancedSimilarityRule_Information.Body;
		/** The Process of form AdvancedSimilarityRule_Information */
		Process: DevKit.FormAdvancedSimilarityRule_Information.Process;
		/** The Grid of form AdvancedSimilarityRule_Information */
		Grid: DevKit.FormAdvancedSimilarityRule_Information.Grid;
		/** The SidePanes of form AdvancedSimilarityRule_Information */
		SidePanes: DevKit.SidePanes;
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
		Entity1: DevKit.WebApi.StringValue;
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
		/** Provide noise key phrases by a semicolon ( ; ). These phrases will be filtered while searching for similar cases */
		NoiseKeyphraseslist: DevKit.WebApi.StringValue;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum FilterResultByStatus {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum SourceEntity {
			/** 112 */
			Case
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}