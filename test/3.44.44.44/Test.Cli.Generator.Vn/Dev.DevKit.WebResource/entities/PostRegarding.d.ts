//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PostRegardingApi {
		/**
		* DynamicsCrm.DevKit PostRegardingApi
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
		/** Ngày cuối cùng đăng bài tự động về thực thể liên quan */
		readonly LatestAutoPostModifiedOn_UtcDateAndTime: Date;
		/** Ngày cuối cùng đăng bài thủ công về thực thể liên quan */
		readonly LatestManualPostModifiedOn_UtcDateAndTime: Date;
		/** Hiện ID của bản ghi mà bài đăng tham chiếu đến. */
		PostRegardingId: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_account: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_appointment: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_contact: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_externalparty: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_knowledgearticle: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_phonecall: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_processsession: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_queue: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_systemuser: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_task: string;
		/** Chọn bản ghi liên quan đến bài đăng. */
		regardingobjectid_team: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Chọn đơn vị kinh doanh sở hữu đối tượng liên quan. */
		readonly RegardingObjectOwningBusinessUnit: string;
		readonly FormattedValue: {
			/** Ngày cuối cùng đăng bài tự động về thực thể liên quan */
			readonly LatestAutoPostModifiedOn_UtcDateAndTime: string;
			/** Ngày cuối cùng đăng bài thủ công về thực thể liên quan */
			readonly LatestManualPostModifiedOn_UtcDateAndTime: string;
			/** Hiện ID của bản ghi mà bài đăng tham chiếu đến. */
			readonly PostRegardingId: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_account: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_appointment: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_contact: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_externalparty: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_phonecall: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_processsession: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_queue: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_systemuser: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_task: string;
			/** Chọn bản ghi liên quan đến bài đăng. */
			readonly regardingobjectid_team: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Chọn đơn vị kinh doanh sở hữu đối tượng liên quan. */
			readonly RegardingObjectOwningBusinessUnit: string;
		}
	}
}
declare namespace OptionSet {
	namespace PostRegarding {
		enum RegardingObjectOwnerIdType {
		}
		enum RegardingObjectTypeCode {
		}
		enum RegardingObjectTypeCodeForSharing {
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