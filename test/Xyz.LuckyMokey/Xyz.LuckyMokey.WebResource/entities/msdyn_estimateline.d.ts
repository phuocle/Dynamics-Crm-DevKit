//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_estimateline_Information {
		interface tab__D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9_Sections {
			DateGroup: DevKit.Form.Controls.ControlSection;
			PartyGroup: DevKit.Form.Controls.ControlSection;
			ActivityGroup: DevKit.Form.Controls.ControlSection;
			ProductResourceGroup: DevKit.Form.Controls.ControlSection;
			QuantityGroup: DevKit.Form.Controls.ControlSection;
			AmountGroup: DevKit.Form.Controls.ControlSection;
			BillingGroup: DevKit.Form.Controls.ControlSection;
		}
		interface tab__D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9 extends DevKit.Form.Controls.IControlTab {
			Section: tab__D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9_Sections;
		}
		interface Tabs {
			_D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9: tab__D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the customer for the estimate line. */
			msdyn_AccountCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_AccountVendor: DevKit.Form.Controls.ControlLookup;
			/** Shows the amount on the estimate line. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Shows the calculation method used to determine the amount on the estimate line.  */
			msdyn_AmountMethod: DevKit.Form.Controls.ControlOptionSet;
			msdyn_BasisAmount: DevKit.Form.Controls.ControlMoney;
			msdyn_BasisQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Shows whether this estimate line is charged to the customer.  */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the bookable resource for which estimates are generated. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			/** Shows the name of the customer contact. */
			msdyn_ContactCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_ContactVendor: DevKit.Form.Controls.ControlLookup;
			/** Select the type of customer. */
			msdyn_CustomerType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows the transaction date of the estimate line. */
			msdyn_DocumentDate: DevKit.Form.Controls.ControlDate;
			/** Enter the end date and time. */
			msdyn_EndDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the percent for the estimate line. */
			msdyn_Percent: DevKit.Form.Controls.ControlDecimal;
			/** Shows the price for this estimate line. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Shows the price list used in this estimate line. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Select the product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Shows the project for this estimate line. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the estimated quantity of work, cost, and sales. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Shows the role of this resource on the estimate line. */
			msdyn_ResourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Shows the start date and time for the task for this estimate line. */
			msdyn_StartDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the task related to this estimate line. */
			msdyn_Task: DevKit.Form.Controls.ControlLookup;
			/** Select the type of transaction. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Shows the transaction classification for this estimate line. */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the transaction type for this estimate line. */
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the unit of measurement for this estimate line. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			msdyn_VendorType: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_estimateline_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_estimateline_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_estimateline_Information */
		Body: LuckyMokey.Formmsdyn_estimateline_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_estimateline {
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