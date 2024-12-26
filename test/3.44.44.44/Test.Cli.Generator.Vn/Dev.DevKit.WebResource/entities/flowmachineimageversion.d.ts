//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class flowmachineimageversionApi {
		/**
		* DynamicsCrm.DevKit flowmachineimageversionApi
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
		readonly ComponentState: OptionSet.flowmachineimageversion.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất cho Hình ảnh máy trong dòng quy trình được liên kết với Phiên bản hình ảnh máy trong dòng quy trình. */
		flowmachineimage: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		flowmachineimageversionId: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
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
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Thông tin tham chiếu đến hình ảnh cơ sở, có thể là tài nguyên Azure, URI blob hoặc nguồn lực nội bộ. */
		reference: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Phiên bản hình ảnh máy trong dòng quy trình */
		statecode: OptionSet.flowmachineimageversion.statecode;
		/** Lý do dẫn đến trạng thái của Phiên bản hình ảnh máy trong dòng quy trình */
		statuscode: OptionSet.flowmachineimageversion.statuscode;
		/** Thông báo lỗi phiên bản hình ảnh máy trong dòng quy trình. */
		statuserrormessage: string;
		/** Kịch bản được Phiên bản hình ảnh máy trong dòng quy trình hỗ trợ. */
		SupportedScenario: OptionSet.flowmachineimageversion.SupportedScenario;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Phiên bản của hình ảnh */
		Version: string;
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
			/** Mã định danh duy nhất cho Hình ảnh máy trong dòng quy trình được liên kết với Phiên bản hình ảnh máy trong dòng quy trình. */
			readonly flowmachineimage: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly flowmachineimageversionId: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
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
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Thông tin tham chiếu đến hình ảnh cơ sở, có thể là tài nguyên Azure, URI blob hoặc nguồn lực nội bộ. */
			readonly reference: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Phiên bản hình ảnh máy trong dòng quy trình */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Phiên bản hình ảnh máy trong dòng quy trình */
			readonly statuscode: string;
			/** Thông báo lỗi phiên bản hình ảnh máy trong dòng quy trình. */
			readonly statuserrormessage: string;
			/** Kịch bản được Phiên bản hình ảnh máy trong dòng quy trình hỗ trợ. */
			readonly SupportedScenario: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Phiên bản của hình ảnh */
			readonly Version: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowmachineimageversion {
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
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong,
			/** 3 */
			Loi
		}
		enum SupportedScenario {
			/** 1 */
			HostedMachineGroup,
			/** 3 */
			HostedMachineGroupdAndRpaBox,
			/** 2 */
			RpaBox
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