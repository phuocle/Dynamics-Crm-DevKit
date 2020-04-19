//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSite_Information {
		interface tab_General_Sections {
			section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_address_Sections {
			primary_address: DevKit.Form.Controls.ControlSection;
			time_zone: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface tab_address extends DevKit.Form.Controls.IControlTab {
			Section: tab_address_Sections;
		}
		interface Tabs {
			General: tab_General;
			address: tab_address;
		}
		interface Body {
			Tab: Tabs;
			/** City name for address 1. */
			Address1_City: DevKit.Form.Controls.ControlString;
			/** Country/region name for address 1. */
			Address1_Country: DevKit.Form.Controls.ControlString;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Form.Controls.ControlString;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Form.Controls.ControlString;
			/** Second line for entering address 1 information. */
			Address1_Line2: DevKit.Form.Controls.ControlString;
			/** Third line for entering address 1 information. */
			Address1_Line3: DevKit.Form.Controls.ControlString;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Form.Controls.ControlString;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Form.Controls.ControlString;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Form.Controls.ControlString;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Form.Controls.ControlString;
			/** Email address for the site. */
			EMailAddress: DevKit.Form.Controls.ControlString;
			/** Name of the site. */
			Name: DevKit.Form.Controls.ControlString;
			/** Local time zone for the site. */
			TimeZoneCode: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormSite_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Site_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Site_Information */
		Body: LuckyMokey.FormSite_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Site {
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}