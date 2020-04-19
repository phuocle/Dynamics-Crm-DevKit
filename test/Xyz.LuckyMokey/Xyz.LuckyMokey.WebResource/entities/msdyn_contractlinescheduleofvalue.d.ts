//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_contractlinescheduleofvalue_Project_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_GeneralTab_Sections {
			GeneralSection: DevKit.Form.Controls.ControlSection;
			InvoiceSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_GeneralTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the value of the milestone. */
			msdyn_amount: DevKit.Form.Controls.ControlMoney;
			msdyn_amount_after_tax: DevKit.Form.Controls.ControlMoney;
			/** Select the project contract associated with this milestone. */
			msdyn_contract: DevKit.Form.Controls.ControlLookup;
			/** Enter a description of the project contract line that has this milestone. */
			msdyn_ContractLineDescription: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Project Contract Line associated with Project Contract Line Invoice Schedule. */
			msdyn_ContractLineId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date of which this milestone should be achieved */
			msdyn_Invoicedate: DevKit.Form.Controls.ControlDate;
			/** Select the status of invoicing of this milestone */
			msdyn_Invoicestatus: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the milestone. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Select the project work breakdown structure (WBS) task that is tracking the work for this milestone. */
			msdyn_projecttask: DevKit.Form.Controls.ControlLookup;
			msdyn_tax: DevKit.Form.Controls.ControlMoney;
		}
	}
	class Formmsdyn_contractlinescheduleofvalue_Project_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_contractlinescheduleofvalue_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_contractlinescheduleofvalue_Project_Information */
		Body: LuckyMokey.Formmsdyn_contractlinescheduleofvalue_Project_Information.Body;
		/** The Header section of form msdyn_contractlinescheduleofvalue_Project_Information */
		Header: LuckyMokey.Formmsdyn_contractlinescheduleofvalue_Project_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_contractlinescheduleofvalue {
		enum msdyn_Invoicestatus {
			/** 192350000 */
			Not_Ready_for_invoicing,
			/** 192350001 */
			Ready_for_invoicing,
			/** 192350002 */
			Customer_invoice_created,
			/** 192350003 */
			Customer_invoice_posted
		}
		enum msdyn_TransactionClassification {
			/** 690970000 */
			Commission,
			/** 690970001 */
			Additional,
			/** 690970002 */
			Tax,
			/** 192350000 */
			Time,
			/** 192350001 */
			Expense,
			/** 192350002 */
			Material,
			/** 192350003 */
			Milestone,
			/** 192350004 */
			Fee
		}
		enum msdyn_TransactionTypeCode {
			/** 192350000 */
			Cost,
			/** 192350004 */
			Project_Contract,
			/** 192350005 */
			Unbilled_Sales,
			/** 192350006 */
			Billed_Sales,
			/** 192350007 */
			Resourcing_Unit_Cost,
			/** 192350008 */
			Inter_Organizational_Sales
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
//{'JsForm':['Project Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}