'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormContact = function(executionContext, defaultWebResourceName) {
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
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FollowEmail: {},
			FullName: {},
			GenderCode: {},
			JobTitle: {},
			mapcontrol: {},
			MobilePhone: {},
			notescontrol: {},
			ParentCustomerId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode_1: {},
			SpousesName: {},
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
					Summary_section_6: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
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
			navAsyncOperations: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyStar.FormContact_Information = function(executionContext, defaultWebResourceName) {
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
			Department: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			GenderCode: {},
			JobTitle: {},
			LastName: {},
			ManagerName: {},
			ManagerPhone: {},
			MiddleName: {},
			MobilePhone: {},
			notescontrol: {},
			OwnerId: {},
			ParentCustomerId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			Salutation: {},
			SpousesName: {},
			Telephone1: {},
			Telephone2: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
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
})(LuckyStar || (LuckyStar = {}));
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