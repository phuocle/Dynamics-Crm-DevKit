﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PrincipalObjectAccessReadSnapshotApi {
		/**
		* DynamicsCrm.DevKit PrincipalObjectAccessReadSnapshotApi
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
		readonly ChildUserPrincipalsCount: number;
		readonly Count: number;
		readonly CountPercentOfTotalRows: number;
		readonly ObjectTypeCode: number;
		readonly PrincipalId: string;
		readonly PrincipalObjectAccessReadSnapshotId: string;
		readonly RecordCountForOwnerID: number;
		readonly RecordCountForOwnerIDPercentOfTotalRows: number;
		readonly RecordCountForOwningBU: number;
		readonly RecordCountForOwningBUPercentOfTotalRows: number;
		readonly TeamPrincipalsCount: number;
		readonly FormattedValue: {
			readonly ChildUserPrincipalsCount: string;
			readonly Count: string;
			readonly CountPercentOfTotalRows: string;
			readonly ObjectTypeCode: string;
			readonly PrincipalId: string;
			readonly PrincipalObjectAccessReadSnapshotId: string;
			readonly RecordCountForOwnerID: string;
			readonly RecordCountForOwnerIDPercentOfTotalRows: string;
			readonly RecordCountForOwningBU: string;
			readonly RecordCountForOwningBUPercentOfTotalRows: string;
			readonly TeamPrincipalsCount: string;
		}
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAccessReadSnapshot {
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