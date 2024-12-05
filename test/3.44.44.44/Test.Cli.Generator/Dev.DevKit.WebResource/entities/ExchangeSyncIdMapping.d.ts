//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ExchangeSyncIdMappingApi {
		/**
		* DynamicsCrm.DevKit ExchangeSyncIdMappingApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		ExchangeEntryId: string;
		ExchangeSyncIdmappingId: string;
		FromCrmChangeType: number;
		IsDeletedInExchange: boolean;
		IsUnlinkedInCRM: boolean;
		ItemSubject: string;
		LastSyncError: string;
		LastSyncErrorCode: number;
		/** Last Sync Error Time */
		LastSyncErrorOccurredOn_UtcDateAndTime: Date;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		ObjectId: string;
		ObjectTypeCode: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		readonly OwningBusinessUnit: string;
		readonly OwningTeam: string;
		readonly OwningUser: string;
		Retries: number;
		ToCrmChangeType: number;
		UserDecision: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			readonly ExchangeEntryId: string;
			readonly ExchangeSyncIdmappingId: string;
			readonly FromCrmChangeType: string;
			readonly IsDeletedInExchange: string;
			readonly IsUnlinkedInCRM: string;
			readonly ItemSubject: string;
			readonly LastSyncError: string;
			readonly LastSyncErrorCode: string;
			/** Last Sync Error Time */
			readonly LastSyncErrorOccurredOn_UtcDateAndTime: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			readonly ObjectId: string;
			readonly ObjectTypeCode: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			readonly OwningBusinessUnit: string;
			readonly OwningTeam: string;
			readonly OwningUser: string;
			readonly Retries: string;
			readonly ToCrmChangeType: string;
			readonly UserDecision: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExchangeSyncIdMapping {
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