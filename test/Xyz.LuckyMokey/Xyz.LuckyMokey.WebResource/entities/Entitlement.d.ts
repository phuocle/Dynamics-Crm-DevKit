//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormEntitlement {
		interface Header {
			/** Choose a contact or account for which this entitlement has been defined. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date when the entitlement ends. */
			EndDate: DevKit.Form.Controls.ControlDate;
			/** Type the total number of entitlement terms that are left. */
			RemainingTerms: DevKit.Form.Controls.ControlDecimal;
			/** For internal use only. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
			notes: DevKit.Form.Controls.ControlSection;
			entitlementterms: DevKit.Form.Controls.ControlSection;
			fieldservice: DevKit.Form.Controls.ControlSection;
			entitlementterms_2: DevKit.Form.Controls.ControlSection;
			entitlementapplications: DevKit.Form.Controls.ControlSection;
			entitlementtermsInUCI: DevKit.Form.Controls.ControlSection;
			products: DevKit.Form.Controls.ControlSection;
			contacts: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			grid_EntitlementChannel: DevKit.Form.Controls.ControlGrid;
			grid_EntitlementApplications: DevKit.Form.Controls.ControlGrid;
			editableEntitlementChannelGridControl: DevKit.Form.Controls.ControlGrid;
			grid_EntitlementProducts: DevKit.Form.Controls.ControlGrid;
			grid_EntitlementContacts: DevKit.Form.Controls.ControlGrid;
			/** Select the type of entitlement terms. */
			AllocationTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose a contact or account for which this entitlement has been defined. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select whether to decrease the remaining terms when the case is created or when it is resolved. */
			DecreaseRemainingOn: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the Entitlement */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the date when the entitlement ends. */
			EndDate: DevKit.Form.Controls.ControlDate;
			/** Entity type for which the entitlement applies */
			entitytype: DevKit.Form.Controls.ControlOptionSet;
			/** Shows whether this entitlement is the default one for the specified customer. */
			IsDefault: DevKit.Form.Controls.ControlBoolean;
			/** The work order entities to which the entitlement is applicable. */
			msdyn_AppliesTo: DevKit.Form.Controls.ControlOptionSet;
			/** The priority level when considering which eligible entitlement to apply, where the lower the number the higher the priority. */
			msdyn_EntitlementPrioritization: DevKit.Form.Controls.ControlInteger;
			/** The percent discount the entitlement applies to the work order. */
			msdyn_PercentDiscount: DevKit.Form.Controls.ControlDouble;
			/** The price list that the entitlement applies to the work order. */
			msdyn_PriceListToApply: DevKit.Form.Controls.ControlLookup;
			/** Type a meaningful name for the entitlement. */
			Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type the total number of entitlement terms that are left. */
			RemainingTerms: DevKit.Form.Controls.ControlDecimal;
			/** Tells whether case creation is restricted based on entitlement terms. */
			RestrictCaseCreation: DevKit.Form.Controls.ControlBoolean;
			/** Choose the service level agreement (SLA) associated with the entitlement. */
			SLAId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date when the entitlement starts. */
			StartDate: DevKit.Form.Controls.ControlDate;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Form.Controls.ControlDecimal;
		}
		interface Navigation {
			navCases: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormEntitlement extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Entitlement
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Entitlement */
		Body: LuckyMokey.FormEntitlement.Body;
		/** The Header section of form Entitlement */
		Header: LuckyMokey.FormEntitlement.Header;
		/** The Navigation of form Entitlement */
		Navigation: LuckyMokey.FormEntitlement.Navigation;
	}
}
declare namespace OptionSet {
	namespace Entitlement {
		enum AllocationTypeCode {
			/** 0 */
			Number_of_cases,
			/** 1 */
			Number_of_hours,
			/** 192350000 */
			Discount_and_Price_List
		}
		enum DecreaseRemainingOn {
			/** 0 */
			Case_Resolution,
			/** 1 */
			Case_Creation
		}
		enum entitytype {
			/** 192350000 */
			Work_Order,
			/** 0 */
			Case
		}
		enum KbAccessLevel {
			/** 0 */
			Standard,
			/** 1 */
			Premium,
			/** 2 */
			None
		}
		enum msdyn_AppliesTo {
			/** 690970000 */
			Work_Order_Products,
			/** 690970001 */
			Work_Order_Services,
			/** 690970002 */
			Both_Work_Order_Products_Services
		}
		enum StateCode {
			/** 0 */
			Draft,
			/** 1 */
			Active,
			/** 2 */
			Cancelled,
			/** 3 */
			Expired,
			/** 4 */
			Waiting
		}
		enum StatusCode {
			/** 0 */
			Draft,
			/** 1 */
			Active,
			/** 2 */
			Cancelled,
			/** 3 */
			Expired,
			/** 1200 */
			Waiting
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
//{'JsForm':['Entitlement'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}