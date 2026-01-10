//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PrincipalObjectAccessReadSnapshotApi {
		/**
		* DynamicsCrm.DevKit PrincipalObjectAccessReadSnapshotApi
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
		readonly ChildUserPrincipalsCount: number | null;
		readonly Count: number | null;
		readonly CountPercentOfTotalRows: number | null;
		readonly ObjectTypeCode: number | null;
		readonly PrincipalId: string | null;
		readonly PrincipalObjectAccessReadSnapshotId: string | null;
		/** PrincipalTypeCode. */
		readonly PrincipalTypeCode: number | null;
		readonly RecordCountForOwnerID: number | null;
		readonly RecordCountForOwnerIDPercentOfTotalRows: number | null;
		readonly RecordCountForOwningBU: number | null;
		readonly RecordCountForOwningBUPercentOfTotalRows: number | null;
		readonly TeamPrincipalsCount: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly ChildUserPrincipalsCount: string;
			readonly Count: string;
			readonly CountPercentOfTotalRows: string;
			readonly ObjectTypeCode: string;
			readonly PrincipalId: string;
			readonly PrincipalObjectAccessReadSnapshotId: string;
			/** PrincipalTypeCode. */
			readonly PrincipalTypeCode: string;
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