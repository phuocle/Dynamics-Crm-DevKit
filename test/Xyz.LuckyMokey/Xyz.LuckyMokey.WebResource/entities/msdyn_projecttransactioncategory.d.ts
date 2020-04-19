//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_projecttransactioncategory_Information {
		interface tab__69D33759_0D42_4760_BE63_F92E98B2F0E5_Sections {
			_69D33759_0D42_4760_BE63_F92E98B2F0E5_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__69D33759_0D42_4760_BE63_F92E98B2F0E5 extends DevKit.Form.Controls.IControlTab {
			Section: tab__69D33759_0D42_4760_BE63_F92E98B2F0E5_Sections;
		}
		interface Tabs {
			_69D33759_0D42_4760_BE63_F92E98B2F0E5: tab__69D33759_0D42_4760_BE63_F92E98B2F0E5;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the default billing type for this transaction category. */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows the project for this transaction category. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Shows the transaction category. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_projecttransactioncategory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projecttransactioncategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_projecttransactioncategory_Information */
		Body: LuckyMokey.Formmsdyn_projecttransactioncategory_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_projecttransactioncategory {
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