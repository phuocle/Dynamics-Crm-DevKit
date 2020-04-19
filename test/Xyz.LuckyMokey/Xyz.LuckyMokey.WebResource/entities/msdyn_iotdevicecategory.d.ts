//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_iotdevicecategory_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_Command_Definitions_Sections {
			Commands_Section: DevKit.Form.Controls.ControlSection;
			Command_Definitions_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_PropertiesTab_Sections {
			PropertiesSection: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceTagsTab_Sections {
			DeviceTagsSection: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Command_Definitions extends DevKit.Form.Controls.IControlTab {
			Section: tab_Command_Definitions_Sections;
		}
		interface tab_PropertiesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_PropertiesTab_Sections;
		}
		interface tab_DeviceTagsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceTagsTab_Sections;
		}
		interface Tabs {
			Command_Definitions: tab_Command_Definitions;
			PropertiesTab: tab_PropertiesTab;
			DeviceTagsTab: tab_DeviceTagsTab;
		}
		interface Body {
			Tab: Tabs;
			DevicesGrid: DevKit.Form.Controls.ControlGrid;
			Commands: DevKit.Form.Controls.ControlGrid;
			DevicePropertiesGrid: DevKit.Form.Controls.ControlGrid;
			DeviceTagsGrid: DevKit.Form.Controls.ControlGrid;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_iotdevicecategory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotdevicecategory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_iotdevicecategory_Information */
		Body: LuckyMokey.Formmsdyn_iotdevicecategory_Information.Body;
		/** The Header section of form msdyn_iotdevicecategory_Information */
		Header: LuckyMokey.Formmsdyn_iotdevicecategory_Information.Header;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}