//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entitylist_Information {
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_map_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_map_section_2: DevKit.Controls.Section;
			tab_map_section_3: DevKit.Controls.Section;
			tab_map_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_odata_Sections {
			tab_5_section_1: DevKit.Controls.Section;
			tab_odata_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_options_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_configuration: DevKit.Controls.Section;
		}
		interface tab_tab_webpages_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_map extends DevKit.Controls.ITab {
			Section: tab_tab_map_Sections;
		}
		interface tab_tab_odata extends DevKit.Controls.ITab {
			Section: tab_tab_odata_Sections;
		}
		interface tab_tab_options extends DevKit.Controls.ITab {
			Section: tab_tab_options_Sections;
		}
		interface tab_tab_webpages extends DevKit.Controls.ITab {
			Section: tab_tab_webpages_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
			tab_map: tab_tab_map;
			tab_odata: tab_tab_odata;
			tab_options: tab_tab_options;
			tab_webpages: tab_tab_webpages;
		}
		interface Body {
			Tab: Tabs;
			mspp_calendar_alldayfieldname: DevKit.Controls.String;
			mspp_calendar_descriptionfieldname: DevKit.Controls.String;
			mspp_calendar_enabled: DevKit.Controls.Boolean;
			mspp_calendar_enddatefieldname: DevKit.Controls.String;
			mspp_calendar_initialdate: DevKit.Controls.Date;
			mspp_calendar_initialview: DevKit.Controls.OptionSet;
			mspp_calendar_locationfieldname: DevKit.Controls.String;
			mspp_calendar_organizerfieldname: DevKit.Controls.String;
			mspp_calendar_startdatefieldname: DevKit.Controls.String;
			mspp_calendar_style: DevKit.Controls.OptionSet;
			mspp_calendar_summaryfieldname: DevKit.Controls.String;
			mspp_calendar_timezone: DevKit.Controls.Integer;
			mspp_calendar_timezonemode: DevKit.Controls.OptionSet;
			mspp_createbuttonlabel: DevKit.Controls.String;
			mspp_detailsbuttonlabel: DevKit.Controls.String;
			mspp_emptylisttext: DevKit.Controls.String;
			mspp_entityname: DevKit.Controls.String;
			/** Cho biết nhà cung cấp quyền đối với bảng có xác nhận đặc quyền trên loại thực thể liên kết với danh sách này hay không. */
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
			mspp_filter_applybuttonlabel: DevKit.Controls.String;
			mspp_filter_definition: DevKit.Controls.String;
			mspp_filter_enabled: DevKit.Controls.Boolean;
			mspp_filter_orientation: DevKit.Controls.OptionSet;
			mspp_filteraccount: DevKit.Controls.String;
			mspp_filterportaluser: DevKit.Controls.String;
			mspp_filterwebsite: DevKit.Controls.String;
			/** Tên tham số được thêm vào Chuỗi truy vấn cho URL của mục danh sách sẽ chứa ID của bản ghi mục danh sách. */
			mspp_idquerystringparametername: DevKit.Controls.String;
			/** Sử dụng thành phần mã đã đặt cấu hình */
			mspp_iscodecomponent: DevKit.Controls.Boolean;
			/** Một chuỗi không thể bản địa hóa mà các truy vấn có thể dùng để truy xuất bản ghi. */
			mspp_key: DevKit.Controls.String;
			mspp_map_credentials: DevKit.Controls.String;
			mspp_map_distanceunits: DevKit.Controls.OptionSet;
			/** Hiển thị một danh sách các giá trị số nguyên được phân tách bằng dấu phẩy sẽ được điền vào danh sách thả xuống trong cổng thông tin web để chọn khoảng cách tìm kiếm một vị trí trên bản đồ. */
			mspp_map_distancevalues: DevKit.Controls.String;
			/** Cho biết có kết xuất dạng xem bản đồ của dữ liệu hay không. */
			mspp_map_enabled: DevKit.Controls.Boolean;
			mspp_map_infoboxdescriptionfieldname: DevKit.Controls.String;
			mspp_map_infoboxoffsetx: DevKit.Controls.Integer;
			mspp_map_infoboxoffsety: DevKit.Controls.Integer;
			mspp_map_infoboxtitlefieldname: DevKit.Controls.String;
			mspp_map_latitude: DevKit.Controls.Double;
			mspp_map_latitudefieldname: DevKit.Controls.String;
			mspp_map_longitude: DevKit.Controls.Double;
			mspp_map_longitudefieldname: DevKit.Controls.String;
			mspp_map_pushpinheight: DevKit.Controls.Integer;
			mspp_map_pushpinurl: DevKit.Controls.String;
			mspp_map_pushpinwidth: DevKit.Controls.Integer;
			mspp_map_resturl: DevKit.Controls.String;
			mspp_map_zoom: DevKit.Controls.Integer;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_odata_enabled: DevKit.Controls.Boolean;
			mspp_odata_entitysetname: DevKit.Controls.String;
			mspp_odata_entitytypename: DevKit.Controls.String;
			/** Dạng xem thực thể nhằm xác định những cột sẽ được ánh xạ với thuộc tính của thực thể hiển thị trong nguồn cấp dữ liệu OData. */
			mspp_odata_view: DevKit.Controls.String;
			mspp_pagesize: DevKit.Controls.Integer;
			mspp_primarykeyname: DevKit.Controls.String;
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Hiển thị JavaScript tùy chỉnh sẽ được đặt ngay trước phần tử </form> đóng ở cuối trang. */
			mspp_registerstartupscript: DevKit.Controls.String;
			mspp_searchenabled: DevKit.Controls.Boolean;
			mspp_searchplaceholdertext: DevKit.Controls.String;
			mspp_searchtooltiptext: DevKit.Controls.String;
			mspp_settings: DevKit.Controls.String;
			/** Không còn dùng */
			mspp_view: DevKit.Controls.String;
			mspp_views: DevKit.Controls.String;
			/** Mã định danh duy nhất cho trang web được liên kết với danh sách thực thể. */
			mspp_webpageforcreate: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho trang web được liên kết với danh sách thực thể. */
			mspp_webpagefordetailsview: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho thực thể website được liên kết với bản ghi này */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_filter_applybuttonlabel: DevKit.Controls.WebResource;
			WebResource_filter_definition: DevKit.Controls.WebResource;
			WebResource_grid_settings: DevKit.Controls.WebResource;
			WebResource_localize_detailsbuttonlabel: DevKit.Controls.WebResource;
			WebResource_localize_emptylisttext: DevKit.Controls.WebResource;
			WebResource_localizecreatebuttonlabel: DevKit.Controls.WebResource;
			WebResource_localizesearchplaceholdertext: DevKit.Controls.WebResource;
			WebResource_localizesearchtooltiptext: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_alldayfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_descriptionfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_enddatefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_locationfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_organizerfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_startdatefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_calendar_summaryfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_customjavascript: DevKit.Controls.WebResource;
			WebResource_mspp_entityname: DevKit.Controls.WebResource;
			WebResource_mspp_filteraccount: DevKit.Controls.WebResource;
			WebResource_mspp_filterportaluser: DevKit.Controls.WebResource;
			WebResource_mspp_filterwebsite: DevKit.Controls.WebResource;
			WebResource_mspp_map_infoboxdescriptionfieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_infoboxtitlefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_latitudefieldname: DevKit.Controls.WebResource;
			WebResource_mspp_map_longitudefieldname: DevKit.Controls.WebResource;
			WebResource_views: DevKit.Controls.WebResource;
			WebResource_viewselector_odataview: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_webpage_entitylist: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webpages: DevKit.Controls.Grid;
		}
	}
	class Formmspp_entitylist_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_entitylist_Information */
		Body: DevKit.Formmspp_entitylist_Information.Body;
		/** The Navigation of form mspp_entitylist_Information */
		Navigation: DevKit.Formmspp_entitylist_Information.Navigation;
		/** The Grid of form mspp_entitylist_Information */
		Grid: DevKit.Formmspp_entitylist_Information.Grid;
		/** The SidePanes of form mspp_entitylist_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_entitylistApi {
		/**
		* DynamicsCrm.DevKit mspp_entitylistApi
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
		mspp_calendar_alldayfieldname: string;
		mspp_calendar_descriptionfieldname: string;
		mspp_calendar_enabled: boolean;
		mspp_calendar_enddatefieldname: string;
		mspp_calendar_initialdate_UtcDateOnly: Date;
		mspp_calendar_initialview: OptionSet.mspp_entitylist.mspp_calendar_initialview;
		mspp_calendar_locationfieldname: string;
		mspp_calendar_organizerfieldname: string;
		mspp_calendar_startdatefieldname: string;
		mspp_calendar_style: OptionSet.mspp_entitylist.mspp_calendar_style;
		mspp_calendar_summaryfieldname: string;
		mspp_calendar_timezone: number;
		mspp_calendar_timezonemode: OptionSet.mspp_entitylist.mspp_calendar_timezonemode;
		mspp_createbuttonlabel: string;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_detailsbuttonlabel: string;
		mspp_emptylisttext: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_entitylistId: string;
		mspp_entityname: string;
		/** Cho biết nhà cung cấp quyền đối với bảng có xác nhận đặc quyền trên loại thực thể liên kết với danh sách này hay không. */
		mspp_entitypermissionsenabled: boolean;
		mspp_filter_applybuttonlabel: string;
		mspp_filter_definition: string;
		mspp_filter_enabled: boolean;
		mspp_filter_orientation: OptionSet.mspp_entitylist.mspp_filter_orientation;
		mspp_filteraccount: string;
		mspp_filterportaluser: string;
		mspp_filterwebsite: string;
		/** Tên tham số được thêm vào Chuỗi truy vấn cho URL của mục danh sách sẽ chứa ID của bản ghi mục danh sách. */
		mspp_idquerystringparametername: string;
		/** Sử dụng thành phần mã đã đặt cấu hình */
		mspp_iscodecomponent: boolean;
		/** Một chuỗi không thể bản địa hóa mà các truy vấn có thể dùng để truy xuất bản ghi. */
		mspp_key: string;
		mspp_map_credentials: string;
		mspp_map_distanceunits: OptionSet.mspp_entitylist.mspp_map_distanceunits;
		/** Hiển thị một danh sách các giá trị số nguyên được phân tách bằng dấu phẩy sẽ được điền vào danh sách thả xuống trong cổng thông tin web để chọn khoảng cách tìm kiếm một vị trí trên bản đồ. */
		mspp_map_distancevalues: string;
		/** Cho biết có kết xuất dạng xem bản đồ của dữ liệu hay không. */
		mspp_map_enabled: boolean;
		mspp_map_infoboxdescriptionfieldname: string;
		mspp_map_infoboxoffsetx: number;
		mspp_map_infoboxoffsety: number;
		mspp_map_infoboxtitlefieldname: string;
		mspp_map_latitude: number;
		mspp_map_latitudefieldname: string;
		mspp_map_longitude: number;
		mspp_map_longitudefieldname: string;
		mspp_map_pushpinheight: number;
		mspp_map_pushpinurl: string;
		mspp_map_pushpinwidth: number;
		mspp_map_resturl: string;
		mspp_map_type: OptionSet.mspp_entitylist.mspp_map_type;
		mspp_map_zoom: number;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		mspp_odata_enabled: boolean;
		mspp_odata_entitysetname: string;
		mspp_odata_entitytypename: string;
		/** Dạng xem thực thể nhằm xác định những cột sẽ được ánh xạ với thuộc tính của thực thể hiển thị trong nguồn cấp dữ liệu OData. */
		mspp_odata_view: string;
		mspp_pagesize: number;
		mspp_primarykeyname: string;
		mspp_provisionedlanguages: number;
		/** Hiển thị JavaScript tùy chỉnh sẽ được đặt ngay trước phần tử </form> đóng ở cuối trang. */
		mspp_registerstartupscript: string;
		mspp_searchenabled: boolean;
		mspp_searchplaceholdertext: string;
		mspp_searchtooltiptext: string;
		mspp_settings: string;
		/** Không còn dùng */
		mspp_view: string;
		mspp_views: string;
		/** Mã định danh duy nhất cho trang web được liên kết với danh sách thực thể. */
		mspp_webpageforcreate: string;
		/** Mã định danh duy nhất cho trang web được liên kết với danh sách thực thể. */
		mspp_webpagefordetailsview: string;
		/** Mã định danh duy nhất cho thực thể website được liên kết với bản ghi này */
		mspp_websiteid: string;
		/** Trạng thái của danh sách */
		statecode: OptionSet.mspp_entitylist.statecode;
		/** Lý do dẫn đến trạng thái của danh sách */
		statuscode: OptionSet.mspp_entitylist.statuscode;
		readonly FormattedValue: {
			readonly mspp_calendar_alldayfieldname: string;
			readonly mspp_calendar_descriptionfieldname: string;
			readonly mspp_calendar_enabled: string;
			readonly mspp_calendar_enddatefieldname: string;
			readonly mspp_calendar_initialdate_UtcDateOnly: string;
			readonly mspp_calendar_initialview: string;
			readonly mspp_calendar_locationfieldname: string;
			readonly mspp_calendar_organizerfieldname: string;
			readonly mspp_calendar_startdatefieldname: string;
			readonly mspp_calendar_style: string;
			readonly mspp_calendar_summaryfieldname: string;
			readonly mspp_calendar_timezone: string;
			readonly mspp_calendar_timezonemode: string;
			readonly mspp_createbuttonlabel: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_detailsbuttonlabel: string;
			readonly mspp_emptylisttext: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_entitylistId: string;
			readonly mspp_entityname: string;
			/** Cho biết nhà cung cấp quyền đối với bảng có xác nhận đặc quyền trên loại thực thể liên kết với danh sách này hay không. */
			readonly mspp_entitypermissionsenabled: string;
			readonly mspp_filter_applybuttonlabel: string;
			readonly mspp_filter_definition: string;
			readonly mspp_filter_enabled: string;
			readonly mspp_filter_orientation: string;
			readonly mspp_filteraccount: string;
			readonly mspp_filterportaluser: string;
			readonly mspp_filterwebsite: string;
			/** Tên tham số được thêm vào Chuỗi truy vấn cho URL của mục danh sách sẽ chứa ID của bản ghi mục danh sách. */
			readonly mspp_idquerystringparametername: string;
			/** Sử dụng thành phần mã đã đặt cấu hình */
			readonly mspp_iscodecomponent: string;
			/** Một chuỗi không thể bản địa hóa mà các truy vấn có thể dùng để truy xuất bản ghi. */
			readonly mspp_key: string;
			readonly mspp_map_credentials: string;
			readonly mspp_map_distanceunits: string;
			/** Hiển thị một danh sách các giá trị số nguyên được phân tách bằng dấu phẩy sẽ được điền vào danh sách thả xuống trong cổng thông tin web để chọn khoảng cách tìm kiếm một vị trí trên bản đồ. */
			readonly mspp_map_distancevalues: string;
			/** Cho biết có kết xuất dạng xem bản đồ của dữ liệu hay không. */
			readonly mspp_map_enabled: string;
			readonly mspp_map_infoboxdescriptionfieldname: string;
			readonly mspp_map_infoboxoffsetx: string;
			readonly mspp_map_infoboxoffsety: string;
			readonly mspp_map_infoboxtitlefieldname: string;
			readonly mspp_map_latitude: string;
			readonly mspp_map_latitudefieldname: string;
			readonly mspp_map_longitude: string;
			readonly mspp_map_longitudefieldname: string;
			readonly mspp_map_pushpinheight: string;
			readonly mspp_map_pushpinurl: string;
			readonly mspp_map_pushpinwidth: string;
			readonly mspp_map_resturl: string;
			readonly mspp_map_type: string;
			readonly mspp_map_zoom: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			readonly mspp_odata_enabled: string;
			readonly mspp_odata_entitysetname: string;
			readonly mspp_odata_entitytypename: string;
			/** Dạng xem thực thể nhằm xác định những cột sẽ được ánh xạ với thuộc tính của thực thể hiển thị trong nguồn cấp dữ liệu OData. */
			readonly mspp_odata_view: string;
			readonly mspp_pagesize: string;
			readonly mspp_primarykeyname: string;
			readonly mspp_provisionedlanguages: string;
			/** Hiển thị JavaScript tùy chỉnh sẽ được đặt ngay trước phần tử </form> đóng ở cuối trang. */
			readonly mspp_registerstartupscript: string;
			readonly mspp_searchenabled: string;
			readonly mspp_searchplaceholdertext: string;
			readonly mspp_searchtooltiptext: string;
			readonly mspp_settings: string;
			/** Không còn dùng */
			readonly mspp_view: string;
			readonly mspp_views: string;
			/** Mã định danh duy nhất cho trang web được liên kết với danh sách thực thể. */
			readonly mspp_webpageforcreate: string;
			/** Mã định danh duy nhất cho trang web được liên kết với danh sách thực thể. */
			readonly mspp_webpagefordetailsview: string;
			/** Mã định danh duy nhất cho thực thể website được liên kết với bản ghi này */
			readonly mspp_websiteid: string;
			/** Trạng thái của danh sách */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của danh sách */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_entitylist {
		enum mspp_calendar_initialview {
			/** 756150000 */
			Nam,
			/** 756150003 */
			Ngay,
			/** 756150001 */
			Thang,
			/** 756150002 */
			Tuan
		}
		enum mspp_calendar_style {
			/** 756150001 */
			Danh_sach_su_kien,
			/** 756150000 */
			Lich_day_du
		}
		enum mspp_calendar_timezonemode {
			/** 756150001 */
			Mui_gio_cu_the,
			/** 756150000 */
			Mui_gio_dia_phuong_cua_nguoi_dung
		}
		enum mspp_filter_orientation {
			/** 756150001 */
			Doc,
			/** 756150000 */
			Ngang
		}
		enum mspp_map_distanceunits {
			/** 756150001 */
			dam,
			/** 756150000 */
			Km
		}
		enum mspp_map_type {
			/** 756150000 */
			Bing,
			/** 756150002 */
			Esri,
			/** 756150001 */
			Google
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