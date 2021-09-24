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
			ActionCards: {},
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_Latitude: {},
			Address1_Latitude_1: {},
			Address1_Line1: {},
			Address1_Longitude: {},
			Address1_Longitude_1: {},
			Address1_ShippingMethodCode: {},
			Contacts: {},
			CreditLimit: {},
			CreditOnHold: {},
			CustomerTypeCode: {},
			DefaultPriceLevelId: {},
			DefaultPriceLevelId_1: {},
			Description: {},
			DocumentsSubGrid: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			Fax: {},
			IndustryCode: {},
			mapcontrol: {},
			msdyn_BillingAccount: {},
			msdyn_SalesTaxCode: {},
			msdyn_ServiceTerritory: {},
			msdyn_TaxExempt: {},
			msdyn_TaxExemptNumber: {},
			msdyn_TravelCharge: {},
			msdyn_TravelChargeType: {},
			msdyn_workhourtemplate: {},
			msdyn_WorkOrderInstructions: {},
			msdyusd_Facebook: {},
			msdyusd_Twitter: {},
			Name: {},
			Name_1: {},
			notescontrol: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PriceListsGrid: {},
			PrimaryContactId: {},
			PrimaryContactId_1: {},
			SIC: {},
			Telephone1: {},
			TickerSymbol: {},
			TransactionCurrencyId: {},
			WebSiteURL: {},
			Work_Orders: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			AssetsAndLocationsTab: {
				Section: {
					AssetsAndLocationsSection: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					BILLING: {},
					COMPANY_PROFILE: {},
					CONTACT_PREFERENCES: {},
					DETAILS_TAB_section_6: {},
					SHIPPING: {}
				}
			},
			documents_sharepoint: {
				Section: {
					documents_sharepoint_section: {}
				}
			},
			FieldService: {
				Section: {
					DETAILS_TAB_section_7: {},
					DETAILS_TAB_section_8: {},
					FieldService_section_3: {},
					FieldService_section_4: {}
				}
			},
			Pricing: {
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
			},
			urstab: {
				Section: {
					tab_3_section_2: {},
					tab_3_section_3: {},
					urstab_section_general: {}
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
			PriceListsGrid: {},
			Work_Orders: {},
			DocumentsSubGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_account_account_BillingAccount: {},
			nav_msdyn_account_msdyn_accountpricelist_Account: {},
			nav_msdyn_account_msdyn_actualfact_AccountCustomer: {},
			nav_msdyn_account_msdyn_actualfact_AccountVendor: {},
			nav_msdyn_account_msdyn_agreement_BillingAccount: {},
			nav_msdyn_account_msdyn_agreement_ServiceAccount: {},
			nav_msdyn_account_msdyn_customerasset_Account: {},
			nav_msdyn_account_msdyn_payment_Account: {},
			nav_msdyn_account_msdyn_project_Customer: {},
			nav_msdyn_account_msdyn_purchaseorder_Vendor: {},
			nav_msdyn_account_msdyn_rma_BillingAccount: {},
			nav_msdyn_account_msdyn_rma_ServiceAccount: {},
			nav_msdyn_account_msdyn_rmaproduct_Changeownership: {},
			nav_msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			nav_msdyn_account_msdyn_rtv_Vendor: {},
			nav_msdyn_account_msdyn_workorder_BillingAccount: {},
			nav_msdyn_account_msdyn_workorder_ServiceAccount: {},
			nav_msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			nav_msdyn_account_product_DefaultVendor: {},
			navActivities: {},
			navAddresses: {},
			navCampaignsInSFA: {},
			navConnections: {},
			navContacts: {},
			navEntitlement: {},
			navRelationships: {},
			navService: {},
			navSocialprofiles: {},
			navSubAccts: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
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
		msdyn_TravelChargeType : {
			Fixed: 690970002,
			Hourly: 690970000,
			Mileage: 690970001,
			None: 690970003
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