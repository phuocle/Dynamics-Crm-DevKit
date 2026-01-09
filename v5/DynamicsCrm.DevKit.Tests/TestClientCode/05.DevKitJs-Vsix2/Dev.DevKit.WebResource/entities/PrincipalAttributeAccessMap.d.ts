//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PrincipalAttributeAccessMapApi {
		/**
		* DynamicsCrm.DevKit PrincipalAttributeAccessMapApi
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
		AttributeId: string | null;
		CreateAccess: OptionSet.PrincipalAttributeAccessMap.CreateAccess | null;
		/** Unique identifier of the principal attribute access. */
		PrincipalAttributeAccessMapId: string | null;
		PrincipalId: string | null;
		ReadAccess: OptionSet.PrincipalAttributeAccessMap.ReadAccess | null;
		readonly ReadUnMaskedAccess: OptionSet.PrincipalAttributeAccessMap.ReadUnMaskedAccess | null;
		UpdateAccess: OptionSet.PrincipalAttributeAccessMap.UpdateAccess | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly AttributeId: string;
			readonly CreateAccess: string;
			/** Unique identifier of the principal attribute access. */
			readonly PrincipalAttributeAccessMapId: string;
			readonly PrincipalId: string;
			readonly ReadAccess: string;
			readonly ReadUnMaskedAccess: string;
			readonly UpdateAccess: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PrincipalAttributeAccessMap {
		enum CreateAccess {
			/** Allowed = 4*/
			Allowed = 4,
			/** Not_Allowed = 0*/
			Not_Allowed = 0
		}
		enum ReadAccess {
			/** Allowed = 4*/
			Allowed = 4,
			/** Not_Allowed = 0*/
			Not_Allowed = 0
		}
		enum ReadUnMaskedAccess {
			/** All_Records = 3*/
			All_Records = 3,
			/** Not_Allowed = 0*/
			Not_Allowed = 0,
			/** One_Record = 1*/
			One_Record = 1
		}
		enum UpdateAccess {
			/** Allowed = 4*/
			Allowed = 4,
			/** Not_Allowed = 0*/
			Not_Allowed = 0
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