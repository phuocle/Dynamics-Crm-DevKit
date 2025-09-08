//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContact {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_DETAILS_TAB_Sections {
			billing_information: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			PERSONAL_INFORMATION: DevKit.Controls.Section;
			PERSONAL_NOTES_SECTION: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			CONTACT_INFORMATION: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			Anniversary: DevKit.Controls.Date;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			BirthDate: DevKit.Controls.Date;
			/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Type additional information to describe the contact, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
			FamilyStatusCode: DevKit.Controls.OptionSet;
			/** Type the fax number for the contact. */
			Fax: DevKit.Controls.String;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.String;
			/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			mapcontrol: DevKit.Controls.Map;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode1: DevKit.Controls.OptionSet;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			SpousesName: DevKit.Controls.String;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem;
			adx_contact_externalidentity: DevKit.Controls.NavigationItem;
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem;
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem;
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem;
			adx_webformsession_contact: DevKit.Controls.NavigationItem;
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			contact_adx_portalcomments: DevKit.Controls.NavigationItem;
			Contact_Appointments: DevKit.Controls.NavigationItem;
			contact_customer_contacts: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			contact_msfp_alerts: DevKit.Controls.NavigationItem;
			contact_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			contact_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
	}
	class FormContact extends DevKit.IForm {
		/**
		* Contact [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact */
		Body: DevKit.FormContact.Body;
		/** The Header section of form Contact */
		Header: DevKit.FormContact.Header;
		/** The Navigation of form Contact */
		Navigation: DevKit.FormContact.Navigation;
		/** The SidePanes of form Contact */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormContact_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
		}
		interface tab_administration_Sections {
			billing_information: DevKit.Controls.Section;
			contact_methods: DevKit.Controls.Section;
			internal_information: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			personal_information: DevKit.Controls.Section;
			professional_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			address: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			name: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_notes_and_activities_Sections {
			activities: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes_and_activities extends DevKit.Controls.ITab {
			Section: tab_notes_and_activities_Sections;
		}
		interface Tabs {
			administration: tab_administration;
			details: tab_details;
			general: tab_general;
			notes_and_activities: tab_notes_and_activities;
		}
		interface Body {
			Tab: Tabs;
			/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
			AccountRoleCode: DevKit.Controls.OptionSet;
			/** Select the primary address type. */
			Address1_AddressTypeCode: DevKit.Controls.OptionSet;
			/** Type the city for the primary address. */
			Address1_City: DevKit.Controls.String;
			/** Type the country or region for the primary address. */
			Address1_Country: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the second line of the primary address. */
			Address1_Line2: DevKit.Controls.String;
			/** Type the third line of the primary address. */
			Address1_Line3: DevKit.Controls.String;
			/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
			Address1_Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the state or province of the primary address. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** Type the main phone number associated with the primary address. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			Anniversary: DevKit.Controls.Date;
			/** Type the name of the contact's assistant. */
			AssistantName: DevKit.Controls.String;
			/** Type the phone number for the contact's assistant. */
			AssistantPhone: DevKit.Controls.String;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			BirthDate: DevKit.Controls.Date;
			/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Type the department or business unit where the contact works in the parent company or business. */
			Department: DevKit.Controls.String;
			/** Type additional information to describe the contact, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
			FamilyStatusCode: DevKit.Controls.OptionSet;
			/** Type the fax number for the contact. */
			Fax: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
			ManagerName: DevKit.Controls.String;
			/** Type the phone number for the contact's manager. */
			ManagerPhone: DevKit.Controls.String;
			/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
			MiddleName: DevKit.Controls.String;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
			Salutation: DevKit.Controls.String;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			SpousesName: DevKit.Controls.String;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
			/** Type a second phone number for this contact. */
			Telephone2: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem;
			adx_contact_externalidentity: DevKit.Controls.NavigationItem;
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem;
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem;
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem;
			adx_webformsession_contact: DevKit.Controls.NavigationItem;
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			contact_adx_portalcomments: DevKit.Controls.NavigationItem;
			Contact_Appointments: DevKit.Controls.NavigationItem;
			contact_customer_contacts: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			contact_msfp_alerts: DevKit.Controls.NavigationItem;
			contact_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			contact_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			contactactivitiesgrid: DevKit.Controls.Grid;
		}
	}
	class FormContact_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_Information */
		Body: DevKit.FormContact_Information.Body;
		/** The Header section of form Contact_Information */
		Header: DevKit.FormContact_Information.Header;
		/** The Navigation of form Contact_Information */
		Navigation: DevKit.FormContact_Information.Navigation;
		/** The Grid of form Contact_Information */
		Grid: DevKit.FormContact_Information.Grid;
		/** The SidePanes of form Contact_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormInvite_Web_Form {
		interface Tabs {
		}
		interface Body {
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem;
			adx_contact_externalidentity: DevKit.Controls.NavigationItem;
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem;
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem;
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem;
			adx_webformsession_contact: DevKit.Controls.NavigationItem;
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			contact_adx_portalcomments: DevKit.Controls.NavigationItem;
			Contact_Appointments: DevKit.Controls.NavigationItem;
			contact_customer_contacts: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			contact_msfp_alerts: DevKit.Controls.NavigationItem;
			contact_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			contact_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
	}
	class FormInvite_Web_Form extends DevKit.IForm {
		/**
		* Invite Web Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Invite_Web_Form */
		Body: DevKit.FormInvite_Web_Form.Body;
		/** The Navigation of form Invite_Web_Form */
		Navigation: DevKit.FormInvite_Web_Form.Navigation;
		/** The SidePanes of form Invite_Web_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPortal_Contact_Enhanced {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
		}
		interface tab_administration_Sections {
			billing_information: DevKit.Controls.Section;
			contact_methods: DevKit.Controls.Section;
			internal_information: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			personal_information: DevKit.Controls.Section;
			professional_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			address: DevKit.Controls.Section;
			contact_webrole_section: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			name: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_notes_and_activities_Sections {
			activities: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_web_authentication_Sections {
			_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_4: DevKit.Controls.Section;
			_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_5: DevKit.Controls.Section;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes_and_activities extends DevKit.Controls.ITab {
			Section: tab_notes_and_activities_Sections;
		}
		interface tab_web_authentication extends DevKit.Controls.ITab {
			Section: tab_web_authentication_Sections;
		}
		interface Tabs {
			administration: tab_administration;
			details: tab_details;
			general: tab_general;
			notes_and_activities: tab_notes_and_activities;
			web_authentication: tab_web_authentication;
		}
		interface Body {
			Tab: Tabs;
			/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
			AccountRoleCode: DevKit.Controls.OptionSet;
			/** Select the primary address type. */
			Address1_AddressTypeCode: DevKit.Controls.OptionSet;
			/** Type the city for the primary address. */
			Address1_City: DevKit.Controls.String;
			/** Type the country or region for the primary address. */
			Address1_Country: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the second line of the primary address. */
			Address1_Line2: DevKit.Controls.String;
			/** Type the third line of the primary address. */
			Address1_Line3: DevKit.Controls.String;
			/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
			Address1_Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the state or province of the primary address. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** Type the main phone number associated with the primary address. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Shows the current count of failed password attempts for the contact. */
			adx_identity_accessfailedcount: DevKit.Controls.Integer;
			/** Determines if the email is confirmed by the contact. */
			adx_identity_emailaddress1confirmed: DevKit.Controls.Boolean;
			/** Indicates that the contact can no longer sign in to the portal using the local account. */
			adx_identity_locallogindisabled: DevKit.Controls.Boolean;
			/** Determines if this contact will track failed access attempts and become locked after too many failed attempts. To prevent the contact from becoming locked, you can disable this setting. */
			adx_identity_lockoutenabled: DevKit.Controls.Boolean;
			/** Shows the moment in time when the locked contact becomes unlocked again. */
			adx_identity_lockoutenddate: DevKit.Controls.DateTime;
			/** Determines if web authentication is enabled for the contact. */
			adx_identity_logonenabled: DevKit.Controls.Boolean;
			/** Determines if the phone number is confirmed by the contact. */
			adx_identity_mobilephoneconfirmed: DevKit.Controls.Boolean;
			/** A token used to manage the web authentication session. */
			adx_identity_securitystamp: DevKit.Controls.String;
			/** Determines if two-factor authentication is enabled for the contact. */
			adx_identity_twofactorenabled: DevKit.Controls.Boolean;
			/** Shows the user identity for local web authentication. */
			adx_identity_username: DevKit.Controls.String;
			Adx_TimeZone: DevKit.Controls.Integer;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			Anniversary: DevKit.Controls.Date;
			/** Type the name of the contact's assistant. */
			AssistantName: DevKit.Controls.String;
			/** Type the phone number for the contact's assistant. */
			AssistantPhone: DevKit.Controls.String;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			BirthDate: DevKit.Controls.Date;
			/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Type the department or business unit where the contact works in the parent company or business. */
			Department: DevKit.Controls.String;
			/** Type additional information to describe the contact, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
			FamilyStatusCode: DevKit.Controls.OptionSet;
			/** Type the fax number for the contact. */
			Fax: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
			ManagerName: DevKit.Controls.String;
			/** Type the phone number for the contact's manager. */
			ManagerPhone: DevKit.Controls.String;
			/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
			MiddleName: DevKit.Controls.String;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
			Salutation: DevKit.Controls.String;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			SpousesName: DevKit.Controls.String;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
			/** Type a second phone number for this contact. */
			Telephone2: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem;
			adx_contact_externalidentity: DevKit.Controls.NavigationItem;
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem;
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem;
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem;
			adx_webformsession_contact: DevKit.Controls.NavigationItem;
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			contact_adx_portalcomments: DevKit.Controls.NavigationItem;
			Contact_Appointments: DevKit.Controls.NavigationItem;
			contact_customer_contacts: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			contact_msfp_alerts: DevKit.Controls.NavigationItem;
			contact_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			contact_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			adx_externalidentity: DevKit.Controls.Grid;
			contactactivitiesgrid: DevKit.Controls.Grid;
			grid_contact_mspp_webrole: DevKit.Controls.Grid;
		}
	}
	class FormPortal_Contact_Enhanced extends DevKit.IForm {
		/**
		* Portal Contact (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Portal_Contact_Enhanced */
		Body: DevKit.FormPortal_Contact_Enhanced.Body;
		/** The Header section of form Portal_Contact_Enhanced */
		Header: DevKit.FormPortal_Contact_Enhanced.Header;
		/** The Navigation of form Portal_Contact_Enhanced */
		Navigation: DevKit.FormPortal_Contact_Enhanced.Navigation;
		/** The Grid of form Portal_Contact_Enhanced */
		Grid: DevKit.FormPortal_Contact_Enhanced.Grid;
		/** The SidePanes of form Portal_Contact_Enhanced */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProfile_Web_Form_Enhanced {
		interface Tabs {
		}
		interface Body {
			Adx_OrganizationName: DevKit.Controls.String;
			adx_PublicProfileCopy: DevKit.Controls.String;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** User’s preferred portal language */
			mspp_userpreferredlcid: DevKit.Controls.OptionSet;
			/** Type the contact's nickname. */
			NickName: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
			/** Type the contact's professional or personal website or blog URL. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem;
			adx_contact_externalidentity: DevKit.Controls.NavigationItem;
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem;
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem;
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem;
			adx_webformsession_contact: DevKit.Controls.NavigationItem;
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			contact_adx_portalcomments: DevKit.Controls.NavigationItem;
			Contact_Appointments: DevKit.Controls.NavigationItem;
			contact_customer_contacts: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			contact_msfp_alerts: DevKit.Controls.NavigationItem;
			contact_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			contact_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
	}
	class FormProfile_Web_Form_Enhanced extends DevKit.IForm {
		/**
		* Profile Web Form (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Profile_Web_Form_Enhanced */
		Body: DevKit.FormProfile_Web_Form_Enhanced.Body;
		/** The Navigation of form Profile_Web_Form_Enhanced */
		Navigation: DevKit.FormProfile_Web_Form_Enhanced.Navigation;
		/** The SidePanes of form Profile_Web_Form_Enhanced */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProfile_Web_Form_Enhanced_Japanese {
		interface Tabs {
		}
		interface Body {
			Adx_OrganizationName: DevKit.Controls.String;
			adx_PublicProfileCopy: DevKit.Controls.String;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** User’s preferred portal language */
			mspp_userpreferredlcid: DevKit.Controls.OptionSet;
			/** Type the contact's nickname. */
			NickName: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
			/** Type the contact's professional or personal website or blog URL. */
			WebSiteUrl: DevKit.Controls.String;
			/** Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
			YomiFirstName: DevKit.Controls.String;
			/** Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
			YomiLastName: DevKit.Controls.String;
		}
		interface Navigation {
			account_primary_contact: DevKit.Controls.NavigationItem;
			adx_contact_externalidentity: DevKit.Controls.NavigationItem;
			adx_invitation_invitecontact: DevKit.Controls.NavigationItem;
			adx_invitation_invitercontact: DevKit.Controls.NavigationItem;
			adx_invitation_redeemedContact: DevKit.Controls.NavigationItem;
			adx_webformsession_contact: DevKit.Controls.NavigationItem;
			contact_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			contact_adx_portalcomments: DevKit.Controls.NavigationItem;
			Contact_Appointments: DevKit.Controls.NavigationItem;
			contact_customer_contacts: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			contact_msfp_alerts: DevKit.Controls.NavigationItem;
			contact_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			contact_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
	}
	class FormProfile_Web_Form_Enhanced_Japanese extends DevKit.IForm {
		/**
		* Profile Web Form (Enhanced) - Japanese [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Profile_Web_Form_Enhanced_Japanese */
		Body: DevKit.FormProfile_Web_Form_Enhanced_Japanese.Body;
		/** The Navigation of form Profile_Web_Form_Enhanced_Japanese */
		Navigation: DevKit.FormProfile_Web_Form_Enhanced_Japanese.Navigation;
		/** The SidePanes of form Profile_Web_Form_Enhanced_Japanese */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormContact_Quick_Create {
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
			/** Type the city for the primary address. */
			Address1_City: DevKit.Controls.String;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the second line of the primary address. */
			Address1_Line2: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Type additional information to describe the contact, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
		}
	}
	class FormContact_Quick_Create extends DevKit.IForm {
		/**
		* Contact Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_Quick_Create */
		Body: DevKit.FormContact_Quick_Create.Body;
	}
	class ContactApi {
		/**
		* DynamicsCrm.DevKit ContactApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>) : DevKit.ContactApi;
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the account with which the contact is associated. */
		readonly AccountId: string | null;
		/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
		AccountRoleCode: OptionSet.Contact.AccountRoleCode | null;
		/** Unique identifier for address 1. */
		Address1_AddressId: string | null;
		/** Select the primary address type. */
		Address1_AddressTypeCode: OptionSet.Contact.Address1_AddressTypeCode | null;
		/** Type the city for the primary address. */
		Address1_City: string | null;
		/** Shows the complete primary address. */
		readonly Address1_Composite: string | null;
		/** Type the country or region for the primary address. */
		Address1_Country: string | null;
		/** Type the county for the primary address. */
		Address1_County: string | null;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: string | null;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: OptionSet.Contact.Address1_FreightTermsCode | null;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: number | null;
		/** Type the first line of the primary address. */
		Address1_Line1: string | null;
		/** Type the second line of the primary address. */
		Address1_Line2: string | null;
		/** Type the third line of the primary address. */
		Address1_Line3: string | null;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: number | null;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: string | null;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: string | null;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: string | null;
		/** Type the name of the main contact at the account's primary address. */
		Address1_PrimaryContactName: string | null;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: OptionSet.Contact.Address1_ShippingMethodCode | null;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: string | null;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: string | null;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: string | null;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: string | null;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: string | null;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: number | null;
		/** Unique identifier for address 2. */
		Address2_AddressId: string | null;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: OptionSet.Contact.Address2_AddressTypeCode | null;
		/** Type the city for the secondary address. */
		Address2_City: string | null;
		/** Shows the complete secondary address. */
		readonly Address2_Composite: string | null;
		/** Type the country or region for the secondary address. */
		Address2_Country: string | null;
		/** Type the county for the secondary address. */
		Address2_County: string | null;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: string | null;
		/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
		Address2_FreightTermsCode: OptionSet.Contact.Address2_FreightTermsCode | null;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: number | null;
		/** Type the first line of the secondary address. */
		Address2_Line1: string | null;
		/** Type the second line of the secondary address. */
		Address2_Line2: string | null;
		/** Type the third line of the secondary address. */
		Address2_Line3: string | null;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: number | null;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: string | null;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: string | null;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: string | null;
		/** Type the name of the main contact at the account's secondary address. */
		Address2_PrimaryContactName: string | null;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: OptionSet.Contact.Address2_ShippingMethodCode | null;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: string | null;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: string | null;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: string | null;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: string | null;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address2_UPSZone: string | null;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: number | null;
		/** Unique identifier for address 3. */
		Address3_AddressId: string | null;
		/** Select the third address type. */
		Address3_AddressTypeCode: OptionSet.Contact.Address3_AddressTypeCode | null;
		/** Type the city for the 3rd address. */
		Address3_City: string | null;
		/** Shows the complete third address. */
		readonly Address3_Composite: string | null;
		/** the country or region for the 3rd address. */
		Address3_Country: string | null;
		/** Type the county for the third address. */
		Address3_County: string | null;
		/** Type the fax number associated with the third address. */
		Address3_Fax: string | null;
		/** Select the freight terms for the third address to make sure shipping orders are processed correctly. */
		Address3_FreightTermsCode: OptionSet.Contact.Address3_FreightTermsCode | null;
		/** Type the latitude value for the third address for use in mapping and other applications. */
		Address3_Latitude: number | null;
		/** the first line of the 3rd address. */
		Address3_Line1: string | null;
		/** the second line of the 3rd address. */
		Address3_Line2: string | null;
		/** the third line of the 3rd address. */
		Address3_Line3: string | null;
		/** Type the longitude value for the third address for use in mapping and other applications. */
		Address3_Longitude: number | null;
		/** Type a descriptive name for the third address, such as Corporate Headquarters. */
		Address3_Name: string | null;
		/** the ZIP Code or postal code for the 3rd address. */
		Address3_PostalCode: string | null;
		/** the post office box number of the 3rd address. */
		Address3_PostOfficeBox: string | null;
		/** Type the name of the main contact at the account's third address. */
		Address3_PrimaryContactName: string | null;
		/** Select a shipping method for deliveries sent to this address. */
		Address3_ShippingMethodCode: OptionSet.Contact.Address3_ShippingMethodCode | null;
		/** the state or province of the third address. */
		Address3_StateOrProvince: string | null;
		/** Type the main phone number associated with the third address. */
		Address3_Telephone1: string | null;
		/** Type a second phone number associated with the third address. */
		Address3_Telephone2: string | null;
		/** Type a third phone number associated with the primary address. */
		Address3_Telephone3: string | null;
		/** Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address3_UPSZone: string | null;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address3_UTCOffset: number | null;
		adx_ConfirmRemovePassword: boolean | null;
		Adx_CreatedByIPAddress: string | null;
		Adx_CreatedByUsername: string | null;
		/** Shows the current count of failed password attempts for the contact. */
		adx_identity_accessfailedcount: number | null;
		/** Determines if the email is confirmed by the contact. */
		adx_identity_emailaddress1confirmed: boolean | null;
		/** Indicates the last date and time the user successfully signed in to a portal. */
		adx_identity_lastsuccessfullogin_UtcDateAndTime: Date | null;
		/** Indicates that the contact can no longer sign in to the portal using the local account. */
		adx_identity_locallogindisabled: boolean | null;
		/** Determines if this contact will track failed access attempts and become locked after too many failed attempts. To prevent the contact from becoming locked, you can disable this setting. */
		adx_identity_lockoutenabled: boolean | null;
		/** Shows the moment in time when the locked contact becomes unlocked again. */
		adx_identity_lockoutenddate_UtcDateAndTime: Date | null;
		/** Determines if web authentication is enabled for the contact. */
		adx_identity_logonenabled: boolean | null;
		/** Determines if the phone number is confirmed by the contact. */
		adx_identity_mobilephoneconfirmed: boolean | null;
		adx_identity_newpassword: string | null;
		adx_identity_passwordhash: string | null;
		/** A token used to manage the web authentication session. */
		adx_identity_securitystamp: string | null;
		/** Determines if two-factor authentication is enabled for the contact. */
		adx_identity_twofactorenabled: boolean | null;
		/** Shows the user identity for local web authentication. */
		adx_identity_username: string | null;
		Adx_ModifiedByIPAddress: string | null;
		Adx_ModifiedByUsername: string | null;
		Adx_OrganizationName: string | null;
		/** User’s preferred portal LCID */
		adx_preferredlcid: number | null;
		adx_profilealert: boolean | null;
		adx_profilealertdate_UtcDateAndTime: Date | null;
		adx_profilealertinstructions: string | null;
		Adx_ProfileIsAnonymous: boolean | null;
		Adx_ProfileLastActivity_UtcDateAndTime: Date | null;
		adx_profilemodifiedon_UtcDateAndTime: Date | null;
		adx_PublicProfileCopy: string | null;
		Adx_TimeZone: number | null;
		/** For system use only. */
		readonly Aging30: number | null;
		/** Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly Aging30_Base: number | null;
		/** For system use only. */
		readonly Aging60: number | null;
		/** Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly Aging60_Base: number | null;
		/** For system use only. */
		readonly Aging90: number | null;
		/** Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly Aging90_Base: number | null;
		/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
		Anniversary_DateOnly: Date | null;
		/** Type the contact's annual income for use in profiling and financial analysis. */
		AnnualIncome: number | null;
		/** Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly AnnualIncome_Base: number | null;
		/** Type the name of the contact's assistant. */
		AssistantName: string | null;
		/** Type the phone number for the contact's assistant. */
		AssistantPhone: string | null;
		/** Enter the contact's birthday for use in customer gift programs or other communications. */
		BirthDate_DateOnly: Date | null;
		/** Type a second business phone number for this contact. */
		Business2: string | null;
		/** Type a callback phone number for this contact. */
		Callback: string | null;
		/** Type the names of the contact's children for reference in communications and client programs. */
		ChildrensNames: string | null;
		/** Type the company phone of the contact. */
		Company: string | null;
		/** Unique identifier of the contact. */
		ContactId: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
		CreditLimit: number | null;
		/** Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area. */
		readonly CreditLimit_Base: number | null;
		/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
		CreditOnHold: boolean | null;
		/** Select the size of the contact's company for segmentation and reporting purposes. */
		CustomerSizeCode: OptionSet.Contact.CustomerSizeCode | null;
		/** Select the category that best describes the relationship between the contact and your organization. */
		CustomerTypeCode: OptionSet.Contact.CustomerTypeCode | null;
		/** Type the department or business unit where the contact works in the parent company or business. */
		Department: string | null;
		/** Type additional information to describe the contact, such as an excerpt from the company's website. */
		Description: string | null;
		devkit_CategoryCode: Array<OptionSet.Contact.devkit_CategoryCode> | null;
		/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: boolean | null;
		/** Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters. */
		DoNotBulkPostalMail: boolean | null;
		/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
		DoNotEMail: boolean | null;
		/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
		DoNotFax: boolean | null;
		/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
		DoNotPhone: boolean | null;
		/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: boolean | null;
		/** Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives. */
		DoNotSendMM: boolean | null;
		/** Select the contact's highest level of education for use in segmentation and analysis. */
		EducationCode: OptionSet.Contact.EducationCode | null;
		/** Type the primary email address for the contact. */
		EMailAddress1: string | null;
		/** Type the secondary email address for the contact. */
		EMailAddress2: string | null;
		/** Type an alternate email address for the contact. */
		EMailAddress3: string | null;
		/** Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization. */
		EmployeeId: string | null;
		/** Shows the default image for the record. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Identifier for an external user. */
		ExternalUserIdentifier: string | null;
		/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
		FamilyStatusCode: OptionSet.Contact.FamilyStatusCode | null;
		/** Type the fax number for the contact. */
		Fax: string | null;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: string | null;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
		FollowEmail: boolean | null;
		/** Type the URL for the contact's FTP site to enable users to access data and share documents. */
		FtpSiteUrl: string | null;
		/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
		readonly FullName: string | null;
		/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		GenderCode: OptionSet.Contact.GenderCode | null;
		/** Type the passport number or other government ID for the contact for use in documents or reports. */
		GovernmentId: string | null;
		/** Select whether the contact has any children for reference in follow-up phone calls and other communications. */
		HasChildrenCode: OptionSet.Contact.HasChildrenCode | null;
		/** Type a second home phone number for this contact. */
		Home2: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Information about whether the contact was auto-created when promoting an email or an appointment. */
		readonly IsAutoCreate: boolean | null;
		/** Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes. */
		IsBackofficeCustomer: boolean | null;
		readonly IsPrivate: boolean | null;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: string | null;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: string | null;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date | null;
		/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: Date | null;
		/** Select the primary marketing source that directed the contact to your organization. */
		LeadSourceCode: OptionSet.Contact.LeadSourceCode | null;
		/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
		ManagerName: string | null;
		/** Type the phone number for the contact's manager. */
		ManagerPhone: string | null;
		/** Whether is only for marketing */
		MarketingOnly: boolean | null;
		/** Unique identifier of the master contact for merge. */
		readonly MasterId: string | null;
		/** Shows whether the account has been merged with a master contact. */
		readonly Merged: boolean | null;
		/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
		MiddleName: string | null;
		/** Type the mobile phone number for the contact. */
		MobilePhone: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier for Account associated with Contact. */
		msa_managingpartnerid: string | null;
		/** Indicates that the contact has opted out of web tracking. */
		msdyn_disablewebtracking: boolean | null;
		/** Indicates that the contact is considered a minor in their jurisdiction. */
		msdyn_isminor: boolean | null;
		/** Indicates that the contact is considered a minor in their jurisdiction and has parental consent. */
		msdyn_isminorwithparentalconsent: boolean | null;
		/** Indicates the date and time that the person agreed to the portal terms and conditions. */
		msdyn_portaltermsagreementdate_UtcDateAndTime: Date | null;
		/** User’s preferred portal language */
		mspp_userpreferredlcid: OptionSet.Contact.mspp_userpreferredlcid | null;
		/** Type the contact's nickname. */
		NickName: string | null;
		/** Type the number of children the contact has for reference in follow-up phone calls and other communications. */
		NumberOfChildren: number | null;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the contact. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the contact. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the contact. */
		readonly OwningUser: string | null;
		/** Type the pager number for the contact. */
		Pager: string | null;
		/** Unique identifier of the parent contact. */
		readonly ParentContactId: string | null;
		/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
		parentcustomerid_account: string | null;
		/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
		parentcustomerid_contact: string | null;
		/** Shows whether the contact participates in workflow rules. */
		ParticipatesInWorkflow: boolean | null;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: OptionSet.Contact.PaymentTermsCode | null;
		/** Select the preferred day of the week for service appointments. */
		PreferredAppointmentDayCode: OptionSet.Contact.PreferredAppointmentDayCode | null;
		/** Select the preferred time of day for service appointments. */
		PreferredAppointmentTimeCode: OptionSet.Contact.PreferredAppointmentTimeCode | null;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: OptionSet.Contact.PreferredContactMethodCode | null;
		/** Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact. */
		PreferredSystemUserId: string | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
		Salutation: string | null;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: OptionSet.Contact.ShippingMethodCode | null;
		/** Choose the service level agreement (SLA) that you want to apply to the Contact record. */
		SLAId: string | null;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string | null;
		/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
		SpousesName: string | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.Contact.StateCode | null;
		/** Select the contact's status. */
		StatusCode: OptionSet.Contact.StatusCode | null;
		/** For internal use only. */
		SubscriptionId: string | null;
		/** Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		Suffix: string | null;
		/** Type the main phone number for this contact. */
		Telephone1: string | null;
		/** Type a second phone number for this contact. */
		Telephone2: string | null;
		/** Type a third phone number for this contact. */
		Telephone3: string | null;
		/** Select a region or territory for the contact for use in segmentation and analysis. */
		TerritoryCode: OptionSet.Contact.TerritoryCode | null;
		/** Total time spent for emails (read and write) and meetings by me in relation to the contact record. */
		readonly TimeSpentByMeOnEmailAndMeetings: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the contact. */
		readonly VersionNumber: number | null;
		/** Type the contact's professional or personal website or blog URL. */
		WebSiteUrl: string | null;
		/** Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiFirstName: string | null;
		/** Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports. */
		readonly YomiFullName: string | null;
		/** Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiLastName: string | null;
		/** Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiMiddleName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the account with which the contact is associated. */
			readonly AccountId: string;
			/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
			readonly AccountRoleCode: string;
			/** Unique identifier for address 1. */
			readonly Address1_AddressId: string;
			/** Select the primary address type. */
			readonly Address1_AddressTypeCode: string;
			/** Type the city for the primary address. */
			readonly Address1_City: string;
			/** Shows the complete primary address. */
			readonly Address1_Composite: string;
			/** Type the country or region for the primary address. */
			readonly Address1_Country: string;
			/** Type the county for the primary address. */
			readonly Address1_County: string;
			/** Type the fax number associated with the primary address. */
			readonly Address1_Fax: string;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			readonly Address1_FreightTermsCode: string;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			readonly Address1_Latitude: string;
			/** Type the first line of the primary address. */
			readonly Address1_Line1: string;
			/** Type the second line of the primary address. */
			readonly Address1_Line2: string;
			/** Type the third line of the primary address. */
			readonly Address1_Line3: string;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			readonly Address1_Longitude: string;
			/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
			readonly Address1_Name: string;
			/** Type the ZIP Code or postal code for the primary address. */
			readonly Address1_PostalCode: string;
			/** Type the post office box number of the primary address. */
			readonly Address1_PostOfficeBox: string;
			/** Type the name of the main contact at the account's primary address. */
			readonly Address1_PrimaryContactName: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address1_ShippingMethodCode: string;
			/** Type the state or province of the primary address. */
			readonly Address1_StateOrProvince: string;
			/** Type the main phone number associated with the primary address. */
			readonly Address1_Telephone1: string;
			/** Type a second phone number associated with the primary address. */
			readonly Address1_Telephone2: string;
			/** Type a third phone number associated with the primary address. */
			readonly Address1_Telephone3: string;
			/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly Address1_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address1_UTCOffset: string;
			/** Unique identifier for address 2. */
			readonly Address2_AddressId: string;
			/** Select the secondary address type. */
			readonly Address2_AddressTypeCode: string;
			/** Type the city for the secondary address. */
			readonly Address2_City: string;
			/** Shows the complete secondary address. */
			readonly Address2_Composite: string;
			/** Type the country or region for the secondary address. */
			readonly Address2_Country: string;
			/** Type the county for the secondary address. */
			readonly Address2_County: string;
			/** Type the fax number associated with the secondary address. */
			readonly Address2_Fax: string;
			/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
			readonly Address2_FreightTermsCode: string;
			/** Type the latitude value for the secondary address for use in mapping and other applications. */
			readonly Address2_Latitude: string;
			/** Type the first line of the secondary address. */
			readonly Address2_Line1: string;
			/** Type the second line of the secondary address. */
			readonly Address2_Line2: string;
			/** Type the third line of the secondary address. */
			readonly Address2_Line3: string;
			/** Type the longitude value for the secondary address for use in mapping and other applications. */
			readonly Address2_Longitude: string;
			/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
			readonly Address2_Name: string;
			/** Type the ZIP Code or postal code for the secondary address. */
			readonly Address2_PostalCode: string;
			/** Type the post office box number of the secondary address. */
			readonly Address2_PostOfficeBox: string;
			/** Type the name of the main contact at the account's secondary address. */
			readonly Address2_PrimaryContactName: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address2_ShippingMethodCode: string;
			/** Type the state or province of the secondary address. */
			readonly Address2_StateOrProvince: string;
			/** Type the main phone number associated with the secondary address. */
			readonly Address2_Telephone1: string;
			/** Type a second phone number associated with the secondary address. */
			readonly Address2_Telephone2: string;
			/** Type a third phone number associated with the secondary address. */
			readonly Address2_Telephone3: string;
			/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly Address2_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address2_UTCOffset: string;
			/** Unique identifier for address 3. */
			readonly Address3_AddressId: string;
			/** Select the third address type. */
			readonly Address3_AddressTypeCode: string;
			/** Type the city for the 3rd address. */
			readonly Address3_City: string;
			/** Shows the complete third address. */
			readonly Address3_Composite: string;
			/** the country or region for the 3rd address. */
			readonly Address3_Country: string;
			/** Type the county for the third address. */
			readonly Address3_County: string;
			/** Type the fax number associated with the third address. */
			readonly Address3_Fax: string;
			/** Select the freight terms for the third address to make sure shipping orders are processed correctly. */
			readonly Address3_FreightTermsCode: string;
			/** Type the latitude value for the third address for use in mapping and other applications. */
			readonly Address3_Latitude: string;
			/** the first line of the 3rd address. */
			readonly Address3_Line1: string;
			/** the second line of the 3rd address. */
			readonly Address3_Line2: string;
			/** the third line of the 3rd address. */
			readonly Address3_Line3: string;
			/** Type the longitude value for the third address for use in mapping and other applications. */
			readonly Address3_Longitude: string;
			/** Type a descriptive name for the third address, such as Corporate Headquarters. */
			readonly Address3_Name: string;
			/** the ZIP Code or postal code for the 3rd address. */
			readonly Address3_PostalCode: string;
			/** the post office box number of the 3rd address. */
			readonly Address3_PostOfficeBox: string;
			/** Type the name of the main contact at the account's third address. */
			readonly Address3_PrimaryContactName: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address3_ShippingMethodCode: string;
			/** the state or province of the third address. */
			readonly Address3_StateOrProvince: string;
			/** Type the main phone number associated with the third address. */
			readonly Address3_Telephone1: string;
			/** Type a second phone number associated with the third address. */
			readonly Address3_Telephone2: string;
			/** Type a third phone number associated with the primary address. */
			readonly Address3_Telephone3: string;
			/** Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly Address3_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address3_UTCOffset: string;
			readonly adx_ConfirmRemovePassword: string;
			readonly Adx_CreatedByIPAddress: string;
			readonly Adx_CreatedByUsername: string;
			/** Shows the current count of failed password attempts for the contact. */
			readonly adx_identity_accessfailedcount: string;
			/** Determines if the email is confirmed by the contact. */
			readonly adx_identity_emailaddress1confirmed: string;
			/** Indicates the last date and time the user successfully signed in to a portal. */
			readonly adx_identity_lastsuccessfullogin_UtcDateAndTime: string;
			/** Indicates that the contact can no longer sign in to the portal using the local account. */
			readonly adx_identity_locallogindisabled: string;
			/** Determines if this contact will track failed access attempts and become locked after too many failed attempts. To prevent the contact from becoming locked, you can disable this setting. */
			readonly adx_identity_lockoutenabled: string;
			/** Shows the moment in time when the locked contact becomes unlocked again. */
			readonly adx_identity_lockoutenddate_UtcDateAndTime: string;
			/** Determines if web authentication is enabled for the contact. */
			readonly adx_identity_logonenabled: string;
			/** Determines if the phone number is confirmed by the contact. */
			readonly adx_identity_mobilephoneconfirmed: string;
			readonly adx_identity_newpassword: string;
			readonly adx_identity_passwordhash: string;
			/** A token used to manage the web authentication session. */
			readonly adx_identity_securitystamp: string;
			/** Determines if two-factor authentication is enabled for the contact. */
			readonly adx_identity_twofactorenabled: string;
			/** Shows the user identity for local web authentication. */
			readonly adx_identity_username: string;
			readonly Adx_ModifiedByIPAddress: string;
			readonly Adx_ModifiedByUsername: string;
			readonly Adx_OrganizationName: string;
			/** User’s preferred portal LCID */
			readonly adx_preferredlcid: string;
			readonly adx_profilealert: string;
			readonly adx_profilealertdate_UtcDateAndTime: string;
			readonly adx_profilealertinstructions: string;
			readonly Adx_ProfileIsAnonymous: string;
			readonly Adx_ProfileLastActivity_UtcDateAndTime: string;
			readonly adx_profilemodifiedon_UtcDateAndTime: string;
			readonly adx_PublicProfileCopy: string;
			readonly Adx_TimeZone: string;
			/** For system use only. */
			readonly Aging30: string;
			/** Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
			readonly Aging30_Base: string;
			/** For system use only. */
			readonly Aging60: string;
			/** Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
			readonly Aging60_Base: string;
			/** For system use only. */
			readonly Aging90: string;
			/** Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
			readonly Aging90_Base: string;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			readonly Anniversary_DateOnly: string;
			/** Type the contact's annual income for use in profiling and financial analysis. */
			readonly AnnualIncome: string;
			/** Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
			readonly AnnualIncome_Base: string;
			/** Type the name of the contact's assistant. */
			readonly AssistantName: string;
			/** Type the phone number for the contact's assistant. */
			readonly AssistantPhone: string;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			readonly BirthDate_DateOnly: string;
			/** Type a second business phone number for this contact. */
			readonly Business2: string;
			/** Type a callback phone number for this contact. */
			readonly Callback: string;
			/** Type the names of the contact's children for reference in communications and client programs. */
			readonly ChildrensNames: string;
			/** Type the company phone of the contact. */
			readonly Company: string;
			/** Unique identifier of the contact. */
			readonly ContactId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the external party who created the record. */
			readonly CreatedByExternalParty: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
			readonly CreditLimit: string;
			/** Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area. */
			readonly CreditLimit_Base: string;
			/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
			readonly CreditOnHold: string;
			/** Select the size of the contact's company for segmentation and reporting purposes. */
			readonly CustomerSizeCode: string;
			/** Select the category that best describes the relationship between the contact and your organization. */
			readonly CustomerTypeCode: string;
			/** Type the department or business unit where the contact works in the parent company or business. */
			readonly Department: string;
			/** Type additional information to describe the contact, such as an excerpt from the company's website. */
			readonly Description: string;
			readonly devkit_CategoryCode: Array<string>;
			/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
			readonly DoNotBulkEMail: string;
			/** Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters. */
			readonly DoNotBulkPostalMail: string;
			/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
			readonly DoNotEMail: string;
			/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
			readonly DoNotFax: string;
			/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
			readonly DoNotPhone: string;
			/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
			readonly DoNotPostalMail: string;
			/** Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives. */
			readonly DoNotSendMM: string;
			/** Select the contact's highest level of education for use in segmentation and analysis. */
			readonly EducationCode: string;
			/** Type the primary email address for the contact. */
			readonly EMailAddress1: string;
			/** Type the secondary email address for the contact. */
			readonly EMailAddress2: string;
			/** Type an alternate email address for the contact. */
			readonly EMailAddress3: string;
			/** Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization. */
			readonly EmployeeId: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Identifier for an external user. */
			readonly ExternalUserIdentifier: string;
			/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
			readonly FamilyStatusCode: string;
			/** Type the fax number for the contact. */
			readonly Fax: string;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			readonly FirstName: string;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
			readonly FollowEmail: string;
			/** Type the URL for the contact's FTP site to enable users to access data and share documents. */
			readonly FtpSiteUrl: string;
			/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
			readonly FullName: string;
			/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			readonly GenderCode: string;
			/** Type the passport number or other government ID for the contact for use in documents or reports. */
			readonly GovernmentId: string;
			/** Select whether the contact has any children for reference in follow-up phone calls and other communications. */
			readonly HasChildrenCode: string;
			/** Type a second home phone number for this contact. */
			readonly Home2: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information about whether the contact was auto-created when promoting an email or an appointment. */
			readonly IsAutoCreate: string;
			/** Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes. */
			readonly IsBackofficeCustomer: string;
			readonly IsPrivate: string;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			readonly JobTitle: string;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			readonly LastName: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
			readonly LastUsedInCampaign_UtcDateOnly: string;
			/** Select the primary marketing source that directed the contact to your organization. */
			readonly LeadSourceCode: string;
			/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
			readonly ManagerName: string;
			/** Type the phone number for the contact's manager. */
			readonly ManagerPhone: string;
			/** Whether is only for marketing */
			readonly MarketingOnly: string;
			/** Unique identifier of the master contact for merge. */
			readonly MasterId: string;
			/** Shows whether the account has been merged with a master contact. */
			readonly Merged: string;
			/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
			readonly MiddleName: string;
			/** Type the mobile phone number for the contact. */
			readonly MobilePhone: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the external party who modified the record. */
			readonly ModifiedByExternalParty: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Account associated with Contact. */
			readonly msa_managingpartnerid: string;
			/** Indicates that the contact has opted out of web tracking. */
			readonly msdyn_disablewebtracking: string;
			/** Indicates that the contact is considered a minor in their jurisdiction. */
			readonly msdyn_isminor: string;
			/** Indicates that the contact is considered a minor in their jurisdiction and has parental consent. */
			readonly msdyn_isminorwithparentalconsent: string;
			/** Indicates the date and time that the person agreed to the portal terms and conditions. */
			readonly msdyn_portaltermsagreementdate_UtcDateAndTime: string;
			/** User’s preferred portal language */
			readonly mspp_userpreferredlcid: string;
			/** Type the contact's nickname. */
			readonly NickName: string;
			/** Type the number of children the contact has for reference in follow-up phone calls and other communications. */
			readonly NumberOfChildren: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the contact. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the contact. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the contact. */
			readonly OwningUser: string;
			/** Type the pager number for the contact. */
			readonly Pager: string;
			/** Unique identifier of the parent contact. */
			readonly ParentContactId: string;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			readonly parentcustomerid_account: string;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			readonly parentcustomerid_contact: string;
			/** Shows whether the contact participates in workflow rules. */
			readonly ParticipatesInWorkflow: string;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			readonly PaymentTermsCode: string;
			/** Select the preferred day of the week for service appointments. */
			readonly PreferredAppointmentDayCode: string;
			/** Select the preferred time of day for service appointments. */
			readonly PreferredAppointmentTimeCode: string;
			/** Select the preferred method of contact. */
			readonly PreferredContactMethodCode: string;
			/** Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact. */
			readonly PreferredSystemUserId: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
			readonly Salutation: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly ShippingMethodCode: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Contact record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			readonly SpousesName: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Select the contact's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SubscriptionId: string;
			/** Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			readonly Suffix: string;
			/** Type the main phone number for this contact. */
			readonly Telephone1: string;
			/** Type a second phone number for this contact. */
			readonly Telephone2: string;
			/** Type a third phone number for this contact. */
			readonly Telephone3: string;
			/** Select a region or territory for the contact for use in segmentation and analysis. */
			readonly TerritoryCode: string;
			/** Total time spent for emails (read and write) and meetings by me in relation to the contact record. */
			readonly TimeSpentByMeOnEmailAndMeetings: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the contact. */
			readonly VersionNumber: string;
			/** Type the contact's professional or personal website or blog URL. */
			readonly WebSiteUrl: string;
			/** Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
			readonly YomiFirstName: string;
			/** Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports. */
			readonly YomiFullName: string;
			/** Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
			readonly YomiLastName: string;
			/** Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
			readonly YomiMiddleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace Contact {
		enum AccountRoleCode {
			/** Decision_Maker = 1*/
			Decision_Maker = 1,
			/** Employee = 2*/
			Employee = 2,
			/** Influencer = 3*/
			Influencer = 3
		}
		enum Address1_AddressTypeCode {
			/** Bill_To = 1*/
			Bill_To = 1,
			/** Other = 4*/
			Other = 4,
			/** Primary = 3*/
			Primary = 3,
			/** Ship_To = 2*/
			Ship_To = 2
		}
		enum Address1_FreightTermsCode {
			/** FOB = 1*/
			FOB = 1,
			/** No_Charge = 2*/
			No_Charge = 2
		}
		enum Address1_ShippingMethodCode {
			/** Airborne = 1*/
			Airborne = 1,
			/** DHL = 2*/
			DHL = 2,
			/** FedEx = 3*/
			FedEx = 3,
			/** Full_Load = 6*/
			Full_Load = 6,
			/** Postal_Mail = 5*/
			Postal_Mail = 5,
			/** UPS = 4*/
			UPS = 4,
			/** Will_Call = 7*/
			Will_Call = 7
		}
		enum Address2_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_FreightTermsCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address3_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address3_FreightTermsCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address3_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum CustomerSizeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum CustomerTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum devkit_CategoryCode {
			/** Business = 1*/
			Business = 1,
			/** Family = 2*/
			Family = 2,
			/** Other = 5*/
			Other = 5,
			/** Sales = 4*/
			Sales = 4,
			/** Sales_Team = 1001*/
			Sales_Team = 1001,
			/** Service = 1002*/
			Service = 1002,
			/** Social = 3*/
			Social = 3,
			/** Stakeholder = 1000*/
			Stakeholder = 1000
		}
		enum EducationCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum FamilyStatusCode {
			/** Divorced = 3*/
			Divorced = 3,
			/** Married = 2*/
			Married = 2,
			/** Single = 1*/
			Single = 1,
			/** Widowed = 4*/
			Widowed = 4
		}
		enum GenderCode {
			/** Female = 2*/
			Female = 2,
			/** Male = 1*/
			Male = 1
		}
		enum HasChildrenCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum LeadSourceCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum mspp_userpreferredlcid {
			/** Arabic = 1025*/
			Arabic = 1025,
			/** Basque_Basque = 1069*/
			Basque_Basque = 1069,
			/** Bulgarian_Bulgaria = 1026*/
			Bulgarian_Bulgaria = 1026,
			/** Catalan_Catalan = 1027*/
			Catalan_Catalan = 1027,
			/** Chinese_China = 2052*/
			Chinese_China = 2052,
			/** Chinese_Hong_Kong_SAR = 3076*/
			Chinese_Hong_Kong_SAR = 3076,
			/** Chinese_Traditional = 1028*/
			Chinese_Traditional = 1028,
			/** Croatian_Croatia = 1050*/
			Croatian_Croatia = 1050,
			/** Czech_Czech_Republic = 1029*/
			Czech_Czech_Republic = 1029,
			/** Danish_Denmark = 1030*/
			Danish_Denmark = 1030,
			/** Dutch_Netherlands = 1043*/
			Dutch_Netherlands = 1043,
			/** English = 1033*/
			English = 1033,
			/** Estonian_Estonia = 1061*/
			Estonian_Estonia = 1061,
			/** Finnish_Finland = 1035*/
			Finnish_Finland = 1035,
			/** French_France = 1036*/
			French_France = 1036,
			/** Galician_Spain = 1110*/
			Galician_Spain = 1110,
			/** German_Germany = 1031*/
			German_Germany = 1031,
			/** Greek_Greece = 1032*/
			Greek_Greece = 1032,
			/** Hebrew = 1037*/
			Hebrew = 1037,
			/** Hindi_India = 1081*/
			Hindi_India = 1081,
			/** Hungarian_Hungary = 1038*/
			Hungarian_Hungary = 1038,
			/** Indonesian_Indonesia = 1057*/
			Indonesian_Indonesia = 1057,
			/** Italian_Italy = 1040*/
			Italian_Italy = 1040,
			/** Japanese_Japan = 1041*/
			Japanese_Japan = 1041,
			/** Kazakh_Kazakhstan = 1087*/
			Kazakh_Kazakhstan = 1087,
			/** Korean_Korea = 1042*/
			Korean_Korea = 1042,
			/** Latvian_Latvia = 1062*/
			Latvian_Latvia = 1062,
			/** Lithuanian_Lithuania = 1063*/
			Lithuanian_Lithuania = 1063,
			/** Malay_Malaysia = 1086*/
			Malay_Malaysia = 1086,
			/** Norwegian_Bokmal_Norway = 1044*/
			Norwegian_Bokmal_Norway = 1044,
			/** Polish_Poland = 1045*/
			Polish_Poland = 1045,
			/** Portuguese_Brazil = 1046*/
			Portuguese_Brazil = 1046,
			/** Portuguese_Portugal = 2070*/
			Portuguese_Portugal = 2070,
			/** Romanian_Romania = 1048*/
			Romanian_Romania = 1048,
			/** Russian_Russia = 1049*/
			Russian_Russia = 1049,
			/** Serbian_Cyrillic_Serbia = 3098*/
			Serbian_Cyrillic_Serbia = 3098,
			/** Serbian_Latin_Serbia = 2074*/
			Serbian_Latin_Serbia = 2074,
			/** Slovak_Slovakia = 1051*/
			Slovak_Slovakia = 1051,
			/** Slovenian_Slovenia = 1060*/
			Slovenian_Slovenia = 1060,
			/** Spanish_Traditional_Sort_Spain = 3082*/
			Spanish_Traditional_Sort_Spain = 3082,
			/** Swedish_Sweden = 1053*/
			Swedish_Sweden = 1053,
			/** Thai_Thailand = 1054*/
			Thai_Thailand = 1054,
			/** Turkish_Turkiye = 1055*/
			Turkish_Turkiye = 1055,
			/** Ukrainian_Ukraine = 1058*/
			Ukrainian_Ukraine = 1058,
			/** Vietnamese_Vietnam = 1066*/
			Vietnamese_Vietnam = 1066
		}
		enum ParentCustomerIdType {
		}
		enum PaymentTermsCode {
			/** _2_10_Net_30 = 2*/
			_2_10_Net_30 = 2,
			/** Net_30 = 1*/
			Net_30 = 1,
			/** Net_45 = 3*/
			Net_45 = 3,
			/** Net_60 = 4*/
			Net_60 = 4
		}
		enum PreferredAppointmentDayCode {
			/** Friday = 5*/
			Friday = 5,
			/** Monday = 1*/
			Monday = 1,
			/** Saturday = 6*/
			Saturday = 6,
			/** Sunday = 0*/
			Sunday = 0,
			/** Thursday = 4*/
			Thursday = 4,
			/** Tuesday = 2*/
			Tuesday = 2,
			/** Wednesday = 3*/
			Wednesday = 3
		}
		enum PreferredAppointmentTimeCode {
			/** Afternoon = 2*/
			Afternoon = 2,
			/** Evening = 3*/
			Evening = 3,
			/** Morning = 1*/
			Morning = 1
		}
		enum PreferredContactMethodCode {
			/** Any = 1*/
			Any = 1,
			/** Email = 2*/
			Email = 2,
			/** Fax = 4*/
			Fax = 4,
			/** Mail = 5*/
			Mail = 5,
			/** Phone = 3*/
			Phone = 3
		}
		enum ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum TerritoryCode {
			/** Default_Value = 1*/
			Default_Value = 1
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