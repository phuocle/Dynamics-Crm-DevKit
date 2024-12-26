//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAsyncOperation_Information {
		interface tab_generaltab_Sections {
			custom: DevKit.Controls.Section;
			general: DevKit.Controls.Section;
			systemlinksection: DevKit.Controls.Section;
		}
		interface tab_generaltab extends DevKit.Controls.ITab {
			Section: tab_generaltab_Sections;
		}
		interface Tabs {
			generaltab: tab_generaltab;
		}
		interface Body {
			Tab: Tabs;
			/** Ngày và giờ hoàn thành công việc hệ thống. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Ngày và giờ tạo công việc hệ thống. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Thông báo do công việc hệ thống cung cấp. */
			FriendlyMessage: DevKit.Controls.String;
			/** Thông báo liên quan đến công việc hệ thống. */
			Message: DevKit.Controls.String;
			/** Tên của công việc hệ thống. */
			Name: DevKit.Controls.String;
			/** Loại công việc hệ thống. */
			OperationType: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu công việc hệ thống. */
			OwnerId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Số lần thử lại công việc hệ thống. */
			RetryCount: DevKit.Controls.Integer;
			WebResource_systemjob: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class FormAsyncOperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form AsyncOperation_Information */
		Body: DevKit.FormAsyncOperation_Information.Body;
		/** The Navigation of form AsyncOperation_Information */
		Navigation: DevKit.FormAsyncOperation_Information.Navigation;
		/** The SidePanes of form AsyncOperation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class AsyncOperationApi {
		/**
		* DynamicsCrm.DevKit AsyncOperationApi
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
		/** Mã định danh duy nhất của công việc hệ thống. */
		AsyncOperationId: string;
		/** ID bản ghi đánh dấu đường dẫn. */
		BreadcrumbId: string;
		/** Nguồn gốc của người gọi. */
		CallerOrigin: string;
		/** Ngày và giờ hoàn thành công việc hệ thống. */
		readonly CompletedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất được dùng để liên kết giữa nhiều yêu cầu SDK và công việc hệ thống. */
		CorrelationId: string;
		/** Lần cuối cùng cập nhật độ sâu tương quan. */
		CorrelationUpdatedTime_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đã tạo công việc hệ thống. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo công việc hệ thống. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo asyncoperation. */
		readonly CreatedOnBehalfBy: string;
		/** Dữ liệu không theo cấu trúc liên kết với công việc hệ thống. */
		Data: string;
		/** File Id for the blob url used for file storage. */
		readonly DataBlobId_name: string;
		/** Thực hiện tất cả các thao tác có cùng mã thông báo phụ thuộc được lập thành chuỗi. */
		DependencyToken: string;
		/** Số lần gọi SDK kể từ cuộc gọi đầu tiên. */
		Depth: number;
		/** Mã lỗi được trả về từ công việc hệ thống bị hủy. */
		readonly ErrorCode: number;
		/** Thời gian thực hiện công việc hệ thống. */
		readonly ExecutionTimeSpan: number;
		/** datetime khi quy trình Trình mở rộng bắt đầu. */
		ExpanderStartTime_UtcDateAndTime: Date;
		/** Thông báo do công việc hệ thống cung cấp. */
		FriendlyMessage: string;
		/** Mã định danh duy nhất của máy chủ sở hữu công việc hệ thống này. */
		HostId: string;
		/** Cho biết công việc hệ thống đang chờ một sự kiện. */
		readonly IsWaitingForEvent: boolean;
		/** Thông báo liên quan đến công việc hệ thống. */
		readonly Message: string;
		/** Tên của thông báo bắt đầu công việc hệ thống này. */
		MessageName: string;
		/** Mã định danh duy nhất của người dùng sửa đổi công việc hệ thống lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi công việc hệ thống lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi asyncoperation lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của công việc hệ thống. */
		Name: string;
		/** Loại công việc hệ thống. */
		OperationType: OptionSet.AsyncOperation.OperationType;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu công việc hệ thống. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của phần mở rộng sở hữu có công việc hệ thống được liên kết. */
		OwningExtensionId: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		ParentPluginExecutionId: string;
		/** Cho biết công việc hệ thống sẽ chỉ chạy sau ngày và giờ đã chỉ định hay không. */
		PostponeUntil_UtcDateAndTime: Date;
		/** Kiểu lặp lại của công việc hệ thống. */
		RecurrencePattern: string;
		/** Thời gian bắt đầu trong UTC cho kiểu lặp lại. */
		RecurrenceStartTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_account: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_activityfileattachment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_activitymimeattachment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_activitypointer: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_adx_externalidentity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_adx_invitation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_adx_setting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_adx_webformsession: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aicopilot: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aiplugin: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginauth: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginconversationstarter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginconversationstartermapping: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginexternalschema: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginexternalschemaproperty: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aiplugingovernance: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aiplugingovernanceext: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aiplugininstance: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginoperation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginoperationparameter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginoperationresponsetemplate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aiplugintitle: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_aipluginusersetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_annotation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_annualfiscalcalendar: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appaction: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appactionmigration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appactionrule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appelement: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_application: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_applicationuser: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appmodulecomponentedge: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appmodulecomponentnode: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appointment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appsetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_appusersetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_archivecleanupinfo: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_archivecleanupoperation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_attributeimageconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_attributemap: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_attributemaskingrule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_bot: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_botcomponent: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_botcomponentcollection: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_bulkarchiveconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_bulkarchivefailuredetail: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_bulkarchiveoperation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_bulkarchiveoperationdetail: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_businessunit: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_businessunitnewsarticle: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_calendar: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_canvasappextendedmetadata: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_card: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_catalog: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_catalogassignment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		channelaccessprofile_asyncoperations: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		channelaccessprofileruleid: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_chat: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_comment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_connection: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_connectioninstance: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_connectionreference: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_connectionrole: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_connector: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_contact: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_conversationtranscript: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_convertrule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_copilotexamplequestion: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_copilotglossaryterm: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_copilotsynonyms: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_credential: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_customapi: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_customapirequestparameter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_customapiresponseproperty: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_customeraddress: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_customerrelationship: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_datalakefolder: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_datalakefolderpermission: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_datalakeworkspace: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_datalakeworkspacepermission: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_dataprocessingconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_delegatedauthorization: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_deleteditemreference: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_desktopflowbinary: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_desktopflowmodule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_displaystring: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_dvfilesearch: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_dvfilesearchattribute: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_dvfilesearchentity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_dvtablesearch: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_dvtablesearchattribute: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_dvtablesearchentity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_email: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_emailserverprofile: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_enablearchivalrequest: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_entityanalyticsconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_entityimageconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_entityindex: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_entitymap: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_entityrecordfilter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_environmentvariabledefinition: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_environmentvariablevalue: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_exportedexcel: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_exportsolutionupload: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		externalparty_asyncoperations: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		externalpartyitem_asyncoperations: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_fabricaiskill: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_fax: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_featurecontrolsetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_federatedknowledgeconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_fixedmonthlyfiscalcalendar: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowcapacityassignment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowcredentialapplication: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowevent: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowmachine: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowmachinegroup: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowmachineimage: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowmachineimageversion: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowmachinenetwork: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_flowsession: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_fxexpression: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_goal: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_goalrollupquery: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_holidaywrapper: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_import: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_importdata: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_importfile: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_importlog: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_importmap: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_indexattributes: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_new_interactionforemail: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_internalcatalogassignment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_isvconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_kbarticle: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_kbarticlecomment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_kbarticletemplate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_keyvaultreference: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_knowledgearticle: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_knowledgebaserecord: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_letter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_mailbox: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_mailmergetemplate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_mainfewshot: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_makerfewshot: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_managedidentity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_maskingrule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_metadataforarchival: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_metric: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_mobileofflineprofileextension: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_monthlyfiscalcalendar: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdynce_botcontent: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aibdataset: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aibfile: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aievent: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aimodel: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aiodimage: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aiodlabel: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_aitemplate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_analysisjob: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_analysisoverride: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_analysisresult: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_appinsightsmetadata: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dataflow: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dataflowtemplate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dmsrequest: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dmsrequeststatus: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dmssyncrequest: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_dmssyncstatus: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_fileupload: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_approval: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_approvalrequest: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_approvalresponse: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_approvalstep: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_flow_flowapproval: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_helppage: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_integratedsearchprovider: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_kbattachment: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_mobileapp: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_modulerundetail: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmanalysishistory: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmcalendar: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmcalendarversion: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pminferredtask: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmprocesstemplate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmprocessusersettings: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmprocessversion: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmrecording: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmsimulation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmtemplate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_pmview: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_richtextfile: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_schedule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_slakpi: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_tour: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msdyn_workflowactionstatus: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_msgraphresourcetosubscription: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_mspcat_packagestore: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_organization: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_organizationdatasyncfnostate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_organizationdatasyncstate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_organizationsetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_package: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_packagehistory: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_pdfsetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_phonecall: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_plannerbusinessscenario: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_plannersyncaction: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_pluginpackage: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_position: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_post: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_postfollow: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerbidataset: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerbidatasetapdx: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerbimashupparameter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerbireport: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerbireportapdx: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerfxrule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerpagecomponent: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerpagesite: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerpagesitelanguage: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerpagesitepublished: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_powerpagesscanreport: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_privilege: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_privilegecheckerlog: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_privilegecheckerrun: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_privilegesremovalsetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_processstageparameter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_provisionlanguageforuser: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_quarterlyfiscalcalendar: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_queue: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_queueitem: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_reconciliationentityinfo: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_reconciliationentitystepinfo: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_reconciliationinfo: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_recordfilter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_recyclebinconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_relationshipattribute: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_relationshiprole: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_relationshiprolemap: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_report: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_reportparameter: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_retaineddataexcel: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_retentioncleanupinfo: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_retentioncleanupoperation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_retentionconfig: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_retentionfailuredetail: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_retentionoperation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_retentionoperationdetail: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_role: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_roleeditorlayout: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_rollupfield: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_routingrule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_routingruleitem: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_savedquery: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_searchattributesettings: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_searchcustomanalyzer: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_searchrelationshipsettings: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_semiannualfiscalcalendar: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_serviceplan: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_serviceplancustomcontrol: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_serviceplanmapping: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_settingdefinition: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_sharedlinksetting: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_sharedobject: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_sharedworkspace: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_sharedworkspacepool: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_sharepointdocumentlocation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_sharepointsite: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_sideloadedaiplugin: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_similarityrule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_sla: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_socialactivity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_socialprofile: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_stagedentity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_stagedentityattribute: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_stagedmetadataasyncoperation: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_stagesolutionupload: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_subject: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_supportusertable: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_synapsedatabase: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_synapselinkprofile: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_synapselinkprofileentity: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_synapselinkschedule: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_systemform: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_systemuser: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_task: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_tdsmetadata: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_team: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_template: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_territory: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_theme: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_transactioncurrency: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_userform: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_usermapping: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_userquery: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_userrating: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_viewasexamplequestion: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_virtualentitymetadata: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_workflowbinary: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_workqueue: string;
		/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
		regardingobjectid_workqueueitem: string;
		/** Mã định danh duy nhất của yêu cầu đã tạo công việc hệ thống. */
		RequestId: string;
		/** Lưu giữ lịch sử công việc. */
		RetainJobHistory: boolean;
		/** Số lần thử lại công việc hệ thống. */
		readonly RetryCount: number;
		/** Ngữ cảnh thực hiện gốc của công việc kích hoạt công việc không đồng bộ. */
		RootExecutionContext: string;
		/** Thứ tự gửi các thao tác. */
		readonly Sequence: number;
		/** Ngày và giờ bắt đầu công việc hệ thống. */
		readonly StartedOn_UtcDateAndTime: Date;
		/** Trạng thái của công việc hệ thống. */
		StateCode: OptionSet.AsyncOperation.StateCode;
		/** Lý do cho trạng thái của công việc hệ thống. */
		StatusCode: OptionSet.AsyncOperation.StatusCode;
		/** Loại phụ của Công việc Không đồng bộ. */
		readonly Subtype: number;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Mã định danh duy nhất của quá trình kích hoạt quy trình làm việc liên quan đến công việc hệ thống. */
		WorkflowActivationId: string;
		/** Cho biết phiên bản quy trình làm việc có bị chặn hay không khi còn tiếp tục. */
		readonly WorkflowIsBlocked: boolean;
		/** Tên giai đoạn của quy trình làm việc. */
		readonly WorkflowStageName: string;
		/** Trạng thái của công việc trong quy trình làm việc. */
		readonly WorkflowState: string;
		/** Tên khối lượng công việc. */
		Workload: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của công việc hệ thống. */
			readonly AsyncOperationId: string;
			/** ID bản ghi đánh dấu đường dẫn. */
			readonly BreadcrumbId: string;
			/** Nguồn gốc của người gọi. */
			readonly CallerOrigin: string;
			/** Ngày và giờ hoàn thành công việc hệ thống. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất được dùng để liên kết giữa nhiều yêu cầu SDK và công việc hệ thống. */
			readonly CorrelationId: string;
			/** Lần cuối cùng cập nhật độ sâu tương quan. */
			readonly CorrelationUpdatedTime_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đã tạo công việc hệ thống. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo công việc hệ thống. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo asyncoperation. */
			readonly CreatedOnBehalfBy: string;
			/** Dữ liệu không theo cấu trúc liên kết với công việc hệ thống. */
			readonly Data: string;
			/** File Id for the blob url used for file storage. */
			readonly DataBlobId_name: string;
			/** Thực hiện tất cả các thao tác có cùng mã thông báo phụ thuộc được lập thành chuỗi. */
			readonly DependencyToken: string;
			/** Số lần gọi SDK kể từ cuộc gọi đầu tiên. */
			readonly Depth: string;
			/** Mã lỗi được trả về từ công việc hệ thống bị hủy. */
			readonly ErrorCode: string;
			/** Thời gian thực hiện công việc hệ thống. */
			readonly ExecutionTimeSpan: string;
			/** datetime khi quy trình Trình mở rộng bắt đầu. */
			readonly ExpanderStartTime_UtcDateAndTime: string;
			/** Thông báo do công việc hệ thống cung cấp. */
			readonly FriendlyMessage: string;
			/** Mã định danh duy nhất của máy chủ sở hữu công việc hệ thống này. */
			readonly HostId: string;
			/** Cho biết công việc hệ thống đang chờ một sự kiện. */
			readonly IsWaitingForEvent: string;
			/** Thông báo liên quan đến công việc hệ thống. */
			readonly Message: string;
			/** Tên của thông báo bắt đầu công việc hệ thống này. */
			readonly MessageName: string;
			/** Mã định danh duy nhất của người dùng sửa đổi công việc hệ thống lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi công việc hệ thống lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi asyncoperation lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của công việc hệ thống. */
			readonly Name: string;
			/** Loại công việc hệ thống. */
			readonly OperationType: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu công việc hệ thống. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của phần mở rộng sở hữu có công việc hệ thống được liên kết. */
			readonly OwningExtensionId: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			readonly ParentPluginExecutionId: string;
			/** Cho biết công việc hệ thống sẽ chỉ chạy sau ngày và giờ đã chỉ định hay không. */
			readonly PostponeUntil_UtcDateAndTime: string;
			/** Kiểu lặp lại của công việc hệ thống. */
			readonly RecurrencePattern: string;
			/** Thời gian bắt đầu trong UTC cho kiểu lặp lại. */
			readonly RecurrenceStartTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_account: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_activityfileattachment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_activitymimeattachment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_activitypointer: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_adx_externalidentity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_adx_invitation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_adx_setting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_adx_webformsession: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aicopilot: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aiplugin: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginauth: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aiplugingovernance: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aiplugininstance: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginoperation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aiplugintitle: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_aipluginusersetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_annotation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_annualfiscalcalendar: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appaction: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appactionmigration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appactionrule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appelement: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_application: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_applicationuser: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appointment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appsetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_appusersetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_attributeimageconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_attributemap: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_attributemaskingrule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_bot: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_botcomponent: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_botcomponentcollection: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_businessunit: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_businessunitnewsarticle: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_calendar: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_card: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_catalog: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_catalogassignment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly channelaccessprofile_asyncoperations: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly channelaccessprofileruleid: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_chat: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_comment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_connection: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_connectioninstance: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_connectionreference: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_connectionrole: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_connector: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_contact: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_conversationtranscript: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_convertrule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_copilotsynonyms: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_credential: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_customapi: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_customeraddress: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_customerrelationship: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_datalakefolder: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_delegatedauthorization: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_deleteditemreference: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_desktopflowbinary: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_desktopflowmodule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_displaystring: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_dvfilesearch: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_dvtablesearch: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_email: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_emailserverprofile: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_entityanalyticsconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_entityimageconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_entityindex: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_entitymap: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_entityrecordfilter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_exportedexcel: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly externalparty_asyncoperations: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly externalpartyitem_asyncoperations: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_fabricaiskill: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_fax: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_fixedmonthlyfiscalcalendar: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowevent: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowmachine: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowmachineimage: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_flowsession: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_fxexpression: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_goal: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_goalrollupquery: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_holidaywrapper: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_import: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_importdata: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_importfile: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_importlog: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_importmap: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_indexattributes: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_new_interactionforemail: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_isvconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_kbarticle: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_kbarticlecomment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_kbarticletemplate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_keyvaultreference: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_knowledgebaserecord: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_letter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_mailbox: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_mailmergetemplate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_mainfewshot: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_makerfewshot: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_managedidentity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_maskingrule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_metadataforarchival: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_metric: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_monthlyfiscalcalendar: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aievent: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_pmview: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_schedule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_tour: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_organization: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_organizationsetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_package: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_packagehistory: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_pdfsetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_phonecall: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_plannersyncaction: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_pluginpackage: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_position: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_post: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_postfollow: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerbidataset: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerbireport: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerbireportapdx: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerfxrule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerpagecomponent: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerpagesite: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_privilege: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_processstageparameter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_quarterlyfiscalcalendar: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_queue: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_queueitem: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_reconciliationinfo: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_recordfilter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_recyclebinconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_relationshipattribute: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_relationshiprole: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_relationshiprolemap: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_report: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_reportparameter: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_retaineddataexcel: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_retentionconfig: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_retentionoperation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_role: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_roleeditorlayout: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_rollupfield: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_routingrule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_routingruleitem: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_savedquery: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_searchattributesettings: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_semiannualfiscalcalendar: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_serviceplan: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_serviceplancustomcontrol: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_settingdefinition: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_sharedobject: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_sharedworkspace: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_sharepointdocumentlocation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_sharepointsite: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_similarityrule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_sla: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_socialactivity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_socialprofile: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_stagedentity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_stagedentityattribute: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_subject: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_supportusertable: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_synapsedatabase: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_systemform: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_systemuser: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_task: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_tdsmetadata: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_team: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_template: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_territory: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_theme: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_transactioncurrency: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_userform: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_usermapping: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_userquery: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_userrating: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_workflowbinary: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_workqueue: string;
			/** Mã định danh duy nhất của đối tượng có công việc hệ thống được liên kết. */
			readonly regardingobjectid_workqueueitem: string;
			/** Mã định danh duy nhất của yêu cầu đã tạo công việc hệ thống. */
			readonly RequestId: string;
			/** Lưu giữ lịch sử công việc. */
			readonly RetainJobHistory: string;
			/** Số lần thử lại công việc hệ thống. */
			readonly RetryCount: string;
			/** Ngữ cảnh thực hiện gốc của công việc kích hoạt công việc không đồng bộ. */
			readonly RootExecutionContext: string;
			/** Thứ tự gửi các thao tác. */
			readonly Sequence: string;
			/** Ngày và giờ bắt đầu công việc hệ thống. */
			readonly StartedOn_UtcDateAndTime: string;
			/** Trạng thái của công việc hệ thống. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của công việc hệ thống. */
			readonly StatusCode: string;
			/** Loại phụ của Công việc Không đồng bộ. */
			readonly Subtype: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Mã định danh duy nhất của quá trình kích hoạt quy trình làm việc liên quan đến công việc hệ thống. */
			readonly WorkflowActivationId: string;
			/** Cho biết phiên bản quy trình làm việc có bị chặn hay không khi còn tiếp tục. */
			readonly WorkflowIsBlocked: string;
			/** Tên giai đoạn của quy trình làm việc. */
			readonly WorkflowStageName: string;
			/** Trạng thái của công việc trong quy trình làm việc. */
			readonly WorkflowState: string;
			/** Tên khối lượng công việc. */
			readonly Workload: string;
		}
	}
}
declare namespace OptionSet {
	namespace AsyncOperation {
		enum OperationType {
			/** 190690092 */
			AI_Builder_Prediction_Events,
			/** 190690091 */
			AI_Builder_Training_Events,
			/** 187 */
			Async_Restore_Job,
			/** 1 */
			Bien_co_He_thong,
			/** 44 */
			Cap_nhat_Co_so_du_lieu_cua_To_chuc,
			/** 45 */
			Cap_nhat_Giai_phap,
			/** 24 */
			Cap_nhat_Khoang_thoi_gian_Thong_ke,
			/** 12 */
			Cap_nhat_Ma_phu_hop,
			/** 65 */
			Cap_nhat_Trang_thai_Bai_viet_trong_Co_so_kien_thuc,
			/** 27 */
			Cap_nhat_Trang_thai_Hop_dong,
			/** 56 */
			Cap_nhat_Trang_thai_Quyen_duoc_huong,
			/** 43 */
			Cap_phep_Goi_Ngon_ngu,
			/** 105 */
			Cascade_Assign_All_Async_Operation,
			/** 12801 */
			Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation,
			/** 90 */
			CascadeAssign,
			/** 91 */
			CascadeDelete,
			/** 335 */
			Catalog_service_asyc_operation_to_poll_for_a_solution_checker_request,
			/** 336 */
			Catalog_service_asyc_operation_to_submit_a_solution_checker_request,
			/** 25 */
			Chi_muc_Danh_muc_Noi_dung_Day_du_cua_To_chuc,
			/** 11 */
			Chien_dich_Nhanh_gon,
			/** 62 */
			Chuyen_doi_Hanh_vi_Ngay_Va_Gio,
			/** 28 */
			Cong_viec_bao_tri_DBCC_SHRINKDATABASE,
			/** 29 */
			Cong_viec_bao_tri_DBCC_SHRINKFILE,
			/** 30 */
			Cong_viec_bao_tri_lap_chi_muc_lai_tat_ca_chi_muc,
			/** 87 */
			Cong_viec_Bat_che_do_vo_hieu_hoa_noi_dung_cap_nhat_cho_truong_hop_da_giai_quyet,
			/** 85 */
			Cong_viec_di_chuyen_ghi_chu_sang_tep_dinh_kem,
			/** 49 */
			Dang_len_Yammer,
			/** 86 */
			Di_chuyen_noi_dung_bai_viet_sang_bo_luu_tru_tep,
			/** 14 */
			Dich_vu_Xoa,
			/** 21 */
			Dieu_chinh_Co_so_du_lieu,
			/** 71 */
			Don_dep_Thanh_phan_Giai_phap,
			/** 32 */
			Don_sach_cac_cau_phan_quy_trinh_lam_viec_khong_hoat_dong,
			/** 68 */
			Dong_bo_Dang_ky_Nguon_luc,
			/** 307 */
			Dong_bo_hoa_so_do_bang_Synapse,
			/** 4 */
			Du_lieu_Phan_tich_Chuyen_doi,
			/** 2 */
			Email_Hang_loat,
			/** 50 */
			Hoat_dong_Dang_dien_ra,
			/** 101 */
			Hoat_dong_khong_dong_thoi_Cap_nhat_dong_hien_dai,
			/** 211 */
			Hoat_dong_khong_dong_thoi_Chia_giai_doan_va_nang_cap,
			/** 209 */
			Hoat_dong_khong_dong_thoi_Cung_cap_ngon_ngu,
			/** 305 */
			Hoat_dong_khong_dong_thoi_Dang_ky_san_phamdich_vu,
			/** 330 */
			Hoat_dong_khong_dong_thoi_diem_cuoi_TDS_cung_cap_chuc_nang_TVF_moi_va_cap_quyen,
			/** 208 */
			Hoat_dong_khong_dong_thoi_Do_cai_dat_giai_phap,
			/** 332 */
			Hoat_dong_khong_dong_thoi_doi_voi_goi_tuy_chinh_trien_khai_FinOps,
			/** 308 */
			Hoat_dong_khong_dong_thoi_Dong_bo_hoa_co_so_du_lieu_FinOps,
			/** 320 */
			Hoat_dong_khong_dong_thoi_Goi_tao_dich_vu_danh_muc,
			/** 321 */
			Hoat_dong_khong_dong_thoi_Gui_yeu_cau_phe_duyet_cua_dich_vu_danh_muc,
			/** 103 */
			Hoat_dong_khong_dong_thoi_Huy_He_thong,
			/** 102 */
			Hoat_dong_khong_dong_thoi_Khong_dong_bo_luu_tru,
			/** 309 */
			Hoat_dong_khong_dong_thoi_Kiem_tra_don_vi_FinOps,
			/** 210 */
			Hoat_dong_khong_dong_thoi_Nhap_ban_dich,
			/** 204 */
			Hoat_dong_khong_dong_thoi_Phat_hanh_tat_ca,
			/** 239 */
			Hoat_dong_khong_dong_thoi_Phi_chuan_hoa,
			/** 89 */
			Hoat_dong_khong_dong_thoi_Sap_nhap_xep_tang,
			/** 301 */
			Hoat_dong_khong_dong_thoi_Thuc_thi_luu_tru,
			/** 302 */
			Hoat_dong_khong_dong_thoi_Trien_khai_FinOps,
			/** 207 */
			Hoat_dong_khong_dong_thoi_Xoa_va_tang_cap,
			/** 322 */
			Hoat_dong_khong_dong_thoi_Yeu_cau_cai_dat_cua_dich_vu_danh_muc,
			/** 300 */
			Hoat_dong_luu_tru_hang_loat,
			/** 72 */
			Hoat_dong_Sieu_du_lieu_cua_Mo_dun_Ung_dung,
			/** 92 */
			Hoat_dong_Trinh_mo_rong_Su_kien,
			/** 304 */
			Hoat_dong_xoa_noi_dung_da_luu_tru,
			/** 42 */
			Kiem_tra_cac_Ban_cap_nhat_Goi_Ngon_ngu,
			/** 53 */
			Kiem_tra_Tinh_trang_Ma_hoa,
			/** 95 */
			Lam_moi_Don_vi_Kinh_doanh_cho_cac_Ho_so_thuoc_So_huu_cua_chu_the_Chinh,
			/** 35 */
			Mo_rong_Chuoi_Lap_lai,
			/** 5 */
			Nhap,
			/** 59 */
			Nhap_Chuyen_tiep,
			/** 38 */
			Nhap_Du_lieu_Mau,
			/** 93 */
			Nhap_Sieu_du_lieu_Giai_phap,
			/** 6 */
			Phan_phoi_Hoat_dong,
			/** 3 */
			Phan_tich_Tep_Nhap,
			/** 7 */
			Phat_hanh_Quy_tac_Phat_hien_Su_trung_lap,
			/** 8 */
			Phat_hien_Trung_lap_Hang_loat,
			/** 104 */
			Process_Table_For_RecycleBin,
			/** 201 */
			Provision_language_for_user,
			/** 15 */
			Quan_ly_Chi_muc,
			/** 17 */
			Quy_trinh_con_Nhap,
			/** 23 */
			Quy_trinh_con_Xoa_Hang_loat,
			/** 10 */
			Quy_trinh_lam_viec,
			/** 26 */
			Sao_luu_nhat_ky_co_so_du_lieu,
			/** 63 */
			Tao_Chi_muc_EntityKey,
			/** 98 */
			Tao_hoac_lam_moi_thuc_the_ao,
			/** 47 */
			Tao_lai_Du_lieu_Bao_cao_hien_trang_DocChia_se,
			/** 46 */
			Tao_lai_Du_lieu_Bao_cao_hien_trang_So_luong_Hang_Thuc_the,
			/** 41 */
			Tao_Phan_vung_Kiem_tra,
			/** 250 */
			Thao_tac_lam_moi_cac_thanh_phan_tich_hop_thoi_gian_chay_khong_dong_bo,
			/** 203 */
			Thao_tac_nhap_giai_phap_khong_dong_bo,
			/** 73 */
			Thao_tac_Phat_hien_Bat_thuong_ALM,
			/** 76 */
			Thao_tac_Sieu_du_lieu_May_khach_trong_Ruy_bang,
			/** 79 */
			Thao_tac_Trinh_mo_rong_CallbackRegistration,
			/** 100 */
			Thao_tac_xep_tang_cac_quyen_FlowSession_khong_dong_bo,
			/** 202 */
			Thao_tac_xuat_giai_phap_khong_dong_bo,
			/** 69 */
			The_Ho_tro_Moi_quan_he,
			/** 75 */
			Thong_bao_cua_Dong,
			/** 31 */
			Thong_bao_Gioi_han_Bo_nho,
			/** 96 */
			Thu_hoi_Quyen_truy_cap_ke_thua,
			/** 9 */
			Thu_thap_Du_lieu_SQM,
			/** 19 */
			Thu_thap_Thong_ke_Co_so_du_lieu_cua_To_chuc,
			/** 20 */
			Thu_thap_Thong_ke_Quy_mo_cua_To_chuc,
			/** 16 */
			Thu_thap_Thong_ke_ve_To_chuc,
			/** 306 */
			Thuc_thi_cau_hinh_xu_ly_du_lieu,
			/** 54 */
			Thuc_thi_Yeu_cau_Khong_dong_bo,
			/** 58 */
			Tinh_toan_Hang_loat_Truong_Tong_so,
			/** 18 */
			Tinh_toan_Kich_thuoc_Bo_nho_cua_To_chuc,
			/** 22 */
			Tinh_toan_Kich_thuoc_Bo_nho_Toi_da_cua_To_chuc,
			/** 57 */
			Tinh_toan_Truong_Tong_so,
			/** 40 */
			Tong_so_Muc_tieu,
			/** 52 */
			Truy_cap_Kiem_tra_Hop_thu,
			/** 88 */
			Xep_tang_di_chuyen_goc_hoat_dong_khong_dong_bo_DB,
			/** 334 */
			Xoa_ban_ghi_Bang_dan_hoi_hoac_Bang_SQL_lien_quan_khi_ban_ghi_Bang_dan_hoi_bi_xoa,
			/** 333 */
			Xoa_ban_ghi_Bang_dan_hoi_lien_quan_khi_ban_ghi_SQL_bi_xoa,
			/** 13 */
			Xoa_Hang_loat,
			/** 94 */
			Xoa_hang_loat_Tep_dinh_kem,
			/** 51 */
			Xu_ly_Email_Den
		}
		enum OwningExtensionTypeCode {
		}
		enum PrimaryEntityType {
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 3 */
			Da_hoan_thanh,
			/** 2 */
			Da_khoa,
			/** 1 */
			Da_treo,
			/** 0 */
			San_sang
		}
		enum StatusCode {
			/** 32 */
			Da_huy,
			/** 30 */
			Da_thanh_cong,
			/** 10 */
			Dang_cho,
			/** 0 */
			Dang_cho_nguon_luc,
			/** 22 */
			Dang_huy,
			/** 21 */
			Dang_tam_dung,
			/** 20 */
			Dang_tien_hanh,
			/** 31 */
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