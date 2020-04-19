//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSharePointDocumentLocation_Information {
		interface tab_general_Sections {
			_272EB814_0769_5EBE_3ED1_E95A0B16853E: DevKit.Form.Controls.ControlSection;
			url_option: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Absolute URL of the SharePoint document location. */
			AbsoluteURL: DevKit.Form.Controls.ControlString;
			/** Description of the SharePoint document location record. */
			Description: DevKit.Form.Controls.ControlString;
			/** Location type of the SharePoint document location. */
			LocationType: DevKit.Form.Controls.ControlOptionSet;
			/** Name of the SharePoint document location record. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the SharePoint document location record. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the parent site or location. */
			ParentSiteOrLocation: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the SharePoint document location record is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Relative URL of the SharePoint document location. */
			RelativeUrl: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the SharePoint document location record. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navSubDocumentLocations: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormSharePointDocumentLocation_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form SharePointDocumentLocation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SharePointDocumentLocation_Information */
		Body: LuckyMokey.FormSharePointDocumentLocation_Information.Body;
		/** The Footer section of form SharePointDocumentLocation_Information */
		Footer: LuckyMokey.FormSharePointDocumentLocation_Information.Footer;
		/** The Navigation of form SharePointDocumentLocation_Information */
		Navigation: LuckyMokey.FormSharePointDocumentLocation_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace SharePointDocumentLocation {
		enum LocationType {
			/** 0 */
			General,
			/** 1 */
			Dedicated_for_OneNote_Integration
		}
		enum ServiceType {
			/** 0 */
			SharePoint,
			/** 1 */
			OneDrive,
			/** 2 */
			Shared_with_me,
			/** 3 */
			MS_Teams
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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