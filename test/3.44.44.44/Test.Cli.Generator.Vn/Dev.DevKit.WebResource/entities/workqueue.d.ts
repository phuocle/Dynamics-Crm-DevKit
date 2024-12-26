//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class workqueueApi {
		/**
		* DynamicsCrm.DevKit workqueueApi
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
		readonly ComponentState: OptionSet.workqueue.ComponentState;
		/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và thời gian tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Thời gian tồn tại mặc định tính bằng phút của các mục trong hàng đợi công việc khi được thêm vào hàng đợi công việc. */
		defaultitemtimetoliveinminutes: number;
		/** Mô tả hàng đợi công việc. */
		description: string;
		/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Trường sơ đồ đầu vào chứa sơ đồ đầu vào dự kiến ​​được sử dụng để xác thực đầu vào tại thời điểm xếp hàng. */
		inputschema: string;
		/** Loại sơ đồ đầu vào cho phép xác thực trường đầu vào tại thời điểm xếp hàng đối với một sơ đồ cụ thể. */
		inputschematype: OptionSet.workqueue.inputschematype;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Số lần tối đa có thể sắp lại hàng đợi cho một mục. */
		itemmaxrequeuecount: number;
		/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của hàng đợi công việc. */
		name: string;
		/** Ngày và thời gian di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Loại ưu tiên này xác định thứ tự chọn và xử lý cho các mục trong hàng đợi công việc trong một hàng đợi công việc. */
		prioritytype: OptionSet.workqueue.prioritytype;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của hàng đợi công việc. */
		statecode: OptionSet.workqueue.statecode;
		/** Lý do dẫn đến trạng thái của hàng đợi công việc */
		statuscode: OptionSet.workqueue.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Mã định danh duy nhất cho phiên bản thực thể. */
		workqueueId: string;
		workqueuekey: string;
		/** Loại hàng đợi công việc cho phép xử lý hành vi cụ thể hơn cho hàng đợi công việc. */
		WorkQueueType: OptionSet.workqueue.WorkQueueType;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và thời gian tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Thời gian tồn tại mặc định tính bằng phút của các mục trong hàng đợi công việc khi được thêm vào hàng đợi công việc. */
			readonly defaultitemtimetoliveinminutes: string;
			/** Mô tả hàng đợi công việc. */
			readonly description: string;
			/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Trường sơ đồ đầu vào chứa sơ đồ đầu vào dự kiến ​​được sử dụng để xác thực đầu vào tại thời điểm xếp hàng. */
			readonly inputschema: string;
			/** Loại sơ đồ đầu vào cho phép xác thực trường đầu vào tại thời điểm xếp hàng đối với một sơ đồ cụ thể. */
			readonly inputschematype: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Số lần tối đa có thể sắp lại hàng đợi cho một mục. */
			readonly itemmaxrequeuecount: string;
			/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của hàng đợi công việc. */
			readonly name: string;
			/** Ngày và thời gian di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Loại ưu tiên này xác định thứ tự chọn và xử lý cho các mục trong hàng đợi công việc trong một hàng đợi công việc. */
			readonly prioritytype: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của hàng đợi công việc. */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của hàng đợi công việc */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Mã định danh duy nhất cho phiên bản thực thể. */
			readonly workqueueId: string;
			readonly workqueuekey: string;
			/** Loại hàng đợi công việc cho phép xử lý hành vi cụ thể hơn cho hàng đợi công việc. */
			readonly WorkQueueType: string;
		}
	}
}
declare namespace OptionSet {
	namespace workqueue {
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
		enum inputschematype {
			/** 1 */
			JSON,
			/** 0 */
			Khong_co_so_do,
			/** 2 */
			Xml
		}
		enum prioritytype {
			/** 0 */
			Vao_truoc_ra_truoc
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 3 */
			Da_tam_dung,
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
		}
		enum WorkQueueType {
			/** 1 */
			Hang_doi_chay,
			/** 0 */
			Hang_doi_cong_viec
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