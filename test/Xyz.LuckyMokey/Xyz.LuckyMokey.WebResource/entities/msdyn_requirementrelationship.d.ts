//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_requirementrelationship_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			ChildRequirementsRelationship: DevKit.Form.Controls.ControlGrid;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Parent Requirement Relationship */
			msdyn_parentrequirementrelationshipid: DevKit.Form.Controls.ControlLookup;
			msdyn_resourceGroupings: DevKit.Form.Controls.ControlMultiOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_requirementrelationship_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementrelationship_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_requirementrelationship_Information */
		Body: LuckyMokey.Formmsdyn_requirementrelationship_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_requirementrelationship {
		enum msdyn_operator {
			/** 192350000,192350001 */
			_
		}
		enum msdyn_resourceGroupings {
			/** 192350000 */
			Organizational_Unit,
			/** 192350001 */
			Related_Resource_Pools,
			/** 192350002 */
			Location
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}