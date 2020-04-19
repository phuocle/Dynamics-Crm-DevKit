//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formadobe_agreement_Agreement {
		interface Header {
			adobe_datesent: DevKit.Form.Controls.ControlDateTime;
			adobe_datesigned: DevKit.Form.Controls.ControlDateTime;
			adobe_esagreementstatus: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_tab_7_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_sign_Sections {
			signingframesection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_prefill_Sections {
			prefillframesection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_recipients_Sections {
			tab_recipients_section_1: DevKit.Form.Controls.ControlSection;
			LinkedInSalesNavigator: DevKit.Form.Controls.ControlSection;
		}
		interface tab_agreementdetails_tab_Sections {
			agreementdetails_tab_agreementdetails_section: DevKit.Form.Controls.ControlSection;
			section_user: DevKit.Form.Controls.ControlSection;
			section_invoice: DevKit.Form.Controls.ControlSection;
			section_order: DevKit.Form.Controls.ControlSection;
			section_opportunity: DevKit.Form.Controls.ControlSection;
			section_quote: DevKit.Form.Controls.ControlSection;
			section_lead: DevKit.Form.Controls.ControlSection;
			section_contract: DevKit.Form.Controls.ControlSection;
			section_account: DevKit.Form.Controls.ControlSection;
			section_contact: DevKit.Form.Controls.ControlSection;
			tab_6_section_12: DevKit.Form.Controls.ControlSection;
			AgreementDetails_tab_Attachments_section: DevKit.Form.Controls.ControlSection;
			agreementdetails_tab_documents_section: DevKit.Form.Controls.ControlSection;
			AgreementDetails_tab_agreementoptions_section: DevKit.Form.Controls.ControlSection;
			agreementdetails_tab_section_15: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_history_Sections {
			tab_9_section_1: DevKit.Form.Controls.ControlSection;
			agreement_events: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3_Sections {
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
			tab_3_section_5: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5_Sections {
			AgreementDetails_tab_hiddenfields_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_7 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_sign extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_sign_Sections;
		}
		interface tab_tab_prefill extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_prefill_Sections;
		}
		interface tab_tab_recipients extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_recipients_Sections;
		}
		interface tab_agreementdetails_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_agreementdetails_tab_Sections;
		}
		interface tab_tab_history extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_history_Sections;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_7: tab_tab_7;
			tab_sign: tab_tab_sign;
			tab_prefill: tab_tab_prefill;
			tab_recipients: tab_tab_recipients;
			agreementdetails_tab: tab_agreementdetails_tab;
			tab_history: tab_tab_history;
			tab_3: tab_tab_3;
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_authoringframe: DevKit.Form.Controls.ControlIFrame;
			IFRAME_signingframe: DevKit.Form.Controls.ControlIFrame;
			IFRAME_prefilldocument: DevKit.Form.Controls.ControlIFrame;
			AgreementRecipientsGrid: DevKit.Form.Controls.ControlGrid;
			WebResource_RecipientOrderTip: DevKit.Form.Controls.ControlWebResource;
			WebResource_LinkedInSalesNavigator: DevKit.Form.Controls.ControlWebResource;
			WebResource_AgreementMessageDescription: DevKit.Form.Controls.ControlWebResource;
			AgreementDocumentsGrid: DevKit.Form.Controls.ControlGrid;
			WebResource_attachfiles: DevKit.Form.Controls.ControlWebResource;
			WebResource_ReorderDocumentsLink: DevKit.Form.Controls.ControlWebResource;
			WebResource_LibrarySelection: DevKit.Form.Controls.ControlWebResource;
			WebResource_LanguageSelection: DevKit.Form.Controls.ControlWebResource;
			WebResource_SignedPDFProtectionInput: DevKit.Form.Controls.ControlWebResource;
			WebResource_IdentityVerificationInput: DevKit.Form.Controls.ControlWebResource;
			notescontrol: DevKit.Form.Controls.ControlNote;
			WebResource_AgreementSlider: DevKit.Form.Controls.ControlWebResource;
			/** Redirect your signers or approvers to a landing page of your choice */
			adobe_addpostsignredirecturl: DevKit.Form.Controls.ControlBoolean;
			adobe_agreementexpires: DevKit.Form.Controls.ControlBoolean;
			/** Unique identifier for Agreement Mapping Template associated with Agreement. */
			adobe_AgreementFormId: DevKit.Form.Controls.ControlLookup;
			adobe_agreementmessage: DevKit.Form.Controls.ControlString;
			adobe_audittrailcontent: DevKit.Form.Controls.ControlString;
			adobe_authoringurl: DevKit.Form.Controls.ControlString;
			adobe_automaticreminder: DevKit.Form.Controls.ControlOptionSet;
			adobe_combineddocumenturl: DevKit.Form.Controls.ControlString;
			adobe_creationdata: DevKit.Form.Controls.ControlString;
			adobe_creationtype: DevKit.Form.Controls.ControlString;
			adobe_currentsignerurl: DevKit.Form.Controls.ControlString;
			adobe_daysuntilexpires: DevKit.Form.Controls.ControlInteger;
			adobe_documentimagesurls: DevKit.Form.Controls.ControlString;
			adobe_emailid: DevKit.Form.Controls.ControlString;
			adobe_esagreementstatus: DevKit.Form.Controls.ControlString;
			adobe_exceptionmessage: DevKit.Form.Controls.ControlString;
			/** Select this option when signers are present and will sign in person. */
			adobe_hostsigning: DevKit.Form.Controls.ControlBoolean;
			adobe_identityverification: DevKit.Form.Controls.ControlOptionSet;
			adobe_isattachmentadded: DevKit.Form.Controls.ControlBoolean;
			adobe_isrecipientadded: DevKit.Form.Controls.ControlBoolean;
			adobe_librarydocuments: DevKit.Form.Controls.ControlString;
			adobe_librarydocumentslong: DevKit.Form.Controls.ControlString;
			adobe_migrationguid: DevKit.Form.Controls.ControlString;
			adobe_missingtemplatedocument: DevKit.Form.Controls.ControlBoolean;
			adobe_missingtemplaterecipient: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			adobe_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Account associated with Agreement. */
			adobe_parentaccountId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Contact associated with Agreement. */
			adobe_parentcontactid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Contract associated with Agreement. */
			adobe_parentcontractid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Invoice associated with Agreement. */
			adobe_ParentInvoiceId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Lead associated with Agreement. */
			adobe_parentleadid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Opportunity associated with Agreement. */
			adobe_parentopportunityid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Order associated with Agreement. */
			adobe_ParentOrderId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Quote associated with Agreement. */
			adobe_parentquoteid: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for User associated with Agreement. */
			adobe_parentuserid: DevKit.Form.Controls.ControlLookup;
			adobe_plugintrigger: DevKit.Form.Controls.ControlString;
			adobe_postsigningredirecturl: DevKit.Form.Controls.ControlString;
			/** It is recommended you allow the user to see the completion screen and download any documents before re-directing to your landing page.  Adobe recommends between 10-30 seconds. */
			adobe_postsignredirectdelay: DevKit.Form.Controls.ControlInteger;
			adobe_ReaderRoleOnly: DevKit.Form.Controls.ControlBoolean;
			adobe_recipientdata: DevKit.Form.Controls.ControlString;
			adobe_reviewsigningorder: DevKit.Form.Controls.ControlBoolean;
			adobe_securesignedpdf: DevKit.Form.Controls.ControlBoolean;
			adobe_selecteddatamap: DevKit.Form.Controls.ControlString;
			adobe_selectedlanguage: DevKit.Form.Controls.ControlString;
			adobe_selectedlibraryid: DevKit.Form.Controls.ControlString;
			/** Add yourself to the signing order */
			adobe_sendersigning: DevKit.Form.Controls.ControlBoolean;
			adobe_sendersigningoptions: DevKit.Form.Controls.ControlOptionSet;
			adobe_sendersigningorder: DevKit.Form.Controls.ControlBoolean;
			adobe_sendfromlibrary: DevKit.Form.Controls.ControlBoolean;
			adobe_sendfromlibrarycheckboxvalue: DevKit.Form.Controls.ControlBoolean;
			adobe_signaturetype: DevKit.Form.Controls.ControlBoolean;
			adobe_signedpdfpassword: DevKit.Form.Controls.ControlString;
			adobe_signingorder: DevKit.Form.Controls.ControlBoolean;
			adobe_signingpassword: DevKit.Form.Controls.ControlString;
			adobe_templateid: DevKit.Form.Controls.ControlString;
			/** Preview documents before sending */
			adobe_useauthoring: DevKit.Form.Controls.ControlBoolean;
			adobe_useragent: DevKit.Form.Controls.ControlString;
			adobe_waitingforsendersignature: DevKit.Form.Controls.ControlBoolean;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_adobe_adobe_agreement_adobe_agreementdocument: DevKit.Form.Controls.ControlNavigationItem,
			nav_adobe_adobe_agreement_adobe_recipient: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formadobe_agreement_Agreement extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form adobe_agreement_Agreement
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form adobe_agreement_Agreement */
		Body: LuckyMokey.Formadobe_agreement_Agreement.Body;
		/** The Header section of form adobe_agreement_Agreement */
		Header: LuckyMokey.Formadobe_agreement_Agreement.Header;
		/** The Navigation of form adobe_agreement_Agreement */
		Navigation: LuckyMokey.Formadobe_agreement_Agreement.Navigation;
	}
}
declare namespace OptionSet {
	namespace adobe_agreement {
		enum adobe_automaticreminder {
			/** 648770000 */
			Never,
			/** 648770001 */
			Every_Day_Until_Signed,
			/** 648770002 */
			Every_Week_Until_Signed
		}
		enum adobe_identityverification {
			/** 648770003 */
			EMAIL,
			/** 648770004 */
			PHONE,
			/** 648770000 */
			PASSWORD,
			/** 648770001 */
			KNOWLEDGE_BASE,
			/** 648770002 */
			WEB_IDENTITY
		}
		enum adobe_oquickcreateentityptionset {
			/** 648770000 */
			Opportunity,
			/** 648770001 */
			Contact,
			/** 648770002 */
			Lead,
			/** 648770003 */
			Account,
			/** 648770004 */
			Contract,
			/** 648770005 */
			Invoice,
			/** 648770006 */
			Order,
			/** 648770007 */
			Quote,
			/** 648770008 */
			User
		}
		enum adobe_sendersigningoptions {
			/** 648770000 */
			I_sign_first,
			/** 648770001 */
			I_sign_last,
			/** 648770002 */
			Only_I_sign
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Agreement'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}