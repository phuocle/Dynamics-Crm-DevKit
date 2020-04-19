//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormMobile_Offline_Profile_Item_Association {
		interface tab_GENERALINFORMATION_TAB_Sections {
			General: DevKit.Form.Controls.ControlSection;
		}
		interface tab_GENERALINFORMATION_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			GENERALINFORMATION_TAB: tab_GENERALINFORMATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Enter the name of the mobile offline profile item association. */
			Name: DevKit.Form.Controls.ControlString;
			/** Display name of entity relationship */
			RelationshipName: DevKit.Form.Controls.ControlString;
			/** List of relationships of entity selected in parent profile item */
			SelectedRelationShipsSchema: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormMobile_Offline_Profile_Item_Association extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Mobile_Offline_Profile_Item_Association
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Mobile_Offline_Profile_Item_Association */
		Body: LuckyMokey.FormMobile_Offline_Profile_Item_Association.Body;
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfileItemAssociation {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum SelectedRelationShipsSchema {
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
//{'JsForm':['Mobile Offline Profile Item Association'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}