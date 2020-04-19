//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_ocfbpage_Information {
		interface tab__6F4897EF_9856_4D54_A0AE_46EFCDCDB658_Sections {
			_6F4897EF_9856_4D54_A0AE_46EFCDCDB658_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab__6F4897EF_9856_4D54_A0AE_46EFCDCDB658 extends DevKit.Form.Controls.IControlTab {
			Section: tab__6F4897EF_9856_4D54_A0AE_46EFCDCDB658_Sections;
		}
		interface Tabs {
			_6F4897EF_9856_4D54_A0AE_46EFCDCDB658: tab__6F4897EF_9856_4D54_A0AE_46EFCDCDB658;
		}
		interface Body {
			Tab: Tabs;
			ProvisioningHistory: DevKit.Form.Controls.ControlGrid;
			/** Access token for the Facebook page */
			msdyn_fbpageaccesstoken: DevKit.Form.Controls.ControlString;
			/** Page id of the Facebook page */
			msdyn_fbpageid: DevKit.Form.Controls.ControlString;
			/** The name of the Facebook page */
			msdyn_fbpagename: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Work Stream associated with Facebook page */
			msdyn_liveworkstreamid: DevKit.Form.Controls.ControlLookup;
			/** Related Facebook application */
			msdyn_ocfbapplicationid: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_ocfbpage_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocfbpage_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_ocfbpage_Information */
		Body: LuckyMokey.Formmsdyn_ocfbpage_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocfbpage {
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