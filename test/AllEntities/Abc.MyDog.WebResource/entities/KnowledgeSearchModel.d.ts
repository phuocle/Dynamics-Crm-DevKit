//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormKnowledgeSearchModel_Information {
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections {
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections {
			_87C466A2_37F3_4CDE_A484_C6C75EFF544D: DevKit.Form.Controls.ControlSection;
		}
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65 extends DevKit.Form.Controls.IControlTab {
			Section: tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections;
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC extends DevKit.Form.Controls.IControlTab {
			Section: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections;
		}
		interface Tabs {
			_5B6AE5E5_8F54_4363_B906_48722F438B65: tab__5B6AE5E5_8F54_4363_B906_48722F438B65;
			_6A04C119_906C_4D8D_84D6_A470E79CBFCC: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC;
		}
		interface Body {
			Tab: Tabs;
			textanalyticsentitymappings: DevKit.Form.Controls.ControlGrid;
			/** Enter a description for the search configuration */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
			MaxKeyWords: DevKit.Form.Controls.ControlInteger;
			/** Type a logical name for the search configuration. */
			Name: DevKit.Form.Controls.ControlString;
			/** Enter an entity that articles are suggested for. */
			SourceEntity: DevKit.Form.Controls.ControlString;
		}
	}
	class FormKnowledgeSearchModel_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form KnowledgeSearchModel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KnowledgeSearchModel_Information */
		Body: MyDog.FormKnowledgeSearchModel_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier for AzureServiceConnection associated with KnowledgeSearchModel. */
		AzureServiceConnectionId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the Knowledge Search Model. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Knowledge Search Model was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the knowledge search Model. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter a description for the search configuration */
		Description: DevKit.WebApi.StringValue;
		/** entity */
		_Entity: DevKit.WebApi.StringValue;
		/** FetchXml. */
		FetchXmlList: DevKit.WebApi.StringValue;
		/** Is Manageed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier for entity instances */
		KnowledgeSearchModelId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Knowledge Search Model used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		KnowledgeSearchModelIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Enter the maximum number of keywords or key phrases to be determined using text analytics. */
		MaxKeyWords: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the Knowledge Search Model. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Knowledge Search model was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the knowledge search model. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a logical name for the search configuration. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the maximum number of key phrase words to use in a topic. */
		NgramSize: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the organization associated with the Knowledge Search Model entity. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Knowledge Search Model */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Knowledge Search Model */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace KnowledgeSearchModel {
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