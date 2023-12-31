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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_projectteam_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
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
		/** The Process of form msdyn_projectteam_Information */
		Process: DevKit.Formmsdyn_projectteam_Information.Process;
		/** The SidePanes of form msdyn_projectteam_Information */
		SidePanes: DevKit.SidePanes;
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
		* New Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projectteam_New_Form */
		Body: DevKit.Formmsdyn_projectteam_New_Form.Body;
	}
	class msdyn_projectteamApi {
		/**
		* DynamicsCrm.DevKit msdyn_projectteamApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the allocation method used to book resources on the project (full capacity, percentage, and so on). */
		msdyn_allocationmethod: OptionSet.msdyn_projectteam.msdyn_allocationmethod;
		/** Shows the number of applicants for this project team. */
		readonly msdyn_Applicantcount: number;
		/** Last Updated time of rollup field Applicant count. */
		readonly msdyn_Applicantcount_Date_UtcDateAndTime: Date;
		/** State of rollup field Applicant count. */
		readonly msdyn_Applicantcount_State: number;
		/** Shows if there are applicants available for this project team. */
		readonly msdyn_Applicantsavailable: boolean;
		/** Type the total assigned hours for project team member. */
		msdyn_AssignedHours: number;
		/** Select whether the team member is billable */
		msdyn_BillingType: OptionSet.msdyn_projectteam.msdyn_BillingType;
		/** Shows the resource. */
		msdyn_bookableresourceid: string;
		/** Shows the calendar used for staffing this project team. */
		msdyn_calendarId: string;
		/** Type the system description. */
		msdyn_Description: string;
		/** Enter the resource team membership start date. */
		msdyn_From_UtcDateOnly: Date;
		/** Hard Booked Hours */
		msdyn_hardbookedhours: number;
		/** Duplicate for resource requirement */
		msdyn_hours: number;
		/** Shows the number of hours required of this team member on the project. */
		msdyn_HoursRequested: number;
		/** Shows the membership status of this project team member. */
		msdyn_MembershipStatus: OptionSet.msdyn_projectteam.msdyn_MembershipStatus;
		/** The id of the project team member in MS Project Client. */
		msdyn_msprojectclientid: string;
		/** Type the name of the custom entity. */
		msdyn_name: string;
		/** Shows the number of resources requested. */
		msdyn_Number: number;
		/** The organizational unit of the resource performing the work. */
		msdyn_organizationalunit: string;
		/** Duplicate for resource requirement */
		msdyn_percentage: number;
		/** Select the project that this team members are part of. */
		msdyn_project: string;
		/** Select whether the team member can approve time and expenses. */
		msdyn_ProjectApprover: boolean;
		/** Unique identifier for entity instances */
		msdyn_projectteamId: string;
		/** Required hours of team member from team member requirement */
		msdyn_requiredhours: number;
		/** Select the role this team member is playing in this team. */
		msdyn_resourcecategory: string;
		/** Unique identifier for Resource Requirement associated with Project Team Member. */
		msdyn_resourcerequirementid: string;
		/** Enter a description of the role for this team member. */
		msdyn_RoleDescription: string;
		/** Soft Booked Hours */
		msdyn_softbookedhours: number;
		/** Enter the end date of the resource membership in a team. */
		msdyn_To_UtcDateOnly: Date;
		/** Template to use for generic resource's schedule. Will be ignored if its a user or facility resource */
		msdyn_worktemplate: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Shows the status of the project team. */
		statecode: OptionSet.msdyn_projectteam.statecode;
		/** Reason for the status of the Project Team */
		statuscode: OptionSet.msdyn_projectteam.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the allocation method used to book resources on the project (full capacity, percentage, and so on). */
			readonly msdyn_allocationmethod: string;
			/** Shows the number of applicants for this project team. */
			readonly msdyn_Applicantcount: string;
			/** Last Updated time of rollup field Applicant count. */
			readonly msdyn_Applicantcount_Date_UtcDateAndTime: string;
			/** State of rollup field Applicant count. */
			readonly msdyn_Applicantcount_State: string;
			/** Shows if there are applicants available for this project team. */
			readonly msdyn_Applicantsavailable: string;
			/** Type the total assigned hours for project team member. */
			readonly msdyn_AssignedHours: string;
			/** Select whether the team member is billable */
			readonly msdyn_BillingType: string;
			/** Shows the resource. */
			readonly msdyn_bookableresourceid: string;
			/** Shows the calendar used for staffing this project team. */
			readonly msdyn_calendarId: string;
			/** Type the system description. */
			readonly msdyn_Description: string;
			/** Enter the resource team membership start date. */
			readonly msdyn_From_UtcDateOnly: string;
			/** Hard Booked Hours */
			readonly msdyn_hardbookedhours: string;
			/** Duplicate for resource requirement */
			readonly msdyn_hours: string;
			/** Shows the number of hours required of this team member on the project. */
			readonly msdyn_HoursRequested: string;
			/** Shows the membership status of this project team member. */
			readonly msdyn_MembershipStatus: string;
			/** The id of the project team member in MS Project Client. */
			readonly msdyn_msprojectclientid: string;
			/** Type the name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the number of resources requested. */
			readonly msdyn_Number: string;
			/** The organizational unit of the resource performing the work. */
			readonly msdyn_organizationalunit: string;
			/** Duplicate for resource requirement */
			readonly msdyn_percentage: string;
			/** Select the project that this team members are part of. */
			readonly msdyn_project: string;
			/** Select whether the team member can approve time and expenses. */
			readonly msdyn_ProjectApprover: string;
			/** Unique identifier for entity instances */
			readonly msdyn_projectteamId: string;
			/** Required hours of team member from team member requirement */
			readonly msdyn_requiredhours: string;
			/** Select the role this team member is playing in this team. */
			readonly msdyn_resourcecategory: string;
			/** Unique identifier for Resource Requirement associated with Project Team Member. */
			readonly msdyn_resourcerequirementid: string;
			/** Enter a description of the role for this team member. */
			readonly msdyn_RoleDescription: string;
			/** Soft Booked Hours */
			readonly msdyn_softbookedhours: string;
			/** Enter the end date of the resource membership in a team. */
			readonly msdyn_To_UtcDateOnly: string;
			/** Template to use for generic resource's schedule. Will be ignored if its a user or facility resource */
			readonly msdyn_worktemplate: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Shows the status of the project team. */
			readonly statecode: string;
			/** Reason for the status of the Project Team */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}