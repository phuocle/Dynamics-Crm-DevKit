//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace Tomato {
	namespace FormTest {
		interface Header {
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
		interface tab_Tab2_Sections {
			Tab2Section1: DevKit.Controls.Section;
			Tab2Section2: DevKit.Controls.Section;
		}
		interface tab_Tab1_Sections {
			Tab1Section1: DevKit.Controls.Section;
			Tab1Section2: DevKit.Controls.Section;
		}
		interface tab_Tab1 extends DevKit.Controls.Tab {
			Section: tab_Tab1_Sections;
		}
		interface tab_Tab2 extends DevKit.Controls.Tab {
			Section: tab_Tab2_Sections;
		}
		interface Tabs {
			Tab1: tab_Tab1;
			Tab2: tab_Tab2;
		}
		interface Body {
			Tab: Tabs;
			abc_All: DevKit.Controls.String;
			abc_All_1: DevKit.Controls.String;
			abc_Boolean: DevKit.Controls.Boolean;
			abc_Lookup: DevKit.Controls.Lookup;
			abc_OptionSetCode: DevKit.Controls.OptionSet;
			abc_FloatingPointNumber: DevKit.Controls.Double;
			abc_IFramed: DevKit.Controls.IFrame;
			abc_KbSearch: DevKit.Controls.Knowledge;
			abc_TimelineWall: DevKit.Controls.TimelineWall;
			abc_Timer: DevKit.Controls.Timer;
		}
		interface Footer {
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
			nav01: DevKit.Controls.NavigationItem,
			nav02: DevKit.Controls.NavigationItem,
		}
		interface ProcessProcess_1 {
			abc_All: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.Process {
			Process_1: ProcessProcess_1;
		}
		interface QuickForm {
			QuickForm: DevKit.Controls.QuickView;
		}
		interface Grid {
			Contacts: DevKit.Controls.Grid;
        }
	}
	class FormTest extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form WebApi
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
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
		/** The Grids of Text*/
		Grid: Tomato.FormTest.Grid;
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