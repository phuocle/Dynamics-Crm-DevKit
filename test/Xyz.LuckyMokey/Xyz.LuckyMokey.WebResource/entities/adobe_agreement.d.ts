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
	class adobe_agreementApi {
		/**
		* DynamicsCrm.DevKit adobe_agreementApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		adobe_add_recipient_from_parent_entity: DevKit.WebApi.BooleanValue;
		/** Redirect your signers or approvers to a landing page of your choice */
		adobe_addpostsignredirecturl: DevKit.WebApi.BooleanValue;
		adobe_adobe_agreementsystemuserlookup: DevKit.WebApi.LookupValue;
		adobe_agreementAccountlookup: DevKit.WebApi.LookupValue;
		adobe_agreementcontactlookup: DevKit.WebApi.LookupValue;
		/** Unique identifier for Contract associated with Agreement. */
		adobe_agreementcontractlookup: DevKit.WebApi.LookupValue;
		adobe_agreementexpires: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Agreement Mapping Template associated with Agreement. */
		adobe_AgreementFormId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		adobe_agreementId: DevKit.WebApi.GuidValue;
		adobe_agreementInvoicelookup: DevKit.WebApi.LookupValue;
		adobe_agreementleadlookup: DevKit.WebApi.LookupValue;
		adobe_agreementmessage: DevKit.WebApi.StringValue;
		adobe_agreementopportunitylookup: DevKit.WebApi.LookupValue;
		adobe_agreementQuotelookup: DevKit.WebApi.LookupValue;
		adobe_agreementsalesorderlookup: DevKit.WebApi.LookupValue;
		adobe_audittrailcontent: DevKit.WebApi.StringValue;
		adobe_authoringurl: DevKit.WebApi.StringValue;
		adobe_automaticreminder: DevKit.WebApi.OptionSetValue;
		adobe_combineddocumenturl: DevKit.WebApi.StringValue;
		adobe_creationdata: DevKit.WebApi.StringValue;
		adobe_creationtype: DevKit.WebApi.StringValue;
		adobe_crmversion: DevKit.WebApi.StringValue;
		adobe_currentsignerurl: DevKit.WebApi.StringValue;
		adobe_datesent_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		adobe_datesigned_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		adobe_dateupdated_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		adobe_daysuntilexpires: DevKit.WebApi.IntegerValue;
		adobe_documentimagesurls: DevKit.WebApi.StringValue;
		adobe_emailid: DevKit.WebApi.StringValue;
		adobe_esagreementid: DevKit.WebApi.StringValue;
		adobe_esagreementstatus: DevKit.WebApi.StringValue;
		adobe_exceptionmessage: DevKit.WebApi.StringValue;
		/** Select this option when signers are present and will sign in person. */
		adobe_hostsigning: DevKit.WebApi.BooleanValue;
		adobe_identityverification: DevKit.WebApi.OptionSetValue;
		adobe_isattachmentadded: DevKit.WebApi.BooleanValue;
		adobe_isaudittrailattached: DevKit.WebApi.BooleanValue;
		adobe_isPostAddedToParentEntity: DevKit.WebApi.BooleanValue;
		adobe_isQuickCreate: DevKit.WebApi.BooleanValue;
		adobe_isrecipientadded: DevKit.WebApi.BooleanValue;
		adobe_issignedpdfattached: DevKit.WebApi.BooleanValue;
		adobe_legacyid: DevKit.WebApi.StringValue;
		adobe_librarydocuments: DevKit.WebApi.StringValue;
		adobe_librarydocumentslong: DevKit.WebApi.StringValue;
		adobe_migrationguid: DevKit.WebApi.StringValue;
		adobe_missingtemplatedocument: DevKit.WebApi.BooleanValue;
		adobe_missingtemplaterecipient: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		adobe_name: DevKit.WebApi.StringValue;
		adobe_oquickcreateentityptionset: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for Account associated with Agreement. */
		adobe_parentaccountId: DevKit.WebApi.LookupValue;
		/** Unique identifier for Contact associated with Agreement. */
		adobe_parentcontactid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Contract associated with Agreement. */
		adobe_parentcontractid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Invoice associated with Agreement. */
		adobe_ParentInvoiceId: DevKit.WebApi.LookupValue;
		/** Unique identifier for Lead associated with Agreement. */
		adobe_parentleadid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Opportunity associated with Agreement. */
		adobe_parentopportunityid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Order associated with Agreement. */
		adobe_ParentOrderId: DevKit.WebApi.LookupValue;
		/** Unique identifier for Quote associated with Agreement. */
		adobe_parentquoteid: DevKit.WebApi.LookupValue;
		/** Unique identifier for User associated with Agreement. */
		adobe_parentuserid: DevKit.WebApi.LookupValue;
		adobe_plugintrigger: DevKit.WebApi.StringValue;
		adobe_plugintriggerasync: DevKit.WebApi.StringValue;
		adobe_postsigningredirecturl: DevKit.WebApi.StringValue;
		/** It is recommended you allow the user to see the completion screen and download any documents before re-directing to your landing page.  Adobe recommends between 10-30 seconds. */
		adobe_postsignredirectdelay: DevKit.WebApi.IntegerValue;
		adobe_postsignredirecturl: DevKit.WebApi.StringValue;
		adobe_quickcreatelookuptemplatelist: DevKit.WebApi.LookupValue;
		adobe_ReaderRoleOnly: DevKit.WebApi.BooleanValue;
		adobe_recipientdata: DevKit.WebApi.StringValue;
		adobe_reviewsigningorder: DevKit.WebApi.BooleanValue;
		adobe_securesignedpdf: DevKit.WebApi.BooleanValue;
		adobe_selecteddatamap: DevKit.WebApi.StringValue;
		adobe_selectedlanguage: DevKit.WebApi.StringValue;
		adobe_selectedlibraryid: DevKit.WebApi.StringValue;
		/** User Id of the sender of agreement */
		adobe_senderId: DevKit.WebApi.LookupValue;
		/** Add yourself to the signing order */
		adobe_sendersigning: DevKit.WebApi.BooleanValue;
		adobe_sendersigningoptions: DevKit.WebApi.OptionSetValue;
		adobe_sendersigningorder: DevKit.WebApi.BooleanValue;
		adobe_sendersignsonly: DevKit.WebApi.BooleanValue;
		adobe_sendfromlibrary: DevKit.WebApi.BooleanValue;
		adobe_sendfromlibrarycheckboxvalue: DevKit.WebApi.BooleanValue;
		adobe_signaturetype: DevKit.WebApi.BooleanValue;
		adobe_signedpdfpassword: DevKit.WebApi.StringValue;
		adobe_signingorder: DevKit.WebApi.BooleanValue;
		adobe_signingpassword: DevKit.WebApi.StringValue;
		adobe_subject: DevKit.WebApi.StringValue;
		adobe_templateid: DevKit.WebApi.StringValue;
		adobe_triggeragreementupdate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Preview documents before sending */
		adobe_useauthoring: DevKit.WebApi.BooleanValue;
		adobe_useragent: DevKit.WebApi.StringValue;
		adobe_usermessagequickcreateform: DevKit.WebApi.StringValue;
		adobe_waitingforsendersignature: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Agreement */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Agreement */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Agreement'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}