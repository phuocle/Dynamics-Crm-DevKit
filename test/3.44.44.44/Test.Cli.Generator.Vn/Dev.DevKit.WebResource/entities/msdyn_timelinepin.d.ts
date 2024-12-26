//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Tên */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_timelinepinApi {
		/**
		* DynamicsCrm.DevKit msdyn_timelinepinApi
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
		/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và thời gian tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** ID bản ghi từ biểu mẫu. */
		msdyn_formrecordid: string;
		/** Tên */
		msdyn_name: string;
		/** ID của bản ghi đã ghim vào dòng thời gian. */
		msdyn_pinnedrecordid: string;
		/** Tên lô-gic thực thể của bản ghi được ghim vào dòng thời gian. */
		msdyn_pinnedrecordlogicalname: string;
		/** ID của đối tượng kiểm soát dòng thời gian cho mục đã ghim. */
		msdyn_timelinecontrolid: string;
		/** Mã định danh duy nhất cho phiên bản thực thể */
		msdyn_timelinepinId: string;
		/** Ngày và thời gian di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** ID phân vùng lô-gic. Một phân vùng lô-gic bao gồm một tập hợp các bản ghi có cùng ID phân vùng. */
		PartitionId: string;
		/** Thời gian hoạt động chính thức tính bằng giây. */
		TTLInSeconds: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và thời gian tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** ID bản ghi từ biểu mẫu. */
			readonly msdyn_formrecordid: string;
			/** Tên */
			readonly msdyn_name: string;
			/** ID của bản ghi đã ghim vào dòng thời gian. */
			readonly msdyn_pinnedrecordid: string;
			/** Tên lô-gic thực thể của bản ghi được ghim vào dòng thời gian. */
			readonly msdyn_pinnedrecordlogicalname: string;
			/** ID của đối tượng kiểm soát dòng thời gian cho mục đã ghim. */
			readonly msdyn_timelinecontrolid: string;
			/** Mã định danh duy nhất cho phiên bản thực thể */
			readonly msdyn_timelinepinId: string;
			/** Ngày và thời gian di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** ID phân vùng lô-gic. Một phân vùng lô-gic bao gồm một tập hợp các bản ghi có cùng ID phân vùng. */
			readonly PartitionId: string;
			/** Thời gian hoạt động chính thức tính bằng giây. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_timelinepin {
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