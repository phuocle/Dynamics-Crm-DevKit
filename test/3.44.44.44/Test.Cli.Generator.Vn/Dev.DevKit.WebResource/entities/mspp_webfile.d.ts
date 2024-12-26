//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webfile_Information {
		interface tab__FBAB524E_5B3C_4DB1_8A8A_74366B17D549_Sections {
			_2B6A953D_2F2F_4CA4_8D4E_7637C1C9A42F: DevKit.Controls.Section;
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_2: DevKit.Controls.Section;
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_3: DevKit.Controls.Section;
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_4: DevKit.Controls.Section;
		}
		interface tab__FBAB524E_5B3C_4DB1_8A8A_74366B17D549 extends DevKit.Controls.ITab {
			Section: tab__FBAB524E_5B3C_4DB1_8A8A_74366B17D549_Sections;
		}
		interface Tabs {
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549: tab__FBAB524E_5B3C_4DB1_8A8A_74366B17D549;
		}
		interface Body {
			Tab: Tabs;
			/** Xác định tiêu đề CORS Truy cập – Điều khiển – Cho phép – Nguồn gốc đối với những yêu cầu nhiều nguồn gốc. */
			mspp_alloworigin: DevKit.Controls.String;
			mspp_cloudblobaddress: DevKit.Controls.String;
			/** Hiển thị giá trị được áp dụng cho tiêu đề phản hồi HTTP Nội dung – Xử lý. */
			mspp_contentdisposition: DevKit.Controls.OptionSet;
			mspp_displaydate: DevKit.Controls.DateTime;
			mspp_displayorder: DevKit.Controls.Integer;
			/** Cho biết tệp web có bị loại trừ khỏi phiên tìm kiếm trong cổng thông tin hay không. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			mspp_expirationdate: DevKit.Controls.DateTime;
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho tệp web liên kết với tệp web. */
			mspp_masterwebfileid: DevKit.Controls.Lookup;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			/** Mã định danh duy nhất cho trang web liên kết với tệp web. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			mspp_partialurl: DevKit.Controls.String;
			/** Mã định danh duy nhất cho trạng thái phát hành liên kết với tệp web. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_releasedate: DevKit.Controls.DateTime;
			mspp_summary: DevKit.Controls.String;
			mspp_title: DevKit.Controls.String;
			/** Mã định danh duy nhất cho website liên kết với tệp web. */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_file_attachment_html: DevKit.Controls.WebResource;
			WebResource_mspp_summary_monaco: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_webfile_masterwebfile: DevKit.Controls.NavigationItem,
			mspp_webfile_shortcut: DevKit.Controls.NavigationItem,
			mspp_webfile_webpage_image: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_webfile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webfile_Information */
		Body: DevKit.Formmspp_webfile_Information.Body;
		/** The Navigation of form mspp_webfile_Information */
		Navigation: DevKit.Formmspp_webfile_Information.Navigation;
		/** The SidePanes of form mspp_webfile_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webfileApi {
		/**
		* DynamicsCrm.DevKit mspp_webfileApi
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
		mspp_cloudblobaddress: string;
		/** Hiển thị giá trị được áp dụng cho tiêu đề phản hồi HTTP Nội dung – Xử lý. */
		mspp_contentdisposition: OptionSet.mspp_webfile.mspp_contentdisposition;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		mspp_createdbyipaddress: string;
		mspp_createdbyusername: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_displaydate_UtcDateAndTime: Date;
		mspp_displayorder: number;
		/** Cho biết tệp web có bị loại trừ khỏi phiên tìm kiếm trong cổng thông tin hay không. */
		mspp_excludefromsearch: boolean;
		mspp_expirationdate_UtcDateAndTime: Date;
		mspp_hiddenfromsitemap: boolean;
		/** Mã định danh duy nhất cho tệp web liên kết với tệp web. */
		mspp_masterwebfileid: string;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		mspp_modifiedbyipaddress: string;
		mspp_modifiedbyusername: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		/** Mã định danh duy nhất cho trang web liên kết với tệp web. */
		mspp_parentpageid: string;
		mspp_partialurl: string;
		/** Mã định danh duy nhất cho trạng thái phát hành liên kết với tệp web. */
		mspp_publishingstateid: string;
		mspp_releasedate_UtcDateAndTime: Date;
		mspp_summary: string;
		mspp_title: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_webfileId: string;
		/** Mã định danh duy nhất cho website liên kết với tệp web. */
		mspp_websiteid: string;
		/** Trạng thái của tệp web */
		statecode: OptionSet.mspp_webfile.statecode;
		/** Lý do dẫn đến trạng thái của tệp web */
		statuscode: OptionSet.mspp_webfile.statuscode;
		readonly FormattedValue: {
			/** Xác định tiêu đề CORS Truy cập – Điều khiển – Cho phép – Nguồn gốc đối với những yêu cầu nhiều nguồn gốc. */
			readonly mspp_alloworigin: string;
			readonly mspp_cloudblobaddress: string;
			/** Hiển thị giá trị được áp dụng cho tiêu đề phản hồi HTTP Nội dung – Xử lý. */
			readonly mspp_contentdisposition: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			readonly mspp_createdbyipaddress: string;
			readonly mspp_createdbyusername: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_displaydate_UtcDateAndTime: string;
			readonly mspp_displayorder: string;
			/** Cho biết tệp web có bị loại trừ khỏi phiên tìm kiếm trong cổng thông tin hay không. */
			readonly mspp_excludefromsearch: string;
			readonly mspp_expirationdate_UtcDateAndTime: string;
			readonly mspp_hiddenfromsitemap: string;
			/** Mã định danh duy nhất cho tệp web liên kết với tệp web. */
			readonly mspp_masterwebfileid: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			readonly mspp_modifiedbyipaddress: string;
			readonly mspp_modifiedbyusername: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			/** Mã định danh duy nhất cho trang web liên kết với tệp web. */
			readonly mspp_parentpageid: string;
			readonly mspp_partialurl: string;
			/** Mã định danh duy nhất cho trạng thái phát hành liên kết với tệp web. */
			readonly mspp_publishingstateid: string;
			readonly mspp_releasedate_UtcDateAndTime: string;
			readonly mspp_summary: string;
			readonly mspp_title: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_webfileId: string;
			/** Mã định danh duy nhất cho website liên kết với tệp web. */
			readonly mspp_websiteid: string;
			/** Trạng thái của tệp web */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của tệp web */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webfile {
		enum mspp_contentdisposition {
			/** 756150000 */
			noi_tuyen,
			/** 756150001 */
			tep_dinh_kem
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