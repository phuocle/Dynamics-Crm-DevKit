//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRecommendation {
		interface Header extends DevKit.Controls.IHeader {
			/** Potential revenue */
			msdyn_potentialrevenue: DevKit.Controls.Money;
			/** Related record */
			msdyn_relatedrecord: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_SUMMARY_TAB_Sections {
			SOCIAL_PANE: DevKit.Controls.Section;
			Summary_CadenceWidget: DevKit.Controls.Section;
			Summary_RecommendedContacts: DevKit.Controls.Section;
			Summary_Suggestion: DevKit.Controls.Section;
			Summary_SuggestionWidget: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			CadenceWidgetControl: DevKit.Controls.ActionCards;
			msdyn_qualifiedrecord: DevKit.Controls.Lookup;
			/** Sales play */
			msdyn_salesplay: DevKit.Controls.OptionSet;
			/** Solution area */
			msdyn_solutionarea: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Reason for the status of the Suggestion */
			statuscode: DevKit.Controls.OptionSet;
			SuggestionWidgetControl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_salessuggestion_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_Appointments: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_Emails: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_Posts: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_suggestionprincipalobjectaccess_salessuggestionid: DevKit.Controls.NavigationItem,
			msdyn_salessuggestion_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormRecommendation extends DevKit.IForm {
		/**
		* Recommendation [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Recommendation */
		Body: DevKit.FormRecommendation.Body;
		/** The Header section of form Recommendation */
		Header: DevKit.FormRecommendation.Header;
		/** The Navigation of form Recommendation */
		Navigation: DevKit.FormRecommendation.Navigation;
		/** The SidePanes of form Recommendation */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_salessuggestionApi {
		/**
		* DynamicsCrm.DevKit msdyn_salessuggestionApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The primary email address for the entity. */
		EmailAddress: string;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Customdata JSON */
		msdyn_customdata: string;
		/** Expiry date */
		msdyn_expirydate_UtcDateOnly: Date;
		/** Feedback reason */
		msdyn_feedbackreason: string;
		/** Suggestion insight */
		msdyn_insight: string;
		/** Model ID */
		msdyn_modelid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Potential revenue */
		msdyn_potentialrevenue: number;
		/** Value of the potential revenue in base currency. */
		readonly msdyn_potentialrevenue_Base: number;
		msdyn_qualifiedrecord: string;
		/** Related record */
		msdyn_relatedrecord: string;
		/** Sales motion */
		msdyn_salesmotion: OptionSet.msdyn_salessuggestion.msdyn_salesmotion;
		/** Sales play */
		msdyn_salesplay: OptionSet.msdyn_salessuggestion.msdyn_salesplay;
		/** Unique identifier for entity instances */
		msdyn_salessuggestionId: string;
		/** Score */
		msdyn_score: number;
		/** Many to one relationship to Contact entity */
		msdyn_sequencecontact: string;
		/** Solution area */
		msdyn_solutionarea: OptionSet.msdyn_salessuggestion.msdyn_solutionarea;
		/** Suggested date */
		msdyn_suggesteddate_UtcDateOnly: Date;
		/** Suggestion reason */
		msdyn_suggestionreason: string;
		msdyn_suggestionsource: OptionSet.msdyn_salessuggestion.msdyn_suggestionsource;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Suggestion */
		statecode: OptionSet.msdyn_salessuggestion.statecode;
		/** Reason for the status of the Suggestion */
		statuscode: OptionSet.msdyn_salessuggestion.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The primary email address for the entity. */
			readonly EmailAddress: string;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Customdata JSON */
			readonly msdyn_customdata: string;
			/** Expiry date */
			readonly msdyn_expirydate_UtcDateOnly: string;
			/** Feedback reason */
			readonly msdyn_feedbackreason: string;
			/** Suggestion insight */
			readonly msdyn_insight: string;
			/** Model ID */
			readonly msdyn_modelid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Potential revenue */
			readonly msdyn_potentialrevenue: string;
			/** Value of the potential revenue in base currency. */
			readonly msdyn_potentialrevenue_Base: string;
			readonly msdyn_qualifiedrecord: string;
			/** Related record */
			readonly msdyn_relatedrecord: string;
			/** Sales motion */
			readonly msdyn_salesmotion: string;
			/** Sales play */
			readonly msdyn_salesplay: string;
			/** Unique identifier for entity instances */
			readonly msdyn_salessuggestionId: string;
			/** Score */
			readonly msdyn_score: string;
			/** Many to one relationship to Contact entity */
			readonly msdyn_sequencecontact: string;
			/** Solution area */
			readonly msdyn_solutionarea: string;
			/** Suggested date */
			readonly msdyn_suggesteddate_UtcDateOnly: string;
			/** Suggestion reason */
			readonly msdyn_suggestionreason: string;
			readonly msdyn_suggestionsource: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Suggestion */
			readonly statecode: string;
			/** Reason for the status of the Suggestion */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_salessuggestion {
		enum msdyn_qualifiedrecordIdType {
		}
		enum msdyn_relatedrecordIdType {
		}
		enum msdyn_salesmotion {
			/** 1 */
			Default
		}
		enum msdyn_salesplay {
			/** 1 */
			Default
		}
		enum msdyn_solutionarea {
			/** 1 */
			Default
		}
		enum msdyn_suggestionsource {
			/** 0 */
			Others,
			/** 1 */
			Product_Recommendations
		}
		enum statecode {
			/** 1 */
			Closed,
			/** 2 */
			Declined,
			/** 0 */
			Open,
			/** 3 */
			Qualified
		}
		enum statuscode {
			/** 5 */
			Accepted,
			/** 4 */
			Created_Opportunity,
			/** 1 */
			Open,
			/** 2 */
			Others_2,
			/** 3 */
			Others_3
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