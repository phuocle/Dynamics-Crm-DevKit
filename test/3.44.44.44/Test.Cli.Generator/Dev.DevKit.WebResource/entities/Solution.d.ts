//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSolution_Information {
		interface tab__9129B06A_8446_77D8_2BD2_027C5006BE41_Sections {
			solutionmarketplacesection: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			description: DevKit.Controls.Section;
			solution_information: DevKit.Controls.Section;
		}
		interface tab__9129B06A_8446_77D8_2BD2_027C5006BE41 extends DevKit.Controls.ITab {
			Section: tab__9129B06A_8446_77D8_2BD2_027C5006BE41_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			_9129B06A_8446_77D8_2BD2_027C5006BE41: tab__9129B06A_8446_77D8_2BD2_027C5006BE41;
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** A link to an optional configuration page for this solution. */
			ConfigurationPageId: DevKit.Controls.Lookup;
			/** Description of the solution. */
			Description: DevKit.Controls.String;
			/** User display name for the solution. */
			FriendlyName: DevKit.Controls.String;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** Date and time when the solution was installed/upgraded. */
			InstalledOn: DevKit.Controls.Date;
			/** Indicates whether the solution is managed or unmanaged. */
			IsManaged: DevKit.Controls.Boolean;
			/** Unique identifier of the publisher. */
			PublisherId: DevKit.Controls.Lookup;
			/** The unique name of this solution */
			UniqueName: DevKit.Controls.String;
			/** Solution version, used to identify a solution for upgrades and hotfixes. */
			Version: DevKit.Controls.String;
		}
		interface Navigation {
			solution_fieldsecurityprofile: DevKit.Controls.NavigationItem,
			solution_parent_solution: DevKit.Controls.NavigationItem,
			solution_role: DevKit.Controls.NavigationItem,
			solution_solutioncomponent: DevKit.Controls.NavigationItem,
			user_settings_preferred_solution: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {

		}
		interface ProcessPhone_to_Case_Process {

		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
	}
	class FormSolution_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Solution_Information */
		Body: DevKit.FormSolution_Information.Body;
		/** The Navigation of form Solution_Information */
		Navigation: DevKit.FormSolution_Information.Navigation;
		/** The Process of form Solution_Information */
		Process: DevKit.FormSolution_Information.Process;
		/** The SidePanes of form Solution_Information */
		SidePanes: DevKit.SidePanes;
	}
	class SolutionApi {
		/**
		* DynamicsCrm.DevKit SolutionApi
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
		/** A link to an optional configuration page for this solution. */
		ConfigurationPageId: string;
		/** Unique identifier of the user who created the solution. */
		readonly CreatedBy: string;
		/** Date and time when the solution was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the solution. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the solution. */
		Description: string;
		/** Indicates if solution is enabled for source control integration */
		EnabledForSourceControlIntegration: boolean;
		/** File Id for the blob url used for file storage. */
		readonly FileId_name: string;
		/** User display name for the solution. */
		FriendlyName: string;
		/** Date and time when the solution was installed/upgraded. */
		readonly InstalledOn_UtcDateOnly: Date;
		/** Information about whether the solution is api managed. */
		readonly IsApiManaged: boolean;
		/** Indicates whether the solution is internal or not. */
		readonly IsInternal: boolean;
		/** Indicates whether the solution is managed or unmanaged. */
		readonly IsManaged: boolean;
		/** Indicates whether the solution is visible outside of the platform. */
		readonly IsVisible: boolean;
		/** Unique identifier of the user who last modified the solution. */
		readonly ModifiedBy: string;
		/** Date and time when the solution was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the solution. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the solution. */
		readonly OrganizationId: string;
		/** Unique identifier of the parent solution. Should only be non-null if this solution is a patch. */
		readonly ParentSolutionId: string;
		readonly PinpointAssetId: string;
		/** Identifier of the publisher of this solution in Microsoft Pinpoint. */
		readonly PinpointPublisherId: number;
		/** Default locale of the solution in Microsoft Pinpoint. */
		readonly PinpointSolutionDefaultLocale: string;
		/** Identifier of the solution in Microsoft Pinpoint. */
		readonly PinpointSolutionId: number;
		/** Unique identifier of the publisher. */
		PublisherId: string;
		/** Unique identifier of the solution. */
		SolutionId: string;
		/** Solution package source organization version */
		SolutionPackageVersion: string;
		/** Solution Type */
		SolutionType: OptionSet.Solution.SolutionType;
		/** Indicates the current status of source control integration */
		SourceControlSyncStatus: OptionSet.Solution.SourceControlSyncStatus;
		/** The template suffix of this solution */
		TemplateSuffix: string;
		/** thumbprint of the solution signature */
		Thumbprint: string;
		/** The unique name of this solution */
		UniqueName: string;
		/** Date and time when the solution was updated. */
		readonly UpdatedOn_UtcDateAndTime: Date;
		/** Contains component info for the solution upgrade operation */
		readonly UpgradeInfo: string;
		/** Solution version, used to identify a solution for upgrades and hotfixes. */
		Version: string;
		readonly VersionNumber: number;
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
			/** 2 */
			Internal,
			/** 0 */
			None,
			/** 1 */
			Snapshot
		}
		enum SourceControlSyncStatus {
			/** 4 */
			Committed,
			/** 2 */
			Errors_in_initial_sync,
			/** 1 */
			Initial_sync_in_progress,
			/** 0 */
			Not_started,
			/** 3 */
			Pending_changes_to_be_committed
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