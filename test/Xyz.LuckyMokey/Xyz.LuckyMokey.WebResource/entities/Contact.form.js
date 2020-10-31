'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormContact_AI_for_Sales = function(executionContext, defaultWebResourceName) {
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
			Address1_ShippingMethodCode: {},
			Anniversary: {},
			BirthDate: {},
			contactopportunitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FollowEmail: {},
			FullName: {},
			GenderCode: {},
			JobTitle: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MobilePhone: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId_1: {},
			ParentCustomerId_2: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode_1: {},
			SpousesName: {},
			TalkingPoints: {},
			Telephone1: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					TalkingPoints_section: {},
					Summary_section_6: {},
					CUSTOMER_DETAILS_TAB: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					marketing_information: {},
					CONTACT_PREFERENCES: {},
					billing_information: {},
					shipping_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			contactquickform: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navInvoices: {},
			navOrders: {},
			navQuotes: {},
			navAddresses: {},
			navSubConts: {},
			navRelationships: {},
			navAsyncOperations: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormContact = function(executionContext, defaultWebResourceName) {
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
			Address1_Longitude: {},
			Address1_ShippingMethodCode: {},
			Anniversary: {},
			BirthDate: {},
			BusinessCard: {},
			contactcasessgrid: {},
			contactopportunitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DocumentsSubGrid: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FollowEmail: {},
			FullName: {},
			GenderCode: {},
			JobTitle: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MobilePhone: {},
			msdyusd_CurrentProfile: {},
			msdyusd_Facebook: {},
			msdyusd_Twitter: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId_1: {},
			ParentCustomerId_2: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode_1: {},
			SpousesName: {},
			subgrid_Entitlement: {},
			TalkingPoints: {},
			Telephone1: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					MapSection: {},
					BusinessCard: {},
					SOCIAL_PANE_TAB: {},
					TalkingPoints_section: {},
					Summary_section_6: {},
					CUSTOMER_DETAILS_TAB: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					marketing_information: {},
					CONTACT_PREFERENCES: {},
					billing_information: {},
					shipping_information: {}
				}
			},
			urstab: {
				Section: {
					urstab_section_general: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
				}
			},
			documents_sharepoint: {
				Section: {
					documents_sharepoint_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			contactquickform: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navAddresses: {},
			navSubConts: {},
			navRelationships: {},
			navQuotes: {},
			navOrders: {},
			navInvoices: {},
			navProcessSessions: {},
			navAsyncOperations: {},
			nav_contact_bookableresource_ContactId: {},
			nav_msdyn_contact_msdyn_purchaseorder_VendorSalesPerson: {},
			nav_msdyn_contact_msdyn_rma_RequestedByContact: {},
			nav_msdyn_contact_msdyn_rtv_VendorContact: {},
			nav_msdyn_contact_msdyn_workorder_ReportedByContact: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormContact_Mobile = function(executionContext, defaultWebResourceName) {
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
			CONTACTS: {},
			EMailAddress1: {},
			Fax: {},
			FullName: {},
			INVOICES: {},
			JobTitle: {},
			MobilePhone: {},
			notescontrol: {},
			ORDERS: {},
			OwnerId: {},
			ParentCustomerId: {},
			PreferredContactMethodCode: {},
			QUOTES: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_summary: {
				Section: {
					fstab_summary_section_contact_information: {}
				}
			},
			fstab_address: {
				Section: {
					fstab_address_section_address: {},
					tab_2_section_2: {},
					tab_2_section_3: {}
				}
			},
			fstab_other: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {},
					tab_4_section_3: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navInvoices: {},
			navQuotes: {},
			navContracts: {},
			navRelationships: {},
			navAddresses: {},
			navOrders: {},
			navSubConts: {},
			navListsInSFA: {},
			navEntitlement: {},
			navCampaignsInSFA: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			nav_msdyn_contact_msdyn_rma_RequestedByContact: {},
			nav_msdyn_contact_msdyn_rtv_VendorContact: {},
			nav_msdyn_contact_msdyn_workorder_ReportedByContact: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormContact_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
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
			Anniversary: {},
			BirthDate: {},
			contactcasessgrid: {},
			contactopportunitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			EMailAddress1_1: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			FollowEmail: {},
			GenderCode: {},
			LastName: {},
			LastUsedInCampaign: {},
			MobilePhone: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId_1: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode_1: {},
			SpousesName: {},
			subgrid_Entitlement: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					Timeline: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					marketing_information: {},
					CONTACT_PREFERENCES: {},
					billing_information: {},
					shipping_information: {}
				}
			},
			conflictstab: {
				Section: {
					conflictssection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EMailAddress1: {},
			JobTitle: {},
			OwnerId: {},
			Telephone1: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			contactquickform: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navAddresses: {},
			navSubConts: {},
			navRelationships: {},
			navCampaignsInSFA: {},
			navProcessSessions: {},
			navAsyncOperations: {},
			navContracts: {},
			navQuotes: {},
			navOrders: {},
			navInvoices: {},
			navListsInSFA: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormContact_Information = function(executionContext, defaultWebResourceName) {
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
			AccountRoleCode: {},
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
			Anniversary: {},
			AssistantName: {},
			AssistantPhone: {},
			BirthDate: {},
			contactactivitiesgrid: {},
			CreditLimit: {},
			CreditOnHold: {},
			DefaultPriceLevelId: {},
			Department: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			GenderCode: {},
			JobTitle: {},
			LastName: {},
			LastUsedInCampaign: {},
			ManagerName: {},
			ManagerPhone: {},
			MiddleName: {},
			MobilePhone: {},
			notescontrol: {},
			OriginatingLeadId: {},
			OwnerId: {},
			ParentCustomerId: {},
			PaymentTermsCode: {},
			PreferredAppointmentDayCode: {},
			PreferredAppointmentTimeCode: {},
			PreferredContactMethodCode: {},
			PreferredEquipmentId: {},
			PreferredServiceId: {},
			PreferredSystemUserId: {},
			Salutation: {},
			SpousesName: {},
			Telephone1: {},
			Telephone2: {},
			TransactionCurrencyId: {},
			WebResource_RecordWall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
				}
			},
			general: {
				Section: {
					name: {},
					address: {},
					shipping_information: {},
					description: {}
				}
			},
			details: {
				Section: {
					professional_information: {},
					personal_information: {}
				}
			},
			notes_and_activities: {
				Section: {
					activities: {},
					notes: {}
				}
			},
			administration: {
				Section: {
					internal_information: {},
					billing_information: {},
					contact_methods: {}
				}
			},
			conflictstab: {
				Section: {
					conflictssection: {},
					marketing_information: {},
					service_preferences: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EMailAddress1: {},
			OwnerId: {},
			PreferredContactMethodCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navAddresses: {},
			navSubConts: {},
			navActivities: {},
			navActivityHistory: {},
			navRelationships: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormTimelineWallControl_Contact_Main = function(executionContext, defaultWebResourceName) {
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
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					SOCIAL_PANE_TAB: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Contact = {
		AccountRoleCode : {
			Decision_Maker: 1,
			Employee: 2,
			Influencer: 3
		},
		Address1_AddressTypeCode : {
			Bill_To: 1,
			Ship_To: 2,
			Primary: 3,
			Other: 4
		},
		Address1_FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		Address1_ShippingMethodCode : {
			Airborne: 1,
			DHL: 2,
			FedEx: 3,
			UPS: 4,
			Postal_Mail: 5,
			Full_Load: 6,
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
		Address3_AddressTypeCode : {
			Default_Value: 1
		},
		Address3_FreightTermsCode : {
			Default_Value: 1
		},
		Address3_ShippingMethodCode : {
			Default_Value: 1
		},
		CustomerSizeCode : {
			Default_Value: 1
		},
		CustomerTypeCode : {
			Default_Value: 1
		},
		EducationCode : {
			Default_Value: 1
		},
		FamilyStatusCode : {
			Single: 1,
			Married: 2,
			Divorced: 3,
			Widowed: 4
		},
		GenderCode : {
			Male: 1,
			Female: 2
		},
		HasChildrenCode : {
			Default_Value: 1
		},
		LeadSourceCode : {
			Default_Value: 1
		},
		msdyn_orgchangestatus : {
			No_Feedback: 0,
			Not_at_Company: 1,
			Ignore: 2
		},
		PaymentTermsCode : {
			Net_30: 1,
			_2_10_Net_30: 2,
			Net_45: 3,
			Net_60: 4
		},
		PreferredAppointmentDayCode : {
			Sunday: 0,
			Monday: 1,
			Tuesday: 2,
			Wednesday: 3,
			Thursday: 4,
			Friday: 5,
			Saturday: 6
		},
		PreferredAppointmentTimeCode : {
			Morning: 1,
			Afternoon: 2,
			Evening: 3
		},
		PreferredContactMethodCode : {
			Any: 1,
			Email: 2,
			Phone: 3,
			Fax: 4,
			Mail: 5
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