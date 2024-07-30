//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_weblinkset_Information {
		interface tab__8C794036_9DC7_4C14_B3F1_705DA097C5EF_Sections {
			_0907E05B_70C7_4463_80BD_ED65C2911934: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab__8C794036_9DC7_4C14_B3F1_705DA097C5EF extends DevKit.Controls.ITab {
			Section: tab__8C794036_9DC7_4C14_B3F1_705DA097C5EF_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			_8C794036_9DC7_4C14_B3F1_705DA097C5EF: tab__8C794036_9DC7_4C14_B3F1_705DA097C5EF;
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			mspp_copy: DevKit.Controls.String;
			/** Lưu trữ nhãn hiển thị trên giao diện người dùng (UI) ở chế độ chỉnh sửa dữ liệu. */
			mspp_display_name: DevKit.Controls.String;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với bộ liên kết web. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_title: DevKit.Controls.String;
			/** Mã định danh duy nhất cho website được liên kết với bộ liên kết web. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Ngôn ngữ tùy chọn để liên kết với bộ liên kết web cho điều hướng chính theo ngôn ngữ cụ thể */
			mspp_websitelanguageid: DevKit.Controls.Lookup;
			WebResource_mspp_copy_monaco: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_weblinkset_weblink: DevKit.Controls.NavigationItem,
			mspp_webpage_navigation_weblinkset: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webpages: DevKit.Controls.Grid;
			weblinkset: DevKit.Controls.Grid;
		}
	}
	class Formmspp_weblinkset_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_weblinkset_Information */
		Body: DevKit.Formmspp_weblinkset_Information.Body;
		/** The Navigation of form mspp_weblinkset_Information */
		Navigation: DevKit.Formmspp_weblinkset_Information.Navigation;
		/** The Grid of form mspp_weblinkset_Information */
		Grid: DevKit.Formmspp_weblinkset_Information.Grid;
		/** The SidePanes of form mspp_weblinkset_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_weblinksetApi {
		/**
		* DynamicsCrm.DevKit mspp_weblinksetApi
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
		mspp_copy: string;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Lưu trữ nhãn hiển thị trên giao diện người dùng (UI) ở chế độ chỉnh sửa dữ liệu. */
		mspp_display_name: string;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với bộ liên kết web. */
		mspp_publishingstateid: string;
		mspp_title: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_weblinksetId: string;
		/** Mã định danh duy nhất cho website được liên kết với bộ liên kết web. */
		mspp_websiteid: string;
		/** Ngôn ngữ tùy chọn để liên kết với bộ liên kết web cho điều hướng chính theo ngôn ngữ cụ thể */
		mspp_websitelanguageid: string;
		/** Trạng thái của bộ liên kết web */
		statecode: OptionSet.mspp_weblinkset.statecode;
		/** Lý do dẫn đến trạng thái của bộ liên kết web */
		statuscode: OptionSet.mspp_weblinkset.statuscode;
		readonly FormattedValue: {
			readonly mspp_copy: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Lưu trữ nhãn hiển thị trên giao diện người dùng (UI) ở chế độ chỉnh sửa dữ liệu. */
			readonly mspp_display_name: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với bộ liên kết web. */
			readonly mspp_publishingstateid: string;
			readonly mspp_title: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_weblinksetId: string;
			/** Mã định danh duy nhất cho website được liên kết với bộ liên kết web. */
			readonly mspp_websiteid: string;
			/** Ngôn ngữ tùy chọn để liên kết với bộ liên kết web cho điều hướng chính theo ngôn ngữ cụ thể */
			readonly mspp_websitelanguageid: string;
			/** Trạng thái của bộ liên kết web */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của bộ liên kết web */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_weblinkset {
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