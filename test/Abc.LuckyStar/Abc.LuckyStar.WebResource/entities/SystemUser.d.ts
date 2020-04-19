//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormApplication_User {
		interface tab_SUMMARY_TAB_Sections {
			onpremise_account_information: DevKit.Form.Controls.ControlSection;
			user_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** The identifier for the application. This is used to access data in another application. */
			ApplicationId: DevKit.Form.Controls.ControlString;
			/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
			ApplicationIdUri: DevKit.Form.Controls.ControlString;
			/** This is the application directory object Id. */
			AzureActiveDirectoryObjectId: DevKit.Form.Controls.ControlString;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Form.Controls.ControlString;
			/** Full name of the user. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormApplication_User extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Application_User
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Application_User */
		Body: LuckyStar.FormApplication_User.Body;
		/** The Footer section of form Application_User */
		Footer: LuckyStar.FormApplication_User.Footer;
	}
	namespace FormUser {
		interface tab_SUMMARY_TAB_Sections {
			onpremise_account_information: DevKit.Form.Controls.ControlSection;
			online_account_information: DevKit.Form.Controls.ControlSection;
			user_information: DevKit.Form.Controls.ControlSection;
			SOCIAL_PANE_TAB: DevKit.Form.Controls.ControlSection;
			teams_information: DevKit.Form.Controls.ControlSection;
			organization_information: DevKit.Form.Controls.ControlSection;
			queue_selection: DevKit.Form.Controls.ControlSection;
			queue_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DETAILS_TAB_Sections {
			user_information_2: DevKit.Form.Controls.ControlSection;
			mailing_address: DevKit.Form.Controls.ControlSection;
			DirectReports: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ADMINISTRATION_TAB_Sections {
			administration: DevKit.Form.Controls.ControlSection;
			e_mail_configuration: DevKit.Form.Controls.ControlSection;
		}
		interface tab_MobileOfflineProfile_TAB_Sections {
			mobileofflineaccessinfo: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_DETAILS_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_ADMINISTRATION_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		interface tab_MobileOfflineProfile_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_MobileOfflineProfile_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
			DETAILS_TAB: tab_DETAILS_TAB;
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
			MobileOfflineProfile_TAB: tab_MobileOfflineProfile_TAB;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			TeamsSubGrid: DevKit.Form.Controls.ControlGrid;
			PrivateQueuesSubGrid: DevKit.Form.Controls.ControlGrid;
			DirectReports: DevKit.Form.Controls.ControlGrid;
			/** Type of user. */
			AccessMode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Form.Controls.ControlString;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Form.Controls.ControlString;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Form.Controls.ControlString;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Form.Controls.ControlString;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Form.Controls.ControlString;
			/** Shows the complete secondary address. */
			Address2_Composite: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** License type of user. */
			CALType: DevKit.Form.Controls.ControlOptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Form.Controls.ControlLookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Form.Controls.ControlString;
			/** Full name of the user. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Home phone number for the user. */
			HomePhone: DevKit.Form.Controls.ControlString;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Form.Controls.ControlString;
			/** User invitation status. */
			InviteStatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Mobile alert email address for the user. */
			MobileAlertEMail: DevKit.Form.Controls.ControlString;
			/** Items contained with a particular SystemUser. */
			MobileOfflineProfileId: DevKit.Form.Controls.ControlLookup;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Form.Controls.ControlLookup;
			/** Personal email address of the user. */
			PersonalEMailAddress: DevKit.Form.Controls.ControlString;
			/** User's position in hierarchical security model. */
			PositionId: DevKit.Form.Controls.ControlLookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Form.Controls.ControlOptionSet;
			/** Preferred phone number for the user. */
			PreferredPhoneCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the default queue for the user. */
			QueueId: DevKit.Form.Controls.ControlLookup;
			/** Title of the user. */
			Title: DevKit.Form.Controls.ControlString;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormUser extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form User
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form User */
		Body: LuckyStar.FormUser.Body;
		/** The Footer section of form User */
		Footer: LuckyStar.FormUser.Footer;
	}
	namespace FormUser_form_Business {
		interface tab_SUMMARY_TAB_Sections {
			onpremise_account_information: DevKit.Form.Controls.ControlSection;
			online_account_information: DevKit.Form.Controls.ControlSection;
			user_information: DevKit.Form.Controls.ControlSection;
			organization_information: DevKit.Form.Controls.ControlSection;
			mailing_address: DevKit.Form.Controls.ControlSection;
			TEAMS_TAB: DevKit.Form.Controls.ControlSection;
			DirectReports: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ADMINISTRATION_TAB_Sections {
			administration: DevKit.Form.Controls.ControlSection;
			e_mail_configuration: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_ADMINISTRATION_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			TeamsSubGrid: DevKit.Form.Controls.ControlGrid;
			DirectReports: DevKit.Form.Controls.ControlGrid;
			/** Type of user. */
			AccessMode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Form.Controls.ControlString;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** License type of user. */
			CALType: DevKit.Form.Controls.ControlOptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Form.Controls.ControlLookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Form.Controls.ControlString;
			/** Full name of the user. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Form.Controls.ControlString;
			/** User invitation status. */
			InviteStatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Form.Controls.ControlLookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Form.Controls.ControlOptionSet;
			/** Title of the user. */
			Title: DevKit.Form.Controls.ControlString;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Form.Controls.ControlBoolean;
		}
		interface Navigation {
			navTeams: DevKit.Form.Controls.ControlNavigationItem,
			navRoles: DevKit.Form.Controls.ControlNavigationItem,
			navFieldSecurityProfiles: DevKit.Form.Controls.ControlNavigationItem,
			navServices: DevKit.Form.Controls.ControlNavigationItem,
			navResourceGroups: DevKit.Form.Controls.ControlNavigationItem,
			navMonthlyCalendar: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormUser_form_Business extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form User_form_Business
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form User_form_Business */
		Body: LuckyStar.FormUser_form_Business.Body;
		/** The Footer section of form User_form_Business */
		Footer: LuckyStar.FormUser_form_Business.Footer;
		/** The Navigation of form User_form_Business */
		Navigation: LuckyStar.FormUser_form_Business.Navigation;
	}
}
declare namespace OptionSet {
	namespace SystemUser {
		enum AccessMode {
			/** 0 */
			Read_Write,
			/** 1 */
			Administrative,
			/** 2 */
			Read,
			/** 3 */
			Support_User,
			/** 4 */
			Non_interactive,
			/** 5 */
			Delegated_Admin
		}
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum CALType {
			/** 0 */
			Professional,
			/** 1 */
			Administrative,
			/** 2 */
			Basic,
			/** 3 */
			Device_Professional,
			/** 4 */
			Device_Basic,
			/** 5 */
			Essential,
			/** 6 */
			Device_Essential,
			/** 7 */
			Enterprise,
			/** 8 */
			Device_Enterprise,
			/** 9 */
			Sales,
			/** 10 */
			Service,
			/** 11 */
			Field_Service,
			/** 12 */
			Project_Service
		}
		enum EmailRouterAccessApproval {
			/** 0 */
			Empty,
			/** 1 */
			Approved,
			/** 2 */
			Pending_Approval,
			/** 3 */
			Rejected
		}
		enum IncomingEmailDeliveryMethod {
			/** 0 */
			None,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router,
			/** 3 */
			Forward_Mailbox
		}
		enum InviteStatusCode {
			/** 0 */
			Invitation_Not_Sent,
			/** 1 */
			Invited,
			/** 2 */
			Invitation_Near_Expired,
			/** 3 */
			Invitation_Expired,
			/** 4 */
			Invitation_Accepted,
			/** 5 */
			Invitation_Rejected,
			/** 6 */
			Invitation_Revoked
		}
		enum OutgoingEmailDeliveryMethod {
			/** 0 */
			None,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router
		}
		enum PreferredAddressCode {
			/** 1 */
			Mailing_Address,
			/** 2 */
			Other_Address
		}
		enum PreferredEmailCode {
			/** 1 */
			Default_Value
		}
		enum PreferredPhoneCode {
			/** 1 */
			Main_Phone,
			/** 2 */
			Other_Phone,
			/** 3 */
			Home_Phone,
			/** 4 */
			Mobile_Phone
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
//{'JsForm':['Application User','User','User form – Business'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}