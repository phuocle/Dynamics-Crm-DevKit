//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webfile_Information {
		interface tab__FBAB524E_5B3C_4DB1_8A8A_74366B17D549_Sections {
			_2B6A953D_2F2F_4CA4_8D4E_7637C1C9A42F: DevKit.Controls.Section;
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_2: DevKit.Controls.Section;
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_3: DevKit.Controls.Section;
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_4: DevKit.Controls.Section;
			mspp_webfile_summary_monacoEditor: DevKit.Controls.Section;
		}
		interface tab__FBAB524E_5B3C_4DB1_8A8A_74366B17D549 extends DevKit.Controls.ITab {
			Section: tab__FBAB524E_5B3C_4DB1_8A8A_74366B17D549_Sections;
		}
		interface Tabs {
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549: tab__FBAB524E_5B3C_4DB1_8A8A_74366B17D549;
		}
		interface Body {
			Tab: Tabs;
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			mspp_alloworigin: DevKit.Controls.String;
			mspp_cloudblobaddress: DevKit.Controls.String;
			/** Shows the value to be applied to the HTTP Response Headers Content-Disposition. */
			mspp_contentdisposition: DevKit.Controls.OptionSet;
			mspp_displaydate: DevKit.Controls.DateTime;
			mspp_displayorder: DevKit.Controls.Integer;
			/** Shows whether the web file is excluded from the portal search. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			mspp_expirationdate: DevKit.Controls.DateTime;
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Unique identifier for Web File associated with Web File. */
			mspp_masterwebfileid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Page associated with Web File. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			mspp_partialurl: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web File. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_releasedate: DevKit.Controls.DateTime;
			mspp_summary: DevKit.Controls.String;
			mspp_summary1: DevKit.Controls.String;
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web File. */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_file_attachment_html: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_webfile_masterwebfile: DevKit.Controls.NavigationItem,
			mspp_webfile_shortcut: DevKit.Controls.NavigationItem,
			mspp_webfile_webpage_image: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_webfile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webfile_Information */
		Body: DevKit.Formmspp_webfile_Information.Body;
		/** The Navigation of form mspp_webfile_Information */
		Navigation: DevKit.Formmspp_webfile_Information.Navigation;
		/** The SidePanes of form mspp_webfile_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webfileApi {
		/**
		* DynamicsCrm.DevKit mspp_webfileApi
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
		/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
		mspp_alloworigin: string;
		mspp_cloudblobaddress: string;
		/** Shows the value to be applied to the HTTP Response Headers Content-Disposition. */
		mspp_contentdisposition: OptionSet.mspp_webfile.mspp_contentdisposition;
		/** Shows who created the record. */
		mspp_createdby: string;
		mspp_createdbyipaddress: string;
		mspp_createdbyusername: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_displaydate_UtcDateAndTime: Date;
		mspp_displayorder: number;
		/** Shows whether the web file is excluded from the portal search. */
		mspp_excludefromsearch: boolean;
		mspp_expirationdate_UtcDateAndTime: Date;
		mspp_hiddenfromsitemap: boolean;
		/** Unique identifier for Web File associated with Web File. */
		mspp_masterwebfileid: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		mspp_modifiedbyipaddress: string;
		mspp_modifiedbyusername: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for Web Page associated with Web File. */
		mspp_parentpageid: string;
		mspp_partialurl: string;
		/** Unique identifier for Publishing State associated with Web File. */
		mspp_publishingstateid: string;
		mspp_releasedate_UtcDateAndTime: Date;
		mspp_summary: string;
		mspp_title: string;
		/** Unique identifier for entity instances */
		mspp_webfileId: string;
		/** Unique identifier for Website associated with Web File. */
		mspp_websiteid: string;
		/** Status of the Web File */
		statecode: OptionSet.mspp_webfile.statecode;
		/** Reason for the status of the Web File */
		statuscode: OptionSet.mspp_webfile.statuscode;
		readonly FormattedValue: {
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			readonly mspp_alloworigin: string;
			readonly mspp_cloudblobaddress: string;
			/** Shows the value to be applied to the HTTP Response Headers Content-Disposition. */
			readonly mspp_contentdisposition: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			readonly mspp_createdbyipaddress: string;
			readonly mspp_createdbyusername: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_displaydate_UtcDateAndTime: string;
			readonly mspp_displayorder: string;
			/** Shows whether the web file is excluded from the portal search. */
			readonly mspp_excludefromsearch: string;
			readonly mspp_expirationdate_UtcDateAndTime: string;
			readonly mspp_hiddenfromsitemap: string;
			/** Unique identifier for Web File associated with Web File. */
			readonly mspp_masterwebfileid: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			readonly mspp_modifiedbyipaddress: string;
			readonly mspp_modifiedbyusername: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for Web Page associated with Web File. */
			readonly mspp_parentpageid: string;
			readonly mspp_partialurl: string;
			/** Unique identifier for Publishing State associated with Web File. */
			readonly mspp_publishingstateid: string;
			readonly mspp_releasedate_UtcDateAndTime: string;
			readonly mspp_summary: string;
			readonly mspp_title: string;
			/** Unique identifier for entity instances */
			readonly mspp_webfileId: string;
			/** Unique identifier for Website associated with Web File. */
			readonly mspp_websiteid: string;
			/** Status of the Web File */
			readonly statecode: string;
			/** Reason for the status of the Web File */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webfile {
		enum mspp_contentdisposition {
			/** 756150001 */
			attachment,
			/** 756150000 */
			inline
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