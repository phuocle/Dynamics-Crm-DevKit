//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_entityroutingconfiguration_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C_Sections {
			_26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C_SECTION_3: DevKit.Controls.Section;
			_D8D04141_73FF_41BF_B74D_819968C82ACE: DevKit.Controls.Section;
		}
		interface tab_Routing_Rules_Sections {
			Routing_Rule_Section: DevKit.Controls.Section;
		}
		interface tab__26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C extends DevKit.Controls.ITab {
			Section: tab__26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C_Sections;
		}
		interface tab_Routing_Rules extends DevKit.Controls.ITab {
			Section: tab_Routing_Rules_Sections;
		}
		interface Tabs {
			_26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C: tab__26576EBB_4A2E_42CE_A2A9_6B1DC50D2B2C;
			Routing_Rules: tab_Routing_Rules;
		}
		interface Body {
			Tab: Tabs;
			/** Custom entity. */
			msdyn_entity: DevKit.Controls.String;
			/** Name of Entity Routing Configuration */
			msdyn_name: DevKit.Controls.String;
			/** Field to bind Routing Rule Subgrid wrapper control */
			msdyn_routingrulesubgrid: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_entityroutingconfiguration_msdyn_liveworkstream: DevKit.Controls.NavigationItem
		}
		interface Grid {
			workstreamgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_entityroutingconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_entityroutingconfiguration_Information */
		Body: DevKit.Formmsdyn_entityroutingconfiguration_Information.Body;
		/** The Header section of form msdyn_entityroutingconfiguration_Information */
		Header: DevKit.Formmsdyn_entityroutingconfiguration_Information.Header;
		/** The Navigation of form msdyn_entityroutingconfiguration_Information */
		Navigation: DevKit.Formmsdyn_entityroutingconfiguration_Information.Navigation;
		/** The Grid of form msdyn_entityroutingconfiguration_Information */
		Grid: DevKit.Formmsdyn_entityroutingconfiguration_Information.Grid;
		/** The SidePanes of form msdyn_entityroutingconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_entityroutingconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_entityroutingconfigurationApi
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
		/** Process used for configuring the derouting criteria */
		msdyn_DeroutingProcess: string;
		/** Custom entity. */
		msdyn_entity: string;
		/** Unique identifier for entity instances */
		msdyn_entityroutingconfigurationId: string;
		/** Entity set name of the entity being routed */
		msdyn_entitysetname: string;
		/** Name of Entity Routing Configuration */
		msdyn_name: string;
		/** Relationship name of the entity with LiveWorkItem entity */
		msdyn_relationshipname: string;
		/** Routing Process */
		msdyn_RoutingProcess: string;
		/** Field to bind Routing Rule Subgrid wrapper control */
		msdyn_routingrulesubgrid: string;
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
		/** Status of the Entity Routing Configuration */
		statecode: OptionSet.msdyn_entityroutingconfiguration.statecode;
		/** Reason for the status of the Entity Routing Configuration */
		statuscode: OptionSet.msdyn_entityroutingconfiguration.statuscode;
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
			/** Process used for configuring the derouting criteria */
			readonly msdyn_DeroutingProcess: string;
			/** Custom entity. */
			readonly msdyn_entity: string;
			/** Unique identifier for entity instances */
			readonly msdyn_entityroutingconfigurationId: string;
			/** Entity set name of the entity being routed */
			readonly msdyn_entitysetname: string;
			/** Name of Entity Routing Configuration */
			readonly msdyn_name: string;
			/** Relationship name of the entity with LiveWorkItem entity */
			readonly msdyn_relationshipname: string;
			/** Routing Process */
			readonly msdyn_RoutingProcess: string;
			/** Field to bind Routing Rule Subgrid wrapper control */
			readonly msdyn_routingrulesubgrid: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the Entity Routing Configuration */
			readonly statecode: string;
			/** Reason for the status of the Entity Routing Configuration */
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
	namespace msdyn_entityroutingconfiguration {
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