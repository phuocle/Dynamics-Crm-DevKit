//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class CallbackRegistrationApi {
		/**
		* DynamicsCrm.DevKit CallbackRegistrationApi
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
		/** Unique identifier of the callback registration. */
		CallbackRegistrationId: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the callback registration was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Entity Name. */
		EntityName2: string | null;
		/** condition represented with OData $filter syntax */
		FilterExpression: string | null;
		/** Comma-separated list of attributes. If at least one of these attributes is modified, the callback url should be called. */
		FilteringAttributes: string | null;
		/** For internal use only. Holds hard delete information. */
		HardDelete: boolean | null;
		/** For internal use only. Holds version of logic apps trigger. */
		LogicAppsVersion: string | null;
		/** Specifies the message type */
		Message: OptionSet.CallbackRegistration.Message | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the callback registration was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of callback registration. */
		Name: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the callback registration. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the callback registration. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the callback registration. */
		readonly OwningUser: string | null;
		/** delay represented with OData expression */
		PostponeUntil: string | null;
		/** Specifies the user context under which the callback will run */
		RunAs: OptionSet.CallbackRegistration.RunAs | null;
		/** For internal use only. Holds miscellaneous properties related to runtime integration. */
		RuntimeIntegrationProperties: string | null;
		/** Specifies the Scope */
		Scope: OptionSet.CallbackRegistration.Scope | null;
		/** Name of the SDK message the subscriber is interested in */
		SdkMessageName: string | null;
		/** For internal use only. Holds soft delete information. */
		SoftDeleteStatus: number | null;
		/** Full callback registration Url. */
		Url: string | null;
		/** Specifies the Callback registration version type */
		Version: OptionSet.CallbackRegistration.Version | null;
		/** Version number of the callbackregistration. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the callback registration. */
			readonly CallbackRegistrationId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the callback registration was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalfÂ of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Entity Name. */
			readonly EntityName2: string;
			/** condition represented with OData $filter syntax */
			readonly FilterExpression: string;
			/** Comma-separated list of attributes. If at least one of these attributes is modified, the callback url should be called. */
			readonly FilteringAttributes: string;
			/** For internal use only. Holds hard delete information. */
			readonly HardDelete: string;
			/** For internal use only. Holds version of logic apps trigger. */
			readonly LogicAppsVersion: string;
			/** Specifies the message type */
			readonly Message: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the callback registration was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of callback registration. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the callback registration. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the callback registration. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the callback registration. */
			readonly OwningUser: string;
			/** delay represented with OData expression */
			readonly PostponeUntil: string;
			/** Specifies the user context under which the callback will run */
			readonly RunAs: string;
			/** For internal use only. Holds miscellaneous properties related to runtime integration. */
			readonly RuntimeIntegrationProperties: string;
			/** Specifies the Scope */
			readonly Scope: string;
			/** Name of the SDK message the subscriber is interested in */
			readonly SdkMessageName: string;
			/** For internal use only. Holds soft delete information. */
			readonly SoftDeleteStatus: string;
			/** Full callback registration Url. */
			readonly Url: string;
			/** Specifies the Callback registration version type */
			readonly Version: string;
			/** Version number of the callbackregistration. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CallbackRegistration {
		enum Message {
			/** Added = 1*/
			Added = 1,
			/** Added_or_Deleted = 5*/
			Added_or_Deleted = 5,
			/** Added_or_Modified = 4*/
			Added_or_Modified = 4,
			/** Added_or_Modified_or_Deleted = 7*/
			Added_or_Modified_or_Deleted = 7,
			/** Deleted = 2*/
			Deleted = 2,
			/** Modified = 3*/
			Modified = 3,
			/** Modified_or_Deleted = 6*/
			Modified_or_Deleted = 6
		}
		enum RunAs {
			/** Flow_owner = 3*/
			Flow_owner = 3,
			/** Modifying_user = 1*/
			Modifying_user = 1,
			/** Row_owner = 2*/
			Row_owner = 2
		}
		enum Scope {
			/** BusinessUnit = 2*/
			BusinessUnit = 2,
			/** Organization = 4*/
			Organization = 4,
			/** ParentChildBusinessUnit = 3*/
			ParentChildBusinessUnit = 3,
			/** User = 1*/
			User = 1
		}
		enum Version {
			/** V1 = 1*/
			V1 = 1,
			/** V2 = 2*/
			V2 = 2,
			/** V3 = 3*/
			V3 = 3
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