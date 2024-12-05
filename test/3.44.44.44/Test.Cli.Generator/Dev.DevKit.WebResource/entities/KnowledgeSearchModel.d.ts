//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledgeSearchModel_Information {
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections {
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections {
			_87C466A2_37F3_4CDE_A484_C6C75EFF544D: DevKit.Controls.Section;
		}
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65 extends DevKit.Controls.ITab {
			Section: tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections;
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC extends DevKit.Controls.ITab {
			Section: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections;
		}
		interface Tabs {
			_5B6AE5E5_8F54_4363_B906_48722F438B65: tab__5B6AE5E5_8F54_4363_B906_48722F438B65;
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
		interface Navigation {

		}
		interface Grid {
			textanalyticsentitymappings: DevKit.Controls.Grid;
		}
	}
	class FormKnowledgeSearchModel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KnowledgeSearchModel_Information */
		Body: DevKit.FormKnowledgeSearchModel_Information.Body;
		/** The Navigation of form KnowledgeSearchModel_Information */
		Navigation: DevKit.FormKnowledgeSearchModel_Information.Navigation;
		/** The Grid of form KnowledgeSearchModel_Information */
		Grid: DevKit.FormKnowledgeSearchModel_Information.Grid;
		/** The SidePanes of form KnowledgeSearchModel_Information */
		SidePanes: DevKit.SidePanes;
	}
	class KnowledgeSearchModelApi {
		/**
		* DynamicsCrm.DevKit KnowledgeSearchModelApi
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
		/** Unique identifier for AzureServiceConnection associated with KnowledgeSearchModel. */
		AzureServiceConnectionId: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.KnowledgeSearchModel.ComponentState;
		/** Unique identifier of the user who created the Knowledge Search Model. */
		readonly CreatedBy: string;
		/** Date and time when the Knowledge Search Model was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the knowledge search Model. */
		readonly CreatedOnBehalfBy: string;
		/** Enter a description for the search configuration */
		Description: string;
		/** entity */
		Entity2: string;
		/** FetchXml. */
		FetchXmlList: string;
		/** Is Manageed */
		readonly IsManaged: boolean;
		/** Unique identifier for entity instances */
		KnowledgeSearchModelId: string;
		/** Unique identifier of the Knowledge Search Model used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly KnowledgeSearchModelIdUnique: string;
		/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
		MaxKeyWords: number;
		/** Unique identifier of the user who modified the Knowledge Search Model. */
		readonly ModifiedBy: string;
		/** Date and time when the Knowledge Search model was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the knowledge search model. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a logical name for the search configuration. */
		Name: string;
		/** Enter the maximum number of key phrase words to use in a topic. */
		NgramSize: number;
		/** Unique identifier of the organization associated with the Knowledge Search Model entity. */
		readonly OrganizationId: string;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Knowledge Search Model */
		StateCode: OptionSet.KnowledgeSearchModel.StateCode;
		/** Reason for the status of the Knowledge Search Model */
		StatusCode: OptionSet.KnowledgeSearchModel.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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