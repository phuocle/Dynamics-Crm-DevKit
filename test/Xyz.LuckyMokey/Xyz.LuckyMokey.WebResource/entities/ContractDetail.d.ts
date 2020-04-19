//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormContract_Detail {
		interface tab_general_Sections {
			contract_detail_information: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
			administration: DevKit.Form.Controls.ControlSection;
			notes: DevKit.Form.Controls.ControlSection;
			allotment_details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter the date when the contract line becomes active. */
			ActiveOn: DevKit.Form.Controls.ControlDate;
			/** Shows the number of cases or minutes remaining, based on the resolved cases logged to the contract line. */
			AllotmentsRemaining: DevKit.Form.Controls.ControlInteger;
			/** Shows the number of cases or minutes used in the resolved cases on the contract line. */
			AllotmentsUsed: DevKit.Form.Controls.ControlInteger;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type the discount amount for the contract line to deduct any negotiated or other savings from the net amount due. */
			Discount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Total Price, for use in calculating the net amount due for the contract line. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Enter the date when the contract line expires. The date is automatically filled with the contract date, but you can change it if required. */
			ExpiresOn: DevKit.Form.Controls.ControlDate;
			/** Type the number of units of the specified product or service that are eligible for support on the contract line. */
			InitialQuantity: DevKit.Form.Controls.ControlInteger;
			/** Shows the total charge to the customer for the contract line, calculated as the Total Price minus any discounts. */
			Net: DevKit.Form.Controls.ControlMoney;
			/** Type the total service charge for the contract line before any discounts are credited. */
			Price: DevKit.Form.Controls.ControlMoney;
			/** Choose the product that is eligible for services on the contract line. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the serial number for the product that is eligible for services on the contract line. */
			ProductSerialNumber: DevKit.Form.Controls.ControlString;
			/** Shows the cost per case or minute, calculated by dividing the Total Price value by the total number of cases or minutes allocated to the contract line. */
			Rate: DevKit.Form.Controls.ControlMoney;
			/** Choose the address for the customer account or contact where the services are provided. */
			ServiceAddress: DevKit.Form.Controls.ControlLookup;
			/** Type a title or name that describes the contract line. */
			Title: DevKit.Form.Controls.ControlString;
			/** Type the total number of minutes or cases allowed for the contract line. */
			TotalAllotments: DevKit.Form.Controls.ControlInteger;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormContract_Detail extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Contract_Detail
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Contract_Detail */
		Body: LuckyMokey.FormContract_Detail.Body;
	}
	namespace FormContractDetail_Information {
		interface tab_general_Sections {
			contract_detail_information: DevKit.Form.Controls.ControlSection;
			allotment_details: DevKit.Form.Controls.ControlSection;
			pricing: DevKit.Form.Controls.ControlSection;
		}
		interface tab_administration_Sections {
			customer_information: DevKit.Form.Controls.ControlSection;
			serial_number: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_administration extends DevKit.Form.Controls.IControlTab {
			Section: tab_administration_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			general: tab_general;
			administration: tab_administration;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter the date when the contract line becomes active. */
			ActiveOn: DevKit.Form.Controls.ControlDate;
			/** Shows the number of cases or minutes remaining, based on the resolved cases logged to the contract line. */
			AllotmentsRemaining: DevKit.Form.Controls.ControlInteger;
			/** Shows the number of cases or minutes used in the resolved cases on the contract line. */
			AllotmentsUsed: DevKit.Form.Controls.ControlInteger;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type the discount amount for the contract line to deduct any negotiated or other savings from the net amount due. */
			Discount: DevKit.Form.Controls.ControlMoney;
			/** Type the discount rate that should be applied to the Total Price, for use in calculating the net amount due for the contract line. */
			DiscountPercentage: DevKit.Form.Controls.ControlDecimal;
			/** Enter the date when the contract line expires. The date is automatically filled with the contract date, but you can change it if required. */
			ExpiresOn: DevKit.Form.Controls.ControlDate;
			/** Type the number of units of the specified product or service that are eligible for support on the contract line. */
			InitialQuantity: DevKit.Form.Controls.ControlInteger;
			/** Shows the total charge to the customer for the contract line, calculated as the Total Price minus any discounts. */
			Net: DevKit.Form.Controls.ControlMoney;
			/** Type the total service charge for the contract line before any discounts are credited. */
			Price: DevKit.Form.Controls.ControlMoney;
			/** Choose the product that is eligible for services on the contract line. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the serial number for the product that is eligible for services on the contract line. */
			ProductSerialNumber: DevKit.Form.Controls.ControlString;
			/** Shows the cost per case or minute, calculated by dividing the Total Price value by the total number of cases or minutes allocated to the contract line. */
			Rate: DevKit.Form.Controls.ControlMoney;
			/** Choose the address for the customer account or contact where the services are provided. */
			ServiceAddress: DevKit.Form.Controls.ControlLookup;
			/** Type a title or name that describes the contract line. */
			Title: DevKit.Form.Controls.ControlString;
			/** Type the total number of minutes or cases allowed for the contract line. */
			TotalAllotments: DevKit.Form.Controls.ControlInteger;
			/** Choose the unit of measurement for the base unit quantity for this purchase, such as each or dozen. */
			UoMId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormContractDetail_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ContractDetail_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ContractDetail_Information */
		Body: LuckyMokey.FormContractDetail_Information.Body;
	}
}
declare namespace OptionSet {
	namespace ContractDetail {
		enum ContractStateCode {
		}
		enum ServiceContractUnitsCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Existing,
			/** 1 */
			Renewed,
			/** 2 */
			Canceled,
			/** 3 */
			Expired
		}
		enum StatusCode {
			/** 1 */
			New,
			/** 2 */
			Renewed,
			/** 3 */
			Canceled,
			/** 4 */
			Expired
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
//{'JsForm':['Contract Detail','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}