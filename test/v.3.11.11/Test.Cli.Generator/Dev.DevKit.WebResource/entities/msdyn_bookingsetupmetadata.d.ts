//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_bookingsetupmetadata_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_AvailableDurationMinimumPercentage: DevKit.Controls.Integer;
			/** A unique identifier that links bookings to a scheduling entity. */
			msdyn_BookingRelationshipLogicalName: DevKit.Controls.String;
			/** An option set that is used to group and filter statuses. */
			msdyn_BookingStatusFieldLogicalName: DevKit.Controls.String;
			/** Select whether, when moving open slots to the next day, to leave the old slots and change their status to "Cancel." */
			msdyn_CancelBookingsWhenMoving: DevKit.Controls.Boolean;
			/** The default booking canceled status to use when a user can't select a status. */
			msdyn_DefaultBookingCanceledStatus: DevKit.Controls.Lookup;
			/** The default booking committed status to use when a user can't select a status. */
			msdyn_DefaultBookingCommittedStatus: DevKit.Controls.Lookup;
			/** The default booking duration to use when a duration is not provided. */
			msdyn_DefaultBookingDuration: DevKit.Controls.Integer;
			/** The default requirement active status to use when a user can't select a status */
			msdyn_DefaultRequirementActiveStatus: DevKit.Controls.Lookup;
			/** The default requirement canceled status to use when a user can't select a status. */
			msdyn_DefaultRequirementCanceledStatus: DevKit.Controls.Lookup;
			/** The default requirement completed status to use when a user can't select a status. */
			msdyn_DefaultRequirementCompletedStatus: DevKit.Controls.Lookup;
			/** Determines if a requirement should be created automatically when a booking is generated and there's no requirement for a scheduling entity. */
			msdyn_DisableRequirementAutoCreation: DevKit.Controls.Boolean;
			/** If yes, the book button on schedulable entities will launch the quick book experience. Otherwise, the book button will launch the pop-out scheduler. */
			msdyn_enablequickbook: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_EntityLogicalName: DevKit.Controls.String;
			/** A unique identifier that links requirements to an enabled scheduling entity. */
			msdyn_RequirementRelationshipLogicalName: DevKit.Controls.String;
			/** The maximum number of resources to retrieve and show in schedule assistant. */
			msdyn_ResourceAvailabilityRetrievalLimit: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_ScheduleAttributeMapping: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_bookingsetupmetadata_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_bookingsetupmetadata_Information */
		Body: DevKit.Formmsdyn_bookingsetupmetadata_Information.Body;
		/** The Process of form msdyn_bookingsetupmetadata_Information */
		Process: DevKit.Formmsdyn_bookingsetupmetadata_Information.Process;
		/** The SidePanes of form msdyn_bookingsetupmetadata_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_bookingsetupmetadata_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_EntityLogicalName: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_bookingsetupmetadata_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_bookingsetupmetadata_Information2 */
		Body: DevKit.Formmsdyn_bookingsetupmetadata_Information2.Body;
		/** The Process of form msdyn_bookingsetupmetadata_Information2 */
		Process: DevKit.Formmsdyn_bookingsetupmetadata_Information2.Process;
		/** The SidePanes of form msdyn_bookingsetupmetadata_Information2 */
		SidePanes: DevKit.SidePanes;
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
		msdyn_AvailableDurationMinimumPercentage: number;
		/** A unique identifier that links bookings to a scheduling entity. */
		msdyn_BookingRelationshipLogicalName: string;
		/** A unique identifier for an entity instance. */
		msdyn_bookingsetupmetadataId: string;
		/** An option set that is used to group and filter statuses. */
		msdyn_BookingStatusFieldLogicalName: string;
		/** Select whether, when moving open slots to the next day, to leave the old slots and change their status to "Cancel." */
		msdyn_CancelBookingsWhenMoving: boolean;
		/** Query for retrieving resource requirements for cloning. */
		msdyn_CloneEntityQuery: string;
		/** The default booking canceled status to use when a user can't select a status. */
		msdyn_DefaultBookingCanceledStatus: string;
		/** The default booking committed status to use when a user can't select a status. */
		msdyn_DefaultBookingCommittedStatus: string;
		/** The default booking duration to use when a duration is not provided. */
		msdyn_DefaultBookingDuration: number;
		/** The default requirement active status to use when a user can't select a status */
		msdyn_DefaultRequirementActiveStatus: string;
		/** The default requirement canceled status to use when a user can't select a status. */
		msdyn_DefaultRequirementCanceledStatus: string;
		/** The default requirement completed status to use when a user can't select a status. */
		msdyn_DefaultRequirementCompletedStatus: string;
		/** Determines if a requirement should be created automatically when a booking is generated and there's no requirement for a scheduling entity. */
		msdyn_DisableRequirementAutoCreation: boolean;
		/** If yes, the book button on schedulable entities will launch the quick book experience. Otherwise, the book button will launch the pop-out scheduler. */
		msdyn_enablequickbook: boolean;
		/** The name of the custom entity. */
		msdyn_EntityLogicalName: string;
		/** A unique identifier that links requirements to an enabled scheduling entity. */
		msdyn_RequirementRelationshipLogicalName: string;
		/** The maximum number of resources to retrieve and show in schedule assistant. */
		msdyn_ResourceAvailabilityRetrievalLimit: number;
		msdyn_RetrieveConstraintsQuery: string;
		msdyn_RetrieveResourcesQuery: string;
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
		/** Status of the Booking Setup Metadata */
		statecode: OptionSet.msdyn_bookingsetupmetadata.statecode;
		/** Reason for the status of the Booking Setup Metadata */
		statuscode: OptionSet.msdyn_bookingsetupmetadata.statuscode;
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
			readonly msdyn_AvailableDurationMinimumPercentage: string;
			/** A unique identifier that links bookings to a scheduling entity. */
			readonly msdyn_BookingRelationshipLogicalName: string;
			/** A unique identifier for an entity instance. */
			readonly msdyn_bookingsetupmetadataId: string;
			/** An option set that is used to group and filter statuses. */
			readonly msdyn_BookingStatusFieldLogicalName: string;
			/** Select whether, when moving open slots to the next day, to leave the old slots and change their status to "Cancel." */
			readonly msdyn_CancelBookingsWhenMoving: string;
			/** Query for retrieving resource requirements for cloning. */
			readonly msdyn_CloneEntityQuery: string;
			/** The default booking canceled status to use when a user can't select a status. */
			readonly msdyn_DefaultBookingCanceledStatus: string;
			/** The default booking committed status to use when a user can't select a status. */
			readonly msdyn_DefaultBookingCommittedStatus: string;
			/** The default booking duration to use when a duration is not provided. */
			readonly msdyn_DefaultBookingDuration: string;
			/** The default requirement active status to use when a user can't select a status */
			readonly msdyn_DefaultRequirementActiveStatus: string;
			/** The default requirement canceled status to use when a user can't select a status. */
			readonly msdyn_DefaultRequirementCanceledStatus: string;
			/** The default requirement completed status to use when a user can't select a status. */
			readonly msdyn_DefaultRequirementCompletedStatus: string;
			/** Determines if a requirement should be created automatically when a booking is generated and there's no requirement for a scheduling entity. */
			readonly msdyn_DisableRequirementAutoCreation: string;
			/** If yes, the book button on schedulable entities will launch the quick book experience. Otherwise, the book button will launch the pop-out scheduler. */
			readonly msdyn_enablequickbook: string;
			/** The name of the custom entity. */
			readonly msdyn_EntityLogicalName: string;
			/** A unique identifier that links requirements to an enabled scheduling entity. */
			readonly msdyn_RequirementRelationshipLogicalName: string;
			/** The maximum number of resources to retrieve and show in schedule assistant. */
			readonly msdyn_ResourceAvailabilityRetrievalLimit: string;
			readonly msdyn_RetrieveConstraintsQuery: string;
			readonly msdyn_RetrieveResourcesQuery: string;
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
			/** Status of the Booking Setup Metadata */
			readonly statecode: string;
			/** Reason for the status of the Booking Setup Metadata */
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
	namespace msdyn_bookingsetupmetadata {
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}