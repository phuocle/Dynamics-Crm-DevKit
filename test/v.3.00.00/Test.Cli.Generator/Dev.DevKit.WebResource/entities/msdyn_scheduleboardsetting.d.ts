//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_scheduleboardsetting_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_BookBasedOn: DevKit.Controls.Boolean;
			msdyn_CustomTabName: DevKit.Controls.String;
			msdyn_CustomTabWebResource: DevKit.Controls.String;
			msdyn_FullyBookedColor: DevKit.Controls.String;
			msdyn_HideCancelled: DevKit.Controls.Boolean;
			msdyn_IsSynchronizeResources: DevKit.Controls.Boolean;
			msdyn_MapViewTabPlacement: DevKit.Controls.Boolean;
			msdyn_NotBookedColor: DevKit.Controls.String;
			/** Tab index. */
			msdyn_OrderNumber: DevKit.Controls.Integer;
			msdyn_OrganizationalUnitTooltipsViewId: DevKit.Controls.String;
			msdyn_OrganizationalUnitViewId: DevKit.Controls.String;
			msdyn_OverbookedColor: DevKit.Controls.String;
			msdyn_PartiallyBookedColor: DevKit.Controls.String;
			msdyn_SAAvailableIcon: DevKit.Controls.String;
			msdyn_SAPartiallyAvailableIcon: DevKit.Controls.String;
			msdyn_SAUnavailableIcon: DevKit.Controls.String;
			msdyn_SchedulerAlertsView: DevKit.Controls.String;
			msdyn_SchedulerResourceDetailsView: DevKit.Controls.String;
			msdyn_SchedulerResourceTooltipView: DevKit.Controls.String;
			/** Shows the settings as a JSON string. */
			msdyn_Settings: DevKit.Controls.String;
			/** Field is used to determine if Schedule Board Tab are Private, Public or Shareable */
			msdyn_ShareType: DevKit.Controls.OptionSet;
			/** Enter the tab name. */
			msdyn_TabName: DevKit.Controls.String;
			msdyn_UnscheduledRequirementsViewId: DevKit.Controls.String;
			/** Shows the number of records to be displayed per page in 'Resource Requirement' section. */
			msdyn_UnscheduledWOPageRecCount: DevKit.Controls.Integer;
			msdyn_WorkingHoursColor: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_FullyBookedColor: DevKit.Controls.WebResource;
			WebResource_NotBookedColor: DevKit.Controls.WebResource;
			WebResource_OverbookedColor: DevKit.Controls.WebResource;
			WebResource_PartiallyBookedColor: DevKit.Controls.WebResource;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Schedule Board Setting */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_scheduleboardsetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_scheduleboardsetting_Information */
		Body: DevKit.Formmsdyn_scheduleboardsetting_Information.Body;
		/** The Footer section of form msdyn_scheduleboardsetting_Information */
		Footer: DevKit.Formmsdyn_scheduleboardsetting_Information.Footer;
		/** The Navigation of form msdyn_scheduleboardsetting_Information */
		Navigation: DevKit.Formmsdyn_scheduleboardsetting_Information.Navigation;
		/** The Process of form msdyn_scheduleboardsetting_Information */
		Process: DevKit.Formmsdyn_scheduleboardsetting_Information.Process;
		/** The SidePanes of form msdyn_scheduleboardsetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_scheduleboardsettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_scheduleboardsettingApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_BookBasedOn: DevKit.WebApi.BooleanValue;
		msdyn_CustomTabName: DevKit.WebApi.StringValue;
		msdyn_CustomTabWebResource: DevKit.WebApi.StringValue;
		msdyn_FilterLayout: DevKit.WebApi.LookupValue;
		/** Storing filter values as Json string. */
		msdyn_FilterValues: DevKit.WebApi.StringValue;
		msdyn_FullyBookedColor: DevKit.WebApi.StringValue;
		msdyn_HideCancelled: DevKit.WebApi.BooleanValue;
		msdyn_IsPublic: DevKit.WebApi.BooleanValue;
		msdyn_IsSynchronizeResources: DevKit.WebApi.BooleanValue;
		msdyn_MapViewTabPlacement: DevKit.WebApi.BooleanValue;
		msdyn_NotBookedColor: DevKit.WebApi.StringValue;
		/** Tab index. */
		msdyn_OrderNumber: DevKit.WebApi.IntegerValue;
		msdyn_OrganizationalUnitTooltipsViewId: DevKit.WebApi.StringValue;
		msdyn_OrganizationalUnitViewId: DevKit.WebApi.StringValue;
		msdyn_OverbookedColor: DevKit.WebApi.StringValue;
		msdyn_PartiallyBookedColor: DevKit.WebApi.StringValue;
		msdyn_ResourceCellTemplate: DevKit.WebApi.LookupValue;
		msdyn_RetrieveResourcesQuery: DevKit.WebApi.LookupValue;
		msdyn_SAAvailableColor: DevKit.WebApi.StringValue;
		msdyn_SAAvailableIcon: DevKit.WebApi.StringValue;
		/** Is available icon inheriting from default setting. */
		msdyn_SAAvailableIconDefault: DevKit.WebApi.BooleanValue;
		msdyn_SAPartiallyAvailableColor: DevKit.WebApi.StringValue;
		msdyn_SAPartiallyAvailableIcon: DevKit.WebApi.StringValue;
		/** Is partially available icon inheriting from default setting. */
		msdyn_SAPartiallyAvailableIconDefault: DevKit.WebApi.BooleanValue;
		msdyn_SAUnavailableColor: DevKit.WebApi.StringValue;
		msdyn_SAUnavailableIcon: DevKit.WebApi.StringValue;
		/** Is unavailable icon inheriting from default setting. */
		msdyn_SAUnavailableIconDefault: DevKit.WebApi.BooleanValue;
		/** Shows the entity instances. */
		msdyn_scheduleboardsettingId: DevKit.WebApi.GuidValue;
		msdyn_SchedulerAlertsView: DevKit.WebApi.StringValue;
		msdyn_SchedulerBusinessUnitDetailsView: DevKit.WebApi.StringValue;
		msdyn_SchedulerBusinessUnitTooltipView: DevKit.WebApi.StringValue;
		msdyn_SchedulerCoreDetailsView: DevKit.WebApi.StringValue;
		msdyn_SchedulerCoreSlotTextTemplate: DevKit.WebApi.StringValue;
		msdyn_SchedulerCoreTooltipView: DevKit.WebApi.StringValue;
		msdyn_SchedulerFieldServiceDetailsView: DevKit.WebApi.StringValue;
		msdyn_SchedulerFieldServiceSlotTextTemplate: DevKit.WebApi.StringValue;
		msdyn_SchedulerFieldServiceTooltipView: DevKit.WebApi.StringValue;
		msdyn_SchedulerResourceDetailsView: DevKit.WebApi.StringValue;
		msdyn_SchedulerResourceTooltipView: DevKit.WebApi.StringValue;
		/** Shows the settings as a JSON string. */
		msdyn_Settings: DevKit.WebApi.StringValue;
		/** Field is used to determine if Schedule Board Tab are Private, Public or Shareable */
		msdyn_ShareType: DevKit.WebApi.OptionSetValue;
		/** Enter the tab name. */
		msdyn_TabName: DevKit.WebApi.StringValue;
		msdyn_UnscheduledRequirementsViewId: DevKit.WebApi.StringValue;
		msdyn_UnscheduledViewId: DevKit.WebApi.StringValue;
		/** Shows the number of records to be displayed per page in 'Resource Requirement' section. */
		msdyn_UnscheduledWOPageRecCount: DevKit.WebApi.IntegerValue;
		msdyn_UnscheduledWOTooltipsViewId: DevKit.WebApi.StringValue;
		msdyn_WorkingHoursColor: DevKit.WebApi.StringValue;
		/** Shows the date and time that the record was migrated. */
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
		/** Status of the Schedule Board Setting */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Schedule Board Setting */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_scheduleboardsetting {
		enum msdyn_ShareType {
			/** 192350000 */
			Everyone,
			/** 192350001 */
			Just_me,
			/** 192350002 */
			Specific_people,
			/** 192350003 */
			System
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