//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formadx_setting_Information {
		interface Tabs {
		}
		interface Body {
			adx_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			adx_name: DevKit.Controls.String;
			adx_value: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formadx_setting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form adx_setting_Information */
		Body: DevKit.Formadx_setting_Information.Body;
		/** The Navigation of form adx_setting_Information */
		Navigation: DevKit.Formadx_setting_Information.Navigation;
		/** The SidePanes of form adx_setting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class adx_settingApi {
		/**
		* DynamicsCrm.DevKit adx_settingApi
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
		adx_description: string;
		adx_encryptedcontent: string;
		/** The name of the custom entity. */
		adx_name: string;
		/** Shows the entity instances. */
		adx_settingId: string;
		adx_value: string;
		/** Shows the user who created the record. */
		readonly CreatedBy: string;
		/** Shows when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows when the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Setting */
		statecode: OptionSet.adx_setting.statecode;
		/** Select the Setting's status. */
		statuscode: OptionSet.adx_setting.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly adx_description: string;
			readonly adx_encryptedcontent: string;
			/** The name of the custom entity. */
			readonly adx_name: string;
			/** Shows the entity instances. */
			readonly adx_settingId: string;
			readonly adx_value: string;
			/** Shows the user who created the record. */
			readonly CreatedBy: string;
			/** Shows when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows when the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Setting */
			readonly statecode: string;
			/** Select the Setting's status. */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_setting {
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