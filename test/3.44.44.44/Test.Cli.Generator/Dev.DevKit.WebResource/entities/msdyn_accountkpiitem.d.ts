﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_accountkpiitem_Information {
		interface Tabs {
		}
		interface Body {
			/** Name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_accountkpiitem_account_accountkpiid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_accountkpiitem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_accountkpiitem_Information */
		Body: DevKit.Formmsdyn_accountkpiitem_Information.Body;
		/** The Navigation of form msdyn_accountkpiitem_Information */
		Navigation: DevKit.Formmsdyn_accountkpiitem_Information.Navigation;
		/** The SidePanes of form msdyn_accountkpiitem_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_accountkpiitem_Information2 {
		interface Tabs {
		}
		interface Body {
			/** Name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_accountkpiitem_account_accountkpiid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_accountkpiitem_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_accountkpiitem_Information2 */
		Body: DevKit.Formmsdyn_accountkpiitem_Information2.Body;
		/** The Navigation of form msdyn_accountkpiitem_Information2 */
		Navigation: DevKit.Formmsdyn_accountkpiitem_Information2.Navigation;
		/** The SidePanes of form msdyn_accountkpiitem_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_accountkpiitemApi {
		/**
		* DynamicsCrm.DevKit msdyn_accountkpiitemApi
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
		msdyn_accountid: string;
		/** Unique identifier for entity instances. */
		msdyn_accountkpiitemId: string;
		/** TimeStamp value when the KPI are retrieved from ACI */
		msdyn_acilastupdatetimestamp_UtcDateAndTime: Date;
		/** Average time taken by the customer(in hrs) to respond. */
		msdyn_averagefirstresponsetimebytheminhrs: number;
		/** Average time taken by the seller(in hrs) to respond. */
		msdyn_averagefirstresponsetimebyusinhrs: number;
		msdyn_computationaccuracy: OptionSet.msdyn_accountkpiitem.msdyn_computationaccuracy;
		msdyn_date_UtcDateAndTime: Date;
		/** Shows the rate of opening attachments on followed emails. */
		msdyn_emailattachmentopens: number;
		/** Shows the rate of links clicked on in followed emails. */
		msdyn_emaillinksclicked: number;
		/** Total number of email received. */
		msdyn_emailsreceived: number;
		/** Number of emails sent by internal contacts to external contacts. */
		msdyn_emailssent: number;
		msdyn_facetimewithcustomer: number;
		msdyn_liemailssent: number;
		/** Number of meetings sent by the customer. */
		msdyn_meetingsreceived: number;
		/** Number of meetings sent to the customer. */
		msdyn_meetingssent: number;
		/** Name of the custom entity. */
		msdyn_name: string;
		/** Shows the rate of opening followed emails. */
		msdyn_openedemails: number;
		/** Shows the number of phone calls made. */
		msdyn_phonecallsmade: number;
		/** Shows the number of phone calls received. */
		msdyn_phonecallsreceived: number;
		/** KPI health score. */
		msdyn_relationshiphealthscorestate: OptionSet.msdyn_accountkpiitem.msdyn_relationshiphealthscorestate;
		/** Health score for the account. */
		msdyn_relationshiphealthscorevalue: number;
		/** Direction the relationship health is moving. */
		msdyn_relationshiphealthtrend: OptionSet.msdyn_accountkpiitem.msdyn_relationshiphealthtrend;
		/** Rate of response of the customer. */
		msdyn_responseratebythem: number;
		/** Rate of response by the seller. */
		msdyn_responseratebyus: number;
		/** Time spent by external contacts on activities. */
		msdyn_timespentbycustomer: number;
		/** Time spent by external contacts on activities. */
		msdyn_timespentbycustomer_calculated: number;
		/** Time spent for emails and meetings by internal contacts in relation to the record. */
		msdyn_timespentbyteam: number;
		/** Time spent for emails and meetings by internal contacts in relation to the record. */
		msdyn_timespentbyteam_calculated: number;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string;
		/** Date and time when the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Account KPI. */
		statecode: OptionSet.msdyn_accountkpiitem.statecode;
		/** Reason for the status of the Account KPI. */
		statuscode: OptionSet.msdyn_accountkpiitem.statuscode;
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
			readonly msdyn_accountid: string;
			/** Unique identifier for entity instances. */
			readonly msdyn_accountkpiitemId: string;
			/** TimeStamp value when the KPI are retrieved from ACI */
			readonly msdyn_acilastupdatetimestamp_UtcDateAndTime: string;
			/** Average time taken by the customer(in hrs) to respond. */
			readonly msdyn_averagefirstresponsetimebytheminhrs: string;
			/** Average time taken by the seller(in hrs) to respond. */
			readonly msdyn_averagefirstresponsetimebyusinhrs: string;
			readonly msdyn_computationaccuracy: string;
			readonly msdyn_date_UtcDateAndTime: string;
			/** Shows the rate of opening attachments on followed emails. */
			readonly msdyn_emailattachmentopens: string;
			/** Shows the rate of links clicked on in followed emails. */
			readonly msdyn_emaillinksclicked: string;
			/** Total number of email received. */
			readonly msdyn_emailsreceived: string;
			/** Number of emails sent by internal contacts to external contacts. */
			readonly msdyn_emailssent: string;
			readonly msdyn_facetimewithcustomer: string;
			readonly msdyn_liemailssent: string;
			/** Number of meetings sent by the customer. */
			readonly msdyn_meetingsreceived: string;
			/** Number of meetings sent to the customer. */
			readonly msdyn_meetingssent: string;
			/** Name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the rate of opening followed emails. */
			readonly msdyn_openedemails: string;
			/** Shows the number of phone calls made. */
			readonly msdyn_phonecallsmade: string;
			/** Shows the number of phone calls received. */
			readonly msdyn_phonecallsreceived: string;
			/** KPI health score. */
			readonly msdyn_relationshiphealthscorestate: string;
			/** Health score for the account. */
			readonly msdyn_relationshiphealthscorevalue: string;
			/** Direction the relationship health is moving. */
			readonly msdyn_relationshiphealthtrend: string;
			/** Rate of response of the customer. */
			readonly msdyn_responseratebythem: string;
			/** Rate of response by the seller. */
			readonly msdyn_responseratebyus: string;
			/** Time spent by external contacts on activities. */
			readonly msdyn_timespentbycustomer: string;
			/** Time spent by external contacts on activities. */
			readonly msdyn_timespentbycustomer_calculated: string;
			/** Time spent for emails and meetings by internal contacts in relation to the record. */
			readonly msdyn_timespentbyteam: string;
			/** Time spent for emails and meetings by internal contacts in relation to the record. */
			readonly msdyn_timespentbyteam_calculated: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Date and time when the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Account KPI. */
			readonly statecode: string;
			/** Reason for the status of the Account KPI. */
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
	namespace msdyn_accountkpiitem {
		enum msdyn_computationaccuracy {
			/** 100000000 */
			Complete,
			/** 100000001 */
			Partial
		}
		enum msdyn_relationshiphealthscorestate {
			/** 7 */
			Entity_older_than_2_years,
			/** 1 */
			Fair,
			/** 0 */
			Good,
			/** 5 */
			Health_Computation_In_Progress,
			/** 4 */
			No_Closed_Activities,
			/** 3 */
			Not_enough_info,
			/** 2 */
			Poor,
			/** 6 */
			Something_went_wrong
		}
		enum msdyn_relationshiphealthtrend {
			/** 2 */
			Declining,
			/** 5 */
			Health_not_applicable,
			/** 0 */
			Improving,
			/** 3 */
			Not_enough_info,
			/** 4 */
			Something_went_wrong,
			/** 1 */
			Steady
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