//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledgeSearchModel_Information {
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections {
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections {
			_87C466A2_37F3_4CDE_A484_C6C75EFF544D: DevKit.Controls.Section;
		}
		/** Details */
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65 extends DevKit.Controls.ITab {
			Section: tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections;
		}
		/** Keyword or Key Phrase Determination Fields */
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC extends DevKit.Controls.ITab {
			Section: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections;
		}
		interface Tabs {
			/** Details */
			_5B6AE5E5_8F54_4363_B906_48722F438B65: tab__5B6AE5E5_8F54_4363_B906_48722F438B65;
			/** Keyword or Key Phrase Determination Fields */
			_6A04C119_906C_4D8D_84D6_A470E79CBFCC: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC;
		}
		interface Body {
			Tab: Tabs;
			/** Enter a description for the search configuration */
			Description: DevKit.Controls.String;
			/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
			MaxKeyWords: DevKit.Controls.Integer;
			/** Type a logical name for the search configuration. */
			Name: DevKit.Controls.String;
			/** Enter an entity that articles are suggested for. */
			SourceEntity: DevKit.Controls.String;
		}
		interface Grid {
			/** Text Analytics Entity Mappings */
			textanalyticsentitymappings: DevKit.Controls.Grid;
		}
	}
	export class FormKnowledgeSearchModel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form KnowledgeSearchModel_Information */
		Body: DevKit.FormKnowledgeSearchModel_Information.Body;
		/** The Grid of form KnowledgeSearchModel_Information */
		Grid: DevKit.FormKnowledgeSearchModel_Information.Grid;
	}
	export class KnowledgeSearchModelApi {
		/**
		* DynamicsCrm.DevKit KnowledgeSearchModelApi
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
		/** Unique identifier for AzureServiceConnection associated with KnowledgeSearchModel. */
		AzureServiceConnectionId: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.KnowledgeSearchModel.ComponentState | null;
		/** Unique identifier of the user who created the Knowledge Search Model. */
		readonly CreatedBy: string | null;
		/** Date and time when the Knowledge Search Model was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the knowledge search Model. */
		readonly CreatedOnBehalfBy: string | null;
		/** Enter a description for the search configuration */
		Description: string | null;
		/** entity */
		Entity2: string | null;
		/** FetchXml. */
		FetchXmlList: string | null;
		/** Is Manageed */
		readonly IsManaged: boolean | null;
		/** Unique identifier for entity instances */
		KnowledgeSearchModelId: string | null;
		/** Unique identifier of the Knowledge Search Model used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly KnowledgeSearchModelIdUnique: string | null;
		/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
		MaxKeyWords: number | null;
		/** Unique identifier of the user who modified the Knowledge Search Model. */
		readonly ModifiedBy: string | null;
		/** Date and time when the Knowledge Search model was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the knowledge search model. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a logical name for the search configuration. */
		Name: string | null;
		/** Enter the maximum number of key phrase words to use in a topic. */
		NgramSize: number | null;
		/** Unique identifier of the organization associated with the Knowledge Search Model entity. */
		readonly OrganizationId: string | null;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Knowledge Search Model */
		StateCode: OptionSet.KnowledgeSearchModel.StateCode | null;
		/** Reason for the status of the Knowledge Search Model */
		StatusCode: OptionSet.KnowledgeSearchModel.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for AzureServiceConnection associated with KnowledgeSearchModel. */
			readonly AzureServiceConnectionId: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the Knowledge Search Model. */
			readonly CreatedBy: string;
			/** Date and time when the Knowledge Search Model was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the knowledge search Model. */
			readonly CreatedOnBehalfBy: string;
			/** Enter a description for the search configuration */
			readonly Description: string;
			/** entity */
			readonly Entity2: string;
			/** FetchXml. */
			readonly FetchXmlList: string;
			/** Is Manageed */
			readonly IsManaged: string;
			/** Unique identifier for entity instances */
			readonly KnowledgeSearchModelId: string;
			/** Unique identifier of the Knowledge Search Model used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly KnowledgeSearchModelIdUnique: string;
			/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
			readonly MaxKeyWords: string;
			/** Unique identifier of the user who modified the Knowledge Search Model. */
			readonly ModifiedBy: string;
			/** Date and time when the Knowledge Search model was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the knowledge search model. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a logical name for the search configuration. */
			readonly Name: string;
			/** Enter the maximum number of key phrase words to use in a topic. */
			readonly NgramSize: string;
			/** Unique identifier of the organization associated with the Knowledge Search Model entity. */
			readonly OrganizationId: string;
			/** Date and time when the record was created. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Knowledge Search Model */
			readonly StateCode: string;
			/** Reason for the status of the Knowledge Search Model */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeSearchModel {
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