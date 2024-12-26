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
		/** Information to indicate whether the category has been created in Exchange or not. */
		CategoryOnboardingStatus: number;
		/** Date and time when the entry was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Color for category in Exchange. */
		ExchangeCategoryColor: number;
		/** Category Id for a category in Exchange */
		ExchangeCategoryId: string;
		/** Exchange Category Name */
		ExchangeCategoryName: string;
		/** Mailbox id associated with this record. */
		MailboxId: string;
		readonly MailboxTrackingCategoryId: string;
		/** Date and time when the entry was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the category. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the category. */
		readonly OwningTeam: string;
		readonly FormattedValue: {
			/** Information to indicate whether the category has been created in Exchange or not. */
			readonly CategoryOnboardingStatus: string;
			/** Date and time when the entry was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Color for category in Exchange. */
			readonly ExchangeCategoryColor: string;
			/** Category Id for a category in Exchange */
			readonly ExchangeCategoryId: string;
			/** Exchange Category Name */
			readonly ExchangeCategoryName: string;
			/** Mailbox id associated with this record. */
			readonly MailboxId: string;
			readonly MailboxTrackingCategoryId: string;
			/** Date and time when the entry was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the category. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the category. */
			readonly OwningTeam: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingCategory {
		enum OwnerIdType {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}