//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCodeSnippet {
		interface Tabs {
		}
		interface Body {
			msdynmkt_eventjson: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_eventmetadata_eventmetadata_sdkmessagepro: DevKit.Controls.NavigationItem,
			msdynmkt_eventmetadata_journeyevent: DevKit.Controls.NavigationItem
		}
	}
	class FormCodeSnippet extends DevKit.IForm {
		/**
		* CodeSnippet [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CodeSnippet */
		Body: DevKit.FormCodeSnippet.Body;
		/** The Navigation of form CodeSnippet */
		Navigation: DevKit.FormCodeSnippet.Navigation;
		/** The SidePanes of form CodeSnippet */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEvent_Designer {
		interface tab_tab_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab extends DevKit.Controls.ITab {
			Section: tab_tab_Sections;
		}
		interface Tabs {
			tab: tab_tab;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_eventjson: DevKit.Controls.String;
			/** Supported list of the entities that can be associated with the Target Id. */
			msdynmkt_supportedtargetentities: DevKit.Controls.String;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_eventmetadata_eventmetadata_sdkmessagepro: DevKit.Controls.NavigationItem,
			msdynmkt_eventmetadata_journeyevent: DevKit.Controls.NavigationItem
		}
	}
	class FormEvent_Designer extends DevKit.IForm {
		/**
		* Event Designer [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Event_Designer */
		Body: DevKit.FormEvent_Designer.Body;
		/** The Navigation of form Event_Designer */
		Navigation: DevKit.FormEvent_Designer.Navigation;
		/** The SidePanes of form Event_Designer */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_eventmetadata_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_eventmetadata_eventmetadata_sdkmessagepro: DevKit.Controls.NavigationItem,
			msdynmkt_eventmetadata_journeyevent: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_eventmetadata_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_eventmetadata_Information */
		Body: DevKit.Formmsdynmkt_eventmetadata_Information.Body;
		/** The Navigation of form msdynmkt_eventmetadata_Information */
		Navigation: DevKit.Formmsdynmkt_eventmetadata_Information.Navigation;
		/** The SidePanes of form msdynmkt_eventmetadata_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_eventmetadataApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_eventmetadataApi
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
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdynmkt_eventmetadata.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique name of the catalog for this event. */
		readonly msdynmkt_cataloguniquename: string;
		/** Location of the CDPA export registered for this event. */
		msdynmkt_cdpaexportlocation: string;
		/** Unique identifier for Custom API associated with EventMetadata. */
		msdynmkt_customapiid: string;
		/** Tracks code versions used by CXP to handle event metadata lifecycle. */
		msdynmkt_cxpversioningjson: string;
		msdynmkt_eventjson: string;
		/** Unique identifier for entity instances */
		msdynmkt_eventmetadataId: string;
		/** Status */
		msdynmkt_eventmetadatastatus: OptionSet.msdynmkt_eventmetadata.msdynmkt_eventmetadatastatus;
		/** Name of the icon to display for the event. */
		readonly msdynmkt_iconpath: string;
		/** Integration Status */
		msdynmkt_integrationstatus: OptionSet.msdynmkt_eventmetadata.msdynmkt_integrationstatus;
		/** Date and time when the integration status was last computed. */
		msdynmkt_integrationstatuscomputedon_UtcDateAndTime: Date;
		/** Number of published journeys that use this CXP event metadata. */
		msdynmkt_journeycount: number;
		/** Last Updated time of rollup field Journeys usage (Live). */
		readonly msdynmkt_journeycount_Date_UtcDateAndTime: Date;
		/** State of rollup field Journeys usage (Live). */
		readonly msdynmkt_journeycount_State: number;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Source entity logical name */
		msdynmkt_sourceentity: string;
		/** State */
		msdynmkt_state: OptionSet.msdynmkt_eventmetadata.msdynmkt_state;
		/** Supported list of the entities that can be associated with the Target Id. */
		msdynmkt_supportedtargetentities: string;
		/** Supported list of the entity display names that can be associated with the Target Id. */
		readonly msdynmkt_supportedtargetentitiesdisplaynames: string;
		/** Unique Name for the entity. */
		msdynmkt_uniquename: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the EventMetadata */
		statecode: OptionSet.msdynmkt_eventmetadata.statecode;
		/** Reason for the status of the EventMetadata */
		statuscode: OptionSet.msdynmkt_eventmetadata.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique name of the catalog for this event. */
			readonly msdynmkt_cataloguniquename: string;
			/** Location of the CDPA export registered for this event. */
			readonly msdynmkt_cdpaexportlocation: string;
			/** Unique identifier for Custom API associated with EventMetadata. */
			readonly msdynmkt_customapiid: string;
			/** Tracks code versions used by CXP to handle event metadata lifecycle. */
			readonly msdynmkt_cxpversioningjson: string;
			readonly msdynmkt_eventjson: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_eventmetadataId: string;
			/** Status */
			readonly msdynmkt_eventmetadatastatus: string;
			/** Name of the icon to display for the event. */
			readonly msdynmkt_iconpath: string;
			/** Integration Status */
			readonly msdynmkt_integrationstatus: string;
			/** Date and time when the integration status was last computed. */
			readonly msdynmkt_integrationstatuscomputedon_UtcDateAndTime: string;
			/** Number of published journeys that use this CXP event metadata. */
			readonly msdynmkt_journeycount: string;
			/** Last Updated time of rollup field Journeys usage (Live). */
			readonly msdynmkt_journeycount_Date_UtcDateAndTime: string;
			/** State of rollup field Journeys usage (Live). */
			readonly msdynmkt_journeycount_State: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Source entity logical name */
			readonly msdynmkt_sourceentity: string;
			/** State */
			readonly msdynmkt_state: string;
			/** Supported list of the entities that can be associated with the Target Id. */
			readonly msdynmkt_supportedtargetentities: string;
			/** Supported list of the entity display names that can be associated with the Target Id. */
			readonly msdynmkt_supportedtargetentitiesdisplaynames: string;
			/** Unique Name for the entity. */
			readonly msdynmkt_uniquename: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the EventMetadata */
			readonly statecode: string;
			/** Reason for the status of the EventMetadata */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdynmkt_eventmetadata {
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
		enum msdynmkt_eventmetadatastatus {
			/** 534120000 */
			Draft,
			/** 534120001 */
			Published,
			/** 534120002 */
			Stopped
		}
		enum msdynmkt_integrationstatus {
			/** 534120001 */
			Integrated,
			/** 534120002 */
			NotIntegrated,
			/** 534120000 */
			Unknown
		}
		enum msdynmkt_state {
			/** 534120006 */
			Deleted,
			/** 534120005 */
			Deleting,
			/** 534120000 */
			Draft,
			/** 534120001 */
			Getting_ready,
			/** 534120002 */
			Ready_to_use,
			/** 534120008 */
			Resetting,
			/** 534120007 */
			Restarting,
			/** 534120004 */
			Stopped,
			/** 534120003 */
			Stopping
		}
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