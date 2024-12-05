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
			Address1_Latitude1: {},
			Address1_Line1: {},
			Address1_Line11: {},
			Address1_Longitude: {},
			Address1_Longitude1: {},
			Address1_ShippingMethodCode: {},
			ChildAccounts: {},
			Contacts: {},
			CreditLimit: {},
			CreditOnHold: {},
			CustomerTypeCode: {},
			DefaultPriceLevelId: {},
			Description: {},
			DocumentsSubGrid: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotFax: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			Fax: {},
			IndustryCode: {},
			InsuranceEntitlementsSubgridControl: {},
			InsuranceProvidedSubgridControl: {},
			mapcontrol: {},
			msdyn_BillingAccount: {},
			msdyn_PrimaryTimeZone: {},
			msdyn_SalesTaxCode: {},
			msdyn_ServiceTerritory: {},
			msdyn_TaxExempt: {},
			msdyn_TaxExemptNumber: {},
			msdyn_TravelCharge: {},
			msdyn_TravelChargeType: {},
			msdyn_workhourtemplate: {},
			msdyn_WorkOrderInstructions: {},
			msdyncrm_insights_placeholder: {},
			Name: {},
			Name1: {},
			notescontrol: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			PrimaryContactId1: {},
			SIC: {},
			Telephone1: {},
			Telephone11: {},
			TickerSymbol: {},
			trade_coverages: {},
			TransactionCurrencyId: {},
			WarrantiesProvidedGrid: {},
			WarrantyCoveredBySubgrid: {},
			WarrantyHeldGrid: {},
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
					ChildAccounts: {},
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
			insights: {
				Section: {
					insights_section: {}
				}
			},
			InsuranceTab: {
				Section: {
					InsuranceHeldSection: {},
					InsuranceProvidedSection: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					ACCOUNT_INFORMATION: {},
					ADDRESS: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_section_6: {},
					SUMMARY_TAB_ADDRESSINPUT_SECTION: {},
					SUMMARY_TAB_section_6: {}
				}
			},
			TradeCoveragesTab: {
				Section: {
					TradeCoveragesSection: {}
				}
			},
			urstab: {
				Section: {
					tab_3_section_2: {},
					tab_3_section_3: {},
					urstab_section_general: {}
				}
			},
			WarrantiesTab: {
				Section: {
					WarrantiesProvidedSection: {},
					WarrantyCoveredBySection: {},
					WarrantyHeldSection: {}
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
			ChildAccounts: {},
			Contacts: {},
			DocumentsSubGrid: {},
			InsuranceEntitlementsSubgridControl: {},
			InsuranceProvidedSubgridControl: {},
			trade_coverages: {},
			WarrantiesProvidedGrid: {},
			WarrantyCoveredBySubgrid: {},
			WarrantyHeldGrid: {},
			Work_Orders: {},
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
	DevKit.FormAccount_Mobile = function(executionContext, defaultWebResourceName) {
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
			Address1_Line1: {},
			ChildAccounts: {},
			Contacts: {},
			customerAssets: {},
			DefaultPriceLevelId: {},
			Description: {},
			EMailAddress1: {},
			Fax: {},
			msdyn_BillingAccount: {},
			msdyn_ServiceTerritory: {},
			msdyn_WorkOrderInstructions: {},
			Name: {},
			Name1: {},
			notescontrol: {},
			OwnerId: {},
			ParentAccountId: {},
			PrimaryContactId: {},
			Telephone1: {},
			TransactionCurrencyId: {},
			WebSiteURL: {},
			WORKORDERS: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_AssetsAndLocationsTab: {
				Section: {
					AssetsAndLocationsSection: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					tab_4_section_1: {}
				}
			},
			fstab_summary: {
				Section: {
					fstab_address_section_address: {},
					fstab_summary_column_2_section_1: {},
					fstab_summary_column_3_section_1: {},
					fstab_summary_section_account_information: {},
					fstab_summary_section_description: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			ChildAccounts: {},
			Contacts: {},
			customerAssets: {},
			WORKORDERS: {},
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
			accountcasessgrid: {},
			accountopportunitiesgrid: {},
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			Contacts: {},
			CreditLimit: {},
			CreditOnHold: {},
			Description: {},
			Devices_Associated_View: {},
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
			notescontrol: {},
			OriginatingLeadId: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			PrimaryContactId1: {},
			SIC: {},
			subgrid_Entitlement: {},
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
					MARKETING: {},
					SHIPPING: {}
				}
			},
			Devices_Tab: {
				Section: {
					Devices_Tab_Section_1: {}
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
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			accountcasessgrid: {},
			accountopportunitiesgrid: {},
			Contacts: {},
			Devices_Associated_View: {},
			subgrid_Entitlement: {},
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
	DevKit.FormAccount_for_Multisession_experience = function(executionContext, defaultWebResourceName) {
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
			notescontrol: {},
			OriginatingLeadId: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			PrimaryContactId1: {},
			RelatedCases: {},
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
					MARKETING: {},
					SHIPPING: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					ACCOUNT_INFORMATION: {},
					SUMMARY_TAB_section_4: {},
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
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			RelatedCases: {},
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
	DevKit.FormAccount_form_for_Conversation_Customer_Card = function(executionContext, defaultWebResourceName) {
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
			Name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
	DevKit.FormAccount_form_for_Customer_Card = function(executionContext, defaultWebResourceName) {
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
			cc_1661863836105: {},
			cc_1662014496768: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			cc_1661863836105: {},
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
	DevKit.FormCustomer_profile_cases = function(executionContext, defaultWebResourceName) {
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
			Name: {},
			Recent_Cases: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					Customer_Account_Cases: {}
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
		var grid = {
			Recent_Cases: {},
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
	DevKit.FormAccount_Sales_Insights = function(executionContext, defaultWebResourceName) {
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
			accountopportunitiesgrid: {},
			ActionCards: {},
			Address1_Composite: {},
			Address1_FreightTermsCode: {},
			Address1_ShippingMethodCode: {},
			CadenceWidgetControl: {},
			ChildAccounts: {},
			Contacts: {},
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
			mapcontrol: {},
			Name: {},
			notescontrol: {},
			OriginatingLeadId: {},
			OwnershipCode: {},
			ParentAccountId: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PrimaryContactId: {},
			PrimaryContactId1: {},
			RICONTAINER_CHARTS: {},
			SIC: {},
			Telephone1: {},
			Telephone11: {},
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
					MARKETING: {},
					SHIPPING: {}
				}
			},
			RAV2: {
				Section: {
					RAV2_section_1: {}
				}
			},
			RELATIONSHIP_ANALYTICS_TAB: {
				Section: {
					Activity_Analysis_section_2: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					ACCOUNT_INFORMATION: {},
					ADDRESS: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_CadenceWidget: {},
					Summary_section_6: {},
					SUMMARY_TAB_section_6: {}
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
			accountopportunitiesgrid: {},
			ChildAccounts: {},
			Contacts: {},
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
	DevKit.FormTimelineWallControl_Account_Main = function(executionContext, defaultWebResourceName) {
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
			incident_customer_accounts: {},
			invoice_customer_accounts: {},
			lead_customer_accounts: {},
			lead_parent_account: {},
			msa_account_managingpartner: {},
			msa_contact_managingpartner: {},
			msdyn_account_account_BillingAccount: {},
			msdyn_account_dailyaccountkpiitem_entityid: {},
			msdyn_account_msdyn_accountkpiitem_accountid: {},
			msdyn_account_msdyn_actual_AccountCustomer: {},
			msdyn_account_msdyn_actual_AccountVendor: {},
			msdyn_account_msdyn_actual_ServiceAccount: {},
			msdyn_account_msdyn_agreement_BillingAccount: {},
			msdyn_account_msdyn_agreement_ServiceAccount: {},
			msdyn_account_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_account_msdyn_customerasset_Account: {},
			msdyn_account_msdyn_entitlementapplication_serviceaccount: {},
			msdyn_account_msdyn_insurance_InsuranceCarrier: {},
			msdyn_account_msdyn_iotdevice_Account: {},
			msdyn_account_msdyn_liveconversation_Customer: {},
			msdyn_account_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_account_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_account_msdyn_nottoexceed_account: {},
			msdyn_account_msdyn_ocliveworkitem_Customer: {},
			msdyn_account_msdyn_ocvoicemail_Customer: {},
			msdyn_account_msdyn_payment_Account: {},
			msdyn_account_msdyn_purchaseorder_Vendor: {},
			msdyn_account_msdyn_requirementresourcepreference_Account: {},
			msdyn_account_msdyn_rma_BillingAccount: {},
			msdyn_account_msdyn_rma_ServiceAccount: {},
			msdyn_account_msdyn_rmaproduct_Changeownership: {},
			msdyn_account_msdyn_rmaproduct_ReturntoVendor: {},
			msdyn_account_msdyn_rtv_Vendor: {},
			msdyn_account_msdyn_salesroutingrun_targetobject: {},
			msdyn_account_msdyn_tradecoverage_Account: {},
			msdyn_account_msdyn_warranty_WarrantyHolder: {},
			msdyn_account_msdyn_warranty_WarrantyProvider: {},
			msdyn_account_msdyn_workorder_BillingAccount: {},
			msdyn_account_msdyn_workorder_ServiceAccount: {},
			msdyn_account_msdyn_workorderresourcerestriction_Account: {},
			msdyn_account_opportunityproduct_ServiceAccount: {},
			msdyn_account_product_DefaultVendor: {},
			msdyn_account_quote_Account: {},
			msdyn_account_quotedetail_ServiceAccount: {},
			msdyn_account_salesorder_Account: {},
			msdyn_msdyn_conversationparticipantinsights_account_msdyn_User: {},
			msdyn_msdyn_insurance_PolicyHolder_account: {},
			msdyn_msdyn_preferredagent_account_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_account_msdyn_targetentityid: {},
			msdyn_playbookinstance_account: {},
			msdyn_sabackupdiagnostic_account_msdyn_target: {},
			msdyn_salesaccelerationinsights_account: {},
			msdyn_salesroutingdiagnostic_account_msdyn_target: {},
			msdyn_salessuggestion_account: {},
			msdyn_sequencetarget_account_msdyn_target: {},
			msdyn_swarm_account: {},
			msevtmgt_account_msevtmgt_eventvendor_Account: {},
			msevtmgt_account_msevtmgt_sponsorship_Sponsor: {},
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
	DevKit.FormAccount_Quick_Create_Field_Service = function(executionContext, defaultWebResourceName) {
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
			Address1_Line1: {},
			msdyn_BillingAccount: {},
			msdyn_ServiceTerritory: {},
			Name: {},
			PrimaryContactId: {},
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
			Insurance_carrier: 13,
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
		msevtmgt_HotelGroup : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_RentalCarProvider : {
			No: 100000001,
			Yes: 100000002
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