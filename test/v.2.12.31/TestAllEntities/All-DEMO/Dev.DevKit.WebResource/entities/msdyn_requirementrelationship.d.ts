﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_requirementrelationship_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Parent Requirement Relationship */
			msdyn_parentrequirementrelationshipid: DevKit.Controls.Lookup;
			msdyn_resourceGroupings: DevKit.Controls.MultiOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			ChildRequirementsRelationship: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_requirementrelationship_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementrelationship_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_requirementrelationship_Information */
		Body: DevKit.Formmsdyn_requirementrelationship_Information.Body;
		/** The Grid of form msdyn_requirementrelationship_Information */
		Grid: DevKit.Formmsdyn_requirementrelationship_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_requirementrelationship {
		enum msdyn_operator {
			/** 192350000 */
			__192350000,
			/** 192350001 */
			__192350001
		}
		enum msdyn_resourceGroupings {
			/** 192350002 */
			Location,
			/** 192350000 */
			Organizational_Unit,
			/** 192350001 */
			Related_Resource_Pools
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