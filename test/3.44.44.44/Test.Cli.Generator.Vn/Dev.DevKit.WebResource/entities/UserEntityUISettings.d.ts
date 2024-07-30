//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserEntityUISettingsApi {
		/**
		* DynamicsCrm.DevKit UserEntityUISettingsApi
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
		/** Mô tả gần đây nhất đã chèn thực thể nào vào email cho thực thể này */
		InsertIntoEmailMRUXml: string;
		/** Mô tả gần đây nhất đã xem biểu mẫu nào cho thực thể này. */
		LastViewedFormXml: string;
		/** Danh sách các tham chiếu tra cứu được dùng gần đây nhất cho thực thể này */
		LookupMRUXml: string;
		/** Mô tả thẻ đã dùng gần đây nhất cho thực thể này */
		MRUXml: string;
		/** Mã loại đối tượng */
		ObjectTypeCode: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu đối tượng này. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu dạng xem đã lưu này. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu dạng xem đã lưu này. */
		readonly OwningUser: string;
		/** Mô tả định dạng ngăn đọc của thực thể này */
		ReadingPaneXml: string;
		/** Mô tả gần đây nhất đã xem đối tượng nào của thực thể này */
		RecentlyViewedXml: string;
		/** Quyết định có cho hiện ra loại bản ghi trong Sổ Địa chỉ Outlook hay không */
		ShowInAddressBook: boolean;
		/** Mô tả thứ tự thẻ cho thực thể này */
		TabOrderXml: string;
		/** Mã định danh duy nhất cho thực thể người dùng. */
		UserEntityUISettingsId: string;
		readonly VersionNumber: number;
		/** Dữ liệu đại diện cho thiết đặt cá nhân hóa dạng xem */
		ViewPersonalizationSettings: string;
		readonly FormattedValue: {
			/** Mô tả gần đây nhất đã chèn thực thể nào vào email cho thực thể này */
			readonly InsertIntoEmailMRUXml: string;
			/** Mô tả gần đây nhất đã xem biểu mẫu nào cho thực thể này. */
			readonly LastViewedFormXml: string;
			/** Danh sách các tham chiếu tra cứu được dùng gần đây nhất cho thực thể này */
			readonly LookupMRUXml: string;
			/** Mô tả thẻ đã dùng gần đây nhất cho thực thể này */
			readonly MRUXml: string;
			/** Mã loại đối tượng */
			readonly ObjectTypeCode: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu đối tượng này. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu dạng xem đã lưu này. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu dạng xem đã lưu này. */
			readonly OwningUser: string;
			/** Mô tả định dạng ngăn đọc của thực thể này */
			readonly ReadingPaneXml: string;
			/** Mô tả gần đây nhất đã xem đối tượng nào của thực thể này */
			readonly RecentlyViewedXml: string;
			/** Quyết định có cho hiện ra loại bản ghi trong Sổ Địa chỉ Outlook hay không */
			readonly ShowInAddressBook: string;
			/** Mô tả thứ tự thẻ cho thực thể này */
			readonly TabOrderXml: string;
			/** Mã định danh duy nhất cho thực thể người dùng. */
			readonly UserEntityUISettingsId: string;
			readonly VersionNumber: string;
			/** Dữ liệu đại diện cho thiết đặt cá nhân hóa dạng xem */
			readonly ViewPersonalizationSettings: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserEntityUISettings {
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