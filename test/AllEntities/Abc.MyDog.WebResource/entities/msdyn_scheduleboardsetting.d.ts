//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_scheduleboardsetting_Information {
		interface Tabs {
		}
		interface Body {
			WebResource_FullyBookedColor: DevKit.Controls.WebResource;
			WebResource_PartiallyBookedColor: DevKit.Controls.WebResource;
			WebResource_OverbookedColor: DevKit.Controls.WebResource;
			WebResource_NotBookedColor: DevKit.Controls.WebResource;
			msdyn_BookBasedOn: DevKit.Controls.Boolean;
			msdyn_CustomTabName: DevKit.Controls.String;
			msdyn_CustomTabWebResource: DevKit.Controls.String;
			msdyn_FullyBookedColor: DevKit.Controls.String;
			msdyn_HideCancelled: DevKit.Controls.Boolean;
			msdyn_IsSynchronizeResources: DevKit.Controls.Boolean;
			msdyn_MapViewTabPlacement: DevKit.Controls.Boolean;
			msdyn_NotBookedColor: DevKit.Controls.String;
			/** Tab index. */
			msdyn_OrderNumber: DevKit.Controls.Integer;
			msdyn_OrganizationalUnitTooltipsViewId: DevKit.Controls.String;
			msdyn_OrganizationalUnitViewId: DevKit.Controls.String;
			msdyn_OverbookedColor: DevKit.Controls.String;
			msdyn_PartiallyBookedColor: DevKit.Controls.String;
			msdyn_SAAvailableIcon: DevKit.Controls.String;
			msdyn_SAPartiallyAvailableIcon: DevKit.Controls.String;
			msdyn_SAUnavailableIcon: DevKit.Controls.String;
			msdyn_SchedulerAlertsView: DevKit.Controls.String;
			msdyn_SchedulerResourceDetailsView: DevKit.Controls.String;
			msdyn_SchedulerResourceTooltipView: DevKit.Controls.String;
			/** Shows the settings as a JSON string. */
			msdyn_Settings: DevKit.Controls.String;
			/** Field is used to determine if Schedule Board Tab are Private, Public or Shareable */
			msdyn_ShareType: DevKit.Controls.OptionSet;
			/** Enter the tab name. */
			msdyn_TabName: DevKit.Controls.String;
			msdyn_UnscheduledRequirementsViewId: DevKit.Controls.String;
			/** Shows the number of records to be displayed per page in 'Resource Requirement' section. */
			msdyn_UnscheduledWOPageRecCount: DevKit.Controls.Integer;
			msdyn_WorkingHoursColor: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Schedule Board Setting */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_scheduleboardsetting_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_scheduleboardsetting_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_scheduleboardsetting_Information */
		Body: MyDog.Formmsdyn_scheduleboardsetting_Information.Body;
		/** The Footer section of form msdyn_scheduleboardsetting_Information */
		Footer: MyDog.Formmsdyn_scheduleboardsetting_Information.Footer;
		/** The Navigation of form msdyn_scheduleboardsetting_Information */
		Navigation: MyDog.Formmsdyn_scheduleboardsetting_Information.Navigation;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}