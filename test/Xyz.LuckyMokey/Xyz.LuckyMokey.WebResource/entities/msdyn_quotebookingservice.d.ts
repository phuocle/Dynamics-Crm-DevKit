//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_quotebookingservice_Information {
		interface tab__66B308CF_F821_44E8_997A_88593F18144F_Sections {
			_8F706D5B_6CB5_4A94_A35A_8AADCF2D33F4: DevKit.Form.Controls.ControlSection;
			_66B308CF_F821_44E8_997A_88593F18144F_SECTION_3: DevKit.Form.Controls.ControlSection;
			_66B308CF_F821_44E8_997A_88593F18144F_COLUMN_3_SECTION_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__66B308CF_F821_44E8_997A_88593F18144F extends DevKit.Form.Controls.IControlTab {
			Section: tab__66B308CF_F821_44E8_997A_88593F18144F_Sections;
		}
		interface Tabs {
			_66B308CF_F821_44E8_997A_88593F18144F: tab__66B308CF_F821_44E8_997A_88593F18144F;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the actual duration of service. */
			msdyn_duration: DevKit.Form.Controls.ControlInteger;
			/** Shows the total cost amount of the service. It is calculated as (Unit Cost) * Duration */
			msdyn_EstimatedCostAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows the total sales amount of the service. */
			msdyn_EstimatedSalesAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the amount charged as a minimum charge. */
			msdyn_minimumchargeamount: DevKit.Form.Controls.ControlMoney;
			/** Enter the duration of up to how long the minimum charge applies. */
			msdyn_minimumchargeduration: DevKit.Form.Controls.ControlInteger;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Quote Booking Setup associated with Quote Booking Service. */
			msdyn_quotebookingsetup: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Product/Service associated with Quote Booking Service. */
			msdyn_Service: DevKit.Form.Controls.ControlLookup;
			/** The unit that determines the pricing for this service when Price List is set */
			msdyn_unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_unitamount: DevKit.Form.Controls.ControlMoney;
			/** Shows the estimated cost amount per unit. */
			msdyn_unitcostamount: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quotebookingservice_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotebookingservice_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quotebookingservice_Information */
		Body: LuckyMokey.Formmsdyn_quotebookingservice_Information.Body;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}