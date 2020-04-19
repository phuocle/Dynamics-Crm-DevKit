//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_quotebookingproduct_Information {
		interface tab__79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_Sections {
			_CC746554_B3E2_4B34_89C7_121A8D992983: DevKit.Form.Controls.ControlSection;
			_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_SECTION_3: DevKit.Form.Controls.ControlSection;
			_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_COLUMN_3_SECTION_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3 extends DevKit.Form.Controls.IControlTab {
			Section: tab__79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_Sections;
		}
		interface Tabs {
			_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3: tab__79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3;
		}
		interface Body {
			Tab: Tabs;
			/** The estimated cost of this quote booking product */
			msdyn_EstimatedCost: DevKit.Form.Controls.ControlMoney;
			/** The estimated sales amount of this quote booking product */
			msdyn_EstimatedSalesAmount: DevKit.Form.Controls.ControlMoney;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Product/Service associated with Quote Booking Product. */
			msdyn_product: DevKit.Form.Controls.ControlLookup;
			/** Shows the actual quantity of the product. */
			msdyn_quantity: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier for Quote Booking Setup associated with Quote  Booking Product. */
			msdyn_quotebookingsetup: DevKit.Form.Controls.ControlLookup;
			/** The unit that determines the pricing for this product when Price List is set */
			msdyn_unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_unitamount: DevKit.Form.Controls.ControlMoney;
			/** Enter the  unit cost amount. This field is optional. */
			msdyn_unitcostamount: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quotebookingproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotebookingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quotebookingproduct_Information */
		Body: LuckyMokey.Formmsdyn_quotebookingproduct_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotebookingproduct {
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