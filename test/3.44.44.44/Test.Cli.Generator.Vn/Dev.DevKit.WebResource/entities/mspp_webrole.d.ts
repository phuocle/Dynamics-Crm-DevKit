//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webrole_Information {
		interface tab__DF9D451B_B910_4EF5_BB24_EA08E5441AD5_Sections {
			_5E67BE2F_D70F_47BE_B2BE_4AAA15B945C8: DevKit.Controls.Section;
		}
		interface tab__DF9D451B_B910_4EF5_BB24_EA08E5441AD5 extends DevKit.Controls.ITab {
			Section: tab__DF9D451B_B910_4EF5_BB24_EA08E5441AD5_Sections;
		}
		interface Tabs {
			_DF9D451B_B910_4EF5_BB24_EA08E5441AD5: tab__DF9D451B_B910_4EF5_BB24_EA08E5441AD5;
		}
		interface Body {
			Tab: Tabs;
			mspp_anonymoususersrole: DevKit.Controls.Boolean;
			mspp_authenticatedusersrole: DevKit.Controls.Boolean;
			mspp_description: DevKit.Controls.String;
			/** Tên của thực thể tùy chỉnh. */
			mspp_name: DevKit.Controls.String;
			/** Mã định danh duy nhất cho website được liên kết với vai trò web. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmspp_webrole_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webrole_Information */
		Body: DevKit.Formmspp_webrole_Information.Body;
		/** The Navigation of form mspp_webrole_Information */
		Navigation: DevKit.Formmspp_webrole_Information.Navigation;
		/** The SidePanes of form mspp_webrole_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webroleApi {
		/**
		* DynamicsCrm.DevKit mspp_webroleApi
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
		mspp_anonymoususersrole: boolean;
		mspp_authenticatedusersrole: boolean;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_description: string;
		/** Khóa thay thế không được bản địa hóa để cho phép truy xuất vai trò web cụ thể trong các quy trình làm việc hoặc mã. */
		mspp_key: string;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên của thực thể tùy chỉnh. */
		mspp_name: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_webroleId: string;
		/** Mã định danh duy nhất cho website được liên kết với vai trò web. */
		mspp_websiteid: string;
		/** Trạng thái của vai trò web */
		statecode: OptionSet.mspp_webrole.statecode;
		/** Lý do dẫn đến trạng thái của vai trò web */
		statuscode: OptionSet.mspp_webrole.statuscode;
		readonly FormattedValue: {
			readonly mspp_anonymoususersrole: string;
			readonly mspp_authenticatedusersrole: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			/** Khóa thay thế không được bản địa hóa để cho phép truy xuất vai trò web cụ thể trong các quy trình làm việc hoặc mã. */
			readonly mspp_key: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_name: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_webroleId: string;
			/** Mã định danh duy nhất cho website được liên kết với vai trò web. */
			readonly mspp_websiteid: string;
			/** Trạng thái của vai trò web */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của vai trò web */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webrole {
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