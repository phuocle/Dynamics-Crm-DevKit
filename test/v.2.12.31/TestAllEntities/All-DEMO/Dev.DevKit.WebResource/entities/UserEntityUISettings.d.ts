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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Describes which entities are most recently inserted into email for this entity */
		InsertIntoEmailMRUXml: DevKit.WebApi.StringValue;
		/** Describes which forms are most recently viewed for this entity. */
		LastViewedFormXml: DevKit.WebApi.StringValue;
		/** List of most recently used lookup references for this entity */
		LookupMRUXml: DevKit.WebApi.StringValue;
		/** Describes which tabs are most recently used for this entity */
		MRUXml: DevKit.WebApi.StringValue;
		/** Object Type Code */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns this. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns this saved view. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns this saved view. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Describes the reading pane formatting of this entity */
		ReadingPaneXml: DevKit.WebApi.StringValue;
		/** Describes which objects are most recently viewed for this entity */
		RecentlyViewedXml: DevKit.WebApi.StringValue;
		/** Determines whether a record type is exposed in the Outlook Address Book */
		ShowInAddressBook: DevKit.WebApi.BooleanValue;
		/** Describes the tab ordering for this entity */
		TabOrderXml: DevKit.WebApi.StringValue;
		/** Unique identifier user entity */
		UserEntityUISettingsId: DevKit.WebApi.GuidValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}