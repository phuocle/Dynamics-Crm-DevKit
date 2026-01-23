//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_solutioncomponentsummary_Information {
		interface Tabs {
		}
		interface Body {

		}
	}
	export class Formmsdyn_solutioncomponentsummary_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_solutioncomponentsummary_Information */
		Body: DevKit.Formmsdyn_solutioncomponentsummary_Information.Body;
	}
	export class msdyn_solutioncomponentsummaryApi {
		/**
		* DynamicsCrm.DevKit msdyn_solutioncomponentsummaryApi
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
		msdyn_canvasappuniqueid: string | null;
		msdyn_componentlogicalname: string | null;
		msdyn_componenttype: number | null;
		msdyn_componenttypename: string | null;
		msdyn_connectorinternalid: string | null;
		msdyn_createdon: string | null;
		msdyn_culture: string | null;
		msdyn_deployment: string | null;
		msdyn_description: string | null;
		msdyn_displayname: string | null;
		msdyn_eventhandler: string | null;
		msdyn_executionorder: string | null;
		msdyn_executionstage: string | null;
		msdyn_fieldsecurity: string | null;
		msdyn_fieldtype: string | null;
		msdyn_hasactivecustomization: string | null;
		msdyn_isappaware: string | null;
		msdyn_isappawarename: string | null;
		msdyn_isauditenabled: string | null;
		msdyn_isauditenabledname: string | null;
		msdyn_iscustom: string | null;
		msdyn_iscustomizable: string | null;
		msdyn_iscustomizablename: string | null;
		msdyn_iscustomname: string | null;
		msdyn_isdefault: string | null;
		msdyn_isdefaultname: string | null;
		msdyn_ismanaged: string | null;
		msdyn_ismanagedname: string | null;
		msdyn_isolationmode: string | null;
		msdyn_istableenabled: string | null;
		/** Language code for component */
		msdyn_lcid: number | null;
		msdyn_logicalcollectionname: string | null;
		msdyn_modifiedon: string | null;
		/** The name of the custom entity. */
		msdyn_name: string | null;
		msdyn_objectid: string | null;
		msdyn_objecttypecode: string | null;
		msdyn_owner: string | null;
		msdyn_owningbusinessunit: string | null;
		msdyn_primaryentityname: string | null;
		msdyn_primaryidattribute: string | null;
		msdyn_publickeytoken: string | null;
		msdyn_relatedentity: string | null;
		msdyn_relatedentityattribute: string | null;
		msdyn_schemaname: string | null;
		msdyn_sdkmessagename: string | null;
		/** Unique identifier for entity instances */
		msdyn_solutioncomponentsummaryId: string | null;
		msdyn_solutionid: string | null;
		msdyn_standardstatus: string | null;
		msdyn_status: string | null;
		msdyn_statusname: string | null;
		msdyn_subtype: string | null;
		msdyn_synctoexternalsearchindex: string | null;
		msdyn_total: number | null;
		msdyn_typename: string | null;
		msdyn_uniquename: string | null;
		msdyn_version: string | null;
		msdyn_workflowcategory: string | null;
		msdyn_workflowcategoryname: string | null;
		msdyn_workflowidunique: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly msdyn_canvasappuniqueid: string;
			readonly msdyn_componentlogicalname: string;
			readonly msdyn_componenttype: string;
			readonly msdyn_componenttypename: string;
			readonly msdyn_connectorinternalid: string;
			readonly msdyn_createdon: string;
			readonly msdyn_culture: string;
			readonly msdyn_deployment: string;
			readonly msdyn_description: string;
			readonly msdyn_displayname: string;
			readonly msdyn_eventhandler: string;
			readonly msdyn_executionorder: string;
			readonly msdyn_executionstage: string;
			readonly msdyn_fieldsecurity: string;
			readonly msdyn_fieldtype: string;
			readonly msdyn_hasactivecustomization: string;
			readonly msdyn_isappaware: string;
			readonly msdyn_isappawarename: string;
			readonly msdyn_isauditenabled: string;
			readonly msdyn_isauditenabledname: string;
			readonly msdyn_iscustom: string;
			readonly msdyn_iscustomizable: string;
			readonly msdyn_iscustomizablename: string;
			readonly msdyn_iscustomname: string;
			readonly msdyn_isdefault: string;
			readonly msdyn_isdefaultname: string;
			readonly msdyn_ismanaged: string;
			readonly msdyn_ismanagedname: string;
			readonly msdyn_isolationmode: string;
			readonly msdyn_istableenabled: string;
			/** Language code for component */
			readonly msdyn_lcid: string;
			readonly msdyn_logicalcollectionname: string;
			readonly msdyn_modifiedon: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_objectid: string;
			readonly msdyn_objecttypecode: string;
			readonly msdyn_owner: string;
			readonly msdyn_owningbusinessunit: string;
			readonly msdyn_primaryentityname: string;
			readonly msdyn_primaryidattribute: string;
			readonly msdyn_publickeytoken: string;
			readonly msdyn_relatedentity: string;
			readonly msdyn_relatedentityattribute: string;
			readonly msdyn_schemaname: string;
			readonly msdyn_sdkmessagename: string;
			/** Unique identifier for entity instances */
			readonly msdyn_solutioncomponentsummaryId: string;
			readonly msdyn_solutionid: string;
			readonly msdyn_standardstatus: string;
			readonly msdyn_status: string;
			readonly msdyn_statusname: string;
			readonly msdyn_subtype: string;
			readonly msdyn_synctoexternalsearchindex: string;
			readonly msdyn_total: string;
			readonly msdyn_typename: string;
			readonly msdyn_uniquename: string;
			readonly msdyn_version: string;
			readonly msdyn_workflowcategory: string;
			readonly msdyn_workflowcategoryname: string;
			readonly msdyn_workflowidunique: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_solutioncomponentsummary {
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