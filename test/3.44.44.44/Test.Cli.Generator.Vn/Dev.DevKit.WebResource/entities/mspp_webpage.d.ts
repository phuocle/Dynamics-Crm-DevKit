//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContent_Page {
		interface tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_Sections {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_2: DevKit.Controls.Section;
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3: DevKit.Controls.Section;
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4: DevKit.Controls.Section;
			_CC6684CC_049C_4371_9AE1_58682459A75F: DevKit.Controls.Section;
			section_localized_content: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0 extends DevKit.Controls.ITab {
			Section: tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface Tabs {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0: tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0;
			tab_7: tab_tab_7;
		}
		interface Body {
			Tab: Tabs;
			/** Xác định tiêu đề CORS Truy cập – Điều khiển – Cho phép – Nguồn gốc đối với những yêu cầu nhiều nguồn gốc. */
			mspp_alloworigin: DevKit.Controls.String;
			mspp_category: DevKit.Controls.OptionSet;
			mspp_copy: DevKit.Controls.String;
			mspp_customcss: DevKit.Controls.String;
			mspp_customjavascript: DevKit.Controls.String;
			mspp_displaydate: DevKit.Controls.DateTime;
			mspp_displayorder: DevKit.Controls.Integer;
			mspp_editorialcomments: DevKit.Controls.String;
			/** Việc đặt giá trị này thành "Có" sẽ cho phép người dùng xếp hạng trang web. */
			mspp_enablerating: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho biểu mẫu thực thể được liên kết với trang web. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho danh sách thực thể được liên kết với trang web. */
			mspp_entitylist: DevKit.Controls.Lookup;
			/** Cho biết trang web có bị loại trừ khỏi phiên tìm kiếm trong cổng thông tin hay không. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			mspp_expirationdate: DevKit.Controls.DateTime;
			mspp_feedbackpolicy: DevKit.Controls.OptionSet;
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho tệp web được liên kết với trang web. */
			mspp_image: DevKit.Controls.Lookup;
			mspp_imageurl: DevKit.Controls.String;
			/** Xác định xem đây có phải là bản ghi "gốc" của nhóm trang web đã dịch này hay không. */
			mspp_isroot: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho trang web được liên kết với trang web. */
			mspp_masterwebpageid: DevKit.Controls.Lookup;
			mspp_meta_description: DevKit.Controls.String;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			/** Mã định danh duy nhất cho bộ liên kết web được liên kết với trang web. */
			mspp_navigation: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho mẫu trang được liên kết với trang web. */
			mspp_pagetemplateid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho trang web được liên kết với trang web. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			mspp_partialurl: DevKit.Controls.String;
			/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với trang web. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Tra cứu trang web gốc. */
			mspp_rootwebpageid: DevKit.Controls.Lookup;
			mspp_summary: DevKit.Controls.String;
			mspp_title: DevKit.Controls.String;
			/** Mã định danh duy nhất cho Biểu mẫu nhiều bước được liên kết với trang web. */
			mspp_webform: DevKit.Controls.Lookup;
			/** Ngôn ngữ của trang web này. */
			mspp_webpagelanguageid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho website được liên kết với trang web. */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_mspp_copy_monaco: DevKit.Controls.WebResource;
			WebResource_mspp_customcss_editor: DevKit.Controls.WebResource;
			WebResource_mspp_customjavascript_editor: DevKit.Controls.WebResource;
			WebResource_mspp_summary_monaco: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_entityform_redirectwebpage: DevKit.Controls.NavigationItem,
			mspp_entitylist_webpageforcreate: DevKit.Controls.NavigationItem,
			mspp_entitylist_webpagefordetailsview: DevKit.Controls.NavigationItem,
			mspp_parentwebpage_shortcut: DevKit.Controls.NavigationItem,
			mspp_webformstep_redirectwebpage: DevKit.Controls.NavigationItem,
			mspp_webpage_masterwebpage: DevKit.Controls.NavigationItem,
			mspp_webpage_redirect: DevKit.Controls.NavigationItem,
			mspp_webpage_shortcut: DevKit.Controls.NavigationItem,
			mspp_webpage_sitemarker: DevKit.Controls.NavigationItem,
			mspp_webpage_webfile: DevKit.Controls.NavigationItem,
			mspp_webpage_weblink: DevKit.Controls.NavigationItem,
			mspp_webpage_webpage: DevKit.Controls.NavigationItem,
			mspp_webpage_webpage_rootwebpageid: DevKit.Controls.NavigationItem,
			mspp_webpage_webpageaccesscontrolrule: DevKit.Controls.NavigationItem
		}
		interface Grid {
			subgrid_localized_content: DevKit.Controls.Grid;
		}
	}
	class FormContent_Page extends DevKit.IForm {
		/**
		* Content Page [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Content_Page */
		Body: DevKit.FormContent_Page.Body;
		/** The Navigation of form Content_Page */
		Navigation: DevKit.FormContent_Page.Navigation;
		/** The Grid of form Content_Page */
		Grid: DevKit.FormContent_Page.Grid;
		/** The SidePanes of form Content_Page */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmspp_webpage_Information {
		interface tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_Sections {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3: DevKit.Controls.Section;
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4: DevKit.Controls.Section;
			_CC6684CC_049C_4371_9AE1_58682459A75F: DevKit.Controls.Section;
			section_localized_content: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_accesscontrolrules_Sections {
			tab_6_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_childfiles_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0 extends DevKit.Controls.ITab {
			Section: tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_accesscontrolrules extends DevKit.Controls.ITab {
			Section: tab_tab_accesscontrolrules_Sections;
		}
		interface tab_tab_childfiles extends DevKit.Controls.ITab {
			Section: tab_tab_childfiles_Sections;
		}
		interface Tabs {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0: tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0;
			tab_5: tab_tab_5;
			tab_7: tab_tab_7;
			tab_accesscontrolrules: tab_tab_accesscontrolrules;
			tab_childfiles: tab_tab_childfiles;
		}
		interface Body {
			Tab: Tabs;
			/** Xác định tiêu đề CORS Truy cập – Điều khiển – Cho phép – Nguồn gốc đối với những yêu cầu nhiều nguồn gốc. */
			mspp_alloworigin: DevKit.Controls.String;
			mspp_category: DevKit.Controls.OptionSet;
			mspp_customcss: DevKit.Controls.String;
			mspp_customjavascript: DevKit.Controls.String;
			mspp_displaydate: DevKit.Controls.DateTime;
			mspp_displayorder: DevKit.Controls.Integer;
			mspp_editorialcomments: DevKit.Controls.String;
			/** Việc đặt giá trị này thành "Có" sẽ cho phép người dùng xếp hạng trang web. */
			mspp_enablerating: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho biểu mẫu thực thể được liên kết với trang web. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho danh sách thực thể được liên kết với trang web. */
			mspp_entitylist: DevKit.Controls.Lookup;
			/** Cho biết trang web có bị loại trừ khỏi phiên tìm kiếm trong cổng thông tin hay không. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			mspp_expirationdate: DevKit.Controls.DateTime;
			mspp_feedbackpolicy: DevKit.Controls.OptionSet;
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho tệp web được liên kết với trang web. */
			mspp_image: DevKit.Controls.Lookup;
			mspp_imageurl: DevKit.Controls.String;
			/** Xác định xem đây có phải là bản ghi "gốc" của nhóm trang web đã dịch này hay không. */
			mspp_isroot: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho trang web được liên kết với trang web. */
			mspp_masterwebpageid: DevKit.Controls.Lookup;
			mspp_meta_description: DevKit.Controls.String;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			/** Mã định danh duy nhất cho mẫu trang được liên kết với trang web. */
			mspp_pagetemplateid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho trang web được liên kết với trang web. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			mspp_partialurl: DevKit.Controls.String;
			/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với trang web. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Tra cứu trang web gốc. */
			mspp_rootwebpageid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho Biểu mẫu nhiều bước được liên kết với trang web. */
			mspp_webform: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho website được liên kết với trang web. */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_mspp_customcss_editor: DevKit.Controls.WebResource;
			WebResource_mspp_customjavascript_editor: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_entityform_redirectwebpage: DevKit.Controls.NavigationItem,
			mspp_entitylist_webpageforcreate: DevKit.Controls.NavigationItem,
			mspp_entitylist_webpagefordetailsview: DevKit.Controls.NavigationItem,
			mspp_parentwebpage_shortcut: DevKit.Controls.NavigationItem,
			mspp_webformstep_redirectwebpage: DevKit.Controls.NavigationItem,
			mspp_webpage_masterwebpage: DevKit.Controls.NavigationItem,
			mspp_webpage_redirect: DevKit.Controls.NavigationItem,
			mspp_webpage_shortcut: DevKit.Controls.NavigationItem,
			mspp_webpage_sitemarker: DevKit.Controls.NavigationItem,
			mspp_webpage_webfile: DevKit.Controls.NavigationItem,
			mspp_webpage_weblink: DevKit.Controls.NavigationItem,
			mspp_webpage_webpage: DevKit.Controls.NavigationItem,
			mspp_webpage_webpage_rootwebpageid: DevKit.Controls.NavigationItem,
			mspp_webpage_webpageaccesscontrolrule: DevKit.Controls.NavigationItem
		}
		interface Grid {
			childPages: DevKit.Controls.Grid;
			grid_accesscontrolrules: DevKit.Controls.Grid;
			grid_childfiles: DevKit.Controls.Grid;
			subgrid_localized_content: DevKit.Controls.Grid;
		}
	}
	class Formmspp_webpage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webpage_Information */
		Body: DevKit.Formmspp_webpage_Information.Body;
		/** The Navigation of form mspp_webpage_Information */
		Navigation: DevKit.Formmspp_webpage_Information.Navigation;
		/** The Grid of form mspp_webpage_Information */
		Grid: DevKit.Formmspp_webpage_Information.Grid;
		/** The SidePanes of form mspp_webpage_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webpageApi {
		/**
		* DynamicsCrm.DevKit mspp_webpageApi
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
		/** Xác định tiêu đề CORS Truy cập – Điều khiển – Cho phép – Nguồn gốc đối với những yêu cầu nhiều nguồn gốc. */
		mspp_alloworigin: string;
		mspp_category: OptionSet.mspp_webpage.mspp_category;
		mspp_copy: string;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		mspp_createdbyipaddress: string;
		mspp_createdbyusername: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_customcss: string;
		mspp_customjavascript: string;
		mspp_displaydate_UtcDateAndTime: Date;
		mspp_displayorder: number;
		mspp_editorialcomments: string;
		/** Việc đặt giá trị này thành "Có" sẽ cho phép người dùng xếp hạng trang web. */
		mspp_enablerating: boolean;
		/** Mã định danh duy nhất cho biểu mẫu thực thể được liên kết với trang web. */
		mspp_entityform: string;
		/** Mã định danh duy nhất cho danh sách thực thể được liên kết với trang web. */
		mspp_entitylist: string;
		/** Cho biết trang web có bị loại trừ khỏi phiên tìm kiếm trong cổng thông tin hay không. */
		mspp_excludefromsearch: boolean;
		mspp_expirationdate_UtcDateAndTime: Date;
		mspp_feedbackpolicy: OptionSet.mspp_webpage.mspp_feedbackpolicy;
		mspp_hiddenfromsitemap: boolean;
		/** Mã định danh duy nhất cho tệp web được liên kết với trang web. */
		mspp_image: string;
		mspp_imageurl: string;
		/** Xác định xem có lưu trang này vào bộ đệm ẩn cho PWA hay không. */
		mspp_isofflinecached: boolean;
		/** Xác định xem đây có phải là bản ghi "gốc" của nhóm trang web đã dịch này hay không. */
		mspp_isroot: boolean;
		/** Mã định danh duy nhất cho trang web được liên kết với trang web. */
		mspp_masterwebpageid: string;
		mspp_meta_description: string;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		mspp_modifiedbyipaddress: string;
		mspp_modifiedbyusername: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		/** Mã định danh duy nhất cho bộ liên kết web được liên kết với trang web. */
		mspp_navigation: string;
		/** Mã định danh duy nhất cho mẫu trang được liên kết với trang web. */
		mspp_pagetemplateid: string;
		/** Mã định danh duy nhất cho trang web được liên kết với trang web. */
		mspp_parentpageid: string;
		mspp_partialurl: string;
		/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với trang web. */
		mspp_publishingstateid: string;
		mspp_releasedate_UtcDateAndTime: Date;
		/** Tra cứu trang web gốc. */
		mspp_rootwebpageid: string;
		/** Xác định xem trang nội dung có sử dụng cấu hình trang gốc hay không */
		mspp_sharedpageconfiguration: boolean;
		mspp_summary: string;
		mspp_title: string;
		/** Mã định danh duy nhất cho Biểu mẫu nhiều bước được liên kết với trang web. */
		mspp_webform: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_webpageId: string;
		/** Ngôn ngữ của trang web này. */
		mspp_webpagelanguageid: string;
		/** Mã định danh duy nhất cho website được liên kết với trang web. */
		mspp_websiteid: string;
		/** Trạng thái của trang web */
		statecode: OptionSet.mspp_webpage.statecode;
		/** Lý do dẫn đến trạng thái của trang web */
		statuscode: OptionSet.mspp_webpage.statuscode;
		readonly FormattedValue: {
			/** Xác định tiêu đề CORS Truy cập – Điều khiển – Cho phép – Nguồn gốc đối với những yêu cầu nhiều nguồn gốc. */
			readonly mspp_alloworigin: string;
			readonly mspp_category: string;
			readonly mspp_copy: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			readonly mspp_createdbyipaddress: string;
			readonly mspp_createdbyusername: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_customcss: string;
			readonly mspp_customjavascript: string;
			readonly mspp_displaydate_UtcDateAndTime: string;
			readonly mspp_displayorder: string;
			readonly mspp_editorialcomments: string;
			/** Việc đặt giá trị này thành "Có" sẽ cho phép người dùng xếp hạng trang web. */
			readonly mspp_enablerating: string;
			/** Mã định danh duy nhất cho biểu mẫu thực thể được liên kết với trang web. */
			readonly mspp_entityform: string;
			/** Mã định danh duy nhất cho danh sách thực thể được liên kết với trang web. */
			readonly mspp_entitylist: string;
			/** Cho biết trang web có bị loại trừ khỏi phiên tìm kiếm trong cổng thông tin hay không. */
			readonly mspp_excludefromsearch: string;
			readonly mspp_expirationdate_UtcDateAndTime: string;
			readonly mspp_feedbackpolicy: string;
			readonly mspp_hiddenfromsitemap: string;
			/** Mã định danh duy nhất cho tệp web được liên kết với trang web. */
			readonly mspp_image: string;
			readonly mspp_imageurl: string;
			/** Xác định xem có lưu trang này vào bộ đệm ẩn cho PWA hay không. */
			readonly mspp_isofflinecached: string;
			/** Xác định xem đây có phải là bản ghi "gốc" của nhóm trang web đã dịch này hay không. */
			readonly mspp_isroot: string;
			/** Mã định danh duy nhất cho trang web được liên kết với trang web. */
			readonly mspp_masterwebpageid: string;
			readonly mspp_meta_description: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			readonly mspp_modifiedbyipaddress: string;
			readonly mspp_modifiedbyusername: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			/** Mã định danh duy nhất cho bộ liên kết web được liên kết với trang web. */
			readonly mspp_navigation: string;
			/** Mã định danh duy nhất cho mẫu trang được liên kết với trang web. */
			readonly mspp_pagetemplateid: string;
			/** Mã định danh duy nhất cho trang web được liên kết với trang web. */
			readonly mspp_parentpageid: string;
			readonly mspp_partialurl: string;
			/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với trang web. */
			readonly mspp_publishingstateid: string;
			readonly mspp_releasedate_UtcDateAndTime: string;
			/** Tra cứu trang web gốc. */
			readonly mspp_rootwebpageid: string;
			/** Xác định xem trang nội dung có sử dụng cấu hình trang gốc hay không */
			readonly mspp_sharedpageconfiguration: string;
			readonly mspp_summary: string;
			readonly mspp_title: string;
			/** Mã định danh duy nhất cho Biểu mẫu nhiều bước được liên kết với trang web. */
			readonly mspp_webform: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_webpageId: string;
			/** Ngôn ngữ của trang web này. */
			readonly mspp_webpagelanguageid: string;
			/** Mã định danh duy nhất cho website được liên kết với trang web. */
			readonly mspp_websiteid: string;
			/** Trạng thái của trang web */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của trang web */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webpage {
		enum mspp_category {
			/** 1 */
			Tin_tuc
		}
		enum mspp_feedbackpolicy {
			/** 756150005 */
			Da_dong,
			/** 756150004 */
			Da_kiem_duyet,
			/** 756150000 */
			Ke_thua,
			/** 756150001 */
			Khong_co,
			/** 756150002 */
			Mo,
			/** 756150003 */
			Muc
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