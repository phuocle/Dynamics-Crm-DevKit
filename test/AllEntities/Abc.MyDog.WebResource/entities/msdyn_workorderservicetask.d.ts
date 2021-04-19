//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_workorderservicetask_Information {
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface Tabs {
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			msdyn_ActualDuration: DevKit.Controls.Integer;
			/** Agreement Booking Service Task linked to this Work Order Service Task */
			msdyn_AgreementBookingServiceTask: DevKit.Controls.Lookup;
			/** Agreement Booking Service Task linked to this Work Order Service Task */
			msdyn_AgreementBookingServiceTask_1: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking_1: DevKit.Controls.Lookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset_1: DevKit.Controls.Lookup;
			msdyn_Description: DevKit.Controls.String;
			msdyn_Description_1: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Unique identifier for Inspection associated with Work Order Service Task. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Definition associated with Work Order Service Task. */
			msdyn_inspectiondefinitionid: DevKit.Controls.Lookup;
			/** Depicts whether inspection is enabled for Work Order Service Task Type. */
			msdyn_InspectionEnabled: DevKit.Controls.Boolean;
			/** Depicts the result of Inpection that the user enters */
			msdyn_inspectiontaskresult: DevKit.Controls.OptionSet;
			/** Shows the order of this task within the work order service tasks. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_PercentComplete: DevKit.Controls.Double;
			/** For internal use only */
			msdyn_surveyboundedoutput: DevKit.Controls.String;
			/** Unique identifier for Service Task Type associated with Work Order Service Task. */
			msdyn_TaskType: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Work Order Service Task. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident_1: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Work Order Service Task */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_workorderservicetask_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workorderservicetask_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workorderservicetask_Information */
		Body: MyDog.Formmsdyn_workorderservicetask_Information.Body;
		/** The Footer section of form msdyn_workorderservicetask_Information */
		Footer: MyDog.Formmsdyn_workorderservicetask_Information.Footer;
		/** The Navigation of form msdyn_workorderservicetask_Information */
		Navigation: MyDog.Formmsdyn_workorderservicetask_Information.Navigation;
	}
	namespace FormWork_Order_Service_Task_Mobile {
		interface tab__1932B377_2E7E_4880_9B0E_477CC529B5FE_Sections {
			_594A0AD8_A9A3_4509_9E40_52F6789D7512: DevKit.Controls.Section;
			InspectionFormSection_Mobile: DevKit.Controls.Section;
			fstab_general_section_duration: DevKit.Controls.Section;
			_1932B377_2E7E_4880_9B0E_477CC529B5FE_SECTION_2: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			fstab_sub_grids_section: DevKit.Controls.Section;
		}
		interface tab__1932B377_2E7E_4880_9B0E_477CC529B5FE extends DevKit.Controls.ITab {
			Section: tab__1932B377_2E7E_4880_9B0E_477CC529B5FE_Sections;
		}
		interface Tabs {
			_1932B377_2E7E_4880_9B0E_477CC529B5FE: tab__1932B377_2E7E_4880_9B0E_477CC529B5FE;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			msdyn_ActualDuration: DevKit.Controls.Integer;
			/** Unique identifier for Resource Booking associated with Work Order Service Task. */
			msdyn_Booking: DevKit.Controls.Lookup;
			/** Unique identifier for Customer Asset associated with Work Order Service Task. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			msdyn_Description: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Unique identifier for Inspection associated with Work Order Service Task. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Definition associated with Work Order Service Task. */
			msdyn_inspectiondefinitionid: DevKit.Controls.Lookup;
			/** Depicts whether inspection is enabled for Work Order Service Task Type. */
			msdyn_InspectionEnabled: DevKit.Controls.Boolean;
			/** Depicts the result of Inpection that the user enters */
			msdyn_inspectiontaskresult: DevKit.Controls.OptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_PercentComplete: DevKit.Controls.Double;
			/** For internal use only */
			msdyn_surveyboundedoutput: DevKit.Controls.String;
			/** Unique identifier for Service Task Type associated with Work Order Service Task. */
			msdyn_TaskType: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Work Order Service Task. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order Incident associated with Work Order Service Task. */
			msdyn_WorkOrderIncident: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormWork_Order_Service_Task_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Service_Task_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Service_Task_Mobile */
		Body: MyDog.FormWork_Order_Service_Task_Mobile.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_workorderservicetask {
		enum msdyn_InspectionResult {
			/** 100000001 */
			Fail,
			/** 100000002 */
			Invalid,
			/** 100000000 */
			Pass
		}
		enum msdyn_inspectiontaskresult {
			/** 192350001 */
			Fail,
			/** 192350003 */
			NA,
			/** 192350002 */
			Partial_Success,
			/** 192350000 */
			Pass
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
//{'JsForm':['Information','Work Order Service Task - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}