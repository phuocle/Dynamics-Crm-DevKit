//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_workordertype_Information {
		interface tab_f1tab_details_Sections {
		}
		interface tab_f1tab_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_details_Sections;
		}
		interface Tabs {
			f1tab_details: tab_f1tab_details;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether work orders of this type require an incident to be recorded on the work order. */
			msdyn_IncidentRequired: DevKit.Form.Controls.ControlBoolean;
			/** Type the name of the work order type. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Default Price List to be used on Work Orders linked to this Work Order Type. Please review the help for further details on Price Lists */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Select whether work orders of this type are taxable. */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Work Order Type */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workordertype_opportunity_WorkOrderType: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_workordertype_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workordertype_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_workordertype_Information */
		Body: LuckyMokey.Formmsdyn_workordertype_Information.Body;
		/** The Footer section of form msdyn_workordertype_Information */
		Footer: LuckyMokey.Formmsdyn_workordertype_Information.Footer;
		/** The Navigation of form msdyn_workordertype_Information */
		Navigation: LuckyMokey.Formmsdyn_workordertype_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_workordertype {
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