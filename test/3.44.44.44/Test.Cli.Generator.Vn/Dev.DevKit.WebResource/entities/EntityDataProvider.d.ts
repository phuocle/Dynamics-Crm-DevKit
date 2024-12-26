//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EntityDataProviderApi {
		/**
		* DynamicsCrm.DevKit EntityDataProviderApi
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
		/** Contains the archiveplugin id that should be run when Archive is invoked */
		ArchivePlugin: string;
		/** Contains the bulkarchiveplugin id that should be run when BulkArchive is invoked */
		BulkArchivePlugin: string;
		/** Contains the bulkretainplugin id that should be run when BulkRetain is invoked */
		BulkRetainPlugin: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.EntityDataProvider.ComponentState;
		/** Contains the createmultipleplugin id that should be run when CreateMultiple is invoked */
		CreateMultiplePlugin: string;
		/** Tạo Phần bổ trợ */
		CreatePlugin: string;
		/** Khi tạo một Nhà cung cấp Dữ liệu, người dùng cuối phải kiểm tra tên của thực thể Nguồn Dữ liệu sẽ được tạo cho nhà cung cấp. */
		DataSourceLogicalName: string;
		/** Contains the deletemultipleplugin id that should be run when DeleteMultiple is invoked */
		DeleteMultiplePlugin: string;
		/** Xóa Phần bổ trợ */
		DeletePlugin: string;
		/** Nhà cung cấp Dữ liệu này được dùng để làm gì và các công nghệ kho dữ liệu mà nhà cung cấp đó nhắm tới là gì? */
		Description: string;
		/** Mã định danh duy nhất của nhà cung cấp dữ liệu. */
		EntityDataProviderId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityDataProviderIdUnique: string;
		/** Phiên bản có biểu mẫu được đưa vào. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Tên của Nhà cung cấp Dữ liệu. Tên này xuất hiện trong danh sách thả xuống khi tạo một thực thể mới. */
		Name: string;
		/** Mã định danh duy nhất cho tổ chức. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Contains the purgearchivedcontentplugin id that should be run when PurgeArchivedContent is invoked */
		PurgeArchivedContentPlugin: string;
		/** Contains the purgeretainedcontentplugin id that should be run when PurgeRetainedContent is invoked */
		PurgeRetainedContentPlugin: string;
		/** Contains the retainplugin id that should be run when Retain is invoked */
		RetainPlugin: string;
		/** Contains the retrieveentitychangesplugin id that should be run when RetrieveEntityChanges is invoked */
		RetrieveEntityChangesPlugin: string;
		/** Đa Truy xuất Phần bổ trợ */
		RetrieveMultiplePlugin: string;
		/** Truy xuất Phần bổ trợ */
		RetrievePlugin: string;
		/** Contains the rollbackretainplugin id that should be run when Rollback Retain is invoked */
		RollbackRetainPlugin: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Contains the updatemultipleplugin id that should be run when UpdateMultiple is invoked */
		UpdateMultiplePlugin: string;
		/** Cập nhật Phần bổ trợ */
		UpdatePlugin: string;
		/** Contains the upsertmultipleplugin id that should be run when UpsertMultiple is invoked */
		UpsertMultiplePlugin: string;
		/** Contains the upsertplugin id that should be run when Upsert is invoked */
		UpsertPlugin: string;
		/** Contains the validatearchiveconfigplugin id that should be run when ValidateArchiveConfig is invoked */
		ValidateArchiveConfigPlugin: string;
		/** Contains the validateretentionconfigplugin id that should be run when ValidateRetentionConfig is invoked */
		ValidateRetentionConfigPlugin: string;
		readonly FormattedValue: {
			/** Contains the archiveplugin id that should be run when Archive is invoked */
			readonly ArchivePlugin: string;
			/** Contains the bulkarchiveplugin id that should be run when BulkArchive is invoked */
			readonly BulkArchivePlugin: string;
			/** Contains the bulkretainplugin id that should be run when BulkRetain is invoked */
			readonly BulkRetainPlugin: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Contains the createmultipleplugin id that should be run when CreateMultiple is invoked */
			readonly CreateMultiplePlugin: string;
			/** Tạo Phần bổ trợ */
			readonly CreatePlugin: string;
			/** Khi tạo một Nhà cung cấp Dữ liệu, người dùng cuối phải kiểm tra tên của thực thể Nguồn Dữ liệu sẽ được tạo cho nhà cung cấp. */
			readonly DataSourceLogicalName: string;
			/** Contains the deletemultipleplugin id that should be run when DeleteMultiple is invoked */
			readonly DeleteMultiplePlugin: string;
			/** Xóa Phần bổ trợ */
			readonly DeletePlugin: string;
			/** Nhà cung cấp Dữ liệu này được dùng để làm gì và các công nghệ kho dữ liệu mà nhà cung cấp đó nhắm tới là gì? */
			readonly Description: string;
			/** Mã định danh duy nhất của nhà cung cấp dữ liệu. */
			readonly EntityDataProviderId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityDataProviderIdUnique: string;
			/** Phiên bản có biểu mẫu được đưa vào. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Tên của Nhà cung cấp Dữ liệu. Tên này xuất hiện trong danh sách thả xuống khi tạo một thực thể mới. */
			readonly Name: string;
			/** Mã định danh duy nhất cho tổ chức. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Contains the purgearchivedcontentplugin id that should be run when PurgeArchivedContent is invoked */
			readonly PurgeArchivedContentPlugin: string;
			/** Contains the purgeretainedcontentplugin id that should be run when PurgeRetainedContent is invoked */
			readonly PurgeRetainedContentPlugin: string;
			/** Contains the retainplugin id that should be run when Retain is invoked */
			readonly RetainPlugin: string;
			/** Contains the retrieveentitychangesplugin id that should be run when RetrieveEntityChanges is invoked */
			readonly RetrieveEntityChangesPlugin: string;
			/** Đa Truy xuất Phần bổ trợ */
			readonly RetrieveMultiplePlugin: string;
			/** Truy xuất Phần bổ trợ */
			readonly RetrievePlugin: string;
			/** Contains the rollbackretainplugin id that should be run when Rollback Retain is invoked */
			readonly RollbackRetainPlugin: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Contains the updatemultipleplugin id that should be run when UpdateMultiple is invoked */
			readonly UpdateMultiplePlugin: string;
			/** Cập nhật Phần bổ trợ */
			readonly UpdatePlugin: string;
			/** Contains the upsertmultipleplugin id that should be run when UpsertMultiple is invoked */
			readonly UpsertMultiplePlugin: string;
			/** Contains the upsertplugin id that should be run when Upsert is invoked */
			readonly UpsertPlugin: string;
			/** Contains the validatearchiveconfigplugin id that should be run when ValidateArchiveConfig is invoked */
			readonly ValidateArchiveConfigPlugin: string;
			/** Contains the validateretentionconfigplugin id that should be run when ValidateRetentionConfig is invoked */
			readonly ValidateRetentionConfigPlugin: string;
		}
	}
}
declare namespace OptionSet {
	namespace EntityDataProvider {
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