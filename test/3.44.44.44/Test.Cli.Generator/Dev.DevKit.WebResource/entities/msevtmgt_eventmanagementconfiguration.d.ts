//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_eventmanagementconfiguration_Information {
		interface tab__D56E1811_CE09_4D4D_9EE1_D93EA081C5C8_Sections {
			_6A115463_CCBE_4FA6_8C16_C427CF837F90: DevKit.Controls.Section;
			_D56E1811_CE09_4D4D_9EE1_D93EA081C5C8_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__D56E1811_CE09_4D4D_9EE1_D93EA081C5C8 extends DevKit.Controls.ITab {
			Section: tab__D56E1811_CE09_4D4D_9EE1_D93EA081C5C8_Sections;
		}
		interface Tabs {
			_D56E1811_CE09_4D4D_9EE1_D93EA081C5C8: tab__D56E1811_CE09_4D4D_9EE1_D93EA081C5C8;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_authenticationresource: DevKit.Controls.String;
			msevtmgt_authenticationtokenendpoint: DevKit.Controls.String;
			msevtmgt_configcacheexpirationdate: DevKit.Controls.DateTime;
			msevtmgt_configcacheexpirationinsec: DevKit.Controls.Integer;
			msevtmgt_discoveryendpointurl: DevKit.Controls.String;
			msevtmgt_organization_config: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsevtmgt_eventmanagementconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_eventmanagementconfiguration_Information */
		Body: DevKit.Formmsevtmgt_eventmanagementconfiguration_Information.Body;
		/** The Navigation of form msevtmgt_eventmanagementconfiguration_Information */
		Navigation: DevKit.Formmsevtmgt_eventmanagementconfiguration_Information.Navigation;
		/** The SidePanes of form msevtmgt_eventmanagementconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_eventmanagementconfigurationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_eventmanagementconfigurationApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_authenticationresource: string;
		msevtmgt_authenticationtokenendpoint: string;
		msevtmgt_configcachecreatedon_UtcDateOnly: Date;
		msevtmgt_configcacheexpirationdate_UtcDateAndTime: Date;
		msevtmgt_configcacheexpirationinsec: number;
		msevtmgt_configuration_state: OptionSet.msevtmgt_eventmanagementconfiguration.msevtmgt_configuration_state;
		msevtmgt_discoveryendpointurl: string;
		/** Unique identifier for entity instances */
		msevtmgt_eventmanagementconfigurationId: string;
		msevtmgt_organization_config: string;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record */
		readonly OwningUser: string;
		/** Status of the event management configuration */
		statecode: OptionSet.msevtmgt_eventmanagementconfiguration.statecode;
		/** Reason for the status of the event management configuration */
		statuscode: OptionSet.msevtmgt_eventmanagementconfiguration.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_authenticationresource: string;
			readonly msevtmgt_authenticationtokenendpoint: string;
			readonly msevtmgt_configcachecreatedon_UtcDateOnly: string;
			readonly msevtmgt_configcacheexpirationdate_UtcDateAndTime: string;
			readonly msevtmgt_configcacheexpirationinsec: string;
			readonly msevtmgt_configuration_state: string;
			readonly msevtmgt_discoveryendpointurl: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_eventmanagementconfigurationId: string;
			readonly msevtmgt_organization_config: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record */
			readonly OwningUser: string;
			/** Status of the event management configuration */
			readonly statecode: string;
			/** Reason for the status of the event management configuration */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_eventmanagementconfiguration {
		enum msevtmgt_configuration_state {
			/** 832530001 */
			Configured_successfully,
			/** 832530000 */
			Not_configured
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