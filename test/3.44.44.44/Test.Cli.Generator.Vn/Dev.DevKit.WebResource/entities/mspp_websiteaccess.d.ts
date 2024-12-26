//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_websiteaccess_Information {
		interface tab_tab_webroles_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webroles extends DevKit.Controls.ITab {
			Section: tab_tab_webroles_Sections;
		}
		interface Tabs {
			tab_webroles: tab_tab_webroles;
		}
		interface Body {
			Tab: Tabs;
			mspp_managecontentsnippets: DevKit.Controls.Boolean;
			mspp_managesitemarkers: DevKit.Controls.Boolean;
			mspp_manageweblinksets: DevKit.Controls.Boolean;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_previewunpublishedentities: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho website được liên kết với quyền truy cập website. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
		interface Grid {
			grid_webroles: DevKit.Controls.Grid;
		}
	}
	class Formmspp_websiteaccess_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_websiteaccess_Information */
		Body: DevKit.Formmspp_websiteaccess_Information.Body;
		/** The Navigation of form mspp_websiteaccess_Information */
		Navigation: DevKit.Formmspp_websiteaccess_Information.Navigation;
		/** The Grid of form mspp_websiteaccess_Information */
		Grid: DevKit.Formmspp_websiteaccess_Information.Grid;
		/** The SidePanes of form mspp_websiteaccess_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_websiteaccessApi {
		/**
		* DynamicsCrm.DevKit mspp_websiteaccessApi
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
		mspp_managecontentsnippets: boolean;
		mspp_managesitemarkers: boolean;
		mspp_manageweblinksets: boolean;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		mspp_previewunpublishedentities: boolean;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_websiteaccessId: string;
		/** Mã định danh duy nhất cho website được liên kết với quyền truy cập website. */
		mspp_websiteid: string;
		/** Trạng thái của quyền truy cập website */
		statecode: OptionSet.mspp_websiteaccess.statecode;
		/** Lý do dẫn đến trạng thái của quyền truy cập website */
		statuscode: OptionSet.mspp_websiteaccess.statuscode;
		readonly FormattedValue: {
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_managecontentsnippets: string;
			readonly mspp_managesitemarkers: string;
			readonly mspp_manageweblinksets: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			readonly mspp_previewunpublishedentities: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_websiteaccessId: string;
			/** Mã định danh duy nhất cho website được liên kết với quyền truy cập website. */
			readonly mspp_websiteid: string;
			/** Trạng thái của quyền truy cập website */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của quyền truy cập website */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_websiteaccess {
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