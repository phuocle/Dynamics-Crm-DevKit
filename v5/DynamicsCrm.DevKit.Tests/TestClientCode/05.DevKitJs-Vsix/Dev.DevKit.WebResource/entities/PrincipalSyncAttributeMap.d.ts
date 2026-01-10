//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PrincipalSyncAttributeMapApi {
		/**
		* DynamicsCrm.DevKit PrincipalSyncAttributeMapApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Specifies allowed sync directions. */
		AllowedSyncDirection: number | null;
		/** CRM Attribute Display Name. */
		AttributeCRMDisplayName: string | null;
		/** CRM Attribute Name. */
		AttributeCRMName: string | null;
		/** Exchange Attribute Display Name. */
		AttributeExchangeDisplayName: string | null;
		/** Exchange Attribute Name. */
		AttributeExchangeName: string | null;
		/** Computed Properties. */
		ComputedProperties: string | null;
		/** Default Sync Direction */
		DefaultSyncDirection: OptionSet.PrincipalSyncAttributeMap.DefaultSyncDirection | null;
		/** Indicates whether the mapping is a computed property */
		readonly IsComputed: boolean | null;
		/** Mapping Name. */
		MappingName: string | null;
		/** Unique identifier of the associated organization. */
		readonly OrganizationId: string | null;
		/** Parent Sync-Attribute Mapping to which this mapping belongs */
		ParentPrincipalSyncAttributeMappingId: string | null;
		PrincipalId: string | null;
		/** Unique identifier of the principal sync attribute mapping. */
		PrincipalSyncAttributeMapId: string | null;
		/** Sync Direction */
		SyncDirection: OptionSet.PrincipalSyncAttributeMap.SyncDirection | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Specifies allowed sync directions. */
			readonly AllowedSyncDirection: string;
			/** CRM Attribute Display Name. */
			readonly AttributeCRMDisplayName: string;
			/** CRM Attribute Name. */
			readonly AttributeCRMName: string;
			/** Exchange Attribute Display Name. */
			readonly AttributeExchangeDisplayName: string;
			/** Exchange Attribute Name. */
			readonly AttributeExchangeName: string;
			/** Computed Properties. */
			readonly ComputedProperties: string;
			/** Default Sync Direction */
			readonly DefaultSyncDirection: string;
			/** Indicates whether the mapping is a computed property */
			readonly IsComputed: string;
			/** Mapping Name. */
			readonly MappingName: string;
			/** Unique identifier of the associated organization. */
			readonly OrganizationId: string;
			/** Parent Sync-Attribute Mapping to which this mapping belongs */
			readonly ParentPrincipalSyncAttributeMappingId: string;
			readonly PrincipalId: string;
			/** Unique identifier of the principal sync attribute mapping. */
			readonly PrincipalSyncAttributeMapId: string;
			/** Sync Direction */
			readonly SyncDirection: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PrincipalSyncAttributeMap {
		enum DefaultSyncDirection {
			/** Bidirectional = 3*/
			Bidirectional = 3,
			/** None = 0*/
			None = 0,
			/** ToCRM = 2*/
			ToCRM = 2,
			/** ToExchange = 1*/
			ToExchange = 1
		}
		enum EntityTypeCode {
		}
		enum SyncDirection {
			/** Bidirectional = 3*/
			Bidirectional = 3,
			/** None = 0*/
			None = 0,
			/** ToCRM = 2*/
			ToCRM = 2,
			/** ToExchange = 1*/
			ToExchange = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}