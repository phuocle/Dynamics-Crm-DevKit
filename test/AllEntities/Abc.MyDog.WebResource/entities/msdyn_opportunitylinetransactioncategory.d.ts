//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_opportunitylinetransactioncategory_Information {
		interface tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D_Sections {
			_478BCC40_409E_4E61_B1EB_D2DCB2A7144D_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D extends DevKit.Controls.ITab {
			Section: tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D_Sections;
		}
		interface Tabs {
			_478BCC40_409E_4E61_B1EB_D2DCB2A7144D: tab__478BCC40_409E_4E61_B1EB_D2DCB2A7144D;
		}
		interface Body {
			Tab: Tabs;
			/** Select where the transaction category's costs are charged to the customer. Valid values can Chargeable, Non-chargeable and Complimentary. Only chargeable transaction will add to the total of any invoice */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Transaction category for the opportunity line. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_opportunitylinetransactioncategory_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_opportunitylinetransactioncategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_opportunitylinetransactioncategory_Information */
		Body: MyDog.Formmsdyn_opportunitylinetransactioncategory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_opportunitylinetransactioncategory {
		enum msdyn_BillingType {
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350000 */
			Non_Chargeable,
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}