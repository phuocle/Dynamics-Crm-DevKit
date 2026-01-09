//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ActionCardApi {
		/**
		* DynamicsCrm.DevKit ActionCardApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the action card. */
		ActionCardId: string | null;
		/** The CardType ENUM value. */
		CardType: number | null;
		/** Unique identifier of the card type. */
		CardTypeId: string | null;
		/** Unique identifier of the user who created the action card. */
		readonly CreatedBy: string | null;
		/** Date and time when action card was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the action card. */
		readonly CreatedOnBehalfBy: string | null;
		/** Json formatted string for generic purpose. */
		Data: string | null;
		/** Card Description */
		Description: string | null;
		/** Exchange rate for the currency associated with the action card with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Shows the Expiry Date */
		ExpiryDate_UtcDateAndTime: Date | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who last modified the action card. */
		readonly ModifiedBy: string | null;
		/** Date and time when action card was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified action card. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the action card. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the action card. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the action card. */
		readonly OwningUser: string | null;
		/** Json formatted string for parent regarding object. */
		ParentRegardingObjectIdData: string | null;
		/** Priority of the ActionCard */
		Priority: number | null;
		/** RecordIdObjectTypeCode2 of the ActionCard */
		RecordIdObjectTypeCode2: number | null;
		/** For internal use only. */
		ReferenceTokens: string | null;
		/** Source for the Action Card */
		Source: OptionSet.ActionCard.Source | null;
		/** Shows the Start Date */
		StartDate_UtcDateAndTime: Date | null;
		/** State of the Action Card */
		State: OptionSet.ActionCard.State | null;
		/** Title of the ActionCard */
		Title: string | null;
		/** Unique identifier of the currency associated with the action card. */
		TransactionCurrencyId: string | null;
		/** Version number of the action card. */
		readonly VersionNumber: number | null;
		/** Select whether the visibility should be set to public/private. */
		Visibility: boolean | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the action card. */
			readonly ActionCardId: string;
			/** The CardType ENUM value. */
			readonly CardType: string;
			/** Unique identifier of the card type. */
			readonly CardTypeId: string;
			/** Unique identifier of the user who created the action card. */
			readonly CreatedBy: string;
			/** Date and time when action card was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the action card. */
			readonly CreatedOnBehalfBy: string;
			/** Json formatted string for generic purpose. */
			readonly Data: string;
			/** Card Description */
			readonly Description: string;
			/** Exchange rate for the currency associated with the action card with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the Expiry Date */
			readonly ExpiryDate_UtcDateAndTime: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who last modified the action card. */
			readonly ModifiedBy: string;
			/** Date and time when action card was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified action card. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the action card. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the action card. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the action card. */
			readonly OwningUser: string;
			/** Json formatted string for parent regarding object. */
			readonly ParentRegardingObjectIdData: string;
			/** Priority of the ActionCard */
			readonly Priority: string;
			/** RecordIdObjectTypeCode2 of the ActionCard */
			readonly RecordIdObjectTypeCode2: string;
			/** For internal use only. */
			readonly ReferenceTokens: string;
			/** Source for the Action Card */
			readonly Source: string;
			/** Shows the Start Date */
			readonly StartDate_UtcDateAndTime: string;
			/** State of the Action Card */
			readonly State: string;
			/** Title of the ActionCard */
			readonly Title: string;
			/** Unique identifier of the currency associated with the action card. */
			readonly TransactionCurrencyId: string;
			/** Version number of the action card. */
			readonly VersionNumber: string;
			/** Select whether the visibility should be set to public/private. */
			readonly Visibility: string;
		}
	}
}
declare namespace OptionSet {
	namespace ActionCard {
		enum ParentRegardingObjectTypeCode {
		}
		enum RecordIdObjectTypeCode {
		}
		enum RegardingObjectTypeCode {
		}
		enum Source {
			/** CRM = 1*/
			CRM = 1,
			/** Exchange = 2*/
			Exchange = 2
		}
		enum State {
			/** Active = 0*/
			Active = 0,
			/** Completed = 2*/
			Completed = 2,
			/** Dismissed = 1*/
			Dismissed = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}