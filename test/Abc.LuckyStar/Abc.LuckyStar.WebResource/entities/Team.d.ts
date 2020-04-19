//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormTeam {
		interface Header {
			/** Unique identifier of the default queue for the team. */
			QueueId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_general_Sections {
			General: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
			TeamMembers: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			Members: DevKit.Form.Controls.ControlGrid;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Form.Controls.ControlLookup;
			/** The Azure active directory object Id for a group. */
			AzureActiveDirectoryObjectId: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** Description of the team. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the team. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the team type. */
			TeamType: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormTeam extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Team
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Team */
		Body: LuckyStar.FormTeam.Body;
		/** The Header section of form Team */
		Header: LuckyStar.FormTeam.Header;
	}
	namespace FormTeam_form_Business {
		interface tab_general_Sections {
			General: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
			TeamMembers: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			Members: DevKit.Form.Controls.ControlGrid;
			/** Unique identifier of the user primary responsible for the team. */
			AdministratorId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the business unit with which the team is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** Description of the team. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the team. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the team type. */
			TeamType: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navMembers: DevKit.Form.Controls.ControlNavigationItem,
			navRoles: DevKit.Form.Controls.ControlNavigationItem,
			navFieldSecurityProfiles: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormTeam_form_Business extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Team_form_Business
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Team_form_Business */
		Body: LuckyStar.FormTeam_form_Business.Body;
		/** The Navigation of form Team_form_Business */
		Navigation: LuckyStar.FormTeam_form_Business.Navigation;
	}
}
declare namespace OptionSet {
	namespace Team {
		enum TeamType {
			/** 0 */
			Owner,
			/** 1 */
			Access,
			/** 2 */
			AAD_Security_Group,
			/** 3 */
			AAD_Office_Group
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
//{'JsForm':['Team','Team form – Business'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}