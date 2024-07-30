//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webform_Information {
		interface tab_tab_sessions_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webformsteps_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webpages_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_sessions extends DevKit.Controls.ITab {
			Section: tab_tab_sessions_Sections;
		}
		interface tab_tab_webformsteps extends DevKit.Controls.ITab {
			Section: tab_tab_webformsteps_Sections;
		}
		interface tab_tab_webpages extends DevKit.Controls.ITab {
			Section: tab_tab_webpages_Sections;
		}
		interface Tabs {
			tab_sessions: tab_tab_sessions;
			tab_webformsteps: tab_tab_webformsteps;
			tab_webpages: tab_tab_webpages;
		}
		interface Body {
			Tab: Tabs;
			/** Chuyển hướng đến phần đăng nhập nếu người dùng ở trạng thái ẩn danh. */
			mspp_authenticationrequired: DevKit.Controls.Boolean;
			mspp_editexpiredmessage: DevKit.Controls.String;
			mspp_editexpiredstatecode: DevKit.Controls.Integer;
			mspp_editexpiredstatuscode: DevKit.Controls.Integer;
			mspp_multiplerecordsperuserpermitted: DevKit.Controls.Boolean;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_progressindicatorenabled: DevKit.Controls.Boolean;
			mspp_progressindicatorignorelaststep: DevKit.Controls.Boolean;
			/** Vị trí của chỉ báo tiến độ liên quan đến biểu mẫu */
			mspp_progressindicatorposition: DevKit.Controls.OptionSet;
			mspp_progressindicatorprependstepnum: DevKit.Controls.Boolean;
			mspp_progressindicatortype: DevKit.Controls.OptionSet;
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Thông báo mặc định: Bạn chưa lưu các thay đổi. Hãy bấm vào Hủy nếu bạn muốn ở lại trang để lưu các thay đổi của mình. */
			mspp_savechangeswarningmessage: DevKit.Controls.String;
			/** Hiển thị thông báo cảnh báo cho người dùng nếu họ đóng trình duyệt hoặc làm mới trang, hoặc bấm vào nút quay lại trong một biểu mẫu gồm nhiều bước và họ chưa lưu các thay đổi. */
			mspp_savechangeswarningonclose: DevKit.Controls.Boolean;
			mspp_startnewsessiononload: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Biểu mẫu nhiều bước. */
			mspp_startstep: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho thực thể website được liên kết với bản ghi này */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_localize_editexpiredmessage: DevKit.Controls.WebResource;
			WebResource_localize_savechangeswarningmessage: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_webform_webformmetadata_entityformforcreate: DevKit.Controls.NavigationItem,
			mspp_webformstep_webform: DevKit.Controls.NavigationItem,
			mspp_webpage_webform: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webformsessions: DevKit.Controls.Grid;
			grid_webformsteps: DevKit.Controls.Grid;
			grid_webpages: DevKit.Controls.Grid;
		}
	}
	class Formmspp_webform_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webform_Information */
		Body: DevKit.Formmspp_webform_Information.Body;
		/** The Navigation of form mspp_webform_Information */
		Navigation: DevKit.Formmspp_webform_Information.Navigation;
		/** The Grid of form mspp_webform_Information */
		Grid: DevKit.Formmspp_webform_Information.Grid;
		/** The SidePanes of form mspp_webform_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webformApi {
		/**
		* DynamicsCrm.DevKit mspp_webformApi
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
		/** Chuyển hướng đến phần đăng nhập nếu người dùng ở trạng thái ẩn danh. */
		mspp_authenticationrequired: boolean;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Xác định xem có thể chỉnh sửa bản ghi hiện tại hay không. Thiết đặt này bị bỏ qua nếu đặt chế độ biểu mẫu trên bước biểu mẫu thành chế độ chỉnh sửa. Nếu không, tính năng chỉnh sửa biểu mẫu sẽ hoạt động không đúng cách. */
		mspp_editexistingrecordpermitted: boolean;
		mspp_editexpiredmessage: string;
		mspp_editexpiredstatecode: number;
		mspp_editexpiredstatuscode: number;
		mspp_editnotpermittedmessage: string;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_multiplerecordsperuserpermitted: boolean;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		mspp_progressindicatorenabled: boolean;
		mspp_progressindicatorignorelaststep: boolean;
		/** Vị trí của chỉ báo tiến độ liên quan đến biểu mẫu */
		mspp_progressindicatorposition: OptionSet.mspp_webform.mspp_progressindicatorposition;
		mspp_progressindicatorprependstepnum: boolean;
		mspp_progressindicatortype: OptionSet.mspp_webform.mspp_progressindicatortype;
		mspp_provisionedlanguages: number;
		/** Thông báo mặc định: Bạn chưa lưu các thay đổi. Hãy bấm vào Hủy nếu bạn muốn ở lại trang để lưu các thay đổi của mình. */
		mspp_savechangeswarningmessage: string;
		/** Hiển thị thông báo cảnh báo cho người dùng nếu họ đóng trình duyệt hoặc làm mới trang, hoặc bấm vào nút quay lại trong một biểu mẫu gồm nhiều bước và họ chưa lưu các thay đổi. */
		mspp_savechangeswarningonclose: boolean;
		mspp_startnewsessiononload: boolean;
		/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Biểu mẫu nhiều bước. */
		mspp_startstep: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_webformId: string;
		/** Mã định danh duy nhất cho thực thể website được liên kết với bản ghi này */
		mspp_websiteid: string;
		/** Trạng thái của Biểu mẫu nhiều bước */
		statecode: OptionSet.mspp_webform.statecode;
		/** Lý do dẫn đến trạng thái của Biểu mẫu nhiều bước */
		statuscode: OptionSet.mspp_webform.statuscode;
		readonly FormattedValue: {
			/** Chuyển hướng đến phần đăng nhập nếu người dùng ở trạng thái ẩn danh. */
			readonly mspp_authenticationrequired: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Xác định xem có thể chỉnh sửa bản ghi hiện tại hay không. Thiết đặt này bị bỏ qua nếu đặt chế độ biểu mẫu trên bước biểu mẫu thành chế độ chỉnh sửa. Nếu không, tính năng chỉnh sửa biểu mẫu sẽ hoạt động không đúng cách. */
			readonly mspp_editexistingrecordpermitted: string;
			readonly mspp_editexpiredmessage: string;
			readonly mspp_editexpiredstatecode: string;
			readonly mspp_editexpiredstatuscode: string;
			readonly mspp_editnotpermittedmessage: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_multiplerecordsperuserpermitted: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			readonly mspp_progressindicatorenabled: string;
			readonly mspp_progressindicatorignorelaststep: string;
			/** Vị trí của chỉ báo tiến độ liên quan đến biểu mẫu */
			readonly mspp_progressindicatorposition: string;
			readonly mspp_progressindicatorprependstepnum: string;
			readonly mspp_progressindicatortype: string;
			readonly mspp_provisionedlanguages: string;
			/** Thông báo mặc định: Bạn chưa lưu các thay đổi. Hãy bấm vào Hủy nếu bạn muốn ở lại trang để lưu các thay đổi của mình. */
			readonly mspp_savechangeswarningmessage: string;
			/** Hiển thị thông báo cảnh báo cho người dùng nếu họ đóng trình duyệt hoặc làm mới trang, hoặc bấm vào nút quay lại trong một biểu mẫu gồm nhiều bước và họ chưa lưu các thay đổi. */
			readonly mspp_savechangeswarningonclose: string;
			readonly mspp_startnewsessiononload: string;
			/** Mã định danh duy nhất cho Bước biểu mẫu được liên kết với Biểu mẫu nhiều bước. */
			readonly mspp_startstep: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_webformId: string;
			/** Mã định danh duy nhất cho thực thể website được liên kết với bản ghi này */
			readonly mspp_websiteid: string;
			/** Trạng thái của Biểu mẫu nhiều bước */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Biểu mẫu nhiều bước */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webform {
		enum mspp_progressindicatorposition {
			/** 756150001 */
			Duoi_cung,
			/** 756150003 */
			Phai,
			/** 756150002 */
			Trai,
			/** 756150000 */
			Tren_cung
		}
		enum mspp_progressindicatortype {
			/** 756150000 */
			Chuc_danh,
			/** 756150001 */
			Dang_so_Buoc_1N,
			/** 756150002 */
			Thanh_tien_trinh
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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