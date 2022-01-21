//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_notificationtemplate_Information {
		interface tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9_Sections {
			_341680A1_42F7_4CA4_AF62_A2F46428A1B9_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9 extends DevKit.Controls.ITab {
			Section: tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9_Sections;
		}
		interface Tabs {
			_341680A1_42F7_4CA4_AF62_A2F46428A1B9: tab__341680A1_42F7_4CA4_AF62_A2F46428A1B9;
		}
		interface Body {
			Tab: Tabs;
			/** Display label for the button to accept a notification */
			msdyn_acceptbuttontext: DevKit.Controls.String;
			/** Enables auto accept of the notification. */
			msdyn_autoacceptnotification: DevKit.Controls.Boolean;
			/** Show desktop notifications when app is in background or never */
			msdyn_desktopnotificationmode: DevKit.Controls.OptionSet;
			/** Display icon for this notification. Path to the webresource */
			msdyn_icon: DevKit.Controls.String;
			/** The name of the notification. */
			msdyn_name: DevKit.Controls.String;
			/** Display label for the button to reject a notification */
			msdyn_rejectbuttontext: DevKit.Controls.String;
			/** Toggle this to enable or disable the reject button from notification. */
			msdyn_showrejectbutton: DevKit.Controls.Boolean;
			/** Do you want to show a countdown of when this notification will close? */
			msdyn_showtimeout: DevKit.Controls.Boolean;
			/** Notification time out period. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** The title to be displayed for this notification. */
			msdyn_title: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			NotificationFields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_notificationtemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_notificationtemplate_Information */
		Body: DevKit.Formmsdyn_notificationtemplate_Information.Body;
		/** The Process of form msdyn_notificationtemplate_Information */
		Process: DevKit.Formmsdyn_notificationtemplate_Information.Process;
		/** The Grid of form msdyn_notificationtemplate_Information */
		Grid: DevKit.Formmsdyn_notificationtemplate_Information.Grid;
		/** The SidePanes of form msdyn_notificationtemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_notificationtemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_notificationtemplateApi
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
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Display label for the button to accept a notification */
		msdyn_acceptbuttontext: DevKit.WebApi.StringValue;
		/** Enables auto accept of the notification. */
		msdyn_autoacceptnotification: DevKit.WebApi.BooleanValue;
		/** Description of the Notification. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Show desktop notifications when app is in background or never */
		msdyn_desktopnotificationmode: DevKit.WebApi.OptionSetValue;
		/** Display icon for this notification. Path to the webresource */
		msdyn_icon: DevKit.WebApi.StringValue;
		/** The name of the notification. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_notificationtemplateId: DevKit.WebApi.GuidValue;
		/** Display label for the button to reject a notification */
		msdyn_rejectbuttontext: DevKit.WebApi.StringValue;
		/** Toggle this to enable or disable the reject button from notification. */
		msdyn_showrejectbutton: DevKit.WebApi.BooleanValue;
		/** Do you want to show a countdown of when this notification will close? */
		msdyn_showtimeout: DevKit.WebApi.BooleanValue;
		/** Theme color for Notification template. */
		msdyn_theme: DevKit.WebApi.OptionSetValue;
		/** Notification time out period. */
		msdyn_timeout: DevKit.WebApi.IntegerValue;
		/** The title to be displayed for this notification. */
		msdyn_title: DevKit.WebApi.StringValue;
		/** Unique Name for the entity. */
		msdyn_UniqueName: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
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
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Notification Template */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Notification Template */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_notificationtemplate {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_desktopnotificationmode {
			/** 509180000 */
			Never,
			/** 509180001 */
			When_app_is_in_background
		}
		enum msdyn_theme {
			/** 509180000 */
			Dark,
			/** 509180001 */
			Light
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}