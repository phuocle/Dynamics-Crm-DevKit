//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_iotdevicecategory_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_Command_Definitions_Sections {
			Commands_Section: DevKit.Controls.Section;
			Command_Definitions_section_2: DevKit.Controls.Section;
		}
		interface tab_PropertiesTab_Sections {
			PropertiesSection: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_DeviceTagsTab_Sections {
			DeviceTagsSection: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_Command_Definitions extends DevKit.Controls.ITab {
			Section: tab_Command_Definitions_Sections;
		}
		interface tab_PropertiesTab extends DevKit.Controls.ITab {
			Section: tab_PropertiesTab_Sections;
		}
		interface tab_DeviceTagsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceTagsTab_Sections;
		}
		interface Tabs {
			Command_Definitions: tab_Command_Definitions;
			PropertiesTab: tab_PropertiesTab;
			DeviceTagsTab: tab_DeviceTagsTab;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Grid {
			DevicesGrid: DevKit.Controls.Grid;
			Commands: DevKit.Controls.Grid;
			DevicePropertiesGrid: DevKit.Controls.Grid;
			DeviceTagsGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_iotdevicecategory_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdevicecategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotdevicecategory_Information */
		Body: MyDog.Formmsdyn_iotdevicecategory_Information.Body;
		/** The Header section of form msdyn_iotdevicecategory_Information */
		Header: MyDog.Formmsdyn_iotdevicecategory_Information.Header;
		/** The Grid of form msdyn_iotdevicecategory_Information */
		Grid: MyDog.Formmsdyn_iotdevicecategory_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotdevicecategory {
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