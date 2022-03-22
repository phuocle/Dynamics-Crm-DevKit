//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Solution area */
		msdyn_solutionarea: OptionSet.msdyn_salessuggestion.msdyn_solutionarea;
		/** Suggested date */
		msdyn_suggesteddate_UtcDateOnly: Date;
		/** Suggestion reason */
		msdyn_suggestionreason: string;
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
	}
}
declare namespace OptionSet {
	namespace msdyn_salessuggestion {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}