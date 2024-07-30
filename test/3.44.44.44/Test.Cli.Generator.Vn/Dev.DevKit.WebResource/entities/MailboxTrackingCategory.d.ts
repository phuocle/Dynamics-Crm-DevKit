//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class MailboxTrackingCategoryApi {
		/**
		* DynamicsCrm.DevKit MailboxTrackingCategoryApi
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
		/** Thông tin để cho biết thể loại đã được tạo trong Exchange hay chưa. */
		CategoryOnboardingStatus: number;
		/** Ngày và giờ tạo mục nhập. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Màu sắc cho thể loại trong Exchange. */
		ExchangeCategoryColor: number;
		/** Id thể loại dành cho một thể loại trong Exchange */
		ExchangeCategoryId: string;
		/** Tên Thể loại Exchange */
		ExchangeCategoryName: string;
		/** Id hộp thư được liên kết với bản ghi này. */
		MailboxId: string;
		readonly MailboxTrackingCategoryId: string;
		/** Ngày và giờ sửa đổi mục nhập lần cuối cùng. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu thể loại. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu thể loại. */
		readonly OwningTeam: string;
		readonly FormattedValue: {
			/** Thông tin để cho biết thể loại đã được tạo trong Exchange hay chưa. */
			readonly CategoryOnboardingStatus: string;
			/** Ngày và giờ tạo mục nhập. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Màu sắc cho thể loại trong Exchange. */
			readonly ExchangeCategoryColor: string;
			/** Id thể loại dành cho một thể loại trong Exchange */
			readonly ExchangeCategoryId: string;
			/** Tên Thể loại Exchange */
			readonly ExchangeCategoryName: string;
			/** Id hộp thư được liên kết với bản ghi này. */
			readonly MailboxId: string;
			readonly MailboxTrackingCategoryId: string;
			/** Ngày và giờ sửa đổi mục nhập lần cuối cùng. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu thể loại. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu thể loại. */
			readonly OwningTeam: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingCategory {
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