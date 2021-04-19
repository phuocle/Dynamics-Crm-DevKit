//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_quotebookingservice_Information {
		interface tab__66B308CF_F821_44E8_997A_88593F18144F_Sections {
			_8F706D5B_6CB5_4A94_A35A_8AADCF2D33F4: DevKit.Controls.Section;
			_66B308CF_F821_44E8_997A_88593F18144F_SECTION_3: DevKit.Controls.Section;
			_66B308CF_F821_44E8_997A_88593F18144F_COLUMN_3_SECTION_1: DevKit.Controls.Section;
		}
		interface tab__66B308CF_F821_44E8_997A_88593F18144F extends DevKit.Controls.ITab {
			Section: tab__66B308CF_F821_44E8_997A_88593F18144F_Sections;
		}
		interface Tabs {
			_66B308CF_F821_44E8_997A_88593F18144F: tab__66B308CF_F821_44E8_997A_88593F18144F;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the actual duration of service. */
			msdyn_duration: DevKit.Controls.Integer;
			/** Shows the total cost amount of the service. It is calculated as (Unit Cost) * Duration */
			msdyn_EstimatedCostAmount: DevKit.Controls.Money;
			/** Shows the total sales amount of the service. */
			msdyn_EstimatedSalesAmount: DevKit.Controls.Money;
			/** Enter the amount charged as a minimum charge. */
			msdyn_minimumchargeamount: DevKit.Controls.Money;
			/** Enter the duration of up to how long the minimum charge applies. */
			msdyn_minimumchargeduration: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Quote Booking Setup associated with Quote Booking Service. */
			msdyn_quotebookingsetup: DevKit.Controls.Lookup;
			/** Unique identifier for Product/Service associated with Quote Booking Service. */
			msdyn_Service: DevKit.Controls.Lookup;
			/** The unit that determines the pricing for this service when Price List is set */
			msdyn_unit: DevKit.Controls.Lookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_unitamount: DevKit.Controls.Money;
			/** Shows the estimated cost amount per unit. */
			msdyn_unitcostamount: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_quotebookingservice_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotebookingservice_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotebookingservice_Information */
		Body: MyDog.Formmsdyn_quotebookingservice_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotebookingservice {
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}