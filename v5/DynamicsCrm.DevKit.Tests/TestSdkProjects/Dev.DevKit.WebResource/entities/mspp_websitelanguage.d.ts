//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_websitelanguage_Information {
		interface tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222_Sections {
			/** General */
			_8F9F4F14_3F39_499E_AAD1_E161FABE27C6: DevKit.Controls.Section;
		}
		/** General */
		interface tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222 extends DevKit.Controls.ITab {
			Section: tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222_Sections;
		}
		interface Tabs {
			/** General */
			_6FA2C0DC_1585_4CA4_86A7_285DB3B27222: tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222;
		}
		interface Body {
			Tab: Tabs;
			/** Description */
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
	}
	export class Formmspp_websitelanguage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_websitelanguage_Information */
		Body: DevKit.Formmspp_websitelanguage_Information.Body;
	}
	export class mspp_websitelanguageApi {
		/**
		* DynamicsCrm.DevKit mspp_websitelanguageApi
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
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_description: string | null;
		/** Localized display name of the portal language */
		mspp_displayname: string | null;
		/** Locale or language identifier that appears in the URL to indicate the portal language */
		mspp_languagecode: string | null;
		/** Locale ID that is assigned to the portal language */
		mspp_lcid: number | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** Name of the portal language */
		mspp_name: string | null;
		/** Lookup to Publishing State - publishing state of this website/language instance (draft/published) */
		mspp_publishingstate: string | null;
		/** The system language determines which portal languages are available */
		mspp_systemlanguage: number | null;
		/** Lookup to Website */
		mspp_websiteid: string | null;
		/** Unique identifier for entity instances */
		mspp_websitelanguageId: string | null;
		/** This attribute is used only in Power Pages Management App, and only for UI purpose. It's value is mapped to mspp_systemlanguage. */
		mspp_websitelcid: OptionSet.mspp_websitelanguage.mspp_websitelcid | null;
		/** Status of the Website Language */
		statecode: OptionSet.mspp_websitelanguage.statecode | null;
		/** Reason for the status of the Website Language */
		statuscode: OptionSet.mspp_websitelanguage.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Arabic = 1025*/
			Arabic = 1025,
			/** Basque_Basque = 1069*/
			Basque_Basque = 1069,
			/** Bulgarian_Bulgaria = 1026*/
			Bulgarian_Bulgaria = 1026,
			/** Catalan_Catalan = 1027*/
			Catalan_Catalan = 1027,
			/** Chinese_China = 2052*/
			Chinese_China = 2052,
			/** Chinese_Hong_Kong_SAR = 3076*/
			Chinese_Hong_Kong_SAR = 3076,
			/** Chinese_Traditional = 1028*/
			Chinese_Traditional = 1028,
			/** Croatian_Croatia = 1050*/
			Croatian_Croatia = 1050,
			/** Czech_Czech_Republic = 1029*/
			Czech_Czech_Republic = 1029,
			/** Danish_Denmark = 1030*/
			Danish_Denmark = 1030,
			/** Dutch_Netherlands = 1043*/
			Dutch_Netherlands = 1043,
			/** English = 1033*/
			English = 1033,
			/** Estonian_Estonia = 1061*/
			Estonian_Estonia = 1061,
			/** Finnish_Finland = 1035*/
			Finnish_Finland = 1035,
			/** French_France = 1036*/
			French_France = 1036,
			/** Galician_Spain = 1110*/
			Galician_Spain = 1110,
			/** German_Germany = 1031*/
			German_Germany = 1031,
			/** Greek_Greece = 1032*/
			Greek_Greece = 1032,
			/** Hebrew = 1037*/
			Hebrew = 1037,
			/** Hindi_India = 1081*/
			Hindi_India = 1081,
			/** Hungarian_Hungary = 1038*/
			Hungarian_Hungary = 1038,
			/** Indonesian_Indonesia = 1057*/
			Indonesian_Indonesia = 1057,
			/** Italian_Italy = 1040*/
			Italian_Italy = 1040,
			/** Japanese_Japan = 1041*/
			Japanese_Japan = 1041,
			/** Kazakh_Kazakhstan = 1087*/
			Kazakh_Kazakhstan = 1087,
			/** Korean_Korea = 1042*/
			Korean_Korea = 1042,
			/** Latvian_Latvia = 1062*/
			Latvian_Latvia = 1062,
			/** Lithuanian_Lithuania = 1063*/
			Lithuanian_Lithuania = 1063,
			/** Malay_Malaysia = 1086*/
			Malay_Malaysia = 1086,
			/** Norwegian_Bokmal_Norway = 1044*/
			Norwegian_Bokmal_Norway = 1044,
			/** Polish_Poland = 1045*/
			Polish_Poland = 1045,
			/** Portuguese_Brazil = 1046*/
			Portuguese_Brazil = 1046,
			/** Portuguese_Portugal = 2070*/
			Portuguese_Portugal = 2070,
			/** Romanian_Romania = 1048*/
			Romanian_Romania = 1048,
			/** Russian_Russia = 1049*/
			Russian_Russia = 1049,
			/** Serbian_Cyrillic_Serbia = 3098*/
			Serbian_Cyrillic_Serbia = 3098,
			/** Serbian_Latin_Serbia = 2074*/
			Serbian_Latin_Serbia = 2074,
			/** Slovak_Slovakia = 1051*/
			Slovak_Slovakia = 1051,
			/** Slovenian_Slovenia = 1060*/
			Slovenian_Slovenia = 1060,
			/** Spanish_Traditional_Sort_Spain = 3082*/
			Spanish_Traditional_Sort_Spain = 3082,
			/** Swedish_Sweden = 1053*/
			Swedish_Sweden = 1053,
			/** Thai_Thailand = 1054*/
			Thai_Thailand = 1054,
			/** Turkish_Turkiye = 1055*/
			Turkish_Turkiye = 1055,
			/** Ukrainian_Ukraine = 1058*/
			Ukrainian_Ukraine = 1058,
			/** Vietnamese_Vietnam = 1066*/
			Vietnamese_Vietnam = 1066
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
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