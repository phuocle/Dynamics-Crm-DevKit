//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_pagetemplate_Information {
		interface tab_tab_webpages_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webpages extends DevKit.Controls.ITab {
			Section: tab_tab_webpages_Sections;
		}
		interface Tabs {
			tab_webpages: tab_tab_webpages;
		}
		interface Body {
			Tab: Tabs;
			mspp_description: DevKit.Controls.String;
			mspp_entityname: DevKit.Controls.String;
			mspp_isdefault: DevKit.Controls.Boolean;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_rewriteurl: DevKit.Controls.String;
			/** Loại bản ghi. */
			mspp_type: DevKit.Controls.OptionSet;
			/** Kiểm soát xem mẫu trang cho mẫu web này có được kết xuất bằng cách sử dụng đầu trang và chân trang của website hay không, hoặc kiểm soát việc kết xuất tất cả nội dung của trang. */
			mspp_usewebsiteheaderandfooter: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho website được liên kết với mẫu trang. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho mẫu web được liên kết với mẫu trang. */
			mspp_webtemplateid: DevKit.Controls.Lookup;
			WebResource_entityname: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_pagetemplate_webpage: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webpages: DevKit.Controls.Grid;
		}
	}
	class Formmspp_pagetemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_pagetemplate_Information */
		Body: DevKit.Formmspp_pagetemplate_Information.Body;
		/** The Navigation of form mspp_pagetemplate_Information */
		Navigation: DevKit.Formmspp_pagetemplate_Information.Navigation;
		/** The Grid of form mspp_pagetemplate_Information */
		Grid: DevKit.Formmspp_pagetemplate_Information.Grid;
		/** The SidePanes of form mspp_pagetemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_pagetemplateApi {
		/**
		* DynamicsCrm.DevKit mspp_pagetemplateApi
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
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_description: string;
		mspp_entityname: string;
		mspp_isdefault: boolean;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_pagetemplateId: string;
		mspp_rewriteurl: string;
		/** Loại bản ghi. */
		mspp_type: OptionSet.mspp_pagetemplate.mspp_type;
		/** Kiểm soát xem mẫu trang cho mẫu web này có được kết xuất bằng cách sử dụng đầu trang và chân trang của website hay không, hoặc kiểm soát việc kết xuất tất cả nội dung của trang. */
		mspp_usewebsiteheaderandfooter: boolean;
		/** Mã định danh duy nhất cho website được liên kết với mẫu trang. */
		mspp_websiteid: string;
		/** Mã định danh duy nhất cho mẫu web được liên kết với mẫu trang. */
		mspp_webtemplateid: string;
		/** Trạng thái của mẫu trang */
		statecode: OptionSet.mspp_pagetemplate.statecode;
		/** Lý do dẫn đến trạng thái của mẫu trang */
		statuscode: OptionSet.mspp_pagetemplate.statuscode;
		readonly FormattedValue: {
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			readonly mspp_entityname: string;
			readonly mspp_isdefault: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_pagetemplateId: string;
			readonly mspp_rewriteurl: string;
			/** Loại bản ghi. */
			readonly mspp_type: string;
			/** Kiểm soát xem mẫu trang cho mẫu web này có được kết xuất bằng cách sử dụng đầu trang và chân trang của website hay không, hoặc kiểm soát việc kết xuất tất cả nội dung của trang. */
			readonly mspp_usewebsiteheaderandfooter: string;
			/** Mã định danh duy nhất cho website được liên kết với mẫu trang. */
			readonly mspp_websiteid: string;
			/** Mã định danh duy nhất cho mẫu web được liên kết với mẫu trang. */
			readonly mspp_webtemplateid: string;
			/** Trạng thái của mẫu trang */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của mẫu trang */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_pagetemplate {
		enum mspp_type {
			/** 756150000 */
			Ghi_lai,
			/** 756150001 */
			Mau_web
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