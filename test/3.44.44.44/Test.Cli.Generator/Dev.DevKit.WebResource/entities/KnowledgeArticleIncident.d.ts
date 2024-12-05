//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledge_Article_Incident {
		interface Tabs {
		}
		interface Body {
			/** Choose the Incident id for the knowledge article. */
			IncidentId: DevKit.Controls.Lookup;
			/** This should be set to Yes when the user emails the article link to a customer.  */
			IsSentToCustomer: DevKit.Controls.Boolean;
			/** Knowledge Usage. */
			KnowledgeUsage: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormKnowledge_Article_Incident extends DevKit.IForm {
		/**
		* Knowledge Article Incident [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Knowledge_Article_Incident */
		Body: DevKit.FormKnowledge_Article_Incident.Body;
		/** The Navigation of form Knowledge_Article_Incident */
		Navigation: DevKit.FormKnowledge_Article_Incident.Navigation;
		/** The SidePanes of form Knowledge_Article_Incident */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormKnowledge_Article_Incident_for_Interactive_experience {
		interface Tabs {
		}
		interface Body {
			/** Choose the Incident id for the knowledge article. */
			IncidentId: DevKit.Controls.Lookup;
			/** This should be set to Yes when the user emails the article link to a customer.  */
			IsSentToCustomer: DevKit.Controls.Boolean;
			/** Knowledge Usage. */
			KnowledgeUsage: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormKnowledge_Article_Incident_for_Interactive_experience extends DevKit.IForm {
		/**
		* Knowledge Article Incident for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Knowledge_Article_Incident_for_Interactive_experience */
		Body: DevKit.FormKnowledge_Article_Incident_for_Interactive_experience.Body;
		/** The Navigation of form Knowledge_Article_Incident_for_Interactive_experience */
		Navigation: DevKit.FormKnowledge_Article_Incident_for_Interactive_experience.Navigation;
		/** The SidePanes of form Knowledge_Article_Incident_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	class KnowledgeArticleIncidentApi {
		/**
		* DynamicsCrm.DevKit KnowledgeArticleIncidentApi
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
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Choose the Incident id for the knowledge article. */
		IncidentId: string;
		/** This should be set to Yes when the user emails the article link to a customer.  */
		IsSentToCustomer: boolean;
		/** Choose the Knowledge Article. */
		KnowledgeArticleId: string;
		/** Unique identifier of the Knowledge Article for the incident. */
		KnowledgeArticleIncidentId: string;
		/** Knowledge Usage. */
		KnowledgeUsage: OptionSet.KnowledgeArticleIncident.KnowledgeUsage;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Status of the Knowledge Article Incident */
		statecode: OptionSet.KnowledgeArticleIncident.statecode;
		/** Reason for the status of the Knowledge Article Incident */
		statuscode: OptionSet.KnowledgeArticleIncident.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string;
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
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Choose the Incident id for the knowledge article. */
			readonly IncidentId: string;
			/** This should be set to Yes when the user emails the article link to a customer.  */
			readonly IsSentToCustomer: string;
			/** Choose the Knowledge Article. */
			readonly KnowledgeArticleId: string;
			/** Unique identifier of the Knowledge Article for the incident. */
			readonly KnowledgeArticleIncidentId: string;
			/** Knowledge Usage. */
			readonly KnowledgeUsage: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Status of the Knowledge Article Incident */
			readonly statecode: string;
			/** Reason for the status of the Knowledge Article Incident */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticleIncident {
		enum KnowledgeUsage {
			/** 1 */
			Reference,
			/** 2 */
			Solution,
			/** 3 */
			Source
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}