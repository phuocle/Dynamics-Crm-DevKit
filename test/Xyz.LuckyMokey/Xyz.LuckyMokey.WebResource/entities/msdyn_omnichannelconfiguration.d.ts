//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_omnichannelconfiguration_Information {
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections {
		}
		interface tab_tab_skillbasedrouting_new_Sections {
			tab_2_section_1_2: DevKit.Form.Controls.ControlSection;
			tab_skillbasedrouting_section_2_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808 extends DevKit.Form.Controls.IControlTab {
			Section: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections;
		}
		interface tab_tab_skillbasedrouting_new extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_skillbasedrouting_new_Sections;
		}
		interface Tabs {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808;
			tab_skillbasedrouting_new: tab_tab_skillbasedrouting_new;
		}
		interface Body {
			Tab: Tabs;
			RatingModelDetails: DevKit.Form.Controls.ControlGrid;
			/** Enable Skill Based Routing for Agents & Supervisors */
			msdyn_IsSkillBasedRoutingEnabled: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_omnichannelconfiguration_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_omnichannelconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_omnichannelconfiguration_Information */
		Body: LuckyMokey.Formmsdyn_omnichannelconfiguration_Information.Body;
	}
	namespace FormMasking_settings {
		interface tab_Self_service_settings_Sections {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections {
			_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: DevKit.Form.Controls.ControlSection;
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Self_service_settings extends DevKit.Form.Controls.IControlTab {
			Section: tab_Self_service_settings_Sections;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808 extends DevKit.Form.Controls.IControlTab {
			Section: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections;
		}
		interface Tabs {
			Self_service_settings: tab_Self_service_settings;
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808;
		}
		interface Body {
			Tab: Tabs;
			MaskingRulesInSettings: DevKit.Form.Controls.ControlGrid;
			/** Enables supervisor assign feature for the org */
			msdyn_enable_supervisor_assign: DevKit.Form.Controls.ControlBoolean;
			/** Enables supervisor monitor feature for the org */
			msdyn_enable_supervisor_monitor: DevKit.Form.Controls.ControlBoolean;
			/** Enables self service feature for the org */
			msdyn_enable_visitorjourney: DevKit.Form.Controls.ControlBoolean;
			/** Mask agent data */
			msdyn_maskforagent: DevKit.Form.Controls.ControlBoolean;
			/** Mask customer data */
			msdyn_maskforcustomer: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormMasking_settings extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Masking_settings
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Masking_settings */
		Body: LuckyMokey.FormMasking_settings.Body;
	}
	namespace FormSelf_service_settings {
		interface tab_Self_service_settings_Sections {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections {
			_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Self_service_settings extends DevKit.Form.Controls.IControlTab {
			Section: tab_Self_service_settings_Sections;
		}
		interface tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808 extends DevKit.Form.Controls.IControlTab {
			Section: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808_Sections;
		}
		interface Tabs {
			Self_service_settings: tab_Self_service_settings;
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: tab__44EFFE7C_A18D_4D4C_B111_DB98E28BC808;
		}
		interface Body {
			Tab: Tabs;
			/** Enables supervisor assign feature for the org */
			msdyn_enable_supervisor_assign: DevKit.Form.Controls.ControlBoolean;
			/** Enables supervisor monitor feature for the org */
			msdyn_enable_supervisor_monitor: DevKit.Form.Controls.ControlBoolean;
			/** Enables self service feature for the org */
			msdyn_enable_visitorjourney: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSelf_service_settings extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Self_service_settings
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Self_service_settings */
		Body: LuckyMokey.FormSelf_service_settings.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_omnichannelconfiguration {
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
//{'JsForm':['Information','Masking settings','Self service settings'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}