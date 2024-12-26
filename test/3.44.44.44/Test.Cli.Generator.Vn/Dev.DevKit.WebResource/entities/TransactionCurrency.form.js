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
			CurrencyPrecision: {},
			CurrencySymbol: {},
			currencytype: {},
			ExchangeRate: {},
			ISOCurrencyCode: {},
			systemcurrency: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					Currency_conversion: {},
					Select_Base_Currency: {},
					Transaction_currency_information: {}
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
			transactioncurrency_account: {},
			TransactionCurrency_ActionCardUserState: {},
			transactioncurrency_annualfiscalcalendar: {},
			TransactionCurrency_Appointment: {},
			TransactionCurrency_BusinessUnit: {},
			transactioncurrency_cardtype: {},
			transactioncurrency_category: {},
			TransactionCurrency_ChannelAccessProfile: {},
			transactioncurrency_contact: {},
			TransactionCurrency_ConvertRule: {},
			transactioncurrency_convertruleitem: {},
			TransactionCurrency_delveactionhub: {},
			TransactionCurrency_Email: {},
			transactioncurrency_expiredprocess: {},
			TransactionCurrency_ExternalParty: {},
			TransactionCurrency_externalpartyitem: {},
			transactioncurrency_feedback: {},
			transactioncurrency_fixedmonthlyfiscalcalendar: {},
			TransactionCurrency_Goal: {},
			TransactionCurrency_InteractionForEmail: {},
			TransactionCurrency_KbArticle: {},
			TransactionCurrency_knowledgearticle: {},
			transactioncurrency_knowledgearticleviews: {},
			TransactionCurrency_KnowledgeBaseRecord: {},
			TransactionCurrency_MailMergeTemplate: {},
			transactioncurrency_monthlyfiscalcalendar: {},
			transactioncurrency_newprocess: {},
			TransactionCurrency_officegraphdocument: {},
			TransactionCurrency_PhoneCall: {},
			transactioncurrency_position: {},
			TransactionCurrency_profilerule: {},
			TransactionCurrency_profileruleitem: {},
			transactioncurrency_quarterlyfiscalcalendar: {},
			TransactionCurrency_Queue: {},
			TransactionCurrency_QueueItem: {},
			TransactionCurrency_recommendeddocument: {},
			TransactionCurrency_ReportCategory: {},
			TransactionCurrency_Routingrule: {},
			TransactionCurrency_routingruleitem: {},
			transactioncurrency_semiannualfiscalcalendar: {},
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
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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