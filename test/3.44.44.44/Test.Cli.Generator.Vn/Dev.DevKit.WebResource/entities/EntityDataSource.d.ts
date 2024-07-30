//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EntityDataSourceApi {
		/**
		* DynamicsCrm.DevKit EntityDataSourceApi
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
		readonly ComponentState: OptionSet.EntityDataSource.ComponentState;
		/** Dữ liệu JSON thể hiện các giá trị từ một thực thể nguồn dữ liệu dưới dạng các trường riêng lẻ. */
		ConnectionDefinition: string;
		/** Dữ liệu JSON thể hiện các bí mật trong một thực thể nguồn dữ liệu dưới dạng các trường riêng lẻ. */
		ConnectionDefinitionSecrets: string;
		/** Nhập thông tin bổ sung để mô tả môi trường mà nguồn dữ liệu này hướng tới và mục tiêu của hệ thống này. */
		Description: string;
		/** Chọn nhà cung cấp dữ liệu thực thể cho nguồn dữ liệu thực thể. */
		EntityDataProviderId: string;
		/** Mã định danh duy nhất của ID Nguồn Dữ liệu */
		EntityDataSourceId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityDataSourceIdUnique: string;
		/** Tên Lôgic của Thực thể */
		EntityName1: string;
		/** Phiên bản có biểu mẫu được đưa vào. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Tên của nguồn dữ liệu này. Tên này xuất hiện trong nguồn dữ liệu dạng thả xuống khi tạo một thực thể mới. */
		Name: string;
		/** Mã định danh duy nhất cho tổ chức. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Dữ liệu JSON thể hiện các giá trị từ một thực thể nguồn dữ liệu dưới dạng các trường riêng lẻ. */
			readonly ConnectionDefinition: string;
			/** Dữ liệu JSON thể hiện các bí mật trong một thực thể nguồn dữ liệu dưới dạng các trường riêng lẻ. */
			readonly ConnectionDefinitionSecrets: string;
			/** Nhập thông tin bổ sung để mô tả môi trường mà nguồn dữ liệu này hướng tới và mục tiêu của hệ thống này. */
			readonly Description: string;
			/** Chọn nhà cung cấp dữ liệu thực thể cho nguồn dữ liệu thực thể. */
			readonly EntityDataProviderId: string;
			/** Mã định danh duy nhất của ID Nguồn Dữ liệu */
			readonly EntityDataSourceId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityDataSourceIdUnique: string;
			/** Tên Lôgic của Thực thể */
			readonly EntityName1: string;
			/** Phiên bản có biểu mẫu được đưa vào. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Tên của nguồn dữ liệu này. Tên này xuất hiện trong nguồn dữ liệu dạng thả xuống khi tạo một thực thể mới. */
			readonly Name: string;
			/** Mã định danh duy nhất cho tổ chức. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace EntityDataSource {
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