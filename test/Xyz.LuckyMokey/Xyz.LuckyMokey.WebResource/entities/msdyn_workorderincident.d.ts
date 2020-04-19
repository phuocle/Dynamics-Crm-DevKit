//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_workorderincident_Information {
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_workorderproductstab_Sections {
			workorderproductssection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_workorderservicestab_Sections {
			workorderservicessection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_workorderservicetaskstab_Sections {
			workorderservicetasksection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_resolution_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_8_Sections {
			tab_8_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_7 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_7_Sections;
		}
		interface tab_workorderproductstab extends DevKit.Form.Controls.IControlTab {
			Section: tab_workorderproductstab_Sections;
		}
		interface tab_workorderservicestab extends DevKit.Form.Controls.IControlTab {
			Section: tab_workorderservicestab_Sections;
		}
		interface tab_workorderservicetaskstab extends DevKit.Form.Controls.IControlTab {
			Section: tab_workorderservicetaskstab_Sections;
		}
		interface tab_f1tab_resolution extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_resolution_Sections;
		}
		interface tab_tab_8 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_8_Sections;
		}
		interface Tabs {
			tab_7: tab_tab_7;
			workorderproductstab: tab_workorderproductstab;
			workorderservicestab: tab_workorderservicestab;
			workorderservicetaskstab: tab_workorderservicetaskstab;
			f1tab_resolution: tab_f1tab_resolution;
			tab_8: tab_tab_8;
		}
		interface Body {
			Tab: Tabs;
			workorderproductsgrid: DevKit.Form.Controls.ControlGrid;
			workorderservicesgrid: DevKit.Form.Controls.ControlGrid;
			workorderservicetasksgrid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Agreement Booking Incident linked to this Work Order Incident */
			msdyn_AgreementBookingIncident: DevKit.Form.Controls.ControlLookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Incident description */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Incident description */
			msdyn_Description_1: DevKit.Form.Controls.ControlString;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Shows if the incident has been resolved by one of its related tasks. */
			msdyn_IncidentResolved: DevKit.Form.Controls.ControlBoolean;
			/** Incident type reported */
			msdyn_IncidentType: DevKit.Form.Controls.ControlLookup;
			msdyn_IsPrimary: DevKit.Form.Controls.ControlBoolean;
			msdyn_ItemsPopulated: DevKit.Form.Controls.ControlBoolean;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows the percent completed on associated tasks. This indicates the total of completed tasks, but not if the incident was resolved. */
			msdyn_TasksPercentCompleted: DevKit.Form.Controls.ControlDouble;
			/** Parent Work Order where incident was reported on */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Work Order Incident */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_workorderincident_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workorderincident_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_workorderincident_Information */
		Body: LuckyMokey.Formmsdyn_workorderincident_Information.Body;
		/** The Footer section of form msdyn_workorderincident_Information */
		Footer: LuckyMokey.Formmsdyn_workorderincident_Information.Footer;
		/** The Navigation of form msdyn_workorderincident_Information */
		Navigation: LuckyMokey.Formmsdyn_workorderincident_Information.Navigation;
	}
	namespace FormWork_Order_Incident_Mobile {
		interface tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77_Sections {
			_28146354_51ED_48D8_A48D_42EBC5D11F28: DevKit.Form.Controls.ControlSection;
			_0366D152_E56D_4D51_B9ED_9BF3C729CE77_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77 extends DevKit.Form.Controls.IControlTab {
			Section: tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			_0366D152_E56D_4D51_B9ED_9BF3C729CE77: tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			workorderproductsgrid: DevKit.Form.Controls.ControlGrid;
			workorderservicesgrid: DevKit.Form.Controls.ControlGrid;
			workorderservicetasksgrid: DevKit.Form.Controls.ControlGrid;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Incident description */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Incident type reported */
			msdyn_IncidentType: DevKit.Form.Controls.ControlLookup;
			/** For internal use only. */
			msdyn_InternalFlags: DevKit.Form.Controls.ControlString;
			msdyn_IsPrimary: DevKit.Form.Controls.ControlBoolean;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Parent Work Order where incident was reported on */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormWork_Order_Incident_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Incident_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Work_Order_Incident_Mobile */
		Body: LuckyMokey.FormWork_Order_Incident_Mobile.Body;
		/** The Navigation of form Work_Order_Incident_Mobile */
		Navigation: LuckyMokey.FormWork_Order_Incident_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_workorderincident {
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
//{'JsForm':['Information','Work Order Incident - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}