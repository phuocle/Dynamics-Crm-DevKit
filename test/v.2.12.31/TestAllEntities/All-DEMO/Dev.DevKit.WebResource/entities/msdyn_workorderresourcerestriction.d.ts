//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workorderresourcerestriction_Information {
		interface tab__00990EA9_CE48_4646_845F_F357D0AED008_Sections {
			_C9D3260D_058C_4565_9C02_CD6B45E47CB2: DevKit.Controls.Section;
		}
		interface tab__00990EA9_CE48_4646_845F_F357D0AED008 extends DevKit.Controls.ITab {
			Section: tab__00990EA9_CE48_4646_845F_F357D0AED008_Sections;
		}
		interface Tabs {
			_00990EA9_CE48_4646_845F_F357D0AED008: tab__00990EA9_CE48_4646_845F_F357D0AED008;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Account: DevKit.Controls.Lookup;
			msdyn_Cascade: DevKit.Controls.Boolean;
			msdyn_ExpirationDate: DevKit.Controls.DateTime;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Resource: DevKit.Controls.Lookup;
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_workorderresourcerestriction_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workorderresourcerestriction_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workorderresourcerestriction_Information */
		Body: DevKit.Formmsdyn_workorderresourcerestriction_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_workorderresourcerestriction {
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