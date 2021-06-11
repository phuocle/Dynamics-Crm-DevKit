//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_projecttaskstatususer_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_BookableResource: DevKit.Controls.Lookup;
			/** Shows the description of the task. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the expected completion date of the task entered by the assigned resource. */
			msdyn_expectedcompletiondate: DevKit.Controls.Date;
			/** Shows the expected hours to complete the task entered by the assigned resource. */
			msdyn_expectedhourstocomplete: DevKit.Controls.Double;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the reported percentage complete for the project task. */
			msdyn_percentcomplete: DevKit.Controls.Integer;
			/** Unique identifier for Project Task associated with Project Task Status User. */
			msdyn_projecttaskId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_projecttaskstatususer_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projecttaskstatususer_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projecttaskstatususer_Information */
		Body: DevKit.Formmsdyn_projecttaskstatususer_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_projecttaskstatususer {
		enum msdyn_projecttaskstatusindicator {
			/** 192350000 */
			Green,
			/** 192350003 */
			None,
			/** 192350002 */
			Red,
			/** 192350001 */
			Yellow
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