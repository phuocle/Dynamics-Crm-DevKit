//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SolutionComponentDefinitionApi {
		/**
		* DynamicsCrm.DevKit SolutionComponentDefinitionApi
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
		/** Mã định danh Boolean cho việc dùng tính năng xóa các lớp cơ sở. */
		AllowDeleteBaseSolutionRowAndFakeDelete: boolean;
		/** Liệu thành phần này có cho phép Ghi đè Tùy chỉnh khi cập nhật giải pháp được quản lý hay không */
		AllowOverwriteCustomizations: boolean;
		/** Mã định danh Boolean cho một hàng được đánh dấu là đã xóa logic trong giải pháp Hiện hoạt và cần được tạo ngược trở lại */
		AllowRecreateForLogicallyDeletedRow: boolean;
		/** Cờ được dùng để cho biết liệu thành phần này có luôn loại bỏ các tùy chỉnh hiện hoạt khi dỡ cài đặt hay không */
		AlwaysRemoveActiveCustomizationsOnUninstall: boolean;
		/** Cờ cho biết liệu có thể thêm thành phần phụ trực tiếp vào bảng Thành phần Giải pháp không */
		CanBeAddedToSolutionComponents: boolean;
		/** Liệu thành phần này có được ẩn bằng cách dùng thuộc tính được quản lý IsHidden hay không */
		CanBeHidden: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SolutionComponentDefinition.ComponentState;
		/** Đường dẫn tới nút XML của thành phần */
		ComponentXPath: string;
		/** Cờ cho biết liệu thành phần này có dùng hậu duệ của nó làm thành phần có thể xem được hay không */
		DescendentIsViewableComponent: boolean;
		/** Tên Thuộc tính Thành phần Mẹ của Nhóm */
		GroupParentComponentAttributeName: string;
		/** Loại Thành phần Mẹ của Nhóm */
		GroupParentComponentType: number;
		/** Boolean cho biết liệu thành phần có thuộc tính có thể đặt tên lại hay không */
		HasIsRenameableAttribute: boolean;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Phiên bản có thành phần được đưa vào. */
		IntroducedVersion: string;
		/** Quan hệ phụ thuộc bị tắt đối với thành phần */
		IsDependencyDisabled: boolean;
		/** Boolean cho biết liệu thành phần có bật giao diện người dùng không */
		IsDisplayable: boolean;
		/** Boolean cho biết liệu thành phần có thuộc tính có quản lý được không */
		IsManaged: boolean;
		/** Liệu thành phần này là một thành phần có thể hợp nhất được, hay là một phần của một thành phần có thể hợp nhất được */
		IsMergeable: boolean;
		/** Mã định danh Boolean cho thành phần siêu dữ liệu */
		IsMetadata: boolean;
		/** Liệu có thể xem được thành phần này trong SDK và UI hay không */
		IsViewable: boolean;
		/** Mã loại Nhãn */
		LabelTypeCode: number;
		/** Tên */
		Name: string;
		/** Mã loại Đối tượng */
		ObjectTypeCode: number;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Tên thuộc tính của thuộc tính mẹ */
		ParentAttributeName: string;
		/** Tên logic của Thực thể Thành phần */
		PrimaryEntityName: string;
		/** Hành vi Loại bỏ các Tùy chỉnh Hiện hoạt. */
		RemoveActiveCustomizationsBehavior: OptionSet.SolutionComponentDefinition.RemoveActiveCustomizationsBehavior;
		/** Tên Loại Thành phần Giải pháp Gốc */
		RootAttributeName: string;
		/** Loại Thành phần Giải pháp Gốc */
		RootComponent: number;
		/** Mã định danh duy nhất của định nghĩa thành phần giải pháp */
		SolutionComponentDefinitionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SolutionComponentDefinitionIdUnique: string;
		/** Loại Thành phần Giải pháp */
		SolutionComponentType: number;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh Boolean để bắt buộc xóa đối với cập nhật giải pháp. */
		UseForceDeleteForSolutionUpdate: boolean;
		/** Mã định danh Boolean để buộc luôn cập nhật. */
		UseForceUpdateAlways: boolean;
		/** Mã định danh Boolean cho việc dùng các hàng giá trị canh. */
		UseSentinelRowInBaseSolution: boolean;
		/** Loại thành phần có thể là hậu duệ có thể xem được */
		ViewableDescendentComponentType: number;
		readonly FormattedValue: {
			/** Mã định danh Boolean cho việc dùng tính năng xóa các lớp cơ sở. */
			readonly AllowDeleteBaseSolutionRowAndFakeDelete: string;
			/** Liệu thành phần này có cho phép Ghi đè Tùy chỉnh khi cập nhật giải pháp được quản lý hay không */
			readonly AllowOverwriteCustomizations: string;
			/** Mã định danh Boolean cho một hàng được đánh dấu là đã xóa logic trong giải pháp Hiện hoạt và cần được tạo ngược trở lại */
			readonly AllowRecreateForLogicallyDeletedRow: string;
			/** Cờ được dùng để cho biết liệu thành phần này có luôn loại bỏ các tùy chỉnh hiện hoạt khi dỡ cài đặt hay không */
			readonly AlwaysRemoveActiveCustomizationsOnUninstall: string;
			/** Cờ cho biết liệu có thể thêm thành phần phụ trực tiếp vào bảng Thành phần Giải pháp không */
			readonly CanBeAddedToSolutionComponents: string;
			/** Liệu thành phần này có được ẩn bằng cách dùng thuộc tính được quản lý IsHidden hay không */
			readonly CanBeHidden: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Đường dẫn tới nút XML của thành phần */
			readonly ComponentXPath: string;
			/** Cờ cho biết liệu thành phần này có dùng hậu duệ của nó làm thành phần có thể xem được hay không */
			readonly DescendentIsViewableComponent: string;
			/** Tên Thuộc tính Thành phần Mẹ của Nhóm */
			readonly GroupParentComponentAttributeName: string;
			/** Loại Thành phần Mẹ của Nhóm */
			readonly GroupParentComponentType: string;
			/** Boolean cho biết liệu thành phần có thuộc tính có thể đặt tên lại hay không */
			readonly HasIsRenameableAttribute: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản có thành phần được đưa vào. */
			readonly IntroducedVersion: string;
			/** Quan hệ phụ thuộc bị tắt đối với thành phần */
			readonly IsDependencyDisabled: string;
			/** Boolean cho biết liệu thành phần có bật giao diện người dùng không */
			readonly IsDisplayable: string;
			/** Boolean cho biết liệu thành phần có thuộc tính có quản lý được không */
			readonly IsManaged: string;
			/** Liệu thành phần này là một thành phần có thể hợp nhất được, hay là một phần của một thành phần có thể hợp nhất được */
			readonly IsMergeable: string;
			/** Mã định danh Boolean cho thành phần siêu dữ liệu */
			readonly IsMetadata: string;
			/** Liệu có thể xem được thành phần này trong SDK và UI hay không */
			readonly IsViewable: string;
			/** Mã loại Nhãn */
			readonly LabelTypeCode: string;
			/** Tên */
			readonly Name: string;
			/** Mã loại Đối tượng */
			readonly ObjectTypeCode: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Tên thuộc tính của thuộc tính mẹ */
			readonly ParentAttributeName: string;
			/** Tên logic của Thực thể Thành phần */
			readonly PrimaryEntityName: string;
			/** Hành vi Loại bỏ các Tùy chỉnh Hiện hoạt. */
			readonly RemoveActiveCustomizationsBehavior: string;
			/** Tên Loại Thành phần Giải pháp Gốc */
			readonly RootAttributeName: string;
			/** Loại Thành phần Giải pháp Gốc */
			readonly RootComponent: string;
			/** Mã định danh duy nhất của định nghĩa thành phần giải pháp */
			readonly SolutionComponentDefinitionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SolutionComponentDefinitionIdUnique: string;
			/** Loại Thành phần Giải pháp */
			readonly SolutionComponentType: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh Boolean để bắt buộc xóa đối với cập nhật giải pháp. */
			readonly UseForceDeleteForSolutionUpdate: string;
			/** Mã định danh Boolean để buộc luôn cập nhật. */
			readonly UseForceUpdateAlways: string;
			/** Mã định danh Boolean cho việc dùng các hàng giá trị canh. */
			readonly UseSentinelRowInBaseSolution: string;
			/** Loại thành phần có thể là hậu duệ có thể xem được */
			readonly ViewableDescendentComponentType: string;
		}
	}
}
declare namespace OptionSet {
	namespace SolutionComponentDefinition {
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
		enum RemoveActiveCustomizationsBehavior {
			/** 0 */
			Khong,
			/** 1 */
			Khong_phan_tang,
			/** 2 */
			Phan_tang
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