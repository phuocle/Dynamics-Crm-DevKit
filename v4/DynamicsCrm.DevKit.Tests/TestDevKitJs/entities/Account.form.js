'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAccount_DevKitV4 = function(executionContext, defaultWebResourceName) {
		const form = {
			body: ["Contacts", "IFRAME_PhuocLe", "OwnerId", "OwnerId1", "v4_Boolean", "v4_DateOnly", "v4_DateTime", "v4_Decimal", "v4_Double", "v4_Integer", "v4_Lookup", "v4_Lookup1", "v4_Lookup2", "v4_Memo", "v4_Money", "v4_MultiOptionSet", "v4_OptionSet", "v4_String", "v4_String1", "v4_String2"],
			tab: ["TAB_1___TAB_1_SECTION_1", "TAB_1___TAB_1_SECTION_2", "TAB_1___TAB_1_SECTION_3", "TAB_1___TAB_1_SECTION_4", "TAB_2___TAB_2_SECTION_1", "TAB_2___TAB_2_SECTION_2"],
			header: ["v4_Integer", "v4_Integer1", "v4_OptionSet", "v4_String"],
			bpf: ["AccountBPF___IndustryCode", "AccountBPF___Name", "AccountBPF___PrimaryContactId", "AccountBPF___Revenue", ],
			quick: ["ContactQuickForm___EMailAddress1", "ContactQuickForm___FirstName", "ContactQuickForm___LastName", "ContactQuickForm___MobilePhone", "ContactQuickForm___ParentCustomerId"],
			grid: ["Contacts"],
			navigation: ["account_adx_inviteredemptions", "account_adx_portalcomments", "Account_Appointments", "account_DeletedItemReferences", "Account_Email_EmailSender", "Account_Email_SendersAccount", "Account_Emails", "account_parent_account", "Account_Phonecalls", "Account_Tasks", "adx_invitation_assigntoaccount", "bpf_account_v4_accountbpf", "contact_customer_accounts", "msa_account_managingpartner", "msa_contact_managingpartner"],
			dialog: ["Telephone1"]
		};
		return devKit.LoadFormV2(executionContext, defaultWebResourceName, form);
	};
})(DevKit || (DevKit = {}));
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
		v4_Categories : { Category_A: 100000000, Category_B: 100000001, Category_C: 100000002, Category_D: 100000003 },
		v4_MultiOptionSet : { Category_A: 100000000, Category_B: 100000001, Category_C: 100000002, Category_D: 100000003 },
		v4_OptionSet : { Category_A: 100000000, Category_B: 100000001, Category_C: 100000002, Category_D: 100000003 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));