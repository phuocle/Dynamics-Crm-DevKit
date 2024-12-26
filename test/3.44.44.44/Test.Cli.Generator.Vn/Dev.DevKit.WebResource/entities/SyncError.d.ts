//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormLoi_dong_bo {
		interface Header extends DevKit.Controls.IHeader {
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu lỗi đồng bộ. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn trạng thái lỗi đồng bộ. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Details_Sections {
		}
		interface tab_General_Tab_Sections {
			SYNCERROR_INFORMATION: DevKit.Controls.Section;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_General_Tab extends DevKit.Controls.ITab {
			Section: tab_General_Tab_Sections;
		}
		interface Tabs {
			Details: tab_Details;
			General_Tab: tab_General_Tab;
		}
		interface Body {
			Tab: Tabs;
			/** Tên hành động đã xảy ra lỗi đồng bộ */
			Action: DevKit.Controls.String;
			/** Nhập mô tả ngắn gọn của lỗi đồng bộ. */
			Description: DevKit.Controls.String;
			/** Hiển thị mã lỗi. */
			ErrorCode: DevKit.Controls.String;
			/** Mô tả lỗi từ ngoại lệ */
			ErrorDetail: DevKit.Controls.String;
			/** Thông báo lỗi của ngoại lệ */
			ErrorMessage: DevKit.Controls.String;
			/** Ngày và giờ thực thi yêu cầu upsync trên máy chủ CRM */
			ErrorTime: DevKit.Controls.DateTime;
			/** Chọn loại lỗi ưu tiên. */
			ErrorType: DevKit.Controls.OptionSet;
			/** Tên thực thể của bản ghi đã xảy ra lỗi đồng bộ */
			Name: DevKit.Controls.String;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormLoi_dong_bo extends DevKit.IForm {
		/**
		* Lỗi đồng bộ [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Loi_dong_bo */
		Body: DevKit.FormLoi_dong_bo.Body;
		/** The Header section of form Loi_dong_bo */
		Header: DevKit.FormLoi_dong_bo.Header;
		/** The Navigation of form Loi_dong_bo */
		Navigation: DevKit.FormLoi_dong_bo.Navigation;
		/** The SidePanes of form Loi_dong_bo */
		SidePanes: DevKit.SidePanes;
	}
	class SyncErrorApi {
		/**
		* DynamicsCrm.DevKit SyncErrorApi
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
		/** Tên hành động đã xảy ra lỗi đồng bộ */
		Action: string;
		/** Hiển thị dữ liệu hành động */
		ActionData: string;
		/** Mã định danh duy nhất của người dùng đã tạo lỗi đồng bộ. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo lỗi đồng bộ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo lỗi đồng bộ. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập mô tả ngắn gọn của lỗi đồng bộ. */
		Description: string;
		/** Hiển thị mã lỗi. */
		ErrorCode: string;
		/** Mô tả lỗi từ ngoại lệ */
		ErrorDetail: string;
		/** Thông báo lỗi của ngoại lệ */
		ErrorMessage: string;
		/** Ngày và giờ thực thi yêu cầu upsync trên máy chủ CRM */
		ErrorTime_UtcDateAndTime: Date;
		/** Chọn loại lỗi ưu tiên. */
		ErrorType: OptionSet.SyncError.ErrorType;
		/** Mã định danh duy nhất của người dùng sửa đổi lần cuối lỗi đồng bộ. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi lần cuối lỗi đồng bộ. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối lỗi đồng bộ. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên thực thể của bản ghi đã xảy ra lỗi đồng bộ */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Đơn vị kinh doanh sở hữu lỗi đồng bộ. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu lỗi đồng bộ. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu lỗi đồng bộ. */
		readonly OwningUser: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_account_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_activityfileattachment: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_activitymimeattachment_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_activityparty_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_adx_externalidentity: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_adx_invitation: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_adx_inviteredemption: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_adx_portalcomment: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_adx_setting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_adx_webformsession: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aicopilot: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aiplugin: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginauth: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginconversationstarter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginconversationstartermapping: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginexternalschema: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginexternalschemaproperty: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aiplugingovernance: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aiplugingovernanceext: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aiplugininstance: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginoperation: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginoperationparameter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginoperationresponsetemplate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aiplugintitle: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_aipluginusersetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_annotation_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appaction: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appactionmigration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appactionrule: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appelement: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_application: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_applicationuser: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appmodulecomponentedge: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appmodulecomponentnode: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appointment_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appsetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_appusersetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_archivecleanupinfo: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_archivecleanupoperation: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_attachment_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_attributeimageconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_attributemaskingrule: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_bot: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_botcomponent: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_botcomponentcollection: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_bulkarchiveconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_bulkarchivefailuredetail: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_bulkarchiveoperation: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_bulkarchiveoperationdetail: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_businessdatalocalizedlabel_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_businessunit_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_canvasappextendedmetadata: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_card: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_catalog: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_catalogassignment: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_category_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_channelaccessprofile_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_channelaccessprofilerule_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_channelaccessprofileruleitem_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_chat: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_comment: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_connection_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_connectioninstance: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_connectionreference: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_connectionrole_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_connector: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_contact_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_conversationtranscript: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_copilotexamplequestion: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_copilotglossaryterm: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_copilotsynonyms: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_credential: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_customapi: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_customapirequestparameter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_customapiresponseproperty: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_customeraddress_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_datalakefolder: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_datalakefolderpermission: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_datalakeworkspace: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_datalakeworkspacepermission: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_dataprocessingconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_delegatedauthorization: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_deleteditemreference: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_desktopflowbinary: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_desktopflowmodule: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_duplicaterule_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_duplicaterulecondition_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_dvfilesearch: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_dvfilesearchattribute: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_dvfilesearchentity: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_dvtablesearch: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_dvtablesearchattribute: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_dvtablesearchentity: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_email_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_emailserverprofile_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_enablearchivalrequest: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_entityanalyticsconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_entityimageconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_entityindex: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_entityrecordfilter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_environmentvariabledefinition: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_environmentvariablevalue: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_ExpiredProcess_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_exportedexcel: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_exportsolutionupload: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_externalparty_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_externalpartyitem_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_fabricaiskill: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_fax_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_featurecontrolsetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_federatedknowledgeconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_feedback_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_fieldpermission_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_fieldsecurityprofile_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_fileattachment_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowcapacityassignment: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowcredentialapplication: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowevent: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowmachine: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowmachinegroup: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowmachineimage: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowmachineimageversion: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowmachinenetwork: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_flowsession: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_fxexpression: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_goal_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_goalrollupquery_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_holidaywrapper: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_importmap_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_indexattributes: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_internaladdress_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_internalcatalogassignment: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_kbarticle_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_kbarticletemplate_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_keyvaultreference: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_knowledgearticle_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_knowledgearticleviews_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_knowledgebaserecord_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_letter_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_mailbox_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_mailmergetemplate_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_mainfewshot: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_makerfewshot: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_managedidentity: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_maskingrule: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_metadataforarchival: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_metric_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_mobileofflineprofileextension: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdynce_botcontent: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aibdataset: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aibfile: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aievent: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aimodel: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aiodimage: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aiodlabel: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_aitemplate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_analysisjob: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_analysisoverride: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_analysisresult: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_appinsightsmetadata: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dataflow: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dataflowtemplate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dmsrequest: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dmsrequeststatus: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dmssyncrequest: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_dmssyncstatus: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_fileupload: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_approval: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_approvalrequest: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_approvalresponse: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_approvalstep: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_flow_flowapproval: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_helppage: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_integratedsearchprovider: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_kbattachment: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_mobileapp: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_modulerundetail: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmanalysishistory: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmcalendar: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmcalendarversion: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pminferredtask: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmprocesstemplate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmprocessusersettings: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmprocessversion: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmrecording: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmsimulation: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmtemplate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_pmview: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_richtextfile: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_schedule: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_slakpi: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_tour: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msdyn_workflowactionstatus: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_msgraphresourcetosubscription: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_mspcat_packagestore: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_NewProcess_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_offlinecommanddefinition_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_organization_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_organizationdatasyncfnostate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_organizationdatasyncstate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_organizationsetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_package: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_packagehistory: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_pdfsetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_phonecall_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_plannerbusinessscenario: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_plannersyncaction: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_pluginpackage: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_position_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_postfollow_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerbidataset: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerbidatasetapdx: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerbimashupparameter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerbireport: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerbireportapdx: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerfxrule: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerpagecomponent: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerpagesite: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerpagesitelanguage: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerpagesitepublished: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_powerpagesscanreport: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_privilegecheckerlog: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_privilegecheckerrun: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_privilegesremovalsetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_processsession_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_processstage_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_processstageparameter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_processtrigger_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_provisionlanguageforuser: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_publisher_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_queue_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_queueitem_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_reconciliationentityinfo: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_reconciliationentitystepinfo: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_reconciliationinfo: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_recordfilter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_recurringappointmentmaster_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_recyclebinconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_relationshipattribute: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_report_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_reportcategory_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_reportparameter: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_retaineddataexcel: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_retentioncleanupinfo: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_retentioncleanupoperation: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_retentionconfig: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_retentionfailuredetail: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_retentionoperation: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_retentionoperationdetail: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_role_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_roleeditorlayout: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_rollupfield_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_savedquery_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_savedqueryvisualization_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_searchattributesettings: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_searchcustomanalyzer: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_searchrelationshipsettings: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_serviceplan: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_serviceplanmapping: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_settingdefinition: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_sharedlinksetting: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_sharedobject: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_sharedworkspace: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_sharedworkspacepool: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_sharepointdocumentlocation_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_sharepointsite_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_sideloadedaiplugin: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_sla_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_slaitem_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_slakpiinstance_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_socialactivity_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_socialprofile_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_solution_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_stagedentity: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_stagedentityattribute: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_stagedmetadataasyncoperation: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_stagesolutionupload: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_subject_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_supportusertable: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_synapsedatabase: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_synapselinkprofile: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_synapselinkprofileentity: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_synapselinkschedule: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_syncerror_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_systemuser_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_task_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_tdsmetadata: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_team_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_teamtemplate_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_template_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_territory_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_transactioncurrency_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_TranslationProcess_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_userquery_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_userqueryvisualization_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_userrating: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_viewasexamplequestion: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_virtualentitymetadata: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_workflow_syncerror: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_workflowbinary: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_workqueue: string;
		/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
		regardingobjectid_workqueueitem: string;
		/** Yêu cầu dữ liệu cho thực thể có lỗi đồng bộ. */
		RequestData: string;
		/** Thể hiện lỗi đồng bộ ở trạng thái hiện hoạt hay đã giải quyết. */
		StateCode: OptionSet.SyncError.StateCode;
		/** Chọn trạng thái lỗi đồng bộ. */
		StatusCode: OptionSet.SyncError.StatusCode;
		/** Mã định danh duy nhất của lỗi đồng bộ. */
		SyncErrorId: string;
		/** Hiển thị số phiên bản của lỗi đồng bộ. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Tên hành động đã xảy ra lỗi đồng bộ */
			readonly Action: string;
			/** Hiển thị dữ liệu hành động */
			readonly ActionData: string;
			/** Mã định danh duy nhất của người dùng đã tạo lỗi đồng bộ. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo lỗi đồng bộ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo lỗi đồng bộ. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập mô tả ngắn gọn của lỗi đồng bộ. */
			readonly Description: string;
			/** Hiển thị mã lỗi. */
			readonly ErrorCode: string;
			/** Mô tả lỗi từ ngoại lệ */
			readonly ErrorDetail: string;
			/** Thông báo lỗi của ngoại lệ */
			readonly ErrorMessage: string;
			/** Ngày và giờ thực thi yêu cầu upsync trên máy chủ CRM */
			readonly ErrorTime_UtcDateAndTime: string;
			/** Chọn loại lỗi ưu tiên. */
			readonly ErrorType: string;
			/** Mã định danh duy nhất của người dùng sửa đổi lần cuối lỗi đồng bộ. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi lần cuối lỗi đồng bộ. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối lỗi đồng bộ. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên thực thể của bản ghi đã xảy ra lỗi đồng bộ */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Đơn vị kinh doanh sở hữu lỗi đồng bộ. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu lỗi đồng bộ. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu lỗi đồng bộ. */
			readonly OwningUser: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_account_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_activityfileattachment: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_activitymimeattachment_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_activityparty_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_adx_externalidentity: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_adx_invitation: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_adx_setting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_adx_webformsession: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aicopilot: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aiplugin: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginauth: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aiplugingovernance: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aiplugininstance: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginoperation: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aiplugintitle: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_aipluginusersetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_annotation_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appaction: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appactionmigration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appactionrule: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appelement: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_application: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_applicationuser: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appointment_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appsetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_appusersetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_attachment_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_attributeimageconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_attributemaskingrule: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_bot: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_botcomponent: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_botcomponentcollection: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_businessdatalocalizedlabel_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_businessunit_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_card: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_catalog: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_catalogassignment: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_category_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_channelaccessprofile_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_channelaccessprofilerule_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_channelaccessprofileruleitem_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_chat: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_comment: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_connection_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_connectioninstance: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_connectionreference: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_connectionrole_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_connector: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_contact_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_conversationtranscript: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_copilotsynonyms: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_credential: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_customapi: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_customeraddress_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_datalakefolder: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_delegatedauthorization: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_deleteditemreference: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_desktopflowbinary: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_desktopflowmodule: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_duplicaterule_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_duplicaterulecondition_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_dvfilesearch: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_dvtablesearch: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_email_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_emailserverprofile_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_entityanalyticsconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_entityimageconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_entityindex: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_entityrecordfilter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_ExpiredProcess_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_exportedexcel: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_externalparty_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_externalpartyitem_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_fabricaiskill: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_fax_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_feedback_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_fieldpermission_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_fieldsecurityprofile_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_fileattachment_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowevent: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowmachine: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowmachineimage: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_flowsession: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_fxexpression: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_goal_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_goalrollupquery_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_holidaywrapper: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_importmap_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_indexattributes: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_internaladdress_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_kbarticle_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_kbarticletemplate_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_keyvaultreference: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_knowledgearticle_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_knowledgearticleviews_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_knowledgebaserecord_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_letter_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_mailbox_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_mailmergetemplate_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_mainfewshot: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_makerfewshot: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_managedidentity: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_maskingrule: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_metadataforarchival: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_metric_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aievent: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_pmview: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_schedule: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_tour: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_NewProcess_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_offlinecommanddefinition_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_organization_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_organizationsetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_package: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_packagehistory: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_pdfsetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_phonecall_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_plannersyncaction: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_pluginpackage: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_position_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_postfollow_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerbidataset: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerbireport: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerbireportapdx: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerfxrule: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerpagecomponent: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerpagesite: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_processsession_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_processstage_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_processstageparameter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_processtrigger_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_publisher_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_queue_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_queueitem_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_reconciliationinfo: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_recordfilter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_recurringappointmentmaster_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_recyclebinconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_relationshipattribute: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_report_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_reportcategory_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_reportparameter: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_retaineddataexcel: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_retentionconfig: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_retentionoperation: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_role_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_roleeditorlayout: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_rollupfield_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_savedquery_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_savedqueryvisualization_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_searchattributesettings: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_serviceplan: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_settingdefinition: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_sharedobject: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_sharedworkspace: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_sharepointdocumentlocation_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_sharepointsite_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_sla_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_slaitem_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_slakpiinstance_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_socialactivity_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_socialprofile_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_solution_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_stagedentity: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_stagedentityattribute: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_subject_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_supportusertable: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_synapsedatabase: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_syncerror_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_systemuser_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_task_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_tdsmetadata: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_team_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_teamtemplate_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_template_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_territory_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_transactioncurrency_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_TranslationProcess_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_userquery_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_userqueryvisualization_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_userrating: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_workflow_syncerror: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_workflowbinary: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_workqueue: string;
			/** Chọn bản ghi liên quan đến lỗi đồng bộ. */
			readonly regardingobjectid_workqueueitem: string;
			/** Yêu cầu dữ liệu cho thực thể có lỗi đồng bộ. */
			readonly RequestData: string;
			/** Thể hiện lỗi đồng bộ ở trạng thái hiện hoạt hay đã giải quyết. */
			readonly StateCode: string;
			/** Chọn trạng thái lỗi đồng bộ. */
			readonly StatusCode: string;
			/** Mã định danh duy nhất của lỗi đồng bộ. */
			readonly SyncErrorId: string;
			/** Hiển thị số phiên bản của lỗi đồng bộ. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SyncError {
		enum ErrorType {
			/** 2 */
			Ban_ghi_da_ton_tai,
			/** 1 */
			Khong_tim_thay_ban_ghi,
			/** 3 */
			Loai_khac,
			/** 0 */
			Xung_dot
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 1 */
			Da_giai_quyet,
			/** 0 */
			Hien_hoat
		}
		enum StatusCode {
			/** 1 */
			Da_khac_phuc,
			/** 0 */
			Hien_hoat
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