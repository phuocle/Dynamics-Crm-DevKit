﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_configuration_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Controls.Section;
			tab_5_section_2: DevKit.Controls.Section;
			tab_5_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Controls.Section;
			tab_6_section_2: DevKit.Controls.Section;
			tab_6_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
			Section: tab_tab_6_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
			tab_6: tab_tab_6;
		}
		interface Body {
			Tab: Tabs;
			/** Audit & Diagnostics Setting that is associated to this configuration. */
			msdyusd_auditanddiagnosticssettingfield: DevKit.Controls.Lookup;
			/** Caching value for configuration specific caching */
			msdyusd_ClientConfigCacheVersionNumber: DevKit.Controls.String;
			msdyusd_Description: DevKit.Controls.String;
			/** Is Default Configuration */
			msdyusd_isdefault: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			/** UCI Settings that is associated to this configuration. */
			msdyusd_ucisettingsid: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Configuration */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyusd_configuration_users: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ActionCalls: DevKit.Controls.Grid;
			AgentScripts: DevKit.Controls.Grid;
			CustomizationFiles: DevKit.Controls.Grid;
			EntitySearches: DevKit.Controls.Grid;
			Events: DevKit.Controls.Grid;
			Forms: DevKit.Controls.Grid;
			HostedControls: DevKit.Controls.Grid;
			Options: DevKit.Controls.Grid;
			Scriplets: DevKit.Controls.Grid;
			SessionLines: DevKit.Controls.Grid;
			Toolbars: DevKit.Controls.Grid;
			usergrid: DevKit.Controls.Grid;
			WindowNavigationRules: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_configuration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_configuration_Information */
		Body: DevKit.Formmsdyusd_configuration_Information.Body;
		/** The Footer section of form msdyusd_configuration_Information */
		Footer: DevKit.Formmsdyusd_configuration_Information.Footer;
		/** The Navigation of form msdyusd_configuration_Information */
		Navigation: DevKit.Formmsdyusd_configuration_Information.Navigation;
		/** The Process of form msdyusd_configuration_Information */
		Process: DevKit.Formmsdyusd_configuration_Information.Process;
		/** The Grid of form msdyusd_configuration_Information */
		Grid: DevKit.Formmsdyusd_configuration_Information.Grid;
		/** The SidePanes of form msdyusd_configuration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyusd_configurationApi {
		/**
		* DynamicsCrm.DevKit msdyusd_configurationApi
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
		/** Audit & Diagnostics Setting that is associated to this configuration. */
		msdyusd_auditanddiagnosticssettingfield: string;
		/** Caching value for configuration specific caching */
		msdyusd_ClientConfigCacheVersionNumber: string;
		/** Unique identifier for entity instances */
		msdyusd_configurationId: string;
		msdyusd_Description: string;
		/** Is Default Configuration */
		msdyusd_isdefault: boolean;
		/** The name of the custom entity. */
		msdyusd_name: string;
		msdyusd_parentconfigurationid: string;
		/** UCI Settings that is associated to this configuration. */
		msdyusd_ucisettingsid: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Configuration */
		statecode: OptionSet.msdyusd_configuration.statecode;
		/** Reason for the status of the Configuration */
		statuscode: OptionSet.msdyusd_configuration.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyusd_configuration {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}