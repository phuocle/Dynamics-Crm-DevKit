//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormPersonalDocumentTemplate_Information {
		interface tab_general_Sections {
			Details: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Associated Entity Type Code. */
			AssociatedEntityTypeCode: DevKit.Controls.String;
			/** Unique identifier of the user who created the personal document template. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the personal document template was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Additional information to describe the Personal Document Template */
			Description: DevKit.Controls.String;
			/** Option set for selecting the type of the personal document template */
			DocumentType: DevKit.Controls.OptionSet;
			/** Language of Personal Document Template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the personal document template. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the personal document template was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the personal document template. */
			Name: DevKit.Controls.String;
			/** Information about whether the personal document template is active. */
			Status: DevKit.Controls.Boolean;
		}
	}
	class FormPersonalDocumentTemplate_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form PersonalDocumentTemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form PersonalDocumentTemplate_Information */
		Body: MyDog.FormPersonalDocumentTemplate_Information.Body;
	}
	class PersonalDocumentTemplateApi {
		/**
		* DynamicsCrm.DevKit PersonalDocumentTemplateApi
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
		/** Client data regarding this personal document template. */
		ClientData: DevKit.WebApi.StringValue;
		/** Bytes of the personal document template. */
		Content: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the personal document template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the personal document template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the personal document template. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Additional information to describe the Personal Document Template */
		Description: DevKit.WebApi.StringValue;
		/** Option set for selecting the type of the personal document template */
		DocumentType: DevKit.WebApi.OptionSetValue;
		/** Language of Personal Document Template. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the personal document template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the personal document template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the personal document template. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the personal document template. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the personal document template. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the personal document template. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the personal document template. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the personal document template. */
		PersonalDocumentTemplateId: DevKit.WebApi.GuidValue;
		/** Information about whether the personal document template is active. */
		Status: DevKit.WebApi.BooleanValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PersonalDocumentTemplate {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}