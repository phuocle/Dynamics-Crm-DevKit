//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_mostcontacted_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows the primary name of the custom entity. */
			msdyn_primaryname: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_mostcontacted_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_mostcontacted_Information */
		Body: DevKit.Formmsdyn_mostcontacted_Information.Body;
		/** The Navigation of form msdyn_mostcontacted_Information */
		Navigation: DevKit.Formmsdyn_mostcontacted_Information.Navigation;
		/** The SidePanes of form msdyn_mostcontacted_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_mostcontacted_Information2 {
		interface Tabs {
		}
		interface Body {
			/** Shows the primary name of the custom entity. */
			msdyn_primaryname: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_mostcontacted_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_mostcontacted_Information2 */
		Body: DevKit.Formmsdyn_mostcontacted_Information2.Body;
		/** The Navigation of form msdyn_mostcontacted_Information2 */
		Navigation: DevKit.Formmsdyn_mostcontacted_Information2.Navigation;
		/** The SidePanes of form msdyn_mostcontacted_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_mostcontactedApi {
		/**
		* DynamicsCrm.DevKit msdyn_mostcontactedApi
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
		/** Shows related account. */
		msdyn_account_regardingObjectId: string;
		msdyn_computationaccuracy: OptionSet.msdyn_mostcontacted.msdyn_computationaccuracy;
		/** Shows related contact. */
		msdyn_contact_regardingObjectId: string;
		msdyn_entityid: string;
		/** Entity Image URL */
		msdyn_entityImage_url: string;
		/** The entity name of the most contacted record. */
		msdyn_entityname: string;
		/** Most contacted KPI data as JSON */
		msdyn_kpidatajson: string;
		/** Shows who made the last contact. */
		msdyn_lastcontactedby: string;
		/** Shows when the contact was last contacted. */
		msdyn_lastcontactedon: string;
		/** Shows what the lead was regarding. */
		msdyn_lead_regardingObjectId: string;
		/** Unique identifier for entity instances. */
		msdyn_mostcontactedId: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Shows the number of emails from the contact. */
		msdyn_numberofemails: number;
		/** Shows the number of InMails with the contact. */
		msdyn_numberofinmails: number;
		/** Shows the number of meetings with the contact. */
		msdyn_numberofmeetings: number;
		/** Shows the number of phone calls with the contact. */
		msdyn_numberofphonecalls: number;
		/** Shows what the opportunity was regarding. */
		msdyn_opportunity_regardingObjectId: string;
		/** Shows the primary name of the custom entity. */
		msdyn_primaryname: string;
		msdyn_regardingentityid: string;
		msdyn_regardingentityname: string;
		/** Health score for the account. */
		msdyn_relationshiphealthscorecolor: string;
		/** Health score for the account. */
		msdyn_relationshiphealthscorevalue: number;
		/** Shows unique identifier for the organization. */
		readonly OrganizationId: string;
		/** Shows the date and time the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Most Contacted */
		statecode: OptionSet.msdyn_mostcontacted.statecode;
		/** Reason for the status of the Most Contacted */
		statuscode: OptionSet.msdyn_mostcontacted.statuscode;
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
			/** Shows related account. */
			readonly msdyn_account_regardingObjectId: string;
			readonly msdyn_computationaccuracy: string;
			/** Shows related contact. */
			readonly msdyn_contact_regardingObjectId: string;
			readonly msdyn_entityid: string;
			/** Entity Image URL */
			readonly msdyn_entityImage_url: string;
			/** The entity name of the most contacted record. */
			readonly msdyn_entityname: string;
			/** Most contacted KPI data as JSON */
			readonly msdyn_kpidatajson: string;
			/** Shows who made the last contact. */
			readonly msdyn_lastcontactedby: string;
			/** Shows when the contact was last contacted. */
			readonly msdyn_lastcontactedon: string;
			/** Shows what the lead was regarding. */
			readonly msdyn_lead_regardingObjectId: string;
			/** Unique identifier for entity instances. */
			readonly msdyn_mostcontactedId: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the number of emails from the contact. */
			readonly msdyn_numberofemails: string;
			/** Shows the number of InMails with the contact. */
			readonly msdyn_numberofinmails: string;
			/** Shows the number of meetings with the contact. */
			readonly msdyn_numberofmeetings: string;
			/** Shows the number of phone calls with the contact. */
			readonly msdyn_numberofphonecalls: string;
			/** Shows what the opportunity was regarding. */
			readonly msdyn_opportunity_regardingObjectId: string;
			/** Shows the primary name of the custom entity. */
			readonly msdyn_primaryname: string;
			readonly msdyn_regardingentityid: string;
			readonly msdyn_regardingentityname: string;
			/** Health score for the account. */
			readonly msdyn_relationshiphealthscorecolor: string;
			/** Health score for the account. */
			readonly msdyn_relationshiphealthscorevalue: string;
			/** Shows unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Shows the date and time the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Most Contacted */
			readonly statecode: string;
			/** Reason for the status of the Most Contacted */
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
	namespace msdyn_mostcontacted {
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