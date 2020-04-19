//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_smsnumber_Information {
		interface Tabs {
		}
		interface Body {
			/** SMS number description */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Readable field to display SMS phone number */
			msdyn_FormattedPhoneNumber: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Work Stream associated with SMS Number. */
			msdyn_LiveWorkStreamId: DevKit.Form.Controls.ControlLookup;
			/** The SMS number of the SMS entity. */
			msdyn_number: DevKit.Form.Controls.ControlString;
			/** Used to denote operating hours for the sms numbers record */
			msdyn_operatinghourid: DevKit.Form.Controls.ControlLookup;
			/** SMS Provider for number */
			msdyn_Provider: DevKit.Form.Controls.ControlOptionSet;
			/** The SMS number type */
			msdyn_Type: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_smsnumber_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_smsnumber_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_smsnumber_Information */
		Body: LuckyMokey.Formmsdyn_smsnumber_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_smsnumber {
		enum msdyn_Provider {
			/** 192350000 */
			TeleSign_App
		}
		enum msdyn_Type {
			/** 192350000 */
			Long_code,
			/** 192350001 */
			Short_code,
			/** 192350002 */
			Toll_free
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