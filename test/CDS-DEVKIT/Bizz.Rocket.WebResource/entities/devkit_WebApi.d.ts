///<reference path='devkit.d.ts' />
declare namespace Rocket {
    namespace FormWebApi {
		interface Header {
			IFRAME_google: DevKit.Form.Controls.ControlIFrame;
			WebResource_HelloWorld: DevKit.Form.Controls.ControlWebResource;
			devkit_Currency: DevKit.Form.Controls.ControlMoney;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			devkit_DateOnlyDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_DecimalNumber: DevKit.Form.Controls.ControlDecimal;
			devkit_FloatingPointNumber: DevKit.Form.Controls.ControlDouble;
			devkit_MultipleLiniesofText: DevKit.Form.Controls.ControlString;
			devkit_SingleLineofTextText: DevKit.Form.Controls.ControlString;
			devkit_SingleOptionSetCode: DevKit.Form.Controls.ControlOptionSet;
			devkit_TimeZoneDateAndTime: DevKit.Form.Controls.ControlDateTime;
			devkit_TimeZoneDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_UserLocalDateAndTime: DevKit.Form.Controls.ControlDateTime;
			devkit_UserLocalDateOnly: DevKit.Form.Controls.ControlDate;
			devkit_WholeNumberNone: DevKit.Form.Controls.ControlInteger;
			devkit_YesAndNo: DevKit.Form.Controls.ControlBoolean;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the WebApi */
			statecode: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the WebApi */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
        }
        //---------------------------------------------------------------------------------------
        interface tab_Summary extends DevKit.Form.Controls.IControlTab {
            Section: tab_Summary_Sections;
        }
        interface tab_ADMINISTRATOR extends DevKit.Form.Controls.IControlTab {

        }
        interface tab_Summary_Sections {
            Account: DevKit.Form.Controls.ControlSection;
            AccountDetail: DevKit.Form.Controls.ControlSection;
        }
        interface Tabs {
            Summary: tab_Summary;
            ADMINISTRATOR: tab_ADMINISTRATOR;
        }
        interface Body {
            Tab: Tabs;
        }
        //---------------------------------------------------------------------------------------
		interface Footer {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
		}
		interface Navigation {
			nav_devkit_devkit_webapi_devkit_webapi_ParentWebApiId: DevKit.Form.Controls.ControlNavigationItem,
			nav_devkit_devkit_webapi_devkit_webapi_LinkWebApiId: DevKit.Form.Controls.ControlNavigationItem
		}
		interface QuickForm {
		}
		interface Composite {
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
        /** The Composite of form WebApi */
        Composite: Rocket.FormWebApi.Composite;
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
		/** Status of the WebApi */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the WebApi */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
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