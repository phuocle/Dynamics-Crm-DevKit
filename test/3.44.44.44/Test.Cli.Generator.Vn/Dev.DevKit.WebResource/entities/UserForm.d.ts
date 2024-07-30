//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserFormApi {
		/**
		* DynamicsCrm.DevKit UserFormApi
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
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung để mô tả biểu mẫu hoặc bảng thông tin như tiêu chí bộ lọc hoặc khán giả đã dự kiến. */
		Description: string;
		/** Trình bày Json của bố cục biểu mẫu. */
		FormJson: string;
		/** Hiện trình bày XML của bố cục biểu mẫu hoặc bảng thông tin. */
		FormXml: string;
		/** Thông tin chỉ định khả năng sẽ bật bảng thông tin cho máy tính bảng. */
		IsTabletEnabled: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Loại tên mô tả cho biểu mẫu hoặc bảng thông tin. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bảng thông tin. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bảng thông tin. */
		readonly OwningUser: string;
		/** Chọn loại biểu mẫu. */
		Type: OptionSet.UserForm.Type;
		/** Mã định danh duy nhất của bảng thông tin người dùng. */
		UserFormId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung để mô tả biểu mẫu hoặc bảng thông tin như tiêu chí bộ lọc hoặc khán giả đã dự kiến. */
			readonly Description: string;
			/** Trình bày Json của bố cục biểu mẫu. */
			readonly FormJson: string;
			/** Hiện trình bày XML của bố cục biểu mẫu hoặc bảng thông tin. */
			readonly FormXml: string;
			/** Thông tin chỉ định khả năng sẽ bật bảng thông tin cho máy tính bảng. */
			readonly IsTabletEnabled: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Loại tên mô tả cho biểu mẫu hoặc bảng thông tin. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bảng thông tin. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bảng thông tin. */
			readonly OwningUser: string;
			/** Chọn loại biểu mẫu. */
			readonly Type: string;
			/** Mã định danh duy nhất của bảng thông tin người dùng. */
			readonly UserFormId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserForm {
		enum ObjectTypeCode {
		}
		enum Type {
			/** 0 */
			Bang_thong_tin,
			/** 103 */
			Bang_thong_tin_Power_BI
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