//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBookableResourceGroup_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** The child resource that is a part of the group. */
			ChildResource: DevKit.Form.Controls.ControlLookup;
			/** Enter the group membership start date. */
			FromDate: DevKit.Form.Controls.ControlDateTime;
			/** Indicates whether crew member is a leader or member. */
			msdyn_CrewMemberType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the resource group. */
			Name: DevKit.Form.Controls.ControlString;
			/** The parent resource that is a part of the group. */
			ParentResource: DevKit.Form.Controls.ControlLookup;
			/** Enter the group membership end date. */
			ToDate: DevKit.Form.Controls.ControlDateTime;
		}
	}
	class FormBookableResourceGroup_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookableResourceGroup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookableResourceGroup_Information */
		Body: LuckyMokey.FormBookableResourceGroup_Information.Body;
	}
}
declare namespace OptionSet {
	namespace BookableResourceGroup {
		enum msdyn_CrewMemberType {
			/** 192350000 */
			Leader,
			/** 192350001 */
			Member,
			/** 192350002 */
			None
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}