Kool.Utility = Kool.Form.LoadUtility();
Kool.Form.Account = function (executionContext) {
	var formContext = executionContext.getFormContext();
	var form = Kool.Form.LoadForm(formContext);
	var body = {
		Address1_Composite: {},
		Address1_FreightTermsCode: {},
		Address1_ShippingMethodCode: {},
		CreditLimit: {},
		CreditOnHold: {},
		Description: {},
		DoNotBulkEMail: {},
		DoNotEMail: {},
		DoNotFax: {},
		DoNotPhone: {},
		DoNotPostalMail: {},
		DoNotSendMM: {},
		Fax: {},
		FollowEmail: {},
		IndustryCode: {},
		LastUsedInCampaign: {},
		Name: {},
		OriginatingLeadId: {},
		OwnershipCode: {},
		ParentAccountId: {},
		PaymentTermsCode: {},
		PreferredContactMethodCode: {},
		PrimaryContactId: {},
		PrimaryContactId: {},
		SIC: {},
		Telephone1: {},
		TickerSymbol: {},
		TransactionCurrencyId: {},
		WebSiteURL: {}
	}
	Kool.Form.LoadFields(formContext, body);
	var tab = {
		SUMMARY_TAB: {
			Section: {
				ACCOUNT_INFORMATION: {},
				ADDRESS: {},
				MapSection: {},
				SOCIAL_PANE_TAB: {},
				Summary_section_6: {},
				SUMMARY_TAB_section_6: {}
			},
		},
		DETAILS_TAB: {
			Section: {
				COMPANY_PROFILE: {},
				DETAILS_TAB_section_6: {},
				MARKETING: {},
				CONTACT_PREFERENCES: {},
				BILLING: {},
				SHIPPING: {},
				ChildAccounts: {}
			},
		}
	}
	Kool.Form.LoadTabs(formContext, tab);
	body.Tab = tab;
	form.Body = body;
	var header = {
		NumberOfEmployees: {},
		OwnerId: {},
		Revenue: {}
	}
	Kool.Form.LoadFields(formContext, header, "header_");
	form.Header = header;
	var quickForm = {
		contactquickform: {}
	}
	Kool.Form.LoadQuickForms(formContext, quickForm);
	form.QuickForm = quickForm;
	var navigation = {
		navAddresses: {},
		navSubAccts: {},
		navRelationships: {},
		navCampaignsInSFA: {},
		navProcessSessions: {},
		navAsyncOperations: {},
		navContracts: {},
		navQuotes: {},
		navOrders: {},
		navInvoices: {}
	}
	Kool.Form.LoadNavigations(formContext, navigation);
	form.Navigation = navigation;
	return form;
}
Kool.Form.Account2 = function (executionContext) {
	var formContext = executionContext.getFormContext();
	var form = Kool.Form.LoadForm(formContext);
	var body = {
		Address1_Composite: {},
		Address1_FreightTermsCode: {},
		Address1_ShippingMethodCode: {},
		CreditLimit: {},
		CreditOnHold: {},
		Description: {},
		DoNotBulkEMail: {},
		DoNotEMail: {},
		DoNotFax: {},
		DoNotPhone: {},
		DoNotPostalMail: {},
		DoNotSendMM: {},
		Fax: {},
		FollowEmail: {},
		IndustryCode: {},
		LastUsedInCampaign: {},
		Name: {},
		OriginatingLeadId: {},
		OwnershipCode: {},
		ParentAccountId: {},
		PaymentTermsCode: {},
		PreferredContactMethodCode: {},
		PrimaryContactId: {},
		PrimaryContactId: {},
		SIC: {},
		Telephone1: {},
		TransactionCurrencyId: {},
		WebSiteURL: {}
	}
	Kool.Form.LoadFields(formContext, body);
	var tab = {
		SUMMARY_TAB: {
			Section: {
				ACCOUNT_INFORMATION: {},
				Timeline: {},
				ref_pan_SUMMARY_TAB_section_6: {}
			},
		},
		DETAILS_TAB: {
			Section: {
				COMPANY_PROFILE: {},
				DETAILS_TAB_section_6: {},
				MARKETING: {},
				CONTACT_PREFERENCES: {},
				BILLING: {},
				SHIPPING: {}
			},
		}
	}
	Kool.Form.LoadTabs(formContext, tab);
	body.Tab = tab;
	form.Body = body;
	var header = {
		NumberOfEmployees: {},
		OwnerId: {},
		Revenue: {}
	}
	Kool.Form.LoadFields(formContext, header, "header_");
	form.Header = header;
	var quickForm = {
		contactquickform: {}
	}
	Kool.Form.LoadQuickForms(formContext, quickForm);
	form.QuickForm = quickForm;
	var navigation = {
		navAddresses: {},
		navSubAccts: {},
		navRelationships: {},
		navProcessSessions: {},
		navAsyncOperations: {},
		navCampaignsInSFA: {},
		navContracts: {},
		navQuotes: {},
		navOrders: {},
		navInvoices: {}
	}
	Kool.Form.LoadNavigations(formContext, navigation);
	form.Navigation = navigation;
	return form;
}
Kool.Form.AccountQuickCreate = function (executionContext) {
	var formContext = executionContext.getFormContext();
	var form = Kool.Form.LoadForm(formContext);
	var section = {
		tab_1_column_1_section_1: {},
		tab_1_column_2_section_1: {},
		tab_1_column_3_section_1: {}
	}
	Kool.Form.LoadSections(formContext, section);
	form.Section = section;
	var body = {
		Address1_City: {},
		Address1_Line1: {},
		Address1_Line2: {},
		Address1_PostalCode: {},
		Description: {},
		Name: {},
		NumberOfEmployees: {},
		PrimaryContactId: {},
		Revenue: {},
		Telephone1: {}
	}
	Kool.Form.LoadFields(formContext, body);
	form.Body = body;
	return form;
}
OptionSet.AccountCategoryCode = {
	Preferred_Customer: 1,
	Standard: 2
}
OptionSet.AccountClassificationCode = {
	Default_Value: 1
}
OptionSet.AccountRatingCode = {
	Default_Value: 1
}
OptionSet.Address1_AddressTypeCode = {
	Bill_To: 1,
	Ship_To: 2,
	Primary: 3,
	Other: 4
}
OptionSet.Address1_FreightTermsCode = {
	FOB: 1,
	No_Charge: 2
}
OptionSet.Address1_ShippingMethodCode = {
	Airborne: 1,
	DHL: 2,
	FedEx: 3,
	UPS: 4,
	Postal_Mail: 5,
	Full_Load: 6,
	Will_Call: 7
}
OptionSet.Address2_AddressTypeCode = {
	Default_Value: 1
}
OptionSet.Address2_FreightTermsCode = {
	Default_Value: 1
}
OptionSet.Address2_ShippingMethodCode = {
	Default_Value: 1
}
OptionSet.BusinessTypeCode = {
	Default_Value: 1
}
OptionSet.CustomerSizeCode = {
	Default_Value: 1
}
OptionSet.CustomerTypeCode = {
	Competitor: 1,
	Consultant: 2,
	Customer: 3,
	Investor: 4,
	Partner: 5,
	Influencer: 6,
	Press: 7,
	Prospect: 8,
	Reseller: 9,
	Supplier: 10,
	Vendor: 11,
	Other: 12
}
OptionSet.IndustryCode = {
	Accounting: 1,
	Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
	Broadcasting_Printing_and_Publishing: 3,
	Brokers: 4,
	Building_Supply_Retail: 5,
	Business_Services: 6,
	Consulting: 7,
	Consumer_Services: 8,
	Design_Direction_and_Creative_Management: 9,
	Distributors_Dispatchers_and_Processors: 10,
	Doctors_Offices_and_Clinics: 11,
	Durable_Manufacturing: 12,
	Eating_and_Drinking_Places: 13,
	Entertainment_Retail: 14,
	Equipment_Rental_and_Leasing: 15,
	Financial: 16,
	Food_and_Tobacco_Processing: 17,
	Inbound_Capital_Intensive_Processing: 18,
	Inbound_Repair_and_Services: 19,
	Insurance: 20,
	Legal_Services: 21,
	Non_Durable_Merchandise_Retail: 22,
	Outbound_Consumer_Service: 23,
	Petrochemical_Extraction_and_Distribution: 24,
	Service_Retail: 25,
	SIG_Affiliations: 26,
	Social_Services: 27,
	Special_Outbound_Trade_Contractors: 28,
	Specialty_Realty: 29,
	Transportation: 30,
	Utility_Creation_and_Distribution: 31,
	Vehicle_Retail: 32,
	Wholesale: 33
}
OptionSet.OwnershipCode = {
	Public: 1,
	Private: 2,
	Subsidiary: 3,
	Other: 4
}
OptionSet.PaymentTermsCode = {
	Net_30: 1,
	_2_10_Net_30: 2,
	Net_45: 3,
	Net_60: 4
}
OptionSet.PreferredAppointmentDayCode = {
	Sunday: 0,
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6
}
OptionSet.PreferredAppointmentTimeCode = {
	Morning: 1,
	Afternoon: 2,
	Evening: 3
}
OptionSet.PreferredContactMethodCode = {
	Any: 1,
	Email: 2,
	Phone: 3,
	Fax: 4,
	Mail: 5
}
OptionSet.ShippingMethodCode = {
	Default_Value: 1
}
OptionSet.StateCode = {
	Active: 0,
	Inactive: 1
}
OptionSet.StatusCode = {
	Active: 1,
	Inactive: 2
}
OptionSet.TerritoryCode = {
	Default_Value: 1
}