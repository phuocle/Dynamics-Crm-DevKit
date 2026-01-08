//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAdvancedSimilarityRule_Information {
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections {
			_0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1: DevKit.Controls.Section;
		}
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections {
			_29B6CE18_08E1_4B87_B532_B18A6987BBB2: DevKit.Controls.Section;
			/** ADVANCED TEXT MATCH SETTINGS */
			_89397326_037F_4A43_B362_6B9B04E7917B: DevKit.Controls.Section;
		}
		/** Match Fields */
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0 extends DevKit.Controls.ITab {
			Section: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections;
		}
		/** Details */
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D extends DevKit.Controls.ITab {
			Section: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections;
		}
		interface Tabs {
			/** Match Fields */
			_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0;
			/** Details */
			_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D;
		}
		interface Body {
			Tab: Tabs;
			/** Enter a description for the Advanced Similarity Rule */
			Description: DevKit.Controls.String;
			/** Filter Result By Status */
			FilterResultByStatus: DevKit.Controls.OptionSet;
			/** Use Text Analytics for Target Match */
			IsAzureMLRequired: DevKit.Controls.Boolean;
			/** Enter the maximum number of keywords and key phrases to use with text analytics. */
			MaxNumberKeyphrases: DevKit.Controls.Integer;
			/** Type a logical name for the similarity configuration */
			name: DevKit.Controls.String;
			/** Enter an entity that similar records will be suggested for */
			SourceEntity: DevKit.Controls.String;
		}
		interface Grid {
			/** Text Analytics Entity Mappings */
			textanalyticsentitymappings: DevKit.Controls.Grid;
		}
	}
	export class FormAdvancedSimilarityRule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form AdvancedSimilarityRule_Information */
		Body: DevKit.FormAdvancedSimilarityRule_Information.Body;
		/** The Grid of form AdvancedSimilarityRule_Information */
		Grid: DevKit.FormAdvancedSimilarityRule_Information.Grid;
	}
	export class AdvancedSimilarityRuleApi {
		/**
		* DynamicsCrm.DevKit AdvancedSimilarityRuleApi
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
		/** Unique identifier for entity instances */
		AdvancedSimilarityRuleId: string | null;
		/** Unique identifier of the Advanced Similarity Rule used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly AdvancedSimilarityRuleIdUnique: string | null;
		/** Unique identifier for AzureServiceConnection associated with AdvancedSimilarityRule. */
		AzureServiceConnectionId: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.AdvancedSimilarityRule.ComponentState | null;
		/** Unique identifier of the user who created the Advanced Similarity Rules. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Enter a description for the Advanced Similarity Rule */
		Description: string | null;
		/** entity */
		Entity2: string | null;
		/** For internal use only. */
		ExactMatchList: string | null;
		/** For internal use only. */
		FetchXmlList: string | null;
		/** Filter Result By Status */
		FilterResultByStatus: OptionSet.AdvancedSimilarityRule.FilterResultByStatus | null;
		/** Filter Result By Status */
		FilterResultByStatusDisplayName: string | null;
		/** Use Text Analytics for Target Match */
		IsAzureMLRequired: boolean | null;
		/** Is Manageed */
		readonly IsManaged: boolean | null;
		/** Enter the maximum number of keywords and key phrases to use with text analytics. */
		MaxNumberKeyphrases: number | null;
		/** Unique identifier of the user who modified the Advanced Similarity Rules. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the advanced similarity rules. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a logical name for the similarity configuration */
		name: string | null;
		/** Enter the maximum number of words in a key phrase to use with text analytics. */
		NgramSize: number | null;
		/** Unique identifier of the organization associated with the advanced similarity rules */
		readonly OrganizationId: string | null;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the advanced similarity rules */
		StateCode: OptionSet.AdvancedSimilarityRule.StateCode | null;
		/** Reason for the status of the advanced similarity rules */
		StatusCode: OptionSet.AdvancedSimilarityRule.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum FilterResultByStatus {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum SourceEntity {
			/** Case = 112*/
			Case = 112
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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