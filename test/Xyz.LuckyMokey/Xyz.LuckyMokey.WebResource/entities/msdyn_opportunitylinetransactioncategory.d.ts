//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_opportunitylinetransactioncategory_Information {
		interface tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D_Sections {
			_478BCC40_409E_4E61_B1EB_D2DCB2A7144D_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D extends DevKit.Form.Controls.IControlTab {
			Section: tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D_Sections;
		}
		interface Tabs {
			_478BCC40_409E_4E61_B1EB_D2DCB2A7144D: tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D;
		}
		interface Body {
			Tab: Tabs;
			/** Select where the transaction category's costs are charged to the customer. Valid values can Chargeable, Non-chargeable and Complimentary. Only chargeable transaction will add to the total of any invoice */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Transaction category for the opportunity line. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_opportunitylinetransactioncategory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_opportunitylinetransactioncategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_opportunitylinetransactioncategory_Information */
		Body: LuckyMokey.Formmsdyn_opportunitylinetransactioncategory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_opportunitylinetransactioncategory {
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