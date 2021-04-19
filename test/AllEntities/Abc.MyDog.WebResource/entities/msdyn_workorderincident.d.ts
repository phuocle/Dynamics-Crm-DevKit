//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_workorderincident_Information {
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_workorderproductstab_Sections {
			workorderproductssection: DevKit.Controls.Section;
		}
		interface tab_workorderservicestab_Sections {
			workorderservicessection: DevKit.Controls.Section;
		}
		interface tab_workorderservicetaskstab_Sections {
			workorderservicetasksection: DevKit.Controls.Section;
		}
		interface tab_f1tab_resolution_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface tab_workorderproductstab extends DevKit.Controls.ITab {
			Section: tab_workorderproductstab_Sections;
		}
		interface tab_workorderservicestab extends DevKit.Controls.ITab {
			Section: tab_workorderservicestab_Sections;
		}
		interface tab_workorderservicetaskstab extends DevKit.Controls.ITab {
			Section: tab_workorderservicetaskstab_Sections;
		}
		interface tab_f1tab_resolution extends DevKit.Controls.ITab {
			Section: tab_f1tab_resolution_Sections;
		}
		interface tab_tab_8 extends DevKit.Controls.ITab {
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
			notescontrol: DevKit.Controls.Note;
			/** Agreement Booking Incident linked to this Work Order Incident */
			msdyn_AgreementBookingIncident: DevKit.Controls.Lookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_Description: DevKit.Controls.String;
			/** Incident description */
			msdyn_Description_1: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Workorder incident's functional location. */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Shows if the incident has been resolved by one of its related tasks. */
			msdyn_IncidentResolved: DevKit.Controls.Boolean;
			/** Incident type reported */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			msdyn_IsPrimary: DevKit.Controls.Boolean;
			msdyn_ItemsPopulated: DevKit.Controls.Boolean;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the percent completed on associated tasks. This indicates the total of completed tasks, but not if the incident was resolved. */
			msdyn_TasksPercentCompleted: DevKit.Controls.Double;
			/** Parent Work Order where incident was reported on */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Work Order Incident */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			workorderproductsgrid: DevKit.Controls.Grid;
			workorderservicesgrid: DevKit.Controls.Grid;
			workorderservicetasksgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_workorderincident_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workorderincident_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workorderincident_Information */
		Body: MyDog.Formmsdyn_workorderincident_Information.Body;
		/** The Footer section of form msdyn_workorderincident_Information */
		Footer: MyDog.Formmsdyn_workorderincident_Information.Footer;
		/** The Navigation of form msdyn_workorderincident_Information */
		Navigation: MyDog.Formmsdyn_workorderincident_Information.Navigation;
		/** The Grid of form msdyn_workorderincident_Information */
		Grid: MyDog.Formmsdyn_workorderincident_Information.Grid;
	}
	namespace FormWork_Order_Incident_Mobile {
		interface tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77_Sections {
			_28146354_51ED_48D8_A48D_42EBC5D11F28: DevKit.Controls.Section;
			_0366D152_E56D_4D51_B9ED_9BF3C729CE77_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
		}
		interface tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77 extends DevKit.Controls.ITab {
			Section: tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			_0366D152_E56D_4D51_B9ED_9BF3C729CE77: tab__0366D152_E56D_4D51_B9ED_9BF3C729CE77;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Workorder incident's functional location. */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Incident type reported */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** For internal use only. */
			msdyn_InternalFlags: DevKit.Controls.String;
			msdyn_IsPrimary: DevKit.Controls.Boolean;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Parent Work Order where incident was reported on */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: DevKit.Controls.NavigationItem
		}
		interface Grid {
			workorderproductsgrid: DevKit.Controls.Grid;
			workorderservicesgrid: DevKit.Controls.Grid;
			workorderservicetasksgrid: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order_Incident_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Incident_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Incident_Mobile */
		Body: MyDog.FormWork_Order_Incident_Mobile.Body;
		/** The Navigation of form Work_Order_Incident_Mobile */
		Navigation: MyDog.FormWork_Order_Incident_Mobile.Navigation;
		/** The Grid of form Work_Order_Incident_Mobile */
		Grid: MyDog.FormWork_Order_Incident_Mobile.Grid;
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
//{'JsForm':['Information','Work Order Incident - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}