//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Mã định danh duy nhất của trường bảo mật đã chia sẻ */
		AttributeId: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_account: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_activityfileattachment: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_adx_externalidentity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_adx_invitation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_adx_inviteredemption: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_adx_portalcomment: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_adx_setting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_adx_webformsession: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aicopilot: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aiplugin: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginauth: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginconversationstarter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginconversationstartermapping: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginexternalschema: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginexternalschemaproperty: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aiplugingovernance: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aiplugingovernanceext: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aiplugininstance: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginoperation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginoperationparameter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginoperationresponsetemplate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aiplugintitle: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_aipluginusersetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appaction: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appactionmigration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appactionrule: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appelement: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_application: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_applicationuser: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appmodulecomponentedge: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appmodulecomponentnode: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appointment: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appsetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_appusersetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_archivecleanupinfo: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_archivecleanupoperation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_attributeimageconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_attributemaskingrule: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_bot: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_botcomponent: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_botcomponentcollection: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_bulkarchiveconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_bulkarchivefailuredetail: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_bulkarchiveoperation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_bulkarchiveoperationdetail: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_businessunit: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_canvasappextendedmetadata: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_card: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_cascadegrantrevokeaccessversiontracker: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_catalog: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_catalogassignment: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		channelaccessprofile_principalobjectattributeaccess: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_chat: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_comment: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_connection: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_connectioninstance: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_connectionreference: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_connector: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_contact: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_conversationtranscript: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_copilotexamplequestion: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_copilotglossaryterm: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_copilotsynonyms: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_credential: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_customapi: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_customapirequestparameter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_customapiresponseproperty: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_customeraddress: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_datalakefolder: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_datalakefolderpermission: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_datalakeworkspace: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_datalakeworkspacepermission: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_dataprocessingconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_delegatedauthorization: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_deleteditemreference: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_desktopflowbinary: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_desktopflowmodule: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_dvfilesearch: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_dvfilesearchattribute: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_dvfilesearchentity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_dvtablesearch: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_dvtablesearchattribute: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_dvtablesearchentity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_email: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_enablearchivalrequest: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_entityanalyticsconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_entityimageconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_entityindex: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_entityrecordfilter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_environmentvariabledefinition: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_environmentvariablevalue: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_exportedexcel: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_exportsolutionupload: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_fabricaiskill: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_fax: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_featurecontrolsetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_federatedknowledgeconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_federatedknowledgeentityconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_feedback: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowcapacityassignment: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowcredentialapplication: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowevent: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowmachine: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowmachinegroup: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowmachineimage: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowmachineimageversion: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowmachinenetwork: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_flowsession: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_fxexpression: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_goal: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_holidaywrapper: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_indexattributes: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_internalcatalogassignment: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_kbarticle: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_keyvaultreference: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_knowledgearticle: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_knowledgearticleviews: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_knowledgebaserecord: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_letter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_mailmergetemplate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_mainfewshot: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_makerfewshot: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_managedidentity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_maskingrule: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_metadataforarchival: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_mobileofflineprofileextension: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdynce_botcontent: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aibdataset: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aibdatasetfile: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aibdatasetrecord: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aibdatasetscontainer: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aibfeedbackloop: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aibfile: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aibfileattacheddata: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aiconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aievent: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aifptrainingdocument: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aimodel: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aiodimage: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aiodlabel: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aiodtrainingboundingbox: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aiodtrainingimage: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_aitemplate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_analysiscomponent: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_analysisjob: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_analysisoverride: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_analysisresult: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_analysisresultdetail: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_appinsightsmetadata: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_customcontrolextendedsettings: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dataflow: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dataflowconnectionreference: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dataflowrefreshhistory: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dataflowtemplate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dataflow_datalakefolder: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dmsrequest: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dmsrequeststatus: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dmssyncrequest: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_dmssyncstatus: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_entitylinkchatconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_entityrefreshhistory: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_favoriteknowledgearticle: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_federatedarticle: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_federatedarticleincident: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_fileupload: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_actionapprovalmodel: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_approval: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_approvalrequest: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_approvalresponse: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_approvalstep: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_basicapprovalmodel: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_flow_flowapproval: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_helppage: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_insightsstorevirtualentity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_integratedsearchprovider: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_kalanguagesetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_kbattachment: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_kmfederatedsearchconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_kmpersonalizationsetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgearticleimage: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgearticletemplate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgeassetconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgeconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgeinteractioninsight: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgemanagementsetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgepersonalfilter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgesearchfilter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_knowledgesearchinsight: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_mobileapp: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_modulerundetail: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmanalysishistory: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmcalendar: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmcalendarversion: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pminferredtask: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmprocesstemplate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmprocessusersettings: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmprocessversion: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmrecording: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmsimulation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmtemplate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_pmview: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_richtextfile: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_salesforcestructuredobject: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_schedule: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_serviceconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_slakpi: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_solutionhealthrule: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_solutionhealthruleargument: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_solutionhealthruleset: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_tour: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_virtualtablecolumncandidate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msdyn_workflowactionstatus: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_msgraphresourcetosubscription: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_mspcat_packagestore: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_organizationdatasyncfnostate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_organizationdatasyncstate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_organizationdatasyncsubscription: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_organizationdatasyncsubscriptionentity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_organizationdatasyncsubscriptionfnotable: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_organizationsetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_package: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_packagehistory: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_pdfsetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_phonecall: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_plannerbusinessscenario: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_plannersyncaction: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_pluginpackage: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_position: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerbidataset: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerbidatasetapdx: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerbimashupparameter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerbireport: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerbireportapdx: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerfxrule: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerpagecomponent: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerpagesite: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerpagesitelanguage: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerpagesitepublished: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_powerpagesscanreport: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_privilegecheckerlog: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_privilegecheckerrun: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_privilegesremovalsetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_processstageparameter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_provisionlanguageforuser: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_queue: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_queueitem: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_reconciliationentityinfo: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_reconciliationentitystepinfo: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_reconciliationinfo: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_recordfilter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_recyclebinconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_relationshipattribute: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_reportcategory: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_reportparameter: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_retaineddataexcel: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_retentioncleanupinfo: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_retentioncleanupoperation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_retentionconfig: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_retentionfailuredetail: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_retentionoperation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_retentionoperationdetail: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_revokeinheritedaccessrecordstracker: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_roleeditorlayout: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_searchattributesettings: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_searchcustomanalyzer: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_searchrelationshipsettings: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_serviceplan: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_serviceplancustomcontrol: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_serviceplanmapping: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_settingdefinition: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_sharedlinksetting: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_sharedobject: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_sharedworkspace: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_sharedworkspacepool: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_sharepointdocumentlocation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_sharepointsite: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_sideloadedaiplugin: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_socialactivity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_socialprofile: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_solutioncomponentattributeconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_solutioncomponentbatchconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_solutioncomponentconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_solutioncomponentrelationshipconfiguration: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_stagedentity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_stagedentityattribute: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_stagedmetadataasyncoperation: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_stagesolutionupload: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_supportusertable: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_synapsedatabase: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_synapselinkexternaltablestate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_synapselinkprofile: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_synapselinkprofileentity: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_synapselinkprofileentitystate: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_synapselinkschedule: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_systemuser: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_systemuserauthorizationchangetracker: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_task: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_tdsmetadata: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_team: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_teammobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_territory: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_usermobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_userrating: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_viewasexamplequestion: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_virtualentitymetadata: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_workflowbinary: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_workqueue: string;
		/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
		objectid_workqueueitem: string;
		/** Mã định danh duy nhất của tổ chức được liên kết. */
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của nguyên tắc có chia sẻ với trường bảo mật */
		principalid_systemuser: string;
		/** Mã định danh duy nhất của nguyên tắc có chia sẻ với trường bảo mật */
		principalid_team: string;
		/** Mã định danh duy nhất của phiên bản trường bảo mật đã chia sẻ */
		PrincipalObjectAttributeAccessId: string;
		/** Quyền đọc dành cho phiên bản trường bảo mật */
		ReadAccess: boolean;
		/** Quyền cập nhật dành cho phiên bản trường bảo mật */
		UpdateAccess: boolean;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của trường bảo mật đã chia sẻ */
			readonly AttributeId: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_account: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_activityfileattachment: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_adx_externalidentity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_adx_invitation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_adx_inviteredemption: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_adx_portalcomment: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_adx_setting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_adx_webformsession: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aicopilot: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aiplugin: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginauth: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginconversationstarter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginconversationstartermapping: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginexternalschema: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginexternalschemaproperty: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aiplugingovernance: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aiplugingovernanceext: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aiplugininstance: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginoperation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginoperationparameter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginoperationresponsetemplate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aiplugintitle: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_aipluginusersetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appaction: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appactionmigration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appactionrule: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appelement: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_application: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_applicationuser: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appmodulecomponentedge: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appmodulecomponentnode: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appointment: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appsetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_appusersetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_archivecleanupinfo: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_archivecleanupoperation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_attributeimageconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_attributemaskingrule: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_bot: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_botcomponent: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_botcomponentcollection: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_bulkarchiveconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_bulkarchivefailuredetail: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_bulkarchiveoperation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_bulkarchiveoperationdetail: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_businessunit: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_canvasappextendedmetadata: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_card: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_cascadegrantrevokeaccessversiontracker: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_catalog: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_catalogassignment: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly channelaccessprofile_principalobjectattributeaccess: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_chat: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_comment: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_connection: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_connectioninstance: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_connectionreference: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_connector: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_contact: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_conversationtranscript: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_copilotexamplequestion: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_copilotglossaryterm: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_copilotsynonyms: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_credential: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_customapi: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_customapirequestparameter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_customapiresponseproperty: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_customeraddress: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_datalakefolder: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_datalakefolderpermission: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_datalakeworkspace: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_datalakeworkspacepermission: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_dataprocessingconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_delegatedauthorization: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_deleteditemreference: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_desktopflowbinary: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_desktopflowmodule: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_dvfilesearch: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_dvfilesearchattribute: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_dvfilesearchentity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_dvtablesearch: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_dvtablesearchattribute: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_dvtablesearchentity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_email: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_enablearchivalrequest: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_entityanalyticsconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_entityimageconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_entityindex: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_entityrecordfilter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_environmentvariabledefinition: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_environmentvariablevalue: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_exportedexcel: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_exportsolutionupload: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_fabricaiskill: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_fax: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_featurecontrolsetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_federatedknowledgeconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_federatedknowledgeentityconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_feedback: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowcapacityassignment: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowcredentialapplication: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowevent: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowmachine: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowmachinegroup: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowmachineimage: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowmachineimageversion: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowmachinenetwork: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_flowsession: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_fxexpression: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_goal: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_holidaywrapper: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_indexattributes: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_internalcatalogassignment: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_kbarticle: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_keyvaultreference: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_knowledgearticle: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_knowledgearticleviews: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_knowledgebaserecord: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_letter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_mailmergetemplate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_mainfewshot: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_makerfewshot: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_managedidentity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_maskingrule: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_metadataforarchival: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_mobileofflineprofileextension: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdynce_botcontent: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aibdataset: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aibdatasetfile: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aibdatasetrecord: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aibdatasetscontainer: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aibfeedbackloop: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aibfile: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aibfileattacheddata: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aiconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aievent: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aifptrainingdocument: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aimodel: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aiodimage: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aiodlabel: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aiodtrainingboundingbox: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aiodtrainingimage: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_aitemplate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_analysiscomponent: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_analysisjob: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_analysisoverride: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_analysisresult: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_analysisresultdetail: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_appinsightsmetadata: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_customcontrolextendedsettings: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dataflow: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dataflowconnectionreference: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dataflowrefreshhistory: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dataflowtemplate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dataflow_datalakefolder: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dmsrequest: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dmsrequeststatus: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dmssyncrequest: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_dmssyncstatus: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_entitylinkchatconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_entityrefreshhistory: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_favoriteknowledgearticle: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_federatedarticle: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_federatedarticleincident: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_fileupload: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_actionapprovalmodel: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_approval: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_approvalrequest: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_approvalresponse: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_approvalstep: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_basicapprovalmodel: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_flow_flowapproval: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_helppage: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_insightsstorevirtualentity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_integratedsearchprovider: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_kalanguagesetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_kbattachment: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_kmfederatedsearchconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_kmpersonalizationsetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgearticleimage: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgearticletemplate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgeassetconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgeconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgeinteractioninsight: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgemanagementsetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgepersonalfilter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgesearchfilter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_knowledgesearchinsight: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_mobileapp: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_modulerundetail: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmanalysishistory: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmcalendar: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmcalendarversion: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pminferredtask: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmprocesstemplate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmprocessusersettings: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmprocessversion: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmrecording: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmsimulation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmtemplate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_pmview: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_richtextfile: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_salesforcestructuredobject: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_schedule: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_serviceconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_slakpi: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_solutionhealthrule: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_solutionhealthruleargument: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_solutionhealthruleset: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_tour: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_virtualtablecolumncandidate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msdyn_workflowactionstatus: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_msgraphresourcetosubscription: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_mspcat_packagestore: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_organizationdatasyncfnostate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_organizationdatasyncstate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_organizationdatasyncsubscription: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_organizationdatasyncsubscriptionentity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_organizationdatasyncsubscriptionfnotable: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_organizationsetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_package: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_packagehistory: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_pdfsetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_phonecall: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_plannerbusinessscenario: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_plannersyncaction: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_pluginpackage: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_position: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerbidataset: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerbidatasetapdx: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerbimashupparameter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerbireport: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerbireportapdx: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerfxrule: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerpagecomponent: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerpagesite: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerpagesitelanguage: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerpagesitepublished: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_powerpagesscanreport: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_privilegecheckerlog: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_privilegecheckerrun: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_privilegesremovalsetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_processstageparameter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_provisionlanguageforuser: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_queue: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_queueitem: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_reconciliationentityinfo: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_reconciliationentitystepinfo: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_reconciliationinfo: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_recordfilter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_recyclebinconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_relationshipattribute: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_reportcategory: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_reportparameter: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_retaineddataexcel: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_retentioncleanupinfo: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_retentioncleanupoperation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_retentionconfig: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_retentionfailuredetail: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_retentionoperation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_retentionoperationdetail: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_revokeinheritedaccessrecordstracker: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_roleeditorlayout: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_searchattributesettings: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_searchcustomanalyzer: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_searchrelationshipsettings: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_serviceplan: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_serviceplancustomcontrol: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_serviceplanmapping: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_settingdefinition: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_sharedlinksetting: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_sharedobject: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_sharedworkspace: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_sharedworkspacepool: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_sharepointdocumentlocation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_sharepointsite: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_sideloadedaiplugin: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_socialactivity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_socialprofile: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_solutioncomponentattributeconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_solutioncomponentbatchconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_solutioncomponentconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_solutioncomponentrelationshipconfiguration: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_stagedentity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_stagedentityattribute: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_stagedmetadataasyncoperation: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_stagesolutionupload: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_supportusertable: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_synapsedatabase: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_synapselinkexternaltablestate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_synapselinkprofile: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_synapselinkprofileentity: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_synapselinkprofileentitystate: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_synapselinkschedule: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_systemuser: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_systemuserauthorizationchangetracker: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_task: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_tdsmetadata: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_team: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_teammobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_territory: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_usermobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_userrating: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_viewasexamplequestion: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_virtualentitymetadata: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_workflowbinary: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_workqueue: string;
			/** Mã định danh duy nhất của phiên bản thực thể với trường bảo mật đã chia sẻ */
			readonly objectid_workqueueitem: string;
			/** Mã định danh duy nhất của tổ chức được liên kết. */
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của nguyên tắc có chia sẻ với trường bảo mật */
			readonly principalid_systemuser: string;
			/** Mã định danh duy nhất của nguyên tắc có chia sẻ với trường bảo mật */
			readonly principalid_team: string;
			/** Mã định danh duy nhất của phiên bản trường bảo mật đã chia sẻ */
			readonly PrincipalObjectAttributeAccessId: string;
			/** Quyền đọc dành cho phiên bản trường bảo mật */
			readonly ReadAccess: string;
			/** Quyền cập nhật dành cho phiên bản trường bảo mật */
			readonly UpdateAccess: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAttributeAccess {
		enum ObjectTypeCode {
		}
		enum PrincipalIdType {
		}
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