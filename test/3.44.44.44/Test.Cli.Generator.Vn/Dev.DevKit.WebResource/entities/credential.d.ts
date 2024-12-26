//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Tên của thực thể tùy chỉnh. */
			name: DevKit.Controls.String;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			connectioninstance_CredentialId_credential: DevKit.Controls.NavigationItem
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
	class credentialApi {
		/**
		* DynamicsCrm.DevKit credentialApi
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
		readonly ComponentState: OptionSet.credential.ComponentState;
		connectiontype: OptionSet.credential.connectiontype;
		/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và thời gian tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất cho các phiên bản thực thể */
		credentialId: string;
		credentials: string;
		credentialtype: OptionSet.credential.credentialtype;
		cyberarkapplicationid: string;
		cyberarkobject: string;
		/** Siêu dữ liệu của Két CyberArk nơi lưu trữ mật khẩu: Tên máy chủ hoặc địa chỉ IP của điểm cuối CCP, Thư mục và Tên của Két CyberArk nơi mật khẩu được lưu trữ */
		cyberarksafe: string;
		cyberarkusername: string;
		/** Mô tả về thông tin xác thực. */
		description: string;
		groupmapping: string;
		/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của thực thể tùy chỉnh. */
		name: string;
		/** Ngày và thời gian di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		password: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của thông tin xác thực */
		statecode: OptionSet.credential.statecode;
		/** Lý do dẫn đến trạng thái của thông tin xác thực */
		statuscode: OptionSet.credential.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		username: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			readonly connectiontype: string;
			/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và thời gian tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất cho các phiên bản thực thể */
			readonly credentialId: string;
			readonly credentials: string;
			readonly credentialtype: string;
			readonly cyberarkapplicationid: string;
			readonly cyberarkobject: string;
			/** Siêu dữ liệu của Két CyberArk nơi lưu trữ mật khẩu: Tên máy chủ hoặc địa chỉ IP của điểm cuối CCP, Thư mục và Tên của Két CyberArk nơi mật khẩu được lưu trữ */
			readonly cyberarksafe: string;
			readonly cyberarkusername: string;
			/** Mô tả về thông tin xác thực. */
			readonly description: string;
			readonly groupmapping: string;
			/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly name: string;
			/** Ngày và thời gian di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			readonly password: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của thông tin xác thực */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của thông tin xác thực */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly username: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace credential {
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
		enum connectiontype {
			/** 4 */
			CyberArkIdentity,
			/** 1 */
			UsernamePassword,
			/** 2 */
			UsernamePasswordList,
			/** 3 */
			UsernamePasswordListWithGroupMapping
		}
		enum credentialtype {
			/** 2 */
			ListOfCredentials,
			/** 1 */
			SingleCredential
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
			Khong_hoat_dong
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