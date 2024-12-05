//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_incidenttyperecommendationresult_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows the incident related to this suggestion result. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Shows the incident (for merge) related to this suggestion result. */
			msdyn_IncidentTypeForMerge: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the product related to this suggestion result. */
			msdyn_ProductService: DevKit.Controls.Lookup;
			/** Shows the suggestion description. */
			msdyn_RecommendationDescription: DevKit.Controls.String;
			/** Shows the type of incident type suggestion. */
			msdyn_RecommendationType: DevKit.Controls.OptionSet;
			/** Shows the suggested value of product quantity or service duration. */
			msdyn_SuggestedValue: DevKit.Controls.Integer;
			/** The unit that determines the pricing and final quantity for this product or service. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult: DevKit.Controls.NavigationItem,
			msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_incidenttyperecommendationresult_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_incidenttyperecommendationresult_Information */
		Body: DevKit.Formmsdyn_incidenttyperecommendationresult_Information.Body;
		/** The Navigation of form msdyn_incidenttyperecommendationresult_Information */
		Navigation: DevKit.Formmsdyn_incidenttyperecommendationresult_Information.Navigation;
		/** The SidePanes of form msdyn_incidenttyperecommendationresult_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_incidenttyperecommendationresultApi {
		/**
		* DynamicsCrm.DevKit msdyn_incidenttyperecommendationresultApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the incident related to this suggestion result. */
		msdyn_IncidentType: string;
		/** Shows the incident (for merge) related to this suggestion result. */
		msdyn_IncidentTypeForMerge: string;
		/** Shows unique identifier of an incident type. */
		msdyn_IncidentTypeId: string;
		/** Shows unique identifier of an incident (for merge). */
		msdyn_IncidentTypeIdForMerge: string;
		/** Unique identifier for entity instances */
		msdyn_incidenttyperecommendationresultId: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Shows the occurrence times of the related incident type. */
		msdyn_OccurrenceTimes: number;
		/** Shows the product related to this suggestion result. */
		msdyn_ProductService: string;
		/** Shows unique identifier of a product. */
		msdyn_ProductServiceId: string;
		/** Shows the suggestion description. */
		msdyn_RecommendationDescription: string;
		/** Shows the type of incident type suggestion. */
		msdyn_RecommendationType: OptionSet.msdyn_incidenttyperecommendationresult.msdyn_RecommendationType;
		/** Id of Incident Type Suggestion Run History */
		msdyn_RunHistoryId: string;
		/** Shows unique identifier of the related run job. */
		msdyn_RunId: string;
		/** Shows the score ranking of the result. */
		msdyn_ScoreRanking: number;
		/** Shows the suggested value of product quantity or service duration. */
		msdyn_SuggestedValue: number;
		/** Shows the total occurrence times of the related incident type. */
		msdyn_TotalOccurrenceTimes: number;
		/** The unit that determines the pricing and final quantity for this product or service. */
		msdyn_Unit: string;
		/** Shows unique identifier of the unit. */
		msdyn_UnitId: string;
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
		/** Status of the Incident Type Suggestion Result */
		statecode: OptionSet.msdyn_incidenttyperecommendationresult.statecode;
		/** Reason for the status of the Incident Type Suggestion Result */
		statuscode: OptionSet.msdyn_incidenttyperecommendationresult.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the incident related to this suggestion result. */
			readonly msdyn_IncidentType: string;
			/** Shows the incident (for merge) related to this suggestion result. */
			readonly msdyn_IncidentTypeForMerge: string;
			/** Shows unique identifier of an incident type. */
			readonly msdyn_IncidentTypeId: string;
			/** Shows unique identifier of an incident (for merge). */
			readonly msdyn_IncidentTypeIdForMerge: string;
			/** Unique identifier for entity instances */
			readonly msdyn_incidenttyperecommendationresultId: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the occurrence times of the related incident type. */
			readonly msdyn_OccurrenceTimes: string;
			/** Shows the product related to this suggestion result. */
			readonly msdyn_ProductService: string;
			/** Shows unique identifier of a product. */
			readonly msdyn_ProductServiceId: string;
			/** Shows the suggestion description. */
			readonly msdyn_RecommendationDescription: string;
			/** Shows the type of incident type suggestion. */
			readonly msdyn_RecommendationType: string;
			/** Id of Incident Type Suggestion Run History */
			readonly msdyn_RunHistoryId: string;
			/** Shows unique identifier of the related run job. */
			readonly msdyn_RunId: string;
			/** Shows the score ranking of the result. */
			readonly msdyn_ScoreRanking: string;
			/** Shows the suggested value of product quantity or service duration. */
			readonly msdyn_SuggestedValue: string;
			/** Shows the total occurrence times of the related incident type. */
			readonly msdyn_TotalOccurrenceTimes: string;
			/** The unit that determines the pricing and final quantity for this product or service. */
			readonly msdyn_Unit: string;
			/** Shows unique identifier of the unit. */
			readonly msdyn_UnitId: string;
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
			/** Status of the Incident Type Suggestion Result */
			readonly statecode: string;
			/** Reason for the status of the Incident Type Suggestion Result */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_incidenttyperecommendationresult {
		enum msdyn_RecommendationType {
			/** 192350002 */
			Incident_Type,
			/** 192350000 */
			Work_Order_Product,
			/** 192350001 */
			Work_Order_Service
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
			/** 192350001 */
			Applied,
			/** 192350000 */
			Disliked,
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