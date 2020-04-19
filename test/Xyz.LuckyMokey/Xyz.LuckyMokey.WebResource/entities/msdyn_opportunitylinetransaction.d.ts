//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_opportunitylinetransaction_Information {
		interface tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355_Sections {
			GeneralSection: DevKit.Form.Controls.ControlSection;
			DateSection: DevKit.Form.Controls.ControlSection;
			VendorSection: DevKit.Form.Controls.ControlSection;
			ProjectSection: DevKit.Form.Controls.ControlSection;
			ProductResourceSection: DevKit.Form.Controls.ControlSection;
			QuantitySection: DevKit.Form.Controls.ControlSection;
			AmountSection: DevKit.Form.Controls.ControlSection;
			BillingSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355 extends DevKit.Form.Controls.IControlTab {
			Section: tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355_Sections;
		}
		interface Tabs {
			_AA1FBBFA_293F_4830_A2D4_D1CB676EB355: tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355;
		}
		interface Body {
			Tab: Tabs;
			/** Select the name of the customer to which this opportunity belongs. */
			msdyn_AccountCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_AccountVendor: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount on the estimate line. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Select the calculation method used to determine the amount on the estimate line.  */
			msdyn_AmountMethod: DevKit.Form.Controls.ControlOptionSet;
			msdyn_BasisAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the quantity used as basis for calculating quantity on this estimate line. */
			msdyn_BasisQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Select whether this estimate line would be charged to the customer or not. Only chargeable transactions will add to the invoice total when an invoices are created */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			/** Select the customer contact of this opportunity. */
			msdyn_ContactCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_ContactVendor: DevKit.Form.Controls.ControlLookup;
			/** Select whether the customer identified on the opportunity was an account or a contact */
			msdyn_CustomerType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a description of the opportunity line estimate. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Enter the document date. The document date is only relevant for actuals and invoiced transactions; does not apply to opportunity line estimates. */
			msdyn_DocumentDate: DevKit.Form.Controls.ControlDate;
			/** Enter the end time of the opportunity line estimate. */
			msdyn_EndDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Relevant when amount calculation method on the opportunity line transactions is "Multiply basis amount by percent" */
			msdyn_Percent: DevKit.Form.Controls.ControlDecimal;
			/** Enter the price on the estimate line. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Select the price list used on the opportunity line estimate. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Select the product on the estimate line. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Select the name of the Project that this estimate line is for. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity of the opportunity estimate line. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the role that is estimated to perform the work. */
			msdyn_ResourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date of the opportunity line estimate. */
			msdyn_StartDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the name of the project task for which this estimate line was created. */
			msdyn_Task: DevKit.Form.Controls.ControlLookup;
			/** Select the category of the transaction. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Transaction classification of the Opportunity line transaction */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** Transaction type for the opportunity line. */
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the unit of the estimate quantity. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			msdyn_VendorType: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_opportunitylinetransaction_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_opportunitylinetransaction_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_opportunitylinetransaction_Information */
		Body: LuckyMokey.Formmsdyn_opportunitylinetransaction_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_opportunitylinetransaction {
		enum msdyn_AmountMethod {
			/** 690970000 */
			Tax_Calculation,
			/** 192350000 */
			Multiply_Quantity_By_Price,
			/** 192350001 */
			Fixed_Price,
			/** 192350002 */
			Multiply_Basis_Quantity_By_Price,
			/** 192350003 */
			Multiply_Basis_Amount_By_Percent
		}
		enum msdyn_BillingType {
			/** 192350000 */
			Non_Chargeable,
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350003 */
			Not_Available
		}
		enum msdyn_CustomerType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
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
		enum msdyn_VendorType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}