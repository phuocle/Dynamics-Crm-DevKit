//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormApplication_User {
		interface tab_SUMMARY_TAB_Sections {
			onpremise_account_information: DevKit.Controls.Section;
			user_information: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
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
			/** Type of user - Application user or Bot application user */
			msdyn_AgentType: DevKit.Controls.OptionSet;
			/** Application ID of the bot. */
			msdyn_BotApplicationId: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Controls.Boolean;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormApplication_User extends DevKit.IForm {
		/**
		* Application User [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Application_User */
		Body: DevKit.FormApplication_User.Body;
		/** The Footer section of form Application_User */
		Footer: DevKit.FormApplication_User.Footer;
		/** The Process of form Application_User */
		Process: DevKit.FormApplication_User.Process;
		/** The SidePanes of form Application_User */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSystemUser_Information {
		interface tab_addresses_Sections {
			address_preference: DevKit.Controls.Section;
			mailing_address: DevKit.Controls.Section;
			other_address: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			administration: DevKit.Controls.Section;
			e_mail_configuration: DevKit.Controls.Section;
			online_account_information: DevKit.Controls.Section;
			onpremise_account_information: DevKit.Controls.Section;
			organization_information: DevKit.Controls.Section;
			queue_selection: DevKit.Controls.Section;
			user_information: DevKit.Controls.Section;
		}
		interface tab_tab_recordwall_Sections {
			tab_recordwall_section_1: DevKit.Controls.Section;
		}
		interface tab_addresses extends DevKit.Controls.ITab {
			Section: tab_addresses_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_tab_recordwall extends DevKit.Controls.ITab {
			Section: tab_tab_recordwall_Sections;
		}
		interface Tabs {
			addresses: tab_addresses;
			general: tab_general;
			tab_recordwall: tab_tab_recordwall;
		}
		interface Body {
			Tab: Tabs;
			/** Type of user. */
			AccessMode: DevKit.Controls.OptionSet;
			/** City name for address 1. */
			Address1_City: DevKit.Controls.String;
			/** Country/region name in address 1. */
			Address1_Country: DevKit.Controls.String;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Controls.String;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Controls.String;
			/** Second line for entering address 1 information. */
			Address1_Line2: DevKit.Controls.String;
			/** Third line for entering address 1 information. */
			Address1_Line3: DevKit.Controls.String;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** City name for address 2. */
			Address2_City: DevKit.Controls.String;
			/** Country/region name in address 2. */
			Address2_Country: DevKit.Controls.String;
			/** First line for entering address 2 information. */
			Address2_Line1: DevKit.Controls.String;
			/** Second line for entering address 2 information. */
			Address2_Line2: DevKit.Controls.String;
			/** Third line for entering address 2 information. */
			Address2_Line3: DevKit.Controls.String;
			/** ZIP Code or postal code for address 2. */
			Address2_PostalCode: DevKit.Controls.String;
			/** State or province for address 2. */
			Address2_StateOrProvince: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
			CALType: DevKit.Controls.OptionSet;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Controls.String;
			/** First name of the user. */
			FirstName: DevKit.Controls.String;
			/** Home phone number for the user. */
			HomePhone: DevKit.Controls.String;
			/** Incoming email delivery method for the user. */
			IncomingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			/** User invitation status. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			/** Last name of the user. */
			LastName: DevKit.Controls.String;
			/** Mobile alert email address for the user. */
			MobileAlertEMail: DevKit.Controls.String;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Controls.String;
			/** Unique identifier for Configuration associated with User. */
			msdyusd_USDConfigurationId: DevKit.Controls.Lookup;
			/** Outgoing email delivery method for the user. */
			OutgoingEmailDeliveryMethod: DevKit.Controls.OptionSet;
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
			/** Site at which the user is located. */
			SiteId: DevKit.Controls.Lookup;
			/** Unique identifier of the territory to which the user is assigned. */
			TerritoryId: DevKit.Controls.Lookup;
			/** Title of the user. */
			Title: DevKit.Controls.String;
			WebResource_RecordWall: DevKit.Controls.WebResource;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Controls.Boolean;
		}
		interface Navigation {
			nav_msdyn_accountmanager_quote: DevKit.Controls.NavigationItem,
			nav_msdyn_accountmanager_salesorder: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_expense_manager: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_project_projectmanager: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_projectapproval_ApprovedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_projectapproval_Manager: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_resourcerequest_claimedby: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_resourcerequest_requestedby: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_timeentry_manager: DevKit.Controls.NavigationItem,
			nav_msdyusd_systemuser_msdyusd_usersettings_User: DevKit.Controls.NavigationItem,
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem,
			navResourceGroups: DevKit.Controls.NavigationItem,
			navRoles: DevKit.Controls.NavigationItem,
			navServices: DevKit.Controls.NavigationItem,
			navTeams: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSystemUser_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SystemUser_Information */
		Body: DevKit.FormSystemUser_Information.Body;
		/** The Footer section of form SystemUser_Information */
		Footer: DevKit.FormSystemUser_Information.Footer;
		/** The Navigation of form SystemUser_Information */
		Navigation: DevKit.FormSystemUser_Information.Navigation;
		/** The Process of form SystemUser_Information */
		Process: DevKit.FormSystemUser_Information.Process;
		/** The SidePanes of form SystemUser_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormUser {
		interface tab_ADMINISTRATION_TAB_Sections {
			administration: DevKit.Controls.Section;
			Email_configuration: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB_Sections {
			mailing_address: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			user_information_2: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			online_account_information: DevKit.Controls.Section;
			onpremise_account_information: DevKit.Controls.Section;
			organization_information: DevKit.Controls.Section;
			queue_selection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			teams_information: DevKit.Controls.Section;
			user_information: DevKit.Controls.Section;
		}
		interface tab_tab_6_Sections {
			SECTION_Skills: DevKit.Controls.Section;
			tab_6_section_2: DevKit.Controls.Section;
			tab_6_section_4: DevKit.Controls.Section;
			tab_6_section_5: DevKit.Controls.Section;
		}
		interface tab_usrstab_Sections {
			tab_5_section_2: DevKit.Controls.Section;
			tab_5_section_3: DevKit.Controls.Section;
			urstab_section_general: DevKit.Controls.Section;
		}
		interface tab_VirtualAgentDetailsTab_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_VirtualAgentSummaryTab_Sections {
			tab_7_section_1: DevKit.Controls.Section;
			tab_7_section_2: DevKit.Controls.Section;
		}
		interface tab_ADMINISTRATION_TAB extends DevKit.Controls.ITab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
			Section: tab_tab_6_Sections;
		}
		interface tab_usrstab extends DevKit.Controls.ITab {
			Section: tab_usrstab_Sections;
		}
		interface tab_VirtualAgentDetailsTab extends DevKit.Controls.ITab {
			Section: tab_VirtualAgentDetailsTab_Sections;
		}
		interface tab_VirtualAgentSummaryTab extends DevKit.Controls.ITab {
			Section: tab_VirtualAgentSummaryTab_Sections;
		}
		interface Tabs {
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
			DETAILS_TAB: tab_DETAILS_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
			tab_6: tab_tab_6;
			usrstab: tab_usrstab;
			VirtualAgentDetailsTab: tab_VirtualAgentDetailsTab;
			VirtualAgentSummaryTab: tab_VirtualAgentSummaryTab;
		}
		interface Body {
			Tab: Tabs;
			/** Type of user. */
			AccessMode: DevKit.Controls.OptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Controls.String;
			/** Latitude for address 1. */
			Address1_Latitude: DevKit.Controls.Double;
			/** Latitude for address 1. */
			Address1_Latitude1: DevKit.Controls.Double;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Controls.String;
			/** Longitude for address 1. */
			Address1_Longitude: DevKit.Controls.Double;
			/** Longitude for address 1. */
			Address1_Longitude1: DevKit.Controls.Double;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** Shows the complete secondary address. */
			Address2_Composite: DevKit.Controls.String;
			/** First line for entering address 2 information. */
			Address2_Line1: DevKit.Controls.String;
			/** The identifier for the application. This is used to access data in another application. */
			ApplicationId: DevKit.Controls.String;
			/** This is the application directory object Id. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
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
			/** Full name of the user. */
			FullName1: DevKit.Controls.String;
			/** Home phone number for the user. */
			HomePhone: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			/** User invitation status. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			mapcontrol: DevKit.Controls.Map;
			/** Mobile alert email address for the user. */
			MobileAlertEMail: DevKit.Controls.String;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Controls.String;
			/** Type of user - Application user or Bot application user */
			msdyn_AgentType: DevKit.Controls.OptionSet;
			/** Application ID of the bot. */
			msdyn_BotApplicationId: DevKit.Controls.String;
			/** BOT User Description */
			msdyn_BotDescription: DevKit.Controls.String;
			/** Indicates the type of bot */
			msdyn_BotProvider: DevKit.Controls.OptionSet;
			/** Capacity associated with the User. */
			msdyn_Capacity: DevKit.Controls.Integer;
			/** Capacity associated with the User. */
			msdyn_Capacity1: DevKit.Controls.Integer;
			/** Unique identifier for Presence associated with User. */
			msdyn_DefaultPresenceIdUser: DevKit.Controls.Lookup;
			/** Unique identifier for Configuration associated with User. */
			msdyusd_USDConfigurationId: DevKit.Controls.Lookup;
			/** Nickname of the user. */
			NickName: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Controls.Lookup;
			/** Personal email address of the user. */
			PersonalEMailAddress: DevKit.Controls.String;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Controls.OptionSet;
			/** Preferred phone number for the user. */
			PreferredPhoneCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the default queue for the user. */
			QueueId: DevKit.Controls.Lookup;
			/** Site at which the user is located. */
			SiteId: DevKit.Controls.Lookup;
			/** Unique identifier of the territory to which the user is assigned. */
			TerritoryId: DevKit.Controls.Lookup;
			/** Title of the user. */
			Title: DevKit.Controls.String;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Controls.Boolean;
		}
		interface Navigation {
			nav_msdyn_accountmanager_opportunity: DevKit.Controls.NavigationItem,
			nav_msdyn_accountmanager_quote: DevKit.Controls.NavigationItem,
			nav_msdyn_accountmanager_salesorder: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_agreement_SalesPerson: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_expense_manager: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_fieldservicesystemjob_OwnerId: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_project_projectmanager: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_projectapproval_ApprovedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_projectapproval_Manager: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_purchaseorder_ApprovedRejectedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_purchaseorder_OrderedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_purchaseorderreceipt_ReceivedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_resourcerequest_claimedby: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_resourcerequest_requestedby: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_rma_ApprovedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_rmareceipt_ReceivedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_rtv_ApprovedDeclinedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_rtv_ReturnedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_systemuserschedulersetting_User: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_timeentry_manager: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_timeoffrequest_Approvedby: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_workorder_ClosedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_workorder_DispatchedBy: DevKit.Controls.NavigationItem,
			nav_msdyn_systemuser_msdyn_workorder_SalesPerson: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem,
			navMonthlyCalendar: DevKit.Controls.NavigationItem,
			navResourceGroups: DevKit.Controls.NavigationItem,
			navRoles: DevKit.Controls.NavigationItem,
			navServices: DevKit.Controls.NavigationItem,
			navTeams: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			BookableResources: DevKit.Controls.Grid;
			CapacityProfilesSubgrid: DevKit.Controls.Grid;
			LiveEngagementQueues: DevKit.Controls.Grid;
			OmnichannelQueues: DevKit.Controls.Grid;
			TeamsSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormUser extends DevKit.IForm {
		/**
		* User [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form User */
		Body: DevKit.FormUser.Body;
		/** The Footer section of form User */
		Footer: DevKit.FormUser.Footer;
		/** The Navigation of form User */
		Navigation: DevKit.FormUser.Navigation;
		/** The Process of form User */
		Process: DevKit.FormUser.Process;
		/** The Grid of form User */
		Grid: DevKit.FormUser.Grid;
		/** The SidePanes of form User */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormUser_form_Business {
		interface tab_ADMINISTRATION_TAB_Sections {
			administration: DevKit.Controls.Section;
			e_mail_configuration: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			DirectReports: DevKit.Controls.Section;
			mailing_address: DevKit.Controls.Section;
			online_account_information: DevKit.Controls.Section;
			onpremise_account_information: DevKit.Controls.Section;
			organization_information: DevKit.Controls.Section;
			TEAMS_TAB: DevKit.Controls.Section;
			user_information: DevKit.Controls.Section;
		}
		interface tab_ADMINISTRATION_TAB extends DevKit.Controls.ITab {
			Section: tab_ADMINISTRATION_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			ADMINISTRATION_TAB: tab_ADMINISTRATION_TAB;
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
		interface Footer extends DevKit.Controls.IFooter {
			/** Information about whether the user is enabled. */
			IsDisabled: DevKit.Controls.Boolean;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem,
			navMonthlyCalendar: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navResourceGroups: DevKit.Controls.NavigationItem,
			navRoles: DevKit.Controls.NavigationItem,
			navServices: DevKit.Controls.NavigationItem,
			navTeams: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			DirectReports: DevKit.Controls.Grid;
			TeamsSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormUser_form_Business extends DevKit.IForm {
		/**
		* User form – Business [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form User_form_Business */
		Body: DevKit.FormUser_form_Business.Body;
		/** The Footer section of form User_form_Business */
		Footer: DevKit.FormUser_form_Business.Footer;
		/** The Navigation of form User_form_Business */
		Navigation: DevKit.FormUser_form_Business.Navigation;
		/** The Process of form User_form_Business */
		Process: DevKit.FormUser_form_Business.Process;
		/** The Grid of form User_form_Business */
		Grid: DevKit.FormUser_form_Business.Grid;
		/** The SidePanes of form User_form_Business */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormUser_Information_Form {
		interface tab_UserInfoTab_Sections {
			user_information: DevKit.Controls.Section;
		}
		interface tab_UserInfoTab extends DevKit.Controls.ITab {
			Section: tab_UserInfoTab_Sections;
		}
		interface Tabs {
			UserInfoTab: tab_UserInfoTab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			mapcontrol: DevKit.Controls.Map;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormUser_Information_Form extends DevKit.IForm {
		/**
		* User Information Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form User_Information_Form */
		Body: DevKit.FormUser_Information_Form.Body;
		/** The Process of form User_Information_Form */
		Process: DevKit.FormUser_Information_Form.Process;
		/** The SidePanes of form User_Information_Form */
		SidePanes: DevKit.SidePanes;
	}
	class SystemUserApi {
		/**
		* DynamicsCrm.DevKit SystemUserApi
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
		/** Type of user. */
		AccessMode: OptionSet.SystemUser.AccessMode;
		/** Active Directory object GUID for the system user. */
		readonly ActiveDirectoryGuid: string;
		/** Unique identifier for address 1. */
		Address1_AddressId: string;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: OptionSet.SystemUser.Address1_AddressTypeCode;
		/** City name for address 1. */
		Address1_City: string;
		/** Shows the complete primary address. */
		readonly Address1_Composite: string;
		/** Country/region name in address 1. */
		Address1_Country: string;
		/** County name for address 1. */
		Address1_County: string;
		/** Fax number for address 1. */
		Address1_Fax: string;
		/** Latitude for address 1. */
		Address1_Latitude: number;
		/** First line for entering address 1 information. */
		Address1_Line1: string;
		/** Second line for entering address 1 information. */
		Address1_Line2: string;
		/** Third line for entering address 1 information. */
		Address1_Line3: string;
		/** Longitude for address 1. */
		Address1_Longitude: number;
		/** Name to enter for address 1. */
		Address1_Name: string;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: string;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: string;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: OptionSet.SystemUser.Address1_ShippingMethodCode;
		/** State or province for address 1. */
		Address1_StateOrProvince: string;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: string;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: string;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: string;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: string;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: number;
		/** Unique identifier for address 2. */
		Address2_AddressId: string;
		/** Type of address for address 2, such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: OptionSet.SystemUser.Address2_AddressTypeCode;
		/** City name for address 2. */
		Address2_City: string;
		/** Shows the complete secondary address. */
		readonly Address2_Composite: string;
		/** Country/region name in address 2. */
		Address2_Country: string;
		/** County name for address 2. */
		Address2_County: string;
		/** Fax number for address 2. */
		Address2_Fax: string;
		/** Latitude for address 2. */
		Address2_Latitude: number;
		/** First line for entering address 2 information. */
		Address2_Line1: string;
		/** Second line for entering address 2 information. */
		Address2_Line2: string;
		/** Third line for entering address 2 information. */
		Address2_Line3: string;
		/** Longitude for address 2. */
		Address2_Longitude: number;
		/** Name to enter for address 2. */
		Address2_Name: string;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: string;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: string;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: OptionSet.SystemUser.Address2_ShippingMethodCode;
		/** State or province for address 2. */
		Address2_StateOrProvince: string;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: string;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: string;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: string;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: string;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: number;
		/** The identifier for the application. This is used to access data in another application. */
		ApplicationId: string;
		/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
		readonly ApplicationIdUri: string;
		/** This is the application directory object Id. */
		readonly AzureActiveDirectoryObjectId: string;
		/** Date and time when the user was set as soft deleted in Azure. */
		readonly AzureDeletedOn_UtcDateAndTime: Date;
		/** Azure state of user */
		AzureState: OptionSet.SystemUser.AzureState;
		/** Unique identifier of the business unit with which the user is associated. */
		BusinessUnitId: string;
		/** Fiscal calendar associated with the user. */
		CalendarId: string;
		/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
		CALType: OptionSet.SystemUser.CALType;
		/** Unique identifier of the user who created the user. */
		readonly CreatedBy: string;
		/** Date and time when the user was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the systemuser. */
		readonly CreatedOnBehalfBy: string;
		/** Indicates if default outlook filters have been populated. */
		readonly DefaultFiltersPopulated: boolean;
		/** Select the mailbox associated with this user. */
		readonly DefaultMailbox: string;
		/** Type a default folder name for the user's OneDrive For Business location. */
		readonly DefaultOdbFolderName: string;
		/** User delete state */
		readonly DeletedState: OptionSet.SystemUser.DeletedState;
		/** Reason for disabling the user. */
		readonly DisabledReason: string;
		/** Whether to display the user in service views. */
		DisplayInServiceViews: boolean;
		/** Active Directory domain of which the user is a member. */
		DomainName: string;
		/** Shows the status of the primary email address. */
		EmailRouterAccessApproval: OptionSet.SystemUser.EmailRouterAccessApproval;
		/** Employee identifier for the user. */
		EmployeeId: string;
		/** Shows the default image for the record. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Exchange rate for the currency associated with the systemuser with respect to the base currency. */
		readonly ExchangeRate: number;
		/** First name of the user. */
		FirstName: string;
		/** Full name of the user. */
		readonly FullName: string;
		/** Government identifier for the user. */
		GovernmentId: string;
		/** Home phone number for the user. */
		HomePhone: string;
		/** For internal use only. */
		readonly IdentityId: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Incoming email delivery method for the user. */
		IncomingEmailDeliveryMethod: OptionSet.SystemUser.IncomingEmailDeliveryMethod;
		/** Internal email address for the user. */
		InternalEMailAddress: string;
		/** User invitation status. */
		InviteStatusCode: OptionSet.SystemUser.InviteStatusCode;
		/** Information about whether the user is an AD user. */
		readonly IsActiveDirectoryUser: boolean;
		/** Information about whether the user is enabled. */
		IsDisabled: boolean;
		/** Shows the status of approval of the email address by O365 Admin. */
		readonly IsEmailAddressApprovedByO365Admin: boolean;
		/** Check if user is an integration user. */
		IsIntegrationUser: boolean;
		/** Information about whether the user is licensed. */
		IsLicensed: boolean;
		/** Information about whether the user is synced with the directory. */
		IsSyncWithDirectory: boolean;
		/** Job title of the user. */
		JobTitle: string;
		/** Last name of the user. */
		LastName: string;
		/** Time stamp of the latest update for the user */
		readonly LatestUpdateTime_UtcDateAndTime: Date;
		/** Middle name of the user. */
		MiddleName: string;
		/** Mobile alert email address for the user. */
		MobileAlertEMail: string;
		/** Items contained with a particular SystemUser. */
		MobileOfflineProfileId: string;
		/** Mobile phone number for the user. */
		MobilePhone: string;
		/** Unique identifier of the user who last modified the user. */
		readonly ModifiedBy: string;
		/** Date and time when the user was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the systemuser. */
		readonly ModifiedOnBehalfBy: string;
		/** Type of user - Application user or Bot application user */
		msdyn_AgentType: OptionSet.SystemUser.msdyn_AgentType;
		/** Application ID of the bot. */
		msdyn_BotApplicationId: string;
		/** BOT User Description */
		msdyn_BotDescription: string;
		/** Bot User Endpoint */
		msdyn_BotEndpoint: string;
		/** Bot handle */
		msdyn_bothandle: string;
		/** Indicates the type of bot */
		msdyn_BotProvider: OptionSet.SystemUser.msdyn_BotProvider;
		/** Bot User Secret Keys */
		msdyn_BotSecretKeys: string;
		/** Capacity associated with the User. */
		msdyn_Capacity: number;
		/** Unique identifier for Presence associated with User. */
		msdyn_DefaultPresenceIdUser: string;
		/** Describes whether user is opted out or not */
		msdyn_gdproptout: boolean;
		/** Field to bind grid wrapper control */
		msdyn_gridwrappercontrolfield: string;
		/** Environment Id of the CDS environment that owns the bot user. */
		msdyn_OwningEnvironmentId: string;
		msdyn_phonenumberid: string;
		/** Type of user - CRM or BOT user */
		msdyn_UserType: OptionSet.SystemUser.msdyn_UserType;
		/** Unique identifier for Configuration associated with User. */
		msdyusd_USDConfigurationId: string;
		/** Nickname of the user. */
		NickName: string;
		/** Unique identifier of the organization associated with the user. */
		readonly OrganizationId: string;
		/** Outgoing email delivery method for the user. */
		OutgoingEmailDeliveryMethod: OptionSet.SystemUser.OutgoingEmailDeliveryMethod;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the manager of the user. */
		ParentSystemUserId: string;
		/** For internal use only. */
		PassportHi: number;
		/** For internal use only. */
		PassportLo: number;
		/** Personal email address of the user. */
		PersonalEMailAddress: string;
		/** URL for the Website on which a photo of the user is located. */
		PhotoUrl: string;
		/** User's position in hierarchical security model. */
		PositionId: string;
		/** Preferred address for the user. */
		PreferredAddressCode: OptionSet.SystemUser.PreferredAddressCode;
		/** Preferred email address for the user. */
		PreferredEmailCode: OptionSet.SystemUser.PreferredEmailCode;
		/** Preferred phone number for the user. */
		PreferredPhoneCode: OptionSet.SystemUser.PreferredPhoneCode;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Unique identifier of the default queue for the user. */
		QueueId: string;
		/** Salutation for correspondence with the user. */
		Salutation: string;
		/** Check if user is a setup user. */
		SetupUser: boolean;
		/** SharePoint Work Email Address */
		SharePointEmailAddress: string;
		/** Site at which the user is located. */
		SiteId: string;
		/** Skill set of the user. */
		Skills: string;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Unique identifier for the user. */
		SystemUserId: string;
		/** Unique identifier of the territory to which the user is assigned. */
		TerritoryId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Title of the user. */
		Title: string;
		/** Unique identifier of the currency associated with the systemuser. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Shows the type of user license. */
		UserLicenseType: number;
		/**  User PUID User Identifiable Information */
		readonly UserPuid: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the user. */
		readonly VersionNumber: number;
		/** Windows Live ID */
		WindowsLiveID: string;
		/** User's Yammer login email address */
		YammerEmailAddress: string;
		/** User's Yammer ID */
		YammerUserId: string;
		/** Pronunciation of the first name of the user, written in phonetic hiragana or katakana characters. */
		YomiFirstName: string;
		/** Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters. */
		readonly YomiFullName: string;
		/** Pronunciation of the last name of the user, written in phonetic hiragana or katakana characters. */
		YomiLastName: string;
		/** Pronunciation of the middle name of the user, written in phonetic hiragana or katakana characters. */
		YomiMiddleName: string;
		readonly FormattedValue: {
			/** Type of user. */
			readonly AccessMode: string;
			/** Active Directory object GUID for the system user. */
			readonly ActiveDirectoryGuid: string;
			/** Unique identifier for address 1. */
			readonly Address1_AddressId: string;
			/** Type of address for address 1, such as billing, shipping, or primary address. */
			readonly Address1_AddressTypeCode: string;
			/** City name for address 1. */
			readonly Address1_City: string;
			/** Shows the complete primary address. */
			readonly Address1_Composite: string;
			/** Country/region name in address 1. */
			readonly Address1_Country: string;
			/** County name for address 1. */
			readonly Address1_County: string;
			/** Fax number for address 1. */
			readonly Address1_Fax: string;
			/** Latitude for address 1. */
			readonly Address1_Latitude: string;
			/** First line for entering address 1 information. */
			readonly Address1_Line1: string;
			/** Second line for entering address 1 information. */
			readonly Address1_Line2: string;
			/** Third line for entering address 1 information. */
			readonly Address1_Line3: string;
			/** Longitude for address 1. */
			readonly Address1_Longitude: string;
			/** Name to enter for address 1. */
			readonly Address1_Name: string;
			/** ZIP Code or postal code for address 1. */
			readonly Address1_PostalCode: string;
			/** Post office box number for address 1. */
			readonly Address1_PostOfficeBox: string;
			/** Method of shipment for address 1. */
			readonly Address1_ShippingMethodCode: string;
			/** State or province for address 1. */
			readonly Address1_StateOrProvince: string;
			/** First telephone number associated with address 1. */
			readonly Address1_Telephone1: string;
			/** Second telephone number associated with address 1. */
			readonly Address1_Telephone2: string;
			/** Third telephone number associated with address 1. */
			readonly Address1_Telephone3: string;
			/** United Parcel Service (UPS) zone for address 1. */
			readonly Address1_UPSZone: string;
			/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
			readonly Address1_UTCOffset: string;
			/** Unique identifier for address 2. */
			readonly Address2_AddressId: string;
			/** Type of address for address 2, such as billing, shipping, or primary address. */
			readonly Address2_AddressTypeCode: string;
			/** City name for address 2. */
			readonly Address2_City: string;
			/** Shows the complete secondary address. */
			readonly Address2_Composite: string;
			/** Country/region name in address 2. */
			readonly Address2_Country: string;
			/** County name for address 2. */
			readonly Address2_County: string;
			/** Fax number for address 2. */
			readonly Address2_Fax: string;
			/** Latitude for address 2. */
			readonly Address2_Latitude: string;
			/** First line for entering address 2 information. */
			readonly Address2_Line1: string;
			/** Second line for entering address 2 information. */
			readonly Address2_Line2: string;
			/** Third line for entering address 2 information. */
			readonly Address2_Line3: string;
			/** Longitude for address 2. */
			readonly Address2_Longitude: string;
			/** Name to enter for address 2. */
			readonly Address2_Name: string;
			/** ZIP Code or postal code for address 2. */
			readonly Address2_PostalCode: string;
			/** Post office box number for address 2. */
			readonly Address2_PostOfficeBox: string;
			/** Method of shipment for address 2. */
			readonly Address2_ShippingMethodCode: string;
			/** State or province for address 2. */
			readonly Address2_StateOrProvince: string;
			/** First telephone number associated with address 2. */
			readonly Address2_Telephone1: string;
			/** Second telephone number associated with address 2. */
			readonly Address2_Telephone2: string;
			/** Third telephone number associated with address 2. */
			readonly Address2_Telephone3: string;
			/** United Parcel Service (UPS) zone for address 2. */
			readonly Address2_UPSZone: string;
			/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
			readonly Address2_UTCOffset: string;
			/** The identifier for the application. This is used to access data in another application. */
			readonly ApplicationId: string;
			/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
			readonly ApplicationIdUri: string;
			/** This is the application directory object Id. */
			readonly AzureActiveDirectoryObjectId: string;
			/** Date and time when the user was set as soft deleted in Azure. */
			readonly AzureDeletedOn_UtcDateAndTime: string;
			/** Azure state of user */
			readonly AzureState: string;
			/** Unique identifier of the business unit with which the user is associated. */
			readonly BusinessUnitId: string;
			/** Fiscal calendar associated with the user. */
			readonly CalendarId: string;
			/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
			readonly CALType: string;
			/** Unique identifier of the user who created the user. */
			readonly CreatedBy: string;
			/** Date and time when the user was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the systemuser. */
			readonly CreatedOnBehalfBy: string;
			/** Indicates if default outlook filters have been populated. */
			readonly DefaultFiltersPopulated: string;
			/** Select the mailbox associated with this user. */
			readonly DefaultMailbox: string;
			/** Type a default folder name for the user's OneDrive For Business location. */
			readonly DefaultOdbFolderName: string;
			/** User delete state */
			readonly DeletedState: string;
			/** Reason for disabling the user. */
			readonly DisabledReason: string;
			/** Whether to display the user in service views. */
			readonly DisplayInServiceViews: string;
			/** Active Directory domain of which the user is a member. */
			readonly DomainName: string;
			/** Shows the status of the primary email address. */
			readonly EmailRouterAccessApproval: string;
			/** Employee identifier for the user. */
			readonly EmployeeId: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Exchange rate for the currency associated with the systemuser with respect to the base currency. */
			readonly ExchangeRate: string;
			/** First name of the user. */
			readonly FirstName: string;
			/** Full name of the user. */
			readonly FullName: string;
			/** Government identifier for the user. */
			readonly GovernmentId: string;
			/** Home phone number for the user. */
			readonly HomePhone: string;
			/** For internal use only. */
			readonly IdentityId: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Incoming email delivery method for the user. */
			readonly IncomingEmailDeliveryMethod: string;
			/** Internal email address for the user. */
			readonly InternalEMailAddress: string;
			/** User invitation status. */
			readonly InviteStatusCode: string;
			/** Information about whether the user is an AD user. */
			readonly IsActiveDirectoryUser: string;
			/** Information about whether the user is enabled. */
			readonly IsDisabled: string;
			/** Shows the status of approval of the email address by O365 Admin. */
			readonly IsEmailAddressApprovedByO365Admin: string;
			/** Check if user is an integration user. */
			readonly IsIntegrationUser: string;
			/** Information about whether the user is licensed. */
			readonly IsLicensed: string;
			/** Information about whether the user is synced with the directory. */
			readonly IsSyncWithDirectory: string;
			/** Job title of the user. */
			readonly JobTitle: string;
			/** Last name of the user. */
			readonly LastName: string;
			/** Time stamp of the latest update for the user */
			readonly LatestUpdateTime_UtcDateAndTime: string;
			/** Middle name of the user. */
			readonly MiddleName: string;
			/** Mobile alert email address for the user. */
			readonly MobileAlertEMail: string;
			/** Items contained with a particular SystemUser. */
			readonly MobileOfflineProfileId: string;
			/** Mobile phone number for the user. */
			readonly MobilePhone: string;
			/** Unique identifier of the user who last modified the user. */
			readonly ModifiedBy: string;
			/** Date and time when the user was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the systemuser. */
			readonly ModifiedOnBehalfBy: string;
			/** Type of user - Application user or Bot application user */
			readonly msdyn_AgentType: string;
			/** Application ID of the bot. */
			readonly msdyn_BotApplicationId: string;
			/** BOT User Description */
			readonly msdyn_BotDescription: string;
			/** Bot User Endpoint */
			readonly msdyn_BotEndpoint: string;
			/** Bot handle */
			readonly msdyn_bothandle: string;
			/** Indicates the type of bot */
			readonly msdyn_BotProvider: string;
			/** Bot User Secret Keys */
			readonly msdyn_BotSecretKeys: string;
			/** Capacity associated with the User. */
			readonly msdyn_Capacity: string;
			/** Unique identifier for Presence associated with User. */
			readonly msdyn_DefaultPresenceIdUser: string;
			/** Describes whether user is opted out or not */
			readonly msdyn_gdproptout: string;
			/** Field to bind grid wrapper control */
			readonly msdyn_gridwrappercontrolfield: string;
			/** Environment Id of the CDS environment that owns the bot user. */
			readonly msdyn_OwningEnvironmentId: string;
			readonly msdyn_phonenumberid: string;
			/** Type of user - CRM or BOT user */
			readonly msdyn_UserType: string;
			/** Unique identifier for Configuration associated with User. */
			readonly msdyusd_USDConfigurationId: string;
			/** Nickname of the user. */
			readonly NickName: string;
			/** Unique identifier of the organization associated with the user. */
			readonly OrganizationId: string;
			/** Outgoing email delivery method for the user. */
			readonly OutgoingEmailDeliveryMethod: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the manager of the user. */
			readonly ParentSystemUserId: string;
			/** For internal use only. */
			readonly PassportHi: string;
			/** For internal use only. */
			readonly PassportLo: string;
			/** Personal email address of the user. */
			readonly PersonalEMailAddress: string;
			/** URL for the Website on which a photo of the user is located. */
			readonly PhotoUrl: string;
			/** User's position in hierarchical security model. */
			readonly PositionId: string;
			/** Preferred address for the user. */
			readonly PreferredAddressCode: string;
			/** Preferred email address for the user. */
			readonly PreferredEmailCode: string;
			/** Preferred phone number for the user. */
			readonly PreferredPhoneCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Unique identifier of the default queue for the user. */
			readonly QueueId: string;
			/** Salutation for correspondence with the user. */
			readonly Salutation: string;
			/** Check if user is a setup user. */
			readonly SetupUser: string;
			/** SharePoint Work Email Address */
			readonly SharePointEmailAddress: string;
			/** Site at which the user is located. */
			readonly SiteId: string;
			/** Skill set of the user. */
			readonly Skills: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Unique identifier for the user. */
			readonly SystemUserId: string;
			/** Unique identifier of the territory to which the user is assigned. */
			readonly TerritoryId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Title of the user. */
			readonly Title: string;
			/** Unique identifier of the currency associated with the systemuser. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Shows the type of user license. */
			readonly UserLicenseType: string;
			/**  User PUID User Identifiable Information */
			readonly UserPuid: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the user. */
			readonly VersionNumber: string;
			/** Windows Live ID */
			readonly WindowsLiveID: string;
			/** User's Yammer login email address */
			readonly YammerEmailAddress: string;
			/** User's Yammer ID */
			readonly YammerUserId: string;
			/** Pronunciation of the first name of the user, written in phonetic hiragana or katakana characters. */
			readonly YomiFirstName: string;
			/** Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters. */
			readonly YomiFullName: string;
			/** Pronunciation of the last name of the user, written in phonetic hiragana or katakana characters. */
			readonly YomiLastName: string;
			/** Pronunciation of the middle name of the user, written in phonetic hiragana or katakana characters. */
			readonly YomiMiddleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace SystemUser {
		enum AccessMode {
			/** 1 */
			Administrative,
			/** 5 */
			Delegated_Admin,
			/** 4 */
			Non_interactive,
			/** 2 */
			Read,
			/** 0 */
			Read_Write,
			/** 3 */
			Support_User
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
		enum AzureState {
			/** 0 */
			Exists,
			/** 2 */
			Not_found_or_hard_deleted,
			/** 1 */
			Soft_deleted
		}
		enum CALType {
			/** 1 */
			Administrative,
			/** 2 */
			Basic,
			/** 4 */
			Device_Basic,
			/** 8 */
			Device_Enterprise,
			/** 6 */
			Device_Essential,
			/** 3 */
			Device_Professional,
			/** 7 */
			Enterprise,
			/** 5 */
			Essential,
			/** 11 */
			Field_Service,
			/** 0 */
			Professional,
			/** 12 */
			Project_Service,
			/** 9 */
			Sales,
			/** 10 */
			Service
		}
		enum DeletedState {
			/** 0 */
			Not_deleted,
			/** 1 */
			Soft_deleted
		}
		enum EmailRouterAccessApproval {
			/** 1 */
			Approved,
			/** 0 */
			Empty,
			/** 2 */
			Pending_Approval,
			/** 3 */
			Rejected
		}
		enum IncomingEmailDeliveryMethod {
			/** 3 */
			Forward_Mailbox,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 0 */
			None,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router
		}
		enum InviteStatusCode {
			/** 4 */
			Invitation_Accepted,
			/** 3 */
			Invitation_Expired,
			/** 2 */
			Invitation_Near_Expired,
			/** 0 */
			Invitation_Not_Sent,
			/** 5 */
			Invitation_Rejected,
			/** 6 */
			Invitation_Revoked,
			/** 1 */
			Invited
		}
		enum msdyn_AgentType {
			/** 192350000 */
			Application_user,
			/** 192350001 */
			Bot_application_user
		}
		enum msdyn_BotProvider {
			/** 192350002 */
			None,
			/** 192350001 */
			Other,
			/** 192350000 */
			Virtual_Agent
		}
		enum msdyn_UserType {
			/** 192350001 */
			BOT_User,
			/** 192350000 */
			CRM_User
		}
		enum OutgoingEmailDeliveryMethod {
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook,
			/** 0 */
			None,
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
			/** 3 */
			Home_Phone,
			/** 1 */
			Main_Phone,
			/** 4 */
			Mobile_Phone,
			/** 2 */
			Other_Phone
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