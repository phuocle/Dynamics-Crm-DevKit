//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMobile_Offline_Profile {
		interface tab_GENERALINFORMATION_TAB_Sections {
			MOBILE_OFFLINE_PROFILE_ITEMS: DevKit.Controls.Section;
			profile_users: DevKit.Controls.Section;
			property_bag_properties_1: DevKit.Controls.Section;
		}
		interface tab_GENERALINFORMATION_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			GENERALINFORMATION_TAB: tab_GENERALINFORMATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Enter a description of the mobile offline profile. */
			Description: DevKit.Controls.String;
			/** Enter the name of the mobile offline profile. */
			Name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			profileitemgrid: DevKit.Controls.Grid;
			SystemUserGrid: DevKit.Controls.Grid;
		}
	}
	class FormMobile_Offline_Profile extends DevKit.IForm {
		/**
		* Mobile Offline Profile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mobile_Offline_Profile */
		Body: DevKit.FormMobile_Offline_Profile.Body;
		/** The Process of form Mobile_Offline_Profile */
		Process: DevKit.FormMobile_Offline_Profile.Process;
		/** The Grid of form Mobile_Offline_Profile */
		Grid: DevKit.FormMobile_Offline_Profile.Grid;
		/** The SidePanes of form Mobile_Offline_Profile */
		SidePanes: DevKit.SidePanes;
	}
	class MobileOfflineProfileApi {
		/**
		* DynamicsCrm.DevKit MobileOfflineProfileApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.MobileOfflineProfile.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Enter a description of the mobile offline profile. */
		Description: string;
		/** Version in which the Mobile offline Profile is introduced. */
		IntroducedVersion: string;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Information about whether profile is validated or not */
		readonly IsValidated: boolean;
		/** Unique identifier of the mobile offline profile. */
		MobileOfflineProfileId: string;
		/** For Internal Use Only */
		readonly MobileOfflineProfileIdUnique: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the name of the mobile offline profile. */
		Name: string;
		/** Unique identifier of the organization associated with the Mobile Offline Profile. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Displays the last published date time. */
		readonly PublishedOn_UtcDateAndTime: Date;
		/** Internal Use Only */
		readonly SelectedEntityMetadata: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Shows the ID of the stage. */
		StageId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Version number of the Mobile Offline Profile. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfile {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}