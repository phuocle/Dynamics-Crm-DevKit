//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class flowmachineApi {
		/**
		* DynamicsCrm.DevKit flowmachineApi
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
		/** Phiên bản cài đặt trên máy */
		AgentVersion: string;
		/** Chỉ sử dụng nội bộ. */
		ConnectivityConfiguration: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả về Máy trong dòng quy trình. */
		Description: string;
		/** Nhóm của Máy trong dòng quy trình này. */
		FlowMachineGroupId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		readonly flowmachineId: string;
		/** Mã định danh duy nhất cho Phiên bản hình ảnh máy trong dòng quy trình được liên kết với Máy trong dòng quy trình. */
		FlowMachineImageVersionId: string;
		/** Mã định danh duy nhất cho Mạng máy trong dòng quy trình được liên kết với Máy trong dòng quy trình. */
		FlowMachineNetworkId: string;
		/** Lỗi máy trong dòng quy trình được lưu trữ. */
		HostedMachineError: string;
		/** Trạng thái của máy nếu máy đó được lưu trữ. */
		HostedMachineState: OptionSet.flowmachine.HostedMachineState;
		/** Loại lưu trữ của máy trong dòng quy trình. */
		HostingType: OptionSet.flowmachine.HostingType;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Trạng thái gửi khóa của nhóm trên máy. */
		KeyDeliveryStatus: OptionSet.flowmachine.KeyDeliveryStatus;
		/** Ngày gửi khóa nhóm mới đây nhất. */
		KeyReceivedDate_UtcDateAndTime: Date;
		/** Ngày gần đây nhất nhận được thông báo hoạt động từ máy. */
		LastHeartbeatDate_UtcDateAndTime: Date;
		/** Cho biết trạng thái hỗ trợ tính năng hình trong hình được biết đến cuối cùng cho bản ghi mục tiêu. Giá trị mặc định là Không xác định. */
		LastKnownPictureInPictureSupport: OptionSet.flowmachine.LastKnownPictureInPictureSupport;
		/** Chỉ sử dụng nội bộ. */
		MachineMetadata: string;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của Máy trong dòng quy trình. */
		name: string;
		/** Ngày và giờ khi máy được gắn cờ là quá công suất. */
		OvercapacitySince_UtcDateAndTime: Date;
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
		/** Số phiên song song tối đa. */
		SessionCapacity: number;
		/** Trạng thái của Máy trong dòng quy trình */
		statecode: OptionSet.flowmachine.statecode;
		/** Lý do dẫn đến trạng thái của Máy trong dòng quy trình */
		statuscode: OptionSet.flowmachine.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Phiên bản cài đặt trên máy */
			readonly AgentVersion: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ConnectivityConfiguration: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả về Máy trong dòng quy trình. */
			readonly Description: string;
			/** Nhóm của Máy trong dòng quy trình này. */
			readonly FlowMachineGroupId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly flowmachineId: string;
			/** Mã định danh duy nhất cho Phiên bản hình ảnh máy trong dòng quy trình được liên kết với Máy trong dòng quy trình. */
			readonly FlowMachineImageVersionId: string;
			/** Mã định danh duy nhất cho Mạng máy trong dòng quy trình được liên kết với Máy trong dòng quy trình. */
			readonly FlowMachineNetworkId: string;
			/** Lỗi máy trong dòng quy trình được lưu trữ. */
			readonly HostedMachineError: string;
			/** Trạng thái của máy nếu máy đó được lưu trữ. */
			readonly HostedMachineState: string;
			/** Loại lưu trữ của máy trong dòng quy trình. */
			readonly HostingType: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Trạng thái gửi khóa của nhóm trên máy. */
			readonly KeyDeliveryStatus: string;
			/** Ngày gửi khóa nhóm mới đây nhất. */
			readonly KeyReceivedDate_UtcDateAndTime: string;
			/** Ngày gần đây nhất nhận được thông báo hoạt động từ máy. */
			readonly LastHeartbeatDate_UtcDateAndTime: string;
			/** Cho biết trạng thái hỗ trợ tính năng hình trong hình được biết đến cuối cùng cho bản ghi mục tiêu. Giá trị mặc định là Không xác định. */
			readonly LastKnownPictureInPictureSupport: string;
			/** Chỉ sử dụng nội bộ. */
			readonly MachineMetadata: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của Máy trong dòng quy trình. */
			readonly name: string;
			/** Ngày và giờ khi máy được gắn cờ là quá công suất. */
			readonly OvercapacitySince_UtcDateAndTime: string;
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
			/** Số phiên song song tối đa. */
			readonly SessionCapacity: string;
			/** Trạng thái của Máy trong dòng quy trình */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Máy trong dòng quy trình */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowmachine {
		enum HostedMachineState {
			/** 1 */
			Da_bat,
			/** 0 */
			Da_tat,
			/** 2 */
			Loi
		}
		enum HostingType {
			/** 1 */
			Duoc_luu_tru,
			/** 0 */
			Khach_hang,
			/** 2 */
			PC_tren_dam_may
		}
		enum KeyDeliveryStatus {
			/** 3 */
			KeyExpired,
			/** 1 */
			Mac_dinh,
			/** 2 */
			PendingNewKey
		}
		enum LastKnownPictureInPictureSupport {
			/** 2 */
			Da_bat,
			/** 1 */
			Da_tat,
			/** 0 */
			Khong_xac_dinh
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
			/** 9 */
			Da_tat,
			/** 10 */
			Dang_cung_cap,
			/** 5 */
			DrainMode,
			/** 1 */
			Hien_hoat,
			/** 13 */
			HostedMachineOvercapacity,
			/** 14 */
			HostedMachineOvercapacityDeleted,
			/** 15 */
			HostedMachineOvercapacityDisabled,
			/** 2 */
			Khong_hoat_dong,
			/** 8 */
			Loi,
			/** 4 */
			ManualMaintenance,
			/** 12 */
			ProvisionedWithError,
			/** 11 */
			RequiresGroupKey,
			/** 3 */
			RequiresReconnection,
			/** 6 */
			Se_xoa,
			/** 7 */
			Tam_thoi
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