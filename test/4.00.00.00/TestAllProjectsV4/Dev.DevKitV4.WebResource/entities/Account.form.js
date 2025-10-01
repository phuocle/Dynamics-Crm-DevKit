'use strict';
/** @namespace DevKitV4 */
var DevKitV4;
(function (DevKitV4) {
	'use strict';
	DevKitV4.FormAccount = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["ActionCards", "Address1_Composite", "Address1_FreightTermsCode", "Address1_ShippingMethodCode", "ChildAccounts", "Contacts", "CreatedOn", "CreditLimit", "CreditOnHold", "Description", "devkit_CategoryCode", "DoNotBulkEMail", "DoNotEMail", "DoNotFax", "DoNotPhone", "DoNotPostalMail", "Fax", "FollowEmail", "IFRAME_PHUOCLE", "IndustryCode", "mapcontrol", "ModifiedOn", "Name", "Name1", "notescontrol", "OwnershipCode", "ParentAccountId", "PaymentTermsCode", "PreferredContactMethodCode", "PrimaryContactId", "PrimaryContactId1", "SIC", "Telephone1", "TickerSymbol", "TransactionCurrencyId", "WebSiteURL"],
			tab: ["DETAILS_TAB___BILLING", "DETAILS_TAB___ChildAccounts", "DETAILS_TAB___COMPANY_PROFILE", "DETAILS_TAB___CONTACT_PREFERENCES", "DETAILS_TAB___DETAILS_TAB_section_6", "DETAILS_TAB___SHIPPING", "SUMMARY_TAB___ACCOUNT_INFORMATION", "SUMMARY_TAB___ADDRESS", "SUMMARY_TAB___MapSection", "SUMMARY_TAB___SOCIAL_PANE_TAB", "SUMMARY_TAB___Summary_section_6", "SUMMARY_TAB___SUMMARY_TAB_section_6"],
			header: ["NumberOfEmployees", "OwnerId", "Revenue"],
			bpf: ["BPF_Account___Name", "BPF_Account___Name_1", "BPF_Account_v4_1___AccountNumber", "BPF_Account_v4_1___AccountRatingCode", "BPF_Account_v4_1___Address1_County", "BPF_Account_v4_1___Description", "BPF_Account_v4_1___Name", "BPF_Account_v4_1___SIC", ],
			grid: ["ChildAccounts", "Contacts"],
			navigation: ["account_adx_inviteredemptions", "account_adx_portalcomments", "Account_Appointments", "Account_Email_EmailSender", "Account_Email_SendersAccount", "Account_Emails", "account_msfp_alerts", "account_msfp_surveyinvites", "account_msfp_surveyresponses", "account_parent_account", "Account_Phonecalls", "Account_Tasks", "adx_invitation_assigntoaccount", "bpf_account_devkit_bpfaccount", "bpf_account_v4_bpf_account_v4_1", "contact_customer_accounts", "msa_account_managingpartner", "msa_contact_managingpartner"],
		};
		devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKitV4.FormAccount_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Address1_Composite", "Address1_FreightTermsCode", "Address1_ShippingMethodCode", "Contacts", "CreditLimit", "CreditOnHold", "Description", "DoNotBulkEMail", "DoNotEMail", "DoNotFax", "DoNotPhone", "DoNotPostalMail", "Fax", "FollowEmail", "IndustryCode", "Name", "notescontrol", "OwnershipCode", "ParentAccountId", "PaymentTermsCode", "PreferredContactMethodCode", "PrimaryContactId", "PrimaryContactId1", "SIC", "Telephone1", "TransactionCurrencyId", "WebSiteURL"],
			tab: ["DETAILS_TAB___BILLING", "DETAILS_TAB___COMPANY_PROFILE", "DETAILS_TAB___CONTACT_PREFERENCES", "DETAILS_TAB___DETAILS_TAB_section_6", "DETAILS_TAB___SHIPPING", "SUMMARY_TAB___ACCOUNT_INFORMATION", "SUMMARY_TAB___Timeline"],
			header: ["NumberOfEmployees", "OwnerId", "Revenue"],
			bpf: ["BPF_Account___Name", "BPF_Account___Name_1", "BPF_Account_v4_1___AccountNumber", "BPF_Account_v4_1___AccountRatingCode", "BPF_Account_v4_1___Address1_County", "BPF_Account_v4_1___Description", "BPF_Account_v4_1___Name", "BPF_Account_v4_1___SIC", ],
			grid: ["Contacts"],
			navigation: ["account_adx_inviteredemptions", "account_adx_portalcomments", "Account_Appointments", "Account_Email_EmailSender", "Account_Email_SendersAccount", "Account_Emails", "account_msfp_alerts", "account_msfp_surveyinvites", "account_msfp_surveyresponses", "account_parent_account", "Account_Phonecalls", "Account_Tasks", "adx_invitation_assigntoaccount", "bpf_account_devkit_bpfaccount", "bpf_account_v4_bpf_account_v4_1", "contact_customer_accounts", "msa_account_managingpartner", "msa_contact_managingpartner"],
		};
		devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKitV4.FormAccount_Information = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["accountactivitiesgrid", "AccountCategoryCode", "accountContactsGrid", "AccountNumber", "Address1_AddressTypeCode", "Address1_City", "Address1_Country", "Address1_FreightTermsCode", "Address1_Line1", "Address1_Line2", "Address1_Line3", "Address1_Name", "Address1_PostalCode", "Address1_ShippingMethodCode", "Address1_StateOrProvince", "Address1_Telephone1", "CreditLimit", "CreditOnHold", "CustomerTypeCode", "Description", "DoNotBulkEMail", "DoNotEMail", "DoNotFax", "DoNotPhone", "DoNotPostalMail", "EMailAddress1", "Fax", "FollowEmail", "IndustryCode", "Name", "notescontrol", "NumberOfEmployees", "OwnerId", "OwnershipCode", "ParentAccountId", "PaymentTermsCode", "PreferredContactMethodCode", "PrimaryContactId", "Revenue", "SIC", "Telephone1", "Telephone2", "TickerSymbol", "TransactionCurrencyId", "WebSiteURL"],
			tab: ["administration___contact_methods", "administration___internal_information", "contacts___contacts", "details___billing_information", "details___description_2", "details___professional_information", "general___account_information", "general___address", "general___description", "general___shipping_information", "notes_and_activities___activities", "notes_and_activities___notes"],
			header: ["CreditLimit", "OwnerId", "PreferredContactMethodCode", "PrimaryContactId", "Revenue"],
			bpf: ["BPF_Account___Name", "BPF_Account___Name_1", "BPF_Account_v4_1___AccountNumber", "BPF_Account_v4_1___AccountRatingCode", "BPF_Account_v4_1___Address1_County", "BPF_Account_v4_1___Description", "BPF_Account_v4_1___Name", "BPF_Account_v4_1___SIC", ],
			grid: ["accountactivitiesgrid", "accountContactsGrid"],
			navigation: ["account_adx_inviteredemptions", "account_adx_portalcomments", "Account_Appointments", "Account_Email_EmailSender", "Account_Email_SendersAccount", "Account_Emails", "account_msfp_alerts", "account_msfp_surveyinvites", "account_msfp_surveyresponses", "account_parent_account", "Account_Phonecalls", "Account_Tasks", "adx_invitation_assigntoaccount", "bpf_account_devkit_bpfaccount", "bpf_account_v4_bpf_account_v4_1", "contact_customer_accounts", "msa_account_managingpartner", "msa_contact_managingpartner"],
		};
		devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
	DevKitV4.FormAccount_Quick_Create = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Address1_City", "Address1_Line1", "Address1_Line2", "Address1_PostalCode", "Description", "Name", "NumberOfEmployees", "PrimaryContactId", "Revenue", "Telephone1"],
			tab: ["tab_1___tab_1_column_1_section_1", "tab_1___tab_1_column_2_section_1", "tab_1___tab_1_column_3_section_1"],
		};
		devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKitV4 || (DevKitV4 = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Account = {
		AccountCategoryCode : { Preferred_Customer: 1, Standard: 2 },
		AccountClassificationCode : { Default_Value: 1 },
		AccountRatingCode : { Default_Value: 1 },
		Address1_AddressTypeCode : { Bill_To: 1, Other: 4, Primary: 3, Ship_To: 2 },
		Address1_FreightTermsCode : { FOB: 1, No_Charge: 2 },
		Address1_ShippingMethodCode : { Airborne: 1, DHL: 2, FedEx: 3, Full_Load: 6, Postal_Mail: 5, UPS: 4, Will_Call: 7 },
		Address2_AddressTypeCode : { Default_Value: 1 },
		Address2_FreightTermsCode : { Default_Value: 1 },
		Address2_ShippingMethodCode : { Default_Value: 1 },
		BusinessTypeCode : { Default_Value: 1 },
		CustomerSizeCode : { Default_Value: 1 },
		CustomerTypeCode : { Competitor: 1, Consultant: 2, Customer: 3, Influencer: 6, Investor: 4, Other: 12, Partner: 5, Press: 7, Prospect: 8, Reseller: 9, Supplier: 10, Vendor: 11 },
		devkit_CategoryCode : { Business: 1, Family: 2, Other: 5, Sales: 4, Sales_Team: 1001, Service: 1002, Social: 3, Stakeholder: 1000 },
		IndustryCode : { Accounting: 1, Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2, Broadcasting_Printing_and_Publishing: 3, Brokers: 4, Building_Supply_Retail: 5, Business_Services: 6, Consulting: 7, Consumer_Services: 8, Design_Direction_and_Creative_Management: 9, Distributors_Dispatchers_and_Processors: 10, Doctors_Offices_and_Clinics: 11, Durable_Manufacturing: 12, Eating_and_Drinking_Places: 13, Entertainment_Retail: 14, Equipment_Rental_and_Leasing: 15, Financial: 16, Food_and_Tobacco_Processing: 17, Inbound_Capital_Intensive_Processing: 18, Inbound_Repair_and_Services: 19, Insurance: 20, Legal_Services: 21, Non_Durable_Merchandise_Retail: 22, Outbound_Consumer_Service: 23, Petrochemical_Extraction_and_Distribution: 24, Service_Retail: 25, SIG_Affiliations: 26, Social_Services: 27, Special_Outbound_Trade_Contractors: 28, Specialty_Realty: 29, Transportation: 30, Utility_Creation_and_Distribution: 31, Vehicle_Retail: 32, Wholesale: 33 },
		OwnershipCode : { Other: 4, Private: 2, Public: 1, Subsidiary: 3 },
		PaymentTermsCode : { _2_10_Net_30: 2, Net_30: 1, Net_45: 3, Net_60: 4 },
		PreferredAppointmentDayCode : { Friday: 5, Monday: 1, Saturday: 6, Sunday: 0, Thursday: 4, Tuesday: 2, Wednesday: 3 },
		PreferredAppointmentTimeCode : { Afternoon: 2, Evening: 3, Morning: 1 },
		PreferredContactMethodCode : { Any: 1, Email: 2, Fax: 4, Mail: 5, Phone: 3 },
		ShippingMethodCode : { Default_Value: 1 },
		StateCode : { Active: 0, Inactive: 1 },
		StatusCode : { Active: 1, Inactive: 2 },
		TerritoryCode : { Default_Value: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));