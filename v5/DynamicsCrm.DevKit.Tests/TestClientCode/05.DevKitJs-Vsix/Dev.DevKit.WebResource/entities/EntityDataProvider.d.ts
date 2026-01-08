//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class EntityDataProviderApi {
		/**
		* DynamicsCrm.DevKit EntityDataProviderApi
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
		/** Contains the archiveplugin id that should be run when Archive is invoked */
		ArchivePlugin: string | null;
		/** Contains the bulkarchiveplugin id that should be run when BulkArchive is invoked */
		BulkArchivePlugin: string | null;
		/** Contains the bulkretainplugin id that should be run when BulkRetain is invoked */
		BulkRetainPlugin: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.EntityDataProvider.ComponentState | null;
		/** Contains the createmultipleplugin id that should be run when CreateMultiple is invoked */
		CreateMultiplePlugin: string | null;
		/** Create Plugin */
		CreatePlugin: string | null;
		/** When creating a Data Provider, the end user must select the name of the Data Source entity that will be created for the provider. */
		DataSourceLogicalName: string | null;
		/** Contains the deletemultipleplugin id that should be run when DeleteMultiple is invoked */
		DeleteMultiplePlugin: string | null;
		/** Delete Plugin */
		DeletePlugin: string | null;
		/** What is this Data Provider used for and data store technologies does it target? */
		Description: string | null;
		/** Unique identifier of the data provider. */
		EntityDataProviderId: string | null;
		/** For internal use only. */
		readonly EntityDataProviderIdUnique: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Enables expansion support for lookups columns. Only applicable to RetrieveMultiple plugin. Enabling this might modify the filter expression supplied to RetrieveMultiple plugin. Default value is false. */
		LookupExpansionEnabled: boolean | null;
		/** The name of this Data Provider. This is the name that appears in the dropdown when creating a new entity. */
		Name: string | null;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Contains the purgearchivedcontentplugin id that should be run when PurgeArchivedContent is invoked */
		PurgeArchivedContentPlugin: string | null;
		/** Contains the purgeretainedcontentplugin id that should be run when PurgeRetainedContent is invoked */
		PurgeRetainedContentPlugin: string | null;
		/** Contains the retainplugin id that should be run when Retain is invoked */
		RetainPlugin: string | null;
		/** Contains the retrieveentitychangesplugin id that should be run when RetrieveEntityChanges is invoked */
		RetrieveEntityChangesPlugin: string | null;
		/** MultipleRetrieve Plugin */
		RetrieveMultiplePlugin: string | null;
		/** Retrieve Plugin */
		RetrievePlugin: string | null;
		/** Contains the rollbackretainplugin id that should be run when Rollback Retain is invoked */
		RollbackRetainPlugin: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Contains the updatemultipleplugin id that should be run when UpdateMultiple is invoked */
		UpdateMultiplePlugin: string | null;
		/** Update Plugin */
		UpdatePlugin: string | null;
		/** Contains the upsertmultipleplugin id that should be run when UpsertMultiple is invoked */
		UpsertMultiplePlugin: string | null;
		/** Contains the upsertplugin id that should be run when Upsert is invoked */
		UpsertPlugin: string | null;
		/** Contains the validatearchiveconfigplugin id that should be run when ValidateArchiveConfig is invoked */
		ValidateArchiveConfigPlugin: string | null;
		/** Contains the validateretentionconfigplugin id that should be run when ValidateRetentionConfig is invoked */
		ValidateRetentionConfigPlugin: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
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