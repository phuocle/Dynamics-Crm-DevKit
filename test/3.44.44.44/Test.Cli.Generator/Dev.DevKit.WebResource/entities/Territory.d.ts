//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTerritory_Information {
		interface tab_general_Sections {
			description: DevKit.Controls.Section;
			territory_information: DevKit.Controls.Section;
		}
		interface tab_subterritories_tab_Sections {
			territory_tab1_section_1: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_subterritories_tab extends DevKit.Controls.ITab {
			Section: tab_subterritories_tab_Sections;
		}
		interface Tabs {
			general: tab_general;
			subterritories_tab: tab_subterritories_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the territory. */
			Description: DevKit.Controls.String;
			/** Unique identifier of the manager of the territory. */
			ManagerId: DevKit.Controls.Lookup;
			/** Name of the territory. */
			Name: DevKit.Controls.String;
			/** Choose the parent for this territory. */
			ParentTerritoryId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_territory_account_ServiceTerritory: DevKit.Controls.NavigationItem,
			msdyn_territory_msdyn_actual_ServiceTerritory: DevKit.Controls.NavigationItem,
			msdyn_territory_msdyn_agreement_ServiceTerritory: DevKit.Controls.NavigationItem,
			msdyn_territory_msdyn_postalcode_ServiceTerritory: DevKit.Controls.NavigationItem,
			msdyn_territory_msdyn_resourcerequirement_Territory: DevKit.Controls.NavigationItem,
			msdyn_territory_msdyn_resourceterritory_Territory: DevKit.Controls.NavigationItem,
			msdyn_territory_msdyn_workorder_ServiceTerritory: DevKit.Controls.NavigationItem,
			msdyn_territory_quotedetail_ServiceTerritory: DevKit.Controls.NavigationItem,
			territory_accounts: DevKit.Controls.NavigationItem,
			territory_parent_territory: DevKit.Controls.NavigationItem,
			territory_system_users: DevKit.Controls.NavigationItem
		}
		interface Grid {
			territories_subgrid: DevKit.Controls.Grid;
		}
	}
	class FormTerritory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Territory_Information */
		Body: DevKit.FormTerritory_Information.Body;
		/** The Navigation of form Territory_Information */
		Navigation: DevKit.FormTerritory_Information.Navigation;
		/** The Grid of form Territory_Information */
		Grid: DevKit.FormTerritory_Information.Grid;
		/** The SidePanes of form Territory_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTerritory_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Name of the territory. */
			Name: DevKit.Controls.String;
			/** Choose the parent for this territory. */
			ParentTerritoryId: DevKit.Controls.Lookup;
		}
	}
	class FormTerritory_Quick_Create extends DevKit.IForm {
		/**
		* Territory Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Territory_Quick_Create */
		Body: DevKit.FormTerritory_Quick_Create.Body;
	}
	class TerritoryApi {
		/**
		* DynamicsCrm.DevKit TerritoryApi
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
		/** Unique identifier of the user who created the territory. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the territory. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the territory. */
		Description: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Exchange rate for the currency associated with the territory with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the manager of the territory. */
		ManagerId: string;
		/** Unique identifier of the user who last modified the territory. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the territory. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the territory. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Choose the parent for this territory. */
		ParentTerritoryId: string;
		/** Unique identifier of the territory. */
		TerritoryId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the territory. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the territory. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the territory. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the territory. */
			readonly Description: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Exchange rate for the currency associated with the territory with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the manager of the territory. */
			readonly ManagerId: string;
			/** Unique identifier of the user who last modified the territory. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the territory. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the territory. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Choose the parent for this territory. */
			readonly ParentTerritoryId: string;
			/** Unique identifier of the territory. */
			readonly TerritoryId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the territory. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Territory {
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