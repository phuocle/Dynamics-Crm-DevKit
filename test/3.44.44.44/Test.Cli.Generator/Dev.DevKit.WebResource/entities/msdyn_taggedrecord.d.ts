//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_taggedrecord_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Relationship with CRM Connection Entity */
			msdyn_connectionid: DevKit.Controls.Lookup;
			/** Record Id for SF and Others */
			msdyn_crmrecordid: DevKit.Controls.String;
			msdyn_dynamicsrecordid: DevKit.Controls.Lookup;
			/** Email Id of Contact/Lead */
			msdyn_emailid: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Lead or Contact Type */
			msdyn_recordtype: DevKit.Controls.String;
			/** AadObjectId of the User */
			msdyn_userid: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_taggedrecord_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_taggedrecord_Information */
		Body: DevKit.Formmsdyn_taggedrecord_Information.Body;
		/** The Navigation of form msdyn_taggedrecord_Information */
		Navigation: DevKit.Formmsdyn_taggedrecord_Information.Navigation;
		/** The SidePanes of form msdyn_taggedrecord_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_taggedrecordApi {
		/**
		* DynamicsCrm.DevKit msdyn_taggedrecordApi
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
		/** Relationship with CRM Connection Entity */
		msdyn_connectionid: string;
		/** Record Id for SF and Others */
		msdyn_crmrecordid: string;
		msdyn_dynamicsrecordid_contact: string;
		msdyn_dynamicsrecordid_lead: string;
		/** Email Id of Contact/Lead */
		msdyn_emailid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Identifier to track the association of this record with a Copilot product type */
		msdyn_producttype: OptionSet.msdyn_taggedrecord.msdyn_producttype;
		/** Lead or Contact Type */
		msdyn_recordtype: string;
		/** Unique identifier for entity instances */
		msdyn_taggedrecordId: string;
		/** AadObjectId of the User */
		msdyn_userid: string;
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
		/** Status of the TaggedRecord */
		statecode: OptionSet.msdyn_taggedrecord.statecode;
		/** Reason for the status of the TaggedRecord */
		statuscode: OptionSet.msdyn_taggedrecord.statuscode;
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
			/** Relationship with CRM Connection Entity */
			readonly msdyn_connectionid: string;
			/** Record Id for SF and Others */
			readonly msdyn_crmrecordid: string;
			readonly msdyn_dynamicsrecordid_contact: string;
			readonly msdyn_dynamicsrecordid_lead: string;
			/** Email Id of Contact/Lead */
			readonly msdyn_emailid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Identifier to track the association of this record with a Copilot product type */
			readonly msdyn_producttype: string;
			/** Lead or Contact Type */
			readonly msdyn_recordtype: string;
			/** Unique identifier for entity instances */
			readonly msdyn_taggedrecordId: string;
			/** AadObjectId of the User */
			readonly msdyn_userid: string;
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
			/** Status of the TaggedRecord */
			readonly statecode: string;
			/** Reason for the status of the TaggedRecord */
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
	namespace msdyn_taggedrecord {
		enum msdyn_dynamicsrecordidIdType {
		}
		enum msdyn_producttype {
			/** 10000 */
			Copilot_for_Sales,
			/** 10001 */
			Copilot_for_Service,
			/** 11000 */
			Shared
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