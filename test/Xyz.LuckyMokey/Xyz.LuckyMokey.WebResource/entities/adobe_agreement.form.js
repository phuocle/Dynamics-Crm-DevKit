'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formadobe_agreement_Agreement = function(executionContext, defaultWebResourceName) {
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
			adobe_addpostsignredirecturl: {},
			adobe_agreementexpires: {},
			adobe_AgreementFormId: {},
			adobe_agreementmessage: {},
			adobe_audittrailcontent: {},
			adobe_authoringurl: {},
			adobe_automaticreminder: {},
			adobe_combineddocumenturl: {},
			adobe_creationdata: {},
			adobe_creationtype: {},
			adobe_currentsignerurl: {},
			adobe_daysuntilexpires: {},
			adobe_documentimagesurls: {},
			adobe_emailid: {},
			adobe_esagreementstatus: {},
			adobe_exceptionmessage: {},
			adobe_hostsigning: {},
			adobe_identityverification: {},
			adobe_isattachmentadded: {},
			adobe_isrecipientadded: {},
			adobe_librarydocuments: {},
			adobe_librarydocumentslong: {},
			adobe_migrationguid: {},
			adobe_missingtemplatedocument: {},
			adobe_missingtemplaterecipient: {},
			adobe_name: {},
			adobe_parentaccountId: {},
			adobe_parentcontactid: {},
			adobe_parentcontractid: {},
			adobe_ParentInvoiceId: {},
			adobe_parentleadid: {},
			adobe_parentopportunityid: {},
			adobe_ParentOrderId: {},
			adobe_parentquoteid: {},
			adobe_parentuserid: {},
			adobe_plugintrigger: {},
			adobe_postsigningredirecturl: {},
			adobe_postsignredirectdelay: {},
			adobe_ReaderRoleOnly: {},
			adobe_recipientdata: {},
			adobe_reviewsigningorder: {},
			adobe_securesignedpdf: {},
			adobe_selecteddatamap: {},
			adobe_selectedlanguage: {},
			adobe_selectedlibraryid: {},
			adobe_sendersigning: {},
			adobe_sendersigningoptions: {},
			adobe_sendersigningorder: {},
			adobe_sendfromlibrary: {},
			adobe_sendfromlibrarycheckboxvalue: {},
			adobe_signaturetype: {},
			adobe_signedpdfpassword: {},
			adobe_signingorder: {},
			adobe_signingpassword: {},
			adobe_templateid: {},
			adobe_useauthoring: {},
			adobe_useragent: {},
			adobe_waitingforsendersignature: {},
			AgreementDocumentsGrid: {},
			AgreementRecipientsGrid: {},
			IFRAME_authoringframe: {},
			IFRAME_prefilldocument: {},
			IFRAME_signingframe: {},
			notescontrol: {},
			OwnerId: {},
			WebResource_AgreementMessageDescription: {},
			WebResource_AgreementSlider: {},
			WebResource_attachfiles: {},
			WebResource_IdentityVerificationInput: {},
			WebResource_LanguageSelection: {},
			WebResource_LibrarySelection: {},
			WebResource_LinkedInSalesNavigator: {},
			WebResource_RecipientOrderTip: {},
			WebResource_ReorderDocumentsLink: {},
			WebResource_SignedPDFProtectionInput: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_7: {
				Section: {
					tab_6_section_1: {}
				}
			},
			tab_sign: {
				Section: {
					signingframesection: {}
				}
			},
			tab_prefill: {
				Section: {
					prefillframesection: {}
				}
			},
			tab_recipients: {
				Section: {
					tab_recipients_section_1: {},
					LinkedInSalesNavigator: {}
				}
			},
			agreementdetails_tab: {
				Section: {
					agreementdetails_tab_agreementdetails_section: {},
					section_user: {},
					section_invoice: {},
					section_order: {},
					section_opportunity: {},
					section_quote: {},
					section_lead: {},
					section_contract: {},
					section_account: {},
					section_contact: {},
					tab_6_section_12: {},
					AgreementDetails_tab_Attachments_section: {},
					agreementdetails_tab_documents_section: {},
					AgreementDetails_tab_agreementoptions_section: {},
					agreementdetails_tab_section_15: {}
				}
			},
			tab_history: {
				Section: {
					tab_9_section_1: {},
					agreement_events: {}
				}
			},
			tab_3: {
				Section: {
					tab_3_section_3: {},
					tab_3_section_5: {}
				}
			},
			tab_5: {
				Section: {
					AgreementDetails_tab_hiddenfields_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			adobe_datesent: {},
			adobe_datesigned: {},
			adobe_esagreementstatus: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_adobe_adobe_agreement_adobe_agreementdocument: {},
			nav_adobe_adobe_agreement_adobe_recipient: {},
			navAudit: {}
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
	OptionSet.adobe_agreement = {
		adobe_automaticreminder : {
			Never: 648770000,
			Every_Day_Until_Signed: 648770001,
			Every_Week_Until_Signed: 648770002
		},
		adobe_identityverification : {
			EMAIL: 648770003,
			PHONE: 648770004,
			PASSWORD: 648770000,
			KNOWLEDGE_BASE: 648770001,
			WEB_IDENTITY: 648770002
		},
		adobe_oquickcreateentityptionset : {
			Opportunity: 648770000,
			Contact: 648770001,
			Lead: 648770002,
			Account: 648770003,
			Contract: 648770004,
			Invoice: 648770005,
			Order: 648770006,
			Quote: 648770007,
			User: 648770008
		},
		adobe_sendersigningoptions : {
			I_sign_first: 648770000,
			I_sign_last: 648770001,
			Only_I_sign: 648770002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
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