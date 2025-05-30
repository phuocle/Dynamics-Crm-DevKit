﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ActionCardUserStateApi {
		/**
		* DynamicsCrm.DevKit ActionCardUserStateApi
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
		/** Parent ActionCard Id. */
		ActionCardId: string;
		/** Unique identifier for entity instances */
		ActionCardUserStateId: string;
		/** Exchange rate for the currency associated with the ActionCardUserState with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Shows the Start Date */
		StartDate_UtcDateAndTime: Date;
		/** State of the Action Card */
		State: OptionSet.ActionCardUserState.State;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the ActionCardUserState with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Parent ActionCard Id. */
			readonly ActionCardId: string;
			/** Unique identifier for entity instances */
			readonly ActionCardUserStateId: string;
			/** Exchange rate for the currency associated with the ActionCardUserState with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Shows the Start Date */
			readonly StartDate_UtcDateAndTime: string;
			/** State of the Action Card */
			readonly State: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the ActionCardUserState with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ActionCardUserState {
		enum ActionCardIdObjectTypeCode {
		}
		enum State {
			/** 0 */
			Active,
			/** 2 */
			Completed,
			/** 1 */
			Dismissed
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}