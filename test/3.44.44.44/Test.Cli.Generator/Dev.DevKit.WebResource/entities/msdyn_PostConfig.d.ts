//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_PostConfig_Information {
		interface tab_tab_notification_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_notification extends DevKit.Controls.ITab {
			Section: tab_tab_notification_Sections;
		}
		interface Tabs {
			tab_notification: tab_tab_notification;
		}
		interface Body {
			Tab: Tabs;
			/** Enables or disables the wall on the entity form. */
			msdyn_ConfigureWall: DevKit.Controls.Boolean;
			/** Logical name of the entity configured by this object. */
			msdyn_EntityName: DevKit.Controls.String;
			/** Information about the success or failure of the configuration. */
			msdyn_Status: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_postconfig_msdyn_postruleconfig: DevKit.Controls.NavigationItem,
			msdyn_postconfig_wallsavedquery: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ActivityFeedsRules: DevKit.Controls.Grid;
			Views: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_PostConfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_PostConfig_Information */
		Body: DevKit.Formmsdyn_PostConfig_Information.Body;
		/** The Navigation of form msdyn_PostConfig_Information */
		Navigation: DevKit.Formmsdyn_PostConfig_Information.Navigation;
		/** The Grid of form msdyn_PostConfig_Information */
		Grid: DevKit.Formmsdyn_PostConfig_Information.Grid;
		/** The SidePanes of form msdyn_PostConfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_PostConfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_PostConfigApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Enables or disables the wall on the entity form. */
		msdyn_ConfigureWall: boolean;
		/** Display name of the entity configured by this object. */
		msdyn_EntityDisplayName: string;
		/** Logical name of the entity configured by this object. */
		msdyn_EntityName: string;
		/** Identifier for the view of records that a user follows. */
		msdyn_FollowingViewId: string;
		/** Identifier for the view of records that a user follows. */
		msdyn_FollowingViewId2: string;
		/** Object Type Code of the entity */
		msdyn_Otc: number;
		/** Unique identifier of the post configuration for this rule. */
		msdyn_PostConfigId: string;
		/** Information about the success or failure of the configuration. */
		msdyn_Status: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Post Configuration */
		statecode: OptionSet.msdyn_PostConfig.statecode;
		/** Reason for the status of the Post Configuration */
		statuscode: OptionSet.msdyn_PostConfig.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Enables or disables the wall on the entity form. */
			readonly msdyn_ConfigureWall: string;
			/** Display name of the entity configured by this object. */
			readonly msdyn_EntityDisplayName: string;
			/** Logical name of the entity configured by this object. */
			readonly msdyn_EntityName: string;
			/** Identifier for the view of records that a user follows. */
			readonly msdyn_FollowingViewId: string;
			/** Identifier for the view of records that a user follows. */
			readonly msdyn_FollowingViewId2: string;
			/** Object Type Code of the entity */
			readonly msdyn_Otc: string;
			/** Unique identifier of the post configuration for this rule. */
			readonly msdyn_PostConfigId: string;
			/** Information about the success or failure of the configuration. */
			readonly msdyn_Status: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Post Configuration */
			readonly statecode: string;
			/** Reason for the status of the Post Configuration */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_PostConfig {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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