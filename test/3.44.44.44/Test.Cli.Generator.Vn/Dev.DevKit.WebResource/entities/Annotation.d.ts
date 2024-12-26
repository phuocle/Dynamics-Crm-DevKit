//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			account_information: DevKit.Controls.Section;
			attachment_information: DevKit.Controls.Section;
			content_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Mã định danh duy nhất của người dùng đã tạo ghi chú. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo ghi chú. */
			CreatedOn: DevKit.Controls.DateTime;
			filenameattachment: DevKit.Controls.ActionCards;
			/** Kích thước tệp của ghi chú. */
			FileSize: DevKit.Controls.Integer;
			/** Chỉ định ghi chú có là tệp đính kèm hay không. */
			IsDocument: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất của người dùng sửa đổi ghi chú lần cuối. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi ghi chú lần cuối. */
			ModifiedOn: DevKit.Controls.DateTime;
			notetext: DevKit.Controls.ActionCards;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu ghi chú. */
			OwnerId: DevKit.Controls.Lookup;
			regardingobject: DevKit.Controls.ActionCards;
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
	namespace FormBieu_mau_tao_nhanh_ghi_chu {
		interface tab_general_Sections {
			notes_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Văn bản của ghi chú. */
			NoteText: DevKit.Controls.String;
			/** Chủ đề liên kết với ghi chú. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormBieu_mau_tao_nhanh_ghi_chu extends DevKit.IForm {
		/**
		* Biểu mẫu tạo nhanh ghi chú [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bieu_mau_tao_nhanh_ghi_chu */
		Body: DevKit.FormBieu_mau_tao_nhanh_ghi_chu.Body;
	}
	class AnnotationApi {
		/**
		* DynamicsCrm.DevKit AnnotationApi
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
		/** Mã định danh duy nhất của ghi chú. */
		AnnotationId: string;
		/** Mã định danh duy nhất của người dùng đã tạo ghi chú. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo ghi chú. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo chú thích. */
		readonly CreatedOnBehalfBy: string;
		/** Nội dung của tệp đính kèm ghi chú. */
		DocumentBody: string;
		/** Thuộc tính giả lập liên kết với tệp đính kèm ghi chú */
		readonly DummyFileName: string;
		/** Thuộc tính giả lập liên kết với ghi chú về việc */
		readonly DummyRegarding: string;
		/** Tên tệp ghi chú. */
		FileName: string;
		/** Con trỏ tệp đính kèm. */
		readonly FilePointer: string;
		/** Kích thước tệp của ghi chú. */
		readonly FileSize: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Chỉ định ghi chú có là tệp đính kèm hay không. */
		IsDocument: boolean;
		readonly IsPrivate: boolean;
		/** Mã ngôn ngữ của ghi chú. */
		LangId: string;
		/** Loại MIME của tệp đính kèm ghi chú. */
		MimeType: string;
		/** Mã định danh duy nhất của người dùng sửa đổi ghi chú lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi ghi chú lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi chú thích lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Văn bản của ghi chú. */
		NoteText: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_account: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_adx_invitation: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_adx_inviteredemption: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_adx_portalcomment: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_appointment: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_calendar: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		channelaccessprofile_annotations: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		channelaccessprofileruleid: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_profileruleitem: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_chat: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_contact: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_convertrule: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_duplicaterule: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_email: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_emailserverprofile: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_fax: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_goal: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_kbarticle: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_knowledgearticle: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_knowledgebaserecord: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_letter: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_mailbox: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_msdyn_aifptrainingdocument: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_msdyn_aimodel: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_msdyn_aiodimage: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_msdyn_flow_approval: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_phonecall: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_routingrule: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_routingruleitem: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_sharepointdocument: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_sla: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_socialactivity: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_task: string;
		/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
		objectid_workflow: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu ghi chú. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu ghi chú. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu ghi chú. */
		readonly OwningUser: string;
		/** Tiền tố của con trỏ tệp trong lưu trữ blob. */
		readonly Prefix: string;
		/** id bước của quy trình làm việc liên kết với ghi chú. */
		StepId: string;
		/** Con trỏ lưu trữ. */
		readonly StoragePointer: string;
		/** Chủ đề liên kết với ghi chú. */
		Subject: string;
		/** Số phiên bản của ghi chú. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của ghi chú. */
			readonly AnnotationId: string;
			/** Mã định danh duy nhất của người dùng đã tạo ghi chú. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo ghi chú. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo chú thích. */
			readonly CreatedOnBehalfBy: string;
			/** Nội dung của tệp đính kèm ghi chú. */
			readonly DocumentBody: string;
			/** Thuộc tính giả lập liên kết với tệp đính kèm ghi chú */
			readonly DummyFileName: string;
			/** Thuộc tính giả lập liên kết với ghi chú về việc */
			readonly DummyRegarding: string;
			/** Tên tệp ghi chú. */
			readonly FileName: string;
			/** Con trỏ tệp đính kèm. */
			readonly FilePointer: string;
			/** Kích thước tệp của ghi chú. */
			readonly FileSize: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Chỉ định ghi chú có là tệp đính kèm hay không. */
			readonly IsDocument: string;
			readonly IsPrivate: string;
			/** Mã ngôn ngữ của ghi chú. */
			readonly LangId: string;
			/** Loại MIME của tệp đính kèm ghi chú. */
			readonly MimeType: string;
			/** Mã định danh duy nhất của người dùng sửa đổi ghi chú lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi ghi chú lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi chú thích lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Văn bản của ghi chú. */
			readonly NoteText: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_account: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_adx_invitation: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_adx_inviteredemption: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_adx_portalcomment: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_appointment: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_calendar: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly channelaccessprofile_annotations: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly channelaccessprofileruleid: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_profileruleitem: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_chat: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_contact: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_convertrule: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_duplicaterule: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_email: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_emailserverprofile: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_fax: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_goal: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_kbarticle: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_knowledgearticle: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_knowledgebaserecord: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_letter: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_mailbox: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_msdyn_aifptrainingdocument: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_msdyn_aimodel: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_msdyn_aiodimage: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_msdyn_flow_approval: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_phonecall: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_routingrule: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_routingruleitem: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_sharepointdocument: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_sla: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_socialactivity: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_task: string;
			/** Mã định danh duy nhất của đối tượng có ghi chú được liên kết. */
			readonly objectid_workflow: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu ghi chú. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu ghi chú. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu ghi chú. */
			readonly OwningUser: string;
			/** Tiền tố của con trỏ tệp trong lưu trữ blob. */
			readonly Prefix: string;
			/** id bước của quy trình làm việc liên kết với ghi chú. */
			readonly StepId: string;
			/** Con trỏ lưu trữ. */
			readonly StoragePointer: string;
			/** Chủ đề liên kết với ghi chú. */
			readonly Subject: string;
			/** Số phiên bản của ghi chú. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Annotation {
		enum ObjectIdTypeCode {
		}
		enum ObjectTypeCode {
			/** 1084 */
			Bao_gia,
			/** 4215 */
			Cam_ket,
			/** 4006 */
			Chi_dinh_Nguon_luc,
			/** 4400 */
			Chien_dich,
			/** 3 */
			Co_hoi,
			/** 4000 */
			Co_soThiet_bi,
			/** 4210 */
			Cuoc_goi_dien_thoai,
			/** 4201 */
			Cuoc_hen,
			/** 4300 */
			Danh_sach_Khach_hang_Tiep_thi,
			/** 4001 */
			Dich_vu,
			/** 123 */
			Doi_thu_canh_tranh,
			/** 1088 */
			Don_hang,
			/** 4211 */
			Dong_bao_gia,
			/** 4208 */
			Dong_Co_hoi,
			/** 4209 */
			Dong_don_hang,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4206 */
			Giai_quyet_Truong_hop,
			/** 1090 */
			Hoa_don,
			/** 4402 */
			Hoat_dong_Chien_dich,
			/** 4214 */
			Hoat_dong_dich_vu,
			/** 1010 */
			Hop_dong,
			/** 4 */
			Khach_hang_tiem_nang,
			/** 4003 */
			Lich,
			/** 1011 */
			Mo_ta_Hop_dong,
			/** 8199 */
			Muc_quy_tac_dinh_tuyen,
			/** 2 */
			Nguoi_lien_he,
			/** 4407 */
			Nhap_Hang_loat,
			/** 4212 */
			Nhiem_vu,
			/** 4401 */
			Phan_hoi_ve_Chien_dich,
			/** 8181 */
			Quy_tac_Dinh_tuyen,
			/** 1024 */
			San_pham,
			/** 1 */
			Tai_khoan,
			/** 4207 */
			Thu_tin,
			/** 112 */
			Truong_hop
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