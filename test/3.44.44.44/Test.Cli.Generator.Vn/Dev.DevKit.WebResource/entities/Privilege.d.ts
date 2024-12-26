//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PrivilegeApi {
		/**
		* DynamicsCrm.DevKit PrivilegeApi
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
		/** Quyền mà người dùng có đối với phiên bản thực thể. */
		AccessRight: number;
		/** Thông tin chỉ định quyền áp dụng cho người dùng, nhóm của người dùng hoặc đối tượng mà người dùng chia sẻ. */
		CanBeBasic: boolean;
		/** Thông tin chỉ định quyền áp dụng cho bơn vị kinh doanh cấp dưới của bơn vị kinh doanh liên kết với người dùng. */
		CanBeDeep: boolean;
		/** Thông tin chỉ định đặc quyền áp dụng cho tham chiếu cục bộ của bên ngoài. */
		CanBeEntityReference: boolean;
		/** Thông tin chỉ định quyền áp dụng cho toàn bộ tổ chức. */
		CanBeGlobal: boolean;
		/** Thông tin chỉ định quyền áp dụng cho bơn vị kinh doanh của người dùng. */
		CanBeLocal: boolean;
		/** Thông tin chỉ định đặc quyền áp dụng cho tham chiếu cha của bên ngoài. */
		CanBeParentEntityReference: boolean;
		/** Information that specifies whether the privilege applies to the record filters. */
		CanBeRecordFilter: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.Privilege.ComponentState;
		/** Phiên bản có thành phần được đưa vào. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Chỉ định khả năng tắt quyền. */
		readonly IsDisabledWhenIntegrated: boolean;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Tên quyền. */
		Name: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của quyền. */
		PrivilegeId: string;
		/** Mã định danh duy nhất của Đặc quyền được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics CRM dành cho Outlook */
		PrivilegeRowId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Quyền mà người dùng có đối với phiên bản thực thể. */
			readonly AccessRight: string;
			/** Thông tin chỉ định quyền áp dụng cho người dùng, nhóm của người dùng hoặc đối tượng mà người dùng chia sẻ. */
			readonly CanBeBasic: string;
			/** Thông tin chỉ định quyền áp dụng cho bơn vị kinh doanh cấp dưới của bơn vị kinh doanh liên kết với người dùng. */
			readonly CanBeDeep: string;
			/** Thông tin chỉ định đặc quyền áp dụng cho tham chiếu cục bộ của bên ngoài. */
			readonly CanBeEntityReference: string;
			/** Thông tin chỉ định quyền áp dụng cho toàn bộ tổ chức. */
			readonly CanBeGlobal: string;
			/** Thông tin chỉ định quyền áp dụng cho bơn vị kinh doanh của người dùng. */
			readonly CanBeLocal: string;
			/** Thông tin chỉ định đặc quyền áp dụng cho tham chiếu cha của bên ngoài. */
			readonly CanBeParentEntityReference: string;
			/** Information that specifies whether the privilege applies to the record filters. */
			readonly CanBeRecordFilter: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Phiên bản có thành phần được đưa vào. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Chỉ định khả năng tắt quyền. */
			readonly IsDisabledWhenIntegrated: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Tên quyền. */
			readonly Name: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của quyền. */
			readonly PrivilegeId: string;
			/** Mã định danh duy nhất của Đặc quyền được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics CRM dành cho Outlook */
			readonly PrivilegeRowId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Privilege {
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