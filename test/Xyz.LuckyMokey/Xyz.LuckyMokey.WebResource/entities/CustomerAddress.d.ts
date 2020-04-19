//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCustomerAddress_Information {
		interface tab_general_Sections {
			customer_address_information: DevKit.Form.Controls.ControlSection;
			phone_numbers: DevKit.Form.Controls.ControlSection;
			additional_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the address type, such as primary or billing. */
			AddressTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the city for the customer's address to help identify the location. */
			City: DevKit.Form.Controls.ControlString;
			/** Type the country or region for the customer's address. */
			Country: DevKit.Form.Controls.ControlString;
			/** Type the fax number associated with the customer's address. */
			Fax: DevKit.Form.Controls.ControlString;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the first line of the customer's address to help identify the location. */
			Line1: DevKit.Form.Controls.ControlString;
			/** Type the second line of the customer's address. */
			Line2: DevKit.Form.Controls.ControlString;
			/** Type the third line of the customer's address. */
			Line3: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name for the customer's address, such as Corporate Headquarters. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type the ZIP Code or postal code for the address. */
			PostalCode: DevKit.Form.Controls.ControlString;
			/** Type the name of the primary contact person for the customer's address. */
			PrimaryContactName: DevKit.Form.Controls.ControlString;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the state or province of the customer's address. */
			StateOrProvince: DevKit.Form.Controls.ControlString;
			/** Type the primary phone number for the customer's address. */
			Telephone1: DevKit.Form.Controls.ControlString;
			/** Type a second phone number for the customer's address. */
			Telephone2: DevKit.Form.Controls.ControlString;
		}
	}
	class FormCustomerAddress_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form CustomerAddress_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form CustomerAddress_Information */
		Body: LuckyMokey.FormCustomerAddress_Information.Body;
	}
}
declare namespace OptionSet {
	namespace CustomerAddress {
		enum AddressTypeCode {
			/** 1 */
			Bill_To,
			/** 2 */
			Ship_To,
			/** 3 */
			Primary,
			/** 4 */
			Other
		}
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum ShippingMethodCode {
			/** 1 */
			Airborne,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 4 */
			UPS,
			/** 5 */
			Postal_Mail,
			/** 6 */
			Full_Load,
			/** 7 */
			Will_Call
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