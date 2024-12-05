//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSponsorable_article {
		interface Header extends DevKit.Controls.IHeader {
			msevtmgt_CostPerUnit: DevKit.Controls.Money;
			msevtmgt_EventSponsorship: DevKit.Controls.Lookup;
			msevtmgt_NumberOfUnits: DevKit.Controls.Integer;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__E8CC58CC_FE8A_406F_985B_904AC5209D2D_Sections {
			_17D3E62D_CA42_4161_BA41_8A7BD276B48F: DevKit.Controls.Section;
		}
		interface tab__E8CC58CC_FE8A_406F_985B_904AC5209D2D extends DevKit.Controls.ITab {
			Section: tab__E8CC58CC_FE8A_406F_985B_904AC5209D2D_Sections;
		}
		interface Tabs {
			_E8CC58CC_FE8A_406F_985B_904AC5209D2D: tab__E8CC58CC_FE8A_406F_985B_904AC5209D2D;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_CostPerUnit: DevKit.Controls.Money;
			msevtmgt_Description: DevKit.Controls.String;
			msevtmgt_EventSponsorship: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_NumberOfUnits: DevKit.Controls.Integer;
			msevtmgt_totalcost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_sponsorablearticle_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_sponsorablearticle_Tasks: DevKit.Controls.NavigationItem
		}
		interface quickForm_SponsorableArticleEvent_Body {
			msevtmgt_Event: DevKit.Controls.QuickView;
		}
		interface quickForm_SponsorableArticleEvent extends DevKit.Controls.IQuickView {
			Body: quickForm_SponsorableArticleEvent_Body;
		}
		interface QuickForm {
			SponsorableArticleEvent: quickForm_SponsorableArticleEvent;
		}
	}
	class FormSponsorable_article extends DevKit.IForm {
		/**
		* Sponsorable article [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sponsorable_article */
		Body: DevKit.FormSponsorable_article.Body;
		/** The Header section of form Sponsorable_article */
		Header: DevKit.FormSponsorable_article.Header;
		/** The Navigation of form Sponsorable_article */
		Navigation: DevKit.FormSponsorable_article.Navigation;
		/** The QuickForm of form Sponsorable_article */
		QuickForm: DevKit.FormSponsorable_article.QuickForm;
		/** The SidePanes of form Sponsorable_article */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_SponsorableArticleApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_SponsorableArticleApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate between the base currency and the currency associated with the entity */
		readonly ExchangeRate: number;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_CostPerUnit: number;
		/** Value of the cost per unit (in the base currency) */
		readonly msevtmgt_costperunit_Base: number;
		msevtmgt_Description: string;
		msevtmgt_EventSponsorship: string;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		msevtmgt_NumberOfUnits: number;
		/** Unique identifier for entity instances */
		msevtmgt_SponsorableArticleId: string;
		readonly msevtmgt_totalcost: number;
		/** Value of the total cost (in the base currency) */
		readonly msevtmgt_totalcost_Base: number;
		/** Unique identifier of the currency associated with the entity */
		msevtmgt_TransactionCurrencyId: string;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record */
		readonly OwningUser: string;
		/** Status of the sponsorable article */
		statecode: OptionSet.msevtmgt_SponsorableArticle.statecode;
		/** Reason for the status of the sponsorable article */
		statuscode: OptionSet.msevtmgt_SponsorableArticle.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity */
		TransactionCurrencyId: string;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate between the base currency and the currency associated with the entity */
			readonly ExchangeRate: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_CostPerUnit: string;
			/** Value of the cost per unit (in the base currency) */
			readonly msevtmgt_costperunit_Base: string;
			readonly msevtmgt_Description: string;
			readonly msevtmgt_EventSponsorship: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			readonly msevtmgt_NumberOfUnits: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_SponsorableArticleId: string;
			readonly msevtmgt_totalcost: string;
			/** Value of the total cost (in the base currency) */
			readonly msevtmgt_totalcost_Base: string;
			/** Unique identifier of the currency associated with the entity */
			readonly msevtmgt_TransactionCurrencyId: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record */
			readonly OwningUser: string;
			/** Status of the sponsorable article */
			readonly statecode: string;
			/** Reason for the status of the sponsorable article */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity */
			readonly TransactionCurrencyId: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_SponsorableArticle {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}