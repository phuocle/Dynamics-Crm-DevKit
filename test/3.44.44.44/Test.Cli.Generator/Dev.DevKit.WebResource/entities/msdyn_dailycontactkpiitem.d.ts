//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_dailycontactkpiitem_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_dailycontactkpiitem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_dailycontactkpiitem_Information */
		Body: DevKit.Formmsdyn_dailycontactkpiitem_Information.Body;
		/** The Navigation of form msdyn_dailycontactkpiitem_Information */
		Navigation: DevKit.Formmsdyn_dailycontactkpiitem_Information.Navigation;
		/** The SidePanes of form msdyn_dailycontactkpiitem_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_dailycontactkpiitemApi {
		/**
		* DynamicsCrm.DevKit msdyn_dailycontactkpiitemApi
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
		msdyn_computationaccuracy: OptionSet.msdyn_dailycontactkpiitem.msdyn_computationaccuracy;
		msdyn_contactId: string;
		/** Unique identifier for entity instances */
		msdyn_dailycontactkpiitemId: string;
		msdyn_date_UtcDateOnly: Date;
		msdyn_emailsreceived: number;
		msdyn_emailssent: number;
		msdyn_entityid: string;
		msdyn_liemailssent: number;
		msdyn_meetingsreceived: number;
		msdyn_meetingssent: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_phonecallsmade: number;
		msdyn_phonecallsreceived: number;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Daily kpis for contact */
		statecode: OptionSet.msdyn_dailycontactkpiitem.statecode;
		/** Reason for the status of the Daily kpis for contact */
		statuscode: OptionSet.msdyn_dailycontactkpiitem.statuscode;
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
			readonly msdyn_computationaccuracy: string;
			readonly msdyn_contactId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_dailycontactkpiitemId: string;
			readonly msdyn_date_UtcDateOnly: string;
			readonly msdyn_emailsreceived: string;
			readonly msdyn_emailssent: string;
			readonly msdyn_entityid: string;
			readonly msdyn_liemailssent: string;
			readonly msdyn_meetingsreceived: string;
			readonly msdyn_meetingssent: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_phonecallsmade: string;
			readonly msdyn_phonecallsreceived: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Daily kpis for contact */
			readonly statecode: string;
			/** Reason for the status of the Daily kpis for contact */
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
	namespace msdyn_dailycontactkpiitem {
		enum msdyn_computationaccuracy {
			/** 100000000 */
			Complete,
			/** 100000001 */
			Partial
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