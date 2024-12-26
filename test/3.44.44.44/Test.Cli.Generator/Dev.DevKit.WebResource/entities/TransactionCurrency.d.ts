//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTransactionCurrency_Information {
		interface tab_Legacy_tab_Sections {
			Currency_conversion: DevKit.Controls.Section;
			Select_Base_Currency: DevKit.Controls.Section;
			Transaction_currency_information: DevKit.Controls.Section;
		}
		interface tab_UCI_tab_Sections {
			CurrencyInformation: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
		}
		interface tab_Legacy_tab extends DevKit.Controls.ITab {
			Section: tab_Legacy_tab_Sections;
		}
		interface tab_UCI_tab extends DevKit.Controls.ITab {
			Section: tab_UCI_tab_Sections;
		}
		interface Tabs {
			Legacy_tab: tab_Legacy_tab;
			UCI_tab: tab_UCI_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Name of the transaction currency. */
			CurrencyName: DevKit.Controls.String;
			/** Name of the transaction currency. */
			CurrencyName1: DevKit.Controls.String;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision: DevKit.Controls.Integer;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision1: DevKit.Controls.Integer;
			/** Symbol for the transaction currency. */
			CurrencySymbol: DevKit.Controls.String;
			/** Symbol for the transaction currency. */
			CurrencySymbol1: DevKit.Controls.String;
			/** Currency type that can be used for new currency. */
			CurrencyType: DevKit.Controls.OptionSet;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate1: DevKit.Controls.Decimal;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode: DevKit.Controls.String;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode1: DevKit.Controls.String;
			systemcurrency: DevKit.Controls.ActionCards;
			systemcurrency_uci: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			adx_inviteredemption_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			adx_portalcomment_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			basecurrency_organization: DevKit.Controls.NavigationItem,
			bulkoperation_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			DynamicPropertyAssociation_TransactionCurrency: DevKit.Controls.NavigationItem,
			DynamicPropertyOptionSetItem_TransactionCurrency: DevKit.Controls.NavigationItem,
			incidentresolution_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msdyn_bookingalert_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msdyn_copilottranscript_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msdyn_ocoutboundmessage_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msdyn_ocsession_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msdyn_ocvoicemail_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msdyn_transactioncurrency_invoicedetail_Currency: DevKit.Controls.NavigationItem,
			msevtmgt_TransactionCurrencyId_msevtmgt_CheckIn: DevKit.Controls.NavigationItem,
			msevtmgt_TransactionCurrencyId_msevtmgt_Event: DevKit.Controls.NavigationItem,
			msevtmgt_TransactionCurrencyId_msevtmgt_Speaker: DevKit.Controls.NavigationItem,
			msevtmgt_TransactionCurrencyId_msevtmgt_SponsorableArticle: DevKit.Controls.NavigationItem,
			msevtmgt_TransactionCurrencyId_msevtmgt_Sponsorship: DevKit.Controls.NavigationItem,
			msevtmgt_TransactionCurrencyId_msevtmgt_Venue: DevKit.Controls.NavigationItem,
			msfp_alert_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msfp_surveyinvite_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			msfp_surveyresponse_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			new_TransactionCurrency_msevtmgt_attendeepass: DevKit.Controls.NavigationItem,
			orderclose_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			quoteclose_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			transactioncurrency_account: DevKit.Controls.NavigationItem,
			TransactionCurrency_ActionCardUserState: DevKit.Controls.NavigationItem,
			transactioncurrency_annualfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_Appointment: DevKit.Controls.NavigationItem,
			TransactionCurrency_bookableresource: DevKit.Controls.NavigationItem,
			TransactionCurrency_bookableresourcebooking: DevKit.Controls.NavigationItem,
			TransactionCurrency_bookableresourcebookingheader: DevKit.Controls.NavigationItem,
			TransactionCurrency_bookableresourcecategory: DevKit.Controls.NavigationItem,
			TransactionCurrency_bookableresourcecategoryassn: DevKit.Controls.NavigationItem,
			TransactionCurrency_bookableresourcecharacteristic: DevKit.Controls.NavigationItem,
			TransactionCurrency_bookableresourcegroup: DevKit.Controls.NavigationItem,
			TransactionCurrency_bookingstatus: DevKit.Controls.NavigationItem,
			TransactionCurrency_BusinessUnit: DevKit.Controls.NavigationItem,
			transactioncurrency_campaign: DevKit.Controls.NavigationItem,
			transactioncurrency_campaignactivity: DevKit.Controls.NavigationItem,
			TransactionCurrency_CampaignResponse: DevKit.Controls.NavigationItem,
			transactioncurrency_cardtype: DevKit.Controls.NavigationItem,
			transactioncurrency_category: DevKit.Controls.NavigationItem,
			TransactionCurrency_ChannelAccessProfile: DevKit.Controls.NavigationItem,
			TransactionCurrency_characteristic: DevKit.Controls.NavigationItem,
			transactioncurrency_competitor: DevKit.Controls.NavigationItem,
			transactioncurrency_contact: DevKit.Controls.NavigationItem,
			transactioncurrency_contract: DevKit.Controls.NavigationItem,
			transactioncurrency_contractdetail: DevKit.Controls.NavigationItem,
			TransactionCurrency_ConvertRule: DevKit.Controls.NavigationItem,
			transactioncurrency_convertruleitem: DevKit.Controls.NavigationItem,
			TransactionCurrency_delveactionhub: DevKit.Controls.NavigationItem,
			transactioncurrency_discount: DevKit.Controls.NavigationItem,
			transactioncurrency_discounttype: DevKit.Controls.NavigationItem,
			TransactionCurrency_Dynamicpropertyinsatance: DevKit.Controls.NavigationItem,
			TransactionCurrency_Email: DevKit.Controls.NavigationItem,
			TransactionCurrency_Entitlement: DevKit.Controls.NavigationItem,
			TransactionCurrency_entitlementchannel: DevKit.Controls.NavigationItem,
			TransactionCurrency_entitlementtemplate: DevKit.Controls.NavigationItem,
			TransactionCurrency_entitlementtemplatechannel: DevKit.Controls.NavigationItem,
			TransactionCurrency_Equipment: DevKit.Controls.NavigationItem,
			transactioncurrency_expiredprocess: DevKit.Controls.NavigationItem,
			TransactionCurrency_ExternalParty: DevKit.Controls.NavigationItem,
			TransactionCurrency_externalpartyitem: DevKit.Controls.NavigationItem,
			transactioncurrency_feedback: DevKit.Controls.NavigationItem,
			transactioncurrency_fixedmonthlyfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_Goal: DevKit.Controls.NavigationItem,
			TransactionCurrency_Incident: DevKit.Controls.NavigationItem,
			TransactionCurrency_InteractionForEmail: DevKit.Controls.NavigationItem,
			transactioncurrency_invoice: DevKit.Controls.NavigationItem,
			transactioncurrency_invoicedetail: DevKit.Controls.NavigationItem,
			TransactionCurrency_KbArticle: DevKit.Controls.NavigationItem,
			TransactionCurrency_knowledgearticle: DevKit.Controls.NavigationItem,
			transactioncurrency_knowledgearticleincident: DevKit.Controls.NavigationItem,
			transactioncurrency_knowledgearticleviews: DevKit.Controls.NavigationItem,
			TransactionCurrency_KnowledgeBaseRecord: DevKit.Controls.NavigationItem,
			transactioncurrency_lead: DevKit.Controls.NavigationItem,
			TransactionCurrency_LeadAddress: DevKit.Controls.NavigationItem,
			transactioncurrency_leadtoopportunitysalesprocess: DevKit.Controls.NavigationItem,
			transactioncurrency_list: DevKit.Controls.NavigationItem,
			TransactionCurrency_MailMergeTemplate: DevKit.Controls.NavigationItem,
			transactioncurrency_monthlyfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_actual: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_agreementbookingproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_agreementbookingservice: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_agreementinvoiceproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_bookingjournal: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_fieldservicepricelistitem: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_forecastinstance: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_nottoexceed: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_orderinvoicingproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_payment: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_paymentdetail: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_problematicasset: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_purchaseorder: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_purchaseorderbill: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_purchaseorderproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_purchaseorderreceiptproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_quotebookingproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_quotebookingservice: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_quotebookingsetup: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_quoteinvoicingproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_quoteinvoicingsetup: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_rma: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_rmaproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_rtv: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_rtvproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_salessuggestion: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_workorder: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_workordernte: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_workorderproduct: DevKit.Controls.NavigationItem,
			TransactionCurrency_msdyn_workorderservice: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_AttendeePass: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_Building: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_Event: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_HotelRoomAllocation: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_pass: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_Speaker: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_speakerengagement: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_SponsorableArticle: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_Sponsorship: DevKit.Controls.NavigationItem,
			TransactionCurrency_msevtmgt_Venue: DevKit.Controls.NavigationItem,
			transactioncurrency_newprocess: DevKit.Controls.NavigationItem,
			TransactionCurrency_officegraphdocument: DevKit.Controls.NavigationItem,
			transactioncurrency_opportunity: DevKit.Controls.NavigationItem,
			transactioncurrency_opportunityclose: DevKit.Controls.NavigationItem,
			transactioncurrency_opportunityproduct: DevKit.Controls.NavigationItem,
			transactioncurrency_opportunitysalesprocess: DevKit.Controls.NavigationItem,
			TransactionCurrency_PhoneCall: DevKit.Controls.NavigationItem,
			transactioncurrency_phonetocaseprocess: DevKit.Controls.NavigationItem,
			transactioncurrency_position: DevKit.Controls.NavigationItem,
			transactioncurrency_pricelevel: DevKit.Controls.NavigationItem,
			transactioncurrency_product: DevKit.Controls.NavigationItem,
			transactioncurrency_ProductAssociation: DevKit.Controls.NavigationItem,
			transactioncurrency_productpricelevel: DevKit.Controls.NavigationItem,
			transactioncurrency_ProductSubstitute: DevKit.Controls.NavigationItem,
			TransactionCurrency_profilerule: DevKit.Controls.NavigationItem,
			TransactionCurrency_profileruleitem: DevKit.Controls.NavigationItem,
			transactioncurrency_quarterlyfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_Queue: DevKit.Controls.NavigationItem,
			TransactionCurrency_QueueItem: DevKit.Controls.NavigationItem,
			transactioncurrency_quote: DevKit.Controls.NavigationItem,
			transactioncurrency_quotedetail: DevKit.Controls.NavigationItem,
			TransactionCurrency_ratingmodel: DevKit.Controls.NavigationItem,
			TransactionCurrency_ratingvalue: DevKit.Controls.NavigationItem,
			TransactionCurrency_recommendeddocument: DevKit.Controls.NavigationItem,
			TransactionCurrency_ReportCategory: DevKit.Controls.NavigationItem,
			TransactionCurrency_Routingrule: DevKit.Controls.NavigationItem,
			TransactionCurrency_routingruleitem: DevKit.Controls.NavigationItem,
			TransactionCurrency_SalesLiterature: DevKit.Controls.NavigationItem,
			transactioncurrency_salesorder: DevKit.Controls.NavigationItem,
			transactioncurrency_salesorderdetail: DevKit.Controls.NavigationItem,
			transactioncurrency_semiannualfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_ServiceAppointment: DevKit.Controls.NavigationItem,
			TransactionCurrency_SharePointSite: DevKit.Controls.NavigationItem,
			TransactionCurrency_SimilarityRule: DevKit.Controls.NavigationItem,
			TransactionCurrency_SLA: DevKit.Controls.NavigationItem,
			TransactionCurrency_SLAItem: DevKit.Controls.NavigationItem,
			TransactionCurrency_suggestioncardtemplate: DevKit.Controls.NavigationItem,
			TransactionCurrency_SystemUser: DevKit.Controls.NavigationItem,
			TransactionCurrency_Task: DevKit.Controls.NavigationItem,
			TransactionCurrency_Team: DevKit.Controls.NavigationItem,
			TransactionCurrency_Territory: DevKit.Controls.NavigationItem,
			TransactionCurrency_Theme: DevKit.Controls.NavigationItem,
			transactioncurrency_translationprocess: DevKit.Controls.NavigationItem,
			TransactionCurrency_UntrackedEmail: DevKit.Controls.NavigationItem,
			transactioncurrency_userfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_UserMapping: DevKit.Controls.NavigationItem,
			transactioncurrency_usersettings: DevKit.Controls.NavigationItem
		}
	}
	class FormTransactionCurrency_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TransactionCurrency_Information */
		Body: DevKit.FormTransactionCurrency_Information.Body;
		/** The Navigation of form TransactionCurrency_Information */
		Navigation: DevKit.FormTransactionCurrency_Information.Navigation;
		/** The SidePanes of form TransactionCurrency_Information */
		SidePanes: DevKit.SidePanes;
	}
	class TransactionCurrencyApi {
		/**
		* DynamicsCrm.DevKit TransactionCurrencyApi
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the transaction currency. */
		readonly CreatedBy: string;
		/** Date and time when the transaction currency was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the transactioncurrency. */
		readonly CreatedOnBehalfBy: string;
		/** Name of the transaction currency. */
		CurrencyName: string;
		/** Number of decimal places that can be used for currency. */
		CurrencyPrecision: number;
		/** Symbol for the transaction currency. */
		CurrencySymbol: string;
		/** Currency type that can be used for new currency. */
		CurrencyType: OptionSet.TransactionCurrency.CurrencyType;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Exchange rate between the transaction currency and the base currency. */
		ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** ISO currency code for the transaction currency. */
		ISOCurrencyCode: string;
		/** Unique identifier of the user who last modified the transaction currency. */
		readonly ModifiedBy: string;
		/** Date and time when the transaction currency was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the transactioncurrency. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the transaction currency. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the transaction currency. */
		StateCode: OptionSet.TransactionCurrency.StateCode;
		/** Reason for the status of the transaction currency. */
		StatusCode: OptionSet.TransactionCurrency.StatusCode;
		/** Unique identifier of the transaction currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		readonly UniqueDscId: string;
		/** Version number of the transaction currency. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the transaction currency. */
			readonly CreatedBy: string;
			/** Date and time when the transaction currency was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the transactioncurrency. */
			readonly CreatedOnBehalfBy: string;
			/** Name of the transaction currency. */
			readonly CurrencyName: string;
			/** Number of decimal places that can be used for currency. */
			readonly CurrencyPrecision: string;
			/** Symbol for the transaction currency. */
			readonly CurrencySymbol: string;
			/** Currency type that can be used for new currency. */
			readonly CurrencyType: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Exchange rate between the transaction currency and the base currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** ISO currency code for the transaction currency. */
			readonly ISOCurrencyCode: string;
			/** Unique identifier of the user who last modified the transaction currency. */
			readonly ModifiedBy: string;
			/** Date and time when the transaction currency was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the transactioncurrency. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the transaction currency. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the transaction currency. */
			readonly StateCode: string;
			/** Reason for the status of the transaction currency. */
			readonly StatusCode: string;
			/** Unique identifier of the transaction currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly UniqueDscId: string;
			/** Version number of the transaction currency. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TransactionCurrency {
		enum CurrencyType {
			/** 1 */
			Custom,
			/** 0 */
			System
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}