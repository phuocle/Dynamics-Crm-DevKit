//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workhourtemplate_Information {
		interface tab__E813C5E9_7698_4994_9DA8_C8730137B1ED_Sections {
			_87D011A2_3AC7_4953_8A45_0298460CA02D: DevKit.Controls.Section;
		}
		interface tab__E813C5E9_7698_4994_9DA8_C8730137B1ED extends DevKit.Controls.ITab {
			Section: tab__E813C5E9_7698_4994_9DA8_C8730137B1ED_Sections;
		}
		interface Tabs {
			_E813C5E9_7698_4994_9DA8_C8730137B1ED: tab__E813C5E9_7698_4994_9DA8_C8730137B1ED;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the bookable resource from which calendar needs to be copied */
			msdyn_bookableresourceid: DevKit.Controls.Lookup;
			/** Type an entity description. */
			msdyn_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_workhourtemplate_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workhourtemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workhourtemplate_Information */
		Body: DevKit.Formmsdyn_workhourtemplate_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_workhourtemplate {
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