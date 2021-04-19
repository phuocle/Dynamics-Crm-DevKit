//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_notificationtemplate_Information {
		interface tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9_Sections {
			_341680A1_42F7_4CA4_AF62_A2F46428A1B9_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9 extends DevKit.Controls.ITab {
			Section: tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9_Sections;
		}
		interface Tabs {
			_341680A1_42F7_4CA4_AF62_A2F46428A1B9: tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9;
		}
		interface Body {
			Tab: Tabs;
			ismanaged: DevKit.Controls.ELSE3???;//ismanaged - B3AB1CC0-C437-4CB4-901F-DE6CE117730C -- FOR DEBUG 
			/** Display label for the button to accept a notification */
			msdyn_acceptbuttontext: DevKit.Controls.String;
			/** Enables auto accept of the notification. */
			msdyn_autoacceptnotification: DevKit.Controls.Boolean;
			/** Show desktop notifications when app is in background or never */
			msdyn_desktopnotificationmode: DevKit.Controls.OptionSet;
			/** Display icon for this notification. Path to the webresource */
			msdyn_icon: DevKit.Controls.String;
			/** The name of the notification. */
			msdyn_name: DevKit.Controls.String;
			/** Display label for the button to reject a notification */
			msdyn_rejectbuttontext: DevKit.Controls.String;
			/** Toggle this to enable or disable the reject button from notification. */
			msdyn_showrejectbutton: DevKit.Controls.Boolean;
			/** Do you want to show a countdown of when this notification will close? */
			msdyn_showtimeout: DevKit.Controls.Boolean;
			/** Notification time out period. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** The title to be displayed for this notification. */
			msdyn_title: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			NotificationFields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_notificationtemplate_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_notificationtemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_notificationtemplate_Information */
		Body: MyDog.Formmsdyn_notificationtemplate_Information.Body;
		/** The Grid of form msdyn_notificationtemplate_Information */
		Grid: MyDog.Formmsdyn_notificationtemplate_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_notificationtemplate {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_desktopnotificationmode {
			/** 509180000 */
			Never,
			/** 509180001 */
			When_app_is_in_background
		}
		enum msdyn_theme {
			/** 509180000 */
			Dark,
			/** 509180001 */
			Light
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