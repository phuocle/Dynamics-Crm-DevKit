//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WorkflowWaitSubscriptionApi {
		/**
		* DynamicsCrm.DevKit WorkflowWaitSubscriptionApi
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
		/** Mã định danh duy nhất của hoạt động không đồng thời có đăng ký được liên kết. */
		AsyncOperationId: string;
		/** Dữ liệu không theo cấu trúc liên kết với đăng ký. */
		Data: string;
		/** Id của thực thể phiên bản quy trình sẽ đăng ký. */
		EntityId: string;
		/** Tên của thực thể phiên bản quy trình sẽ đăng ký. */
		EntityName1: string;
		/** Cho biết khả năng sẽ xóa thực thể phiên bản quy trình sẽ đăng ký sau khi xóa đăng ký. */
		readonly IsDeleted: boolean;
		/** Cho biết khả năng sẽ sửa đổi thực thể phiên bản quy trình sẽ đăng ký sau khi đã tạo đăng ký. */
		readonly IsModified: boolean;
		/** Ngày và giờ sửa đổi thực thể. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu phiên bản quy trình mẹ. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu phiên bản quy trình mẹ. */
		readonly OwningUser: string;
		/** Đăng ký đang chờ để thay đổi trên thuộc tính. */
		WaitOnAttributeList: string;
		/** Mã định danh duy nhất của đăng ký. */
		WorkflowWaitSubscriptionId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của hoạt động không đồng thời có đăng ký được liên kết. */
			readonly AsyncOperationId: string;
			/** Dữ liệu không theo cấu trúc liên kết với đăng ký. */
			readonly Data: string;
			/** Id của thực thể phiên bản quy trình sẽ đăng ký. */
			readonly EntityId: string;
			/** Tên của thực thể phiên bản quy trình sẽ đăng ký. */
			readonly EntityName1: string;
			/** Cho biết khả năng sẽ xóa thực thể phiên bản quy trình sẽ đăng ký sau khi xóa đăng ký. */
			readonly IsDeleted: string;
			/** Cho biết khả năng sẽ sửa đổi thực thể phiên bản quy trình sẽ đăng ký sau khi đã tạo đăng ký. */
			readonly IsModified: string;
			/** Ngày và giờ sửa đổi thực thể. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu phiên bản quy trình mẹ. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu phiên bản quy trình mẹ. */
			readonly OwningUser: string;
			/** Đăng ký đang chờ để thay đổi trên thuộc tính. */
			readonly WaitOnAttributeList: string;
			/** Mã định danh duy nhất của đăng ký. */
			readonly WorkflowWaitSubscriptionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace WorkflowWaitSubscription {
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