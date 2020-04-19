//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormLanguageLocale {
		interface tab_general_Sections {
			languagelocaleinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Name */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormLanguageLocale extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form LanguageLocale
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form LanguageLocale */
		Body: LuckyStar.FormLanguageLocale.Body;
	}
	class LanguageLocaleApi {
		/**
		* DynamicsCrm.DevKit LanguageLocaleApi
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
		/** Code */
		Code: DevKit.WebApi.StringValueReadonly;
		/** Language */
		Language: DevKit.WebApi.StringValueReadonly;
		/** LanguageLocaleId */
		LanguageLocaleId: DevKit.WebApi.GuidValue;
		/** Locale ID */
		LocaleId: DevKit.WebApi.IntegerValue;
		/** Name */
		Name: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the organization associated with the language locale. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Region */
		Region: DevKit.WebApi.StringValueReadonly;
		/** State Code */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Language Status Code */
		statuscode: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace LanguageLocale {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
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
//{'JsForm':['LanguageLocale'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}