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
		interface Process extends DevKit.Controls.IProcess {
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
		/** The Process of form msdyn_incidenttyperecommendationresult_Information */
		Process: DevKit.Formmsdyn_incidenttyperecommendationresult_Information.Process;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
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
		/** Shows the incident related to this suggestion result. */
		msdyn_IncidentType: DevKit.WebApi.LookupValue;
		/** Shows the incident (for merge) related to this suggestion result. */
		msdyn_IncidentTypeForMerge: DevKit.WebApi.LookupValue;
		/** Shows unique identifier of an incident type. */
		msdyn_IncidentTypeId: DevKit.WebApi.StringValue;
		/** Shows unique identifier of an incident (for merge). */
		msdyn_IncidentTypeIdForMerge: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_incidenttyperecommendationresultId: DevKit.WebApi.GuidValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the occurrence times of the related incident type. */
		msdyn_OccurrenceTimes: DevKit.WebApi.IntegerValue;
		/** Shows the product related to this suggestion result. */
		msdyn_ProductService: DevKit.WebApi.LookupValue;
		/** Shows unique identifier of a product. */
		msdyn_ProductServiceId: DevKit.WebApi.StringValue;
		/** Shows the suggestion description. */
		msdyn_RecommendationDescription: DevKit.WebApi.StringValue;
		/** Shows the type of incident type suggestion. */
		msdyn_RecommendationType: DevKit.WebApi.OptionSetValue;
		/** Id of Incident Type Suggestion Run History */
		msdyn_RunHistoryId: DevKit.WebApi.LookupValue;
		/** Shows unique identifier of the related run job. */
		msdyn_RunId: DevKit.WebApi.StringValue;
		/** Shows the score ranking of the result. */
		msdyn_ScoreRanking: DevKit.WebApi.IntegerValue;
		/** Shows the suggested value of product quantity or service duration. */
		msdyn_SuggestedValue: DevKit.WebApi.IntegerValue;
		/** Shows the total occurrence times of the related incident type. */
		msdyn_TotalOccurrenceTimes: DevKit.WebApi.IntegerValue;
		/** The unit that determines the pricing and final quantity for this product or service. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Shows unique identifier of the unit. */
		msdyn_UnitId: DevKit.WebApi.StringValue;
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
		/** Status of the Incident Type Suggestion Result */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Incident Type Suggestion Result */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}