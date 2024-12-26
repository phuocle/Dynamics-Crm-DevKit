'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormContact_AI_for_Sales = function(executionContext, defaultWebResourceName) {
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
			CadenceWidgetControl: {},
			cc_1612863187947: {},
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
			EMailAddress11: {},
			FamilyStatusCode: {},
			Fax: {},
			FollowEmail: {},
			FullName: {},
			GenderCode: {},
			Healthwidget: {},
			JobTitle: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MobilePhone: {},
			MobilePhone1: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId1: {},
			ParentCustomerId2: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			RICONTAINER_CHARTS: {},
			SpousesName: {},
			TalkingPoints: {},
			Telephone1: {},
			Telephone11: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					marketing_information: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {}
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
					CONTACT_INFORMATION: {},
					CUSTOMER_DETAILS_TAB: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_CadenceWidget: {},
					Summary_section_6: {},
					Summary_section_7: {},
					TalkingPoints_section: {},
					WKW_Section: {}
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
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
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
			contactopportunitiesgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact = function(executionContext, defaultWebResourceName) {
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
			Address1_Line1: {},
			Address1_Longitude: {},
			Address1_ShippingMethodCode: {},
			Anniversary: {},
			BirthDate: {},
			BusinessCard: {},
			CanceledAttendeePasses: {},
			cc_1673873754954: {},
			ContactabilityControl: {},
			ContactabilityGridControl: {},
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
			EMailAddress11: {},
			EMailAddress12: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			FollowEmail: {},
			FullName: {},
			GenderCode: {},
			JobTitle: {},
			LastName: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MarketingOnly: {},
			MobilePhone: {},
			MobilePhone1: {},
			msdyn_PrimaryTimeZone: {},
			msdyncrm_customerjourneyid: {},
			msdyncrm_emailid: {},
			msdyncrm_insights_placeholder: {},
			msdyncrm_marketingformid: {},
			msdyncrm_marketingpageid: {},
			msdyncrm_rememberMe: {},
			msdynmkt_customerjourneyid: {},
			msdynmkt_emailid: {},
			msdynmkt_marketingformid: {},
			msdynmkt_contact_insights_banner_control: {},
			msdynmkt_contact_insights_tab_control: {},
			msevtmgt_EventCheckInsSubrgid: {},
			msevtmgt_EventSubgrid: {},
			msevtmgt_originatingeventid: {},
			msevtmgt_SessionCheckInsSubgrid: {},
			msevtmgt_SessionSubgrid: {},
			msgdpr_donottrack: {},
			msgdpr_gdprconsent: {},
			msgdpr_gdprischild: {},
			msgdpr_GDPRParentId: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId1: {},
			ParentCustomerId2: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			SpousesName: {},
			subgrid_Entitlement: {},
			subscribedtolist: {},
			TalkingPoints: {},
			Telephone1: {},
			Telephone11: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_F94785D7_45B5_4625_99D2_18DED86C7997: {
				Section: {
					insights_section_new: {}
				}
			},
			CONSENT_PREFERENCES_TAB: {
				Section: {
					tab_4_section_1: {}
				}
			},
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					contactabilitysection: {},
					EventInfoSection: {},
					gdprsection: {},
					marketing_information: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {},
					SubscriptionListsSection: {}
				}
			},
			documents_sharepoint: {
				Section: {
					documents_sharepoint_section: {}
				}
			},
			EVENTS_ATTENDED_TAB: {
				Section: {
					EVENTS_ATTENDED_TAB_section_1: {},
					EVENTS_ATTENDED_TAB_section_2: {},
					EVENTS_ATTENDED_TAB_section_3: {},
					EVENTS_ATTENDED_TAB_section_4: {},
					EVENTS_ATTENDED_TAB_section_5: {}
				}
			},
			insights: {
				Section: {
					insights_section: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					BusinessCard: {},
					CONTACT_INFORMATION: {},
					CUSTOMER_DETAILS_TAB: {},
					MapSection: {},
					SOCIAL_PANE_TAB: {},
					Summary_section_6: {},
					SUMMARY_TAB_section_6: {},
					TalkingPoints_section: {},
					WKW_Section: {}
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
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
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
			CanceledAttendeePasses: {},
			contactcasessgrid: {},
			contactopportunitiesgrid: {},
			DocumentsSubGrid: {},
			msevtmgt_EventCheckInsSubrgid: {},
			msevtmgt_EventSubgrid: {},
			msevtmgt_SessionCheckInsSubgrid: {},
			msevtmgt_SessionSubgrid: {},
			subgrid_Entitlement: {},
			subscribedtolist: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_Mobile = function(executionContext, defaultWebResourceName) {
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
			},
			fstab_summary: {
				Section: {
					fstab_summary_section_contact_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			CONTACTS: {},
			INVOICES: {},
			ORDERS: {},
			QUOTES: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
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
			ParentCustomerId1: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			SpousesName: {},
			subgrid_Entitlement: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					marketing_information: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					Timeline: {}
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
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				FullName: {},
				MobilePhone: {},
				ParentCustomerId: {},
				Telephone1: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			contactcasessgrid: {},
			contactopportunitiesgrid: {},
			subgrid_Entitlement: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_for_Multisession_experience = function(executionContext, defaultWebResourceName) {
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
			FirstName: {},
			FollowEmail: {},
			GenderCode: {},
			LastName: {},
			LastUsedInCampaign: {},
			MobilePhone: {},
			notescontrol: {},
			OriginatingLeadId: {},
			ParentCustomerId: {},
			ParentCustomerId1: {},
			PaymentTermsCode: {},
			PreferredContactMethodCode: {},
			PreferredContactMethodCode1: {},
			RelatedCases: {},
			SpousesName: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS_TAB: {
				Section: {
					billing_information: {},
					CONTACT_PREFERENCES: {},
					marketing_information: {},
					PERSONAL_INFORMATION: {},
					PERSONAL_NOTES_SECTION: {},
					shipping_information: {}
				}
			},
			SUMMARY_TAB: {
				Section: {
					CONTACT_INFORMATION: {},
					SUMMARY_TAB_section_4: {},
					Timeline: {}
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
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var quickForm = {
			contactquickform: {
				EMailAddress1: {},
				FullName: {},
				MobilePhone: {},
				ParentCustomerId: {},
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
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_form_for_Conversation_Customer_card = function(executionContext, defaultWebResourceName) {
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
			ParentCustomerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Card_Tab: {
				Section: {
					Customer_card: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			FullName: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_form_for_Customer_Card = function(executionContext, defaultWebResourceName) {
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
			cc_1662431725068: {},
			ParentCustomerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Card_Tab: {
				Section: {
					Customer_card: {},
					Recent_cases: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			FullName: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			cc_1662431725068: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
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
			Recent_Cases: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					Customer_Contact_Cases: {}
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
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			Recent_Cases: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_Information = function(executionContext, defaultWebResourceName) {
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
			TransactionCurrencyId: {},
			WebResource_RecordWall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			administration: {
				Section: {
					billing_information: {},
					contact_methods: {},
					internal_information: {}
				}
			},
			details: {
				Section: {
					personal_information: {},
					professional_information: {}
				}
			},
			general: {
				Section: {
					address: {},
					description: {},
					name: {},
					shipping_information: {}
				}
			},
			notes_and_activities: {
				Section: {
					activities: {},
					notes: {}
				}
			},
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
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
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			contactactivitiesgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormInvite_Web_Form = function(executionContext, defaultWebResourceName) {
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
			EMailAddress1: {},
			FirstName: {},
			LastName: {},
			OwnerId: {},
			Telephone1: {},
			WebResource_RecordWall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPortal_Contact_Enhanced = function(executionContext, defaultWebResourceName) {
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
			adx_externalidentity: {},
			adx_identity_accessfailedcount: {},
			adx_identity_emailaddress1confirmed: {},
			adx_identity_locallogindisabled: {},
			adx_identity_lockoutenabled: {},
			adx_identity_lockoutenddate: {},
			adx_identity_logonenabled: {},
			adx_identity_mobilephoneconfirmed: {},
			adx_identity_securitystamp: {},
			adx_identity_twofactorenabled: {},
			adx_identity_username: {},
			Adx_TimeZone: {},
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
			EMailAddress1: {},
			FamilyStatusCode: {},
			Fax: {},
			FirstName: {},
			GenderCode: {},
			grid_contact_mspp_webrole: {},
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
			TransactionCurrencyId: {},
			WebResource_RecordWall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			administration: {
				Section: {
					billing_information: {},
					contact_methods: {},
					internal_information: {}
				}
			},
			details: {
				Section: {
					personal_information: {},
					professional_information: {}
				}
			},
			general: {
				Section: {
					address: {},
					contact_webrole_section: {},
					description: {},
					name: {},
					shipping_information: {}
				}
			},
			notes_and_activities: {
				Section: {
					activities: {},
					notes: {}
				}
			},
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
				}
			},
			web_authentication: {
				Section: {
					_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_4: {},
					_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_5: {}
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
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			adx_externalidentity: {},
			contactactivitiesgrid: {},
			grid_contact_mspp_webrole: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormProfile_Web_Form_Enhanced = function(executionContext, defaultWebResourceName) {
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
			Adx_OrganizationName: {},
			adx_PublicProfileCopy: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			mspp_userpreferredlcid: {},
			NickName: {},
			OwnerId: {},
			Telephone1: {},
			WebResource_RecordWall: {},
			WebSiteUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormProfile_Web_Form_Enhanced_Japanese = function(executionContext, defaultWebResourceName) {
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
			Adx_OrganizationName: {},
			adx_PublicProfileCopy: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			mspp_userpreferredlcid: {},
			NickName: {},
			OwnerId: {},
			Telephone1: {},
			WebResource_RecordWall: {},
			WebSiteUrl: {},
			YomiFirstName: {},
			YomiLastName: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTimelineWallControl_Contact_Main = function(executionContext, defaultWebResourceName) {
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
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {

		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _Phone_to_Case_Process = {

		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			account_primary_contact: {},
			adx_contact_externalidentity: {},
			adx_invitation_invitecontact: {},
			adx_invitation_invitercontact: {},
			adx_invitation_redeemedContact: {},
			adx_webformsession_contact: {},
			contact_adx_inviteredemptions: {},
			contact_adx_portalcomments: {},
			Contact_Appointments: {},
			contact_as_primary_contact: {},
			contact_as_responsible_contact: {},
			contact_bookableresource_ContactId: {},
			contact_BulkOperations: {},
			contact_CampaignResponses: {},
			contact_customer_contacts: {},
			contact_customer_opportunity_roles: {},
			Contact_Email_EmailSender: {},
			Contact_Emails: {},
			contact_entitlement_ContactId: {},
			contact_entitlement_Customer: {},
			Contact_ExternalPartyItems: {},
			Contact_Feedback: {},
			contact_msdyn_bookingalerts: {},
			contact_msdyn_copilottranscripts: {},
			contact_msdyn_ocliveworkitems: {},
			contact_msdyn_ocoutboundmessages: {},
			contact_msdyn_ocsessions: {},
			contact_msdyn_ocvoicemails: {},
			contact_msdyn_orgchartnode_msdyn_noderecord: {},
			contact_msfp_alerts: {},
			contact_msfp_surveyinvites: {},
			contact_msfp_surveyresponses: {},
			Contact_Phonecalls: {},
			contact_Posts: {},
			Contact_ServiceAppointments: {},
			Contact_Tasks: {},
			contract_billingcustomer_contacts: {},
			contract_customer_contacts: {},
			contractlineitem_customer_contacts: {},
			incident_customer_contacts: {},
			invoice_customer_contacts: {},
			lead_customer_contacts: {},
			lead_parent_contact: {},
			lk_contact_feedback_createdby: {},
			lk_contact_feedback_createdonbehalfby: {},
			msdyn_contact_dailycontactkpiitem_entityid: {},
			msdyn_contact_msdyn_actual_ContactCustomer: {},
			msdyn_contact_msdyn_actual_ContactVendor: {},
			msdyn_contact_msdyn_contactkpiitem_contactid: {},
			msdyn_contact_msdyn_liveconversation_Customer: {},
			msdyn_contact_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_contact_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_contact_msdyn_ocliveworkitem_Customer: {},
			msdyn_contact_msdyn_ocvoicemail_Customer: {},
			msdyn_contact_msdyn_rma_RequestedByContact: {},
			msdyn_contact_msdyn_rtv_VendorContact: {},
			msdyn_contact_msdyn_salesroutingrun_targetobject: {},
			msdyn_contact_msdyn_salessuggestion: {},
			msdyn_contact_msdyn_workorder_ReportedByContact: {},
			msdyn_linkeditemvalidity_polymorphic_contactid: {},
			msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User: {},
			msdyn_msdyn_preferredagent_contact_msdyn_recordId: {},
			msdyn_msdyn_salescopilotinsight_contact_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_contact: {},
			msdyn_sabackupdiagnostic_contact_msdyn_target: {},
			msdyn_salesroutingdiagnostic_contact_msdyn_target: {},
			msdyn_sequencetarget_contact_msdyn_target: {},
			msdyncrm_contact_marketingformsubmission_matched: {},
			msdyncrm_contact_marketingformsubmission_original: {},
			msdyncrm_contact_msdyncrm_customerjourneycustomchannelactivity_Contact: {},
			msdyncrm_contact_msdyncrm_defaultmarketingsetting_DefaultTestContact: {},
			msdyncrm_contact_msdyncrm_geopin: {},
			msdyncrm_contact_msdyncrm_linkedinformsubmission_contact: {},
			msdyncrm_contact_msdyncrm_marketingemailtestsend_testcontactid: {},
			msevtmgt_contact_eventregistration_registeredby: {},
			msevtmgt_contact_msevtmgt_attendeepass_contact: {},
			msevtmgt_contact_msevtmgt_building_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_checkin_Contact: {},
			msevtmgt_contact_msevtmgt_eventpurchase: {},
			msevtmgt_contact_msevtmgt_eventpurchaseattendee: {},
			msevtmgt_contact_msevtmgt_eventregistration_Contact: {},
			msevtmgt_contact_msevtmgt_eventteammember_Contact: {},
			msevtmgt_contact_msevtmgt_hotel_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_hotelroomallocation_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_room_PrimaryContact: {},
			msevtmgt_contact_msevtmgt_sessionregistration_contactid: {},
			msevtmgt_contact_msevtmgt_speaker_Contact: {},
			msevtmgt_contact_msevtmgt_venue_PrimaryContact: {},
			msevtmgt_contact_waitlistitem: {},
			msevtmgt_contact_waitlistitem_addedby: {},
			msgdpr_contact_msgdpr_gdprconsentchangerecord: {},
			msgdpr_contact_msgdpr_gdprparent: {},
			opportunity_customer_contacts: {},
			opportunity_parent_contact: {},
			order_customer_contacts: {},
			PowerPagesSiteAIFeedback_Contact_Contact: {},
			quote_customer_contacts: {},
			SourceContact_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormContact_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			BusinessCard: {},
			Description: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			MobilePhone: {},
			ParentCustomerId: {},
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
	DevKit.FormContact_Quick_Create_Field_Service = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			MobilePhone: {},
			ParentCustomerId: {},
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
	OptionSet.Contact = {
		AccountRoleCode : {
			Decision_Maker: 1,
			Employee: 2,
			Influencer: 3
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
			Divorced: 3,
			Married: 2,
			Single: 1,
			Widowed: 4
		},
		GenderCode : {
			Female: 2,
			Male: 1
		},
		HasChildrenCode : {
			Default_Value: 1
		},
		LeadSourceCode : {
			Default_Value: 1
		},
		msdyn_decisioninfluencetag : {
			Blocker: 2,
			Decision_maker: 0,
			Influencer: 1,
			Unknown: 3
		},
		msdyn_orgchangestatus : {
			Ignore: 2,
			No_Feedback: 0,
			Not_at_Company: 1
		},
		msgdpr_gdprconsent : {
			_1_Consent: 587030001,
			_2_Transactional: 587030002,
			_3_Subscriptions: 587030003,
			_4_Marketing: 587030004,
			_5_Profiling: 587030005
		},
		mspp_userpreferredlcid : {
			Arabic: 1025,
			Basque_Basque: 1069,
			Bulgarian_Bulgaria: 1026,
			Catalan_Catalan: 1027,
			Chinese_China: 2052,
			Chinese_Hong_Kong_SAR: 3076,
			Chinese_Traditional: 1028,
			Croatian_Croatia: 1050,
			Czech_Czech_Republic: 1029,
			Danish_Denmark: 1030,
			Dutch_Netherlands: 1043,
			English: 1033,
			Estonian_Estonia: 1061,
			Finnish_Finland: 1035,
			French_France: 1036,
			Galician_Spain: 1110,
			German_Germany: 1031,
			Greek_Greece: 1032,
			Hebrew: 1037,
			Hindi_India: 1081,
			Hungarian_Hungary: 1038,
			Indonesian_Indonesia: 1057,
			Italian_Italy: 1040,
			Japanese_Japan: 1041,
			Kazakh_Kazakhstan: 1087,
			Korean_Korea: 1042,
			Latvian_Latvia: 1062,
			Lithuanian_Lithuania: 1063,
			Malay_Malaysia: 1086,
			Norwegian_Bokmal_Norway: 1044,
			Polish_Poland: 1045,
			Portuguese_Brazil: 1046,
			Portuguese_Portugal: 2070,
			Romanian_Romania: 1048,
			Russian_Russia: 1049,
			Serbian_Cyrillic_Serbia: 3098,
			Serbian_Latin_Serbia: 2074,
			Slovak_Slovakia: 1051,
			Slovenian_Slovenia: 1060,
			Spanish_Traditional_Sort_Spain: 3082,
			Swedish_Sweden: 1053,
			Thai_Thailand: 1054,
			Turkish_Turkiye: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
		},
		ParentCustomerIdType : {
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