//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_websitelanguage_Information {
		interface tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222_Sections {
			_8F9F4F14_3F39_499E_AAD1_E161FABE27C6: DevKit.Controls.Section;
		}
		interface tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222 extends DevKit.Controls.ITab {
			Section: tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222_Sections;
		}
		interface Tabs {
			_6FA2C0DC_1585_4CA4_86A7_285DB3B27222: tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222;
		}
		interface Body {
			Tab: Tabs;
			mspp_description: DevKit.Controls.String;
			/** Localized display name of the portal language */
			mspp_displayname: DevKit.Controls.String;
			/** Locale or language identifier that appears in the URL to indicate the portal language */
			mspp_languagecode: DevKit.Controls.String;
			/** Locale ID that is assigned to the portal language */
			mspp_lcid: DevKit.Controls.Integer;
			/** Name of the portal language */
			mspp_name: DevKit.Controls.String;
			/** Lookup to Publishing State - publishing state of this website/language instance (draft/published) */
			mspp_publishingstate: DevKit.Controls.Lookup;
			/** The system language determines which portal languages are available */
			mspp_systemlanguage: DevKit.Controls.Integer;
			/** Lookup to Website */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** This attribute is used only in Power Pages Management App, and only for UI purpose. It's value is mapped to mspp_systemlanguage. */
			mspp_websitelcid: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			mspp_mspp_websitelanguage_mspp_website_DefaultLanguage: DevKit.Controls.NavigationItem,
			mspp_websitelanguage_contentsnippet_contentsnippetlanguageid: DevKit.Controls.NavigationItem,
			mspp_websitelanguage_weblinkset: DevKit.Controls.NavigationItem,
			mspp_websitelanguage_webpage_webpagelanguageid: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_websitelanguage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_websitelanguage_Information */
		Body: DevKit.Formmspp_websitelanguage_Information.Body;
		/** The Navigation of form mspp_websitelanguage_Information */
		Navigation: DevKit.Formmspp_websitelanguage_Information.Navigation;
		/** The SidePanes of form mspp_websitelanguage_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_websitelanguageApi {
		/**
		* DynamicsCrm.DevKit mspp_websitelanguageApi
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
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_description: string;
		/** Localized display name of the portal language */
		mspp_displayname: string;
		/** Locale or language identifier that appears in the URL to indicate the portal language */
		mspp_languagecode: string;
		/** Locale ID that is assigned to the portal language */
		mspp_lcid: number;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Name of the portal language */
		mspp_name: string;
		/** Lookup to Publishing State - publishing state of this website/language instance (draft/published) */
		mspp_publishingstate: string;
		/** The system language determines which portal languages are available */
		mspp_systemlanguage: number;
		/** Lookup to Website */
		mspp_websiteid: string;
		/** Unique identifier for entity instances */
		mspp_websitelanguageId: string;
		/** This attribute is used only in Power Pages Management App, and only for UI purpose. It's value is mapped to mspp_systemlanguage. */
		mspp_websitelcid: OptionSet.mspp_websitelanguage.mspp_websitelcid;
		/** Status of the Website Language */
		statecode: OptionSet.mspp_websitelanguage.statecode;
		/** Reason for the status of the Website Language */
		statuscode: OptionSet.mspp_websitelanguage.statuscode;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			/** Localized display name of the portal language */
			readonly mspp_displayname: string;
			/** Locale or language identifier that appears in the URL to indicate the portal language */
			readonly mspp_languagecode: string;
			/** Locale ID that is assigned to the portal language */
			readonly mspp_lcid: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Name of the portal language */
			readonly mspp_name: string;
			/** Lookup to Publishing State - publishing state of this website/language instance (draft/published) */
			readonly mspp_publishingstate: string;
			/** The system language determines which portal languages are available */
			readonly mspp_systemlanguage: string;
			/** Lookup to Website */
			readonly mspp_websiteid: string;
			/** Unique identifier for entity instances */
			readonly mspp_websitelanguageId: string;
			/** This attribute is used only in Power Pages Management App, and only for UI purpose. It's value is mapped to mspp_systemlanguage. */
			readonly mspp_websitelcid: string;
			/** Status of the Website Language */
			readonly statecode: string;
			/** Reason for the status of the Website Language */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_websitelanguage {
		enum mspp_websitelcid {
			/** 1025 */
			Arabic,
			/** 1069 */
			Basque_Basque,
			/** 1026 */
			Bulgarian_Bulgaria,
			/** 1027 */
			Catalan_Catalan,
			/** 2052 */
			Chinese_China,
			/** 3076 */
			Chinese_Hong_Kong_SAR,
			/** 1028 */
			Chinese_Traditional,
			/** 1050 */
			Croatian_Croatia,
			/** 1029 */
			Czech_Czech_Republic,
			/** 1030 */
			Danish_Denmark,
			/** 1043 */
			Dutch_Netherlands,
			/** 1033 */
			English,
			/** 1061 */
			Estonian_Estonia,
			/** 1035 */
			Finnish_Finland,
			/** 1036 */
			French_France,
			/** 1110 */
			Galician_Spain,
			/** 1031 */
			German_Germany,
			/** 1032 */
			Greek_Greece,
			/** 1037 */
			Hebrew,
			/** 1081 */
			Hindi_India,
			/** 1038 */
			Hungarian_Hungary,
			/** 1057 */
			Indonesian_Indonesia,
			/** 1040 */
			Italian_Italy,
			/** 1041 */
			Japanese_Japan,
			/** 1087 */
			Kazakh_Kazakhstan,
			/** 1042 */
			Korean_Korea,
			/** 1062 */
			Latvian_Latvia,
			/** 1063 */
			Lithuanian_Lithuania,
			/** 1086 */
			Malay_Malaysia,
			/** 1044 */
			Norwegian_Bokmal_Norway,
			/** 1045 */
			Polish_Poland,
			/** 1046 */
			Portuguese_Brazil,
			/** 2070 */
			Portuguese_Portugal,
			/** 1048 */
			Romanian_Romania,
			/** 1049 */
			Russian_Russia,
			/** 3098 */
			Serbian_Cyrillic_Serbia,
			/** 2074 */
			Serbian_Latin_Serbia,
			/** 1051 */
			Slovak_Slovakia,
			/** 1060 */
			Slovenian_Slovenia,
			/** 3082 */
			Spanish_Traditional_Sort_Spain,
			/** 1053 */
			Swedish_Sweden,
			/** 1054 */
			Thai_Thailand,
			/** 1055 */
			Turkish_Turkiye,
			/** 1058 */
			Ukrainian_Ukraine,
			/** 1066 */
			Vietnamese_Vietnam
		}
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