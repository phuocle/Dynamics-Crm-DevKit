//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_roomreservation_Information {
		interface Tabs {
		}
		interface Body {
			msevtmgt_description: DevKit.Controls.String;
			msevtmgt_endtime: DevKit.Controls.DateTime;
			msevtmgt_event: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			msevtmgt_room: DevKit.Controls.Lookup;
			msevtmgt_session: DevKit.Controls.Lookup;
			msevtmgt_starttime: DevKit.Controls.DateTime;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsevtmgt_roomreservation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_roomreservation_Information */
		Body: DevKit.Formmsevtmgt_roomreservation_Information.Body;
		/** The Navigation of form msevtmgt_roomreservation_Information */
		Navigation: DevKit.Formmsevtmgt_roomreservation_Information.Navigation;
		/** The SidePanes of form msevtmgt_roomreservation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_roomreservationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_roomreservationApi
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
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_description: string;
		msevtmgt_endtime_TimezoneDateAndTime: Date;
		msevtmgt_event: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		msevtmgt_room: string;
		/** Unique identifier for entity instances */
		msevtmgt_roomreservationId: string;
		msevtmgt_session: string;
		msevtmgt_starttime_TimezoneDateAndTime: Date;
		/** Date and time that the record was migrated */
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
		/** Status of the room reservation */
		statecode: OptionSet.msevtmgt_roomreservation.statecode;
		/** Reason for the status of the room reservation */
		statuscode: OptionSet.msevtmgt_roomreservation.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_description: string;
			readonly msevtmgt_endtime_TimezoneDateAndTime: string;
			readonly msevtmgt_event: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			readonly msevtmgt_room: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_roomreservationId: string;
			readonly msevtmgt_session: string;
			readonly msevtmgt_starttime_TimezoneDateAndTime: string;
			/** Date and time that the record was migrated */
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
			/** Status of the room reservation */
			readonly statecode: string;
			/** Reason for the status of the room reservation */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_roomreservation {
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