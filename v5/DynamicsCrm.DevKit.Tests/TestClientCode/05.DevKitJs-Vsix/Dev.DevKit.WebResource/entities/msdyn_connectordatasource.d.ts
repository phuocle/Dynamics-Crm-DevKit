//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_connectordatasource_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Connection Reference associated with ConnectorDataSource. */
			msdyn_ConnectionReferenceId: DevKit.Controls.Lookup;
			/** Dataset Value */
			msdyn_dataset_value: DevKit.Controls.String;
			/** Name */
			msdyn_name: DevKit.Controls.String;
		}
	}
	export class Formmsdyn_connectordatasource_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_connectordatasource_Information */
		Body: DevKit.Formmsdyn_connectordatasource_Information.Body;
	}
	export class msdyn_connectordatasourceApi {
		/**
		* DynamicsCrm.DevKit msdyn_connectordatasourceApi
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
		msdyn_appsenvironment: string | null;
		msdyn_clientid: string | null;
		msdyn_clientsecret: string | null;
		msdyn_connectionreference: string | null;
		/** Unique identifier for Connection Reference associated with ConnectorDataSource. */
		msdyn_ConnectionReferenceId: string | null;
		/** Unique identifier for entity instances */
		msdyn_connectordatasourceId: string | null;
		msdyn_connectortype: string | null;
		msdyn_dataset_unresolvedvalue: string | null;
		msdyn_dataset_value: string | null;
		/** Boolean that indicates if the ACLing is done. */
		msdyn_hasacling: boolean | null;
		msdyn_host: string | null;
		msdyn_name: string | null;
		msdyn_resource: string | null;
		msdyn_tenant: string | null;
		msdyn_userauth: boolean | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly msdyn_appsenvironment: string;
			readonly msdyn_clientid: string;
			readonly msdyn_clientsecret: string;
			readonly msdyn_connectionreference: string;
			/** Unique identifier for Connection Reference associated with ConnectorDataSource. */
			readonly msdyn_ConnectionReferenceId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_connectordatasourceId: string;
			readonly msdyn_connectortype: string;
			readonly msdyn_dataset_unresolvedvalue: string;
			readonly msdyn_dataset_value: string;
			/** Boolean that indicates if the ACLing is done. */
			readonly msdyn_hasacling: string;
			readonly msdyn_host: string;
			readonly msdyn_name: string;
			readonly msdyn_resource: string;
			readonly msdyn_tenant: string;
			readonly msdyn_userauth: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_connectordatasource {
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