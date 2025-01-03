﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_Configuration_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_Name: DevKit.Controls.String;
			msdyn_Type: DevKit.Controls.OptionSet;
			/** To store queries and templates. */
			msdyn_Value: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_Configuration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_Configuration_Information */
		Body: DevKit.Formmsdyn_Configuration_Information.Body;
		/** The Navigation of form msdyn_Configuration_Information */
		Navigation: DevKit.Formmsdyn_Configuration_Information.Navigation;
		/** The SidePanes of form msdyn_Configuration_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_Configuration_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate: DevKit.Controls.NavigationItem,
			msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_Configuration_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_Configuration_Information2 */
		Body: DevKit.Formmsdyn_Configuration_Information2.Body;
		/** The Navigation of form msdyn_Configuration_Information2 */
		Navigation: DevKit.Formmsdyn_Configuration_Information2.Navigation;
		/** The SidePanes of form msdyn_Configuration_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ConfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_ConfigurationApi
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
		/** Unique identifier for entity instances */
		msdyn_ConfigurationId: string;
		/** The name of the custom entity. */
		msdyn_Name: string;
		msdyn_Type: OptionSet.msdyn_Configuration.msdyn_Type;
		/** To store queries and templates. */
		msdyn_Value: string;
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
		statecode: OptionSet.msdyn_Configuration.statecode;
		/** Reason for the status of the Configuration */
		statuscode: OptionSet.msdyn_Configuration.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msdyn_ConfigurationId: string;
			/** The name of the custom entity. */
			readonly msdyn_Name: string;
			readonly msdyn_Type: string;
			/** To store queries and templates. */
			readonly msdyn_Value: string;
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
			/** Status of the Configuration */
			readonly statecode: string;
			/** Reason for the status of the Configuration */
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
	namespace msdyn_Configuration {
		enum msdyn_Type {
			/** 192350005 */
			Clone_Entity_Query,
			/** 192350000 */
			Filter_Layout,
			/** 192350001 */
			Resource_Cell_Template,
			/** 192350002 */
			Retrieve_Resources_Query,
			/** 192350003 */
			Schedule_Assistant_Filter_Layout,
			/** 192350004 */
			Schedule_Assistant_Retrieve_Constraints_Query
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