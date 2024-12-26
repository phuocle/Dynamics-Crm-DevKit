//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Phần nội dung của thông báo */
			Body: DevKit.Controls.String;
			/** Dữ liệu tùy chỉnh cho thông báo có thể được thẻ thông báo sử dụng */
			Data: DevKit.Controls.String;
			IconType: DevKit.Controls.OptionSet;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			/** Mức ưu tiên của thông báo */
			Priority: DevKit.Controls.OptionSet;
			/** Tiêu đề cho thông báo */
			Title: DevKit.Controls.String;
			/** Loại hành vi ngắn cho thông báo */
			ToastType: DevKit.Controls.OptionSet;
			/** Sau số giây được chỉ định, thông báo sẽ bị xóa */
			TTLInSeconds: DevKit.Controls.Integer;
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
	class appnotificationApi {
		/**
		* DynamicsCrm.DevKit appnotificationApi
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
		/** Trường này không được sử dụng */
		AppModuleId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		appnotificationId: string;
		/** Phần nội dung của thông báo */
		Body: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Dữ liệu tùy chỉnh cho thông báo có thể được thẻ thông báo sử dụng */
		Data: string;
		IconType: OptionSet.appnotification.IconType;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Phân vùng sẽ dựa trên chủ sở hữu và bạn nên chỉ định trường này cho tất cả các hoạt động vì lý do hiệu suất */
		PartitionId: string;
		/** Mức ưu tiên của thông báo */
		Priority: OptionSet.appnotification.Priority;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tiêu đề cho thông báo */
		Title: string;
		/** Loại hành vi ngắn cho thông báo */
		ToastType: OptionSet.appnotification.ToastType;
		/** Sau số giây được chỉ định, thông báo sẽ bị xóa */
		TTLInSeconds: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Trường này không được sử dụng */
			readonly AppModuleId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly appnotificationId: string;
			/** Phần nội dung của thông báo */
			readonly Body: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Dữ liệu tùy chỉnh cho thông báo có thể được thẻ thông báo sử dụng */
			readonly Data: string;
			readonly IconType: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Phân vùng sẽ dựa trên chủ sở hữu và bạn nên chỉ định trường này cho tất cả các hoạt động vì lý do hiệu suất */
			readonly PartitionId: string;
			/** Mức ưu tiên của thông báo */
			readonly Priority: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tiêu đề cho thông báo */
			readonly Title: string;
			/** Loại hành vi ngắn cho thông báo */
			readonly ToastType: string;
			/** Sau số giây được chỉ định, thông báo sẽ bị xóa */
			readonly TTLInSeconds: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace appnotification {
		enum IconType {
			/** 100000003 */
			Canh_bao,
			/** 100000004 */
			De_cap,
			/** 100000001 */
			Thanh_cong,
			/** 100000002 */
			That_bai,
			/** 100000000 */
			Thong_tin,
			/** 100000005 */
			Tuy_chinh
		}
		enum Priority {
			/** 200000001 */
			Cao,
			/** 200000000 */
			Thong_thuong
		}
		enum ToastType {
			/** 200000001 */
			Da_an,
			/** 200000000 */
			Da_hen_gio
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