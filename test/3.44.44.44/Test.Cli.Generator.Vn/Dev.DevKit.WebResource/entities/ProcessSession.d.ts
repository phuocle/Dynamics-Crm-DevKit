//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections {
			Details: DevKit.Controls.Section;
		}
		interface tab_Comments_Sections {
			Comments: DevKit.Controls.Section;
		}
		interface tab_Details_Sections {
			Details_2: DevKit.Controls.Section;
		}
		interface tab_Linked_Sessions_Sections {
			Linked_Sessions: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Summary: DevKit.Controls.Section;
		}
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417 extends DevKit.Controls.ITab {
			Section: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections;
		}
		interface tab_Comments extends DevKit.Controls.ITab {
			Section: tab_Comments_Sections;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_Linked_Sessions extends DevKit.Controls.ITab {
			Section: tab_Linked_Sessions_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417;
			Comments: tab_Comments;
			Details: tab_Details;
			Linked_Sessions: tab_Linked_Sessions;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Mã định danh duy nhất của người dùng đã hủy giao dịch hộp thoại. */
			CanceledBy: DevKit.Controls.Lookup;
			/** Ngày và giờ hủy giao dịch hộp thoại. */
			CanceledOn: DevKit.Controls.DateTime;
			/** Nhận xét của người dùng. */
			Comments: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng đã hoàn thành giao dịch hộp thoại. */
			CompletedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ hoàn thành giao dịch hộp thoại. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Ngày và giờ tạo giao dịch hộp thoại. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Tên của giao dịch hộp thoại. */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của giao dịch hộp thoại đã liên kết tiếp theo. */
			NextLinkedSessionId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của giao dịch hộp thoại khởi đầu. */
			OriginatingSessionId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu giao dịch hộp thoại. */
			OwnerId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của giao dịch hộp thoại đã liên kết trước đó. */
			PreviousLinkedSessionId: DevKit.Controls.Lookup;
			/** Chọn bản ghi kích hoạt quy trình có liên quan đến giao dịch hộp thoại. */
			ProcessId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của người dùng đã bắt đầu giao dịch hộp thoại. */
			StartedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ bắt đầu giao dịch hộp thoại. */
			StartedOn: DevKit.Controls.DateTime;
			/** Lý do dành cho trạng thái của giao dịch hộp thoại. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class ProcessSessionApi {
		/**
		* DynamicsCrm.DevKit ProcessSessionApi
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
		/** Tên hoạt động đang thực thi. */
		ActivityName: string;
		/** Mã định danh duy nhất của người dùng đã hủy giao dịch hộp thoại. */
		readonly CanceledBy: string;
		/** Ngày và giờ hủy giao dịch hộp thoại. */
		CanceledOn_UtcDateAndTime: Date;
		/** Nhận xét của người dùng. */
		Comments: string;
		/** Mã định danh duy nhất của người dùng đã hoàn thành giao dịch hộp thoại. */
		readonly CompletedBy: string;
		/** Ngày và giờ hoàn thành giao dịch hộp thoại. */
		CompletedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đã bắt đầu giao dịch hộp thoại. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo giao dịch hộp thoại. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo giao dịch hộp thoại. */
		readonly CreatedOnBehalfBy: string;
		/** Mã lỗi liên quan đến giao dịch hộp thoại. */
		ErrorCode: number;
		/** Mã định danh duy nhất của người dùng đã chạy quy trình hộp thoại. */
		ExecutedBy: string;
		/** Ngày và giờ chạy quy trình hộp thoại. */
		readonly ExecutedOn_UtcDateAndTime: Date;
		/** Đối số nhập liệu vào cho quy trình hộp thoại con. */
		InputArguments: string;
		/** Mã định danh duy nhất của người dùng sửa đổi giao dịch hộp thoại lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi giao dịch hộp thoại lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa giao dịch hộp thoại. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của giao dịch hộp thoại. */
		Name: string;
		/** Mã định danh duy nhất của giao dịch hộp thoại đã liên kết tiếp theo. */
		NextLinkedSessionId: string;
		/** Mã định danh duy nhất của giao dịch hộp thoại khởi đầu. */
		OriginatingSessionId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu giao dịch hộp thoại. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu giao dịch hộp thoại. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu giao dịch hộp thoại. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của giao dịch hộp thoại đã liên kết trước đó. */
		PreviousLinkedSessionId: string;
		/** Chọn bản ghi kích hoạt quy trình có liên quan đến giao dịch hộp thoại. */
		ProcessId: string;
		/** Mã định danh duy nhất của giao dịch hộp thoại. */
		ProcessSessionId: string;
		/** Tên của giai đoạn hộp thoại. */
		ProcessStageName: string;
		/** Trạng thái của quy trình hộp thoại. */
		ProcessState: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ProtectionKey: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_account: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_activityfileattachment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_adx_externalidentity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_adx_invitation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_adx_setting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_adx_webformsession: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aicopilot: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aiplugin: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginauth: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginconversationstarter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginconversationstartermapping: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginexternalschema: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginexternalschemaproperty: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aiplugingovernance: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aiplugingovernanceext: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aiplugininstance: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginoperation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginoperationparameter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginoperationresponsetemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aiplugintitle: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_aipluginusersetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_annotation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appaction: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appactionmigration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appactionrule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appelement: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_application: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_applicationuser: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appmodulecomponentedge: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appmodulecomponentnode: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appointment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appsetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_appusersetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_archivecleanupinfo: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_archivecleanupoperation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_attributemaskingrule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_bot: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_botcomponent: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_botcomponentcollection: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_bulkarchiveconfig: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_bulkarchivefailuredetail: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_bulkarchiveoperation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_bulkarchiveoperationdetail: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_businessunit: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_businessunitnewsarticle: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_canvasappextendedmetadata: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_card: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_catalog: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_catalogassignment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		channelaccessprofile_processsession: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		profileid: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_chat: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_comment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_connection: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_connectioninstance: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_connectionreference: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_connectionrole: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_connector: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_contact: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_conversationtranscript: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_convertrule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_copilotexamplequestion: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_copilotglossaryterm: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_copilotsynonyms: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_credential: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_customapi: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_customapirequestparameter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_customapiresponseproperty: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_customeraddress: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_customerrelationship: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_datalakefolder: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_datalakefolderpermission: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_datalakeworkspace: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_datalakeworkspacepermission: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_dataprocessingconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_delegatedauthorization: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_deleteditemreference: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_desktopflowbinary: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_desktopflowmodule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_dvfilesearch: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_dvfilesearchattribute: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_dvfilesearchentity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_dvtablesearch: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_dvtablesearchattribute: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_dvtablesearchentity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_email: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_enablearchivalrequest: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_entityrecordfilter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_environmentvariabledefinition: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_environmentvariablevalue: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_expiredprocess: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_exportedexcel: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_exportsolutionupload: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		externalparty_processsession: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		externalpartyitem_processsession: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_fabricaiskill: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_fax: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_featurecontrolsetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_federatedknowledgeconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_flowcapacityassignment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_flowcredentialapplication: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_flowevent: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_flowmachine: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_flowmachinegroup: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_flowmachineimage: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_flowmachineimageversion: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_flowmachinenetwork: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_fxexpression: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_goal: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_goalrollupquery: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_holidaywrapper: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_internalcatalogassignment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_kbarticle: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_kbarticlecomment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_kbarticletemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_keyvaultreference: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_knowledgearticle: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_knowledgebaserecord: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_letter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_mailbox: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_mailmergetemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_mainfewshot: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_makerfewshot: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_managedidentity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_maskingrule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_metadataforarchival: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_metric: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_mobileofflineprofileextension: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdynce_botcontent: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aibdataset: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aibfile: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aievent: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aimodel: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aiodimage: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aiodlabel: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_aitemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_analysisjob: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_analysisoverride: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_analysisresult: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_appinsightsmetadata: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dataflow: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dataflowtemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dmsrequest: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dmsrequeststatus: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dmssyncrequest: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_dmssyncstatus: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_fileupload: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_approval: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_approvalrequest: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_approvalresponse: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_approvalstep: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_flow_flowapproval: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_helppage: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_integratedsearchprovider: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_kbattachment: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_mobileapp: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_modulerundetail: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmanalysishistory: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmcalendar: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmcalendarversion: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pminferredtask: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmprocesstemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmprocessusersettings: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmprocessversion: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmrecording: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmsimulation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmtemplate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_pmview: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_richtextfile: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_schedule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_slakpi: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_tour: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msdyn_workflowactionstatus: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_msgraphresourcetosubscription: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_mspcat_packagestore: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_newprocess: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_organizationdatasyncfnostate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_organizationdatasyncstate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_organizationsetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_package: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_packagehistory: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_pdfsetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_phonecall: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_plannerbusinessscenario: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_plannersyncaction: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_position: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerbidataset: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerbidatasetapdx: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerbimashupparameter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerbireport: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerbireportapdx: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerfxrule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerpagecomponent: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerpagesite: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerpagesitelanguage: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerpagesitepublished: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_powerpagesscanreport: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_privilegecheckerlog: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_privilegecheckerrun: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_privilegesremovalsetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_processstageparameter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_provisionlanguageforuser: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_queue: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_queueitem: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_reconciliationentityinfo: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_reconciliationentitystepinfo: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_reconciliationinfo: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_recordfilter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_recyclebinconfig: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_relationshiprole: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_report: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_reportparameter: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_retaineddataexcel: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_retentioncleanupinfo: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_retentioncleanupoperation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_retentionconfig: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_retentionfailuredetail: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_retentionoperation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_retentionoperationdetail: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_roleeditorlayout: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_rollupfield: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_routingrule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_routingruleitem: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_searchattributesettings: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_searchcustomanalyzer: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_searchrelationshipsettings: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_serviceplan: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_serviceplancustomcontrol: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_serviceplanmapping: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_settingdefinition: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_sharedlinksetting: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_sharedobject: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_sharedworkspace: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_sharedworkspacepool: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_sharepointdocumentlocation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_sharepointsite: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_sideloadedaiplugin: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_sla: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_socialactivity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_socialprofile: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_stagedentity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_stagedentityattribute: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_stagedmetadataasyncoperation: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_stagesolutionupload: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_subject: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_supportusertable: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_synapsedatabase: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_synapselinkprofile: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_synapselinkprofileentity: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_synapselinkschedule: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_systemuser: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_task: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_tdsmetadata: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_team: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_template: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_territory: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_theme: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_transactioncurrency: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_translationprocess: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_usermapping: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_userrating: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_viewasexamplequestion: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_virtualentitymetadata: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_workflowbinary: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_workqueue: string;
		/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
		regardingobjectid_workqueueitem: string;
		/** Mã định danh duy nhất của người dùng đã bắt đầu giao dịch hộp thoại. */
		readonly StartedBy: string;
		/** Ngày và giờ bắt đầu giao dịch hộp thoại. */
		StartedOn_UtcDateAndTime: Date;
		/** Trạng thái của giao dịch hộp thoại. */
		StateCode: OptionSet.ProcessSession.StateCode;
		/** Lý do dành cho trạng thái của giao dịch hộp thoại. */
		StatusCode: OptionSet.ProcessSession.StatusCode;
		/** Tên bước trong hộp thoại. */
		StepName: string;
		readonly FormattedValue: {
			/** Tên hoạt động đang thực thi. */
			readonly ActivityName: string;
			/** Mã định danh duy nhất của người dùng đã hủy giao dịch hộp thoại. */
			readonly CanceledBy: string;
			/** Ngày và giờ hủy giao dịch hộp thoại. */
			readonly CanceledOn_UtcDateAndTime: string;
			/** Nhận xét của người dùng. */
			readonly Comments: string;
			/** Mã định danh duy nhất của người dùng đã hoàn thành giao dịch hộp thoại. */
			readonly CompletedBy: string;
			/** Ngày và giờ hoàn thành giao dịch hộp thoại. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đã bắt đầu giao dịch hộp thoại. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo giao dịch hộp thoại. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo giao dịch hộp thoại. */
			readonly CreatedOnBehalfBy: string;
			/** Mã lỗi liên quan đến giao dịch hộp thoại. */
			readonly ErrorCode: string;
			/** Mã định danh duy nhất của người dùng đã chạy quy trình hộp thoại. */
			readonly ExecutedBy: string;
			/** Ngày và giờ chạy quy trình hộp thoại. */
			readonly ExecutedOn_UtcDateAndTime: string;
			/** Đối số nhập liệu vào cho quy trình hộp thoại con. */
			readonly InputArguments: string;
			/** Mã định danh duy nhất của người dùng sửa đổi giao dịch hộp thoại lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi giao dịch hộp thoại lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa giao dịch hộp thoại. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của giao dịch hộp thoại. */
			readonly Name: string;
			/** Mã định danh duy nhất của giao dịch hộp thoại đã liên kết tiếp theo. */
			readonly NextLinkedSessionId: string;
			/** Mã định danh duy nhất của giao dịch hộp thoại khởi đầu. */
			readonly OriginatingSessionId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu giao dịch hộp thoại. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu giao dịch hộp thoại. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu giao dịch hộp thoại. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của giao dịch hộp thoại đã liên kết trước đó. */
			readonly PreviousLinkedSessionId: string;
			/** Chọn bản ghi kích hoạt quy trình có liên quan đến giao dịch hộp thoại. */
			readonly ProcessId: string;
			/** Mã định danh duy nhất của giao dịch hộp thoại. */
			readonly ProcessSessionId: string;
			/** Tên của giai đoạn hộp thoại. */
			readonly ProcessStageName: string;
			/** Trạng thái của quy trình hộp thoại. */
			readonly ProcessState: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ProtectionKey: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_account: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_activityfileattachment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_adx_externalidentity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_adx_invitation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_adx_setting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_adx_webformsession: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aicopilot: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aiplugin: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginauth: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aiplugingovernance: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aiplugininstance: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginoperation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aiplugintitle: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_aipluginusersetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_annotation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appaction: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appactionmigration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appactionrule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appelement: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_application: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_applicationuser: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appointment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appsetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_appusersetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_attributemaskingrule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_bot: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_botcomponent: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_botcomponentcollection: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_businessunit: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_businessunitnewsarticle: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_card: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_catalog: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_catalogassignment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly channelaccessprofile_processsession: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly profileid: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_chat: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_comment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_connection: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_connectioninstance: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_connectionreference: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_connectionrole: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_connector: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_contact: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_conversationtranscript: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_convertrule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_copilotsynonyms: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_credential: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_customapi: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_customeraddress: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_customerrelationship: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_datalakefolder: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_delegatedauthorization: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_deleteditemreference: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_desktopflowbinary: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_desktopflowmodule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_dvfilesearch: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_dvtablesearch: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_email: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_entityrecordfilter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_expiredprocess: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_exportedexcel: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly externalparty_processsession: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly externalpartyitem_processsession: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_fabricaiskill: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_fax: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_flowevent: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_flowmachine: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_flowmachineimage: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_fxexpression: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_goal: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_goalrollupquery: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_holidaywrapper: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_kbarticle: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_kbarticlecomment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_kbarticletemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_keyvaultreference: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_knowledgebaserecord: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_letter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_mailbox: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_mailmergetemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_mainfewshot: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_makerfewshot: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_managedidentity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_maskingrule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_metadataforarchival: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_metric: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aievent: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_pmview: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_schedule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_tour: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_newprocess: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_organizationsetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_package: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_packagehistory: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_pdfsetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_phonecall: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_plannersyncaction: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_position: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerbidataset: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerbireport: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerbireportapdx: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerfxrule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerpagecomponent: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerpagesite: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_processstageparameter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_queue: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_queueitem: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_reconciliationinfo: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_recordfilter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_recyclebinconfig: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_relationshiprole: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_report: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_reportparameter: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_retaineddataexcel: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_retentionconfig: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_retentionoperation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_roleeditorlayout: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_rollupfield: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_routingrule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_routingruleitem: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_searchattributesettings: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_serviceplan: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_serviceplancustomcontrol: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_settingdefinition: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_sharedobject: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_sharedworkspace: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_sharepointdocumentlocation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_sharepointsite: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_sla: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_socialactivity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_socialprofile: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_stagedentity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_stagedentityattribute: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_subject: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_supportusertable: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_synapsedatabase: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_systemuser: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_task: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_tdsmetadata: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_team: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_template: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_territory: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_theme: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_transactioncurrency: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_translationprocess: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_usermapping: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_userrating: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_workflowbinary: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_workqueue: string;
			/** Mã định danh duy nhất của đối tượng có liên kết với giao dịch hộp thoại. */
			readonly regardingobjectid_workqueueitem: string;
			/** Mã định danh duy nhất của người dùng đã bắt đầu giao dịch hộp thoại. */
			readonly StartedBy: string;
			/** Ngày và giờ bắt đầu giao dịch hộp thoại. */
			readonly StartedOn_UtcDateAndTime: string;
			/** Trạng thái của giao dịch hộp thoại. */
			readonly StateCode: string;
			/** Lý do dành cho trạng thái của giao dịch hộp thoại. */
			readonly StatusCode: string;
			/** Tên bước trong hộp thoại. */
			readonly StepName: string;
		}
	}
}
declare namespace OptionSet {
	namespace ProcessSession {
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 1 */
			Hoan_thanh,
			/** 0 */
			Khong_hoan_thanh
		}
		enum StatusCode {
			/** 1 */
			Chua_bat_dau,
			/** 4 */
			Da_hoan_thanh,
			/** 5 */
			Da_huy,
			/** 3 */
			Da_tam_dung,
			/** 2 */
			Dang_tien_hanh,
			/** 6 */
			Khong_thanh_cong
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