//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormWebApi {
		interface Header extends DevKit.Controls.IHeader {
			header_IFRAME_google: DevKit.Controls.IFrame;
			header_WebResource_HelloWorld: DevKit.Controls.WebResource;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			devkit_AlternateKey: DevKit.Controls.String;
			devkit_Currency: DevKit.Controls.Money;
			/** Value of the Currency in base currency. */
			devkit_currency_Base: DevKit.Controls.Money;
			devkit_CustomerId: DevKit.Controls.Lookup;
			devkit_DateOnlyDateOnly: DevKit.Controls.Date;
			devkit_DateOnlyDateOnlyCalculated: DevKit.Controls.Date;
			devkit_DateOnlyDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_DecimalNumber: DevKit.Controls.Decimal;
			devkit_FloatingPointNumber: DevKit.Controls.Double;
			devkit_LinkWebApiId: DevKit.Controls.Lookup;
			devkit_MultipleLiniesofText: DevKit.Controls.String;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Controls.String;
			devkit_ParentWebApiId: DevKit.Controls.Lookup;
			devkit_SingleLineofTextEmail: DevKit.Controls.String;
			devkit_SingleLineofTextPhone: DevKit.Controls.String;
			devkit_SingleLineofTextText: DevKit.Controls.String;
			devkit_SingleLineofTextTextArea: DevKit.Controls.String;
			devkit_SingleLineofTextTickerSymbol: DevKit.Controls.String;
			devkit_SingleLineofTextUrl: DevKit.Controls.String;
			devkit_SingleOptionSetCode: DevKit.Controls.OptionSet;
			devkit_SingleOptionSetCodeCalculated: DevKit.Controls.OptionSet;
			devkit_TimeZoneDateAndTime: DevKit.Controls.DateTime;
			devkit_TimeZoneDateAndTimeCalculated: DevKit.Controls.DateTime;
			devkit_TimeZoneDateAndTimeRollup: DevKit.Controls.DateTime;
			/** Last Updated time of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_State: DevKit.Controls.Integer;
			devkit_TimeZoneDateOnly: DevKit.Controls.Date;
			devkit_TimeZoneDateOnlyCalculated: DevKit.Controls.Date;
			devkit_TimeZoneDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_UserLocalDateAndTime: DevKit.Controls.DateTime;
			devkit_UserLocalDateAndTimeCalculated: DevKit.Controls.DateTime;
			devkit_UserLocalDateAndTimeRollup: DevKit.Controls.DateTime;
			/** Last Updated time of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_State: DevKit.Controls.Integer;
			devkit_UserLocalDateOnly: DevKit.Controls.Date;
			devkit_UserLocalDateOnlyCalculated: DevKit.Controls.Date;
			devkit_UserLocalDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_WholeNumberDuration: DevKit.Controls.Integer;
			devkit_WholeNumberLanguage: DevKit.Controls.Integer;
			devkit_WholeNumberNone: DevKit.Controls.Integer;
			devkit_WholeNumberTimeZone: DevKit.Controls.Integer;
			devkit_YesAndNo: DevKit.Controls.Boolean;
			devkit_YesAndNoCalculated: DevKit.Controls.Boolean;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the WebApi */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the WebApi */
			statuscode: DevKit.Controls.OptionSet;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface tab_WEBAPI_Sections {
			WEBAPI_section_1: DevKit.Controls.Section;
			WEBAPI_section_2: DevKit.Controls.Section;
		}
		interface tab_NOTE_Sections {
			NOTE_section_1: DevKit.Controls.Section;
		}
		interface tab_TIMER_Sections {
			TIMER_section_1: DevKit.Controls.Section;
		}
		interface tab_OTHERS_Sections {
			OTHERS_section_1: DevKit.Controls.Section;
		}
		interface tab_QUICKVIEW_Sections {
			QUICKVIEW_section_1: DevKit.Controls.Section;
		}
		interface tab_SUBGRID_Sections {
			SUBGRID_section_1: DevKit.Controls.Section;
		}
		interface tab_OPTIONSET_Sections {
			OPTIONSET_section_1: DevKit.Controls.Section;
			OPTIONSET_section_3: DevKit.Controls.Section;
			OPTIONSET_section_5: DevKit.Controls.Section;
			OPTIONSET_section_2: DevKit.Controls.Section;
			OPTIONSET_section_4: DevKit.Controls.Section;
			OPTIONSET_section_6: DevKit.Controls.Section;
		}
		interface tab_DATETIME_Sections {
			DATETIME_section_1: DevKit.Controls.Section;
			DATETIME_section_3: DevKit.Controls.Section;
			DATETIME_section_5: DevKit.Controls.Section;
			DATETIME_section_7: DevKit.Controls.Section;
			DATETIME_section_2: DevKit.Controls.Section;
			DATETIME_section_4: DevKit.Controls.Section;
			DATETIME_section_6: DevKit.Controls.Section;
		}
		interface tab_NUMBER_Sections {
			NUMBER_section_1: DevKit.Controls.Section;
			NUMBER_section_4: DevKit.Controls.Section;
			NUMBER_section_2: DevKit.Controls.Section;
			NUMBER_section_3: DevKit.Controls.Section;
		}
		interface tab_STRING_Sections {
			STRING_section_1: DevKit.Controls.Section;
			STRING_section_3: DevKit.Controls.Section;
			STRING_section_2: DevKit.Controls.Section;
		}
		interface tab_ADMINISTRATOR_Sections {
			ADMINISTRATOR_section_1: DevKit.Controls.Section;
			ADMINISTRATOR_section_2: DevKit.Controls.Section;
		}
		interface tab_WEBAPI extends DevKit.Controls.ITab {
			Section: tab_WEBAPI_Sections;
		}
		interface tab_NOTE extends DevKit.Controls.ITab {
			Section: tab_NOTE_Sections;
		}
		interface tab_TIMER extends DevKit.Controls.ITab {
			Section: tab_TIMER_Sections;
		}
		interface tab_OTHERS extends DevKit.Controls.ITab {
			Section: tab_OTHERS_Sections;
		}
		interface tab_QUICKVIEW extends DevKit.Controls.ITab {
			Section: tab_QUICKVIEW_Sections;
		}
		interface tab_SUBGRID extends DevKit.Controls.ITab {
			Section: tab_SUBGRID_Sections;
		}
		interface tab_OPTIONSET extends DevKit.Controls.ITab {
			Section: tab_OPTIONSET_Sections;
		}
		interface tab_DATETIME extends DevKit.Controls.ITab {
			Section: tab_DATETIME_Sections;
		}
		interface tab_NUMBER extends DevKit.Controls.ITab {
			Section: tab_NUMBER_Sections;
		}
		interface tab_STRING extends DevKit.Controls.ITab {
			Section: tab_STRING_Sections;
		}
		interface tab_ADMINISTRATOR extends DevKit.Controls.ITab {
			Section: tab_ADMINISTRATOR_Sections;
		}
		interface Tabs {
			WEBAPI: tab_WEBAPI;
			NOTE: tab_NOTE;
			TIMER: tab_TIMER;
			OTHERS: tab_OTHERS;
			QUICKVIEW: tab_QUICKVIEW;
			SUBGRID: tab_SUBGRID;
			OPTIONSET: tab_OPTIONSET;
			DATETIME: tab_DATETIME;
			NUMBER: tab_NUMBER;
			STRING: tab_STRING;
			ADMINISTRATOR: tab_ADMINISTRATOR;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			tCreatedOn: DevKit.Controls.Timer;
			WebResource_WORDHELLO: DevKit.Controls.WebResource;
			IFRAME_GoogleGoogle: DevKit.Controls.IFrame;
			IFRAME_ACIWIDGET: DevKit.Controls.AciWidget;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			devkit_AlternateKey: DevKit.Controls.String;
			devkit_Currency: DevKit.Controls.Money;
			/** Value of the Currency in base currency. */
			devkit_currency_Base: DevKit.Controls.Money;
			devkit_CustomerId: DevKit.Controls.Lookup;
			devkit_DateOnlyDateOnly: DevKit.Controls.Date;
			devkit_DateOnlyDateOnlyCalculated: DevKit.Controls.Date;
			devkit_DateOnlyDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_DecimalNumber: DevKit.Controls.Decimal;
			devkit_FloatingPointNumber: DevKit.Controls.Double;
			devkit_LinkWebApiId: DevKit.Controls.Lookup;
			devkit_LinkWebApiId_1: DevKit.Controls.Lookup;
			devkit_MultiOptionSetCode: DevKit.Controls.MultiOptionSet;
			devkit_MultipleLiniesofText: DevKit.Controls.String;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Controls.String;
			devkit_ParentWebApiId: DevKit.Controls.Lookup;
			devkit_SingleLineofTextEmail: DevKit.Controls.String;
			devkit_SingleLineofTextPhone: DevKit.Controls.String;
			devkit_SingleLineofTextText: DevKit.Controls.String;
			devkit_SingleLineofTextTextArea: DevKit.Controls.String;
			devkit_SingleLineofTextTickerSymbol: DevKit.Controls.String;
			devkit_SingleLineofTextUrl: DevKit.Controls.String;
			devkit_SingleOptionSetCode: DevKit.Controls.OptionSet;
			devkit_SingleOptionSetCodeCalculated: DevKit.Controls.OptionSet;
			devkit_TimeZoneDateAndTime: DevKit.Controls.DateTime;
			devkit_TimeZoneDateAndTimeCalculated: DevKit.Controls.DateTime;
			devkit_TimeZoneDateAndTimeRollup: DevKit.Controls.DateTime;
			/** Last Updated time of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_State: DevKit.Controls.Integer;
			devkit_TimeZoneDateOnly: DevKit.Controls.Date;
			devkit_TimeZoneDateOnlyCalculated: DevKit.Controls.Date;
			devkit_TimeZoneDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_UserLocalDateAndTime: DevKit.Controls.DateTime;
			devkit_UserLocalDateAndTimeCalculated: DevKit.Controls.DateTime;
			devkit_UserLocalDateAndTimeRollup: DevKit.Controls.DateTime;
			/** Last Updated time of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_State: DevKit.Controls.Integer;
			devkit_UserLocalDateOnly: DevKit.Controls.Date;
			devkit_UserLocalDateOnlyCalculated: DevKit.Controls.Date;
			devkit_UserLocalDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_WholeNumberDuration: DevKit.Controls.Integer;
			devkit_WholeNumberLanguage: DevKit.Controls.Integer;
			devkit_WholeNumberNone: DevKit.Controls.Integer;
			devkit_WholeNumberTimeZone: DevKit.Controls.Integer;
			devkit_YesAndNo: DevKit.Controls.Boolean;
			devkit_YesAndNoCalculated: DevKit.Controls.Boolean;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the WebApi */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the WebApi */
			statuscode: DevKit.Controls.OptionSet;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			devkit_AlternateKey: DevKit.Controls.String;
			devkit_Currency: DevKit.Controls.Money;
			/** Value of the Currency in base currency. */
			devkit_currency_Base: DevKit.Controls.Money;
			devkit_CustomerId: DevKit.Controls.Lookup;
			devkit_DateOnlyDateOnly: DevKit.Controls.Date;
			devkit_DateOnlyDateOnlyCalculated: DevKit.Controls.Date;
			devkit_DateOnlyDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_DecimalNumber: DevKit.Controls.Decimal;
			devkit_FloatingPointNumber: DevKit.Controls.Double;
			devkit_LinkWebApiId: DevKit.Controls.Lookup;
			devkit_MultipleLiniesofText: DevKit.Controls.String;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Controls.String;
			devkit_ParentWebApiId: DevKit.Controls.Lookup;
			devkit_SingleLineofTextEmail: DevKit.Controls.String;
			devkit_SingleLineofTextPhone: DevKit.Controls.String;
			devkit_SingleLineofTextText: DevKit.Controls.String;
			devkit_SingleLineofTextTextArea: DevKit.Controls.String;
			devkit_SingleLineofTextTickerSymbol: DevKit.Controls.String;
			devkit_SingleLineofTextUrl: DevKit.Controls.String;
			devkit_SingleOptionSetCode: DevKit.Controls.OptionSet;
			devkit_SingleOptionSetCodeCalculated: DevKit.Controls.OptionSet;
			devkit_TimeZoneDateAndTime: DevKit.Controls.DateTime;
			devkit_TimeZoneDateAndTimeCalculated: DevKit.Controls.DateTime;
			devkit_TimeZoneDateAndTimeRollup: DevKit.Controls.DateTime;
			/** Last Updated time of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_State: DevKit.Controls.Integer;
			devkit_TimeZoneDateOnly: DevKit.Controls.Date;
			devkit_TimeZoneDateOnlyCalculated: DevKit.Controls.Date;
			devkit_TimeZoneDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_UserLocalDateAndTime: DevKit.Controls.DateTime;
			devkit_UserLocalDateAndTimeCalculated: DevKit.Controls.DateTime;
			devkit_UserLocalDateAndTimeRollup: DevKit.Controls.DateTime;
			/** Last Updated time of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_State: DevKit.Controls.Integer;
			devkit_UserLocalDateOnly: DevKit.Controls.Date;
			devkit_UserLocalDateOnlyCalculated: DevKit.Controls.Date;
			devkit_UserLocalDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_WholeNumberDuration: DevKit.Controls.Integer;
			devkit_WholeNumberLanguage: DevKit.Controls.Integer;
			devkit_WholeNumberNone: DevKit.Controls.Integer;
			devkit_WholeNumberTimeZone: DevKit.Controls.Integer;
			devkit_YesAndNo: DevKit.Controls.Boolean;
			devkit_YesAndNoCalculated: DevKit.Controls.Boolean;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the WebApi */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the WebApi */
			statuscode: DevKit.Controls.OptionSet;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_devkit_devkit_webapi_devkit_webapi_ParentWebApiId: DevKit.Controls.NavigationItem,
			nav_devkit_devkit_webapi_devkit_webapi_LinkWebApiId: DevKit.Controls.NavigationItem,
			nav_bpf_devkit_webapi_devkit_processwebapi1: DevKit.Controls.NavigationItem,
			nav_devkit_devkit_webapi_contact: DevKit.Controls.NavigationItem
		}
		interface quickForm_quickViewWebApi_Body {
			devkit_Name: DevKit.Controls.QuickView;
			devkit_SingleLineofTextText: DevKit.Controls.QuickView;
			devkit_YesAndNo: DevKit.Controls.QuickView;
			OwnerId: DevKit.Controls.QuickView;
		}
		interface quickForm_quickViewWebApi extends DevKit.Controls.IQuickView {
			Body: quickForm_quickViewWebApi_Body;
		}
		interface QuickForm {
			quickViewWebApi: quickForm_quickViewWebApi;
		}
		interface ProcessProcess_WebApi_1 {
			devkit_CustomerId: DevKit.Controls.Lookup;
			devkit_DecimalNumber: DevKit.Controls.Decimal;
			devkit_FloatingPointNumber: DevKit.Controls.Double;
			devkit_MultipleLiniesofText: DevKit.Controls.String;
			devkit_SingleLineofTextText: DevKit.Controls.String;
			devkit_SingleLineofTextText_1: DevKit.Controls.String;
			devkit_SingleOptionSetCode: DevKit.Controls.OptionSet;
			devkit_UserLocalDateOnly: DevKit.Controls.Date;
			devkit_WholeNumberNone: DevKit.Controls.Integer;
			devkit_YesAndNo: DevKit.Controls.Boolean;
			devkit_YesAndNoCalculated: DevKit.Controls.Boolean;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Process_WebApi_1: ProcessProcess_WebApi_1;
		}
		interface Grid {
			gridSubGridParentWebApi: DevKit.Controls.Grid;
		}
	}
	class FormWebApi extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form WebApi
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form WebApi */
		Body: MyDog.FormWebApi.Body;
		/** The Footer section of form WebApi */
		Footer: MyDog.FormWebApi.Footer;
		/** The Header section of form WebApi */
		Header: MyDog.FormWebApi.Header;
		/** The Navigation of form WebApi */
		Navigation: MyDog.FormWebApi.Navigation;
		/** The QuickForm of form WebApi */
		QuickForm: MyDog.FormWebApi.QuickForm;
		/** The Process of form WebApi */
		Process: MyDog.FormWebApi.Process;
		/** The Grid of form WebApi */
		Grid: MyDog.FormWebApi.Grid;
	}
	namespace FormWebApi_2 {
		interface Header extends DevKit.Controls.IHeader {
			header_IFRAME_google: DevKit.Controls.IFrame;
			header_WebResource_HelloWorld: DevKit.Controls.WebResource;
			devkit_Currency: DevKit.Controls.Money;
			devkit_CustomerId: DevKit.Controls.Lookup;
			devkit_DateOnlyDateOnly: DevKit.Controls.Date;
			devkit_DecimalNumber: DevKit.Controls.Decimal;
			devkit_FloatingPointNumber: DevKit.Controls.Double;
			devkit_MultipleLiniesofText: DevKit.Controls.String;
			devkit_SingleLineofTextText: DevKit.Controls.String;
			devkit_SingleOptionSetCode: DevKit.Controls.OptionSet;
			devkit_TimeZoneDateAndTime: DevKit.Controls.DateTime;
			devkit_TimeZoneDateOnly: DevKit.Controls.Date;
			devkit_UserLocalDateAndTime: DevKit.Controls.DateTime;
			devkit_UserLocalDateOnly: DevKit.Controls.Date;
			devkit_WholeNumberNone: DevKit.Controls.Integer;
			devkit_YesAndNo: DevKit.Controls.Boolean;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the WebApi */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the WebApi */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_OPTIONSET_Sections {
			tab_OPTIONSET_section_SINGLE: DevKit.Controls.Section;
			tab_OPTIONSET_section_MULTI_OPTIONSET: DevKit.Controls.Section;
			tab_OPTIONSET_section_5: DevKit.Controls.Section;
			tab_OPTIONSEST_section_STATUS: DevKit.Controls.Section;
			tab_OPTIONSET_section_STATE: DevKit.Controls.Section;
			tab_OPTIONSET_section_6: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
			tab_4_section_5: DevKit.Controls.Section;
			tab_4_section_7: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_4: DevKit.Controls.Section;
			tab_4_section_6: DevKit.Controls.Section;
		}
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Controls.Section;
			tab_6_section_4: DevKit.Controls.Section;
			tab_6_section_2: DevKit.Controls.Section;
			tab_6_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Controls.Section;
			tab_5_section_3: DevKit.Controls.Section;
			tab_5_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_ADMINISTRATOR_Sections {
			tab_ADMINISTRATOR_section_CREATED: DevKit.Controls.Section;
			tab_ADMINISTRATOR_section_MODIFIED: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_OPTIONSET extends DevKit.Controls.ITab {
			Section: tab_tab_OPTIONSET_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_ADMINISTRATOR extends DevKit.Controls.ITab {
			Section: tab_tab_ADMINISTRATOR_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_OPTIONSET: tab_tab_OPTIONSET;
			tab_4: tab_tab_4;
			tab_6: tab_tab_6;
			tab_5: tab_tab_5;
			tab_ADMINISTRATOR: tab_tab_ADMINISTRATOR;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			devkit_AlternateKey: DevKit.Controls.String;
			devkit_Currency: DevKit.Controls.Money;
			/** Value of the Currency in base currency. */
			devkit_currency_Base: DevKit.Controls.Money;
			devkit_CustomerId: DevKit.Controls.Lookup;
			devkit_DateOnlyDateOnly: DevKit.Controls.Date;
			devkit_DateOnlyDateOnlyCalculated: DevKit.Controls.Date;
			devkit_DateOnlyDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_DecimalNumber: DevKit.Controls.Decimal;
			devkit_FloatingPointNumber: DevKit.Controls.Double;
			devkit_LinkWebApiId: DevKit.Controls.Lookup;
			devkit_LinkWebApiId_1: DevKit.Controls.Lookup;
			devkit_MultiOptionSetCode: DevKit.Controls.MultiOptionSet;
			devkit_MultipleLiniesofText: DevKit.Controls.String;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Controls.String;
			devkit_ParentWebApiId: DevKit.Controls.Lookup;
			devkit_SingleLineofTextEmail: DevKit.Controls.String;
			devkit_SingleLineofTextPhone: DevKit.Controls.String;
			devkit_SingleLineofTextText: DevKit.Controls.String;
			devkit_SingleLineofTextTextArea: DevKit.Controls.String;
			devkit_SingleLineofTextTickerSymbol: DevKit.Controls.String;
			devkit_SingleLineofTextUrl: DevKit.Controls.String;
			devkit_SingleOptionSetCode: DevKit.Controls.OptionSet;
			devkit_SingleOptionSetCodeCalculated: DevKit.Controls.OptionSet;
			devkit_TimeZoneDateAndTime: DevKit.Controls.DateTime;
			devkit_TimeZoneDateAndTimeCalculated: DevKit.Controls.DateTime;
			devkit_TimeZoneDateAndTimeRollup: DevKit.Controls.DateTime;
			/** Last Updated time of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_State: DevKit.Controls.Integer;
			devkit_TimeZoneDateOnly: DevKit.Controls.Date;
			devkit_TimeZoneDateOnlyCalculated: DevKit.Controls.Date;
			devkit_TimeZoneDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_UserLocalDateAndTime: DevKit.Controls.DateTime;
			devkit_UserLocalDateAndTimeCalculated: DevKit.Controls.DateTime;
			devkit_UserLocalDateAndTimeRollup: DevKit.Controls.DateTime;
			/** Last Updated time of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_State: DevKit.Controls.Integer;
			devkit_UserLocalDateOnly: DevKit.Controls.Date;
			devkit_UserLocalDateOnlyCalculated: DevKit.Controls.Date;
			devkit_UserLocalDateOnlyRollup: DevKit.Controls.Date;
			/** Last Updated time of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_Date: DevKit.Controls.DateTime;
			/** State of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_State: DevKit.Controls.Integer;
			devkit_WholeNumberDuration: DevKit.Controls.Integer;
			devkit_WholeNumberLanguage: DevKit.Controls.Integer;
			devkit_WholeNumberNone: DevKit.Controls.Integer;
			devkit_WholeNumberTimeZone: DevKit.Controls.Integer;
			devkit_YesAndNo: DevKit.Controls.Boolean;
			devkit_YesAndNoCalculated: DevKit.Controls.Boolean;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the WebApi */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the WebApi */
			statuscode: DevKit.Controls.OptionSet;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface ProcessProcess_WebApi_1 {
			devkit_CustomerId: DevKit.Controls.Lookup;
			devkit_DecimalNumber: DevKit.Controls.Decimal;
			devkit_FloatingPointNumber: DevKit.Controls.Double;
			devkit_MultipleLiniesofText: DevKit.Controls.String;
			devkit_SingleLineofTextText: DevKit.Controls.String;
			devkit_SingleLineofTextText_1: DevKit.Controls.String;
			devkit_SingleOptionSetCode: DevKit.Controls.OptionSet;
			devkit_UserLocalDateOnly: DevKit.Controls.Date;
			devkit_WholeNumberNone: DevKit.Controls.Integer;
			devkit_YesAndNo: DevKit.Controls.Boolean;
			devkit_YesAndNoCalculated: DevKit.Controls.Boolean;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Process_WebApi_1: ProcessProcess_WebApi_1;
		}
	}
	class FormWebApi_2 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form WebApi_2
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form WebApi_2 */
		Body: MyDog.FormWebApi_2.Body;
		/** The Header section of form WebApi_2 */
		Header: MyDog.FormWebApi_2.Header;
		/** The Process of form WebApi_2 */
		Process: MyDog.FormWebApi_2.Process;
	}
	namespace Formdevkit_WebApi_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			devkit_AlternateKey: DevKit.Controls.String;
			devkit_DateOnlyDateOnly: DevKit.Controls.Date;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formdevkit_WebApi_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form devkit_WebApi_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form devkit_WebApi_Quick_Create */
		Body: MyDog.Formdevkit_WebApi_Quick_Create.Body;
	}
	class devkit_WebApiApi {
		/**
		* DynamicsCrm.DevKit devkit_WebApiApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		devkit_AlternateKey: DevKit.WebApi.StringValue;
		devkit_Currency: DevKit.WebApi.MoneyValue;
		/** Value of the Currency in base currency. */
		devkit_currency_Base: DevKit.WebApi.MoneyValueReadonly;
		devkit_CustomerId_account: DevKit.WebApi.LookupValue;
		devkit_CustomerId_contact: DevKit.WebApi.LookupValue;
		devkit_DateOnlyDateOnly_DateOnly: DevKit.WebApi.DateOnlyValue;
		devkit_DateOnlyDateOnlyCalculated_DateOnly: DevKit.WebApi.DateOnlyValueReadonly;
		devkit_DateOnlyDateOnlyRollup_DateOnly: DevKit.WebApi.DateOnlyValueReadonly;
		/** Last Updated time of rollup field Date Only Date Only Rollup. */
		devkit_DateOnlyDateOnlyRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Date Only Date Only Rollup. */
		devkit_DateOnlyDateOnlyRollup_State: DevKit.WebApi.IntegerValueReadonly;
		devkit_DecimalNumber: DevKit.WebApi.DecimalValue;
		devkit_FloatingPointNumber: DevKit.WebApi.DoubleValue;
		devkit_LinkWebApiId: DevKit.WebApi.LookupValue;
		devkit_MultiOptionSetCode: DevKit.WebApi.MultiOptionSetValue;
		devkit_MultipleLiniesofText: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		devkit_Name: DevKit.WebApi.StringValue;
		devkit_ParentWebApiId: DevKit.WebApi.LookupValue;
		devkit_SingleLineofTextEmail: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextPhone: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextText: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextTextArea: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextTickerSymbol: DevKit.WebApi.StringValue;
		devkit_SingleLineofTextUrl: DevKit.WebApi.StringValue;
		devkit_SingleOptionSetCode: DevKit.WebApi.OptionSetValue;
		devkit_SingleOptionSetCodeCalculated: DevKit.WebApi.OptionSetValueReadonly;
		devkit_TimeZoneDateAndTime_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		devkit_TimeZoneDateAndTimeCalculated_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValueReadonly;
		devkit_TimeZoneDateAndTimeRollup_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValueReadonly;
		/** Last Updated time of rollup field TimeZone Date And Time Rollup. */
		devkit_TimeZoneDateAndTimeRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field TimeZone Date And Time Rollup. */
		devkit_TimeZoneDateAndTimeRollup_State: DevKit.WebApi.IntegerValueReadonly;
		devkit_TimeZoneDateOnly_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue;
		devkit_TimeZoneDateOnlyCalculated_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValueReadonly;
		devkit_TimeZoneDateOnlyRollup_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValueReadonly;
		/** Last Updated time of rollup field TimeZone Date Only Rollup. */
		devkit_TimeZoneDateOnlyRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field TimeZone Date Only Rollup. */
		devkit_TimeZoneDateOnlyRollup_State: DevKit.WebApi.IntegerValueReadonly;
		devkit_UserLocalDateAndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		devkit_UserLocalDateAndTimeCalculated_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		devkit_UserLocalDateAndTimeRollup_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Last Updated time of rollup field User Local Date And Time Rollup. */
		devkit_UserLocalDateAndTimeRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field User Local Date And Time Rollup. */
		devkit_UserLocalDateAndTimeRollup_State: DevKit.WebApi.IntegerValueReadonly;
		devkit_UserLocalDateOnly_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		devkit_UserLocalDateOnlyCalculated_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		devkit_UserLocalDateOnlyRollup_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Last Updated time of rollup field User Local Date Only Rollup. */
		devkit_UserLocalDateOnlyRollup_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field User Local Date Only Rollup. */
		devkit_UserLocalDateOnlyRollup_State: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier for entity instances */
		devkit_WebApiId: DevKit.WebApi.GuidValue;
		devkit_WholeNumberDuration: DevKit.WebApi.IntegerValue;
		devkit_WholeNumberLanguage: DevKit.WebApi.IntegerValue;
		devkit_WholeNumberNone: DevKit.WebApi.IntegerValue;
		devkit_WholeNumberTimeZone: DevKit.WebApi.IntegerValue;
		devkit_YesAndNo: DevKit.WebApi.BooleanValue;
		devkit_YesAndNoCalculated: DevKit.WebApi.BooleanValueReadonly;
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the WebApi */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the WebApi */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace devkit_WebApi {
		enum devkit_MultiOptionSetCode {
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
			/** 100000000 */
			Crm_4,
			/** 100000005 */
			Dynamics_365
		}
		enum devkit_SingleOptionSetCode {
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
			/** 100000000 */
			Crm_4,
			/** 100000005 */
			Dynamics_365
		}
		enum devkit_SingleOptionSetCodeCalculated {
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
			/** 100000000 */
			Crm_4,
			/** 100000005 */
			Dynamics_365
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
			/** 100000000 */
			Active_2,
			/** 100000001 */
			Active_3,
			/** 2 */
			Inactive,
			/** 100000002 */
			Inactive_2,
			/** 100000003 */
			Inactive_3
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
//{'JsForm':['Quick Create','WebApi','WebApi 2'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}