'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAccount = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			AccountNumber: {},
			ActionCards: {},
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			ChildAccounts: {},
			Contacts: {},
			CreatedOn: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			devkit_CategoryCode: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			Fax: {},
			FollowEmail: {},
			IFRAME_PHUOCLE: {},
			IndustryCode: {},
			mapcontrol: {},
			ModifiedOn: {},
			Name: {},
			Name1: {},
			Name2: {},
			notescontrol: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			PrimaryContactId1: {},
			SIC: {},
			Telephone1: {},
			TickerSymbol: {},
			TransactionCurrencyId: {},
			WebSiteURL: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					BILLING: {},
					ChildAccounts: {},
					COMPANY_PROFILE: {},
					CONTACT_PREFERENCES: {},
					DETAILS_TAB_section_6: {},
					SHIPPING: {}
				}
			},
			RESOUCES_TAB: {
				Section: {
					tab_3_section_1: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					ACCOUNT_INFORMATION: {},
					ADDRESS: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_section_6: {},
					SUMMARY_TAB_section_6: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			Name: {},
			Name1: {},
			Name2: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var footer = {
			CreditLimit: {},
			StateCode: {},
			StatusCode: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		var _BPF_Account = {
			IndustryCode: {},
			Name: {},
			Name_1: {},
			Name_2: {},
			NumberOfEmployees: {},
			OwnerId: {},
			Revenue: {}
		}
		devKit.LoadFields(formContext, _BPF_Account, "header_process_");
		process.BPF_Account = _BPF_Account;
		form.Process = process;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			ChildAccounts: {},
			Contacts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAddresses: {},
			navAsyncOperations: {},
			navCampaignsInSFA: {},
			navProcessSessions: {},
			navRelationships: {},
			navSubAccts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAccount_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			Contacts: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			Fax: {},
			FollowEmail: {},
			IndustryCode: {},
			Name: {},
			notescontrol: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			PrimaryContactId1: {},
			SIC: {},
			Telephone1: {},
			TransactionCurrencyId: {},
			WebSiteURL: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					BILLING: {},
					COMPANY_PROFILE: {},
					CONTACT_PREFERENCES: {},
					DETAILS_TAB_section_6: {},
					SHIPPING: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					ACCOUNT_INFORMATION: {},
					Timeline: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			NumberOfEmployees: {},
			OwnerId: {},
			Revenue: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _BPF_Account = {
			IndustryCode: {},
			Name: {},
			Name_1: {},
			Name_2: {},
			NumberOfEmployees: {},
			OwnerId: {},
			Revenue: {}
		}
		devKit.LoadFields(formContext, _BPF_Account, "header_process_");
		process.BPF_Account = _BPF_Account;
		form.Process = process;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Contacts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navAddresses: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			navRelationships: {},
			navSubAccts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAccount_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			accountactivitiesgrid: {},
			AccountCategoryCode: {},
			accountContactsGrid: {},
			AccountNumber: {},
			Address1_AddressTypeCode: {},
			Address1_City: {},
			Address1_Country: {},
			Address1_FreightTermsCode: {},
			Address1_Line1: {},
			Address1_Line2: {},
			Address1_Line3: {},
			Address1_Name: {},
			Address1_PostalCode: {},
			Address1_ShippingMethodCode: {},
			Address1_StateOrProvince: {},
			Address1_Telephone1: {},
			CreditLimit: {},
			CreditOnHold: {},
			CustomerTypeCode: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			EMailAddress1: {},
			Fax: {},
			FollowEmail: {},
			IndustryCode: {},
			Name: {},
			notescontrol: {},
			NumberOfEmployees: {},
			OwnerId: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			Revenue: {},
			SIC: {},
			Telephone1: {},
			Telephone2: {},
			TickerSymbol: {},
			TransactionCurrencyId: {},
			WebSiteURL: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			administration: {
				Section: {
					contact_methods: {},
					internal_information: {}
				}
			},
			contacts: {
				Section: {
					contacts: {}
				}
			},
			details: {
				Section: {
					billing_information: {},
					description_2: {},
					professional_information: {}
				}
			},
			general: {
				Section: {
					account_information: {},
					address: {},
					description: {},
					shipping_information: {}
				}
			},
			notes_and_activities: {
				Section: {
					activities: {},
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreditLimit: {},
			OwnerId: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			Revenue: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _BPF_Account = {
			IndustryCode: {},
			Name: {},
			Name_1: {},
			Name_2: {},
			NumberOfEmployees: {},
			OwnerId: {},
			Revenue: {}
		}
		devKit.LoadFields(formContext, _BPF_Account, "header_process_");
		process.BPF_Account = _BPF_Account;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			accountactivitiesgrid: {},
			accountContactsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navActivityHistory: {},
			navAddresses: {},
			navRelationships: {},
			navSubAct: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAccount_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
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
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Account = {
		AccountCategoryCode : {
			Preferred_Customer: 1,
			Standard: 2
		},
		AccountClassificationCode : {
			Default_Value: 1
		},
		AccountRatingCode : {
			Default_Value: 1
		},
		Address1_AddressTypeCode : {
			Bill_To: 1,
			Other: 4,
			Primary: 3,
			Ship_To: 2
		},
		Address1_FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		Address1_ShippingMethodCode : {
			Airborne: 1,
			DHL: 2,
			FedEx: 3,
			Full_Load: 6,
			Postal_Mail: 5,
			UPS: 4,
			Will_Call: 7
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_FreightTermsCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
		},
		BusinessTypeCode : {
			Default_Value: 1
		},
		CustomerSizeCode : {
			Default_Value: 1
		},
		CustomerTypeCode : {
			Competitor: 1,
			Consultant: 2,
			Customer: 3,
			Influencer: 6,
			Investor: 4,
			Other: 12,
			Partner: 5,
			Press: 7,
			Prospect: 8,
			Reseller: 9,
			Supplier: 10,
			Vendor: 11
		},
		devkit_CategoryCode : {
			Business: 1,
			Family: 2,
			Other: 5,
			Sales: 4,
			Sales_Team: 1001,
			Service: 1002,
			Social: 3,
			Stakeholder: 1000
		},
		IndustryCode : {
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
		},
		OwnershipCode : {
			Other: 4,
			Private: 2,
			Public: 1,
			Subsidiary: 3
		},
		PaymentTermsCode : {
			_2_10_Net_30: 2,
			Net_30: 1,
			Net_45: 3,
			Net_60: 4
		},
		PreferredAppointmentDayCode : {
			Friday: 5,
			Monday: 1,
			Saturday: 6,
			Sunday: 0,
			Thursday: 4,
			Tuesday: 2,
			Wednesday: 3
		},
		PreferredAppointmentTimeCode : {
			Afternoon: 2,
			Evening: 3,
			Morning: 1
		},
		PreferredContactMethodCode : {
			Any: 1,
			Email: 2,
			Fax: 4,
			Mail: 5,
			Phone: 3
		},
		ShippingMethodCode : {
			Default_Value: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
		},
		TerritoryCode : {
			Default_Value: 1
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));