//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_solutioncomponentsummary_Information {
		interface Tabs {
		}
		interface Body {

		}
	}
	class Formmsdyn_solutioncomponentsummary_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_solutioncomponentsummary_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_solutioncomponentsummary_Information */
		Body: MyDog.Formmsdyn_solutioncomponentsummary_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		msdyn_canvasappuniqueid: DevKit.WebApi.StringValue;
		msdyn_componentlogicalname: DevKit.WebApi.StringValue;
		msdyn_componenttype: DevKit.WebApi.DecimalValue;
		msdyn_componenttypename: DevKit.WebApi.StringValue;
		msdyn_connectorinternalid: DevKit.WebApi.StringValue;
		msdyn_createdon: DevKit.WebApi.StringValue;
		msdyn_culture: DevKit.WebApi.StringValue;
		msdyn_deployment: DevKit.WebApi.StringValue;
		msdyn_description: DevKit.WebApi.StringValue;
		msdyn_displayname: DevKit.WebApi.StringValue;
		msdyn_eventhandler: DevKit.WebApi.StringValue;
		msdyn_executionorder: DevKit.WebApi.StringValue;
		msdyn_executionstage: DevKit.WebApi.StringValue;
		msdyn_fieldsecurity: DevKit.WebApi.StringValue;
		msdyn_fieldtype: DevKit.WebApi.StringValue;
		msdyn_isappaware: DevKit.WebApi.StringValue;
		msdyn_isappawarename: DevKit.WebApi.StringValue;
		msdyn_isauditenabled: DevKit.WebApi.StringValue;
		msdyn_isauditenabledname: DevKit.WebApi.StringValue;
		msdyn_iscustom: DevKit.WebApi.StringValue;
		msdyn_iscustomizable: DevKit.WebApi.StringValue;
		msdyn_iscustomizablename: DevKit.WebApi.StringValue;
		msdyn_iscustomname: DevKit.WebApi.StringValue;
		msdyn_isdefault: DevKit.WebApi.StringValue;
		msdyn_isdefaultname: DevKit.WebApi.StringValue;
		msdyn_ismanaged: DevKit.WebApi.StringValue;
		msdyn_ismanagedname: DevKit.WebApi.StringValue;
		msdyn_isolationmode: DevKit.WebApi.StringValue;
		msdyn_istableenabled: DevKit.WebApi.StringValue;
		msdyn_logicalcollectionname: DevKit.WebApi.StringValue;
		msdyn_modifiedon: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_objectid: DevKit.WebApi.StringValue;
		msdyn_objecttypecode: DevKit.WebApi.StringValue;
		msdyn_owner: DevKit.WebApi.StringValue;
		msdyn_owningbusinessunit: DevKit.WebApi.StringValue;
		msdyn_primaryentityname: DevKit.WebApi.StringValue;
		msdyn_primaryidattribute: DevKit.WebApi.StringValue;
		msdyn_publickeytoken: DevKit.WebApi.StringValue;
		msdyn_relatedentity: DevKit.WebApi.StringValue;
		msdyn_relatedentityattribute: DevKit.WebApi.StringValue;
		msdyn_schemaname: DevKit.WebApi.StringValue;
		msdyn_sdkmessagename: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_solutioncomponentsummaryId: DevKit.WebApi.GuidValue;
		msdyn_solutionid: DevKit.WebApi.StringValue;
		msdyn_status: DevKit.WebApi.StringValue;
		msdyn_statusname: DevKit.WebApi.StringValue;
		msdyn_subtype: DevKit.WebApi.StringValue;
		msdyn_synctoexternalsearchindex: DevKit.WebApi.StringValue;
		msdyn_total: DevKit.WebApi.DecimalValue;
		msdyn_typename: DevKit.WebApi.StringValue;
		msdyn_uniquename: DevKit.WebApi.StringValue;
		msdyn_version: DevKit.WebApi.StringValue;
		msdyn_workflowcategory: DevKit.WebApi.StringValue;
		msdyn_workflowcategoryname: DevKit.WebApi.StringValue;
		msdyn_workflowidunique: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}