//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class BulkDeleteFailureApi {
		/**
		* DynamicsCrm.DevKit BulkDeleteFailureApi
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
		/** Unique identifier of the system job that created this record. */
		AsyncOperationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the bulk deletion failure record. */
		BulkDeleteFailureId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the bulk operation job which created this record */
		BulkDeleteOperationId: DevKit.WebApi.LookupValueReadonly;
		/** Description of the error. */
		ErrorDescription: DevKit.WebApi.StringValueReadonly;
		/** Error code for the failed bulk deletion. */
		ErrorNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Index of the ordered query expression that retrieved this record. */
		OrderedQueryIndex: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the bulk deletion failure. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the bulk deletion failure record.
 */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitymimeattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitypointer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_annualfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_apisettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_attributeimageconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_attributemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_calendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		channelaccessprofile_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_devkit_customactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_devkit_processwebapi1: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_devkit_webapi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_displaystring: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entityanalyticsconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entityimageconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitymap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		externalparty_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		externalpartyitem_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_fixedmonthlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_flowsession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_import: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importlog: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importmap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_isvconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticlecomment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_monthlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibdataset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aimodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiodimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiodlabel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aitemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analysisjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analysisresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_organization: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_post: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_privilege: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quarterlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshiprolemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_role: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_savedquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_semiannualfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_sla: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_subject: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_systemform: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_template: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_territory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_theme: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_userform: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_usermapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_userquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_workflowbinary: DevKit.WebApi.LookupValueReadonly;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace BulkDeleteFailure {
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