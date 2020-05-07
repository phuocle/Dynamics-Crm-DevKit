//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace Tomato {
	namespace FormTest {
		interface Header {
			header_IFRAME_google: DevKit.Form.Controls.ControlIFrame;
			header_WebResource_HelloWorld: DevKit.Form.Controls.ControlWebResource;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Form.Controls.ControlLookup;
			devkit_AlternateKey: DevKit.Form.Controls.ControlString;
			devkit_Currency: DevKit.Form.Controls.ControlMoney;
			/** Value of the Currency in base currency. */
			devkit_currency_Base: DevKit.Form.Controls.ControlMoney;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			devkit_DateOnlyDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_DateOnlyDateOnlyCalculated: DevKit.Form.Controls.ControlDate;
			devkit_DateOnlyDateOnlyRollup: DevKit.Form.Controls.ControlDate;
			/** Last Updated time of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_DecimalNumber: DevKit.Form.Controls.ControlDecimal;
			devkit_FloatingPointNumber: DevKit.Form.Controls.ControlDouble;
			devkit_LinkWebApiId: DevKit.Form.Controls.ControlLookup;
			devkit_MultipleLiniesofText: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Form.Controls.ControlString;
			devkit_ParentWebApiId: DevKit.Form.Controls.ControlLookup;
			devkit_SingleLineofTextEmail: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextPhone: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextText: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextTextArea: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextTickerSymbol: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextUrl: DevKit.Form.Controls.ControlString;
			devkit_SingleOptionSetCode: DevKit.Form.Controls.ControlOptionSet;
			devkit_SingleOptionSetCodeCalculated: DevKit.Form.Controls.ControlOptionSet;
			devkit_TimeZoneDateAndTime: DevKit.Form.Controls.ControlDateTime;
			devkit_TimeZoneDateAndTimeCalculated: DevKit.Form.Controls.ControlDateTime;
			devkit_TimeZoneDateAndTimeRollup: DevKit.Form.Controls.ControlDateTime;
			/** Last Updated time of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_TimeZoneDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_TimeZoneDateOnlyCalculated: DevKit.Form.Controls.ControlDate;
			devkit_TimeZoneDateOnlyRollup: DevKit.Form.Controls.ControlDate;
			/** Last Updated time of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_UserLocalDateAndTime: DevKit.Form.Controls.ControlDateTime;
			devkit_UserLocalDateAndTimeCalculated: DevKit.Form.Controls.ControlDateTime;
			devkit_UserLocalDateAndTimeRollup: DevKit.Form.Controls.ControlDateTime;
			/** Last Updated time of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_UserLocalDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_UserLocalDateOnlyCalculated: DevKit.Form.Controls.ControlDate;
			devkit_UserLocalDateOnlyRollup: DevKit.Form.Controls.ControlDate;
			/** Last Updated time of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_WholeNumberDuration: DevKit.Form.Controls.ControlInteger;
			devkit_WholeNumberLanguage: DevKit.Form.Controls.ControlInteger;
			devkit_WholeNumberNone: DevKit.Form.Controls.ControlInteger;
			devkit_WholeNumberTimeZone: DevKit.Form.Controls.ControlInteger;
			devkit_YesAndNo: DevKit.Form.Controls.ControlBoolean;
			devkit_YesAndNoCalculated: DevKit.Form.Controls.ControlBoolean;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Form.Controls.ControlDecimal;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the WebApi */
			statecode: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the WebApi */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_WEBAPI_Sections {
			WEBAPI_section_1: DevKit.Form.Controls.ControlSection;
			WEBAPI_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_NOTE_Sections {
			NOTE_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TIMER_Sections {
			TIMER_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_OTHERS_Sections {
			OTHERS_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_QUICKVIEW_Sections {
			QUICKVIEW_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUBGRID_Sections {
			SUBGRID_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_OPTIONSET_Sections {
			OPTIONSET_section_1: DevKit.Form.Controls.ControlSection;
			OPTIONSET_section_3: DevKit.Form.Controls.ControlSection;
			OPTIONSET_section_5: DevKit.Form.Controls.ControlSection;
			OPTIONSET_section_2: DevKit.Form.Controls.ControlSection;
			OPTIONSET_section_4: DevKit.Form.Controls.ControlSection;
			OPTIONSET_section_6: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DATETIME_Sections {
			DATETIME_section_1: DevKit.Form.Controls.ControlSection;
			DATETIME_section_3: DevKit.Form.Controls.ControlSection;
			DATETIME_section_5: DevKit.Form.Controls.ControlSection;
			DATETIME_section_7: DevKit.Form.Controls.ControlSection;
			DATETIME_section_2: DevKit.Form.Controls.ControlSection;
			DATETIME_section_4: DevKit.Form.Controls.ControlSection;
			DATETIME_section_6: DevKit.Form.Controls.ControlSection;
		}
		interface tab_NUMBER_Sections {
			NUMBER_section_1: DevKit.Form.Controls.ControlSection;
			NUMBER_section_4: DevKit.Form.Controls.ControlSection;
			NUMBER_section_2: DevKit.Form.Controls.ControlSection;
			NUMBER_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_STRING_Sections {
			STRING_section_1: DevKit.Form.Controls.ControlSection;
			STRING_section_3: DevKit.Form.Controls.ControlSection;
			STRING_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ADMINISTRATOR_Sections {
			ADMINISTRATOR_section_1: DevKit.Form.Controls.ControlSection;
			ADMINISTRATOR_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_WEBAPI extends DevKit.Form.Controls.IControlTab {
			Section: tab_WEBAPI_Sections;
		}
		interface tab_NOTE extends DevKit.Form.Controls.IControlTab {
			Section: tab_NOTE_Sections;
		}
		interface tab_TIMER extends DevKit.Form.Controls.IControlTab {
			Section: tab_TIMER_Sections;
		}
		interface tab_OTHERS extends DevKit.Form.Controls.IControlTab {
			Section: tab_OTHERS_Sections;
		}
		interface tab_QUICKVIEW extends DevKit.Form.Controls.IControlTab {
			Section: tab_QUICKVIEW_Sections;
		}
		interface tab_SUBGRID extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUBGRID_Sections;
		}
		interface tab_OPTIONSET extends DevKit.Form.Controls.IControlTab {
			Section: tab_OPTIONSET_Sections;
		}
		interface tab_DATETIME extends DevKit.Form.Controls.IControlTab {
			Section: tab_DATETIME_Sections;
		}
		interface tab_NUMBER extends DevKit.Form.Controls.IControlTab {
			Section: tab_NUMBER_Sections;
		}
		interface tab_STRING extends DevKit.Form.Controls.IControlTab {
			Section: tab_STRING_Sections;
		}
		interface tab_ADMINISTRATOR extends DevKit.Form.Controls.IControlTab {
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
			abc_All: DevKit.Form.Controls.ControlString;
			abc_All_1: DevKit.Form.Controls.ControlString;
			abc_Boolean: DevKit.Form.Controls.ControlBoolean;
			abc_Lookup: DevKit.Form.Controls.ControlLookup;
			abc_OptionSetCode: DevKit.Form.Controls.ControlOptionSet;
			abc_FloatingPointNumber: DevKit.Form.Controls.ControlDouble;
			abc_IFramed: DevKit.Form.Controls.ControlIFrame;
			abc_KbSearch: DevKit.Form.Controls.ControlKnowledge;
		}
		interface Footer {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Form.Controls.ControlLookup;
			devkit_AlternateKey: DevKit.Form.Controls.ControlString;
			devkit_Currency: DevKit.Form.Controls.ControlMoney;
			/** Value of the Currency in base currency. */
			devkit_currency_Base: DevKit.Form.Controls.ControlMoney;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			devkit_DateOnlyDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_DateOnlyDateOnlyCalculated: DevKit.Form.Controls.ControlDate;
			devkit_DateOnlyDateOnlyRollup: DevKit.Form.Controls.ControlDate;
			/** Last Updated time of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field Date Only Date Only Rollup. */
			devkit_DateOnlyDateOnlyRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_DecimalNumber: DevKit.Form.Controls.ControlDecimal;
			devkit_FloatingPointNumber: DevKit.Form.Controls.ControlDouble;
			devkit_LinkWebApiId: DevKit.Form.Controls.ControlLookup;
			devkit_MultipleLiniesofText: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Form.Controls.ControlString;
			devkit_ParentWebApiId: DevKit.Form.Controls.ControlLookup;
			devkit_SingleLineofTextEmail: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextPhone: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextText: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextTextArea: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextTickerSymbol: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextUrl: DevKit.Form.Controls.ControlString;
			devkit_SingleOptionSetCode: DevKit.Form.Controls.ControlOptionSet;
			devkit_SingleOptionSetCodeCalculated: DevKit.Form.Controls.ControlOptionSet;
			devkit_TimeZoneDateAndTime: DevKit.Form.Controls.ControlDateTime;
			devkit_TimeZoneDateAndTimeCalculated: DevKit.Form.Controls.ControlDateTime;
			devkit_TimeZoneDateAndTimeRollup: DevKit.Form.Controls.ControlDateTime;
			/** Last Updated time of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field TimeZone Date And Time Rollup. */
			devkit_TimeZoneDateAndTimeRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_TimeZoneDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_TimeZoneDateOnlyCalculated: DevKit.Form.Controls.ControlDate;
			devkit_TimeZoneDateOnlyRollup: DevKit.Form.Controls.ControlDate;
			/** Last Updated time of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field TimeZone Date Only Rollup. */
			devkit_TimeZoneDateOnlyRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_UserLocalDateAndTime: DevKit.Form.Controls.ControlDateTime;
			devkit_UserLocalDateAndTimeCalculated: DevKit.Form.Controls.ControlDateTime;
			devkit_UserLocalDateAndTimeRollup: DevKit.Form.Controls.ControlDateTime;
			/** Last Updated time of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field User Local Date And Time Rollup. */
			devkit_UserLocalDateAndTimeRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_UserLocalDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_UserLocalDateOnlyCalculated: DevKit.Form.Controls.ControlDate;
			devkit_UserLocalDateOnlyRollup: DevKit.Form.Controls.ControlDate;
			/** Last Updated time of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_Date: DevKit.Form.Controls.ControlDateTime;
			/** State of rollup field User Local Date Only Rollup. */
			devkit_UserLocalDateOnlyRollup_State: DevKit.Form.Controls.ControlInteger;
			devkit_WholeNumberDuration: DevKit.Form.Controls.ControlInteger;
			devkit_WholeNumberLanguage: DevKit.Form.Controls.ControlInteger;
			devkit_WholeNumberNone: DevKit.Form.Controls.ControlInteger;
			devkit_WholeNumberTimeZone: DevKit.Form.Controls.ControlInteger;
			devkit_YesAndNo: DevKit.Form.Controls.ControlBoolean;
			devkit_YesAndNoCalculated: DevKit.Form.Controls.ControlBoolean;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Form.Controls.ControlDecimal;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the WebApi */
			statecode: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the WebApi */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_devkit_devkit_webapi_devkit_webapi_ParentWebApiId: DevKit.Form.Controls.ControlNavigationItem,
			nav_devkit_devkit_webapi_devkit_webapi_LinkWebApiId: DevKit.Form.Controls.ControlNavigationItem,
			nav_bpf_devkit_webapi_devkit_processwebapi1: DevKit.Form.Controls.ControlNavigationItem,
			nav_devkit_devkit_webapi_contact: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessProcess_WebApi_1 {
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			devkit_DecimalNumber: DevKit.Form.Controls.ControlDecimal;
			devkit_FloatingPointNumber: DevKit.Form.Controls.ControlDouble;
			devkit_MultipleLiniesofText: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextText: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextText_1: DevKit.Form.Controls.ControlString;
			devkit_SingleOptionSetCode: DevKit.Form.Controls.ControlOptionSet;
			devkit_UserLocalDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_WholeNumberNone: DevKit.Form.Controls.ControlInteger;
			devkit_YesAndNo: DevKit.Form.Controls.ControlBoolean;
			devkit_YesAndNoCalculated: DevKit.Form.Controls.ControlBoolean;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Process_WebApi_1: ProcessProcess_WebApi_1;
		}
		interface QuickForm {
			QuickForm: DevKit.Form.Controls.ControlQuickView;
        }
	}
	class FormTest extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form WebApi
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form WebApi */
		Body: Tomato.FormTest.Body;
		/** The Footer section of form WebApi */
		Footer: Tomato.FormTest.Footer;
		/** The Header section of form WebApi */
		Header: Tomato.FormTest.Header;
		/** The Navigation of form WebApi */
		Navigation: Tomato.FormTest.Navigation;
		/** The Process of form WebApi */
		Process: Tomato.FormTest.Process;
		/** The QuickForm of Test */
		QuickForm: Tomato.FormTest.QuickForm;
	}
}
declare namespace OptionSet {
	namespace abc_Test {
		enum abc_OptionSetCode {
			/** 100000000 */
			Value_1,
			/** 100000001 */
			Value_2,
			/** 100000002 */
			Value_3,
			/** 100000003 */
			Value_4,
			/** 100000004 */
			Value_5,
			/** 100000005 */
			Value_6
		}
	}
}