//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormLanguageLocale {
		interface tab_general_Sections {
			languagelocaleinformation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Name */
			Name: DevKit.Controls.String;
		}
		interface Navigation {
			knowledgearticle_languagelocaleid: DevKit.Controls.NavigationItem
		}
	}
	class FormLanguageLocale extends DevKit.IForm {
		/**
		* LanguageLocale [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form LanguageLocale */
		Body: DevKit.FormLanguageLocale.Body;
		/** The Navigation of form LanguageLocale */
		Navigation: DevKit.FormLanguageLocale.Navigation;
		/** The SidePanes of form LanguageLocale */
		SidePanes: DevKit.SidePanes;
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
		/** Code */
		readonly Code: string;
		/** Language */
		readonly Language: string;
		/** LanguageLocaleId */
		LanguageLocaleId: string;
		/** Locale ID */
		LocaleId: number;
		/** Name */
		readonly Name: string;
		/** Unique identifier of the organization associated with the language locale. */
		readonly OrganizationId: string;
		/** Region */
		readonly Region: string;
		/** State Code */
		statecode: OptionSet.LanguageLocale.statecode;
		/** Language Status Code */
		statuscode: OptionSet.LanguageLocale.statuscode;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Code */
			readonly Code: string;
			/** Language */
			readonly Language: string;
			/** LanguageLocaleId */
			readonly LanguageLocaleId: string;
			/** Locale ID */
			readonly LocaleId: string;
			/** Name */
			readonly Name: string;
			/** Unique identifier of the organization associated with the language locale. */
			readonly OrganizationId: string;
			/** Region */
			readonly Region: string;
			/** State Code */
			readonly statecode: string;
			/** Language Status Code */
			readonly statuscode: string;
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}