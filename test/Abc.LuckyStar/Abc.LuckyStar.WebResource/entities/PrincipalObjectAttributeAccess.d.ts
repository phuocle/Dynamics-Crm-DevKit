//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class PrincipalObjectAttributeAccessApi {
		/**
		* DynamicsCrm.DevKit PrincipalObjectAttributeAccessApi
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
		/** Unique identifier of the shared secured field */
		AttributeId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_apisettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_attributeimageconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		channelaccessprofile_principalobjectattributeaccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_devkit_processwebapi1: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityanalyticsconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityimageconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_feedback: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticleviews: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reportcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceplan: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_workflowbinary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the shared secured field instance */
		PrincipalObjectAttributeAccessId: DevKit.WebApi.GuidValue;
		/** Read permission for secured field instance */
		ReadAccess: DevKit.WebApi.BooleanValue;
		/** Update permission for secured field instance */
		UpdateAccess: DevKit.WebApi.BooleanValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAttributeAccess {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}