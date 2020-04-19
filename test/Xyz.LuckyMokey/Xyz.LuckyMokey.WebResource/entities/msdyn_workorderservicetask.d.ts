//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_workorderservicetask_Information {
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_6 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_7_Sections;
		}
		interface Tabs {
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_ActualDuration: DevKit.Form.Controls.ControlInteger;
			/** Agreement Booking Service Task linked to this Work Order Service Task */
			msdyn_AgreementBookingServiceTask: DevKit.Form.Controls.ControlLookup;
			/** Agreement Booking Service Task linked to this Work Order Service Task */
			msdyn_AgreementBookingServiceTask_1: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking_1: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset_1: DevKit.Form.Controls.ControlLookup;
			msdyn_Description: DevKit.Form.Controls.ControlString;
			msdyn_Description_1: DevKit.Form.Controls.ControlString;
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows the order of this task within the work order service tasks. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_PercentComplete: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier for Service Task Type associated with Work Order Service Task. */
			msdyn_TaskType: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Work Order Service Task. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident_1: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Work Order Service Task */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_workorderservicetask_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workorderservicetask_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_workorderservicetask_Information */
		Body: LuckyMokey.Formmsdyn_workorderservicetask_Information.Body;
		/** The Footer section of form msdyn_workorderservicetask_Information */
		Footer: LuckyMokey.Formmsdyn_workorderservicetask_Information.Footer;
		/** The Navigation of form msdyn_workorderservicetask_Information */
		Navigation: LuckyMokey.Formmsdyn_workorderservicetask_Information.Navigation;
	}
	namespace FormWork_Order_Service_Task_Mobile {
		interface tab__1932B377_2E7E_4880_9B0E_477CC529B5FE_Sections {
			_594A0AD8_A9A3_4509_9E40_52F6789D7512: DevKit.Form.Controls.ControlSection;
			fstab_general_section_duration: DevKit.Form.Controls.ControlSection;
			_1932B377_2E7E_4880_9B0E_477CC529B5FE_SECTION_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab__1932B377_2E7E_4880_9B0E_477CC529B5FE extends DevKit.Form.Controls.IControlTab {
			Section: tab__1932B377_2E7E_4880_9B0E_477CC529B5FE_Sections;
		}
		interface Tabs {
			_1932B377_2E7E_4880_9B0E_477CC529B5FE: tab__1932B377_2E7E_4880_9B0E_477CC529B5FE;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_ActualDuration: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			msdyn_Description: DevKit.Form.Controls.ControlString;
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_PercentComplete: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier for Service Task Type associated with Work Order Service Task. */
			msdyn_TaskType: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Work Order Service Task. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormWork_Order_Service_Task_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Service_Task_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Work_Order_Service_Task_Mobile */
		Body: LuckyMokey.FormWork_Order_Service_Task_Mobile.Body;
		/** The Navigation of form Work_Order_Service_Task_Mobile */
		Navigation: LuckyMokey.FormWork_Order_Service_Task_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_workorderservicetask {
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
//{'JsForm':['Information','Work Order Service Task - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}