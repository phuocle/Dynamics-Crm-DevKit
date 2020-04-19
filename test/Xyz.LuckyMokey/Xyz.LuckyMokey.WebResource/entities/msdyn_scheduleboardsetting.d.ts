//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_scheduleboardsetting_Information {
		interface Tabs {
		}
		interface Body {
			WebResource_FullyBookedColor: DevKit.Form.Controls.ControlWebResource;
			WebResource_PartiallyBookedColor: DevKit.Form.Controls.ControlWebResource;
			WebResource_OverbookedColor: DevKit.Form.Controls.ControlWebResource;
			WebResource_NotBookedColor: DevKit.Form.Controls.ControlWebResource;
			msdyn_BookBasedOn: DevKit.Form.Controls.ControlBoolean;
			msdyn_CustomTabName: DevKit.Form.Controls.ControlString;
			msdyn_CustomTabWebResource: DevKit.Form.Controls.ControlString;
			msdyn_FullyBookedColor: DevKit.Form.Controls.ControlString;
			msdyn_HideCancelled: DevKit.Form.Controls.ControlBoolean;
			msdyn_IsSynchronizeResources: DevKit.Form.Controls.ControlBoolean;
			msdyn_MapViewTabPlacement: DevKit.Form.Controls.ControlBoolean;
			msdyn_NotBookedColor: DevKit.Form.Controls.ControlString;
			/** Tab index. */
			msdyn_OrderNumber: DevKit.Form.Controls.ControlInteger;
			msdyn_OrganizationalUnitTooltipsViewId: DevKit.Form.Controls.ControlString;
			msdyn_OrganizationalUnitViewId: DevKit.Form.Controls.ControlString;
			msdyn_OverbookedColor: DevKit.Form.Controls.ControlString;
			msdyn_PartiallyBookedColor: DevKit.Form.Controls.ControlString;
			msdyn_SAAvailableIcon: DevKit.Form.Controls.ControlString;
			msdyn_SAPartiallyAvailableIcon: DevKit.Form.Controls.ControlString;
			msdyn_SAUnavailableIcon: DevKit.Form.Controls.ControlString;
			msdyn_SchedulerAlertsView: DevKit.Form.Controls.ControlString;
			msdyn_SchedulerResourceDetailsView: DevKit.Form.Controls.ControlString;
			msdyn_SchedulerResourceTooltipView: DevKit.Form.Controls.ControlString;
			/** Shows the settings as a JSON string. */
			msdyn_Settings: DevKit.Form.Controls.ControlString;
			/** Field is used to determine if Schedule Board Tab are Private, Public or Shareable */
			msdyn_ShareType: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the tab name. */
			msdyn_TabName: DevKit.Form.Controls.ControlString;
			msdyn_UnscheduledRequirementsViewId: DevKit.Form.Controls.ControlString;
			/** Shows the number of records to be displayed per page in 'Resource Requirement' section. */
			msdyn_UnscheduledWOPageRecCount: DevKit.Form.Controls.ControlInteger;
			msdyn_WorkingHoursColor: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Schedule Board Setting */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_scheduleboardsetting_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_scheduleboardsetting_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_scheduleboardsetting_Information */
		Body: LuckyMokey.Formmsdyn_scheduleboardsetting_Information.Body;
		/** The Footer section of form msdyn_scheduleboardsetting_Information */
		Footer: LuckyMokey.Formmsdyn_scheduleboardsetting_Information.Footer;
		/** The Navigation of form msdyn_scheduleboardsetting_Information */
		Navigation: LuckyMokey.Formmsdyn_scheduleboardsetting_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_scheduleboardsetting {
		enum msdyn_ShareType {
			/** 192350000 */
			Everyone,
			/** 192350001 */
			Just_me,
			/** 192350002 */
			Specific_people,
			/** 192350003 */
			System
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