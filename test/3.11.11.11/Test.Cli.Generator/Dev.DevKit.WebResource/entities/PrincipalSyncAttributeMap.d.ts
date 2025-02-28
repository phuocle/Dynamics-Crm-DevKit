﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PrincipalSyncAttributeMapApi {
		/**
		* DynamicsCrm.DevKit PrincipalSyncAttributeMapApi
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
		/** Specifies allowed sync directions. */
		AllowedSyncDirection: number;
		/** CRM Attribute Display Name. */
		AttributeCRMDisplayName: string;
		/** CRM Attribute Name. */
		AttributeCRMName: string;
		/** Exchange Attribute Display Name. */
		AttributeExchangeDisplayName: string;
		/** Exchange Attribute Name. */
		AttributeExchangeName: string;
		/** Computed Properties. */
		ComputedProperties: string;
		/** Default Sync Direction */
		DefaultSyncDirection: OptionSet.PrincipalSyncAttributeMap.DefaultSyncDirection;
		/** Indicates whether the mapping is a computed property */
		readonly IsComputed: boolean;
		/** Mapping Name. */
		MappingName: string;
		/** Unique identifier of the associated organization. */
		readonly OrganizationId: string;
		/** Parent Sync-Attribute Mapping to which this mapping belongs */
		ParentPrincipalSyncAttributeMappingId: string;
		PrincipalId: string;
		/** Unique identifier of the principal sync attribute mapping. */
		PrincipalSyncAttributeMapId: string;
		/** Sync Direction */
		SyncDirection: OptionSet.PrincipalSyncAttributeMap.SyncDirection;
		readonly VersionNumber: number;
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
			/** 3 */
			Bidirectional,
			/** 0 */
			None,
			/** 2 */
			ToCRM,
			/** 1 */
			ToExchange
		}
		enum EntityTypeCode1 {
		}
		enum SyncDirection {
			/** 3 */
			Bidirectional,
			/** 0 */
			None,
			/** 2 */
			ToCRM,
			/** 1 */
			ToExchange
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