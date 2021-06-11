//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_projectteam_Information {
		interface tab_General_Sections {
			_DC58EBA6_D467_4B9A_AAD8_0C471EBDE29F: DevKit.Controls.Section;
			General_section_2: DevKit.Controls.Section;
		}
		interface tab_Proposed_Resources_Sections {
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_Resource_Requirement_Sections {
			RequirementSection: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface tab_Proposed_Resources extends DevKit.Controls.ITab {
			Section: tab_Proposed_Resources_Sections;
		}
		interface tab_Resource_Requirement extends DevKit.Controls.ITab {
			Section: tab_Resource_Requirement_Sections;
		}
		interface Tabs {
			General: tab_General;
			Proposed_Resources: tab_Proposed_Resources;
			Resource_Requirement: tab_Resource_Requirement;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_ProposalScheduleBoard: DevKit.Controls.IFrame;
			/** Select whether the team member is billable */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the resource. */
			msdyn_bookableresourceid: DevKit.Controls.Lookup;
			/** Enter the resource team membership start date. */
			msdyn_From: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The organizational unit of the resource performing the work. */
			msdyn_organizationalunit: DevKit.Controls.Lookup;
			/** Select the project that this team members are part of. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select whether the team member can approve time and expenses. */
			msdyn_ProjectApprover: DevKit.Controls.Boolean;
			/** Select the role this team member is playing in this team. */
			msdyn_resourcecategory: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Requirement associated with Project Team Member. */
			msdyn_resourcerequirementid: DevKit.Controls.Lookup;
			/** Enter a description of the role for this team member. */
			msdyn_RoleDescription: DevKit.Controls.String;
			/** Enter the end date of the resource membership in a team. */
			msdyn_To: DevKit.Controls.Date;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid: DevKit.Controls.NavigationItem
		}
		interface quickForm_Requirement_General_Body {
			msdyn_allocationmethod: DevKit.Controls.QuickView;
			msdyn_city: DevKit.Controls.QuickView;
			msdyn_costprice: DevKit.Controls.QuickView;
			msdyn_country: DevKit.Controls.QuickView;
			msdyn_duration: DevKit.Controls.QuickView;
			msdyn_fromdate: DevKit.Controls.QuickView;
			msdyn_percentage: DevKit.Controls.QuickView;
			msdyn_requeststatus: DevKit.Controls.QuickView;
			msdyn_stateorprovince: DevKit.Controls.QuickView;
			msdyn_todate: DevKit.Controls.QuickView;
			msdyn_type: DevKit.Controls.QuickView;
			msdyn_workhourtemplate: DevKit.Controls.QuickView;
			TransactionCurrencyId: DevKit.Controls.QuickView;
		}
		interface quickForm_ProjectTeam_Requirement_Competencies_Body {
		}
		interface quickForm_ProjectTeam_Requirement_Others_Body {
		}
		interface quickForm_Requirement_General extends DevKit.Controls.IQuickView {
			Body: quickForm_Requirement_General_Body;
		}
		interface quickForm_ProjectTeam_Requirement_Competencies extends DevKit.Controls.IQuickView {
			Body: quickForm_ProjectTeam_Requirement_Competencies_Body;
		}
		interface quickForm_ProjectTeam_Requirement_Others extends DevKit.Controls.IQuickView {
			Body: quickForm_ProjectTeam_Requirement_Others_Body;
		}
		interface QuickForm {
			Requirement_General: quickForm_Requirement_General;
			ProjectTeam_Requirement_Competencies: quickForm_ProjectTeam_Requirement_Competencies;
			ProjectTeam_Requirement_Others: quickForm_ProjectTeam_Requirement_Others;
		}
	}
	class Formmsdyn_projectteam_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projectteam_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projectteam_Information */
		Body: DevKit.Formmsdyn_projectteam_Information.Body;
		/** The Navigation of form msdyn_projectteam_Information */
		Navigation: DevKit.Formmsdyn_projectteam_Information.Navigation;
		/** The QuickForm of form msdyn_projectteam_Information */
		QuickForm: DevKit.Formmsdyn_projectteam_Information.QuickForm;
	}
	namespace Formmsdyn_projectteam_New_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the allocation method used to book resources on the project (full capacity, percentage, and so on). */
			msdyn_allocationmethod: DevKit.Controls.OptionSet;
			/** Shows the resource. */
			msdyn_bookableresourceid: DevKit.Controls.Lookup;
			/** Enter the resource team membership start date. */
			msdyn_From: DevKit.Controls.Date;
			/** Duplicate for resource requirement */
			msdyn_hours: DevKit.Controls.Decimal;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The organizational unit of the resource performing the work. */
			msdyn_organizationalunit: DevKit.Controls.Lookup;
			/** Duplicate for resource requirement */
			msdyn_percentage: DevKit.Controls.Decimal;
			/** Select the project that this team members are part of. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select whether the team member can approve time and expenses. */
			msdyn_ProjectApprover: DevKit.Controls.Boolean;
			/** Select the role this team member is playing in this team. */
			msdyn_resourcecategory: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Requirement associated with Project Team Member. */
			msdyn_resourcerequirementid: DevKit.Controls.Lookup;
			/** Enter the end date of the resource membership in a team. */
			msdyn_To: DevKit.Controls.Date;
		}
	}
	class Formmsdyn_projectteam_New_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projectteam_New_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projectteam_New_Form */
		Body: DevKit.Formmsdyn_projectteam_New_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_projectteam {
		enum msdyn_allocationmethod {
			/** 192350003 */
			By_Hours_Distribute_evenly,
			/** 192350005 */
			By_Hours_Front_load,
			/** 192350001 */
			Full_Capacity,
			/** 192350000 */
			None,
			/** 192350004 */
			Percentage_Capacity
		}
		enum msdyn_BillingType {
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350000 */
			Non_Chargeable,
			/** 192350003 */
			Not_Available
		}
		enum msdyn_MembershipStatus {
			/** 2 */
			Assigned,
			/** 3 */
			Declined,
			/** 1 */
			Requested
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
//{'JsForm':['Information','msdyn_projectteam New_Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}