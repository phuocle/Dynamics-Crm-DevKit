//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_templateforproperties_Information {
		interface tab__188F2590_F9AA_48C2_9541_97CD71121D0C_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__188F2590_F9AA_48C2_9541_97CD71121D0C extends DevKit.Controls.ITab {
			Section: tab__188F2590_F9AA_48C2_9541_97CD71121D0C_Sections;
		}
		interface Tabs {
			_188F2590_F9AA_48C2_9541_97CD71121D0C: tab__188F2590_F9AA_48C2_9541_97CD71121D0C;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			PropertiesSubgrid: DevKit.Controls.Grid;
			AssetCategoriesSubgrid: DevKit.Controls.Grid;
			AssetsSubgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_templateforproperties_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_templateforproperties_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_templateforproperties_Information */
		Body: MyDog.Formmsdyn_templateforproperties_Information.Body;
		/** The Grid of form msdyn_templateforproperties_Information */
		Grid: MyDog.Formmsdyn_templateforproperties_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_templateforproperties {
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