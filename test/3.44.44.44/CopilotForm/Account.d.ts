//@ts-check
///<reference path="devkit.d.ts" />
declare namespace Tfsvn {
	namespace FormAccount {
		interface Header extends DevKit.Controls.IHeader {
			/** Type an ID number or code for the account to quickly search and identify the account in system views. */
			AccountNumber: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_DETAILS_TAB_Sections {
			BILLING: DevKit.Controls.Section;
			ChildAccounts: DevKit.Controls.Section;
			COMPANY_PROFILE: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			DETAILS_TAB_section_6: DevKit.Controls.Section;
			MARKETING: DevKit.Controls.Section;
			SHIPPING: DevKit.Controls.Section;
		}
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			ACCOUNT_INFORMATION: DevKit.Controls.Section;
			ADDRESS: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			SUMMARY_TAB_ADDRESSINPUT_SECTION: DevKit.Controls.Section;
			SUMMARY_TAB_section_6: DevKit.Controls.Section;
			SUMMARY_TAB_section_8: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			Summary_section_6: DevKit.Controls.Section;
		}
		interface tab_tab_loan_info_Sections {
			_section_913: DevKit.Controls.Section;
			tab_4_section_loan_list: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_documents_sharepoint extends DevKit.Controls.ITab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_loan_info extends DevKit.Controls.ITab {
			Section: tab_tab_loan_info_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
			documents_sharepoint: tab_documents_sharepoint;
			SUMMARY_TAB: tab_SUMMARY_TAB;
			tab_5: tab_tab_5;
			tab_loan_info: tab_tab_loan_info;
		}
		interface Body {
			Tab: Tabs;
			/** Type an ID number or code for the account to quickly search and identify the account in system views. */
			AccountNumber: DevKit.Controls.String;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			Address1_Line1: DevKit.Controls.ActionCards;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Select whether the account accepts marketing materials, such as brochures or catalogs. */
			DoNotSendMM: DevKit.Controls.Boolean;
			/** Type the fax number for the account. */
			Fax: DevKit.Controls.String;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
			FollowEmail: DevKit.Controls.Boolean;
			hs_tax_id: DevKit.Controls.String;
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Shows the date when the account was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics. */
			OriginatingLeadId: DevKit.Controls.Lookup;
			/** Select the account's ownership structure, such as public or private. */
			OwnershipCode: DevKit.Controls.OptionSet;
			/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Choose the primary contact for the account to provide quick access to contact details. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Controls.String;
			/** Update to get latest customer information from CORE-System */
			Telephone1: DevKit.Controls.String;
			/** Update to get latest customer information from CORE-System */
			Telephone11: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Type the account's website URL to get quick details about the company profile. */
			WebSiteURL: DevKit.Controls.String;
		}		interface Navigation {
			account_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			account_adx_portalcomments: DevKit.Controls.NavigationItem;
			Account_Appointments: DevKit.Controls.NavigationItem;
			account_bookableresource_AccountId: DevKit.Controls.NavigationItem;
			account_BulkOperations: DevKit.Controls.NavigationItem;
			account_CampaignResponses: DevKit.Controls.NavigationItem;
			account_customer_opportunity_roles: DevKit.Controls.NavigationItem;
			Account_Email_EmailSender: DevKit.Controls.NavigationItem;
			Account_Email_SendersAccount: DevKit.Controls.NavigationItem;
			Account_Emails: DevKit.Controls.NavigationItem;
			account_entitlement_Account: DevKit.Controls.NavigationItem;
			account_entitlement_Customer: DevKit.Controls.NavigationItem;
			account_hs_zns_messages: DevKit.Controls.NavigationItem;
			account_IncidentResolutions: DevKit.Controls.NavigationItem;
			account_msdyn_bookingalerts: DevKit.Controls.NavigationItem;
			account_msdyn_copilottranscripts: DevKit.Controls.NavigationItem;
			account_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem;
			account_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem;
			account_msdyn_ocsessions: DevKit.Controls.NavigationItem;
			account_msdyn_ocvoicemails: DevKit.Controls.NavigationItem;
			account_msdyn_orgchartnode_msdyn_parentrecord: DevKit.Controls.NavigationItem;
			account_msfp_alerts: DevKit.Controls.NavigationItem;
			account_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			account_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			account_OpportunityCloses: DevKit.Controls.NavigationItem;
			account_OrderCloses: DevKit.Controls.NavigationItem;
			account_parent_account: DevKit.Controls.NavigationItem;
			Account_Phonecalls: DevKit.Controls.NavigationItem;
			account_Posts: DevKit.Controls.NavigationItem;
			account_QuoteCloses: DevKit.Controls.NavigationItem;
			Account_ServiceAppointments: DevKit.Controls.NavigationItem;
			Account_Tasks: DevKit.Controls.NavigationItem;
			adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
			contact_customer_accounts: DevKit.Controls.NavigationItem;
			contract_billingcustomer_accounts: DevKit.Controls.NavigationItem;
			contract_customer_accounts: DevKit.Controls.NavigationItem;
			contractlineitem_customer_accounts: DevKit.Controls.NavigationItem;
			hs_account_contact_customer_id: DevKit.Controls.NavigationItem;
			hs_account_hs_interaction_id: DevKit.Controls.NavigationItem;
			hs_account_hs_loan_account_id: DevKit.Controls.NavigationItem;
			hs_hs_custom_template_account_hs_object1_id: DevKit.Controls.NavigationItem;
			hs_hs_custom_template_account_hs_object2_id: DevKit.Controls.NavigationItem;
			hs_hs_custom_template_account_hs_object3_id: DevKit.Controls.NavigationItem;
			hs_hs_custom_template_account_hs_object4_id: DevKit.Controls.NavigationItem;
			hs_hs_custom_template_account_hs_object5_id: DevKit.Controls.NavigationItem;
			hs_hs_zns_message_account_hs_object1_id: DevKit.Controls.NavigationItem;
			hs_hs_zns_message_account_hs_object2_id: DevKit.Controls.NavigationItem;
			hs_hs_zns_message_account_hs_object3_id: DevKit.Controls.NavigationItem;
			hs_hs_zns_message_account_hs_object4_id: DevKit.Controls.NavigationItem;
			hs_hs_zns_message_account_hs_object5_id: DevKit.Controls.NavigationItem;
			hs_hs_zns_message_account_hs_object6_id: DevKit.Controls.NavigationItem;
			hs_loan_account_account_id_account: DevKit.Controls.NavigationItem;
			incident_customer_accounts: DevKit.Controls.NavigationItem;
			invoice_customer_accounts: DevKit.Controls.NavigationItem;
			lead_customer_accounts: DevKit.Controls.NavigationItem;
			lead_parent_account: DevKit.Controls.NavigationItem;
			msa_account_managingpartner: DevKit.Controls.NavigationItem;
			msa_contact_managingpartner: DevKit.Controls.NavigationItem;
			msdyn_account_dailyaccountkpiitem_entityid: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_accountkpiitem_accountid: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_actual_AccountCustomer: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_actual_AccountVendor: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_customerasset_Account: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_iotdevice_Account: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_liveconversation_Customer: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_mostcontacted_regardingObjectId: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_ocliveworkitem_Customer: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_ocvoicemail_Customer: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_warranty_WarrantyHolder: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_warranty_WarrantyProvider: DevKit.Controls.NavigationItem;
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: DevKit.Controls.NavigationItem;
			msdyn_msdyn_lastagent_account_msdyn_recordId: DevKit.Controls.NavigationItem;
			msdyn_msdyn_preferredagent_account_msdyn_recordId: DevKit.Controls.NavigationItem;
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: DevKit.Controls.NavigationItem;
			msdyn_playbookinstance_account: DevKit.Controls.NavigationItem;
			msdyn_sabackupdiagnostic_account_msdyn_target: DevKit.Controls.NavigationItem;
			msdyn_salesaccelerationinsights_account: DevKit.Controls.NavigationItem;
			msdyn_salesroutingdiagnostic_account_msdyn_target: DevKit.Controls.NavigationItem;
			msdyn_salessuggestion_account: DevKit.Controls.NavigationItem;
			msdyn_sequencetarget_account_msdyn_target: DevKit.Controls.NavigationItem;
			msdyn_swarm_account: DevKit.Controls.NavigationItem;
			opportunity_customer_accounts: DevKit.Controls.NavigationItem;
			opportunity_parent_account: DevKit.Controls.NavigationItem;
			order_customer_accounts: DevKit.Controls.NavigationItem;
			quote_customer_accounts: DevKit.Controls.NavigationItem;
			SourceAccount_BulkOperationLogs: DevKit.Controls.NavigationItem;
		}
		interface Grid {
			accountcasessgrid: DevKit.Controls.Grid;
			ChildAccounts: DevKit.Controls.Grid;
			Contacts: DevKit.Controls.Grid;
			DocumentsSubGrid: DevKit.Controls.Grid;
			loan_chart_by_status: DevKit.Controls.Grid;
			Subgrid_loan_list: DevKit.Controls.Grid;
		}
	}
	class FormAccount extends DevKit.IForm {
		/**
		* Account [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Account */
		Body: Tfsvn.FormAccount.Body;
		/** The Header section of form Account */
		Header: Tfsvn.FormAccount.Header;
		/** The Navigation of form Account */
		Navigation: Tfsvn.FormAccount.Navigation;
		/** The Grid of form Account */
		Grid: Tfsvn.FormAccount.Grid;
		/** The SidePanes of form Account */
		SidePanes: DevKit.SidePanes;
	}
}
declare namespace OptionSet {
	namespace Account {
		enum AccountCategoryCode {
			/** Preferred_Customer = 1*/
			Preferred_Customer = 1,
			/** Standard = 2*/
			Standard = 2
		}
		enum AccountClassificationCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum AccountRatingCode {
			/** Default_Value = 1*/
			Default_Value = 1
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
		enum BusinessTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum CustomerSizeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum CustomerTypeCode {
			/** Competitor = 1*/
			Competitor = 1,
			/** Consultant = 2*/
			Consultant = 2,
			/** Customer = 3*/
			Customer = 3,
			/** Influencer = 6*/
			Influencer = 6,
			/** Investor = 4*/
			Investor = 4,
			/** Other = 12*/
			Other = 12,
			/** Partner = 5*/
			Partner = 5,
			/** Press = 7*/
			Press = 7,
			/** Prospect = 8*/
			Prospect = 8,
			/** Reseller = 9*/
			Reseller = 9,
			/** Supplier = 10*/
			Supplier = 10,
			/** Vendor = 11*/
			Vendor = 11
		}
		enum IndustryCode {
			/** Accounting = 1*/
			Accounting = 1,
			/** Agriculture_and_Non_petrol_Natural_Resource_Extraction = 2*/
			Agriculture_and_Non_petrol_Natural_Resource_Extraction = 2,
			/** Broadcasting_Printing_and_Publishing = 3*/
			Broadcasting_Printing_and_Publishing = 3,
			/** Brokers = 4*/
			Brokers = 4,
			/** Building_Supply_Retail = 5*/
			Building_Supply_Retail = 5,
			/** Business_Services = 6*/
			Business_Services = 6,
			/** Consulting = 7*/
			Consulting = 7,
			/** Consumer_Services = 8*/
			Consumer_Services = 8,
			/** Design_Direction_and_Creative_Management = 9*/
			Design_Direction_and_Creative_Management = 9,
			/** Distributors_Dispatchers_and_Processors = 10*/
			Distributors_Dispatchers_and_Processors = 10,
			/** Doctors_Offices_and_Clinics = 11*/
			Doctors_Offices_and_Clinics = 11,
			/** Durable_Manufacturing = 12*/
			Durable_Manufacturing = 12,
			/** Eating_and_Drinking_Places = 13*/
			Eating_and_Drinking_Places = 13,
			/** Entertainment_Retail = 14*/
			Entertainment_Retail = 14,
			/** Equipment_Rental_and_Leasing = 15*/
			Equipment_Rental_and_Leasing = 15,
			/** Financial = 16*/
			Financial = 16,
			/** Food_and_Tobacco_Processing = 17*/
			Food_and_Tobacco_Processing = 17,
			/** Inbound_Capital_Intensive_Processing = 18*/
			Inbound_Capital_Intensive_Processing = 18,
			/** Inbound_Repair_and_Services = 19*/
			Inbound_Repair_and_Services = 19,
			/** Insurance = 20*/
			Insurance = 20,
			/** Legal_Services = 21*/
			Legal_Services = 21,
			/** Non_Durable_Merchandise_Retail = 22*/
			Non_Durable_Merchandise_Retail = 22,
			/** Outbound_Consumer_Service = 23*/
			Outbound_Consumer_Service = 23,
			/** Petrochemical_Extraction_and_Distribution = 24*/
			Petrochemical_Extraction_and_Distribution = 24,
			/** Service_Retail = 25*/
			Service_Retail = 25,
			/** SIG_Affiliations = 26*/
			SIG_Affiliations = 26,
			/** Social_Services = 27*/
			Social_Services = 27,
			/** Special_Outbound_Trade_Contractors = 28*/
			Special_Outbound_Trade_Contractors = 28,
			/** Specialty_Realty = 29*/
			Specialty_Realty = 29,
			/** Transportation = 30*/
			Transportation = 30,
			/** Utility_Creation_and_Distribution = 31*/
			Utility_Creation_and_Distribution = 31,
			/** Vehicle_Retail = 32*/
			Vehicle_Retail = 32,
			/** Wholesale = 33*/
			Wholesale = 33
		}
		enum OwnershipCode {
			/** Other = 4*/
			Other = 4,
			/** Private = 2*/
			Private = 2,
			/** Public = 1*/
			Public = 1,
			/** Subsidiary = 3*/
			Subsidiary = 3
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
		}		enum RollupState {
			/** NotCalculated = 0 */
			NotCalculated = 0,
			/** Calculated = 1 */
			Calculated = 1,
			/** OverflowError = 2 */
			OverflowError = 2,
			/** OtherError = 3 */
			OtherError = 3,
			/** RetryLimitExceeded = 4 */
			RetryLimitExceeded = 4,
			/** HierarchicalRecursionLimitReached = 5 */
			HierarchicalRecursionLimitReached = 5,
			/** LoopDetected = 6 */
			LoopDetected = 6
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.45.67.89'}