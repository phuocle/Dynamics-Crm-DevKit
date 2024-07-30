//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Mã định danh duy nhất của công việc hệ thống đã tạo bản ghi này. */
		readonly AsyncOperationId: string;
		/** Mã định danh duy nhất của bản ghi lỗi xóa hàng loạt. */
		readonly BulkDeleteFailureId: string;
		/** Mã định danh duy nhất của công việc thao tác hàng loạt đã tạo bản ghi này. */
		readonly BulkDeleteOperationId: string;
		/** Mô tả về lỗi. */
		readonly ErrorDescription: string;
		/** Mã lỗi của quá trình xóa hàng loạt không thành công. */
		readonly ErrorNumber: number;
		/** Chỉ mục của việc trình bày truy vấn được yêu cầu đã truy xuất bản ghi này. */
		readonly OrderedQueryIndex: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu lỗi xóa hàng loạt. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi lỗi xóa hàng loạt.
 */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_account: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_activityfileattachment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_activitymimeattachment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_activitypointer: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_adx_externalidentity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_adx_invitation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_adx_inviteredemption: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_adx_portalcomment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_adx_setting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_adx_webformsession: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aicopilot: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aiplugin: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginauth: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginconversationstarter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginconversationstartermapping: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginexternalschema: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginexternalschemaproperty: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aiplugingovernance: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aiplugingovernanceext: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aiplugininstance: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginoperation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginoperationparameter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginoperationresponsetemplate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aiplugintitle: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_aipluginusersetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_annotation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_annualfiscalcalendar: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appaction: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appactionmigration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appactionrule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appelement: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_application: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_applicationuser: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appmodulecomponentedge: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appmodulecomponentnode: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appointment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appsetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_appusersetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_archivecleanupinfo: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_archivecleanupoperation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_attributeimageconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_attributemap: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_attributemaskingrule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_bot: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_botcomponent: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_botcomponentcollection: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_bulkarchiveconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_bulkarchivefailuredetail: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_bulkarchiveoperation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_bulkarchiveoperationdetail: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_businessunit: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_businessunitnewsarticle: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_calendar: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_canvasappextendedmetadata: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_card: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_catalog: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_catalogassignment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly channelaccessprofile_bulkdeletefailures: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly channelaccessprofileruleid: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_chat: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_comment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_connectioninstance: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_connectionreference: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_connector: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_contact: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_conversationtranscript: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_copilotexamplequestion: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_copilotglossaryterm: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_copilotsynonyms: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_credential: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_customapi: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_customapirequestparameter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_customapiresponseproperty: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_customeraddress: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_customerrelationship: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_datalakefolder: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_datalakefolderpermission: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_datalakeworkspace: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_datalakeworkspacepermission: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_dataprocessingconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_delegatedauthorization: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_deleteditemreference: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_desktopflowbinary: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_desktopflowmodule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_displaystring: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_dvfilesearch: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_dvfilesearchattribute: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_dvfilesearchentity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_dvtablesearch: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_dvtablesearchattribute: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_dvtablesearchentity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_email: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_emailserverprofile: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_enablearchivalrequest: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_entityanalyticsconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_entityimageconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_entityindex: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_entitymap: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_entityrecordfilter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_environmentvariabledefinition: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_environmentvariablevalue: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_exportedexcel: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_exportsolutionupload: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly externalparty_bulkdeletefailures: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly externalpartyitem_bulkdeletefailures: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_fabricaiskill: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_fax: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_featurecontrolsetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_federatedknowledgeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_fixedmonthlyfiscalcalendar: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowcapacityassignment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowcredentialapplication: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowevent: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowmachine: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowmachinegroup: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowmachineimage: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowmachineimageversion: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowmachinenetwork: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_flowsession: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_fxexpression: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_holidaywrapper: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_import: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_importdata: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_importfile: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_importlog: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_importmap: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_indexattributes: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_internalcatalogassignment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_isvconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_kbarticle: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_kbarticlecomment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_kbarticletemplate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_keyvaultreference: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_knowledgearticle: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_knowledgebaserecord: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_letter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_mainfewshot: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_makerfewshot: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_managedidentity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_maskingrule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_metadataforarchival: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_mobileofflineprofileextension: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_monthlyfiscalcalendar: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdynce_botcontent: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aibdataset: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aibdatasetfile: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aibfile: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aiconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aievent: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aimodel: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aiodimage: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aiodlabel: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_aitemplate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_analysiscomponent: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_analysisjob: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_analysisoverride: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_analysisresult: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_analysisresultdetail: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_appinsightsmetadata: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dataflow: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dataflowtemplate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dmsrequest: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dmsrequeststatus: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dmssyncrequest: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_dmssyncstatus: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_federatedarticle: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_federatedarticleincident: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_fileupload: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_approval: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_approvalrequest: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_approvalresponse: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_approvalstep: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_flow_flowapproval: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_helppage: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_integratedsearchprovider: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_kalanguagesetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_kbattachment: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_mobileapp: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_modulerundetail: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmanalysishistory: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmcalendar: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmcalendarversion: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pminferredtask: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmprocesstemplate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmprocessusersettings: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmprocessversion: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmrecording: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmsimulation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmtemplate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_pmview: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_richtextfile: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_schedule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_serviceconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_slakpi: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_solutionhealthrule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_tour: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msdyn_workflowactionstatus: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_msgraphresourcetosubscription: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_mspcat_packagestore: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_organization: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_organizationdatasyncfnostate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_organizationdatasyncstate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_organizationdatasyncsubscription: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_organizationsetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_package: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_packagehistory: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_pdfsetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_phonecall: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_plannerbusinessscenario: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_plannersyncaction: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_pluginpackage: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_post: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerbidataset: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerbidatasetapdx: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerbimashupparameter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerbireport: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerbireportapdx: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerfxrule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerpagecomponent: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerpagesite: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerpagesitelanguage: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerpagesitepublished: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_powerpagesscanreport: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_privilege: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_privilegecheckerlog: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_privilegecheckerrun: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_privilegesremovalsetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_processstageparameter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_provisionlanguageforuser: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_quarterlyfiscalcalendar: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_queue: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_queueitem: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_reconciliationentityinfo: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_reconciliationentitystepinfo: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_reconciliationinfo: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_recordfilter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_recyclebinconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_relationshipattribute: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_relationshiprole: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_relationshiprolemap: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_reportparameter: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_retaineddataexcel: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_retentioncleanupinfo: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_retentioncleanupoperation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_retentionconfig: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_retentionfailuredetail: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_retentionoperation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_retentionoperationdetail: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_role: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_roleeditorlayout: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_routingrule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_routingruleitem: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_savedquery: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_searchattributesettings: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_searchcustomanalyzer: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_searchrelationshipsettings: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_semiannualfiscalcalendar: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_serviceplan: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_serviceplancustomcontrol: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_serviceplanmapping: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_settingdefinition: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_sharedlinksetting: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_sharedobject: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_sharedworkspace: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_sharedworkspacepool: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_sideloadedaiplugin: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_sla: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_socialactivity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_solutioncomponentconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_stagedentity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_stagedentityattribute: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_stagedmetadataasyncoperation: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_stagesolutionupload: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_subject: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_supportusertable: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_synapsedatabase: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_synapselinkexternaltablestate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_synapselinkprofile: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_synapselinkprofileentity: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_synapselinkprofileentitystate: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_synapselinkschedule: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_systemform: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_systemuser: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_task: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_tdsmetadata: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_team: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_teammobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_template: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_territory: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_theme: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_userform: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_usermapping: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_usermobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_userquery: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_userrating: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_viewasexamplequestion: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_virtualentitymetadata: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_workflowbinary: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_workqueue: string;
		/** Mã định danh duy nhất của bản ghi không thể xóa được. */
		readonly regardingobjectid_workqueueitem: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của công việc hệ thống đã tạo bản ghi này. */
			readonly AsyncOperationId: string;
			/** Mã định danh duy nhất của bản ghi lỗi xóa hàng loạt. */
			readonly BulkDeleteFailureId: string;
			/** Mã định danh duy nhất của công việc thao tác hàng loạt đã tạo bản ghi này. */
			readonly BulkDeleteOperationId: string;
			/** Mô tả về lỗi. */
			readonly ErrorDescription: string;
			/** Mã lỗi của quá trình xóa hàng loạt không thành công. */
			readonly ErrorNumber: string;
			/** Chỉ mục của việc trình bày truy vấn được yêu cầu đã truy xuất bản ghi này. */
			readonly OrderedQueryIndex: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu lỗi xóa hàng loạt. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi lỗi xóa hàng loạt.
 */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_account: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_activityfileattachment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_activitymimeattachment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_activitypointer: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_adx_externalidentity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_adx_invitation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_adx_setting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_adx_webformsession: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aicopilot: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aiplugin: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginauth: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aiplugingovernance: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aiplugininstance: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginoperation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aiplugintitle: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_aipluginusersetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_annotation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_annualfiscalcalendar: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appaction: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appactionmigration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appactionrule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appelement: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_application: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_applicationuser: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appointment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appsetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_appusersetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_attributeimageconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_attributemap: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_attributemaskingrule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_bot: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_botcomponent: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_botcomponentcollection: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_businessunit: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_businessunitnewsarticle: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_calendar: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_card: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_catalog: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_catalogassignment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly channelaccessprofile_bulkdeletefailures: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly channelaccessprofileruleid: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_chat: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_comment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_connectioninstance: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_connectionreference: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_connector: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_contact: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_conversationtranscript: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_copilotsynonyms: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_credential: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_customapi: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_customeraddress: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_customerrelationship: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_datalakefolder: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_delegatedauthorization: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_deleteditemreference: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_desktopflowbinary: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_desktopflowmodule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_displaystring: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_dvfilesearch: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_dvtablesearch: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_email: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_emailserverprofile: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_entityanalyticsconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_entityimageconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_entityindex: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_entitymap: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_entityrecordfilter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_exportedexcel: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly externalparty_bulkdeletefailures: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly externalpartyitem_bulkdeletefailures: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_fabricaiskill: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_fax: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_fixedmonthlyfiscalcalendar: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowevent: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowmachine: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowmachineimage: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_flowsession: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_fxexpression: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_holidaywrapper: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_import: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_importdata: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_importfile: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_importlog: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_importmap: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_indexattributes: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_isvconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_kbarticle: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_kbarticlecomment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_kbarticletemplate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_keyvaultreference: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_knowledgebaserecord: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_letter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_mainfewshot: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_makerfewshot: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_managedidentity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_maskingrule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_metadataforarchival: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_monthlyfiscalcalendar: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aievent: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_pmview: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_schedule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_tour: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_organization: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_organizationsetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_package: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_packagehistory: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_pdfsetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_phonecall: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_plannersyncaction: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_pluginpackage: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_post: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerbidataset: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerbireport: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerbireportapdx: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerfxrule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerpagecomponent: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerpagesite: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_privilege: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_processstageparameter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_quarterlyfiscalcalendar: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_queue: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_queueitem: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_reconciliationinfo: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_recordfilter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_recyclebinconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_relationshipattribute: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_relationshiprole: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_relationshiprolemap: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_reportparameter: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_retaineddataexcel: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_retentionconfig: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_retentionoperation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_role: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_roleeditorlayout: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_routingrule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_routingruleitem: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_savedquery: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_searchattributesettings: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_semiannualfiscalcalendar: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_serviceplan: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_serviceplancustomcontrol: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_settingdefinition: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_sharedobject: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_sharedworkspace: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_sla: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_socialactivity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_stagedentity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_stagedentityattribute: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_subject: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_supportusertable: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_synapsedatabase: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_systemform: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_systemuser: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_task: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_tdsmetadata: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_team: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_template: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_territory: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_theme: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_userform: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_usermapping: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_userquery: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_userrating: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_workflowbinary: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_workqueue: string;
			/** Mã định danh duy nhất của bản ghi không thể xóa được. */
			readonly regardingobjectid_workqueueitem: string;
		}
	}
}
declare namespace OptionSet {
	namespace BulkDeleteFailure {
		enum RegardingObjectTypeCode {
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