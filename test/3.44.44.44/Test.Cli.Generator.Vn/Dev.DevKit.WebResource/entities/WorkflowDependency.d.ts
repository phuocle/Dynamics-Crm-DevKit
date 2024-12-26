//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WorkflowDependencyApi {
		/**
		* DynamicsCrm.DevKit WorkflowDependencyApi
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
		/** Mã định danh duy nhất của người dùng đã tạo quan hệ phụ thuộc quy trình. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo quan hệ phụ thuộc quy trình. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo quan hệ phụ thuộc quy trình. */
		readonly CreatedOnBehalfBy: string;
		/** Tên của thực thể đã dùng trong quy trình. */
		CustomEntityName: string;
		/** Tên của thuộc tính đã dùng trong quy trình. */
		DependentAttributeName: string;
		/** Tên của thực thể đã dùng trong quy trình. */
		DependentEntityName: string;
		/** Danh sách các thuộc tính được phân tách bằng dấu phẩy sẽ được chuyển đến phiên bản quy trình. */
		EntityAttributes: string;
		/** Mã định danh duy nhất của người dùng sửa đổi quan hệ phụ thuộc quy trình lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi quan hệ phụ thuộc quy trình lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa quan hệ phụ thuộc quy trình lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu quan hệ phụ thuộc quy trình. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu quan hệ phụ thuộc quy trình. */
		readonly OwningUser: string;
		/** Tên của tham số quy trình. */
		ParameterName: string;
		/** Tên hoàn toàn hợp lệ của loại CRL của tham số cục bộ. */
		ParameterType: string;
		/** Thuộc tính của thực thể chính chỉ định thực thể liên quan. */
		RelatedAttributeName: string;
		/** Tên của thực thể liên quan. */
		RelatedEntityName: string;
		/** Mã định danh duy nhất của thông báo SDK. */
		SdkMessageId: string;
		/** Loại quan hệ phụ thuộc quy trình. */
		Type: OptionSet.WorkflowDependency.Type;
		readonly VersionNumber: number;
		/** Mã định danh duy nhất của quan hệ phụ thuộc quy trình. */
		WorkflowDependencyId: string;
		/** Mã định danh duy nhất của quy trình liên kết với quan hệ phụ thuộc. */
		WorkflowId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo quan hệ phụ thuộc quy trình. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo quan hệ phụ thuộc quy trình. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo quan hệ phụ thuộc quy trình. */
			readonly CreatedOnBehalfBy: string;
			/** Tên của thực thể đã dùng trong quy trình. */
			readonly CustomEntityName: string;
			/** Tên của thuộc tính đã dùng trong quy trình. */
			readonly DependentAttributeName: string;
			/** Tên của thực thể đã dùng trong quy trình. */
			readonly DependentEntityName: string;
			/** Danh sách các thuộc tính được phân tách bằng dấu phẩy sẽ được chuyển đến phiên bản quy trình. */
			readonly EntityAttributes: string;
			/** Mã định danh duy nhất của người dùng sửa đổi quan hệ phụ thuộc quy trình lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi quan hệ phụ thuộc quy trình lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa quan hệ phụ thuộc quy trình lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu quan hệ phụ thuộc quy trình. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu quan hệ phụ thuộc quy trình. */
			readonly OwningUser: string;
			/** Tên của tham số quy trình. */
			readonly ParameterName: string;
			/** Tên hoàn toàn hợp lệ của loại CRL của tham số cục bộ. */
			readonly ParameterType: string;
			/** Thuộc tính của thực thể chính chỉ định thực thể liên quan. */
			readonly RelatedAttributeName: string;
			/** Tên của thực thể liên quan. */
			readonly RelatedEntityName: string;
			/** Mã định danh duy nhất của thông báo SDK. */
			readonly SdkMessageId: string;
			/** Loại quan hệ phụ thuộc quy trình. */
			readonly Type: string;
			readonly VersionNumber: string;
			/** Mã định danh duy nhất của quan hệ phụ thuộc quy trình. */
			readonly WorkflowDependencyId: string;
			/** Mã định danh duy nhất của quy trình liên kết với quan hệ phụ thuộc. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace WorkflowDependency {
		enum Type {
			/** 1 */
			Bo_duoi_sdk,
			/** 7 */
			Dinh_nghia_thuc_the_tuy_chinh_ma_quy_trinh_lam_viec_phu_thuoc_vao_do,
			/** 8 */
			Dinh_nghia_thuoc_tinh_ma_quy_trinh_lam_viec_phu_thuoc_vao_do,
			/** 2 */
			Tham_so_cuc_bo,
			/** 3 */
			Thuc_the_chinh,
			/** 5 */
			Thuc_the_chinh_sau_thao_tac_SDK,
			/** 4 */
			Thuc_the_chinh_truoc_thao_tac_SDK,
			/** 9 */
			Thuc_the_doi_so_ma_quy_trinh_lam_viec_phu_thuoc_vao_do,
			/** 6 */
			Thuc_the_lien_quan
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