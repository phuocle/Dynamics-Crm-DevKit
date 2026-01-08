//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SolutionApi {
		/**
		* DynamicsCrm.DevKit SolutionApi
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
		/** A link to an optional configuration page for this solution. */
		ConfigurationPageId: string | null;
		/** Unique identifier of the user who created the solution. */
		readonly CreatedBy: string | null;
		/** Date and time when the solution was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the solution. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the solution. */
		Description: string | null;
		/** Indicates if solution is enabled for source control integration */
		EnabledForSourceControlIntegration: boolean | null;
		/** File Id for the blob url used for file storage. */
		readonly FileId_name: string | null;
		/** User display name for the solution. */
		FriendlyName: string | null;
		/** Date and time when the solution was installed/upgraded. */
		readonly InstalledOn_UtcDateOnly: Date | null;
		/** Information about whether the solution is api managed. */
		readonly IsApiManaged: boolean | null;
		/** Indicates whether the solution is internal or not. */
		readonly IsInternal: boolean | null;
		/** Indicates whether the solution is managed or unmanaged. */
		readonly IsManaged: boolean | null;
		/** Indicates whether the solution is visible outside of the platform. */
		readonly IsVisible: boolean | null;
		/** Unique identifier of the user who last modified the solution. */
		readonly ModifiedBy: string | null;
		/** Date and time when the solution was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the solution. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the solution. */
		readonly OrganizationId: string | null;
		/** Unique identifier of the parent solution. Should only be non-null if this solution is a patch. */
		readonly ParentSolutionId: string | null;
		readonly PinpointAssetId: string | null;
		/** Identifier of the publisher of this solution in Microsoft Pinpoint. */
		readonly PinpointPublisherId: number | null;
		/** Default locale of the solution in Microsoft Pinpoint. */
		readonly PinpointSolutionDefaultLocale: string | null;
		/** Identifier of the solution in Microsoft Pinpoint. */
		readonly PinpointSolutionId: number | null;
		/** Unique identifier of the publisher. */
		PublisherId: string | null;
		/** Unique identifier of the solution. */
		SolutionId: string | null;
		/** Solution package source organization version */
		SolutionPackageVersion: string | null;
		/** Solution Type */
		SolutionType: OptionSet.Solution.SolutionType | null;
		/** Indicates the current status of source control integration */
		SourceControlSyncStatus: OptionSet.Solution.SourceControlSyncStatus | null;
		/** The template suffix of this solution */
		TemplateSuffix: string | null;
		/** thumbprint of the solution signature */
		Thumbprint: string | null;
		/** The unique name of this solution */
		UniqueName: string | null;
		/** Date and time when the solution was updated. */
		readonly UpdatedOn_UtcDateAndTime: Date | null;
		/** Contains component info for the solution upgrade operation */
		readonly UpgradeInfo: string | null;
		/** Solution version, used to identify a solution for upgrades and hotfixes. */
		Version: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** A link to an optional configuration page for this solution. */
			readonly ConfigurationPageId: string;
			/** Unique identifier of the user who created the solution. */
			readonly CreatedBy: string;
			/** Date and time when the solution was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the solution. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the solution. */
			readonly Description: string;
			/** Indicates if solution is enabled for source control integration */
			readonly EnabledForSourceControlIntegration: string;
			/** File Id for the blob url used for file storage. */
			readonly FileId_name: string;
			/** User display name for the solution. */
			readonly FriendlyName: string;
			/** Date and time when the solution was installed/upgraded. */
			readonly InstalledOn_UtcDateOnly: string;
			/** Information about whether the solution is api managed. */
			readonly IsApiManaged: string;
			/** Indicates whether the solution is internal or not. */
			readonly IsInternal: string;
			/** Indicates whether the solution is managed or unmanaged. */
			readonly IsManaged: string;
			/** Indicates whether the solution is visible outside of the platform. */
			readonly IsVisible: string;
			/** Unique identifier of the user who last modified the solution. */
			readonly ModifiedBy: string;
			/** Date and time when the solution was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the solution. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the solution. */
			readonly OrganizationId: string;
			/** Unique identifier of the parent solution. Should only be non-null if this solution is a patch. */
			readonly ParentSolutionId: string;
			readonly PinpointAssetId: string;
			/** Identifier of the publisher of this solution in Microsoft Pinpoint. */
			readonly PinpointPublisherId: string;
			/** Default locale of the solution in Microsoft Pinpoint. */
			readonly PinpointSolutionDefaultLocale: string;
			/** Identifier of the solution in Microsoft Pinpoint. */
			readonly PinpointSolutionId: string;
			/** Unique identifier of the publisher. */
			readonly PublisherId: string;
			/** Unique identifier of the solution. */
			readonly SolutionId: string;
			/** Solution package source organization version */
			readonly SolutionPackageVersion: string;
			/** Solution Type */
			readonly SolutionType: string;
			/** Indicates the current status of source control integration */
			readonly SourceControlSyncStatus: string;
			/** The template suffix of this solution */
			readonly TemplateSuffix: string;
			/** thumbprint of the solution signature */
			readonly Thumbprint: string;
			/** The unique name of this solution */
			readonly UniqueName: string;
			/** Date and time when the solution was updated. */
			readonly UpdatedOn_UtcDateAndTime: string;
			/** Contains component info for the solution upgrade operation */
			readonly UpgradeInfo: string;
			/** Solution version, used to identify a solution for upgrades and hotfixes. */
			readonly Version: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Solution {
		enum SolutionType {
			/** Internal = 2*/
			Internal = 2,
			/** None = 0*/
			None = 0,
			/** Snapshot = 1*/
			Snapshot = 1
		}
		enum SourceControlSyncStatus {
			/** Committed = 4*/
			Committed = 4,
			/** Errors_in_initial_sync = 2*/
			Errors_in_initial_sync = 2,
			/** Initial_sync_in_progress = 1*/
			Initial_sync_in_progress = 1,
			/** Not_started = 0*/
			Not_started = 0,
			/** Pending_changes_to_be_committed = 3*/
			Pending_changes_to_be_committed = 3
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