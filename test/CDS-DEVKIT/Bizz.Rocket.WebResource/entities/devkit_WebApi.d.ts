///<reference path='devkit.d.ts' />
declare namespace Rocket {
	namespace FormWebApi {
		interface Header {
			IFRAME_google: DevKit.Form.Controls.ControlIFrame;
			WebResource_HelloWorld: DevKit.Form.Controls.ControlWebResource;
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
			WebResource_WORDHELLO: DevKit.Form.Controls.ControlWebResource;
			IFRAME_GoogleGoogle: DevKit.Form.Controls.ControlIFrame;
			IFRAME_ACIWIDGET: DevKit.Form.Controls.ControlIFrame;
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
			devkit_LinkWebApiId_1: DevKit.Form.Controls.ControlLookup;
			devkit_MultiOptionSetCode: DevKit.Form.Controls.ControlMultiOptionSet;
			devkit_MultipleLiniesofText: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Form.Controls.ControlString;
			devkit_ParentWebApiId: DevKit.Form.Controls.ControlLookup;
			devkit_ParentWebApiId_1: DevKit.Form.Controls.ControlLookup;
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
		interface QuickForm {
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
		}
	}
    class FormWebApi extends DevKit.Form.IForm {
        /**
         * PL.DynamicsCrm.DevKit form WebApi
         * @param executionContext the execution context.
         * @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource".
         */
        constructor(executionContext: any, defaultWebResourceName?: string);
        /** Utility functions/methods/objects for Dynamics 365 form */
        Utility: DevKit.Form.Utility;
        /** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
        WebApi: DevKit.Form.WebApi;
        /** The Body section of form WebApi */
        Body: Rocket.FormWebApi.Body;
        /** The Footer section of form WebApi */
        Footer: Rocket.FormWebApi.Footer;
        /** The Header section of form WebApi */
        Header: Rocket.FormWebApi.Header;
        /** The Navigation of form WebApi */
        Navigation: Rocket.FormWebApi.Navigation;
        /** The QuickForm of form WebApi */
        QuickForm: Rocket.FormWebApi.QuickForm;
        ///** The Composite of form WebApi */
        //Composite: Rocket.FormWebApi.Composite;
        /** The Process of form WebApi */
        Process: Rocket.FormWebApi.Process;
    }
	class devkit_WebApiApi {
		/**
		* PL.DynamicsCrm.DevKit devkit_WebApiApi
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
			/** 100000000 */
			Crm_4,
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
			/** 100000005 */
			Dynamics_365
		}
		enum devkit_SingleOptionSetCode {
			/** 100000000 */
			Crm_4,
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
			/** 100000005 */
			Dynamics_365
		}
		enum devkit_SingleOptionSetCodeCalculated {
			/** 100000000 */
			Crm_4,
			/** 100000001 */
			Crm_2011,
			/** 100000002 */
			Crm_2013,
			/** 100000003 */
			Crm_2015,
			/** 100000004 */
			Crm_2016,
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
	}
}
//{'JsForm':['WebApi'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}