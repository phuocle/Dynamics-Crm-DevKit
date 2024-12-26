//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppModuleComponentApi {
		/**
		* DynamicsCrm.DevKit AppModuleComponentApi
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
		/** Mã định danh duy nhất của phiên bản thực thể */
		AppModuleComponentId: string;
		/** Mã định danh duy nhất của Thành phần Ứng dụng được sử dụng khi đồng bộ hóa các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
		AppModuleComponentIdUnique: string;
		/** ID Duy nhất của Mô-đun Ứng dụng */
		AppModuleIdUnique: string;
		/** Mã loại đối tượng của thành phần. */
		ComponentType: OptionSet.AppModuleComponent.ComponentType;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tỷ giá của loại tiền được liên kết với Thành phần Ứng dụng theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Phiên bản trong đó bản ghi thành phần ứng dụng được giới thiệu. */
		IntroducedVersion: string;
		/** Là mặc định */
		IsDefault: boolean;
		/** Là Siêu dữ liệu */
		IsMetadata: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** ID Đối tượng */
		ObjectId: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** ID chính của thành phần phụ, không phải là thành phần gốc */
		RootAppModuleComponentId: string;
		/** Cho biết hành vi bao gồm của thành phần gốc. */
		RootComponentBehavior: OptionSet.AppModuleComponent.RootComponentBehavior;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly AppModuleComponentId: string;
			/** Mã định danh duy nhất của Thành phần Ứng dụng được sử dụng khi đồng bộ hóa các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
			readonly AppModuleComponentIdUnique: string;
			/** ID Duy nhất của Mô-đun Ứng dụng */
			readonly AppModuleIdUnique: string;
			/** Mã loại đối tượng của thành phần. */
			readonly ComponentType: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tỷ giá của loại tiền được liên kết với Thành phần Ứng dụng theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Phiên bản trong đó bản ghi thành phần ứng dụng được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Là mặc định */
			readonly IsDefault: string;
			/** Là Siêu dữ liệu */
			readonly IsMetadata: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** ID Đối tượng */
			readonly ObjectId: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** ID chính của thành phần phụ, không phải là thành phần gốc */
			readonly RootAppModuleComponentId: string;
			/** Cho biết hành vi bao gồm của thành phần gốc. */
			readonly RootComponentBehavior: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModuleComponent {
		enum ComponentType {
			/** 59 */
			Bieu_do,
			/** 60 */
			Bieu_mau,
			/** 26 */
			Dang_xem,
			/** 29 */
			Dong_quy_trinh_cong_viec,
			/** 48 */
			Lenh_Ruy_bang_cho_Bieu_mau_Luoi_luoi_con,
			/** 62 */
			So_do_trang,
			/** 1 */
			Thuc_the
		}
		enum RootComponentBehavior {
			/** 0 */
			Bao_gom_cac_thanh_phan_phu,
			/** 2 */
			Chi_bao_gom_duoi_dang_vo,
			/** 1 */
			Khong_bao_gom_cac_thanh_phan_phu
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