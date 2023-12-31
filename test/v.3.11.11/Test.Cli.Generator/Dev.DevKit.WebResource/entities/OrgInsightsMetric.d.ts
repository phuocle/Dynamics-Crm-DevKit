﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OrgInsightsMetricApi {
		/**
		* DynamicsCrm.DevKit OrgInsightsMetricApi
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
		/** Date and time when the organization insights metric was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Name of the metric which is used for retrieving the data */
		InternalName: string;
		/** Type of the metric */
		MetricType: OptionSet.OrgInsightsMetric.MetricType;
		/** Legend Name used while displaying the metric */
		Name: string;
		/** Unique identifier of the organization associated with the record */
		readonly OrganizationId: string;
		OrgInsightsMetricId: string;
		readonly FormattedValue: {
			/** Date and time when the organization insights metric was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Name of the metric which is used for retrieving the data */
			readonly InternalName: string;
			/** Type of the metric */
			readonly MetricType: string;
			/** Legend Name used while displaying the metric */
			readonly Name: string;
			/** Unique identifier of the organization associated with the record */
			readonly OrganizationId: string;
			readonly OrgInsightsMetricId: string;
		}
	}
}
declare namespace OptionSet {
	namespace OrgInsightsMetric {
		enum MetricType {
			/** 2 */
			Category,
			/** 1 */
			Time_Series
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}