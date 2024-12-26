'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormTransactionCurrency_Information = function(executionContext, defaultWebResourceName) {
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
			CurrencyName: {},
			CurrencyName1: {},
			CurrencyPrecision: {},
			CurrencyPrecision1: {},
			CurrencySymbol: {},
			CurrencySymbol1: {},
			CurrencyType: {},
			CurrencyType1: {},
			ExchangeRate: {},
			ExchangeRate1: {},
			ISOCurrencyCode: {},
			ISOCurrencyCode1: {},
			systemcurrency: {},
			systemcurrency_uci: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Legacy_tab: {
				Section: {
					Currency_conversion: {},
					Select_Base_Currency: {},
					Transaction_currency_information: {}
				}
			},
			UCI_tab: {
				Section: {
					CurrencyInformation: {},
					General: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			adx_inviteredemption_transactioncurrency_transactioncurrencyid: {},
			adx_portalcomment_transactioncurrency_transactioncurrencyid: {},
			basecurrency_organization: {},
			bulkoperation_transactioncurrency_transactioncurrencyid: {},
			DynamicPropertyAssociation_TransactionCurrency: {},
			DynamicPropertyOptionSetItem_TransactionCurrency: {},
			incidentresolution_transactioncurrency_transactioncurrencyid: {},
			msdyn_bookingalert_transactioncurrency_transactioncurrencyid: {},
			msdyn_copilottranscript_transactioncurrency_transactioncurrencyid: {},
			msdyn_ocliveworkitem_transactioncurrency_transactioncurrencyid: {},
			msdyn_ocoutboundmessage_transactioncurrency_transactioncurrencyid: {},
			msdyn_ocsession_transactioncurrency_transactioncurrencyid: {},
			msdyn_ocvoicemail_transactioncurrency_transactioncurrencyid: {},
			msdyn_transactioncurrency_invoicedetail_Currency: {},
			msevtmgt_TransactionCurrencyId_msevtmgt_CheckIn: {},
			msevtmgt_TransactionCurrencyId_msevtmgt_Event: {},
			msevtmgt_TransactionCurrencyId_msevtmgt_Speaker: {},
			msevtmgt_TransactionCurrencyId_msevtmgt_SponsorableArticle: {},
			msevtmgt_TransactionCurrencyId_msevtmgt_Sponsorship: {},
			msevtmgt_TransactionCurrencyId_msevtmgt_Venue: {},
			msfp_alert_transactioncurrency_transactioncurrencyid: {},
			msfp_surveyinvite_transactioncurrency_transactioncurrencyid: {},
			msfp_surveyresponse_transactioncurrency_transactioncurrencyid: {},
			new_TransactionCurrency_msevtmgt_attendeepass: {},
			orderclose_transactioncurrency_transactioncurrencyid: {},
			quoteclose_transactioncurrency_transactioncurrencyid: {},
			transactioncurrency_account: {},
			TransactionCurrency_ActionCardUserState: {},
			transactioncurrency_annualfiscalcalendar: {},
			TransactionCurrency_Appointment: {},
			TransactionCurrency_bookableresource: {},
			TransactionCurrency_bookableresourcebooking: {},
			TransactionCurrency_bookableresourcebookingheader: {},
			TransactionCurrency_bookableresourcecategory: {},
			TransactionCurrency_bookableresourcecategoryassn: {},
			TransactionCurrency_bookableresourcecharacteristic: {},
			TransactionCurrency_bookableresourcegroup: {},
			TransactionCurrency_bookingstatus: {},
			TransactionCurrency_BusinessUnit: {},
			transactioncurrency_campaign: {},
			transactioncurrency_campaignactivity: {},
			TransactionCurrency_CampaignResponse: {},
			transactioncurrency_cardtype: {},
			transactioncurrency_category: {},
			TransactionCurrency_ChannelAccessProfile: {},
			TransactionCurrency_characteristic: {},
			transactioncurrency_competitor: {},
			transactioncurrency_contact: {},
			transactioncurrency_contract: {},
			transactioncurrency_contractdetail: {},
			TransactionCurrency_ConvertRule: {},
			transactioncurrency_convertruleitem: {},
			TransactionCurrency_delveactionhub: {},
			transactioncurrency_discount: {},
			transactioncurrency_discounttype: {},
			TransactionCurrency_Dynamicpropertyinsatance: {},
			TransactionCurrency_Email: {},
			TransactionCurrency_Entitlement: {},
			TransactionCurrency_entitlementchannel: {},
			TransactionCurrency_entitlementtemplate: {},
			TransactionCurrency_entitlementtemplatechannel: {},
			TransactionCurrency_Equipment: {},
			transactioncurrency_expiredprocess: {},
			TransactionCurrency_ExternalParty: {},
			TransactionCurrency_externalpartyitem: {},
			transactioncurrency_feedback: {},
			transactioncurrency_fixedmonthlyfiscalcalendar: {},
			TransactionCurrency_Goal: {},
			TransactionCurrency_Incident: {},
			TransactionCurrency_InteractionForEmail: {},
			transactioncurrency_invoice: {},
			transactioncurrency_invoicedetail: {},
			TransactionCurrency_KbArticle: {},
			TransactionCurrency_knowledgearticle: {},
			transactioncurrency_knowledgearticleincident: {},
			transactioncurrency_knowledgearticleviews: {},
			TransactionCurrency_KnowledgeBaseRecord: {},
			transactioncurrency_lead: {},
			TransactionCurrency_LeadAddress: {},
			transactioncurrency_leadtoopportunitysalesprocess: {},
			transactioncurrency_list: {},
			TransactionCurrency_MailMergeTemplate: {},
			transactioncurrency_monthlyfiscalcalendar: {},
			TransactionCurrency_msdyn_actual: {},
			TransactionCurrency_msdyn_agreementbookingproduct: {},
			TransactionCurrency_msdyn_agreementbookingservice: {},
			TransactionCurrency_msdyn_agreementinvoiceproduct: {},
			TransactionCurrency_msdyn_bookingjournal: {},
			TransactionCurrency_msdyn_fieldservicepricelistitem: {},
			TransactionCurrency_msdyn_forecastinstance: {},
			TransactionCurrency_msdyn_nottoexceed: {},
			TransactionCurrency_msdyn_orderinvoicingproduct: {},
			TransactionCurrency_msdyn_payment: {},
			TransactionCurrency_msdyn_paymentdetail: {},
			TransactionCurrency_msdyn_problematicasset: {},
			TransactionCurrency_msdyn_purchaseorder: {},
			TransactionCurrency_msdyn_purchaseorderbill: {},
			TransactionCurrency_msdyn_purchaseorderproduct: {},
			TransactionCurrency_msdyn_purchaseorderreceiptproduct: {},
			TransactionCurrency_msdyn_quotebookingproduct: {},
			TransactionCurrency_msdyn_quotebookingservice: {},
			TransactionCurrency_msdyn_quotebookingsetup: {},
			TransactionCurrency_msdyn_quoteinvoicingproduct: {},
			TransactionCurrency_msdyn_quoteinvoicingsetup: {},
			TransactionCurrency_msdyn_rma: {},
			TransactionCurrency_msdyn_rmaproduct: {},
			TransactionCurrency_msdyn_rtv: {},
			TransactionCurrency_msdyn_rtvproduct: {},
			TransactionCurrency_msdyn_salessuggestion: {},
			TransactionCurrency_msdyn_workorder: {},
			TransactionCurrency_msdyn_workordernte: {},
			TransactionCurrency_msdyn_workorderproduct: {},
			TransactionCurrency_msdyn_workorderservice: {},
			TransactionCurrency_msevtmgt_AttendeePass: {},
			TransactionCurrency_msevtmgt_Building: {},
			TransactionCurrency_msevtmgt_Event: {},
			TransactionCurrency_msevtmgt_HotelRoomAllocation: {},
			TransactionCurrency_msevtmgt_pass: {},
			TransactionCurrency_msevtmgt_Speaker: {},
			TransactionCurrency_msevtmgt_speakerengagement: {},
			TransactionCurrency_msevtmgt_SponsorableArticle: {},
			TransactionCurrency_msevtmgt_Sponsorship: {},
			TransactionCurrency_msevtmgt_Venue: {},
			transactioncurrency_newprocess: {},
			TransactionCurrency_officegraphdocument: {},
			transactioncurrency_opportunity: {},
			transactioncurrency_opportunityclose: {},
			transactioncurrency_opportunityproduct: {},
			transactioncurrency_opportunitysalesprocess: {},
			TransactionCurrency_PhoneCall: {},
			transactioncurrency_phonetocaseprocess: {},
			transactioncurrency_position: {},
			transactioncurrency_pricelevel: {},
			transactioncurrency_product: {},
			transactioncurrency_ProductAssociation: {},
			transactioncurrency_productpricelevel: {},
			transactioncurrency_ProductSubstitute: {},
			TransactionCurrency_profilerule: {},
			TransactionCurrency_profileruleitem: {},
			transactioncurrency_quarterlyfiscalcalendar: {},
			TransactionCurrency_Queue: {},
			TransactionCurrency_QueueItem: {},
			transactioncurrency_quote: {},
			transactioncurrency_quotedetail: {},
			TransactionCurrency_ratingmodel: {},
			TransactionCurrency_ratingvalue: {},
			TransactionCurrency_recommendeddocument: {},
			TransactionCurrency_ReportCategory: {},
			TransactionCurrency_Routingrule: {},
			TransactionCurrency_routingruleitem: {},
			TransactionCurrency_SalesLiterature: {},
			transactioncurrency_salesorder: {},
			transactioncurrency_salesorderdetail: {},
			transactioncurrency_semiannualfiscalcalendar: {},
			TransactionCurrency_ServiceAppointment: {},
			TransactionCurrency_SharePointSite: {},
			TransactionCurrency_SimilarityRule: {},
			TransactionCurrency_SLA: {},
			TransactionCurrency_SLAItem: {},
			TransactionCurrency_suggestioncardtemplate: {},
			TransactionCurrency_SystemUser: {},
			TransactionCurrency_Task: {},
			TransactionCurrency_Team: {},
			TransactionCurrency_Territory: {},
			TransactionCurrency_Theme: {},
			transactioncurrency_translationprocess: {},
			TransactionCurrency_UntrackedEmail: {},
			transactioncurrency_userfiscalcalendar: {},
			TransactionCurrency_UserMapping: {},
			transactioncurrency_usersettings: {}
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
	OptionSet.TransactionCurrency = {
		CurrencyType : {
			Custom: 1,
			System: 0
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
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