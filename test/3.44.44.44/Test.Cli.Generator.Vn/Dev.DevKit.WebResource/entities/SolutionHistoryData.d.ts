//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SolutionHistoryDataApi {
		/**
		* DynamicsCrm.DevKit SolutionHistoryDataApi
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
		/** ID Hoạt động. */
		ActivityId: string;
		/** Id Tương quan. */
		CorrelationId: string;
		/** DateTime lúc kết thúc sự kiện giải pháp. */
		EndTime_UtcDateAndTime: Date;
		/** Mã lỗi của thao tác thực hiện trên giải pháp. */
		ErrorCode: number;
		/** Thông báo Ngoại lệ. */
		ExceptionMessage: string;
		/** Ngăn xếp Ngoại lệ. */
		ExceptionStack: string;
		/** Là Giải pháp Được quản lý */
		IsManaged: boolean;
		/** Là giải pháp đã được một phát hành bởi một Nhà phát hành Microsoft. */
		IsMicrosoftPublisher: boolean;
		/** Sự kiện có ghi đè tùy chỉnh không. */
		IsOverwriteCustomizations: boolean;
		/** Là Bản vá Giải pháp */
		IsPatch: boolean;
		/** Thao tác thực hiện trên giải pháp. */
		Operation: OptionSet.SolutionHistoryData.Operation;
		/** Tên của gói. */
		PackageName: string;
		/** Phiên bản của gói. */
		PackageVersion: string;
		/** Tên nhà phát hành của giải pháp. */
		PublisherName: string;
		/** Kết quả thao tác thực hiện trên giải pháp. */
		Result: number;
		/** Mã định danh duy nhất của phiên bản thực thể */
		SolutionHistoryDataId: string;
		/** Giải pháp. */
		SolutionId: string;
		/** Tên giải pháp. */
		SolutionName: string;
		/** Phiên bản Giải pháp. */
		SolutionVersion: string;
		/** DateTime lúc bắt đầu sự kiện giải pháp. */
		StartTime_UtcDateAndTime: Date;
		/** Trạng thái thao tác thực hiện trên giải pháp. */
		Status: OptionSet.SolutionHistoryData.Status;
		/** Thao tác phụ thực hiện trên giải pháp. */
		SubOperation: OptionSet.SolutionHistoryData.SubOperation;
		readonly FormattedValue: {
			/** ID Hoạt động. */
			readonly ActivityId: string;
			/** Id Tương quan. */
			readonly CorrelationId: string;
			/** DateTime lúc kết thúc sự kiện giải pháp. */
			readonly EndTime_UtcDateAndTime: string;
			/** Mã lỗi của thao tác thực hiện trên giải pháp. */
			readonly ErrorCode: string;
			/** Thông báo Ngoại lệ. */
			readonly ExceptionMessage: string;
			/** Ngăn xếp Ngoại lệ. */
			readonly ExceptionStack: string;
			/** Là Giải pháp Được quản lý */
			readonly IsManaged: string;
			/** Là giải pháp đã được một phát hành bởi một Nhà phát hành Microsoft. */
			readonly IsMicrosoftPublisher: string;
			/** Sự kiện có ghi đè tùy chỉnh không. */
			readonly IsOverwriteCustomizations: string;
			/** Là Bản vá Giải pháp */
			readonly IsPatch: string;
			/** Thao tác thực hiện trên giải pháp. */
			readonly Operation: string;
			/** Tên của gói. */
			readonly PackageName: string;
			/** Phiên bản của gói. */
			readonly PackageVersion: string;
			/** Tên nhà phát hành của giải pháp. */
			readonly PublisherName: string;
			/** Kết quả thao tác thực hiện trên giải pháp. */
			readonly Result: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly SolutionHistoryDataId: string;
			/** Giải pháp. */
			readonly SolutionId: string;
			/** Tên giải pháp. */
			readonly SolutionName: string;
			/** Phiên bản Giải pháp. */
			readonly SolutionVersion: string;
			/** DateTime lúc bắt đầu sự kiện giải pháp. */
			readonly StartTime_UtcDateAndTime: string;
			/** Trạng thái thao tác thực hiện trên giải pháp. */
			readonly Status: string;
			/** Thao tác phụ thực hiện trên giải pháp. */
			readonly SubOperation: string;
		}
	}
}
declare namespace OptionSet {
	namespace SolutionHistoryData {
		enum Operation {
			/** 1 */
			Do_cai_dat,
			/** 0 */
			Nhap,
			/** 2 */
			Xuat
		}
		enum Status {
			/** 0 */
			Bat_dau,
			/** 1 */
			Ket_thuc
		}
		enum SubOperation {
			/** 3 */
			Cap_nhat,
			/** 0 */
			Khong_co,
			/** 1 */
			Moi,
			/** 2 */
			Nang_cap,
			/** 4 */
			Xoa
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