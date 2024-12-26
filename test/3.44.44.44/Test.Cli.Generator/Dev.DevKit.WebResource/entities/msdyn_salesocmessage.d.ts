//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_salesocmessage_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_salesocmessage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_salesocmessage_Information */
		Body: DevKit.Formmsdyn_salesocmessage_Information.Body;
		/** The Navigation of form msdyn_salesocmessage_Information */
		Navigation: DevKit.Formmsdyn_salesocmessage_Information.Navigation;
		/** The SidePanes of form msdyn_salesocmessage_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_salesocmessageApi {
		/**
		* DynamicsCrm.DevKit msdyn_salesocmessageApi
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
		msdyn_channeltype: string;
		msdyn_clientactivityid: string;
		msdyn_content: string;
		msdyn_conversationid: string;
		msdyn_entityid: string;
		msdyn_entityname: string;
		msdyn_from: string;
		msdyn_isinbound: boolean;
		msdyn_messagedetails: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_ownerviewstate: OptionSet.msdyn_salesocmessage.msdyn_ownerviewstate;
		/** Unique identifier for entity instances */
		msdyn_salesocmessageId: string;
		msdyn_statusdetails: string;
		msdyn_to: string;
		msdyn_version: string;
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
		/** Status of the message */
		statecode: OptionSet.msdyn_salesocmessage.statecode;
		/** Reason for the status of the message */
		statuscode: OptionSet.msdyn_salesocmessage.statuscode;
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
			readonly msdyn_channeltype: string;
			readonly msdyn_clientactivityid: string;
			readonly msdyn_content: string;
			readonly msdyn_conversationid: string;
			readonly msdyn_entityid: string;
			readonly msdyn_entityname: string;
			readonly msdyn_from: string;
			readonly msdyn_isinbound: string;
			readonly msdyn_messagedetails: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_ownerviewstate: string;
			/** Unique identifier for entity instances */
			readonly msdyn_salesocmessageId: string;
			readonly msdyn_statusdetails: string;
			readonly msdyn_to: string;
			readonly msdyn_version: string;
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
			/** Status of the message */
			readonly statecode: string;
			/** Reason for the status of the message */
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
	namespace msdyn_salesocmessage {
		enum msdyn_ownerviewstate {
			/** 192350002 */
			Hidden,
			/** 192350001 */
			Seen,
			/** 192350000 */
			Unseen
		}
		enum statecode {
			/** 1 */
			Fail,
			/** 0 */
			Success
		}
		enum statuscode {
			/** 4 */
			Delivered,
			/** 6 */
			InboundProcessingFailure,
			/** 7 */
			InboundProcessingSuccessful,
			/** 5 */
			NotDelivered,
			/** 1 */
			NotSent,
			/** 0 */
			SendingAborted,
			/** 2 */
			SendingFailed,
			/** 3 */
			Sent
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