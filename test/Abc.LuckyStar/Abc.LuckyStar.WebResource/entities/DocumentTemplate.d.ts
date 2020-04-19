//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormDocumentTemplate_Information {
		interface tab_general_Sections {
			Details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Associated Entity Type Code. */
			AssociatedEntityTypeCode: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user who created the document template. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the document template was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Additional information to describe the Document Template */
			Description: DevKit.Form.Controls.ControlString;
			/** Option set for selecting the type of the document template */
			DocumentType: DevKit.Form.Controls.ControlOptionSet;
			/** Language of Document Template. */
			LanguageCode: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier of the user who last modified the document template. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the document template was last modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Name of the document template. */
			Name: DevKit.Form.Controls.ControlString;
			/** Information about whether the document template is active. */
			Status: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormDocumentTemplate_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form DocumentTemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form DocumentTemplate_Information */
		Body: LuckyStar.FormDocumentTemplate_Information.Body;
	}
	class DocumentTemplateApi {
		/**
		* DynamicsCrm.DevKit DocumentTemplateApi
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
		/** Client data regarding this document template. */
		ClientData: DevKit.WebApi.StringValue;
		/** Bytes of the document template. */
		Content: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the document template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the document template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the document template. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Additional information to describe the Document Template */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the document template. */
		DocumentTemplateId: DevKit.WebApi.GuidValue;
		/** Option set for selecting the type of the document template */
		DocumentType: DevKit.WebApi.OptionSetValue;
		/** Language of Document Template. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the document template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the document template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the document template. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the document template. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the web resource. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Information about whether the document template is active. */
		Status: DevKit.WebApi.BooleanValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DocumentTemplate {
		enum DocumentType {
			/** 1 */
			Microsoft_Excel,
			/** 2 */
			Microsoft_Word
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
//{'JsForm':['DocumentTemplate Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}