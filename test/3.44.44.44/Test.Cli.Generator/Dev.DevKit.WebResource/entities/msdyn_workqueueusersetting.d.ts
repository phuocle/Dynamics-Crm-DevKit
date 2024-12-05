//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workqueueusersetting_Information {
		interface Tabs {
		}
		interface Body {
			/** Name of the entity for the related workqueue user settings. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_workqueueusersetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workqueueusersetting_Information */
		Body: DevKit.Formmsdyn_workqueueusersetting_Information.Body;
		/** The Navigation of form msdyn_workqueueusersetting_Information */
		Navigation: DevKit.Formmsdyn_workqueueusersetting_Information.Navigation;
		/** The SidePanes of form msdyn_workqueueusersetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_workqueueusersettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_workqueueusersettingApi
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
		/** Work list user setting picklist for action on mark complete */
		msdyn_actiononmarkcomplete: OptionSet.msdyn_workqueueusersetting.msdyn_actiononmarkcomplete;
		/** Work list user setting picklist for action on skip */
		msdyn_actiononskip: OptionSet.msdyn_workqueueusersetting.msdyn_actiononskip;
		/** User configuration of linking between sequence step and activities */
		msdyn_linkingconfiguration: string;
		/** Name of the entity for the related workqueue user settings. */
		msdyn_name: string;
		/** Layouts of card designed by the seller */
		msdyn_sellercardlayout: string;
		msdyn_sellerfilterconfiguration: string;
		msdyn_sellersortconfiguration: string;
		msdyn_suggestionsellerfilterconfiguration: string;
		/** Unique identifier of the delegate user who owns the record. */
		msdyn_userid: string;
		/** Unique identifier for user setting instances. */
		msdyn_workqueueusersettingId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the setting. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the work list user setting */
		statecode: OptionSet.msdyn_workqueueusersetting.statecode;
		/** Reason for the status of the work list user setting */
		statuscode: OptionSet.msdyn_workqueueusersetting.statuscode;
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
			/** Work list user setting picklist for action on mark complete */
			readonly msdyn_actiononmarkcomplete: string;
			/** Work list user setting picklist for action on skip */
			readonly msdyn_actiononskip: string;
			/** User configuration of linking between sequence step and activities */
			readonly msdyn_linkingconfiguration: string;
			/** Name of the entity for the related workqueue user settings. */
			readonly msdyn_name: string;
			/** Layouts of card designed by the seller */
			readonly msdyn_sellercardlayout: string;
			readonly msdyn_sellerfilterconfiguration: string;
			readonly msdyn_sellersortconfiguration: string;
			readonly msdyn_suggestionsellerfilterconfiguration: string;
			/** Unique identifier of the delegate user who owns the record. */
			readonly msdyn_userid: string;
			/** Unique identifier for user setting instances. */
			readonly msdyn_workqueueusersettingId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the setting. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the work list user setting */
			readonly statecode: string;
			/** Reason for the status of the work list user setting */
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
	namespace msdyn_workqueueusersetting {
		enum msdyn_actiononmarkcomplete {
			/** 0 */
			Always_ask,
			/** 1 */
			Move_to_next,
			/** 2 */
			Stay_on_the_record
		}
		enum msdyn_actiononskip {
			/** 0 */
			Always_ask,
			/** 1 */
			Move_to_next,
			/** 2 */
			Stay_on_the_record
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