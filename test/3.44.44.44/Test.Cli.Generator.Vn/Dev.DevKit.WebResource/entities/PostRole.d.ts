//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PostRoleApi {
		/**
		* DynamicsCrm.DevKit PostRoleApi
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
		/** Mã định danh duy nhất của tổ chức liên kết với giải pháp. */
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của bài đăng có liên kết với vai trò bài đăng. */
		PostId: string;
		/** Mã định danh duy nhất của vai trò bài đăng. */
		PostRoleId: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_account: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_appointment: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_contact: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_knowledgearticle: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_phonecall: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_processsession: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_queue: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_systemuser: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_task: string;
		/** Chọn bản ghi liên quan đến vai trò bài đăng. */
		regardingobjectid_team: string;
		/** Chọn loại vai trò cho bài đăng. */
		Type: OptionSet.PostRole.Type;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của tổ chức liên kết với giải pháp. */
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của bài đăng có liên kết với vai trò bài đăng. */
			readonly PostId: string;
			/** Mã định danh duy nhất của vai trò bài đăng. */
			readonly PostRoleId: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_account: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_appointment: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_contact: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_phonecall: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_processsession: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_queue: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_systemuser: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_task: string;
			/** Chọn bản ghi liên quan đến vai trò bài đăng. */
			readonly regardingobjectid_team: string;
			/** Chọn loại vai trò cho bài đăng. */
			readonly Type: string;
		}
	}
}
declare namespace OptionSet {
	namespace PostRole {
		enum RegardingObjectTypeCode {
		}
		enum Type {
			/** 1 */
			Ban_luu_y,
			/** 4 */
			Chu_de,
			/** 2 */
			De_cap,
			/** 3 */
			De_cap_va_Lien_quan
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