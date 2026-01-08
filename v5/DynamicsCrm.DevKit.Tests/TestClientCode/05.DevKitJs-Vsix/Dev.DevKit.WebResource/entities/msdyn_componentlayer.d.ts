//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_componentlayer_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the component. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	export class Formmsdyn_componentlayer_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_componentlayer_Information */
		Body: DevKit.Formmsdyn_componentlayer_Information.Body;
	}
	export class msdyn_componentlayerApi {
		/**
		* DynamicsCrm.DevKit msdyn_componentlayerApi
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
		msdyn_changes: string | null;
		msdyn_children: string | null;
		msdyn_componentid: string | null;
		msdyn_componentjson: string | null;
		/** Unique identifier for entity instances */
		msdyn_componentlayerId: string | null;
		msdyn_endtime_UtcDateAndTime: Date | null;
		/** The name of the component. */
		msdyn_name: string | null;
		msdyn_order: number | null;
		msdyn_publishername: string | null;
		msdyn_solutioncomponentname: string | null;
		msdyn_solutionname: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly msdyn_changes: string;
			readonly msdyn_children: string;
			readonly msdyn_componentid: string;
			readonly msdyn_componentjson: string;
			/** Unique identifier for entity instances */
			readonly msdyn_componentlayerId: string;
			readonly msdyn_endtime_UtcDateAndTime: string;
			/** The name of the component. */
			readonly msdyn_name: string;
			readonly msdyn_order: string;
			readonly msdyn_publishername: string;
			readonly msdyn_solutioncomponentname: string;
			readonly msdyn_solutionname: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_componentlayer {
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