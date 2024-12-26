//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_surveyconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_surveyconfigApi
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
		/** Agent survey associated with this survey config */
		msdyn_agentsurveyid: string;
		/** Bot survey associated with this survey config */
		msdyn_botsurveyid: string;
		/** Unique identifier for entity instances */
		msdyn_surveyconfigId: string;
		/** Survey config name */
		msdyn_surveyconfigname: string;
		/** Channel id associated with survey config by polymorphic lookup */
		msdyn_targetchannelid_msdyn_livechatconfig: string;
		/** Channel id associated with survey config by polymorphic lookup */
		msdyn_targetchannelid_msdyn_ocfbpage: string;
		/** Channel id associated with survey config by polymorphic lookup */
		msdyn_targetchannelid_msdyn_oclinechannelconfig: string;
		/** Channel id associated with survey config by polymorphic lookup */
		msdyn_targetchannelid_msdyn_ocsmschannelsetting: string;
		/** Channel id associated with survey config by polymorphic lookup */
		msdyn_targetchannelid_msdyn_octeamschannelconfig: string;
		/** Channel id associated with survey config by polymorphic lookup */
		msdyn_targetchannelid_msdyn_ocvoicechannelsetting: string;
		/** Channel id associated with survey config by polymorphic lookup */
		msdyn_targetchannelid_msdyn_ocwhatsappchannelnumber: string;
		/** Channel logical name associated with survey config */
		msdyn_targetchannellogicalname: string;
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
		/** Status of the msdyn_surveyconfig */
		statecode: OptionSet.msdyn_surveyconfig.statecode;
		/** Reason for the status of the msdyn_surveyconfig */
		statuscode: OptionSet.msdyn_surveyconfig.statuscode;
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
			/** Agent survey associated with this survey config */
			readonly msdyn_agentsurveyid: string;
			/** Bot survey associated with this survey config */
			readonly msdyn_botsurveyid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_surveyconfigId: string;
			/** Survey config name */
			readonly msdyn_surveyconfigname: string;
			/** Channel id associated with survey config by polymorphic lookup */
			readonly msdyn_targetchannelid_msdyn_livechatconfig: string;
			/** Channel id associated with survey config by polymorphic lookup */
			readonly msdyn_targetchannelid_msdyn_ocfbpage: string;
			/** Channel id associated with survey config by polymorphic lookup */
			readonly msdyn_targetchannelid_msdyn_oclinechannelconfig: string;
			/** Channel id associated with survey config by polymorphic lookup */
			readonly msdyn_targetchannelid_msdyn_ocsmschannelsetting: string;
			/** Channel id associated with survey config by polymorphic lookup */
			readonly msdyn_targetchannelid_msdyn_octeamschannelconfig: string;
			/** Channel id associated with survey config by polymorphic lookup */
			readonly msdyn_targetchannelid_msdyn_ocvoicechannelsetting: string;
			/** Channel id associated with survey config by polymorphic lookup */
			readonly msdyn_targetchannelid_msdyn_ocwhatsappchannelnumber: string;
			/** Channel logical name associated with survey config */
			readonly msdyn_targetchannellogicalname: string;
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
			/** Status of the msdyn_surveyconfig */
			readonly statecode: string;
			/** Reason for the status of the msdyn_surveyconfig */
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
	namespace msdyn_surveyconfig {
		enum msdyn_targetchannelidIdType {
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