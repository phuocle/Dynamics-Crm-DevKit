//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webpageaccesscontrolrule_Information {
		interface tab__300B9BF7_0715_4AE2_8C50_A8C82541E3A9_Sections {
			_9CE2EE20_11E4_4D93_9F2A_C5B20F77791F: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webroles_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab__300B9BF7_0715_4AE2_8C50_A8C82541E3A9 extends DevKit.Controls.ITab {
			Section: tab__300B9BF7_0715_4AE2_8C50_A8C82541E3A9_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_webroles extends DevKit.Controls.ITab {
			Section: tab_tab_webroles_Sections;
		}
		interface Tabs {
			_300B9BF7_0715_4AE2_8C50_A8C82541E3A9: tab__300B9BF7_0715_4AE2_8C50_A8C82541E3A9;
			tab_3: tab_tab_3;
			tab_webroles: tab_tab_webroles;
		}
		interface Body {
			Tab: Tabs;
			mspp_description: DevKit.Controls.String;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_right: DevKit.Controls.OptionSet;
			/** Tất cả các tệp web con có liên quan trực tiếp đến trang web này sẽ bị loại trừ khỏi quá trình xác thực bảo mật. Điều này không loại trừ hậu duệ của nội dung con. */
			mspp_scope: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất cho trang web được liên kết với quy tắc kiểm soát quyền truy cập trang web. */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho website được liên kết với quy tắc kiểm soát quyền truy cập trang web. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
		interface Grid {
			grid_webroles: DevKit.Controls.Grid;
			publishing_states: DevKit.Controls.Grid;
		}
	}
	class Formmspp_webpageaccesscontrolrule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webpageaccesscontrolrule_Information */
		Body: DevKit.Formmspp_webpageaccesscontrolrule_Information.Body;
		/** The Navigation of form mspp_webpageaccesscontrolrule_Information */
		Navigation: DevKit.Formmspp_webpageaccesscontrolrule_Information.Navigation;
		/** The Grid of form mspp_webpageaccesscontrolrule_Information */
		Grid: DevKit.Formmspp_webpageaccesscontrolrule_Information.Grid;
		/** The SidePanes of form mspp_webpageaccesscontrolrule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webpageaccesscontrolruleApi {
		/**
		* DynamicsCrm.DevKit mspp_webpageaccesscontrolruleApi
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
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		mspp_right: OptionSet.mspp_webpageaccesscontrolrule.mspp_right;
		/** Tất cả các tệp web con có liên quan trực tiếp đến trang web này sẽ bị loại trừ khỏi quá trình xác thực bảo mật. Điều này không loại trừ hậu duệ của nội dung con. */
		mspp_scope: OptionSet.mspp_webpageaccesscontrolrule.mspp_scope;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_webpageaccesscontrolruleId: string;
		/** Mã định danh duy nhất cho trang web được liên kết với quy tắc kiểm soát quyền truy cập trang web. */
		mspp_webpageid: string;
		/** Mã định danh duy nhất cho website được liên kết với quy tắc kiểm soát quyền truy cập trang web. */
		mspp_websiteid: string;
		/** Trạng thái của quy tắc kiểm soát quyền truy cập trang web */
		statecode: OptionSet.mspp_webpageaccesscontrolrule.statecode;
		/** Lý do dẫn đến trạng thái của quy tắc kiểm soát quyền truy cập trang web */
		statuscode: OptionSet.mspp_webpageaccesscontrolrule.statuscode;
		readonly FormattedValue: {
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			readonly mspp_right: string;
			/** Tất cả các tệp web con có liên quan trực tiếp đến trang web này sẽ bị loại trừ khỏi quá trình xác thực bảo mật. Điều này không loại trừ hậu duệ của nội dung con. */
			readonly mspp_scope: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_webpageaccesscontrolruleId: string;
			/** Mã định danh duy nhất cho trang web được liên kết với quy tắc kiểm soát quyền truy cập trang web. */
			readonly mspp_webpageid: string;
			/** Mã định danh duy nhất cho website được liên kết với quy tắc kiểm soát quyền truy cập trang web. */
			readonly mspp_websiteid: string;
			/** Trạng thái của quy tắc kiểm soát quyền truy cập trang web */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của quy tắc kiểm soát quyền truy cập trang web */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webpageaccesscontrolrule {
		enum mspp_right {
			/** 1 */
			Cho_phep_thay_doi,
			/** 2 */
			Han_che_doc
		}
		enum mspp_scope {
			/** 2 */
			Loai_tru_cac_tep_web_con_truc_tiep,
			/** 1 */
			Tat_ca_noi_dung
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