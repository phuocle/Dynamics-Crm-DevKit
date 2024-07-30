//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ActionCardUserSettingsApi {
		/**
		* DynamicsCrm.DevKit ActionCardUserSettingsApi
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
		/** Mã định danh duy nhất cho thực thể người dùng */
		ActionCardUserSettingsId: string;
		/** Mọi tùy chọn Bolean cho cardtype. */
		BoolCardOption: boolean;
		/** Giá trị CardType ENUM. */
		CardType: number;
		/** thuộc tính loại thẻ */
		CardTypeId: string;
		/** Mọi tùy chọn int cho cardtype. */
		IntCardOption: number;
		/** Chọn xem có bật thẻ cho người dùng hay không. */
		IsEnabled: boolean;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu đối tượng này. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu dạng xem đã lưu này. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu dạng xem đã lưu này. */
		readonly OwningUser: string;
		/** Mọi tùy chọn chuỗi cho cardtype. */
		StringCardOption: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất cho thực thể người dùng */
			readonly ActionCardUserSettingsId: string;
			/** Mọi tùy chọn Bolean cho cardtype. */
			readonly BoolCardOption: string;
			/** Giá trị CardType ENUM. */
			readonly CardType: string;
			/** thuộc tính loại thẻ */
			readonly CardTypeId: string;
			/** Mọi tùy chọn int cho cardtype. */
			readonly IntCardOption: string;
			/** Chọn xem có bật thẻ cho người dùng hay không. */
			readonly IsEnabled: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu đối tượng này. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu dạng xem đã lưu này. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu dạng xem đã lưu này. */
			readonly OwningUser: string;
			/** Mọi tùy chọn chuỗi cho cardtype. */
			readonly StringCardOption: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ActionCardUserSettings {
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