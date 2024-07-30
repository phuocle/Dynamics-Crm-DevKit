//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_contentsnippet_Information {
		interface tab_mspp_contentsnippet_general_Sections {
			mspp_contentsnippet_html_section: DevKit.Controls.Section;
			mspp_contentsnippet_text_section: DevKit.Controls.Section;
		}
		interface tab_mspp_contentsnippet_general extends DevKit.Controls.ITab {
			Section: tab_mspp_contentsnippet_general_Sections;
		}
		interface Tabs {
			mspp_contentsnippet_general: tab_mspp_contentsnippet_general;
		}
		interface Body {
			Tab: Tabs;
			/** Tùy chọn để làm cho đoạn nội dung cụ thể theo ngôn ngữ */
			mspp_contentsnippetlanguageid: DevKit.Controls.Lookup;
			/** Lưu trữ nhãn hiển thị trên giao diện người dùng (UI) ở chế độ chỉnh sửa dữ liệu. */
			mspp_display_name: DevKit.Controls.String;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_type: DevKit.Controls.OptionSet;
			mspp_value: DevKit.Controls.String;
			/** Mã định danh duy nhất cho website được liên kết với đoạn nội dung. */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_mspp_value_monaco: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class Formmspp_contentsnippet_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_contentsnippet_Information */
		Body: DevKit.Formmspp_contentsnippet_Information.Body;
		/** The Navigation of form mspp_contentsnippet_Information */
		Navigation: DevKit.Formmspp_contentsnippet_Information.Navigation;
		/** The SidePanes of form mspp_contentsnippet_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_contentsnippetApi {
		/**
		* DynamicsCrm.DevKit mspp_contentsnippetApi
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
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_contentsnippetId: string;
		/** Tùy chọn để làm cho đoạn nội dung cụ thể theo ngôn ngữ */
		mspp_contentsnippetlanguageid: string;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		mspp_createdbyipaddress: string;
		mspp_createdbyusername: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Lưu trữ nhãn hiển thị trên giao diện người dùng (UI) ở chế độ chỉnh sửa dữ liệu. */
		mspp_display_name: string;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		mspp_modifiedbyipaddress: string;
		mspp_modifiedbyusername: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		mspp_type: OptionSet.mspp_contentsnippet.mspp_type;
		mspp_value: string;
		/** Mã định danh duy nhất cho website được liên kết với đoạn nội dung. */
		mspp_websiteid: string;
		/** Trạng thái của đoạn nội dung */
		statecode: OptionSet.mspp_contentsnippet.statecode;
		/** Lý do dẫn đến trạng thái của đoạn nội dung */
		statuscode: OptionSet.mspp_contentsnippet.statuscode;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_contentsnippetId: string;
			/** Tùy chọn để làm cho đoạn nội dung cụ thể theo ngôn ngữ */
			readonly mspp_contentsnippetlanguageid: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			readonly mspp_createdbyipaddress: string;
			readonly mspp_createdbyusername: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Lưu trữ nhãn hiển thị trên giao diện người dùng (UI) ở chế độ chỉnh sửa dữ liệu. */
			readonly mspp_display_name: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			readonly mspp_modifiedbyipaddress: string;
			readonly mspp_modifiedbyusername: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			readonly mspp_type: string;
			readonly mspp_value: string;
			/** Mã định danh duy nhất cho website được liên kết với đoạn nội dung. */
			readonly mspp_websiteid: string;
			/** Trạng thái của đoạn nội dung */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của đoạn nội dung */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_contentsnippet {
		enum mspp_type {
			/** 756150001 */
			HTML,
			/** 756150000 */
			Van_ban
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