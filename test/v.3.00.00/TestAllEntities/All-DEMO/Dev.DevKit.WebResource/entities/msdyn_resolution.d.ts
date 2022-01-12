//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_resolution_Information {
		interface tab__A27029FB_3E0D_47A2_8E76_D8A7324573A1_Sections {
			_01AE3C7C_F2F8_4A0B_8C9C_D08DBF8696AC: DevKit.Controls.Section;
			_A27029FB_3E0D_47A2_8E76_D8A7324573A1_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_Incident_Type_Resolutions_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__A27029FB_3E0D_47A2_8E76_D8A7324573A1 extends DevKit.Controls.ITab {
			Section: tab__A27029FB_3E0D_47A2_8E76_D8A7324573A1_Sections;
		}
		interface tab_Incident_Type_Resolutions extends DevKit.Controls.ITab {
			Section: tab_Incident_Type_Resolutions_Sections;
		}
		interface Tabs {
			_A27029FB_3E0D_47A2_8E76_D8A7324573A1: tab__A27029FB_3E0D_47A2_8E76_D8A7324573A1;
			Incident_Type_Resolutions: tab_Incident_Type_Resolutions;
		}
		interface Body {
			Tab: Tabs;
			msdyn_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_resolution_msdyn_incidenttyperesolution_Resolution: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_resolution_msdyn_workorder_PrimaryResolution: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_resolution_msdyn_workorderincident_PrimaryResolution: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_resolution_msdyn_workorderresolution_Resolution: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Incident_Type_Resolutions: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_resolution_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_resolution_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resolution_Information */
		Body: DevKit.Formmsdyn_resolution_Information.Body;
		/** The Navigation of form msdyn_resolution_Information */
		Navigation: DevKit.Formmsdyn_resolution_Information.Navigation;
		/** The Grid of form msdyn_resolution_Information */
		Grid: DevKit.Formmsdyn_resolution_Information.Grid;
		/** The SidePanes of form msdyn_resolution_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_resolutionApi {
		/**
		* DynamicsCrm.DevKit msdyn_resolutionApi
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
		msdyn_description: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_resolutionId: DevKit.WebApi.GuidValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Resolution */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Resolution */
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
	namespace msdyn_resolution {
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