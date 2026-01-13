//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormApplication_User {
		interface tab_SUMMARY_TAB_Sections {
			/** Account Information */
			onpremise_account_information: DevKit.Controls.Section;
			/** User Information */
			user_information: DevKit.Controls.Section;
		}
		/** Summary */
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			/** Summary */
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** The identifier for the application. This is used to access data in another application. */
			ApplicationId: DevKit.Controls.String;
			/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
			ApplicationIdUri: DevKit.Controls.String;
			/** This is the application directory object Id. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Controls.String;
			/** Full name of the user. */
			FullName: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
		}
		interface Navigation {
			/** Activities */
			navActivities: DevKit.Controls.NavigationItem;
		}
	}
	export class FormApplication_User extends DevKit.IForm {
		/**
		* Application User [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Application_User */
		Body: DevKit.FormApplication_User.Body;
		/** The Navigation of form Application_User */
		Navigation: DevKit.FormApplication_User.Navigation;
	}
	namespace FormUser {
		interface tab_ADMINISTRATION_TAB_Sections {
			/** Client Access License (CAL) Information */
			administration: DevKit.Controls.Section;
			/** E-mail Access Configuration */
			e_mail_configuration: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB_Sections {
			/** Direct Reports */
			DirectReports: DevKit.Controls.Section;
			/** Mailing Address */
			mailing_address: DevKit.Controls.Section;
			/** User Information */
			user_information_2: DevKit.Controls.Section;
		}
		interface tab_MobileOfflineProfile_TAB_Sections {
			/** Mobile Offline Access Information */
			mobileofflineaccessinfo: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			/** Account Information */
			online_account_information: DevKit.Controls.Section;
			/** Account Information */
			onpremise_account_information: DevKit.Controls.Section;
			/** Organization Information */
			organization_information: DevKit.Controls.Section;
			queue_information: DevKit.Controls.Section;
			/** Queue Information */
			queue_selection: DevKit.Controls.Section;
			/** SOCIAL PANE */
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			teams_information: DevKit.Controls.Section;
			/** User Information */
			user_information: DevKit.Controls.Section;
		}
		/** Administration */
		interface tab_ADMINISTRATION_TAB extends DevKit.Controls.ITab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		/** Details */
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		/** Mobile Offline Profile Details */
		interface tab_MobileOfflineProfile_TAB extends DevKit.Controls.ITab {
			Section: tab_MobileOfflineProfile_TAB_Sections;
		}
		/** Summary */
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			/** Administration */
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
			/** Details */
			DETAILS_TAB: tab_DETAILS_TAB;
			/** Mobile Offline Profile Details */
			MobileOfflineProfile_TAB: tab_MobileOfflineProfile_TAB;
			/** Summary */
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type of user. */
			AccessMode: DevKit.Controls.OptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** Shows the complete secondary address. */
			Address2_Composite: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
			CALType: DevKit.Controls.OptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Controls.String;
			/** Full name of the user. */
			FullName: DevKit.Controls.String;
			/** Home phone number for the user. */
			HomePhone: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			/** User invitation status. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			/** Mobile alert email address for the user. */
			MobileAlertEMail: DevKit.Controls.String;
			/** Items contained with a particular SystemUser. */
			MobileOfflineProfileId: DevKit.Controls.Lookup;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Controls.Lookup;
			/** Personal email address of the user. */
			PersonalEMailAddress: DevKit.Controls.String;
			/** User's position in hierarchical security model. */
			PositionId: DevKit.Controls.Lookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Controls.OptionSet;
			/** Preferred phone number for the user. */
			PreferredPhoneCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the default queue for the user. */
			QueueId: DevKit.Controls.Lookup;
			/** Title of the user. */
			Title: DevKit.Controls.String;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Controls.String;
		}
		interface Navigation {
			/** Activities */
			navActivities: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			/** Direct Reports */
			DirectReports: DevKit.Controls.Grid;
			/** Queues I'm a member of */
			PrivateQueuesSubGrid: DevKit.Controls.Grid;
			/** TEAMS */
			TeamsSubGrid: DevKit.Controls.Grid;
		}
	}
	export class FormUser extends DevKit.IForm {
		/**
		* User [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form User */
		Body: DevKit.FormUser.Body;
		/** The Navigation of form User */
		Navigation: DevKit.FormUser.Navigation;
		/** The Grid of form User */
		Grid: DevKit.FormUser.Grid;
	}
	namespace FormUser_form_Business {
		interface tab_ADMINISTRATION_TAB_Sections {
			/** Client Access License (CAL) Information */
			administration: DevKit.Controls.Section;
			/** E-mail Access Configuration */
			e_mail_configuration: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			/** Direct Reports */
			DirectReports: DevKit.Controls.Section;
			/** Mailing Address */
			mailing_address: DevKit.Controls.Section;
			/** Account Information */
			online_account_information: DevKit.Controls.Section;
			/** Account Information */
			onpremise_account_information: DevKit.Controls.Section;
			/** Organization Information */
			organization_information: DevKit.Controls.Section;
			/** Teams */
			TEAMS_TAB: DevKit.Controls.Section;
			/** User Information */
			user_information: DevKit.Controls.Section;
		}
		/** Administration */
		interface tab_ADMINISTRATION_TAB extends DevKit.Controls.ITab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		/** Summary */
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			/** Administration */
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
			/** Summary */
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type of user. */
			AccessMode: DevKit.Controls.OptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
			CALType: DevKit.Controls.OptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Controls.String;
			/** Full name of the user. */
			FullName: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			/** User invitation status. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Controls.String;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Controls.Lookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Controls.OptionSet;
			/** Title of the user. */
			Title: DevKit.Controls.String;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Controls.String;
		}
		interface Navigation {
			/** Activities */
			navActivities: DevKit.Controls.NavigationItem;
			/** Background Processes */
			navAsyncOperations: DevKit.Controls.NavigationItem;
			/** Audit History */
			navAudit: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
			/** Field Security Profiles */
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem;
			/** Work Hours */
			navMonthlyCalendar: DevKit.Controls.NavigationItem;
			/** Process Sessions */
			navProcessSessions: DevKit.Controls.NavigationItem;
			/** Resource Groups */
			navResourceGroups: DevKit.Controls.NavigationItem;
			/** Security Roles */
			navRoles: DevKit.Controls.NavigationItem;
			/** Services */
			navServices: DevKit.Controls.NavigationItem;
			/** Teams */
			navTeams: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			/** Direct Reports */
			DirectReports: DevKit.Controls.Grid;
			/** TEAMS */
			TeamsSubGrid: DevKit.Controls.Grid;
		}
	}
	export class FormUser_form_Business extends DevKit.IForm {
		/**
		* User form – Business [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form User_form_Business */
		Body: DevKit.FormUser_form_Business.Body;
		/** The Navigation of form User_form_Business */
		Navigation: DevKit.FormUser_form_Business.Navigation;
		/** The Grid of form User_form_Business */
		Grid: DevKit.FormUser_form_Business.Grid;
	}
}
declare namespace OptionSet {
	namespace SystemUser {
		enum AccessMode {
			/** Administrative = 1*/
			Administrative = 1,
			/** Delegated_Admin = 5*/
			Delegated_Admin = 5,
			/** Non_interactive = 4*/
			Non_interactive = 4,
			/** Read = 2*/
			Read = 2,
			/** Read_Write = 0*/
			Read_Write = 0,
			/** Support_User = 3*/
			Support_User = 3
		}
		enum Address1_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address1_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum AzureState {
			/** Exists = 0*/
			Exists = 0,
			/** Not_found_or_hard_deleted = 2*/
			Not_found_or_hard_deleted = 2,
			/** Soft_deleted = 1*/
			Soft_deleted = 1
		}
		enum CALType {
			/** Administrative = 1*/
			Administrative = 1,
			/** Basic = 2*/
			Basic = 2,
			/** Device_Basic = 4*/
			Device_Basic = 4,
			/** Device_Enterprise = 8*/
			Device_Enterprise = 8,
			/** Device_Essential = 6*/
			Device_Essential = 6,
			/** Device_Professional = 3*/
			Device_Professional = 3,
			/** Enterprise = 7*/
			Enterprise = 7,
			/** Essential = 5*/
			Essential = 5,
			/** Field_Service = 11*/
			Field_Service = 11,
			/** Professional = 0*/
			Professional = 0,
			/** Project_Service = 12*/
			Project_Service = 12,
			/** Sales = 9*/
			Sales = 9,
			/** Service = 10*/
			Service = 10
		}
		enum DeletedState {
			/** Not_deleted = 0*/
			Not_deleted = 0,
			/** Soft_deleted = 1*/
			Soft_deleted = 1
		}
		enum EmailRouterAccessApproval {
			/** Approved = 1*/
			Approved = 1,
			/** Empty = 0*/
			Empty = 0,
			/** Pending_Approval = 2*/
			Pending_Approval = 2,
			/** Rejected = 3*/
			Rejected = 3
		}
		enum IncomingEmailDeliveryMethod {
			/** Forward_Mailbox = 3*/
			Forward_Mailbox = 3,
			/** Microsoft_Dynamics_365_for_Outlook = 1*/
			Microsoft_Dynamics_365_for_Outlook = 1,
			/** None = 0*/
			None = 0,
			/** Server_Side_Synchronization_or_Email_Router = 2*/
			Server_Side_Synchronization_or_Email_Router = 2
		}
		enum InviteStatusCode {
			/** Invitation_Accepted = 4*/
			Invitation_Accepted = 4,
			/** Invitation_Expired = 3*/
			Invitation_Expired = 3,
			/** Invitation_Near_Expired = 2*/
			Invitation_Near_Expired = 2,
			/** Invitation_Not_Sent = 0*/
			Invitation_Not_Sent = 0,
			/** Invitation_Rejected = 5*/
			Invitation_Rejected = 5,
			/** Invitation_Revoked = 6*/
			Invitation_Revoked = 6,
			/** Invited = 1*/
			Invited = 1
		}
		enum OutgoingEmailDeliveryMethod {
			/** Microsoft_Dynamics_365_for_Outlook = 1*/
			Microsoft_Dynamics_365_for_Outlook = 1,
			/** None = 0*/
			None = 0,
			/** Server_Side_Synchronization_or_Email_Router = 2*/
			Server_Side_Synchronization_or_Email_Router = 2
		}
		enum PreferredAddressCode {
			/** Mailing_Address = 1*/
			Mailing_Address = 1,
			/** Other_Address = 2*/
			Other_Address = 2
		}
		enum PreferredEmailCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum PreferredPhoneCode {
			/** Home_Phone = 3*/
			Home_Phone = 3,
			/** Main_Phone = 1*/
			Main_Phone = 1,
			/** Mobile_Phone = 4*/
			Mobile_Phone = 4,
			/** Other_Phone = 2*/
			Other_Phone = 2
		}
		enum SystemManagedUserType {
			/** Agentic_User = 3*/
			Agentic_User = 3,
			/** C2_User = 1*/
			C2_User = 1,
			/** Entra_User = 0*/
			Entra_User = 0,
			/** Impersonable_Stub_User = 2*/
			Impersonable_Stub_User = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}