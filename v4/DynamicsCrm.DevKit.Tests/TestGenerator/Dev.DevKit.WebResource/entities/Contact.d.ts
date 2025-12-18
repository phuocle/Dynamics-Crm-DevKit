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
			contact_DeletedItemReferences: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
	}
	export class FormContact extends DevKit.IForm {
		/**
		* Contact [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Contact */
		Body: DevKit.FormContact.Body;
		/** The Header section of form Contact */
		Header: DevKit.FormContact.Header;
		/** The Navigation of form Contact */
		Navigation: DevKit.FormContact.Navigation;
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
			contact_DeletedItemReferences: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
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
	export class FormContact_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Contact_Information */
		Body: DevKit.FormContact_Information.Body;
		/** The Header section of form Contact_Information */
		Header: DevKit.FormContact_Information.Header;
		/** The Navigation of form Contact_Information */
		Navigation: DevKit.FormContact_Information.Navigation;
		/** The Grid of form Contact_Information */
		Grid: DevKit.FormContact_Information.Grid;
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
			contact_DeletedItemReferences: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
	}
	export class FormInvite_Web_Form extends DevKit.IForm {
		/**
		* Invite Web Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Invite_Web_Form */
		Body: DevKit.FormInvite_Web_Form.Body;
		/** The Navigation of form Invite_Web_Form */
		Navigation: DevKit.FormInvite_Web_Form.Navigation;
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
			contact_DeletedItemReferences: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
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
	export class FormPortal_Contact_Enhanced extends DevKit.IForm {
		/**
		* Portal Contact (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Portal_Contact_Enhanced */
		Body: DevKit.FormPortal_Contact_Enhanced.Body;
		/** The Header section of form Portal_Contact_Enhanced */
		Header: DevKit.FormPortal_Contact_Enhanced.Header;
		/** The Navigation of form Portal_Contact_Enhanced */
		Navigation: DevKit.FormPortal_Contact_Enhanced.Navigation;
		/** The Grid of form Portal_Contact_Enhanced */
		Grid: DevKit.FormPortal_Contact_Enhanced.Grid;
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
			contact_DeletedItemReferences: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
	}
	export class FormProfile_Web_Form_Enhanced extends DevKit.IForm {
		/**
		* Profile Web Form (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Profile_Web_Form_Enhanced */
		Body: DevKit.FormProfile_Web_Form_Enhanced.Body;
		/** The Navigation of form Profile_Web_Form_Enhanced */
		Navigation: DevKit.FormProfile_Web_Form_Enhanced.Navigation;
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
			contact_DeletedItemReferences: DevKit.Controls.NavigationItem;
			Contact_Email_EmailSender: DevKit.Controls.NavigationItem;
			Contact_Emails: DevKit.Controls.NavigationItem;
			Contact_ExternalPartyItems: DevKit.Controls.NavigationItem;
			Contact_Feedback: DevKit.Controls.NavigationItem;
			Contact_Phonecalls: DevKit.Controls.NavigationItem;
			Contact_Tasks: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdby: DevKit.Controls.NavigationItem;
			lk_contact_feedback_createdonbehalfby: DevKit.Controls.NavigationItem;
			PowerPagesSiteAIFeedback_Contact_Contact: DevKit.Controls.NavigationItem;
		}
	}
	export class FormProfile_Web_Form_Enhanced_Japanese extends DevKit.IForm {
		/**
		* Profile Web Form (Enhanced) - Japanese [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Profile_Web_Form_Enhanced_Japanese */
		Body: DevKit.FormProfile_Web_Form_Enhanced_Japanese.Body;
		/** The Navigation of form Profile_Web_Form_Enhanced_Japanese */
		Navigation: DevKit.FormProfile_Web_Form_Enhanced_Japanese.Navigation;
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
	export class FormContact_Quick_Create extends DevKit.IForm {
		/**
		* Contact Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Contact_Quick_Create */
		Body: DevKit.FormContact_Quick_Create.Body;
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