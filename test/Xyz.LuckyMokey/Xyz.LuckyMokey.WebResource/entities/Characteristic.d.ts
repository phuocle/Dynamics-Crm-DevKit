//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCharacteristic_Information {
		interface tab__481C3578_97B0_4E2C_B607_95654A380A4C_Sections {
			_9C596E20_EFC4_4129_BA34_F2C81B24DFD1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__481C3578_97B0_4E2C_B607_95654A380A4C extends DevKit.Form.Controls.IControlTab {
			Section: tab__481C3578_97B0_4E2C_B607_95654A380A4C_Sections;
		}
		interface Tabs {
			_481C3578_97B0_4E2C_B607_95654A380A4C: tab__481C3578_97B0_4E2C_B607_95654A380A4C;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Select the type of characteristic. */
			CharacteristicType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a detailed description of the characteristic. */
			Description: DevKit.Form.Controls.ControlString;
			/** Require approval */
			msdyn_requireapproval: DevKit.Form.Controls.ControlBoolean;
			/** Type a name for the characteristic. */
			Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navResourceCharacteristics: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormCharacteristic_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Characteristic_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Characteristic_Information */
		Body: LuckyMokey.FormCharacteristic_Information.Body;
		/** The Navigation of form Characteristic_Information */
		Navigation: LuckyMokey.FormCharacteristic_Information.Navigation;
	}
	namespace FormSkill_Main_Form {
		interface Tabs {
		}
		interface Body {
			WebResource_help: DevKit.Form.Controls.ControlWebResource;
			SkilledUsers: DevKit.Form.Controls.ControlGrid;
			/** Select the type of characteristic. */
			CharacteristicType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a detailed description of the characteristic. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type a name for the characteristic. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSkill_Main_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Skill_Main_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Skill_Main_Form */
		Body: LuckyMokey.FormSkill_Main_Form.Body;
	}
}
declare namespace OptionSet {
	namespace Characteristic {
		enum CharacteristicType {
			/** 1 */
			Skill,
			/** 2 */
			Certification
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'JsForm':['Information','Main Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}