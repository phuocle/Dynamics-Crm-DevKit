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
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo mục nhập. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Id Thư mục dành cho một thư mục trong Exchange */
		ExchangeFolderId: string;
		/** Tên Thư mục Exchange */
		ExchangeFolderName: string;
		/** Thông tin để cho biết thư mục đã được trưng bày để tự động theo dõi hay chưa */
		FolderOnboardingStatus: number;
		/** Id hộp thư được liên kết với bản ghi này. */
		MailboxId: string;
		readonly MailboxTrackingFolderId: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi mục nhập lần cuối cùng. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
		readonly OrganizationId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu ánh xạ thư mục. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu ánh xạ thư mục. */
		readonly OwningTeam: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_account: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_activityfileattachment: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_adx_externalidentity: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_adx_invitation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_adx_inviteredemption: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_adx_portalcomment: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_adx_setting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_adx_webformsession: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aicopilot: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aiplugin: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginauth: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginconversationstarter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginconversationstartermapping: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginexternalschema: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginexternalschemaproperty: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aiplugingovernance: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aiplugingovernanceext: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aiplugininstance: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginoperation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginoperationparameter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginoperationresponsetemplate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aiplugintitle: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_aipluginusersetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_appaction: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_appactionmigration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_appactionrule: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_appelement: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_application: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_applicationuser: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_appmodulecomponentedge: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_appmodulecomponentnode: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_appsetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_appusersetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_archivecleanupinfo: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_archivecleanupoperation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_asyncoperation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_attributeimageconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_attributemaskingrule: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_bot: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_botcomponent: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_botcomponentcollection: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_bulkarchiveconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_bulkarchivefailuredetail: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_bulkarchiveoperation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_bulkarchiveoperationdetail: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_canvasappextendedmetadata: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_card: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_catalog: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_catalogassignment: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_chat: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_comment: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_connectioninstance: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_connectionreference: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_connector: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_contact: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_conversationtranscript: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_copilotexamplequestion: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_copilotglossaryterm: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_copilotsynonyms: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_credential: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_customapi: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_customapirequestparameter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_customapiresponseproperty: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_datalakefolder: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_datalakefolderpermission: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_datalakeworkspace: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_datalakeworkspacepermission: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_dataprocessingconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_delegatedauthorization: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_deleteditemreference: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_desktopflowbinary: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_desktopflowmodule: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_dvfilesearch: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_dvfilesearchattribute: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_dvfilesearchentity: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_dvtablesearch: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_dvtablesearchattribute: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_dvtablesearchentity: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_enablearchivalrequest: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_entityanalyticsconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_entityimageconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_entityindex: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_entityrecordfilter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_environmentvariabledefinition: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_environmentvariablevalue: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_exportedexcel: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_exportsolutionupload: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_fabricaiskill: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_featurecontrolsetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_federatedknowledgeconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowcapacityassignment: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowcredentialapplication: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowevent: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowmachine: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowmachinegroup: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowmachineimage: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowmachineimageversion: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowmachinenetwork: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_flowsession: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_fxexpression: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_holidaywrapper: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_indexattributes: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_internalcatalogassignment: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_keyvaultreference: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_mainfewshot: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_makerfewshot: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_managedidentity: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_maskingrule: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_metadataforarchival: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_mobileofflineprofileextension: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdynce_botcontent: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aibdataset: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aibfile: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aievent: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aimodel: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aiodimage: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aiodlabel: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_aitemplate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_analysisjob: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_analysisoverride: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_analysisresult: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_appinsightsmetadata: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dataflow: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dataflowtemplate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dmsrequest: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dmsrequeststatus: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dmssyncrequest: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_dmssyncstatus: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_fileupload: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_approval: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_approvalrequest: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_approvalresponse: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_approvalstep: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_flow_flowapproval: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_helppage: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_integratedsearchprovider: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_kbattachment: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_mobileapp: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_modulerundetail: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmanalysishistory: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmcalendar: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmcalendarversion: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pminferredtask: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmprocesstemplate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmprocessusersettings: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmprocessversion: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmrecording: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmsimulation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmtemplate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_pmview: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_richtextfile: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_schedule: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_slakpi: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_tour: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msdyn_workflowactionstatus: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_msgraphresourcetosubscription: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_mspcat_packagestore: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_organizationdatasyncfnostate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_organizationdatasyncstate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_organizationsetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_package: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_packagehistory: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_pdfsetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_plannerbusinessscenario: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_plannersyncaction: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_pluginpackage: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerbidataset: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerbidatasetapdx: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerbimashupparameter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerbireport: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerbireportapdx: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerfxrule: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerpagecomponent: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerpagesite: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerpagesitelanguage: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerpagesitepublished: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_powerpagesscanreport: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_privilegecheckerlog: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_privilegecheckerrun: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_privilegesremovalsetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_processstageparameter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_provisionlanguageforuser: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_reconciliationentityinfo: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_reconciliationentitystepinfo: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_reconciliationinfo: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_recordfilter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_recyclebinconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_relationshipattribute: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_reportparameter: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_retaineddataexcel: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_retentioncleanupinfo: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_retentioncleanupoperation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_retentionconfig: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_retentionfailuredetail: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_retentionoperation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_retentionoperationdetail: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_roleeditorlayout: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_searchattributesettings: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_searchcustomanalyzer: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_searchrelationshipsettings: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_serviceplan: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_serviceplancustomcontrol: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_serviceplanmapping: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_settingdefinition: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_sharedlinksetting: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_sharedobject: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_sharedworkspace: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_sharedworkspacepool: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_sideloadedaiplugin: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_stagedentity: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_stagedentityattribute: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_stagedmetadataasyncoperation: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_stagesolutionupload: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_supportusertable: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_synapsedatabase: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_synapselinkprofile: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_synapselinkprofileentity: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_synapselinkschedule: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_tdsmetadata: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_territory: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_userrating: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_viewasexamplequestion: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_virtualentitymetadata: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_workflowbinary: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_workqueue: string;
		/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
		regardingobjectid_workqueueitem: string;
		/** Số phiên bản của thư mục theo dõi hộp thư. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo mục nhập. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Id Thư mục dành cho một thư mục trong Exchange */
			readonly ExchangeFolderId: string;
			/** Tên Thư mục Exchange */
			readonly ExchangeFolderName: string;
			/** Thông tin để cho biết thư mục đã được trưng bày để tự động theo dõi hay chưa */
			readonly FolderOnboardingStatus: string;
			/** Id hộp thư được liên kết với bản ghi này. */
			readonly MailboxId: string;
			readonly MailboxTrackingFolderId: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi mục nhập lần cuối cùng. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
			readonly OrganizationId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu ánh xạ thư mục. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu ánh xạ thư mục. */
			readonly OwningTeam: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_account: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_activityfileattachment: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_adx_externalidentity: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_adx_invitation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_adx_setting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_adx_webformsession: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aicopilot: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aiplugin: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginauth: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aiplugingovernance: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aiplugininstance: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginoperation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aiplugintitle: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_aipluginusersetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_appaction: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_appactionmigration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_appactionrule: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_appelement: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_application: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_applicationuser: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_appsetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_appusersetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_asyncoperation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_attributeimageconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_attributemaskingrule: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_bot: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_botcomponent: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_botcomponentcollection: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_card: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_catalog: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_catalogassignment: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_chat: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_comment: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_connectioninstance: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_connectionreference: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_connector: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_contact: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_conversationtranscript: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_copilotsynonyms: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_credential: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_customapi: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_datalakefolder: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_delegatedauthorization: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_deleteditemreference: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_desktopflowbinary: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_desktopflowmodule: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_dvfilesearch: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_dvtablesearch: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_entityanalyticsconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_entityimageconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_entityindex: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_entityrecordfilter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_exportedexcel: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_fabricaiskill: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowevent: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowmachine: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowmachineimage: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_flowsession: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_fxexpression: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_holidaywrapper: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_indexattributes: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_keyvaultreference: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_mainfewshot: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_makerfewshot: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_managedidentity: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_maskingrule: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_metadataforarchival: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aievent: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_pmview: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_schedule: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_tour: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_organizationsetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_package: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_packagehistory: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_pdfsetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_plannersyncaction: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_pluginpackage: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerbidataset: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerbireport: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerbireportapdx: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerfxrule: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerpagecomponent: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerpagesite: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_processstageparameter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_reconciliationinfo: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_recordfilter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_recyclebinconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_relationshipattribute: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_reportparameter: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_retaineddataexcel: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_retentionconfig: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_retentionoperation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_roleeditorlayout: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_searchattributesettings: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_serviceplan: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_serviceplancustomcontrol: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_settingdefinition: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_sharedobject: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_sharedworkspace: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_stagedentity: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_stagedentityattribute: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_supportusertable: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_synapsedatabase: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_tdsmetadata: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_territory: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_userrating: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_workflowbinary: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_workqueue: string;
			/** Đối tượng liên quan như Tài khoản, Người liên hệ, Khách hàng tiềm năng, v.v, mà thư mục liên quan. */
			readonly regardingobjectid_workqueueitem: string;
			/** Số phiên bản của thư mục theo dõi hộp thư. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingFolder {
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