//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_weblink_Information {
		interface tab__FB562B86_E39C_490E_B7B2_D7C53D363325_Sections {
			_5D983152_5327_4492_B286_B7446CF20F0D: DevKit.Controls.Section;
			_A5DB4708_AB02_DE11_BDF3_0003FF48C0DB: DevKit.Controls.Section;
			_FB562B86_E39C_490E_B7B2_D7C53D363325_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__FB562B86_E39C_490E_B7B2_D7C53D363325 extends DevKit.Controls.ITab {
			Section: tab__FB562B86_E39C_490E_B7B2_D7C53D363325_Sections;
		}
		interface Tabs {
			_FB562B86_E39C_490E_B7B2_D7C53D363325: tab__FB562B86_E39C_490E_B7B2_D7C53D363325;
		}
		interface Body {
			Tab: Tabs;
			mspp_description: DevKit.Controls.String;
			mspp_disablepagevalidation: DevKit.Controls.Boolean;
			mspp_displayimageonly: DevKit.Controls.Boolean;
			mspp_displayorder: DevKit.Controls.Integer;
			/** Chọn xem có hiển thị nội dung con của trang dưới dạng các liên kết con cho liên kết này hay không. */
			mspp_displaypagechildlinks: DevKit.Controls.Boolean;
			mspp_externalurl: DevKit.Controls.String;
			mspp_imagealttext: DevKit.Controls.String;
			mspp_imageheight: DevKit.Controls.Integer;
			mspp_imageurl: DevKit.Controls.String;
			mspp_imagewidth: DevKit.Controls.Integer;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			mspp_openinnewwindow: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho trang web được liên kết với liên kết web. */
			mspp_pageid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho liên kết web chính được liên kết với liên kết web. */
			mspp_parentweblinkid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với liên kết web. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_robotsfollowlink: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất cho bộ liên kết web được liên kết với liên kết web. */
			mspp_weblinksetid: DevKit.Controls.Lookup;
			WebResource_mspp_description_monaco: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_weblink_weblink: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_weblink_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_weblink_Information */
		Body: DevKit.Formmspp_weblink_Information.Body;
		/** The Navigation of form mspp_weblink_Information */
		Navigation: DevKit.Formmspp_weblink_Information.Navigation;
		/** The SidePanes of form mspp_weblink_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_weblinkApi {
		/**
		* DynamicsCrm.DevKit mspp_weblinkApi
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
		mspp_createdbyipaddress: string;
		mspp_createdbyusername: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_description: string;
		mspp_disablepagevalidation: boolean;
		mspp_displayimageonly: boolean;
		mspp_displayorder: number;
		/** Chọn xem có hiển thị nội dung con của trang dưới dạng các liên kết con cho liên kết này hay không. */
		mspp_displaypagechildlinks: boolean;
		mspp_externalurl: string;
		mspp_imagealttext: string;
		mspp_imageheight: number;
		mspp_imageurl: string;
		mspp_imagewidth: number;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		mspp_modifiedbyipaddress: string;
		mspp_modifiedbyusername: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		mspp_openinnewwindow: boolean;
		/** Mã định danh duy nhất cho trang web được liên kết với liên kết web. */
		mspp_pageid: string;
		/** Mã định danh duy nhất cho liên kết web chính được liên kết với liên kết web. */
		mspp_parentweblinkid: string;
		/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với liên kết web. */
		mspp_publishingstateid: string;
		mspp_robotsfollowlink: boolean;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_weblinkId: string;
		/** Mã định danh duy nhất cho bộ liên kết web được liên kết với liên kết web. */
		mspp_weblinksetid: string;
		/** Trạng thái của liên kết web */
		statecode: OptionSet.mspp_weblink.statecode;
		/** Lý do dẫn đến trạng thái của liên kết web */
		statuscode: OptionSet.mspp_weblink.statuscode;
		readonly FormattedValue: {
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			readonly mspp_createdbyipaddress: string;
			readonly mspp_createdbyusername: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			readonly mspp_disablepagevalidation: string;
			readonly mspp_displayimageonly: string;
			readonly mspp_displayorder: string;
			/** Chọn xem có hiển thị nội dung con của trang dưới dạng các liên kết con cho liên kết này hay không. */
			readonly mspp_displaypagechildlinks: string;
			readonly mspp_externalurl: string;
			readonly mspp_imagealttext: string;
			readonly mspp_imageheight: string;
			readonly mspp_imageurl: string;
			readonly mspp_imagewidth: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			readonly mspp_modifiedbyipaddress: string;
			readonly mspp_modifiedbyusername: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			readonly mspp_openinnewwindow: string;
			/** Mã định danh duy nhất cho trang web được liên kết với liên kết web. */
			readonly mspp_pageid: string;
			/** Mã định danh duy nhất cho liên kết web chính được liên kết với liên kết web. */
			readonly mspp_parentweblinkid: string;
			/** Mã định danh duy nhất cho trạng thái phát hành được liên kết với liên kết web. */
			readonly mspp_publishingstateid: string;
			readonly mspp_robotsfollowlink: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_weblinkId: string;
			/** Mã định danh duy nhất cho bộ liên kết web được liên kết với liên kết web. */
			readonly mspp_weblinksetid: string;
			/** Trạng thái của liên kết web */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của liên kết web */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_weblink {
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