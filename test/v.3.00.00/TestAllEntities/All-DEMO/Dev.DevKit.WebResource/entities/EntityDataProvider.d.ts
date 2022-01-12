//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EntityDataProviderApi {
		/**
		* DynamicsCrm.DevKit EntityDataProviderApi
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
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Contains the createmultipleplugin id that should be run when CreateMultiple is invoked */
		CreateMultiplePlugin: DevKit.WebApi.GuidValue;
		/** Create Plugin */
		CreatePlugin: DevKit.WebApi.GuidValue;
		/** When creating a Data Provider, the end user must select the name of the Data Source entity that will be created for the provider. */
		DataSourceLogicalName: DevKit.WebApi.StringValue;
		/** Contains the deletemultipleplugin id that should be run when DeleteMultiple is invoked */
		DeleteMultiplePlugin: DevKit.WebApi.GuidValue;
		/** Delete Plugin */
		DeletePlugin: DevKit.WebApi.GuidValue;
		/** What is this Data Provider used for and data store technologies does it target? */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the data provider. */
		EntityDataProviderId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		EntityDataProviderIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** The name of this Data Provider. This is the name that appears in the dropdown when creating a new entity. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Contains the retrieveentitychangesplugin id that should be run when RetrieveEntityChanges is invoked */
		RetrieveEntityChangesPlugin: DevKit.WebApi.GuidValue;
		/** MultipleRetrieve Plugin */
		RetrieveMultiplePlugin: DevKit.WebApi.GuidValue;
		/** Retrieve Plugin */
		RetrievePlugin: DevKit.WebApi.GuidValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Contains the updatemultipleplugin id that should be run when UpdateMultiple is invoked */
		UpdateMultiplePlugin: DevKit.WebApi.GuidValue;
		/** Update Plugin */
		UpdatePlugin: DevKit.WebApi.GuidValue;
		/** Contains the upsertmultipleplugin id that should be run when UpsertMultiple is invoked */
		UpsertMultiplePlugin: DevKit.WebApi.GuidValue;
		/** Contains the upsertplugin id that should be run when Upsert is invoked */
		UpsertPlugin: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace EntityDataProvider {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}