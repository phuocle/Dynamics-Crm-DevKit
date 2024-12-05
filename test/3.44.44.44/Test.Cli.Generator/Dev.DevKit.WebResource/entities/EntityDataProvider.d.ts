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
		/** Contains the archiveplugin id that should be run when Archive is invoked */
		ArchivePlugin: string;
		/** Contains the bulkarchiveplugin id that should be run when BulkArchive is invoked */
		BulkArchivePlugin: string;
		/** Contains the bulkretainplugin id that should be run when BulkRetain is invoked */
		BulkRetainPlugin: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.EntityDataProvider.ComponentState;
		/** Contains the createmultipleplugin id that should be run when CreateMultiple is invoked */
		CreateMultiplePlugin: string;
		/** Create Plugin */
		CreatePlugin: string;
		/** When creating a Data Provider, the end user must select the name of the Data Source entity that will be created for the provider. */
		DataSourceLogicalName: string;
		/** Contains the deletemultipleplugin id that should be run when DeleteMultiple is invoked */
		DeleteMultiplePlugin: string;
		/** Delete Plugin */
		DeletePlugin: string;
		/** What is this Data Provider used for and data store technologies does it target? */
		Description: string;
		/** Unique identifier of the data provider. */
		EntityDataProviderId: string;
		/** For internal use only. */
		readonly EntityDataProviderIdUnique: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Enables expansion support for lookups columns. Only applicable to RetrieveMultiple plugin. Enabling this might modify the filter expression supplied to RetrieveMultiple plugin. Default value is false. */
		LookupExpansionEnabled: boolean;
		/** The name of this Data Provider. This is the name that appears in the dropdown when creating a new entity. */
		Name: string;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Contains the purgearchivedcontentplugin id that should be run when PurgeArchivedContent is invoked */
		PurgeArchivedContentPlugin: string;
		/** Contains the purgeretainedcontentplugin id that should be run when PurgeRetainedContent is invoked */
		PurgeRetainedContentPlugin: string;
		/** Contains the retainplugin id that should be run when Retain is invoked */
		RetainPlugin: string;
		/** Contains the retrieveentitychangesplugin id that should be run when RetrieveEntityChanges is invoked */
		RetrieveEntityChangesPlugin: string;
		/** MultipleRetrieve Plugin */
		RetrieveMultiplePlugin: string;
		/** Retrieve Plugin */
		RetrievePlugin: string;
		/** Contains the rollbackretainplugin id that should be run when Rollback Retain is invoked */
		RollbackRetainPlugin: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Contains the updatemultipleplugin id that should be run when UpdateMultiple is invoked */
		UpdateMultiplePlugin: string;
		/** Update Plugin */
		UpdatePlugin: string;
		/** Contains the upsertmultipleplugin id that should be run when UpsertMultiple is invoked */
		UpsertMultiplePlugin: string;
		/** Contains the upsertplugin id that should be run when Upsert is invoked */
		UpsertPlugin: string;
		/** Contains the validatearchiveconfigplugin id that should be run when ValidateArchiveConfig is invoked */
		ValidateArchiveConfigPlugin: string;
		/** Contains the validateretentionconfigplugin id that should be run when ValidateRetentionConfig is invoked */
		ValidateRetentionConfigPlugin: string;
		readonly FormattedValue: {
			/** Contains the archiveplugin id that should be run when Archive is invoked */
			readonly ArchivePlugin: string;
			/** Contains the bulkarchiveplugin id that should be run when BulkArchive is invoked */
			readonly BulkArchivePlugin: string;
			/** Contains the bulkretainplugin id that should be run when BulkRetain is invoked */
			readonly BulkRetainPlugin: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Contains the createmultipleplugin id that should be run when CreateMultiple is invoked */
			readonly CreateMultiplePlugin: string;
			/** Create Plugin */
			readonly CreatePlugin: string;
			/** When creating a Data Provider, the end user must select the name of the Data Source entity that will be created for the provider. */
			readonly DataSourceLogicalName: string;
			/** Contains the deletemultipleplugin id that should be run when DeleteMultiple is invoked */
			readonly DeleteMultiplePlugin: string;
			/** Delete Plugin */
			readonly DeletePlugin: string;
			/** What is this Data Provider used for and data store technologies does it target? */
			readonly Description: string;
			/** Unique identifier of the data provider. */
			readonly EntityDataProviderId: string;
			/** For internal use only. */
			readonly EntityDataProviderIdUnique: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Enables expansion support for lookups columns. Only applicable to RetrieveMultiple plugin. Enabling this might modify the filter expression supplied to RetrieveMultiple plugin. Default value is false. */
			readonly LookupExpansionEnabled: string;
			/** The name of this Data Provider. This is the name that appears in the dropdown when creating a new entity. */
			readonly Name: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Contains the purgearchivedcontentplugin id that should be run when PurgeArchivedContent is invoked */
			readonly PurgeArchivedContentPlugin: string;
			/** Contains the purgeretainedcontentplugin id that should be run when PurgeRetainedContent is invoked */
			readonly PurgeRetainedContentPlugin: string;
			/** Contains the retainplugin id that should be run when Retain is invoked */
			readonly RetainPlugin: string;
			/** Contains the retrieveentitychangesplugin id that should be run when RetrieveEntityChanges is invoked */
			readonly RetrieveEntityChangesPlugin: string;
			/** MultipleRetrieve Plugin */
			readonly RetrieveMultiplePlugin: string;
			/** Retrieve Plugin */
			readonly RetrievePlugin: string;
			/** Contains the rollbackretainplugin id that should be run when Rollback Retain is invoked */
			readonly RollbackRetainPlugin: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Contains the updatemultipleplugin id that should be run when UpdateMultiple is invoked */
			readonly UpdateMultiplePlugin: string;
			/** Update Plugin */
			readonly UpdatePlugin: string;
			/** Contains the upsertmultipleplugin id that should be run when UpsertMultiple is invoked */
			readonly UpsertMultiplePlugin: string;
			/** Contains the upsertplugin id that should be run when Upsert is invoked */
			readonly UpsertPlugin: string;
			/** Contains the validatearchiveconfigplugin id that should be run when ValidateArchiveConfig is invoked */
			readonly ValidateArchiveConfigPlugin: string;
			/** Contains the validateretentionconfigplugin id that should be run when ValidateRetentionConfig is invoked */
			readonly ValidateRetentionConfigPlugin: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}