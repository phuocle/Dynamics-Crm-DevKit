'use strict';
/** @namespace Tfsvn */
var Tfsvn;
(function (Tfsvn) {
	'use strict';
	Tfsvn.FormAccount = function(executionContext, defaultWebResourceName) {
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
			accountcasessgrid: {},
			AccountNumber: {},
			ActionCards: {},
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_Line1: {},
			Address1_ShippingMethodCode: {},
			ChildAccounts: {},
			Contacts: {},
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
			Fax: {},
			FollowEmail: {},
			hs_tax_id: {},
			IndustryCode: {},
			LastUsedInCampaign: {},
			loan_chart_by_status: {},
			Name: {},
			notescontrol: {},
			OriginatingLeadId: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			SIC: {},
			Subgrid_loan_list: {},
			Telephone1: {},
			Telephone11: {},
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
					MARKETING: {},
					SHIPPING: {}
				}
			},
			documents_sharepoint: {
				Section: {
					documents_sharepoint_section: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					ACCOUNT_INFORMATION: {},
					ADDRESS: {},
					SOCIAL_PANE_TAB: {},
					SUMMARY_TAB_ADDRESSINPUT_SECTION: {},
					SUMMARY_TAB_section_6: {},
					SUMMARY_TAB_section_8: {}
				}
			},
			tab_5: {
				Section: {
					Summary_section_6: {}
				}
			},
			tab_loan_info: {
				Section: {
					_section_913: {},
					tab_4_section_loan_list: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			AccountNumber: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			accountcasessgrid: {},
			ChildAccounts: {},
			Contacts: {},
			DocumentsSubGrid: {},
			loan_chart_by_status: {},
			Subgrid_loan_list: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_adx_inviteredemptions: {},
			account_adx_portalcomments: {},
			Account_Appointments: {},
			account_bookableresource_AccountId: {},
			account_BulkOperations: {},
			account_CampaignResponses: {},
			account_customer_opportunity_roles: {},
			Account_Email_EmailSender: {},
			Account_Email_SendersAccount: {},
			Account_Emails: {},
			account_entitlement_Account: {},
			account_entitlement_Customer: {},
			account_hs_zns_messages: {},
			account_IncidentResolutions: {},
			account_msdyn_bookingalerts: {},
			account_msdyn_copilottranscripts: {},
			account_msdyn_ocliveworkitems: {},
			account_msdyn_ocoutboundmessages: {},
			account_msdyn_ocsessions: {},
			account_msdyn_ocvoicemails: {},
			account_msdyn_orgchartnode_msdyn_parentrecord: {},
			account_msfp_alerts: {},
			account_msfp_surveyinvites: {},
			account_msfp_surveyresponses: {},
			account_OpportunityCloses: {},
			account_OrderCloses: {},
			account_parent_account: {},
			Account_Phonecalls: {},
			account_Posts: {},
			account_QuoteCloses: {},
			Account_ServiceAppointments: {},
			Account_Tasks: {},
			adx_invitation_assigntoaccount: {},
			contact_customer_accounts: {},
			contract_billingcustomer_accounts: {},
			contract_customer_accounts: {},
			contractlineitem_customer_accounts: {},
			hs_account_contact_customer_id: {},
			hs_account_hs_interaction_id: {},
			hs_account_hs_loan_account_id: {},
			hs_hs_custom_template_account_hs_object1_id: {},
			hs_hs_custom_template_account_hs_object2_id: {},
			hs_hs_custom_template_account_hs_object3_id: {},
			hs_hs_custom_template_account_hs_object4_id: {},
			hs_hs_custom_template_account_hs_object5_id: {},
			hs_hs_zns_message_account_hs_object1_id: {},
			hs_hs_zns_message_account_hs_object2_id: {},
			hs_hs_zns_message_account_hs_object3_id: {},
			hs_hs_zns_message_account_hs_object4_id: {},
			hs_hs_zns_message_account_hs_object5_id: {},
			hs_hs_zns_message_account_hs_object6_id: {},
			hs_loan_account_account_id_account: {},
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_lastagent_account_msdyn_recordId: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			opportunity_customer_accounts: {},
			opportunity_parent_account: {},
			order_customer_accounts: {},
			quote_customer_accounts: {},
			SourceAccount_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(Tfsvn || (Tfsvn = {}));
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