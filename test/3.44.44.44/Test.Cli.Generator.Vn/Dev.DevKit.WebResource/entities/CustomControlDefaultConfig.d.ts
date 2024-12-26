//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CustomControlDefaultConfigApi {
		/**
		* DynamicsCrm.DevKit CustomControlDefaultConfigApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.CustomControlDefaultConfig.ComponentState;
		/** Dữ liệu cấu hình kiểm soát tùy chỉnh theo định dạng JSON. */
		ControlDescriptionJson: string;
		/** controlDescriptionXML của cấu hình mặc định của điều khiển tùy chỉnh. */
		ControlDescriptionXML: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của cấu hình mặc định của kiểm soát tùy chỉnh cho Microsoft Dynamics 365. */
		CustomControlDefaultConfigId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly CustomControlDefaultConfigIdUnique: string;
		/** XML sự kiện của cấu hình mặc định của kiểm soát tùy chỉnh. */
		EventsXml: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức được liên kết với tài nguyên web. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số phiên bản Cấu hình Mặc định của Kiểm soát Tùy chỉnh. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Dữ liệu cấu hình kiểm soát tùy chỉnh theo định dạng JSON. */
			readonly ControlDescriptionJson: string;
			/** controlDescriptionXML của cấu hình mặc định của điều khiển tùy chỉnh. */
			readonly ControlDescriptionXML: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của cấu hình mặc định của kiểm soát tùy chỉnh cho Microsoft Dynamics 365. */
			readonly CustomControlDefaultConfigId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly CustomControlDefaultConfigIdUnique: string;
			/** XML sự kiện của cấu hình mặc định của kiểm soát tùy chỉnh. */
			readonly EventsXml: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với tài nguyên web. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số phiên bản Cấu hình Mặc định của Kiểm soát Tùy chỉnh. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomControlDefaultConfig {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
		}
		enum PrimaryEntityTypeCode {
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