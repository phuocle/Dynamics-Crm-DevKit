//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class MailboxStatisticsApi {
		/**
		* DynamicsCrm.DevKit MailboxStatisticsApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly AsyncEventId: string;
		/** Các mục còn lại trong CRM để xử lý sau chu kỳ đồng bộ này. */
		readonly CrmItemsBacklog: number;
		/** Thời gian mỗi bước đồng bộ Exchange diễn ra */
		readonly IndividualStepDurations: string;
		/** Số lượng mục được xử lý không thành công. */
		readonly ItemsFailed: number;
		/** Số lượng mục đã được xử lý. */
		readonly ItemsProcessed: number;
		/** Tên Máy đã xử lý hộp thư */
		readonly MachineName: string;
		/** Hộp thư Liên quan. */
		readonly MailboxId: string;
		/** Thời gian hoàn thành của chu kỳ đồng bộ. */
		readonly MailboxProcessCompletedOn_UtcDateAndTime: Date;
		/** Thời gian theo lịch trình của chu kỳ đồng bộ. */
		readonly MailboxProcessScheduledOn_UtcDateAndTime: Date;
		/** Thời gian bắt đầu của chu kỳ đồng bộ. */
		readonly MailboxProcessStartedOn_UtcDateAndTime: Date;
		readonly MailboxStatisticsId: string;
		/** Loại thao tác với hộp thư */
		readonly OperationTypeId: OptionSet.MailboxStatistics.OperationTypeId;
		/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
		readonly OrganizationId: string;
		/** Kết quả của chu trình xử lý Hộp thư */
		readonly ProcessResult: boolean;
		/** Thời gian đã xử dụng để xử lý hộp thư. */
		readonly ProcessTimeIntervalInMinutes: number;
		/** Thời gian đã xử dụng từ thời gian theo lịch trình tới thời gian bắt đầu thực tế để xử lý hộp thư. */
		readonly ScheduledTimeIntervalInMinutes: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly AsyncEventId: string;
			/** Các mục còn lại trong CRM để xử lý sau chu kỳ đồng bộ này. */
			readonly CrmItemsBacklog: string;
			/** Thời gian mỗi bước đồng bộ Exchange diễn ra */
			readonly IndividualStepDurations: string;
			/** Số lượng mục được xử lý không thành công. */
			readonly ItemsFailed: string;
			/** Số lượng mục đã được xử lý. */
			readonly ItemsProcessed: string;
			/** Tên Máy đã xử lý hộp thư */
			readonly MachineName: string;
			/** Hộp thư Liên quan. */
			readonly MailboxId: string;
			/** Thời gian hoàn thành của chu kỳ đồng bộ. */
			readonly MailboxProcessCompletedOn_UtcDateAndTime: string;
			/** Thời gian theo lịch trình của chu kỳ đồng bộ. */
			readonly MailboxProcessScheduledOn_UtcDateAndTime: string;
			/** Thời gian bắt đầu của chu kỳ đồng bộ. */
			readonly MailboxProcessStartedOn_UtcDateAndTime: string;
			readonly MailboxStatisticsId: string;
			/** Loại thao tác với hộp thư */
			readonly OperationTypeId: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
			readonly OrganizationId: string;
			/** Kết quả của chu trình xử lý Hộp thư */
			readonly ProcessResult: string;
			/** Thời gian đã xử dụng để xử lý hộp thư. */
			readonly ProcessTimeIntervalInMinutes: string;
			/** Thời gian đã xử dụng từ thời gian theo lịch trình tới thời gian bắt đầu thực tế để xử lý hộp thư. */
			readonly ScheduledTimeIntervalInMinutes: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailboxStatistics {
		enum OperationTypeId {
			/** 2 */
			ACT,
			/** 0 */
			Email_Den,
			/** 1 */
			Email_Di
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