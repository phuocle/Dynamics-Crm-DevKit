//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	class DuplicateRecordApi {
		/**
		* DynamicsCrm.DevKit DuplicateRecordApi
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
		/** Unique identifier of the base record. */
		baserecordid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_activityfileattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_apisettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_applicationuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_appnotification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_canvasappextendedmetadata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_catalogassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		channelaccessprofile_duplicatebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_conversationtranscript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_datalakefolder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_datalakefolderpermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_datalakeworkspace: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_datalakeworkspacepermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_environmentvariabledefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_environmentvariablevalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_exportsolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_feedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_flowmachinegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_goal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_goalrollupquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_keyvaultreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_managedidentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibdataset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aiodimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aiodlabel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analysiscomponent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analysisjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analysisresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_dataflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_federatedarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_slakpi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_organizationdatasyncsubscription: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_package: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_publisher: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_serviceplan: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_sharepointdocumentlocation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_sharepointsite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_socialprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_solutioncomponentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_stagesolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_transactioncurrency: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the duplicate record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the duplicate record. */
		DuplicateId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_activityfileattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_apisettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_applicationuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_appnotification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_canvasappextendedmetadata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_catalogassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		channelaccessprofile_duplicatematchingrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_conversationtranscript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_datalakefolder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_datalakefolderpermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_datalakeworkspace: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_datalakeworkspacepermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_environmentvariabledefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_environmentvariablevalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_exportsolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_feedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_flowmachinegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_goal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_goalrollupquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_keyvaultreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_managedidentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibdataset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aiodimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aiodlabel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analysiscomponent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analysisjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analysisresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_dataflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_federatedarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_slakpi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_organizationdatasyncsubscription: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_package: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_publisher: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_serviceplan: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_sharepointdocumentlocation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_sharepointsite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_socialprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_solutioncomponentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_stagesolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_transactioncurrency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the duplicate rule against which this duplicate was found. */
		DuplicateRuleId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the duplicate record. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the duplicate record. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DuplicateRecord {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}