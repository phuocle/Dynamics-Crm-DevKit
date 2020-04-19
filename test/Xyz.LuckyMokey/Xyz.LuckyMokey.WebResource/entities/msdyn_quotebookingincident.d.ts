//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_quotebookingincident_Information {
		interface tab_QuoteBookingIncidentTab_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_QuoteBookingIncidentTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_QuoteBookingIncidentTab_Sections;
		}
		interface Tabs {
			QuoteBookingIncidentTab: tab_QuoteBookingIncidentTab;
		}
		interface Body {
			Tab: Tabs;
			/** Customer Asset related to this incident reported */
			msdyn_customerasset: DevKit.Form.Controls.ControlLookup;
			/** Enter the description of the incident */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows the time estimated to resolve this incident. */
			msdyn_estimatedduration: DevKit.Form.Controls.ControlInteger;
			/** Shows the incident type associated with the quote booking incident. */
			msdyn_incidenttype: DevKit.Form.Controls.ControlLookup;
			/** Displays name of the quote booking incident */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows the quote booking setup associated with the quote booking incident. */
			msdyn_quotebookingsetup: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quotebookingincident_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotebookingincident_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quotebookingincident_Information */
		Body: LuckyMokey.Formmsdyn_quotebookingincident_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotebookingincident {
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