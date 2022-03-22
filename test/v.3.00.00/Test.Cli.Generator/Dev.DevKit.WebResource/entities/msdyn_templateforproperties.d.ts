//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_templateforproperties_Information {
		interface tab__188F2590_F9AA_48C2_9541_97CD71121D0C_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__188F2590_F9AA_48C2_9541_97CD71121D0C extends DevKit.Controls.ITab {
			Section: tab__188F2590_F9AA_48C2_9541_97CD71121D0C_Sections;
		}
		interface Tabs {
			_188F2590_F9AA_48C2_9541_97CD71121D0C: tab__188F2590_F9AA_48C2_9541_97CD71121D0C;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			AssetCategoriesSubgrid: DevKit.Controls.Grid;
			AssetsSubgrid: DevKit.Controls.Grid;
			PropertiesSubgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_templateforproperties_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_templateforproperties_Information */
		Body: DevKit.Formmsdyn_templateforproperties_Information.Body;
		/** The Navigation of form msdyn_templateforproperties_Information */
		Navigation: DevKit.Formmsdyn_templateforproperties_Information.Navigation;
		/** The Process of form msdyn_templateforproperties_Information */
		Process: DevKit.Formmsdyn_templateforproperties_Information.Process;
		/** The Grid of form msdyn_templateforproperties_Information */
		Grid: DevKit.Formmsdyn_templateforproperties_Information.Grid;
		/** The SidePanes of form msdyn_templateforproperties_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_templateforpropertiesApi {
		/**
		* DynamicsCrm.DevKit msdyn_templateforpropertiesApi
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
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_templateforpropertiesId: string;
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
		/** Status of the Template For Properties */
		statecode: OptionSet.msdyn_templateforproperties.statecode;
		/** Reason for the status of the Template For Properties */
		statuscode: OptionSet.msdyn_templateforproperties.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_templateforproperties {
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