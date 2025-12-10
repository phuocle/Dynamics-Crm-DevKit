
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAccount {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Controls.Money;
		}
		interface tab_AssetsAndLocationsTab_Sections {
			AssetsAndLocationsSection: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB_Sections {
			BILLING: DevKit.Controls.Section;
			ChildAccounts: DevKit.Controls.Section;
			COMPANY_PROFILE: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			DETAILS_TAB_section_6: DevKit.Controls.Section;
			SHIPPING: DevKit.Controls.Section;
		}
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Controls.Section;
		}
		interface tab_FieldService_Sections {
			DETAILS_TAB_section_7: DevKit.Controls.Section;
			DETAILS_TAB_section_8: DevKit.Controls.Section;
			FieldService_section_3: DevKit.Controls.Section;
			FieldService_section_4: DevKit.Controls.Section;
		}
		interface tab_insights_Sections {
			insights_section: DevKit.Controls.Section;
		}
		interface tab_InsuranceTab_Sections {
			InsuranceHeldSection: DevKit.Controls.Section;
			InsuranceProvidedSection: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			ACCOUNT_INFORMATION: DevKit.Controls.Section;
			ADDRESS: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
			SUMMARY_TAB_ADDRESSINPUT_SECTION: DevKit.Controls.Section;
			SUMMARY_TAB_section_6: DevKit.Controls.Section;
		}
		interface tab_TradeCoveragesTab_Sections {
			TradeCoveragesSection: DevKit.Controls.Section;
		}
		interface tab_urstab_Sections {
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
			urstab_section_general: DevKit.Controls.Section;
		}
		interface tab_WarrantiesTab_Sections {
			WarrantiesProvidedSection: DevKit.Controls.Section;
			WarrantyCoveredBySection: DevKit.Controls.Section;
			WarrantyHeldSection: DevKit.Controls.Section;
		}
		interface tab_AssetsAndLocationsTab extends DevKit.Controls.ITab {
			Section: tab_AssetsAndLocationsTab_Sections;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_documents_sharepoint extends DevKit.Controls.ITab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_insights extends DevKit.Controls.ITab {
			Section: tab_insights_Sections;
		}
		interface tab_InsuranceTab extends DevKit.Controls.ITab {
			Section: tab_InsuranceTab_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_TradeCoveragesTab extends DevKit.Controls.ITab {
			Section: tab_TradeCoveragesTab_Sections;
		}
		interface tab_urstab extends DevKit.Controls.ITab {
			Section: tab_urstab_Sections;
		}
		interface tab_WarrantiesTab extends DevKit.Controls.ITab {
			Section: tab_WarrantiesTab_Sections;
		}
		interface Tabs {
			AssetsAndLocationsTab: tab_AssetsAndLocationsTab;
			DETAILS_TAB: tab_DETAILS_TAB;
			documents_sharepoint: tab_documents_sharepoint;
			FieldService: tab_FieldService;
			insights: tab_insights;
			InsuranceTab: tab_InsuranceTab;
			SUMMARY_TAB: tab_SUMMARY_TAB;
			TradeCoveragesTab: tab_TradeCoveragesTab;
			urstab: tab_urstab;
			WarrantiesTab: tab_WarrantiesTab;
		}
		interface Body {
			Tab: Tabs;
			AccountInsightsCtrl: DevKit.Controls.ActionCards;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			Address1_Latitude: DevKit.Controls.Double;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			Address1_Latitude1: DevKit.Controls.Double;
			address1_line1: DevKit.Controls.ActionCards;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			Address1_Longitude: DevKit.Controls.Double;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			Address1_Longitude1: DevKit.Controls.Double;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Select the category that best describes the relationship between the account and your organization. */
			CustomerTypeCode: DevKit.Controls.OptionSet;
			/** Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
			DefaultPriceLevelId: DevKit.Controls.Lookup;
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
			/** Type the fax number for the account. */
			Fax: DevKit.Controls.String;
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			mapcontrol: DevKit.Controls.Map;
			/** Reference to an other account to be used for billing (only to be used if billing account differs) */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Indicates the primary time zone that the client works on. */
			msdyn_PrimaryTimeZone: DevKit.Controls.Integer;
			/** Default Sales Tax Code */
			msdyn_SalesTaxCode: DevKit.Controls.Lookup;
			/** The Service Territory this account belongs to. This is used to optimize scheduling and routing */
			msdyn_ServiceTerritory: DevKit.Controls.Lookup;
			/** Select whether the account is tax exempt. */
			msdyn_TaxExempt: DevKit.Controls.Boolean;
			/** Shows the government tax exempt number. */
			msdyn_TaxExemptNumber: DevKit.Controls.String;
			/** Enter the travel charge to include on work orders. This value will be multiplied by the travel charge type. */
			msdyn_TravelCharge: DevKit.Controls.Money;
			/** Specify how travel is charged for this account. */
			msdyn_TravelChargeType: DevKit.Controls.OptionSet;
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			/** Shows the default instructions to show on new work orders. */
			msdyn_WorkOrderInstructions: DevKit.Controls.String;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the company or business name. */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
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
			/** Type the main phone number for this account. */
			Telephone1: DevKit.Controls.String;
			/** Type the main phone number for this account. */
			Telephone11: DevKit.Controls.String;
			/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
			TickerSymbol: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Type the account's website URL to get quick details about the company profile. */
			WebSiteURL: DevKit.Controls.String;
		}
		interface Navigation {
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
			incident_customer_accounts: DevKit.Controls.NavigationItem;
			invoice_customer_accounts: DevKit.Controls.NavigationItem;
			lead_customer_accounts: DevKit.Controls.NavigationItem;
			lead_parent_account: DevKit.Controls.NavigationItem;
			msa_account_managingpartner: DevKit.Controls.NavigationItem;
			msa_contact_managingpartner: DevKit.Controls.NavigationItem;
			msdyn_account_account_BillingAccount: DevKit.Controls.NavigationItem;
			msdyn_account_dailyaccountkpiitem_entityid: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_accountkpiitem_accountid: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_actual_AccountCustomer: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_actual_AccountVendor: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_actual_ServiceAccount: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_agreement_BillingAccount: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_agreement_ServiceAccount: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_customerasset_Account: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_entitlementapplication_serviceaccount: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_insurance_InsuranceCarrier: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_iotdevice_Account: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_liveconversation_Customer: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_mostcontacted_regardingObjectId: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_nottoexceed_account: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_ocliveworkitem_Customer: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_ocvoicemail_Customer: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_payment_Account: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_purchaseorder_Vendor: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_requirementresourcepreference_Account: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_rma_BillingAccount: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_rma_ServiceAccount: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_rmaproduct_Changeownership: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_rtv_Vendor: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_tradecoverage_Account: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_warranty_WarrantyHolder: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_warranty_WarrantyProvider: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_workorder_BillingAccount: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_workorder_ServiceAccount: DevKit.Controls.NavigationItem;
			msdyn_account_msdyn_workorderresourcerestriction_Account: DevKit.Controls.NavigationItem;
			msdyn_account_opportunityproduct_ServiceAccount: DevKit.Controls.NavigationItem;
			msdyn_account_product_DefaultVendor: DevKit.Controls.NavigationItem;
			msdyn_account_quote_Account: DevKit.Controls.NavigationItem;
			msdyn_account_quotedetail_ServiceAccount: DevKit.Controls.NavigationItem;
			msdyn_account_salesorder_Account: DevKit.Controls.NavigationItem;
			msdyn_dcaengageagentresult_regarding_account: DevKit.Controls.NavigationItem;
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: DevKit.Controls.NavigationItem;
			msdyn_msdyn_insurance_PolicyHolder_account: DevKit.Controls.NavigationItem;
			msdyn_msdyn_lastagent_account_msdyn_recordId: DevKit.Controls.NavigationItem;
			msdyn_msdyn_preferredagent_account_msdyn_recordId: DevKit.Controls.NavigationItem;
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: DevKit.Controls.NavigationItem;
			msdyn_playbookinstance_account: DevKit.Controls.NavigationItem;
			msdyn_sabackupdiagnostic_account_msdyn_target: DevKit.Controls.NavigationItem;
			msdyn_salesaccelerationinsights_account: DevKit.Controls.NavigationItem;
			msdyn_salesagentrun_account: DevKit.Controls.NavigationItem;
			msdyn_salesroutingdiagnostic_account_msdyn_target: DevKit.Controls.NavigationItem;
			msdyn_salessuggestion_account: DevKit.Controls.NavigationItem;
			msdyn_sequencetarget_account_msdyn_target: DevKit.Controls.NavigationItem;
			msdyn_stakeholderresearchoutput_Account_account: DevKit.Controls.NavigationItem;
			msdyn_swarm_account: DevKit.Controls.NavigationItem;
			msevtmgt_account_msevtmgt_eventvendor_Account: DevKit.Controls.NavigationItem;
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: DevKit.Controls.NavigationItem;
			opportunity_customer_accounts: DevKit.Controls.NavigationItem;
			opportunity_parent_account: DevKit.Controls.NavigationItem;
			order_customer_accounts: DevKit.Controls.NavigationItem;
			quote_customer_accounts: DevKit.Controls.NavigationItem;
			SourceAccount_BulkOperationLogs: DevKit.Controls.NavigationItem;
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface Grid {
			ChildAccounts: DevKit.Controls.Grid;
			Contacts: DevKit.Controls.Grid;
			DocumentsSubGrid: DevKit.Controls.Grid;
			InsuranceEntitlementsSubgridControl: DevKit.Controls.Grid;
			InsuranceProvidedSubgridControl: DevKit.Controls.Grid;
			trade_coverages: DevKit.Controls.Grid;
			WarrantiesProvidedGrid: DevKit.Controls.Grid;
			WarrantyCoveredBySubgrid: DevKit.Controls.Grid;
			WarrantyHeldGrid: DevKit.Controls.Grid;
			Work_Orders: DevKit.Controls.Grid;
		}
	}
	export class FormAccount extends DevKit.IForm {
		/**
		* Account [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The ExecutionContext of form Account */
		ExecutionContext: DevKit.ExecutionContext;
		/** The Body section of form Account */
		Body: DevKit.FormAccount.Body;
		/** The Header section of form Account */
		Header: DevKit.FormAccount.Header;
		/** The Navigation of form Account */
		Navigation: DevKit.FormAccount.Navigation;
		/** The QuickForm of form Account */
		QuickForm: DevKit.FormAccount.QuickForm;
		/** The Grid of form Account */
		Grid: DevKit.FormAccount.Grid;
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
			/** Insurance_carrier = 13*/
			Insurance_carrier = 13,
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
		enum msdyn_TravelChargeType {
			/** Fixed = 690970002*/
			Fixed = 690970002,
			/** Hourly = 690970000*/
			Hourly = 690970000,
			/** Mileage = 690970001*/
			Mileage = 690970001,
			/** None = 690970003*/
			None = 690970003
		}
		enum msevtmgt_HotelGroup {
			/** No = 100000001*/
			No = 100000001,
			/** Yes = 100000002*/
			Yes = 100000002
		}
		enum msevtmgt_RentalCarProvider {
			/** No = 100000001*/
			No = 100000001,
			/** Yes = 100000002*/
			Yes = 100000002
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