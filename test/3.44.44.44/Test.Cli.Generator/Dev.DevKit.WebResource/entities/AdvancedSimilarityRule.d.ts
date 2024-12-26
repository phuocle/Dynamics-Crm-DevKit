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
		interface Navigation {

		}
		interface Grid {
			textanalyticsentitymappings: DevKit.Controls.Grid;
		}
	}
	class FormAdvancedSimilarityRule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form AdvancedSimilarityRule_Information */
		Body: DevKit.FormAdvancedSimilarityRule_Information.Body;
		/** The Navigation of form AdvancedSimilarityRule_Information */
		Navigation: DevKit.FormAdvancedSimilarityRule_Information.Navigation;
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
		/** Unique identifier for entity instances */
		AdvancedSimilarityRuleId: string;
		/** Unique identifier of the Advanced Similarity Rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly AdvancedSimilarityRuleIdUnique: string;
		/** Unique identifier for AzureServiceConnection associated with AdvancedSimilarityRule. */
		AzureServiceConnectionId: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.AdvancedSimilarityRule.ComponentState;
		/** Unique identifier of the user who created the Advanced Similarity Rules. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Enter a description for the Advanced Similarity Rule */
		Description: string;
		/** entity */
		Entity2: string;
		/** For internal use only. */
		ExactMatchList: string;
		/** For internal use only. */
		FetchXmlList: string;
		/** Filter Result By Status */
		FilterResultByStatus: OptionSet.AdvancedSimilarityRule.FilterResultByStatus;
		/** Filter Result By Status */
		FilterResultByStatusDisplayName: string;
		/** Use Text Analytics for Target Match */
		IsAzureMLRequired: boolean;
		/** Is Manageed */
		readonly IsManaged: boolean;
		/** Enter the maximum number of keywords and key phrases to use with text analytics. */
		MaxNumberKeyphrases: number;
		/** Unique identifier of the user who modified the Advanced Similarity Rules. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the advanced similarity rules. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a logical name for the similarity configuration */
		name: string;
		/** Enter the maximum number of words in a key phrase to use with text analytics. */
		NgramSize: number;
		/** Provide noise key phrases by a semicolon ( ; ). These phrases will be filtered while searching for similar cases */
		NoiseKeyphraseslist: string;
		/** Unique identifier of the organization associated with the advanced similarity rules */
		readonly OrganizationId: string;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the advanced similarity rules */
		StateCode: OptionSet.AdvancedSimilarityRule.StateCode;
		/** Reason for the status of the advanced similarity rules */
		StatusCode: OptionSet.AdvancedSimilarityRule.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly AdvancedSimilarityRuleId: string;
			/** Unique identifier of the Advanced Similarity Rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly AdvancedSimilarityRuleIdUnique: string;
			/** Unique identifier for AzureServiceConnection associated with AdvancedSimilarityRule. */
			readonly AzureServiceConnectionId: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the Advanced Similarity Rules. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Enter a description for the Advanced Similarity Rule */
			readonly Description: string;
			/** entity */
			readonly Entity2: string;
			/** For internal use only. */
			readonly ExactMatchList: string;
			/** For internal use only. */
			readonly FetchXmlList: string;
			/** Filter Result By Status */
			readonly FilterResultByStatus: string;
			/** Filter Result By Status */
			readonly FilterResultByStatusDisplayName: string;
			/** Use Text Analytics for Target Match */
			readonly IsAzureMLRequired: string;
			/** Is Manageed */
			readonly IsManaged: string;
			/** Enter the maximum number of keywords and key phrases to use with text analytics. */
			readonly MaxNumberKeyphrases: string;
			/** Unique identifier of the user who modified the Advanced Similarity Rules. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the advanced similarity rules. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a logical name for the similarity configuration */
			readonly name: string;
			/** Enter the maximum number of words in a key phrase to use with text analytics. */
			readonly NgramSize: string;
			/** Provide noise key phrases by a semicolon ( ; ). These phrases will be filtered while searching for similar cases */
			readonly NoiseKeyphraseslist: string;
			/** Unique identifier of the organization associated with the advanced similarity rules */
			readonly OrganizationId: string;
			/** Date and time when the record was created. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the advanced similarity rules */
			readonly StateCode: string;
			/** Reason for the status of the advanced similarity rules */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}