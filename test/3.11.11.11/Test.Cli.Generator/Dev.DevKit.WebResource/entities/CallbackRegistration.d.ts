//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CallbackRegistrationApi {
		/**
		* DynamicsCrm.DevKit CallbackRegistrationApi
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
		/** Unique identifier of the callback registration. */
		CallbackRegistrationId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the callback registration was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Entity Name. */
		EntityName1: string;
		/** condition represented with OData $filter syntax */
		FilterExpression: string;
		/** Comma-separated list of attributes. If at least one of these attributes is modified, the callback url should be called. */
		FilteringAttributes: string;
		/** For internal use only. Holds hard delete information. */
		HardDelete: boolean;
		/** For internal use only. Holds version of logic apps trigger. */
		LogicAppsVersion: string;
		/** Specifies the message type */
		Message: OptionSet.CallbackRegistration.Message;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the callback registration was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of callback registration. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the callback registration. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the callback registration. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the callback registration. */
		readonly OwningUser: string;
		/** delay represented with OData expression */
		PostponeUntil: string;
		/** Specifies the user context under which the callback will run */
		RunAs: OptionSet.CallbackRegistration.RunAs;
		/** For internal use only. Holds miscellaneous properties related to runtime integration. */
		RuntimeIntegrationProperties: string;
		/** Specifies the Scope */
		Scope: OptionSet.CallbackRegistration.Scope;
		/** Name of the SDK message the subscriber is interested in */
		SdkMessageName: string;
		/** For internal use only. Holds soft delete information. */
		SoftDeleteStatus: number;
		/** Full callback registration Url. */
		Url: string;
		/** Specifies the Callback registration version type */
		Version: OptionSet.CallbackRegistration.Version;
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
			readonly EntityName1: string;
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
		}
	}
}
declare namespace OptionSet {
	namespace CallbackRegistration {
		enum Message {
			/** 1 */
			Added,
			/** 5 */
			Added_or_Deleted,
			/** 4 */
			Added_or_Modified,
			/** 7 */
			Added_or_Modified_or_Deleted,
			/** 2 */
			Deleted,
			/** 3 */
			Modified,
			/** 6 */
			Modified_or_Deleted
		}
		enum OwnerIdType {
		}
		enum RunAs {
			/** 3 */
			Flow_owner,
			/** 1 */
			Modifying_user,
			/** 2 */
			Row_owner
		}
		enum Scope {
			/** 2 */
			BusinessUnit,
			/** 4 */
			Organization,
			/** 3 */
			ParentChildBusinessUnit,
			/** 1 */
			User
		}
		enum Version {
			/** 1 */
			V1,
			/** 2 */
			V2,
			/** 3 */
			V3
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