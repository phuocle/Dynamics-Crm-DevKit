//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_delegation_Information {
		interface tab__AC9573F3_08AC_45C8_9C69_D7762DF99DD8_Sections {
		}
		interface tab__AC9573F3_08AC_45C8_9C69_D7762DF99DD8 extends DevKit.Form.Controls.IControlTab {
			Section: tab__AC9573F3_08AC_45C8_9C69_D7762DF99DD8_Sections;
		}
		interface Tabs {
			_AC9573F3_08AC_45C8_9C69_D7762DF99DD8: tab__AC9573F3_08AC_45C8_9C69_D7762DF99DD8;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** The resource who requires a substitute. */
			msdyn_delegationfrom: DevKit.Form.Controls.ControlLookup;
			/** Delegate of the resource. */
			msdyn_delegationto: DevKit.Form.Controls.ControlLookup;
			/** Date when delegation ends. */
			msdyn_enddate: DevKit.Form.Controls.ControlDate;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Date when delegation starts. */
			msdyn_startdate: DevKit.Form.Controls.ControlDate;
			msdyn_type: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_delegation_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_delegation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_delegation_Information */
		Body: LuckyMokey.Formmsdyn_delegation_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_delegation {
		enum msdyn_type {
			/** 192350000 */
			Time_Entry,
			/** 192350001 */
			Expense
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