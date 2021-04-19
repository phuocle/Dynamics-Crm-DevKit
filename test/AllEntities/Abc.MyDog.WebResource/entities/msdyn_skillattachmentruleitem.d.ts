//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_skillattachmentruleitem_Information {
		interface tab__281E11CB_6267_4627_933D_5A4F33806A41_Sections {
			_FA62C8C4_2407_4B68_B9D3_F1354DA2AC3F: DevKit.Controls.Section;
			_281E11CB_6267_4627_933D_5A4F33806A41_SECTION_2: DevKit.Controls.Section;
			_281E11CB_6267_4627_933D_5A4F33806A41_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__281E11CB_6267_4627_933D_5A4F33806A41 extends DevKit.Controls.ITab {
			Section: tab__281E11CB_6267_4627_933D_5A4F33806A41_Sections;
		}
		interface Tabs {
			_281E11CB_6267_4627_933D_5A4F33806A41: tab__281E11CB_6267_4627_933D_5A4F33806A41;
		}
		interface Body {
			Tab: Tabs;
			/** The Skill Attachment Rule's Condition */
			msdyn_condition: DevKit.Controls.String;
			/** The Skill Attachment Rule's Description */
			msdyn_description: DevKit.Controls.String;
			/** Unique identifier for Work Stream associated with Skill Attachment Rule. */
			msdyn_liveworkstream: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			AttachSkills: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_skillattachmentruleitem_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_skillattachmentruleitem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_skillattachmentruleitem_Information */
		Body: MyDog.Formmsdyn_skillattachmentruleitem_Information.Body;
		/** The Grid of form msdyn_skillattachmentruleitem_Information */
		Grid: MyDog.Formmsdyn_skillattachmentruleitem_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_skillattachmentruleitem {
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