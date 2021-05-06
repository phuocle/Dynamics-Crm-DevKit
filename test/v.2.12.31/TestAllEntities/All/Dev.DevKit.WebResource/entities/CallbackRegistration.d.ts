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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the callback registration. */
		CallbackRegistrationId: DevKit.WebApi.GuidValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the callback registration was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalfÂ of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Entity Name. */
		_EntityName: DevKit.WebApi.StringValue;
		/** condition represented with OData $filter syntax */
		FilterExpression: DevKit.WebApi.StringValue;
		/** Comma-separated list of attributes. If at least one of these attributes is modified, the callback url should be called. */
		FilteringAttributes: DevKit.WebApi.StringValue;
		/** Specifies the message type */
		Message: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the callback registration was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of callback registration. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the callback registration. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the callback registration. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the callback registration. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** delay represented with OData expression */
		PostponeUntil: DevKit.WebApi.StringValue;
		/** Specifies the user context under which the callback will run */
		RunAs: DevKit.WebApi.OptionSetValue;
		/** Specifies the Scope */
		Scope: DevKit.WebApi.OptionSetValue;
		/** Name of the SDK message the subscriber is interested in */
		SdkMessageName: DevKit.WebApi.StringValue;
		/** Full callback registration Url. */
		Url: DevKit.WebApi.StringValue;
		/** Specifies the Callback registration version type */
		Version: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace CallbackRegistration {
		enum Message {
			/** 1 */
			Create,
			/** 5 */
			Create_or_Delete,
			/** 4 */
			Create_or_Update,
			/** 7 */
			Create_or_Update_or_Delete,
			/** 2 */
			Delete,
			/** 3 */
			Update,
			/** 6 */
			Update_or_Delete
		}
		enum RunAs {
			/** 3 */
			Process_Owner,
			/** 2 */
			Record_Owner,
			/** 1 */
			Triggering_User
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}