//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_projecttransactioncategory_Information {
		interface tab__69D33759_0D42_4760_BE63_F92E98B2F0E5_Sections {
			_69D33759_0D42_4760_BE63_F92E98B2F0E5_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__69D33759_0D42_4760_BE63_F92E98B2F0E5 extends DevKit.Controls.ITab {
			Section: tab__69D33759_0D42_4760_BE63_F92E98B2F0E5_Sections;
		}
		interface Tabs {
			_69D33759_0D42_4760_BE63_F92E98B2F0E5: tab__69D33759_0D42_4760_BE63_F92E98B2F0E5;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the default billing type for this transaction category. */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the project for this transaction category. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Shows the transaction category. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_projecttransactioncategory_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projecttransactioncategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projecttransactioncategory_Information */
		Body: MyDog.Formmsdyn_projecttransactioncategory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_projecttransactioncategory {
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