//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class MailboxTrackingFolderApi {
		/**
		* DynamicsCrm.DevKit MailboxTrackingFolderApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the entry was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Folder Id for a folder in Exchange */
		ExchangeFolderId: DevKit.WebApi.StringValue;
		/** Exchange Folder Name */
		ExchangeFolderName: DevKit.WebApi.StringValue;
		/** Information to indicate whether the folder has been on boarded for auto tracking */
		FolderOnboardingStatus: DevKit.WebApi.IntegerValue;
		/** Mailbox id associated with this record. */
		MailboxId: DevKit.WebApi.LookupValue;
		MailboxTrackingFolderId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the entry was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the folder mapping. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the folder mapping. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_activityfileattachment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appelement: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_applicationuser: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appmodulecomponentedge: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appmodulecomponentnode: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appnotification: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appsetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appusersetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_attributeimageconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bot: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_botcomponent: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_canvasappextendedmetadata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_catalog: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_catalogassignment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_connectionreference: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_connector: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_conversationtranscript: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customapi: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customapirequestparameter: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customapiresponseproperty: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_datalakefolder: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_datalakefolderpermission: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_datalakeworkspace: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_datalakeworkspacepermission: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_devkit_bpfaccount: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entityanalyticsconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entityimageconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_exportsolutionupload: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_featurecontrolsetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachine: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachinegroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowsession: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_internalcatalogassignment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_keyvaultreference: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_managedidentity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynce_botcontent: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_federatedarticle: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kmpersonalizationsetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pminferredtask: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmrecording: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_richtextfile: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_tour: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncsubscription: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationsetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_package: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pdfsetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pluginpackage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_provisionlanguageforuser: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_relationshipattribute: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceplanmapping: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_settingdefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentbatchconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_systemuserauthorizationchangetracker: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_teammobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_usermobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_virtualentitymetadata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_workflowbinary: DevKit.WebApi.LookupValue;
		/** Version number of the mailbox tracking folder. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingFolder {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}