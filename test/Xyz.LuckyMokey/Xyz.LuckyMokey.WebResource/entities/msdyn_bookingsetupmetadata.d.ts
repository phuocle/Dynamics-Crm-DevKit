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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}