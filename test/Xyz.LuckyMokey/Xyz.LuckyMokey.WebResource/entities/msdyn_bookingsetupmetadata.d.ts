//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_bookingsetupmetadata_Information {
		interface Tabs {
		}
		interface Body {
			WebResource_ScheduleAttributeMapping: DevKit.Form.Controls.ControlWebResource;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			msdyn_AvailableDurationMinimumPercentage: DevKit.Form.Controls.ControlInteger;
			/** A unique identifier that links bookings to a scheduling entity. */
			msdyn_BookingRelationshipLogicalName: DevKit.Form.Controls.ControlString;
			/** An option set that is used to group and filter statuses. */
			msdyn_BookingStatusFieldLogicalName: DevKit.Form.Controls.ControlString;
			/** Select whether, when moving open slots to the next day, to leave the old slots and change their status to "Cancel." */
			msdyn_CancelBookingsWhenMoving: DevKit.Form.Controls.ControlBoolean;
			/** The default booking canceled status to use when a user can't select a status. */
			msdyn_DefaultBookingCanceledStatus: DevKit.Form.Controls.ControlLookup;
			/** The default booking committed status to use when a user can't select a status. */
			msdyn_DefaultBookingCommittedStatus: DevKit.Form.Controls.ControlLookup;
			/** The default booking duration to use when a duration is not provided. */
			msdyn_DefaultBookingDuration: DevKit.Form.Controls.ControlInteger;
			/** The default requirement active status to use when a user can't select a status */
			msdyn_DefaultRequirementActiveStatus: DevKit.Form.Controls.ControlLookup;
			/** The default requirement canceled status to use when a user can't select a status. */
			msdyn_DefaultRequirementCanceledStatus: DevKit.Form.Controls.ControlLookup;
			/** The default requirement completed status to use when a user can't select a status. */
			msdyn_DefaultRequirementCompletedStatus: DevKit.Form.Controls.ControlLookup;
			msdyn_DisableRequirementAutoCreation: DevKit.Form.Controls.ControlBoolean;
			/** If yes, the book button on schedulable entities will launch the quick book experience. Otherwise, the book button will launch the pop-out scheduler. */
			msdyn_enablequickbook: DevKit.Form.Controls.ControlBoolean;
			/** The name of the custom entity. */
			msdyn_EntityLogicalName: DevKit.Form.Controls.ControlString;
			/** A unique identifier that links requirements to an enabled scheduling entity. */
			msdyn_RequirementRelationshipLogicalName: DevKit.Form.Controls.ControlString;
			/** The maximum number of resources to retrieve and show in schedule assistant. */
			msdyn_ResourceAvailabilityRetrievalLimit: DevKit.Form.Controls.ControlInteger;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_bookingsetupmetadata_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_bookingsetupmetadata_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_bookingsetupmetadata_Information */
		Body: LuckyMokey.Formmsdyn_bookingsetupmetadata_Information.Body;
	}
	class msdyn_bookingsetupmetadataApi {
		/**
		* DynamicsCrm.DevKit msdyn_bookingsetupmetadataApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_AvailableDurationMinimumPercentage: DevKit.WebApi.IntegerValue;
		/** A unique identifier that links bookings to a scheduling entity. */
		msdyn_BookingRelationshipLogicalName: DevKit.WebApi.StringValue;
		/** A unique identifier for an entity instance. */
		msdyn_bookingsetupmetadataId: DevKit.WebApi.GuidValue;
		/** An option set that is used to group and filter statuses. */
		msdyn_BookingStatusFieldLogicalName: DevKit.WebApi.StringValue;
		/** Select whether, when moving open slots to the next day, to leave the old slots and change their status to "Cancel." */
		msdyn_CancelBookingsWhenMoving: DevKit.WebApi.BooleanValue;
		/** Query for retrieving resource requirements for cloning. */
		msdyn_CloneEntityQuery: DevKit.WebApi.LookupValue;
		/** The default booking canceled status to use when a user can't select a status. */
		msdyn_DefaultBookingCanceledStatus: DevKit.WebApi.LookupValue;
		/** The default booking committed status to use when a user can't select a status. */
		msdyn_DefaultBookingCommittedStatus: DevKit.WebApi.LookupValue;
		/** The default booking duration to use when a duration is not provided. */
		msdyn_DefaultBookingDuration: DevKit.WebApi.IntegerValue;
		/** The default requirement active status to use when a user can't select a status */
		msdyn_DefaultRequirementActiveStatus: DevKit.WebApi.LookupValue;
		/** The default requirement canceled status to use when a user can't select a status. */
		msdyn_DefaultRequirementCanceledStatus: DevKit.WebApi.LookupValue;
		/** The default requirement completed status to use when a user can't select a status. */
		msdyn_DefaultRequirementCompletedStatus: DevKit.WebApi.LookupValue;
		msdyn_DisableRequirementAutoCreation: DevKit.WebApi.BooleanValue;
		/** If yes, the book button on schedulable entities will launch the quick book experience. Otherwise, the book button will launch the pop-out scheduler. */
		msdyn_enablequickbook: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msdyn_EntityLogicalName: DevKit.WebApi.StringValue;
		/** A unique identifier that links requirements to an enabled scheduling entity. */
		msdyn_RequirementRelationshipLogicalName: DevKit.WebApi.StringValue;
		/** The maximum number of resources to retrieve and show in schedule assistant. */
		msdyn_ResourceAvailabilityRetrievalLimit: DevKit.WebApi.IntegerValue;
		msdyn_RetrieveConstraintsQuery: DevKit.WebApi.LookupValue;
		msdyn_RetrieveResourcesQuery: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Booking Setup Metadata */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Booking Setup Metadata */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_bookingsetupmetadata {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}