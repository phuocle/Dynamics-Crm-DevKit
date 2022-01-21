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
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Post Configuration */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_postconfig_msdyn_postruleconfig: DevKit.Controls.NavigationItem,
			nav_msdyn_postconfig_wallsavedquery: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
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
		/** The Footer section of form msdyn_PostConfig_Information */
		Footer: DevKit.Formmsdyn_PostConfig_Information.Footer;
		/** The Navigation of form msdyn_PostConfig_Information */
		Navigation: DevKit.Formmsdyn_PostConfig_Information.Navigation;
		/** The Process of form msdyn_PostConfig_Information */
		Process: DevKit.Formmsdyn_PostConfig_Information.Process;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enables or disables the wall on the entity form. */
		msdyn_ConfigureWall: DevKit.WebApi.BooleanValue;
		/** Display name of the entity configured by this object. */
		msdyn_EntityDisplayName: DevKit.WebApi.StringValue;
		/** Logical name of the entity configured by this object. */
		msdyn_EntityName: DevKit.WebApi.StringValue;
		/** Identifier for the view of records that a user follows. */
		msdyn_FollowingViewId: DevKit.WebApi.StringValue;
		/** Identifier for the view of records that a user follows. */
		msdyn_FollowingViewId2: DevKit.WebApi.StringValue;
		/** Object Type Code of the entity */
		msdyn_Otc: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the post configuration for this rule. */
		msdyn_PostConfigId: DevKit.WebApi.GuidValue;
		/** Information about the success or failure of the configuration. */
		msdyn_Status: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Post Configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Post Configuration */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}