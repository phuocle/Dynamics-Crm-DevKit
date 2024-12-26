//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocsitdimportconfig_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_loadstatus: DevKit.Controls.OptionSet;
			/** The name of the data loading config. */
			msdyn_name: DevKit.Controls.String;
			/**  Skill finder model */
			msdyn_ocskillidentmlmodelid: DevKit.Controls.Lookup;
			/** No of records imported at given point of time from this import config */
			msdyn_recordsimported: DevKit.Controls.Integer;
			/** No of records skipped because of no or bad training data */
			msdyn_recordsskipped: DevKit.Controls.Integer;
			/** Total no of records imported from this import config */
			msdyn_totalrecordstoimport: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_ocsitrainingdata_ocsitdimportconfig: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ocsitdimportconfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocsitdimportconfig_Information */
		Body: DevKit.Formmsdyn_ocsitdimportconfig_Information.Body;
		/** The Navigation of form msdyn_ocsitdimportconfig_Information */
		Navigation: DevKit.Formmsdyn_ocsitdimportconfig_Information.Navigation;
		/** The SidePanes of form msdyn_ocsitdimportconfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocsitdimportconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocsitdimportconfigApi
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
		/** Data loading config */
		msdyn_cdsdataloadconfig: string;
		/** Data loading config type */
		msdyn_importconfigtype: OptionSet.msdyn_ocsitdimportconfig.msdyn_importconfigtype;
		msdyn_loadstatus: OptionSet.msdyn_ocsitdimportconfig.msdyn_loadstatus;
		/** The name of the data loading config. */
		msdyn_name: string;
		/** Unique identifier for data loading config */
		msdyn_ocsitdimportconfigId: string;
		/**  Skill finder model */
		msdyn_ocskillidentmlmodelid: string;
		/** No of records imported at given point of time from this import config */
		msdyn_recordsimported: number;
		/** No of records skipped because of no or bad training data */
		msdyn_recordsskipped: number;
		/** Total no of records imported from this import config */
		msdyn_totalrecordstoimport: number;
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
		/** Status of the ocsitdimportconfig */
		statecode: OptionSet.msdyn_ocsitdimportconfig.statecode;
		/** Reason for the status of the ocsitdimportconfig */
		statuscode: OptionSet.msdyn_ocsitdimportconfig.statuscode;
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
			/** Data loading config */
			readonly msdyn_cdsdataloadconfig: string;
			/** Data loading config type */
			readonly msdyn_importconfigtype: string;
			readonly msdyn_loadstatus: string;
			/** The name of the data loading config. */
			readonly msdyn_name: string;
			/** Unique identifier for data loading config */
			readonly msdyn_ocsitdimportconfigId: string;
			/**  Skill finder model */
			readonly msdyn_ocskillidentmlmodelid: string;
			/** No of records imported at given point of time from this import config */
			readonly msdyn_recordsimported: string;
			/** No of records skipped because of no or bad training data */
			readonly msdyn_recordsskipped: string;
			/** Total no of records imported from this import config */
			readonly msdyn_totalrecordstoimport: string;
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
			/** Status of the ocsitdimportconfig */
			readonly statecode: string;
			/** Reason for the status of the ocsitdimportconfig */
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
	namespace msdyn_ocsitdimportconfig {
		enum msdyn_importconfigtype {
			/** 617690000 */
			Conversation
		}
		enum msdyn_loadstatus {
			/** 192350002 */
			Load_completed,
			/** 192350003 */
			Load_failed,
			/** 192350001 */
			Loading_training_data,
			/** 192350000 */
			Triggering_load
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