//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ActionCardUserSettingsApi {
		/**
		* DynamicsCrm.DevKit ActionCardUserSettingsApi
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
		/** Unique identifier user entity */
		ActionCardUserSettingsId: string | null;
		/** Bolean option for a cardtype. */
		BoolCardOption: boolean | null;
		/** The CardType ENUM value. */
		CardType: number | null;
		/** card type attribute */
		CardTypeId: string | null;
		/** Any int option for a cardtype. */
		IntCardOption: number | null;
		/** Select whether the card is enabled for user or not. */
		IsEnabled: boolean | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns this. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns this saved view. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns this saved view. */
		readonly OwningUser: string | null;
		/** Any string option for a cardtype. */
		StringCardOption: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier user entity */
			readonly ActionCardUserSettingsId: string;
			/** Bolean option for a cardtype. */
			readonly BoolCardOption: string;
			/** The CardType ENUM value. */
			readonly CardType: string;
			/** card type attribute */
			readonly CardTypeId: string;
			/** Any int option for a cardtype. */
			readonly IntCardOption: string;
			/** Select whether the card is enabled for user or not. */
			readonly IsEnabled: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns this saved view. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns this saved view. */
			readonly OwningUser: string;
			/** Any string option for a cardtype. */
			readonly StringCardOption: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ActionCardUserSettings {
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