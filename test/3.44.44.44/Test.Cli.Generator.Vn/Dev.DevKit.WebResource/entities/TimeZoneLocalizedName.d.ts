//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class TimeZoneLocalizedNameApi {
		/**
		* DynamicsCrm.DevKit TimeZoneLocalizedNameApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo timezonelocalizedname. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của văn hóa có tên UI đã mã hóa. */
		CultureId: number;
		/** Tên múi giờ cho giờ mùa hè. */
		DaylightName: string;
		/** Mã định danh duy nhất của người dùng đã sửa tên đã bản địa múi giờ lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi timezonelocalizedname lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với tên đã bản địa múi giờ. */
		readonly OrganizationId: string;
		/** Tên múi giờ cho giờ chuẩn. */
		StandardName: string;
		/** Mã định danh duy nhất của phiên bản thực thể định nghĩa múi giờ. */
		TimeZoneDefinitionId: string;
		/** Mã định danh duy nhất của phiên bản thực thể. */
		TimeZoneLocalizedNameId: string;
		/** Tên hiển thị duy nhất cho múi giờ trong đăng ký Microsoft Windows. */
		UserInterfaceName: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo timezonelocalizedname. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của văn hóa có tên UI đã mã hóa. */
			readonly CultureId: string;
			/** Tên múi giờ cho giờ mùa hè. */
			readonly DaylightName: string;
			/** Mã định danh duy nhất của người dùng đã sửa tên đã bản địa múi giờ lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi timezonelocalizedname lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với tên đã bản địa múi giờ. */
			readonly OrganizationId: string;
			/** Tên múi giờ cho giờ chuẩn. */
			readonly StandardName: string;
			/** Mã định danh duy nhất của phiên bản thực thể định nghĩa múi giờ. */
			readonly TimeZoneDefinitionId: string;
			/** Mã định danh duy nhất của phiên bản thực thể. */
			readonly TimeZoneLocalizedNameId: string;
			/** Tên hiển thị duy nhất cho múi giờ trong đăng ký Microsoft Windows. */
			readonly UserInterfaceName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TimeZoneLocalizedName {
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