//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {

		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class SharePointDataApi {
		/**
		* DynamicsCrm.DevKit SharePointDataApi
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
		/** Mã định danh duy nhất của người dùng đã tạo Dữ liệu SharePoint. */
		readonly CreatedBy: string;
		/** Ngày và giờ đã tạo Dữ liệu SharePoint. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo Dữ liệu SharePoint. */
		readonly CreatedOnBehalfBy: string;
		/** Dữ liệu SharePoint đã xếp theo thứ tự */
		Data: string;
		/** Hợp lệ */
		readonly IsValid: boolean;
		/** Mã định danh duy nhất của người dùng đã tạo Dữ liệu SharePoint. */
		readonly Location: string;
		/** Mã định danh duy nhất của người dùng sửa đổi Dữ liệu SharePoint lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi lần cuối Dữ liệu SharePoint. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi Dữ liệu SharePoint lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã thông báo trang tiếp của tài liệu SharePoint. */
		readonly NextPageToken: string;
		/** Mã định danh duy nhất của tổ chức liên kết với Dữ liệu SharePoint. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		readonly PageNumber: number;
		/** Mã thông báo trang trước của tài liệu SharePoint. */
		readonly PreviousPageToken: string;
		/** Id đối tượng liên quan. */
		readonly RegardingObjectId: string;
		/** Mã định danh duy nhất của bản ghi dữ liệu SharePoint. */
		SharePointDataId: string;
		/** Mã định danh duy nhất của người dùng đã tạo dữ liệu SharePoint. */
		readonly UserId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo Dữ liệu SharePoint. */
			readonly CreatedBy: string;
			/** Ngày và giờ đã tạo Dữ liệu SharePoint. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo Dữ liệu SharePoint. */
			readonly CreatedOnBehalfBy: string;
			/** Dữ liệu SharePoint đã xếp theo thứ tự */
			readonly Data: string;
			/** Hợp lệ */
			readonly IsValid: string;
			/** Mã định danh duy nhất của người dùng đã tạo Dữ liệu SharePoint. */
			readonly Location: string;
			/** Mã định danh duy nhất của người dùng sửa đổi Dữ liệu SharePoint lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi lần cuối Dữ liệu SharePoint. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi Dữ liệu SharePoint lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã thông báo trang tiếp của tài liệu SharePoint. */
			readonly NextPageToken: string;
			/** Mã định danh duy nhất của tổ chức liên kết với Dữ liệu SharePoint. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly PageNumber: string;
			/** Mã thông báo trang trước của tài liệu SharePoint. */
			readonly PreviousPageToken: string;
			/** Id đối tượng liên quan. */
			readonly RegardingObjectId: string;
			/** Mã định danh duy nhất của bản ghi dữ liệu SharePoint. */
			readonly SharePointDataId: string;
			/** Mã định danh duy nhất của người dùng đã tạo dữ liệu SharePoint. */
			readonly UserId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointData {
		enum RegardingObjectTypeCode {
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