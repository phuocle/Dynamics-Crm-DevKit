//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEvent_administration {
		interface tab__106D6C24_43CF_4B7B_99C6_CAE70B790B20_Sections {
			_106D6C24_43CF_4B7B_99C6_CAE70B790B20_COLUMN_2_SECTION_1: DevKit.Controls.Section;
			_8AD9519B_039D_49B8_9184_C2E183294391: DevKit.Controls.Section;
		}
		interface tab__106D6C24_43CF_4B7B_99C6_CAE70B790B20 extends DevKit.Controls.ITab {
			Section: tab__106D6C24_43CF_4B7B_99C6_CAE70B790B20_Sections;
		}
		interface Tabs {
			_106D6C24_43CF_4B7B_99C6_CAE70B790B20: tab__106D6C24_43CF_4B7B_99C6_CAE70B790B20;
		}
		interface Body {
			Tab: Tabs;
			/** Select the contact matching strategy for event registration */
			msevtmgt_contactmatchingstrategy: DevKit.Controls.OptionSet;
			/** Select an email template for event attendees */
			msevtmgt_emailtemplateforattendee: DevKit.Controls.String;
			/** Select an email template for purchasers */
			msevtmgt_emailtemplateforpurchaser: DevKit.Controls.String;
			msevtmgt_enablefinalizationendpoints: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			/** Send mail to event attendee? */
			msevtmgt_sendmailtoeventattendee: DevKit.Controls.OptionSet;
			/** Send mail to purchaser? */
			msevtmgt_sendmailtopurchaser: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_TemplatePickerForAttendee: DevKit.Controls.WebResource;
			WebResource_TemplatePickerForPurchaser: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class FormEvent_administration extends DevKit.IForm {
		/**
		* Event administration [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Event_administration */
		Body: DevKit.FormEvent_administration.Body;
		/** The Navigation of form Event_administration */
		Navigation: DevKit.FormEvent_administration.Navigation;
		/** The SidePanes of form Event_administration */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_eventadministrationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_eventadministrationApi
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
		/** Select the contact matching strategy for event registration */
		msevtmgt_contactmatchingstrategy: OptionSet.msevtmgt_eventadministration.msevtmgt_contactmatchingstrategy;
		/** Select an email template for event attendees */
		msevtmgt_emailtemplateforattendee: string;
		/** Select an email template for purchasers */
		msevtmgt_emailtemplateforpurchaser: string;
		msevtmgt_enablefinalizationendpoints: OptionSet.msevtmgt_eventadministration.msevtmgt_enablefinalizationendpoints;
		/** Unique identifier for entity instances */
		msevtmgt_eventadministrationId: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		/** Send mail to event attendee? */
		msevtmgt_sendmailtoeventattendee: OptionSet.msevtmgt_eventadministration.msevtmgt_sendmailtoeventattendee;
		/** Send mail to purchaser? */
		msevtmgt_sendmailtopurchaser: OptionSet.msevtmgt_eventadministration.msevtmgt_sendmailtopurchaser;
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
		/** Status of the event administration */
		statecode: OptionSet.msevtmgt_eventadministration.statecode;
		/** Reason for the status of the event administration */
		statuscode: OptionSet.msevtmgt_eventadministration.statuscode;
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
			/** Select the contact matching strategy for event registration */
			readonly msevtmgt_contactmatchingstrategy: string;
			/** Select an email template for event attendees */
			readonly msevtmgt_emailtemplateforattendee: string;
			/** Select an email template for purchasers */
			readonly msevtmgt_emailtemplateforpurchaser: string;
			readonly msevtmgt_enablefinalizationendpoints: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_eventadministrationId: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			/** Send mail to event attendee? */
			readonly msevtmgt_sendmailtoeventattendee: string;
			/** Send mail to purchaser? */
			readonly msevtmgt_sendmailtopurchaser: string;
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
			/** Status of the event administration */
			readonly statecode: string;
			/** Reason for the status of the event administration */
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
	namespace msevtmgt_eventadministration {
		enum msevtmgt_contactmatchingstrategy {
			/** 100000000 */
			Email,
			/** 100000003 */
			Email_and_event_owner,
			/** 100000002 */
			Email_first_name_and_last_name,
			/** 100000001 */
			First_name_and_last_name
		}
		enum msevtmgt_enablefinalizationendpoints {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_sendmailtoeventattendee {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_sendmailtopurchaser {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
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