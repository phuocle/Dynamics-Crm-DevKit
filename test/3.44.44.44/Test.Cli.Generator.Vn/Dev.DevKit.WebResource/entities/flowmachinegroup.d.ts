//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class flowmachinegroupApi {
		/**
		* DynamicsCrm.DevKit flowmachinegroupApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.flowmachinegroup.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả về Nhóm máy trong dòng quy trình này */
		Description: string;
		/** Thiết đặt cho việc tham gia miền của các máy trong nhóm này. */
		DomainSetting: OptionSet.flowmachinegroup.DomainSetting;
		/** Chỉ sử dụng nội bộ. */
		FlowGroupType: OptionSet.flowmachinegroup.FlowGroupType;
		/** Mã định danh duy nhất của phiên bản thực thể */
		readonly flowmachinegroupId: string;
		/** Mã định danh duy nhất cho Hình ảnh máy trong dòng quy trình được liên kết với Nhóm máy trong dòng quy trình. */
		flowmachineimage: string;
		/** Mã định danh duy nhất cho Mạng máy trong dòng quy trình được liên kết với Nhóm máy trong dòng quy trình. */
		flowmachinenetwork: string;
		/** Chỉ sử dụng nội bộ. */
		GroupMetadata: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Ngày tạo khóa chính của nhóm. */
		KeyCreationDate_TimezoneDateAndTime: Date;
		/** Thời kì gia hạn để các máy và kết nối cập nhật trước khi xoay vòng chứng chỉ. Tính theo phút. */
		KeyExpiryGracePeriod: number;
		KeyValidityPeriod: number;
		/** Loại quản lý. */
		ManagementType: OptionSet.flowmachinegroup.ManagementType;
		/** Số lượng máy được quản lý tối đa. Chỉ sử dụng cho các nhóm máy được quản lý. */
		MaxManagedMachineCount: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên thực thể tùy chỉnh. */
		name: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Người dùng đã khởi tạo việc thay đổi mật khẩu lần gần nhất. */
		PasswordChangedBy: string;
		/** Ngày thay đổi mật khẩu gần nhất. */
		PasswordChangedDate_UtcDateAndTime: Date;
		/** Cho biết loại hàng đợi ưa thích trong một nhóm máy nhất định */
		PreferredQueuingType: OptionSet.flowmachinegroup.PreferredQueuingType;
		/** Chỉ sử dụng nội bộ */
		PrimaryKeyPackage: string;
		/** Chỉ sử dụng nội bộ. */
		PrimaryPublicKey: string;
		ProvisioningError: string;
		/** Trạng thái cung cấp của nhóm máy được quản lý. */
		ProvisioningState: OptionSet.flowmachinegroup.ProvisioningState;
		/** Người dùng đã khởi tạo việc xoay vòng khóa nhóm. */
		RotationStartedBy: string;
		/** Chỉ sử dụng nội bộ. */
		SecondaryKeyPackage: string;
		/** Chỉ sử dụng nội bộ. */
		SecondaryPublicKey: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Nhóm máy trong dòng quy trình */
		statecode: OptionSet.flowmachinegroup.statecode;
		/** Lý do dẫn đến trạng thái của Nhóm máy trong dòng quy trình */
		statuscode: OptionSet.flowmachinegroup.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Cho biết liệu chúng tôi có cố gắng sử dụng lại các phiên Windows không mở khóa hay không. Giá trị mặc định là Không. */
		trytoreusewindowssession: boolean;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả về Nhóm máy trong dòng quy trình này */
			readonly Description: string;
			/** Thiết đặt cho việc tham gia miền của các máy trong nhóm này. */
			readonly DomainSetting: string;
			/** Chỉ sử dụng nội bộ. */
			readonly FlowGroupType: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly flowmachinegroupId: string;
			/** Mã định danh duy nhất cho Hình ảnh máy trong dòng quy trình được liên kết với Nhóm máy trong dòng quy trình. */
			readonly flowmachineimage: string;
			/** Mã định danh duy nhất cho Mạng máy trong dòng quy trình được liên kết với Nhóm máy trong dòng quy trình. */
			readonly flowmachinenetwork: string;
			/** Chỉ sử dụng nội bộ. */
			readonly GroupMetadata: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Ngày tạo khóa chính của nhóm. */
			readonly KeyCreationDate_TimezoneDateAndTime: string;
			/** Thời kì gia hạn để các máy và kết nối cập nhật trước khi xoay vòng chứng chỉ. Tính theo phút. */
			readonly KeyExpiryGracePeriod: string;
			readonly KeyValidityPeriod: string;
			/** Loại quản lý. */
			readonly ManagementType: string;
			/** Số lượng máy được quản lý tối đa. Chỉ sử dụng cho các nhóm máy được quản lý. */
			readonly MaxManagedMachineCount: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên thực thể tùy chỉnh. */
			readonly name: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Người dùng đã khởi tạo việc thay đổi mật khẩu lần gần nhất. */
			readonly PasswordChangedBy: string;
			/** Ngày thay đổi mật khẩu gần nhất. */
			readonly PasswordChangedDate_UtcDateAndTime: string;
			/** Cho biết loại hàng đợi ưa thích trong một nhóm máy nhất định */
			readonly PreferredQueuingType: string;
			/** Chỉ sử dụng nội bộ */
			readonly PrimaryKeyPackage: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PrimaryPublicKey: string;
			readonly ProvisioningError: string;
			/** Trạng thái cung cấp của nhóm máy được quản lý. */
			readonly ProvisioningState: string;
			/** Người dùng đã khởi tạo việc xoay vòng khóa nhóm. */
			readonly RotationStartedBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SecondaryKeyPackage: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SecondaryPublicKey: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Nhóm máy trong dòng quy trình */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Nhóm máy trong dòng quy trình */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Cho biết liệu chúng tôi có cố gắng sử dụng lại các phiên Windows không mở khóa hay không. Giá trị mặc định là Không. */
			readonly trytoreusewindowssession: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowmachinegroup {
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
		enum DomainSetting {
			/** 1 */
			Da_tham_gia_AAD,
			/** 0 */
			Khong_co
		}
		enum FlowGroupType {
			/** 545940000 */
			Khong_dung_khoa,
			/** 545940002 */
			Mac_dinh,
			/** 545940001 */
			Tieu_chuan
		}
		enum ManagementType {
			/** 1 */
			Duoc_quan_ly,
			/** 0 */
			Khach_hang
		}
		enum PreferredQueuingType {
			/** 1 */
			ExtendedQueuePrioritization,
			/** 0 */
			FIFO
		}
		enum ProvisioningState {
			/** 2 */
			Da_cung_cap,
			/** 0 */
			Da_tao,
			/** 1 */
			Dang_cung_cap,
			/** 3 */
			Loi
		}
		enum statecode {
			/** 2 */
			Bao_tri,
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 6 */
			Da_cach_ly,
			/** 1 */
			Hien_hoat,
			/** 7 */
			HmgCmkOperation,
			/** 5 */
			HmgIslandMove,
			/** 4 */
			KeyExpired,
			/** 2 */
			Khong_hoat_dong,
			/** 3 */
			ManualMaintenance
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