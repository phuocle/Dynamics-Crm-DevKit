//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_solutioncomponentsummary_Information {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {

		}
	}
	class Formmsdyn_solutioncomponentsummary_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_solutioncomponentsummary_Information */
		Body: DevKit.Formmsdyn_solutioncomponentsummary_Information.Body;
		/** The Navigation of form msdyn_solutioncomponentsummary_Information */
		Navigation: DevKit.Formmsdyn_solutioncomponentsummary_Information.Navigation;
		/** The SidePanes of form msdyn_solutioncomponentsummary_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_solutioncomponentsummaryApi {
		/**
		* DynamicsCrm.DevKit msdyn_solutioncomponentsummaryApi
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
		msdyn_canvasappuniqueid: string;
		msdyn_componentlogicalname: string;
		msdyn_componenttype: number;
		msdyn_componenttypename: string;
		msdyn_connectorinternalid: string;
		msdyn_createdon: string;
		msdyn_culture: string;
		msdyn_deployment: string;
		msdyn_description: string;
		msdyn_displayname: string;
		msdyn_eventhandler: string;
		msdyn_executionorder: string;
		msdyn_executionstage: string;
		msdyn_fieldsecurity: string;
		msdyn_fieldtype: string;
		msdyn_hasactivecustomization: string;
		msdyn_isappaware: string;
		msdyn_isappawarename: string;
		msdyn_isauditenabled: string;
		msdyn_isauditenabledname: string;
		msdyn_iscustom: string;
		msdyn_iscustomizable: string;
		msdyn_iscustomizablename: string;
		msdyn_iscustomname: string;
		msdyn_isdefault: string;
		msdyn_isdefaultname: string;
		msdyn_ismanaged: string;
		msdyn_ismanagedname: string;
		msdyn_isolationmode: string;
		msdyn_istableenabled: string;
		/** Language code for component */
		msdyn_lcid: number;
		msdyn_logicalcollectionname: string;
		msdyn_modifiedon: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_objectid: string;
		msdyn_objecttypecode: string;
		msdyn_owner: string;
		msdyn_owningbusinessunit: string;
		msdyn_primaryentityname: string;
		msdyn_primaryidattribute: string;
		msdyn_publickeytoken: string;
		msdyn_relatedentity: string;
		msdyn_relatedentityattribute: string;
		msdyn_schemaname: string;
		msdyn_sdkmessagename: string;
		/** Unique identifier for entity instances */
		msdyn_solutioncomponentsummaryId: string;
		msdyn_solutionid: string;
		msdyn_standardstatus: string;
		msdyn_status: string;
		msdyn_statusname: string;
		msdyn_subtype: string;
		msdyn_synctoexternalsearchindex: string;
		msdyn_total: number;
		msdyn_typename: string;
		msdyn_uniquename: string;
		msdyn_version: string;
		msdyn_workflowcategory: string;
		msdyn_workflowcategoryname: string;
		msdyn_workflowidunique: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}